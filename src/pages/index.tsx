import Link from "next/link";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSortedPostsData } from "@/lib/posts";
import { Layout, MdxComponents, Pagination } from "@/components";
import useSound from "use-sound";
import { uniqBy } from "lodash";
import { FcWorkflow, FcDislike } from "react-icons/fc";
import { BsChevronDown } from "react-icons/bs";
export interface PostsProps {
  id: string;
  title: string;
  date: string;
  categories: string;
  tags: string;
  description: string;
  excerpt?: string;
  image: string;
}
interface TabsProps {
  selectedCategory: string | string[];
  i: number;
  // setXValue: Dispatch<SetStateAction<string>>;
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

const Profile = ({ initCategory }: { initCategory: boolean }) => {
  const { Note } = MdxComponents;
  return (
    <>
      <div className="flex flex-col place-items-center">
        <div>
          <section className="mx-2 mt-10 flex p-10">
            <Image
              priority
              src="/images/profile3.png"
              className="h-20 w-20 rounded-full ring-2 ring-blue-300/90 ring-offset-4 ring-offset-slate-600"
              height={80}
              width={80}
              alt="프로필"
            />
            <div className="ml-8 flex flex-col justify-center space-y-1">
              <p className="text-lg">츄륵</p>
              <p className="text-base">갸륵하도다</p>
            </div>
          </section>
          <section className="mx-10 flex items-center">
            <p className="font-content text-base leading-7">
              안녕하세요. 처절한 코딩 생존기를 담은 사이트입니다.
              <br />
              <Note
                show={initCategory}
                type="underline"
                color="orange"
                animationDuration={1000}
              >
                코딩과 일기
              </Note>
              가 뒤죽박죽 섞여 있어요 😵‍💫
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
const RecentPosts = ({ recentPosts }: { recentPosts: PostsProps[] }) => {
  const [isClick, setIsClick] = useState(false);
  const [animation, setAnimation] = useState(true);
  const Month = new Date().getMonth() + 1;

  useEffect(() => {
    setAnimation(!animation);
  }, [isClick]);
  useEffect(() => {
    if (localStorage.getItem("Monthly")) {
      const data = JSON.parse(localStorage.getItem("Monthly") as string).toggle;
      setIsClick(data);
    }
  }, []);

  return (
    <div className="mt-16 sm:mx-5 md:mx-10">
      <div
        onClick={() => {
          setIsClick(!isClick);
          localStorage.setItem("Monthly", JSON.stringify({ toggle: !isClick }));
        }}
        className="relative my-2 flex place-items-center justify-center bg-blue-800 py-1 text-md text-white"
      >
        <div className="grow text-center">{Month}月</div>
        <div className="absolute right-2">
          <BsChevronDown
            className={`transition ${animation ? "-rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>
      <div
        className={`grid gap-x-5 duration-1000 sm:grid-cols-1 md:grid-cols-2 ${
          animation ? "opacity-100" : "opacity-0"
        }`}
      >
        {isClick &&
          recentPosts.map(({ id, categories, title }) => {
            return (
              <div
                key={id}
                className={
                  "mb-2 flex flex-row justify-between border-slate-600/30 px-5 sm:border-y-0 sm:py-1 md:border-y md:py-3"
                }
              >
                <div>
                  {categories === "coding" ? (
                    <FcWorkflow className="h-5 w-5" />
                  ) : (
                    <FcDislike className="h-5 w-5" />
                  )}
                </div>
                <Link href={`/posts/${id}`}>
                  <a className="no-underline">{title}</a>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
const Tabs = ({ selectedCategory, i }: TabsProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push({ query: { category: selectedCategory } }, `/${selectedCategory}`);
    if (typeof selectedCategory === "string")
      localStorage.setItem("whichTab", selectedCategory);
  };

  return (
    <div onClick={onClick} className={"basis-1/3 no-underline"}>
      {selectedCategory}
    </div>
  );
};
const Posts = ({ tags }: Partial<PostsProps>) => {
  const [clickSound] = useSound("/sounds/tap.mp3", { volume: 0.6 });
  return (
    <div
      onMouseUp={() => clickSound()}
      className="word-tightest my-5 -ml-px h-52 border-x border-r-0 border-blue-800/20 px-2 font-content backdrop-blur"
    >
      <Link href={`/tags/${tags}`}>
        <a className="text-md no-underline">{tags}</a>
      </Link>
    </div>
  );
};

export default function Home({ allPostsData }: { allPostsData: PostsProps[] }) {
  // 카테고리 state
  const isCategory = useRouter().query.category;
  const [selectedData, setSelectedData] = useState<PostsProps[]>();
  const [initCategory, setInitCategory] = useState(false);
  const deleteOverlapCategories = uniqBy(allPostsData, "categories");
  // 페이지네이션 state
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(7);
  const offset = (page - 1) * limit;
  const thisMonth = String(new Date().getMonth() + 1).padStart(2, "0");
  const recentPosts = allPostsData.filter(({ date }) => {
    return date.substring(5, 7) === thisMonth;
  });

  useEffect(() => {
    const initData = allPostsData.filter(({ categories }) => {
      if (isCategory) return categories === isCategory;
      return categories === "coding";
    });
    const deleteOverlapTags = uniqBy(initData, "tags");
    setInitCategory(false);
    setSelectedData(deleteOverlapTags);
  }, [isCategory, allPostsData]);
  useEffect(() => {
    setInitCategory(true);
    setLimit(7);
    setPage(1);
  }, [selectedData]);

  return (
    <Layout home siteTitle="후니로그">
      <Profile initCategory={initCategory} />
      <RecentPosts recentPosts={recentPosts} />
      <section className="sm:mx-5 md:mx-10">
        {/* 카테고리 탭 */}
        <div className="my-3 flex text-center font-heading">
          {deleteOverlapCategories.map(({ categories, id }, i) => (
            <Tabs selectedCategory={categories} key={id} i={i} />
          ))}
        </div>
        {/* 태그 리스트 */}
        <article className="flex flex-row border-y border-blue-800 py-px backdrop-blur">
          <div className="flex basis-1/12 items-center justify-center pl-3">
            {isCategory === "writing" ? (
              <FcDislike className="h-6 w-6" />
            ) : (
              <FcWorkflow className="h-6 w-6" />
            )}
          </div>
          <div className="writing-vertical basis-11/12 pl-3">
            {selectedData?.slice(offset, offset + limit).map(({ id, tags }) => (
              <Posts key={id} tags={tags} />
            ))}
          </div>
        </article>
        {/* 페이지네이션 */}
        <footer>
          {
            <Pagination
              total={selectedData?.length}
              limit={limit}
              page={page}
              setLimit={setLimit}
              setPage={setPage}
            />
          }
        </footer>
      </section>
    </Layout>
  );
}
