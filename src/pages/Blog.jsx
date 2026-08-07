import { Link, Navigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { Section, H1, H2, Lead, Eyebrow, Card, CtaBand } from '../components/ui';
import { IconArrowRight } from '../components/icons';
import { posts, getPost } from '../content/blog';
import { apps, founder } from '../content/site';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export function BlogIndex() {
  return (
    <>
      <SEO />

      <Section className="pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Blog</Eyebrow>
          <H1 className="mt-4">Guides on scrap, rates and recycling</H1>
          <Lead className="mt-6">
            How pickups work, what each category of scrap is actually worth, and why doorstep collection matters
            more than it looks.
          </Lead>
        </div>
      </Section>

      <Section className="bg-white pt-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{tag}</span>
                ))}
              </div>
              <h2 className="mt-4 text-xl font-bold leading-snug text-slate-900">
                <Link to={`/blog/${post.slug}`} className="hover:text-brand-700">{post.title}</Link>
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">{post.description}</p>
              <p className="mt-5 text-sm text-slate-500">{formatDate(post.date)} · {post.readingTime}</p>
              <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
                Read article <IconArrowRight />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Ready to sell your scrap?"
        description="Book a free doorstep pickup and get paid on the spot."
        primary={{ href: apps.customer, label: 'Schedule a pickup' }}
        secondary={{ to: '/what-we-accept', label: 'See what we accept' }}
      />
    </>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEO />

      <Section className="pb-6">
        <article className="mx-auto max-w-3xl">
          <Link to="/blog" className="text-sm font-semibold text-brand-700 hover:text-brand-800">← All articles</Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{tag}</span>
            ))}
          </div>
          <H1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">{post.title}</H1>
          <p className="mt-5 text-sm text-slate-500">
            {formatDate(post.date)} · {post.readingTime} · by {founder.name}
          </p>

          <div className="mt-10 space-y-5">
            {post.body.map((block, i) => {
              if (block.h2) return <h2 key={i} className="pt-5 text-2xl font-bold text-slate-900">{block.h2}</h2>;
              if (block.ul) {
                return (
                  <ul key={i} className="list-disc space-y-2.5 pl-6 text-lg leading-relaxed text-slate-600">
                    {block.ul.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                );
              }
              if (block.quote) {
                return (
                  <blockquote key={i} className="border-l-4 border-brand-500 bg-brand-50/50 py-4 pl-6 text-lg italic text-slate-700">
                    {block.quote}
                  </blockquote>
                );
              }
              return <p key={i} className="text-lg leading-relaxed text-slate-600">{block.p}</p>;
            })}
          </div>
        </article>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <H2 className="text-2xl">Keep reading</H2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {posts.filter((p) => p.slug !== post.slug).map((p) => (
              <Card key={p.slug}>
                <h3 className="font-bold leading-snug text-slate-900">
                  <Link to={`/blog/${p.slug}`} className="hover:text-brand-700">{p.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-slate-600">{p.readingTime}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Turn your scrap into cash"
        description="Free doorstep pickup, transparent rates, instant payment."
        primary={{ href: apps.customer, label: 'Schedule a pickup' }}
        secondary={{ to: '/how-it-works', label: 'How it works' }}
      />
    </>
  );
}
