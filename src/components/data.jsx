import { create } from "zustand";

export const useIsEnterStore = create((set) => ({
    isEnter: false,
    setIsEnter: () => set((state) => ({ isEnter: true })),
    // resetIsEnter: () => set((state) => ({ isEnter: false })),
}))
export const useIsGenerating = create((set) => ({
    isGenerating: false,
    setIsGenerating: () => set((state) => ({ isGenerating: true })),
    resetIsGenerating: () => set((state) => ({ isGenerating: false })),
}))

export const usePromptListStore = create((set) => ({
    prompts: [],
    appendPrompts: (prompt) => set((state) => ({ prompts: [...state.prompts, prompt] })),
    // resetIsEnter: () => set((state) => ({ prompts: false })),
}))
export const useReplyListStore = create((set) => ({
    replys: [],
    appendReply: (reply) => set((state) => ({ replys: [...state.replys, reply] })),
    // resetIsEnter: () => set((state) => ({ prompts: false })),
}))