import Head from "next/head";
import { Card, CardContent, Button } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <Head>
        <title>News App | Home</title>
        <meta name="description" content="News web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Card>
          <CardContent>
            <h1>Next.js News App</h1>
            <h3>Your one stop shop for the latest news articles</h3>
            <div className={styles.button}>
              <Button variant="contained" color="primary">
                Explore feed
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
