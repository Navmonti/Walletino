//action object
//const itemAdd = {
//    type: '', ---> is a string and describe what happend ein event
//    payload : null ---> is extra data for a action 
//}


//action creator : is a function that creates and returns an action object
const AddItem = async (value: string) => {
    return {
        type: 'item_add',
        payload: value
    }
}
 

export { AddItem }
