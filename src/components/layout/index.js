import Head from "next/head";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../footer/copyright";
import Header from "../header";
import "./layout.scss";
function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container className="content">
        <Header></Header>
        <Container maxWidth="sm">
          <Box my={4}>
            {children}
            <Copyright />
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default Layout;
