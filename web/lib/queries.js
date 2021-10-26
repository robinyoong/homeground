export const allPostsQuery = `*[_type == "post"] | order(date desc, _updatedAt desc)`;

export const postSlugQuery = `*[_type == "post" && defined(slug.current)][].slug.current`;

export const postQuery = `{
  "post": *[_type == "post" && slug.current == $slug]}`;
