"use client";
import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { usePromptListStore, useReplyListStore } from './data';

export default function Dialogue(props) {
    const [msg, setMsg] = useState(props.message);
    const [reply, setReply] = useState("");
    const prompts = usePromptListStore((state) => state.prompts)
    const replys = useReplyListStore((state) => state.replys)
    const ID = props.msgID
    const renderReply = () => {
        if (ID < replys.length)
            return (<p>{replys[ID]}</p>)
        else
            return (<LinearProgress color="secondary" sx={{ height: "10px", borderRadius: "4px" }} className="w-full md:mx-6 mx-3" />)
    }
    return (
        <>
            <div className="flex flex-row px-2 py-4 sm:px-4">
                <img
                    className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                    src="https://dummyimage.com/256x256/363536/ffffff&text=U"
                />

                <div className="flex text-slate-100 items-center">
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

                <div className="flex w-full  text-slate-100 items-center rounded-xl">

                    {renderReply()}

                </div>

            </div>
        </>
    )
}
