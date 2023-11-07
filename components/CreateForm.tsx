"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { createPost } from "@/actions/createPost.action";
import { dataSchema } from "@/schema";

/**
 * This component creates and validate a form
 */
export const CreateForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof dataSchema>>({
    resolver: zodResolver(dataSchema),
  });

  const onSubmit = async (data: z.infer<typeof dataSchema>) => {
    // try {
    //   const res = await fetch("http://localhost:3000/api/posts", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //   });

    //   if (!res.ok) {
    //     throw new Error("Failed to create post.");
    //   }
    //   router.replace("/");
    // } catch (error) {
    //   throw error;
    // }

    const { title, content, author } = data;
    try {
      const post = await createPost({
        title,
        content,
        author,
      });
      if (post !== null) {
        router.replace("/");
      }
    } catch (e) {
      throw e;
    }
  };

  const inputStyle =
    "w-full p-4 border-gray-200 dark:border-none rounded-bl-md rounded-tl-md outline-none text-APP_BLACK bg-white dark:bg-slate-600 font-light";
  const labelStyle = "text-muted-foreground";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyle}`}>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="enter title"
                  {...field}
                  className={`${inputStyle}`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyle}`}>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="enter content"
                  {...field}
                  className={`${inputStyle}`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyle}`}>Author</FormLabel>
              <FormControl>
                <Input
                  placeholder="name of author"
                  {...field}
                  className={`${inputStyle}`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="secondary"
          type="submit"
          className="w-full p-4 rounded-md text-white bg-green-500 hover:bg-green-600"
        >
          Create Post
        </Button>
      </form>
    </Form>
  );
};
