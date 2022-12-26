
export const SetLocalStorage = (key: string, value: string) => {
    debugger;
    localStorage.setItem(key, value);
} 



export const RemoveLocalStorage = (key: string) =>  
    localStorage.removeItem(key);
 