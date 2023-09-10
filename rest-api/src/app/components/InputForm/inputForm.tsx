"use client"

import { ChangeEvent, useState } from "react";
import { FormEvent } from "react";

const InputForm = () => {

    const [title, setTitle] = useState<string>("");
    const [todo, setTodo] = useState<string>("");

    const submitForm = (e: FormEvent): void => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitForm}>
            <input type="text" placeholder="Title" onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
            <input type="text" placeholder="Todo" onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} />
            <button type="submit"> Submit </button>
        </form>
    )
}

export default InputForm;