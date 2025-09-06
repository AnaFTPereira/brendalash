import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className="bg-primary text-white px-5 py-2 rounded-md border-none cursor-pointer hover:opacity-80"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}


