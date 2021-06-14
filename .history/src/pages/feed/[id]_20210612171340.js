import Head from "next/head";
import Styles from "../../styles/Fe"

function Feed({ pageNumber, articles }) {
  console.log("articles===", articles, pageNumber);
  return (
    <div>
      <Head>
        <title>News App | Feed</title>
        <meta name="description" content="News web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>

  );
}

export default Feed;

export async function getServerSideProps(context) {
  const pageNumber = context.query.id;
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const article_data = await res.json();
  return {
    props: { articles: article_data, pageNumber: Number.parseInt(pageNumber) },
  };
}
