import Head from "next/head";
import { Button } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <Head>
        <title>News App</title>
        <meta name="description" content="News web app" />
        <link rel="icon" href="/favicon.ico" />
        <h1>Hello world</h1>
      </Head>
    </div>
  );
}
