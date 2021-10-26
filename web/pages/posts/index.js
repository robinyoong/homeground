import Head from 'next/head';
import Link from 'next/link';
import { sanityClient } from '../../lib/sanity';
import { allPostsQuery } from '../../lib/queries';
import moment from 'moment';

export default function index({ allPosts }) {
  console.log('allPosts', allPosts);
  return (
    <div className="bg-white dark:bg-dark-bg max-w-5xl mx-auto pt-8">
      <Head>
        <title>Posts</title>
        <meta name="blog" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="pb-8">
        I write about tech, building MVPs and reflections on things I've read.
      </p>
      <main>
        <div className="py-8">
          {allPosts.map(({ title, slug, _id, _createdAt }) => (
            <div key={_id} className="space-y-2 pb-8">
              <Link href={`/posts/${slug.current}`}>
                <a className="hover:text-red-400 font-semibold">{title}</a>
              </Link>
              <p className="text-sm text-gray-400">
                {moment(_createdAt).format('LL')}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await sanityClient.fetch(allPostsQuery);
  console.log('allPosts', allPosts);

  if (!allPosts.length) {
    return {
      props: {
        allPosts: [],
      },
    };
  } else {
    return {
      props: {
        allPosts,
      },
      revalidate: 10,
    };
  }
}
