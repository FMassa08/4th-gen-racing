import type { Metadata } from "next";
import { DriverPage } from "../../../components/driver-page";

export const metadata: Metadata = {
  title: "Adriano Massa",
  description: "Adriano Massa, origin of the Massa racing dynasty and the birth of the Number 6 family symbol."
};

export default function AdrianoPage() {
  return <DriverPage slug="adriano" />;
}
