import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="p-4">
      <Link href="/customer/" className="hover:text-[var(--primary-color)]">
        Back
      </Link>

      <h3 className="text-center font-bold text-xl lg:text-2xl my-5 mt-20">
        Image Gallery
      </h3>

      <ImageGallery />
    </main>
  );
};

export default page;
