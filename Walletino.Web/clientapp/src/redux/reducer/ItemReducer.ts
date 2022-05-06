//reducer ---> is a function that receives the current STATE and an ACTION object
//(state , action ) => newState

const initialItemState = {
    isLoading: false,
    isDisable: false,
    isSuccessful: false,
    succeessfulMessage : '',
    isError: false,
    errorMessage : '',
    data: {}
}




const ItemReducer = (state: any = initialItemState, action: any) => {
    switch (action) {
        case 'item_add':
            return {
                ...state, 
            }
        case 'item_loading':
            return {
                ...state,
                isLoading : true
            }
        case 'item_error':
            return {
                ...state,
                isError: false
            }
        default:
            return state;
    }
}


export default ItemReducer