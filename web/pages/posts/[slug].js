import Head from 'next/head';
import { sanityClient } from '../../lib/sanity';
import { postQuery, postSlugQuery } from '../../lib/queries';
import PostBody from '../../components/PostBody';

export default function slug({ data }) {
  console.log(`data`, data);
  const post = data.post[0];
  console.log(`post`, post.body);

  return (
    <>
      <Head>
        <title>Post</title>
        <meta name="description" content="Robin Yoong's Homeground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="pt-4 pb-8">
          <h1 className="max-w-2xl mx-auto text-3xl font-medium pb-8 ">
            {post.title}
          </h1>
          <PostBody content={post.body} />
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugQuery);
  console.log('paths', paths);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { post } = await sanityClient.fetch(postQuery, { slug: params.slug });

  console.log('post page', post[0]);

  return {
    props: {
      data: {
        post,
      },
    },
  };
}
