'force-dynamic';
import fs from "fs";
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
    const file = `src/posts/${slug}.md`;
    const content = fs.readFileSync(file,"utf8");
    return content;
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return (
        <>
            <div className="flex justify-center items-center v-screen w-full">
                <div className="bg-opacity-20 backdrop-blur-lg backdrop-filter bg-gray-500 shadow-lg dark:bg-opacity-50 dark:bg-gray-900 rounded-lg p-11 mb-10 min-h-96 mx-10 w-10/12">
                    <Markdown class="prose prose-invert text-white break-words">{content}</Markdown>
                </div>
            </div>
        </>
    );
};

export default PostPage;