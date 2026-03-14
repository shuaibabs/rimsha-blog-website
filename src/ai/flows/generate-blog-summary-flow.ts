'use server';
/**
 * @fileOverview A Genkit flow for generating a concise summary of a blog post.
 *
 * - generateBlogSummary - A function that generates a summary for a given blog post.
 * - GenerateBlogSummaryInput - The input type for the generateBlogSummary function.
 * - GenerateBlogSummaryOutput - The return type for the generateBlogSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogSummaryInputSchema = z.object({
  blogPostContent: z.string().describe('The full text content of the blog post to be summarized.'),
});
export type GenerateBlogSummaryInput = z.infer<typeof GenerateBlogSummaryInputSchema>;

const GenerateBlogSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the blog post, suitable for a preview.'),
});
export type GenerateBlogSummaryOutput = z.infer<typeof GenerateBlogSummaryOutputSchema>;

export async function generateBlogSummary(input: GenerateBlogSummaryInput): Promise<GenerateBlogSummaryOutput> {
  return generateBlogSummaryFlow(input);
}

const blogSummaryPrompt = ai.definePrompt({
  name: 'blogSummaryPrompt',
  input: {schema: GenerateBlogSummaryInputSchema},
  output: {schema: GenerateBlogSummaryOutputSchema},
  prompt: `You are an expert summarizer. Your task is to provide a concise, engaging summary of the following blog post.

The summary should be no more than 3-4 sentences long and should highlight the main points and key takeaways, encouraging the reader to click to read the full article.

Blog Post Content:
---
{{{blogPostContent}}}
---

Summary:`,
});

const generateBlogSummaryFlow = ai.defineFlow(
  {
    name: 'generateBlogSummaryFlow',
    inputSchema: GenerateBlogSummaryInputSchema,
    outputSchema: GenerateBlogSummaryOutputSchema,
  },
  async (input) => {
    const {output} = await blogSummaryPrompt(input);
    return output!;
  }
);
