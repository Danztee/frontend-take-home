"use client";

import React, { useState } from "react";
import axios from "axios";

const DataEntry: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    numberOfUsers: 0,
    numberOfProducts: 0,
    percentage: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // if (name === "numberOfUsers" || name === "numberOfProducts") {
    //   calculatePercentage();
    // }
  };

  const calculatePercentage = () => {
    const { numberOfUsers, numberOfProducts } = formData;
    let percentage = (numberOfUsers / numberOfProducts) * 100 || 0;
    percentage = +percentage.toFixed(2);
    setFormData({
      ...formData,
      percentage,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    calculatePercentage();

    // try {
    //   const response = await axios.post("/api/submit-data", formData);
    //   console.log("Data submitted successfully:", response.data);
    // } catch (error) {
    //   console.error("Error submitting data:", error);
    // }
  };

  return (
    <div className="p-4">
      <section className="lg:h-[calc(100vh_-_100px)] flex flex-col justify-center">
        <div className="container lg:w-[800px] mx-auto">
          <h3 className="text-center font-bold text-xl lg:text-2xl my-5">
            Data Entry
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-10">
              <aside className="flex flex-col gap-10">
                <label className="text-[#303439] text-sm">
                  Company Name:
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="mt-2 border w-full p-[0.6rem] outline-none border-[#B1B5C3] rounded-md bg-transparent"
                  />
                </label>
                <label className="text-[#303439] text-sm">
                  Number of Users:
                  <input
                    type="number"
                    name="numberOfUsers"
                    value={formData.numberOfUsers}
                    onChange={handleInputChange}
                    className="mt-2 border w-full p-[0.6rem] outline-none border-[#B1B5C3] rounded-md bg-transparent"
                  />
                </label>
              </aside>

              <aside className="flex flex-col gap-10">
                <label className="text-[#303439] text-sm">
                  Number of Products:
                  <input
                    type="number"
                    name="numberOfProducts"
                    value={formData.numberOfProducts}
                    onChange={handleInputChange}
                    className="mt-2 border w-full p-[0.6rem] outline-none border-[#B1B5C3] rounded-md bg-transparent"
                  />
                </label>
                <label className="text-[#303439] text-sm">
                  Percentage:
                  <input
                    type="text"
                    name="percentage"
                    value={formData.percentage}
                    readOnly
                    className="mt-2 border w-full p-[0.6rem] outline-none border-[#B1B5C3] rounded-md bg-transparent"
                  />
                </label>
              </aside>
            </div>

            <button
              type="submit"
              className="rounded-md bg-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white p-2 px-6 text-white opacity-95 outline-none border-none w-[100%] h-[2.5rem] mt-8 hover:opacity-80"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DataEntry;
