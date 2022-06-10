import Image from "next/image";
import Link from "next/link";
import utilStyles from "@/styles/utils.module.css";
import { name, siteTitle } from "@/components/layout";

export default function Navbar() {
  return (
    <div className="h-20 w-1/4 flex items-center justify-center flex-col backdrop-blur-sm z-10 fixed saturate-100 bg-red-300/30">
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full"
            height={48}
            width={48}
            alt={name}
          />
        </a>
      </Link>
      <h2 className="font-custom text-base">
        <Link href="/">
          <a className={utilStyles.colorInherit}>{name}</a>
        </Link>
      </h2>
    </div>
  );
}
