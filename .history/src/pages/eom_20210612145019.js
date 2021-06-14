import Head from "next/head";
import { Card, CardContent, Button } from "@material-ui/core";
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
            <h1>{employee.name}</h1>
            <h3>{employee.position}</h3>
            <img
              src={employee.image}
              alt="Employee Image"
              className={styles.image}
            />
            <p>{employee.description}</p>
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
