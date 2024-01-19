import UploadImage from "@/components/UploadImage";
import Link from "next/link";

const Page = () => {
  return (
    <main className="p-4">
      <Link
        href="/admin/recent"
        className="flex justify-end hover:text-[var(--primary-color)]"
      >
        Recent Inputs
      </Link>

      <UploadImage />
    </main>
  );
};

export default Page;
