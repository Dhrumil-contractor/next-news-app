import Head from "next/head";
import { Button } from "@material-ui/core";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>News App</title>
        <meta name="description" content="News web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
