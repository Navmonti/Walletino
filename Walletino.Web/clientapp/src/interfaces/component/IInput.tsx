type themeType = "dark" | "light";
type inputType = "text" | "password";

interface IInput {
    type: inputType;
    theme: themeType;
    title: string; 
    disable: boolean;
    required: boolean;
    description: string;
    placeholder: string;
    key: string;
    onChange: (event: object, type: string) => void
}

export default IInput;
