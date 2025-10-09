import React from "react";
import "./Footer.css";
import { Link } from "react-router";
import {
  FaEnvelope,
  FaFacebook,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import useLang from "../../hooks/useLang";
const Footer = () => {
  const { isBangla } = useLang();
  return (
    // Footer
    <div id="footer" className="footer-bg">
      {/* main footer */}
      <div className="footer-main">
        {/* footer part 1 */}
        <div className="tech">
          <h3 style={{ fontSize: "24px" }}>
            {isBangla
              ? "ন্যানো-টেক প্রডাকশন টেকনোলজি"
              : "Nano-Tech Production Technology"}
          </h3>
          <div className="customerService">
            <h6>
              {isBangla ? "গ্রাহক সেবা হেল্পলাইন" : "Customer service helpline"}
            </h6>
            <div>
              <p>
                {isBangla
                  ? "যোগাযোগ করুনঃ ১৬২৬৭ নম্বরে (চার্জ প্রযোজ্য)"
                  : "Call us at 16267 (Charge Applicable)"}
              </p>
              <p>
                {isBangla
                  ? "অথবা ০৮ ০০০১৬২৬৭ (টোল ফ্রি)"
                  : "or 08 000016267 (Toll Free)"}
              </p>
              <p>
                {isBangla
                  ? "যোগাযোগের সময়ঃ ৭:০০ টা থেকে রাত ১১:০০ টা পর্যন্ত"
                  : "We are available from 07:00 am to 11:00 pm"}
              </p>
            </div>
          </div>
          <div className="mediaContainer">
            <h6>
              {isBangla ? "আমাদের সাথে যুক্ত থাকুন" : "Stay in touch with us"}
            </h6>
            <div className="socialMedias">
              <a href="#" target="_blank">
                <FaFacebook size={19} />
              </a>
              <a href="#" target="_blank">
                <FaWhatsapp size={19} />
              </a>
              <a href="tel:+880 1329636890" target="_blank">
                <FaPhone size={19} />
              </a>
            </div>
          </div>
        </div>
        {/* footer part 1 */}
        {/* footer part 2 */}
        <div>
          <h3 className="footer-title">
            {isBangla ? "ন্যানো-টেক সম্পর্কে" : "About Nano-Tech"}
          </h3>
          <ul className="footer-menu">
            <li>
              <Link>{isBangla ? "হোম" : "Home"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "সম্পর্কে" : "About Us"}</Link>
            </li>

            <li>
              <Link>{isBangla ? "আমরা কেন" : "Why Us"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "যোগাযোগ" : "Contact Us"}</Link>
            </li>
            <li>
              <Link>
                {isBangla ? "পণ্য সার্টিফিকেশন" : " Product Certification"}
              </Link>
            </li>
            <li>
              <Link>{isBangla ? "পয়েন্টস তালিকা" : "Points List"}</Link>
            </li>
          </ul>
        </div>
        {/* footer part 2 */}
        {/* footer part 3 */}
        <div>
          <h3 className="footer-title">
            {isBangla ? "হেল্প ও ইনফরমেশন" : "Help & Information"}
          </h3>
          <ul className="footer-menu">
            <li>
              <Link>{isBangla ? "পেমেন্ট পলিসি" : "Payment Policy"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "ডেলিভারি পলিসি" : "Delivery Policy"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "রিওয়ার্ড পলিসি" : "Reward Policy"}</Link>
            </li>
            <li>
              <Link>
                {isBangla
                  ? "রিজেক্ট ও রিটার্ন পলিসি"
                  : "Reject And Return Policy"}
              </Link>
            </li>
            <li>
              <Link>{isBangla ? "প্রাইভেসি পলিসি" : "Privacy Policy"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "কিভাবে কিনবেন" : "How to Buy"}</Link>
            </li>
            <li>
              <Link>
                {isBangla ? "সর্বাধিক জিজ্ঞাসিত প্রশ্নাবলী" : "FAQ Offer FAQ"}
              </Link>
            </li>
          </ul>
        </div>
        {/* footer part 3 */}
        {/* footer part 3 */}
        <div>
          <h3 className="footer-title">
            {isBangla ? "শীর্ষস্থানীয় ক্যাটাগরিসমূহ" : "Top Categories"}
          </h3>
          <ul className="footer-menu">
            <li>
              <Link>
                {isBangla ? "রেফ্রিজারেটর ও ফ্রিজার" : "Refrigerator & Freezer"}
              </Link>
            </li>
            <li>
              <Link>{isBangla ? "এ.সি" : "Air Conditioner"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "টেলিভিশন" : "Television"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "কম্পিউটার" : "Computer"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "হোম এপ্লায়েন্স" : "Home Appliances"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "ই-বাইক" : "E-Bike"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "ওয়াশিং মেশিন" : "Washing Machine"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "কিচেন এপ্লায়েন্স" : "Kitchen Appliance"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "ফিচারড পণ্য" : "Featured Products"}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">
            {isBangla ? "আমাদের ব্রান্ড" : "Our Brands"}
          </h3>
          <ul className="footer-menu">
            <li>
              <Link>{isBangla ? "ন্যানো-টেক" : "Nano-Tech"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "সেইফ" : "Safe"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "এ.সি.সি" : "ACC"}</Link>
            </li>
          </ul>
        </div>
        {/* footer part 4 */}
        {/* <div className="contact">
          <h3 className="footer-title">{isBangla ? "ঠিকানা" : "Address"}</h3>
          <div className="address">
            <p>
              <FaLocationDot />{" "}
              {isBangla ? "লেভেল #১৩, এমটি বিল্ডিং" : "Level #13, MT Building"}
            </p>
            <p>
              {" "}
              {isBangla
                ? "যশোর সফটওয়্যার টেকনোলোজি পার্ক, যশোর"
                : "Jashore Software Technology Park, Jashore"}{" "}
            </p>
            <p>
              <FaEnvelope />
              <a href="mailto:contact@nano-techbd.com">
                contact@nano-techbd.com
              </a>
            </p>
            <p>
              <FaPhone /> {isBangla ? "+৮৮০ ১৩২৯৬৩৬৮৯০" : "+880 1329636890"}
            </p>
          </div>
        </div> */}
        {/* footer part 4 */}
      </div>
      {/* main footer */}
      <hr className="hr-style" />
      {/* Down footer */}
      <div className="copyright">
        <div className="paymentMethod">
          <h6>{isBangla ? "পেমেন্ট ম্যাথড" : "Payment Method"}</h6>
          <div className="paymentImages">
            <div>
              <img src="/bkash.png" alt="bkash" />
            </div>
            <div>
              <img src="/nagad.png" alt="nagad" />
            </div>

            <div>
              <img src="/visa.png" alt="visa" />
            </div>

            <div>
              <img src="/mastercard.png" alt="mastercard" />
            </div>
          </div>{" "}
        </div>
        <small>
          &copy;
          {isBangla
            ? "২০২৫ ন্যানো-টেক প্রডাকশন টেকনোলজি সর্বস্বত্ব সংরক্ষিত।"
            : "2025 Nano-Tech Production Technology. All rights reserved."}
        </small>
      </div>
      {/* Down footer */}
    </div>
    // Footer
  );
};

export default Footer;
