import Navbar from "./Navbar";
import Head from "next/head";
import nProgress from "nprogress";
import NProgress from "nprogress";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Layout = (props) => {
  const { children } = props;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>My Porfolio</title>
        <meta
          name="description"
          content="Porfolio Julian Ruiz - FullStack Developer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
        />
      </Head>
      <Navbar />
      <main className="container py-4">{children}</main>
      <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h1>&copy; Martin Julian Ruiz </h1>
          <p>1990 - {new Date().getFullYear()} </p>
          <p>Created with React Js, Next Js, Bootstrap</p>
          <p>All rights Reseverd</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
