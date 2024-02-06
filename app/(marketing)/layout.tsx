import { PropsWithChildren } from "react";
import Navbar from "@/app/(marketing)/_components/navbar";
import Footer from "@/app/(marketing)/_components/footer";

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="bg-slate-100 pb-20 pt-40">{children}</main>
      <Footer />
    </div>
  );
}
