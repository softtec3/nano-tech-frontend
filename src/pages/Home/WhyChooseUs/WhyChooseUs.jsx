import React, { useState } from "react";
import "./WhyChooseUs.css";
import { FaEye, FaXmark } from "react-icons/fa6";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaTools,
  FaCreditCard,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import useLang from "../../../hooks/useLang";
const WhyChooseUs = () => {
  const { isBangla } = useLang();
  const [content, setContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const points = [
    {
      icon: <FaShieldAlt size={20} style={{ color: "#0ea5e9" }} />,
      title: isBangla ? "মানসম্মত পন্যের নিশ্চয়তা" : "Quality product",
      description: isBangla
        ? "আন্তর্জাতিক মান অনুযায়ী পরীক্ষিত পণ্য, যা দীর্ঘদিন ব্যবহার উপযোগীএবং বিশ্বস্ত।"
        : "Products tested according to international standards, which are long-lasting and reliable.",
      color: "#DBF4FF",
    },
    {
      icon: <FaCheckCircle size={20} style={{ color: "#10b981" }} />,
      title: isBangla ? "টেকসই ও নির্ভরযোগ্য" : "Durable and reliable",
      description: isBangla
        ? "ন্যানো-টেক এর হোম অ্যাপ্লায়েন্স গুলো টেকসই, শক্তপোক্ত এবং পরিবারের জন্য নিরাপদ।"
        : "Nano-Tech's home appliances are durable, sturdy, and safe for the family.",
      color: "#D1FAE5",
    },
    {
      icon: <FaTools size={20} style={{ color: "#f59e0b" }} />,
      title: isBangla ? "দ্রুত ওয়ারেন্টি সাপোর্ট" : "Fast warranty support",
      description: isBangla
        ? "ওয়ারেন্টির আওতাভুক্ত যেকোনো সমস্যায় সর্বচ্চ ৭ কর্মদিবসের মধ্যে সার্ভিসের নিশ্চয়তা।"
        : "Service is guaranteed within a maximum of 7 working days for any issue covered by the warranty.",
      color: "#FEF3C7",
    },
    {
      icon: <FaEye size={20} style={{ color: "#6366f1" }} />,
      title: isBangla ? "আকর্ষনীয় ডিজাইন" : "Attractive design",
      description: isBangla
        ? "আধুনিক ও স্টাইলিশ ডিজাইনে তৈরি আমাদের পণ্যসমূহ আপনার ঘরের শোভা বাড়াবে এবং প্রথম দেখাতেই নজর কাড়বে।"
        : "Our products, made with modern and stylish designs, will enhance the beauty of your home and will catch the eye at first sight.",
      color: "#E0E7FF",
    },
    {
      icon: <FaCreditCard size={20} style={{ color: "#22c55e" }} />,
      title: isBangla ? "সহজ কিস্তি সুবিধা" : "Easy installment facility",
      description: isBangla
        ? "ব্যাংক ছাড়াই ক্রেতারা ৩ থেকে ৬ মাসের সহজ কিস্তিতে পণ্য কিনতে পারবেন।"
        : "Without a bank, buyers can purchase products in easy installments of 3 to 6 months.",
      color: "#DCFCE7",
    },
    {
      icon: <FaHandHoldingUsd size={20} style={{ color: "#a855f7" }} />,
      title: isBangla ? "সাশ্রয়ী মূল্য ও অফার" : "Affordable prices and offers",
      description: isBangla
        ? "ন্যানো-টেক আপনাকে দিচ্ছে প্রতিযোগিতামূলক মূল্য এবং নগদ ক্রয়ে আকর্ষণীয় ডিসকাউন্ট অফার।"
        : "Nano-Tech offers you competitive prices and attractive discount offers on cash purchases.",
      color: "#F3E8FF",
    },
  ];
  return (
    <section id="whyChooseUs">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {points.map((point, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => {
                setContent(point.description);
                setIsModalOpen(true);
              }}
              key={index}
              className="chooseIcon"
            >
              {point.icon}
              <span>{point.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {points.map((point, index) => (
        <div
          onClick={() => {
            setContent(point.description);
            setIsModalOpen(true);
          }}
          key={index}
          className="chooseIcon"
        >
          {point.icon}
          <span>{point.title}</span>
        </div>
      ))} */}
      {/* modal */}
      <div id="modal" style={{ display: isModalOpen ? "flex" : "none" }}>
        <div className="modalContent">
          <span
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="cross"
          >
            <FaXmark size={20} />
          </span>
          <div className="modalDescription">{content}</div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
