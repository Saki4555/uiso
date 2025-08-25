import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { getGithubLastEdit } from 'fumadocs-core/server';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  
// const page = source.getPage(['...']);

  if (!page) notFound();

  const MDXContent = page.data.body;
  const time = await getGithubLastEdit({
    owner: "Saki4555",
    repo: "uiso",
    path: `content/docs/${page.path}`,
    
    
  });
  
  console.log(page.path)

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      lastUpdate={time ? new Date(time) : undefined}

    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="text-sm">
        {page.data.description}
      </DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
