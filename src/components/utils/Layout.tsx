import Twemoji from "react-twemoji";
import { Nav } from "@/components/navigation";
import { Seo } from "@/components/utils";
import { useEffect, useState, useRef, useMemo } from "react";
import { throttle } from "lodash";
import { useRouter } from "next/router";

export interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  siteTitle?: string;
  tags?: string;
  category?: string;
}

export default function Layout({
  children,
  home,
  siteTitle,
  tags,
  category,
}: LayoutProps) {
  const router = useRouter();
  const [navShow, setNavShow] = useState(false);
  const beforeScrollY = useRef(0);
  const scrollSensor = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = globalThis.scrollY;
        if (currentScrollY > beforeScrollY.current && currentScrollY > 60) {
          setNavShow(true);
          console.log("스크롤 내려가욧 👇🏼", currentScrollY);
        } else {
          setNavShow(false);
          console.log("스크롤 올라가욧 👆🏻", currentScrollY);
        }
        beforeScrollY.current = currentScrollY;
      }, 300),
    [],
  );

  useEffect(() => {
    globalThis.addEventListener("scroll", scrollSensor);
    return () => globalThis.removeEventListener("scroll", scrollSensor);
  }, [scrollSensor]);

  return (
    <div
      className={"h-auto min-h-content w-full dark:bg-zinc-900/90 dark:text-slate-200/80"}
    >
      <div
        className={`container mx-auto ${
          home
            ? "max-w-4xl"
            : tags === "일기" || category === "reading"
            ? "max-w-xl"
            : "max-w-2xl"
        }`}
      >
        <header>
          <Seo siteTitle={siteTitle} />
          <Nav navShow={navShow} />
        </header>

        <section className="pt-10">
          <Twemoji
            options={{
              className:
                "inline m-px md:w-5 md:h-5 sm:h-4 sm:w-4 align-text-17 cursor-fancy",
            }}
          >
            <article>{children}</article>
            {!home && (
              <footer className="mt-16 ml-3 pb-20 text-base">
                <a onClick={() => router.back()} className="no-underline">
                  ← Previous
                </a>
              </footer>
            )}
          </Twemoji>
        </section>
      </div>
    </div>
  );
}
