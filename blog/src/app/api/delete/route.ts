import fs from "fs";

export async function POST(request: Request) {

    const data = await request.json();
    const slug = data["data"];
    const folder = `${process.cwd()}/posts/`;
    const file = `${folder}${slug}.md`;

    fs.unlink(file, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully');
        }
    });

    return new Response("ok");
}