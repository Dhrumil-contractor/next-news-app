import Head from "next/head";

function eom({ employee }) {
  console.log("employee==", employee);
  return (
    <div>
      <Head>
        <title>News App | Eom</title>
        <meta name="description" content="News web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>EOM</h1>
    </div>
  );
}

export default eom;

export async function getServerSideProps(context) {
  const products = await fetch(
    `https://fakestoreapi.com/products`
  ).then((res) => res.json());
  const res = await fetch(
    `https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth`
  );
  const data = await res.json();
  return {
    props: {
      employee: data,
    },
  };
}