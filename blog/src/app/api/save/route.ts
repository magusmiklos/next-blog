import fs from "fs";
import path, { join } from 'path';

export async function POST(request: Request) {

    const data = await request.json();
    const slug = data["data"];
    const file = path.join(process.cwd(),"src","posts",`${slug}.md`);
    const content = data["text"]

    fs.writeFile(file, content, (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        
        console.log('File overwritten successfully.');
      });

    return new Response(content);
}