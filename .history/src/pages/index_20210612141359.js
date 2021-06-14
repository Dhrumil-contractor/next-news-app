import Head from "next/head";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import styles from "../styles/Home.module.css";

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
          <CardHeader title={}/>
          <CardContent>
            
            <h3>Your one stop shop for the latest news articles</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
