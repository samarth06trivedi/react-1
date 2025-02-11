const IncreasePlan = () => {
  const plans = [
    {
      name: "Free",
      price: "$0/month",
      benefits: [
        "Basic Analytics",
        "Limited Storage",
        "Community Support",
        "Single User Access",
      ],
    },
    {
      name: "Standard",
      price: "$29/month",
      benefits: [
        "Advanced Analytics",
        "50GB Storage",
        "Priority Support",
        "Multi-User Access",
      ],
    },
    {
      name: "Premium",
      price: "$99/month",
      benefits: [
        "Full Analytics Suite",
        "Unlimited Storage",
        "24/7 Support",
        "Custom Integrations",
      ],
    },
  ];

  return (
    <>
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Increase Your Plan</h2>
        
        {/* Fixing 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="border rounded-lg shadow-md p-6 bg-white text-center">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.price}</p>
              <ul className="text-gray-700 space-y-2 mb-4">
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center justify-center">
                    ✅ {benefit}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IncreasePlan;
