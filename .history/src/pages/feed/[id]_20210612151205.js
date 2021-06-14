import Head from "next/head";

function Feed() {
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
  const   
  return {
    props: {}, // will be passed to the page component as props
  };
}
