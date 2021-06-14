import Head from "next/head";
import { Grid } from "@material-ui/core";
import Styles from "../../styles/Feed.module.css";

function Feed({ pageNumber, articles }) {
  console.log("articles===", articles, pageNumber);
  return (
    <div>
      <Head>
        <title>News App | Feed</title>
        <meta name="description" content="News web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Grid item xs lg xl sm />
        <Grid item xs lg xl sm><?
        <Grid item xs lg xl sm />
      </Grid>
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
