import { createClient } from "@sanity/client";
// import "react-native-url-polyfill/auto";
// import imageUrlBuilder from "@sanity/image-url";

// sanity.js
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "3b911gcm",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// async function fetchData() {
//   const data = await client.fetch(`*[_type == "featured"] {...}`);
//   // Do something with the fetched data
//   console.log(data);
// }

// Call the async function
// fetchData();

// const data = await client.fetch(`*[_type == "featured"]{
// ...,}`);
// console.log(`Number of documents: ${data}`);

// const builder = imageUrlBuilder(myConfiguredSanityClient);

// function urlFor(source) {
//   return builder.image(source);
// }

// uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getPosts() {
//   const posts = await client.fetch('*[_type == "post"]');
//   return posts;
// }

// export async function createPost(post: Post) {
//   const result = client.create(post);
//   return result;
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({ title });
//   return result;
// }
