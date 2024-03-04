"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


const PostPage = (props: any) => {
    const [text, setText] = useState("loading...");
    const router = useRouter();

    useEffect(() => {
        const handleEdit = async () => {
            try {
                const response = await fetch('/api/get', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: props['params']['slug'] }),
                });
                
                if (response.ok) {
                    console.log('Edit successful');
                    setText(await response.text());
                } else {
                    console.error('Edit failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        handleEdit();

        return () => {

        };
    }, []); 

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleSave = async () => {

        const textarea: HTMLTextAreaElement | null = document.getElementById('save') as HTMLTextAreaElement;

        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: props['params']['slug'] , text: textarea.value}),
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


    const handleDelete = async () => {
        
        const textarea: HTMLTextAreaElement | null = document.getElementById('save') as HTMLTextAreaElement;

        try {
            const response = await fetch('/api/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: props['params']['slug'] }),
            });
            
            if (response.ok) {
                console.log('Delete successful');
            } else {
                console.error('Delete failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        router.push('/');
        router.refresh()
    };

    return (
        <div className="container mx-auto p-4 h-96">
            <h1 className="text-2xl font-bold mb-4 text-white">Edit</h1>
            <textarea
                id='save'
                className="bg-opacity-20 backdrop-blur-lg backdrop-filter bg-gray-500 shadow-lg dark:bg-opacity-50 dark:bg-gray-900 w-full h-96 p-2 rounded-md resize-none focus:outline-none text-white"
                value={text}
                onChange={handleChange}
            ></textarea>
            <div className='flex flex-col sm:flex-row'>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={handleSave}
                >
                    Save Changes
                </button>
                <button
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600 ml-0 sm:ml-10"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PostPage;
