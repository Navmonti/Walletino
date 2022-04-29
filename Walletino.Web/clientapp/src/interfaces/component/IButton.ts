type typeButton = "default" | "add" | "edit" | "delete";  

interface IButton {
    type: typeButton; 
    title: string;
    loading: boolean;
    disable: boolean;
    icon: string;
    onClick: () => any
}

//const objButton: IButton = { 
//    title: "",
//    loading: false,
//    disable: false,
//    icon: "",
//    type: "default"
//}

export default IButton;



