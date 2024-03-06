import fs from "fs";
import path from 'path';

export async function POST(request: Request) {

    const data = await request.json();
    const slug = data["data"];
    const folder = path.join(process.cwd(),"src/posts/");
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file,"utf8");

    return new Response(content);
}