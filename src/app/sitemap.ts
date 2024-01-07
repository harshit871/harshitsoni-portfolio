import { MetadataRoute } from "next";
import { createClient } from "@/prismicio";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  const pages = await client.getAllByType("page");
  // const blogPosts = await client.getAllByType("blog_post");
  // const projects = await client.getAllByType("project");
 
  const siteRoot = "https://harshitsoni-portfolio.vercel.app";

  const homepageRoute = {
    url: siteRoot,
    lastModified: homepage.last_publication_date,
  };

  const pagesRoutes = pages.map((page) => ({
    url: siteRoot + "/" + page.uid,
    lastModified: page.last_publication_date,
  }));

  // const blogPostsRoutes = blogPosts.map((post) => ({
  //   url: siteRoot + "/blog/" + post.uid,
  //   lastModified: post.last_publication_date,
  // }));

  // const projectsRoutes = projects.map((project) => ({
  //   url: siteRoot + "/projects/" + project.uid,
  //   lastModified: project.last_publication_date,
  // }));

  // console.log("homepageRoute", homepageRoute);
  // console.log("pagesRoutes", pagesRoutes);

  return [homepageRoute, ...pagesRoutes];
}