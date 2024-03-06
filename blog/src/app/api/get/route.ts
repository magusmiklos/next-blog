import fs from "fs";
import path, { join } from 'path';

export async function POST(request: Request) {

    const data = await request.json();
    const slug = data["data"];
    const file = path.join("tmp",`${slug}.md`);
    const content = fs.readFileSync(file,"utf8");

    return new Response(content);
}