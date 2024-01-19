"use client";
import React, { useState } from "react";
import axios from "axios";

const UploadImage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
  };

  const handleUploadImage = async () => {
    // if (image) {
    //   console.log("Uploading image...", image);
    //   try {
    //     const response = await axios.post("/api/upload-image", { image });
    //     console.log("Image uploaded successfully:", response.data);
    //   } catch (error) {
    //     console.error("Error uploading image:", error);
    //   }
    // }
  };

  return (
    <section>
      <div className="container lg:w-[800px] mx-auto my-10">
        <h3 className="text-center font-bold text-xl lg:text-2xl mb-10">
          Upload
        </h3>

        <div className="flex flex-col gap-5">
          <label className="text-[#303439] text-sm">
            Upload Image:
            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
              id="upload-image-input"
              accept="image/png, image/jpeg"
            />
            <label
              htmlFor="upload-image-input"
              className="mt-2 cursor-pointer outline-none border border-dashed border-[#B1B5C3] rounded-md bg-transparent p-8 py-20 w-full flex items-center justify-center hover:border-[var(--primary-color)]"
            >
              Choose a file
            </label>
          </label>
          <button
            onClick={handleUploadImage}
            className="rounded-md bg-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white p-2 px-6 text-white opacity-95 outline-none border-none w-[100%] h-[2.5rem] mt-4 hover:opacity-80"
          >
            Upload Image
          </button>
        </div>
      </div>
    </section>
  );
};

export default UploadImage;
