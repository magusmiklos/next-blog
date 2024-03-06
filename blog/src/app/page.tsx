import fs from "fs";
import Link from "next/link";

const getPostMetadata = () => {
  const folder = `${process.cwd()}/posts`;
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md",""));
  return slugs
}

export default function Home() {
  const PostMetadata = getPostMetadata()
  const postPreviews = PostMetadata.map((slug) => (
    <>
      <div className="flex justify-between items-center mt-10">
        <Link href={`/posts/${slug}`}>
          <h2 className="text-0.1rem lg:text-2xl  font-bold text-white text-center">{slug}</h2>
        </Link>
        <Link href={`/posts/${slug}/edit`}>
          <h2 className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline-block ml-10 lg:ml-52 ">edit</h2>
        </Link>
      </div>
    </>
  ));

  return (
    <div className="flex justify-center ">
      <div className="bg-opacity-20 backdrop-blur-lg backdrop-filter bg-gray-500 dark:bg-opacity-50 shadow-lg dark:bg-gray-900 rounded-lg p-5 lg:p-11 lg:min-w-96 lg:min-h-96 mb-10">
      <Link href={`/new`}>
          <h2 className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded text-center">New</h2>
      </Link>
      {postPreviews}
      </div>
    </div>
  );
}
