import React from 'react'
import Button from './Button';
import Link from 'next/link';
import { PostProps } from '@/types';

/**
 * This component sets up a post structure
 * @param id post id
 * @param title post title
 * @param content post content
 * @param author post author
 * @returns JSX.Element
 */
const Post = async ({ id, title, content, author }: PostProps) => {
  // Introduces an artificial delay btw 2 - 4seconds in rendering this component
  const random = Math.floor(Math.random() * 2 * 2) * 1000;
  await new Promise((resolve)=>setTimeout(resolve, random))

  return (
    <div className="w-full flex flex-col items-start md:w-[300px] h-[200px] max-h-[200px] border dark:border-none bg-white dark:bg-slate-700 hover:bg-gray-50 ease-in duration-300 cursor-pointer shadow-md p-4 rounded-md md:my-2 border-gray-200">
      <p className="font-bold mb-2 text-xl text-APP_BLACK dark:text-gray-100">
        {title}
      </p>
      <p className="dark:text-gray-100 font-light text-gray-700 text-[16px] flex-1">
        {content}
      </p>

      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex gap-4 items-center">
          <Link
            href={`/post/${id}`}
            className="font-light capitalize text-base dark:text-gray-100 text-gray-600 cursor-pointer hover:text-APP_GREEN"
          >
            Edit
          </Link>

          <Button id={id} />
        </div>

        <p className="font-light capitalize text-base text-gray-600 cursor-pointer dark:text-gray-100">
          {author}
        </p>
      </div>
    </div>
  );
};


export default Post;