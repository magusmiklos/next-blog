import fs from "fs";
import path, { join } from 'path';

export async function POST(request: Request) {

    const data = await request.json();
    const slug = data["data"];
    const file = path.join(process.cwd(),"src","posts",`${slug}.md`);
    

    fs.unlink(file, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log(`File deleted successfully path:${process.cwd()}`);
        }
    });

    return new Response("ok");
}