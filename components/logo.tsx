import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/font.woff2",
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center gap-x-2 transition hover:opacity-75 md:flex">
        <Image src="/logo.svg" alt="logo" height={30} width={30} />
        <p
          className={cn("pb-1 text-lg text-neutral-700", headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};

export default Logo;
