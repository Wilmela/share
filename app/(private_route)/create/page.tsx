import Image from "next/image";
import { CreateForm } from "@/components/CreateForm";

const Create = () => {
  return (
    <section className="flex-1">
      <p className="font-bold text-3xl text-center my-4 headingText bg-text">
        Create a new post.
      </p>

      <div className="w-full flex-1 flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="flex-1">
          <Image src="/logo.png" width={600} height={400} alt="background" />
        </div>

        <div className="flex-1 w-full">
          <CreateForm />
        </div>
      </div>
    </section>
  );
};

export default Create;
