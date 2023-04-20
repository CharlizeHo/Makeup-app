import React from "react";

const benefits = [
  {
    title: "Delivery",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus excepturi",
    icon: <i className="fa-solid fa-truck"></i>,
  },
  {
    title: "Products",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    icon: <i className="fa-solid fa-box"></i>,
  },
  {
    title: "Payments",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempor",
    icon: <i className="fa-solid fa-money-bill-wave"></i>,
  },
];

const Benefits = () => {
  return (
    <div>
      {/* Container */}
      <div className="flex flex-col md:flex-row justify-between mx-8 mb-20 px-16">
        {/* Layout */}
        {benefits.map((item) => {
          return (
            <div className="flex gap-4">
              <div>
                {/* icon */}
                {item.icon}
              </div>
              <div className="w-[250px]">
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-xs">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
