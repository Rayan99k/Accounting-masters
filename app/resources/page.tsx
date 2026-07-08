import type { Metadata } from "next";
import ResourcesPage from "@/components/ResourcesPage";

export const metadata: Metadata = {
  title: "Tax Tips & Resources",
  description:
    "Plain-language articles on personal and corporate tax in Canada from Accounting Masters Group Inc.",
};

export default function Page() {
  return <ResourcesPage />;
}
