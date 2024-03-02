import fs from "fs";
import Link from "next/link";
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file,"utf8");
    return content;
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return (
        <>
            <div className="flex justify-center items-center v-screen">
                <div className="bg-gray-900 rounded-lg p-11 mb-10 w-screen min-h-96 mx-10 overflow-clip">
                    <Markdown>{content}</Markdown>
                </div>
            </div>
        </>
    );
};

export default PostPage;