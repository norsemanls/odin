import Box from "@material-ui/core/Container";
import Layout from "../src/components/layout";
import Hero from "../src/components/hero";
import ContactPanel from "../src/components/panel-contact";

export default function Index() {
  return (
    <Layout>
      <Hero>
        If your client would like to sell a life insurance policy that is no
        longer needed or affordable, choose the most trusted life settlement
        brokerage service in the country as your guide.
      </Hero>
      <ContactPanel></ContactPanel>
    </Layout>
  );
}
