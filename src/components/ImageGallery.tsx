"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ImageGallery: React.FC = () => {
  const [imageList, setImageList] = useState<string[]>([]);

  useEffect(() => {
    fetchImageList();
  }, []);

  const fetchImageList = async () => {
    // try {
    //   // Simulate API call to get the list of images
    //   const response = await axios.get("/api/get-all-images");
    //   setImageList(response.data);
    // } catch (error) {
    //   console.error("Error fetching image list:", error);
    // }
  };

  return (
    <div className="p-4">
      <section>
        <div className="container lg:w-[800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {imageList.map((imageUrl, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="max-w-full h-auto rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
