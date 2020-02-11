import Head from "next/head";
import Container from "@material-ui/core/Container";
import Header from "../header";
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
        <Container>{children}</Container>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
