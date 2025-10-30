import { FaXmark } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useLang from "../../../hooks/useLang";
import { useEffect, useState } from "react";
import useUser from "../../../hooks/useUser";

const SingleCartItem = ({ cartItem, rawTotalProducts, setChangeState }) => {
  const { user } = useUser();
  const { isBangla } = useLang();
  const { cartItems, setCartItems } = useCart();
  const [availableIds, setAvailableIds] = useState([]);
  const removeFromCart = (id) => {
    setChangeState((prev) => prev + 1);
    const multiProducts = cartItems.filter((item) => item.product_id == id);
    const finalFilter = cartItems.filter((item) => item.product_id !== id);
    if (multiProducts.length > 0) {
      multiProducts.pop();
      setCartItems([...finalFilter, ...multiProducts]);
    } else {
      setCartItems(finalFilter);
    }
  };

  const addOneMore = (item) => {
    setChangeState((prev) => prev + 1);
    setCartItems((prev) => [
      ...prev,
      {
        ...item,
        id: cartItems.length + 1 * Math.random(),
        paymentType: "",
        payableAmount: 0,
        discountAmount: 0,
        dueAmount: 0,
      },
    ]);
  };

  const handleSelectedId = (finderId, selectedId) => {
    setChangeState((prev) => prev + 1);
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === finderId ? { ...item, selectedId } : item
      )
    );
  };

  const handleSelectedType = (finderId, selectedType) => {
    setChangeState((prev) => prev + 1);
    if (selectedType === "cash") {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === finderId
            ? {
                ...item,
                paymentType: selectedType,
                payableAmount: item.price,
                dueAmount: 0,
              }
            : item
        )
      );
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === finderId
            ? {
                ...item,
                paymentType: selectedType,
                payableAmount: item.price / 2,
                dueAmount: item.price / 2,
                discountAmount: 0,
              }
            : item
        )
      );
    }
  };

  const handleDiscount = (finderId, discountAmount) => {
    setChangeState((prev) => prev + 1);
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === finderId
          ? {
              ...item,
              payableAmount: Math.round(
                item.price - (item.price * parseInt(discountAmount)) / 100
              ),
              discountAmount: Math.round(
                (item.price * parseInt(discountAmount)) / 100
              ),
            }
          : item
      )
    );
  };
  //fetch available product ids from database
  useEffect(() => {
    try {
      fetch(
        `${
          import.meta.env.VITE_API
        }/all_products_ids_by_sales_point.php?sales_point_id=${
          user.sales_point_id
        }&product_id=${cartItem.product_id}`,
        { credentials: "include" }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setAvailableIds(data?.data);
          } else {
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }, [user, cartItem]);
  return (
    <tr>
      <td>
        <img
          src={`${import.meta.env.VITE_API_MAIN}/${cartItem?.product_image}`}
          alt={cartItem?.product_name}
          style={{ width: "60px" }}
        />
      </td>
      <td>৳ {cartItem?.price}</td>
      <td>
        <select
          className="productIdSelect"
          onChange={(e) => handleSelectedId(cartItem?.id, e.target.value)}
          defaultValue=""
        >
          <option value="" hidden>
            {isBangla ? "পণ্যের আইডি বাছুন" : "Select Product Id"}
          </option>
          {availableIds &&
            availableIds?.length > 0 &&
            availableIds?.map((id, index) => (
              <option key={index} value={id}>
                {id}
              </option>
            ))}
        </select>
      </td>
      <td>
        <select
          className="productIdSelect"
          onChange={(e) => handleSelectedType(cartItem?.id, e.target.value)}
          defaultValue={cartItem?.paymentType}
        >
          <option value="" hidden>
            {isBangla ? "পেমেন্টের ধরন বাছুন" : "Select Payment Type"}
          </option>
          <option value="cash">{isBangla ? "ক্যাশ" : "Cash"}</option>
          {rawTotalProducts > 1500 && (
            <option value="installment">
              {isBangla ? "কিস্তি" : "Installment"}
            </option>
          )}
        </select>
        {/* discount */}
        {cartItem?.paymentType === "cash" && (
          <select
            className="productIdSelect"
            onChange={(e) => handleDiscount(cartItem?.id, e.target.value)}
            defaultValue={cartItem?.paymentType}
          >
            <option value="0">0%</option>
            <option value="1">1%</option>
            <option value="2">2%</option>
            <option value="3">3%</option>
            <option value="4">4%</option>
            <option value="5">5%</option>
          </select>
        )}
      </td>
      <td>{cartItem?.discountAmount || 0}</td>
      <td>{cartItem?.payableAmount || 0}</td>
      <td>{cartItem?.dueAmount || 0}</td>
      <td>
        <span className="actionTd">
          <button onClick={() => addOneMore(cartItem)} className="btnSmall">
            {isBangla ? "যোগ করুন+" : "Add+"}
          </button>
          <button
            onClick={() => removeFromCart(cartItem?.product_id)}
            className="deleteCartButton"
          >
            <FaXmark size={16} />
          </button>
        </span>
      </td>
    </tr>
  );
};
export default SingleCartItem;
