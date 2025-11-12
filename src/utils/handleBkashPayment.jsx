export const handleBkashPayment = async (orderId, totalAmount, user_id) => {
  try {
    // Step 1: Get or refresh token automatically
    const tokenRes = await fetch(
      `${import.meta.env.VITE_API}/payment/get_token.php`
    );
    const tokenData = await tokenRes.json();
    const id_token = tokenData.id_token;
    // Step 2: Create payment
    const createRes = await fetch(
      `${import.meta.env.VITE_API}/payment/create_payment.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_token,
          amount: totalAmount.toString(),
          order_id: orderId.toString(),
          user_id: user_id,
        }),
      }
    );
    const createData = await createRes.json();
    if (createData.data.bkashURL) {
      window.location.href = createData.data.bkashURL; // Redirect to bKash
    } else {
      // alert("Error creating payment: " + JSON.stringify(createData));
      console.log("Error creating payment: " + JSON.stringify(createData));
    }
  } catch (err) {
    console.log("Error: " + err);
  }
};
