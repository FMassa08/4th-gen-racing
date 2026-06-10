import type { Metadata } from "next";
import { DriverPage } from "../../../components/driver-page";

export const metadata: Metadata = {
  title: "Emanuele Ademaro Massa",
  description: "Emanuele Ademaro Massa, the third generation of the Massa racing dynasty."
};

export default function EmanuelePage() {
  return <DriverPage slug="emanuele" />;
}
