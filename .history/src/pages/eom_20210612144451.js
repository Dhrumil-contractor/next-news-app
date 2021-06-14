import Head from "next/head";
import styles from "../styles/Eom.module.css";
function Eom({ employee }) {
  console.log("employee==", employee);
  return (
    <div>
      <Head>
        <title>News App | Eom</title>
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
