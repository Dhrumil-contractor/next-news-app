import Head from "next/head";

function Eom({ employee }) {
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

export default Eom;

export async function getServerSideProps(context) {
  const employee = await fetch(
    `https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth`
  ).then((res) => res.json());
  return {
    props: {
      employee,
    },
  };
}
