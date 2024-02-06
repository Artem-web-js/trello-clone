import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <div className="hidden items-center gap-x-2 transition hover:opacity-75 md:flex">
        <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        <p className="pb-1 text-lg font-semibold text-neutral-700">Taskify</p>
      </div>
    </Link>
  );
}
