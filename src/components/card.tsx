import { ReactNode } from "react";

interface CardProps {
    children? : ReactNode
}

export function Card({ children } : CardProps) : ReactNode {
    return (
        <div className="backdrop-blur-sm bg-neutral-700/40 rounded-3xl border-2 border-neutral-700 p-4 overflow-hidden  my-5">{children}</div>
    )
}