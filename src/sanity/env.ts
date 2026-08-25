export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';
export const useCdn = process.env.NODE_ENV === 'production';
export const token = process.env.SANITY_API_WRITE_TOKEN || '';
