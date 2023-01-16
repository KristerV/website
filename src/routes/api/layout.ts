import type { RequestHandler } from "@sveltejs/kit";
import path from "path";
import fs from "fs";

const fallbackStars = 9200;

const startDate = new Date("Nov 17 2022 00:00:00 EST");
const endDate = new Date("Dec 3 2022 06:00:00 EST");

const USE_CACHE = process.env.USE_CACHE;
const CACHE_PATH = path.resolve("stars-cache.json");

let stars: number;
let bannerData: { display: boolean; startDate: Date; endDate: Date };

export const get: RequestHandler = async () => {
  if (USE_CACHE) {
    try {
      const cacheObject = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
      if (cacheObject.expires < new Date().getTime()) {
        stars = null;
      } else {
        stars = cacheObject.starsCount;
      }
    } catch (error) {
      // A cached file is not required
    }
  }

  if (!stars) {
    const res = await fetch("https://api.github.com/repos/gitpod-io/gitpod");
    if (res.ok) {
      const data = await res.json();
      const starsCount = data.stargazers_count;

      if (USE_CACHE) {
        try {
          const expires = new Date().getTime() + 120000;

          fs.writeFileSync(
            CACHE_PATH,
            JSON.stringify({ starsCount, expires }),
            {
              encoding: "utf-8",
            }
          );
        } catch (error) {
          console.log("failed to write cache file");
        }
      }
      stars = starsCount;
    }
  }

  if (!stars) {
    stars = fallbackStars;
  }

  bannerData = getBannerData();
  const posts = await getPosts();

  return {
    status: 200,
    body: {
      stars,
      banner: bannerData,
      posts,
    },
  };
};

function getBannerData() {
  const currentDate = new Date();

  const display = startDate < currentDate && currentDate < endDate;

  return {
    display,
    startDate,
    endDate,
  };
}

async function getPosts() {
  const posts = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/blog/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}
