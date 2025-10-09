import React from "react";
import "./MiniBlog.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useLang from "../../../hooks/useLang";
const MiniBlog = () => {
  const { isBangla } = useLang();
  return (
    <section id="miniBlog">
      <SectionTitle title={isBangla ? "শীর্ষ গল্প সমূহ" : "Top Stories"} />
      <div className="infoContainer">
        <div className="infoContent">
          <h5>{isBangla ? "ন্যানো টেক" : "Nano Tech"}</h5>
          {isBangla ? (
            <p>
              ন্যানো টেক দেশের ওয়ালটন পণ্যের বৃহত্তম বিক্রয় ও বিতরণ
              নেটওয়ার্ক। ন্যানো টেক ২০০৩ সালে তাদের ব্যবসা শুরু করে। এরপর থেকে
              গ্রাহকদের মানসম্পন্ন পরিষেবা প্রদানের মাধ্যমে এটি দ্রুত বৃদ্ধি
              পেতে থাকে। আজ পর্যন্ত, ন্যানো টেক-এর সারা দেশে ৬৪২টিরও বেশি
              সুসজ্জিত এবং কমপ্লায়েন্স-ভিত্তিক বিক্রয় কেন্দ্র এবং ৮১টি পরিষেবা
              কেন্দ্র রয়েছে। বিশাল দেশীয় বাজারে দ্রুত বর্ধনশীল গ্রাহক চাহিদা
              মেটাতে আমরা অদূর ভবিষ্যতে আরও বিক্রয় কেন্দ্র এবং পরিষেবা কেন্দ্র
              স্থাপনের জন্য উন্মুখ। "waltonplaza.com.bd" ন্যানো টেকের জন্য একটি
              B2C প্ল্যাটফর্ম। এটি একটি অনলাইন খুচরা ব্যবস্থা যা বাংলাদেশের
              যেকোনো স্থান থেকে যে কেউ ওয়ালটনের তৈরি সমস্ত উপলব্ধ পণ্য কিনতে
              সক্ষম করে। "waltonplaza.com.bd" ২০১৯ সালে যাত্রা শুরু করে।
              "waltonplaza.com.bd" এর মূল শক্তি হল ৩০০০ টিরও বেশি ইলেকট্রনিক্স
              এবং বৈদ্যুতিক পণ্যের একটি নির্ভরযোগ্য উৎস। যে কেউ সহজেই
              "waltonplaza.com.bd" এর মাধ্যমে অর্ডার দিতে পারেন এবং অর্ডার করা
              পণ্য সংগ্রহের জন্য নিকটতম ডেলিভারি পয়েন্ট বেছে নিতে পারেন। এর
              পাশাপাশি, গ্রাহকদের সুবিধার্থে এটি সম্পূর্ণ নগদ অর্থে হোম ডেলিভারি
              ব্যবস্থারও সুযোগ করে দেয়। “waltonplaza.com.bd” এর মূল লক্ষ্য হল
              একটি বিশ্বস্ত ও নির্ভরযোগ্য অনলাইন প্ল্যাটফর্মে পরিণত হওয়া যার
              মাধ্যমে গ্রাহকরা ভালো গ্রাহক পরিষেবা, প্রতিযোগিতামূলক মূল্য এবং
              দ্রুততম ডেলিভারি পরিষেবা সহ আসল ওয়ালটন পণ্য কিনতে পারবেন।
            </p>
          ) : (
            <p>
              Nano Tech is the largest selling and distribution network for
              Walton products in the country. Nano Tech began its business in
              2003. From then on, it continued to grow rapidly by providing
              quality service to customers. As of today, Nano Tech has more than
              642 well-furnished and compliance-based sales outlets and 81
              service points all over the country. We look forward to setting up
              of more sales outlets & service points in near future to meet the
              rapidly increasing customer demand in the vast domestic market.
              “waltonplaza.com.bd” is a B2C platform for Nano Tech. It is an
              online retail system that enables anyone from anywhere in
              Bangladesh to purchase all available Walton manufactured products.
              “waltonplaza.com.bd” started its journey in 2019. The main
              strength of “waltonplaza.com.bd” is a reliable source of more than
              3000 electronics and electrical products. One can easily place an
              order through “waltonplaza.com.bd” & choose nearest delivery point
              to pick up the ordered products. Besides this, it also allows full
              cash on home delivery system for customer’s convenience. The main
              goal of “waltonplaza.com.bd” is to become a trustful & reliable
              online platform by which customers can buy genuine Walton products
              with good customer service, competitive prices & fastest delivery
              service ever.
            </p>
          )}
        </div>
        <div className="infoContent">
          <h5>{isBangla ? "পেমেন্ট সাপোর্ট" : "Payment Support"}</h5>
          {isBangla ? (
            <p>
              পণ্য পাওয়ার পর গ্রাহকরা ক্যাশ অন ডেলিভারি পদ্ধতিতে পেমেন্ট করতে
              পারবেন। এটি একটি নিরাপদ অনলাইন পেমেন্ট সিস্টেমও প্রদান করে যার
              মাধ্যমে গ্রাহকরা পণ্যের চার্জ এবং ডেলিভারি ফি নিজেরাই পরিশোধ করতে
              পারবেন। আমাদের নিরাপদ পেমেন্ট গেটওয়ে "ইন্টারন্যাশনাল ব্যাংক
              কার্ড" সমর্থন করে এবং গ্রাহকরা অর্ডার দিতে পারেন এবং আন্তর্জাতিক
              ব্যাংক কার্ডের মাধ্যমে সহজেই পেমেন্ট করতে পারেন এবং বাংলাদেশের
              যেকোনো স্থানে ডেলিভারি পেতে পারেন। পেমেন্ট সিস্টেমকে আরও সহজ এবং
              নির্ভরযোগ্য করার জন্য আমাদের MFS (মোবাইল ফাইন্যান্সিয়াল সার্ভিস)
              রয়েছে। আমরা বাংলাদেশের বিখ্যাত 32টি ব্যাংকের সাথে 12 মাস পর্যন্ত
              ব্যাংক ক্রেডিট কার্ডের মাধ্যমে EMI সুবিধাও অফার করি।
            </p>
          ) : (
            <p>
              Customers can pay by Cash on Delivery method after getting the
              product. It also allows a Secure Online Payment system by which
              customers can pay the charges of product & also delivery fees by
              their own. Our secure payment gateway also supports "International
              Bank Cards" & customers can place order and can pay by
              international bank cards easily & get the delivery anywhere in
              Bangladesh. We also have MFS (Mobile Financial Service) to make
              the payment system easier & more reliable. We also offer EMI
              facility by bank credit card for up to 12 months with renowned 32
              banks in Bangladesh.
            </p>
          )}
        </div>
        <div className="infoContent">
          <h5>{isBangla ? "কাস্টমার সাপোর্ট" : "Customer Support"}</h5>
          {isBangla ? (
            <p>
              আমাদের একটি দক্ষ গ্রাহক সহায়তা দলও রয়েছে। তারা সর্বদা গ্রাহকদের
              প্রশ্নের উত্তর দিতে এবং ন্যূনতম সময়ের মধ্যে সমাধান করতে প্রস্তুত।
              তাই, গ্রাহকরা সহজেই একটি সাধারণ ফোন কল বা সোশ্যাল মিডিয়া বার্তার
              মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন এবং আমাদের গ্রাহক সহায়তা
              দল একই সাথে আপনার প্রশ্নের উত্তর দেবে।
            </p>
          ) : (
            <p>
              We also have an efficient customer support team. They are always
              ready to serve customers by taking queries and solving them in a
              minimal time frame. So, customers can easily connect to us by a
              simple phone call or social media messages & our customer support
              team will reply to your query at the same time.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MiniBlog;
