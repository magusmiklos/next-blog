"use client";
import { useRouter } from 'next/navigation';


const PostPage = (props: any) => {
    const router = useRouter();

    const handleSave = async () => {

        

        try {
            const textarea: HTMLTextAreaElement | null = document.getElementById('name') as HTMLTextAreaElement;
            let slug: string = textarea && textarea.value.trim() ? textarea.value.trim() : 'new';
            slug = slug.replaceAll(' ','-')
            console.log(slug)
            const text: HTMLTextAreaElement | null = document.getElementById('save') as HTMLTextAreaElement;

            const response = await fetch('/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: slug , text: text.value}),
            });
            
            if (response.ok) {
                console.log('Save successful');
            } else {
                console.error('Save failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        router.push('/');
        router.refresh()
    };


    return (
        <div className="container mx-auto p-4 h-screen">
            <h1 className="text-2xl font-bold mb-4">Name</h1>
            <textarea
                id='name'
                className="bg-gray-900 w-full h-10 p-2 border border-gray-900 rounded-md resize-none focus:outline-none overflow-hidden"
            ></textarea>
            <h1 className="text-2xl font-bold mb-4">Content</h1>
            <textarea
                id='save'
                className="bg-gray-900 w-full h-1/2 p-2 border border-gray-900 rounded-md resize-none focus:outline-none"
            ></textarea>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleSave}
            >
                Save
            </button>
        </div>
    );
};

export default PostPage;
