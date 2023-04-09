import React from "react";

const plans = [
  {
    title: "Free",
    price: "9.99",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Pro",
    price: "19.99",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    title: "Enterprise",
    price: "49.99",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">
          Pricing
        </h1>
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-extrabold text-gray-900">
                {plan.title}
              </h2>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-base font-medium text-gray-500">/mo</span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-base text-gray-500">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
