import { userActionTypes } from "../action/userActions";

const userReducer = (state: any, action: string) => {
    switch (action) {
        case 'user_login':
            return {
                ...state                
            };

        default:
    }

};


export default userReducer;