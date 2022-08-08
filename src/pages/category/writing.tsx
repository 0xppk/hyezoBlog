import { getSortedPostsData } from "@/lib/posts";
import { PostsProps } from "..";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Twemoji from "react-twemoji";
import { Layout, Date } from "@/components";
import { siteTitle, name } from "@/components/Layout";
import { RoughNotation } from "react-rough-notation";

export default function Writing({ allPostsData }: PostsProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Twemoji
        options={{ className: "inline m-px w-5 h-5 align-text-20 cursor-default" }}>
        <section className="mx-2 flex p-10">
          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full"
            height={80}
            width={80}
            alt={name}
          />
          <div className="ml-8 flex flex-col justify-center space-y-1">
            <h1 className="text-lg">{name}</h1>
            <h4 className="text-md">갸륵하도다</h4>
          </div>
        </section>
        <section className="mx-10 mb-28 flex items-center">
          <p className="leading-7">
            안녕하세요. 처절한 코딩 생존기를 담은 사이트입니다.
            <br />
            코딩과 일기가 뒤죽박죽 섞여 있어요 😵‍💫
            <br />
          </p>
        </section>

        <section className="mx-10 md:mx-0">
          <RoughNotation
            show={true}
            type="bracket"
            strokeWidth={3}
            brackets={["left", "right"]}
            color="tomato"
            animationDuration={1200}>
            <span className="pl-2 text-2xl">Writing&nbsp;</span>
          </RoughNotation>

          <div className="mt-8 pb-10 lg:pb-12">
            {allPostsData.map(({ id, date, title }) => (
              <div
                className="my-5 rounded-3xl border border-zinc-600/10 bg-white bg-opacity-[.05] p-5 filter backdrop-blur"
                key={id}>
                <div className="flex flex-col">
                  <Link href={`/posts/${id}`}>
                    <a className="text-lg">{title}</a>
                  </Link>
                  <small className="mt-2 text-base">
                    <Date dateString={date} />
                  </small>
                </div>
                {/* <div className="h-20 w-44 basis-1/3 rounded-lg">
                  <Image priority src={img} width={20} height={10} layout="responsive" />
                </div> */}
              </div>
            ))}
            {/* <div>
              <NextPage allPostsData={allPostsData} />
            </div> */}
          </div>
        </section>
      </Twemoji>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData("writing");

  return {
    props: {
      allPostsData,
    },
  };
}