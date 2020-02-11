import Head from "next/head";
import Box from "@material-ui/core/Box";
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
      <div className="content">
        <Header></Header>
        <div className="main">
          <main>{children}</main>
          <Menu />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
