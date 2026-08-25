import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';
import { projectId, dataset } from './sanity/env';


export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Avani - Clinical Psychologist Panel',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Management')
          .items([
            S.listItem()
              .title('Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.listItem()
              .title('Homepage Design')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('homepage')
              ),
            S.divider(),
            S.listItem()
              .title('Services Offered')
              .schemaType('services')
              .child(S.documentTypeList('services').title('Services')),
            S.listItem()
              .title('Client Testimonials')
              .schemaType('testimonials')
              .child(S.documentTypeList('testimonials').title('Testimonials')),
            S.divider(),
            S.listItem()
              .title('Journal / Blog')
              .schemaType('blog')
              .child(S.documentTypeList('blog').title('Articles')),
            S.listItem()
              .title('Resources Library')
              .schemaType('resources')
              .child(S.documentTypeList('resources').title('Resources')),
            S.divider(),
            S.listItem()
              .title('Weekly Availability Templates')
              .schemaType('availability')
              .child(S.documentTypeList('availability').title('Weekly Rules')),
            S.listItem()
              .title('Availability Overrides')
              .schemaType('overrides')
              .child(S.documentTypeList('overrides').title('Overrides')),
            S.listItem()
              .title('Blocked Dates / Holidays')
              .schemaType('blockedDates')
              .child(S.documentTypeList('blockedDates').title('Blocked Dates')),
            S.divider(),
            S.listItem()
              .title('Bookings Registry')
              .child(
                S.list()
                  .title('Filter Bookings')
                  .items([
                    S.listItem()
                      .title('All Bookings')
                      .child(S.documentTypeList('bookings').title('All Bookings')),
                    S.listItem()
                      .title('Confirmed Bookings')
                      .child(
                        S.documentTypeList('bookings')
                          .filter('_type == "bookings" && status == "confirmed"')
                          .title('Confirmed')
                      ),
                    S.listItem()
                      .title('Pending Review')
                      .child(
                        S.documentTypeList('bookings')
                          .filter('_type == "bookings" && status == "pending"')
                          .title('Pending')
                      ),
                    S.listItem()
                      .title('Completed Sessions')
                      .child(
                        S.documentTypeList('bookings')
                          .filter('_type == "bookings" && status == "completed"')
                          .title('Completed')
                      ),
                    S.listItem()
                      .title('Cancelled')
                      .child(
                        S.documentTypeList('bookings')
                          .filter('_type == "bookings" && status == "cancelled"')
                          .title('Cancelled')
                      ),
                  ])
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
