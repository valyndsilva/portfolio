import imageUrlBuilder from "@sanity/image-url";
import { config } from "./config";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
const builder = imageUrlBuilder(config);

export const urlFor = (source) => builder.image(source);
