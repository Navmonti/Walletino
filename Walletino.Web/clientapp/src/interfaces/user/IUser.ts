
interface IUser {
    lastname : string ,
    firstname : string ,
    username: string,
    password: string, 
    mobile: string,
    email: string,

    isLoading: false,
    isDisable: false,

    isSuccessful: false,
    succeessfulMessage: '',

    isError: false,
    errorMessage: '',
}

export default IUser;