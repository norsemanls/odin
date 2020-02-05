import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../src/link";
import Layout from "../src/components/layout";

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
