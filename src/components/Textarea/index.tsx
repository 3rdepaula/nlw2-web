import React, { TextareaHTMLAttributes } from "react";
import "./styles.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  // variavel global do html pra se quiser usar todos os recursos do Textarea TextareaHTMLAttributes<HTMLTextareaElement>
  label: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  // ou poderia usar a props
  // ...rest pega todos os atributos do html
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};

export default Textarea;
