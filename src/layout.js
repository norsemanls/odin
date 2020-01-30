import Head from "next/head";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "./copyright";
import Header from "./components/header/header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <Container maxWidth="sm">
        <Box my={4}>
          {children}
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

export default Layout;
