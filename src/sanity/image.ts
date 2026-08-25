import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  // Gracefully handle local assets or fallback urls if source is just a path
  if (!source) return { url: () => '/placeholders/image.jpg' };
  if (typeof source === 'string') return { url: () => source };
  try {
    return builder.image(source);
  } catch (e) {
    return { url: () => '/placeholders/image.jpg' };
  }
}
