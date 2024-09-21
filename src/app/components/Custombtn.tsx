import React from 'react'

interface CustombtnProps {
    text:string;
    style?: React.CSSProperties;
    className:string;
    disabled:boolean;
    onClick?:()=>void;
}
const Custombtn: React.FC<CustombtnProps> = ({text,style,className,disabled,onClick}) => {
  return (
    <button
        style={style}
        className={className}
        disabled={disabled}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Custombtn