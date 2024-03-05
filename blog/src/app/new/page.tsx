"use client";
import { useRouter } from 'next/navigation';


const PostPage = (props: any) => {
    const router = useRouter();

    const handleSave = async () => {

        

        try {
            const textarea: HTMLTextAreaElement | null = document.getElementById('name') as HTMLTextAreaElement;
            let slug: string = textarea && textarea.value.trim() ? textarea.value.trim() : 'new';
            slug = slug.replaceAll(' ','-').slice(0,10)
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
        <div className="container mx-auto p-4 h-96">
            <h1 className="text-2xl text-white font-bold mb-4">Name</h1>
            <textarea
                id='name'
                className="bg-opacity-20 backdrop-blur-lg backdrop-filter bg-gray-500 dark:bg-opacity-50 shadow-lg dark:bg-gray-900 w-full h-10 p-2 rounded-md resize-none focus:outline-none overflow-hidden text-white"
            ></textarea>
            <h1 className="text-2xl text-white font-bold mb-4">Content</h1>
            <textarea
                id='save'
                className="bg-opacity-20 backdrop-blur-lg backdrop-filter bg-gray-500 dark:bg-opacity-50 shadow-lg dark:bg-gray-900 w-full h-96 p-2 rounded-md resize-none focus:outline-none text-white"
            ></textarea>
            <div className='flex flex-col sm:flex-row'>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-10"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default PostPage;
