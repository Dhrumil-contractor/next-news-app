import Head from "next/head";

function Feed({ pageNumber }) {
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
  if(!pageNumber || pageNumber <)
  return {
    props: { pageNumber }, // will be passed to the page component as props
  };
}
