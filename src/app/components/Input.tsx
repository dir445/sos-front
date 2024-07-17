import { InputHTMLAttributes } from 'react';

export default function Input(props:InputHTMLAttributes<HTMLInputElement>){
    return (
        <input className="border block rounded-lg w-full h-12 text-base pl-4 bg-[#F6F6F6] border-[#E0E0E0] font-medium leading-5" {...props}/>
    );
}