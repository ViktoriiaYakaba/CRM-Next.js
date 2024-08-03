'use client';
import React from "react";
import clsx from "clsx";

export interface ButtonProps
    extends Partial<React.ReactHTMLElement<HTMLButtonElement>>{
    disablet?: boolean;  
 }

export default function Button({disablet, ...rest}: ButtonProps){
    return (
        <button {...rest} className={clsx("py-2.5 px-5 bg-gray-900 text-zinc-500 text-base text-center font-medium rounded",
            !disablet && 'hover:bg-gray-800 active:bg-gray-950',
            disablet && 'text-zinc-100',
        )} />
)
}
