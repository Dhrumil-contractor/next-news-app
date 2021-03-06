import Head from "next/head";
import { Grid, Button } from "@material-ui/core";
import Styles from "../../styles/Feed.module.css";
import { useRouter } from "next/router";

function Feed({ pageNumber, articles }) {
  console.log("articless====", articles);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>News App | Feed</title>
        <meta name="description" content="News web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Grid item xs lg xl sm />
        <Grid item xs={10} lg={6} xl={8} sm={10}>
          {articles.map((article, index) => {
            return (
              <>
                <div key={index} className={Styles.post}>
                  <h1 onClick={() => window.open(article.url)}>
                    {article.title}
                  </h1>
                  <p>{article.description}</p>
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt="Image"
                      className={Styles.articleImage}
                    />
                  )}
                </div>
              </>
            );
          })}
          <div className={Styles.paginator}>
            <Button
              variant="contained"
              color="primary"
              disabled={pageNumber === 1 ? true : false}
              onClick={() => {
                if (pageNumber > 1) {
                  router.push(`/feed/${pageNumber - 1}`);
                }
              }}
            >
              {"<"}
            </Button>
            <p className={Styles.paginatorNumber}>#{pageNumber}</p>
            <Button
              variant="contained"
              color="primary"
              disabled={pageNumber === 5 ? true : false}
              onClick={() => {
                if (pageNumber < 5) {
                  router.push(`/feed/${pageNumber + 1}`);
                }
              }}
            >
              >
            </Button>
          </div>
        </Grid>
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
  const data = await res.json();
  const { articles } = data;
  return {
    props: { articles: articles, pageNumber: Number.parseInt(pageNumber) },
  };
}
