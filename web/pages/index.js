import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Robin Yoong</title>
        <meta name="description" content="Robin Yoong's Homeground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto py-4">
        <article className="prose dark:prose-dark">
          <h1>👋 </h1>
          <p>
            Hi, I&apos;m Robin, a software engineer based in Singapore&nbsp;
            🇸🇬&nbsp; . As a full-stack JavaScript developer, my day-to-day
            revolves around React, Node.js.
          </p>

          <p>
            Currently, I&apos;m taking on a Product Manager and Product Owner
            role in{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://svested.com"
            >
              Svested
            </a>
            , a seed-funded company that aims to make cap table and employee
            stock options management easy for founders. I (virtually) sit right
            between clients and developers, shipping features from requests and
            ideas.
          </p>
          <p>
            My interest lies in building business ideas from scratch—from idea
            validation to UX/high-res prototypes, to developing the MVP with
            some branding magic sprinkled along the way. I&apos;m just highly
            facisnated by how vision morphs into reality, and am thankful to be
            able to be able to bring that to life.
          </p>

          <h4>Current choice of stack</h4>
          <p>Vercel, Next.js, Supabase, Tailwind CSS</p>
        </article>
      </main>
    </div>
  );
}
