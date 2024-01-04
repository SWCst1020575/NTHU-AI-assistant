"use client";
import  { useState } from 'react';

export default function Dialogue(props) {
    const [msg, setMsg] = useState(props.message);
    const [reply, setReply] = useState("");
    return (
        <>
            <div className="flex flex-row px-2 py-4 sm:px-4">
                <img
                    className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                    src="https://dummyimage.com/256x256/363536/ffffff&text=U"
                />

                <div className="flex max-w-3xl text-slate-100 items-center">
                    <p>{msg}</p>
                </div>
            </div>
            <div
                className="mb-4 flex rounded-xl bg-violet-900 px-2 py-6 dark:bg-slate-900 sm:px-4"
            >
                <img
                    className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                    src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
                />

                <div className="flex max-w-3xl text-slate-100 items-center rounded-xl">
                    <p>
                        {reply}
                    </p>
                </div>
            </div>
        </>
    )
}
