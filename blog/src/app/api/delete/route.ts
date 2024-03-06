import fs from "fs";
import path from 'path';

export async function POST(request: Request) {

    const data = await request.json();
    const slug = data["data"];
    const folder = path.join(process.cwd(),"src/posts")
    const file = path.join(folder,`${slug}.md`);
    

    fs.unlink(file, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully');
        }
    });

    return new Response("ok");
}