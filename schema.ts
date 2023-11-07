import * as z from 'zod';

export const dataSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "content is required ans must be at least 2 characters.",
  }),
  author: z.string().min(2, {
    message: "author required and must be at least 2 characters.",
  }),
});
