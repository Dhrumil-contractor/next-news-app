import Head from "next/head";

function Feed({ pageNumber, articles }) {
  return (
    <div>
      <Head>
        <title>News App | Feed</title>
        <meta name="description" content="News web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Feed</h1>
    </div>
  );
}

export default Feed;

export async function getServerSideProps(context) {
  const pageNumber = context.params.id;
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
  const data = await res.json();
  return {
    props: { articles: data },
  };
}
