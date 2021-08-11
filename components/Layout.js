import Navbar from "./Navbar";
import Head from "next/head";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>My Pofolio</title>
        <meta
          name="description"
          content="Porfolio Julian Ruiz - FullStack Developer"
        />
      </Head>
      <Navbar />
      <main className="container py-4">{children}</main>
    </>
  );
};

export default Layout;
