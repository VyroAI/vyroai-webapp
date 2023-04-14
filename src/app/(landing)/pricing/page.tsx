import React from "react";

import PricingCard from "@/components/landing/pricing/pricing";

const PricingPage = () => {
  return (
    <div className="min-h-screen py-16 mt-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">
          Pricing
        </h1>
        <PricingCard></PricingCard>
      </div>
    </div>
  );
};

export default PricingPage;
