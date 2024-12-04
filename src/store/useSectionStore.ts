import { create } from "zustand"

interface sectionStoreProps {
	section: "string"
	setSection: (section: string) => void 
}

export const useSectionStore = create<sectionStoreProps>((set) => ({
	section: "Dashboard",
	setSection: (section: string) => set({section})
}))