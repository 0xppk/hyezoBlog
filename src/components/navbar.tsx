import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { name } from "@/components/layout";
import useSound from "use-sound";
import { VscGithub, VscGithubAlt, VscGithubInverted } from "react-icons/vsc";
import { FaGithubSquare } from "react-icons/fa";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed top-px z-10 flex h-12 w-2/3 flex-row items-center justify-center space-x-16 rounded-lg bg-neutral-200/30 saturate-100 backdrop-blur-sm dark:bg-zinc-600/30 md:max-w-sm">
      <Link href="https://github.com/10004ok">
        <a className="inline-flex justify-center" target="_blank" rel="noreferrer">
          <button>
            <VscGithubInverted className="h-6 grow hover:animate-spin" />
          </button>
        </a>
      </Link>
      <Link href="/">
        <a className="mt-1">
          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full"
            height={40}
            width={40}
            alt={name}
          />
        </a>
      </Link>
      <button>
        <MdDarkMode
          className="h-6 hover:animate-spin"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />
      </button>

      {/* <h2 className="font-custom text-base">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </h2> */}
    </div>
  );
}
