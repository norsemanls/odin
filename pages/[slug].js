import Typography from "@material-ui/core/Typography";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import Layout from "../src/components/layout";
import Panel from "../src/components/panel";

export default function PageTemplate(props) {
  // data from getInitialProps
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <Layout>
      <h1 class="page-title">{frontmatter.title}</h1>
      <Panel component="article">
        <ReactMarkdown source={markdownBody} escapeHtml={false} />
      </Panel>
    </Layout>
  );
}

PageTemplate.getInitialProps = async function(context) {
  // context contains the query param
  const { slug } = context.query;
  // grab the file in the posts dir based on the slug
  const content = await import(`../src/static-pages/${slug}.md`);
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  return {
    ...data
  };
};
