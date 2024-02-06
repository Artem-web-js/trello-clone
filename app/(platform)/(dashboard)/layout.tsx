import { PropsWithChildren } from "react";
import Navbar from "@/app/(platform)/(dashboard)/_components/Navbar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}
