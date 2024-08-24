import { create } from 'zustand';

const useMarkDownStore = create(set => ({
    content: '### **자기소개** 부탁드려요! \n 블로그, 깃허브 링크 첨부 등 마크다운 문법을 이용하여 자유롭게!',
    editMode: false,
    setContent: newContent => set({ content: newContent }),
    setEditMode: newEditMode => set({ editMode: newEditMode })
}));

export default useMarkDownStore;
