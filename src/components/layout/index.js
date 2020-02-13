import Head from "next/head";
import Header from "../header";
import Menu from "../menu";
import Footer from "../footer";
import "./layout.scss";

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper">
        <Header></Header>
        <div className="site-content">
          <main className="site-content__wrapper">{children}</main>
          <Menu />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
