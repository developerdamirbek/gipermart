import React from "react";

export const useModal = (initialState = false) => {
    const [isOpen, setIsOpen] = React.useState(initialState);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((prev) => !prev);
    return { isOpen, open, close, toggle };
};