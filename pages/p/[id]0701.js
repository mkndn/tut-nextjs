import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";

/* export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the content</p>
    </Layout>
  );
} */

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
    <img src={props.show.image.medium}></img>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;

  const data = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await data.json();

  console.log(`Show name: ${show.name}`);

  return { show };
};

export default Post;
