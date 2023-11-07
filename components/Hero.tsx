"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const Hero = () => {
  type Search = {
    search: string;
  };

  const form = useForm<Search>();

  const onSubmit = (data: Search) => {
    console.log(data);
  }; //FIlter post

  return (
    <section className="w-full flex flex-col gap-5 justify-center items-center mt-8 md:mt-10 lg:mt-16">
      <p className="headingText bg-text text">Make a POST!, SHARE it!</p>
      <p className="font-medium text-[16px] text-center md:text-2xl leading-relaxed lg:mt-4 text-APP_BLACK">
        Got an amazing idea, share it! let your friends be path of it!
        <br className="md:mt-1 text-gradient-to-tr from-red-500 via-red-200 to-white bg-clip-text tex-transparent" /> Together we can make it happen.
      </p>

      {/* Input */}
      {/* <form
        onSubmit={handleSubmit}
        className="w-full md:w-[60%] flex mt-2 md:mt-4 shadow-md"
      >
        <PostInput
          type="text"
          placeholder="Search a post"
          onChange={(e) => setPost(e.target.value)}
        />
        <Button
          type="submit"
          
          className="p-4 bg-APP_GREEN text-APP_BLACK rounded-br-md rounded-tr-md font-medium"
        >
          Search
        </Button>
      </form> */}
      
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='className="w-full md:w-[60%] flex mt-2 md:mt-4 shadow-md'
        >
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="flex-1 ">
                <FormControl>
                  <Input
                    placeholder="Enter search"
                    {...field}
                    className="w-full p-4 rounded-md border-none outline-none text-APP_BLACK bg-white font-light"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            variant="secondary"
            type="submit"
            className="p-4 rounded-md text-white bg-green-500 hover:bg-green-600"
          >
            Create Post
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default Hero;
