import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "../src/ProTip";
import Link from "../src/link";
import Copyright from "../src/copyright";
import Layout from "../src/layout";

export default function About() {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        naked
        href="/"
      >
        Go to the main page
      </Button>
    </Layout>
  );
}
