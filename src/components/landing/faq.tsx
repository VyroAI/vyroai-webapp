"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Faq, faqs } from "@/components/landing/store/faq";

export default function FaqAccordance() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1
        className={
          "text-center text-black dark:text-white text-2xl font-semibold"
        }
      >
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <FaqItem key={index} faq={faq} />
      ))}
    </div>
  );
}
type FaqItemProps = {
  faq: Faq;
};

const FaqItem: React.FC<FaqItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { height: "auto" },
    closed: { height: 0 },
  };

  return (
    <div className="border-b border-gray-200 my-4">
      <div
        className="py-4 cursor-pointer px-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-lg dark:text-white ">{faq.question}</h3>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700  dark:text-gray-300">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
