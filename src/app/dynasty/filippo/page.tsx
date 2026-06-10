import type { Metadata } from "next";
import { DriverPage } from "../../../components/driver-page";

export const metadata: Metadata = {
  title: "Filippo Massa",
  description:
    "Filippo Massa, fourth generation of the Massa racing dynasty, developing across open-wheel and closed-wheel racing."
};

export default function FilippoDynastyPage() {
  return <DriverPage slug="filippo" />;
}
