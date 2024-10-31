import Link from "next/link";
import Image from "next/image";
import { revalidatePath } from "next/cache";

export default async function NewsFeedAPI() {
  const news = await fetch(
    `https://newsapi.org/v2/everything?q=all&pageSize=10&apiKey=334ff92595e64eceb07ef2f18ed47c09`
  );
  const newsWrangled = await news.json();

  //   console.log(newsWrangled);

  const articles = await newsWrangled.articles;

  //   console.log(articles);
  return (
    <>
      {articles.map((item) => {
        if ((item.name, item.author, item.content) !== `[Removed]`) {
          return (
            <div
              className="bg-slate-500 flex flex-col items-center m-4 justify-center align-middle text-center"
              key={item.id}
            >
              <div className="bg-slate-700 m-5 flex flex-col items-center">
                <p className="bg-slate-600 p-2 m-1">
                  source: {item.source.name}
                </p>
                <p className="bg-slate-600 p-2 m-1">by: {item.author}</p>
                <p className="bg-slate-600 p-2 m-1">{item.title}</p>
                <Image
                  src={item.urlToImage}
                  alt={`article image`}
                  width={200}
                  height={200}
                  id="imagePH"
                />
                <p className="bg-slate-800 p-2 m-1">{item.content}</p>
              </div>
              <Link className="bg-slate-800 text-center p-4" href={item.url}>
                full article
              </Link>
              <head>
                <script
                  async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5206967219759359"
                  crossorigin="anonymous"
                ></script>
              </head>
            </div>
          );
        }
      })}
    </>
  );
}
