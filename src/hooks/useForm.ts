import { useState } from "react";

export const useForm = <T>(inputValues:T): {form: T, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, setForm: (form: T) => void} => {
  const [form, setForm] = useState<T>(inputValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    setForm({...form, [name]: value});
  };

  return {form, handleChange, setForm};
}
