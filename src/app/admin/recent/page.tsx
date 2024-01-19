import RecentInputs from "@/components/RecentInputs";
import Link from "next/link";

const Page = () => {
  return (
    <main className="p-4">
      <Link href="/admin" className="hover:text-[var(--primary-color)]">
        Back
      </Link>

      <h3 className="text-center font-bold text-xl lg:text-2xl my-5 mt-20">
        Recent Inputs
      </h3>

      <RecentInputs />
    </main>
  );
};

export default Page;
