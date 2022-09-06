import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { remarkCodeHike } from "@code-hike/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism/lib/src";
import { theme } from "./search-light";

// const blogDirectory = path.join(process.cwd(), "blog")
const postsDirectory = path.join(process.cwd(), "drafts");

export function getSortedPostsData(tags?: string) {
  // /posts 폴더에 있는 파일 이름 가져오기
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // 파일 이름에서 ".mdx" 확장자명만 제거
    const id = fileName.replace(/\.mdx$/, "");
    // 마크다운 파일을 string으로 읽어들이기
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // gray-matter를 통해 마크다운 파일의 메타데어터 섹션 읽기
    const matterResult = matter(fileContents).data;
    // 데이터: id와 메타섹션의 정보
    return {
      id,
      tags: matterResult.tags,
      ...matterResult,
    };
  });

  // tag 페이지의 경우
  if (tags) {
    const postByTag = allPostsData.filter(post => post.tags === tags);
    return postByTag.sort((a, b) => {
      if (a < b) return 1;
      else if (a > b) return -1;
      else return 0;
    });
  }

  // 없으면 그냥 날짜 최신순으로 정렬
  return allPostsData.sort((a, b) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [
        remarkGfm,
        [
          remarkCodeHike,
          {
            theme,
            showCopyButton: true,
            staticMediaQuery: "not screen, (max-width: 768px)",
          },
        ],
        ...(options?.remarkPlugins ?? []),
      ];
      options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];

      return options;
    },
  });

  return {
    id,
    code,
    frontmatter,
  };
}

export function getAllPostTags() {
  const data = getSortedPostsData();
  return data.map(post => {
    return {
      params: {
        tags: post.tags,
      },
    };
  });
}

// 카테고리 필터링
// if (categories) {
//   const categoriesData = allPostsData.filter(post => post.categories === categories);
//   return categoriesData.sort(({ date: a }: dateType, { date: b }: dateType) => {
//     if (a < b) return 1;
//     else if (a > b) return -1;
//     else return 0;
//   });
//   .map((post, i) => {
//     return Object.assign(post, { index: i });
//   })
//   .reverse();
// }
