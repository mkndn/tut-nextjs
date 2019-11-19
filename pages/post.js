import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Content = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the content</p>
    </>
  );
};

const Post3 = () => (
  <Layout>
    <Content />
  </Layout>
);

export default Post3;
