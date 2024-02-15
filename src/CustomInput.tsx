import React from "react";

interface CustomInputProps {
    children: React.ReactNode;
    value: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

function CustomInput({ children, value, onChange }: CustomInputProps) {
    return (
        <div>
            <label htmlFor="search">{children}</label>
            <input placeholder='Example' type="text" id='search' value={value} onChange={onChange} />
        </div>
    )
}

export default CustomInput;