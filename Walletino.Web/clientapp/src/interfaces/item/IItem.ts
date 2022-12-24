
interface IItem {
    itemId: number,
    categoryId: number,
    title: string,

    isLoading: false,
    isDisable: false,

    isSuccessful: false,
    succeessfulMessage: '',

    isError: false,
    errorMessage: '',
}

export default IItem;