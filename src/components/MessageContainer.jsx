"use client";
import Dialogue from "./Dialogue"
import { usePromptListStore } from "./data"
export default function MessageContainer() {
    const prompts = usePromptListStore((state) => state.prompts)
    const renderMsg = () => {
        var renderList = []

        for (var i in prompts)
            renderList.push(<Dialogue key={i} msgID={i} message={prompts[i]} />)
        return (renderList)
    }
    return (
        <div
            className="flex-1 overflow-y-auto rounded-xl bg-violet-950 p-4 text-sm leading-6 text-slate-900 dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7"
        >
            {renderMsg()}
        </div>
    )
}
