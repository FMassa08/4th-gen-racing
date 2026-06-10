import type { Metadata } from "next";
import { DriverPage } from "../../../components/driver-page";

export const metadata: Metadata = {
  title: "Ademaro Massa",
  description: "Ademaro Massa, the second generation of the Massa racing dynasty, Parabolica, Monza, and resilience."
};

export default function AdemaroPage() {
  return <DriverPage slug="ademaro" />;
}
