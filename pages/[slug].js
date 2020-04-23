import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import Layout from "../src/components/layout";
import Panel from "../src/components/panel";
import Toc, { tocContentSelector } from "../src/components/toc";
import classnames from "classnames";

export default function PageTemplate({
  content: markdownBody,
  data: frontmatter,
}) {
  const { title, useTableOfContents } = frontmatter;

  const panelClass = classnames({
    [tocContentSelector]: useTableOfContents,
  });

  return (
    <Layout>
      <h1 className="page-title">{title}</h1>
      <Panel component="article" className={panelClass}>
        {useTableOfContents && <Toc />}
        <ReactMarkdown source={markdownBody} escapeHtml={false} />
      </Panel>
    </Layout>
  );
}

PageTemplate.getInitialProps = async function (context) {
  // context contains the query param
  const { slug } = context.query;
  // grab the file in the posts dir based on the slug
  const content = await import(`../src/static-pages/${slug}.md`);
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  return { ...data };
};
