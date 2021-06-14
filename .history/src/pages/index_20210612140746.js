import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>News App | Home</title>
        <meta name="description" content="News web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Next.js News App</h1>
        <h3>Your one stop shop for the latest news articles</h3>
      </div>
    </div>
  );
}
