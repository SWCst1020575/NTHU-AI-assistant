"use client";
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useIsEnterStore, usePromptListStore, useIsGenerating, useReplyListStore } from './data';
export default function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const setIsEnter = useIsEnterStore((state) => state.setIsEnter)
  const prompts = usePromptListStore((state) => state.prompts)
  const isGenerating = useIsGenerating((state) => state.isGenerating)
  const setIsGenerating = useIsGenerating((state) => state.setIsGenerating)
  const appendPrompts = usePromptListStore((state) => state.appendPrompts)

  const replys = useReplyListStore((state) => state.replys)
  const appendReply = useReplyListStore((state) => state.appendReply)
  const submitPrompt = () => {
    if (prompt == "" || replys.length < prompts.length)
      return
    var promptText = prompt.target.value;
    if (promptText == "")
      return
    prompt.target.value = "";
    setIsGenerating();
    setIsEnter();
    appendPrompts(promptText);
    promptToModel(promptText);
  }
  const promptToModel = async (text) => {
    await fetch('http://localhost:19327/v1/completions', {
      method: 'POST',
      body: JSON.stringify({
        prompt: text,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => appendReply(data.choices[0].text))
      .catch((err) => {
        console.log(err.message);
      });
  }
  const renderBtnIcon = () => {
    if (replys.length < prompts.length)
      return (<CircularProgress thickness={4.5} sx={{ color: "white" }} size={24} />)
    else
      return (<svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        aria-hidden="true"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 14l11 -11"></path>
        <path
          d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
        ></path>
      </svg>)
  }
  return (
    <div className="px-2 py-4">
      <label htmlFor="chat-input" className="sr-only">Enter your prompt</label>
      <div className="relative">
        <textarea
          id="chat-input"
          className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pr-16 text-sm text-slate-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-500 sm:text-base"
          placeholder="Enter your prompt"
          rows="1"
          required
          onChange={setPrompt}
        ></textarea>
        <button
          type="submit"
          className="absolute bottom-2 right-2.5 rounded-lg bg-violet-700 p-2 text-sm font-medium text-slate-200 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-base"
          style={{ height: "40px", width: "40px" }}
          onClick={submitPrompt}
        >
          {renderBtnIcon()}

          <span className="sr-only">Send message</span>
        </button>
      </div>
    </div>
  )
}
