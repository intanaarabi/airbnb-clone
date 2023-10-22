import { create } from "zustand";

// This interface outlines the shape of the state and its associated actions.
// In this context, the state is related to the visibility of a registration modal:

// isOpen is a boolean that represents whether the modal is open or not.
// onOpen is a function that will be used to open the modal.
// onClose is a function that will be used to close the modal.
interface RegisterModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

// Creating the zustand store 
// Singleton -- which means that if multiple components use this hook, they will be referencing the same store and state
const useRegisterModal = create<RegisterModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false})
}))

export default useRegisterModal;