import fs from "fs";

export async function POST(request: Request) {

    const data = await request.json();
    const slug = data["data"];
    const folder = "src/posts/";
    const file = `${folder}${slug}.md`;
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