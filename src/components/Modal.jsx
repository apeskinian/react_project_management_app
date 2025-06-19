import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

import Button from "./Button.jsx";

export default function Modal({ buttonCaption, ref, children }) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-800/80 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
}