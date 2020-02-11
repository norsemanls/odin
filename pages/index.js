import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "../src/components/link";
import Layout from "../src/components/layout";

export default function Index() {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
    </Layout>
  );
}
