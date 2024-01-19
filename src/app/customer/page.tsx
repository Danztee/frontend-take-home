import DataEntryPage from "@/components/DataEntry";
import Link from "next/link";

export default function Customer() {
  return (
    <main className="p-4">
      <Link
        href="/customer/gallery"
        className="flex justify-end hover:text-[var(--primary-color)]"
      >
        View All Images
      </Link>
      <DataEntryPage />
    </main>
  );
}
