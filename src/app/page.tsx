import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    keywords: "Harshit Soni, Frontend Developer, Frontend Engineer, Software Engineer, React.js, Nextjs, Typescript, Javascript, node.js, GraphQL, Redux, Tailwind CSS, HTML5, CSS3, Vanilla JS, DOM Manipulation",
    openGraph: {
      title:  'Harshit Soni',
      description: page.data.meta_description || '',
      url: "https://harshitsoni-portfolio.vercel.app/",
      type: "website",
      images: page.data.meta_image?.url ?? '',
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourtwitterhandle",
      title:  'Harshit Soni',
      description: page.data.meta_description || '',
      images: page.data.meta_image?.url ?? '',
    },
  };
}

