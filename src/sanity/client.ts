import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion, useCdn, token } from './env';

const isDummy = projectId === 'dummy-project-id';

const rawClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

// Write client for server-side bookings and mutations
const rawWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

// Helper to wrap client calls to avoid throwing errors on dummy projectId
function createSafeClient<T extends object>(baseClient: T): T {
  return new Proxy(baseClient, {
    get(target, prop, receiver) {
      if (isDummy) {
        if (prop === 'fetch') {
          return async (query: string) => {
            console.warn(`Sanity client is using default 'dummy-project-id'. Skipping query: ${query.slice(0, 100)}...`);
            if (query.includes('siteSettings')) {
              return '';
            }
            return [];
          };
        }
        if (prop === 'create') {
          return async (doc: any) => {
            console.warn(`Sanity client is using default 'dummy-project-id'. Mocking document creation.`);
            return { _id: 'mock-id', ...doc };
          };
        }
      }
      const val = Reflect.get(target, prop, receiver);
      return typeof val === 'function' ? val.bind(target) : val;
    }
  });
}

export const client = createSafeClient(rawClient);
export const writeClient = createSafeClient(rawWriteClient);
