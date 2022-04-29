import config from "./config"

const addresses = {

    //Accounts APIs
    Auth_login: `${config.apiAddress}/Auth/Login`,
    Auth_signup: `${config.apiAddress}/Auth/Signup`,  
    Auth_refreshToken: `${config.apiAddress}/Auth/RefreshToken`, 

    //Accounts APIs
    Accounts_add: `${config.apiAddress}/Accounts/Add`,
    Accounts_update: `${ config.apiAddress }/Accounts/Update`,
    Accounts_remove: `${config.apiAddress}/Accounts/Delete`,
    Accounts_getAll: `${ config.apiAddress } /Accounts/GetAll`,
    Accounts_getById: `${config.apiAddress}/Accounts/GetById`,

    //Categories APIs
    Categories_add: `${config.apiAddress}/Categories/Add`,
    Categories_update: `${config.apiAddress}/Categories/Update`,
    Categories_remove: `${config.apiAddress}/Categories/Delete`,
    Categories_getAll: `${config.apiAddress}/Categories/GetAll`,
    Categories_getById: `${config.apiAddress}/Categories/GetById`,

    //Items APIs
    Items_add: `${config.apiAddress}/Items/Add`,
    Items_update: `${config.apiAddress}/Items/Update`,
    Items_remove: `${config.apiAddress}/Items/Delete`,
    Items_getAll: `${config.apiAddress}/Items/GetAll`,
    Items_getById: `${config.apiAddress}/Items/GetById`,

    //Transactions APIs
    Transactions_add: `${config.apiAddress}/Transactions/Add`,
    Transactions_update: `${config.apiAddress}/Transactions/Update`,
    Transactions_remove: `${config.apiAddress}/Transactions/Delete`,
    Transactions_getAll: `${config.apiAddress}/Transactions/GetAll`,
    Transactions_getById: `${config.apiAddress}/Transactions/GetById`,

    //Users APIs
    Users_add: `${config.apiAddress}/Users/Add`,
    Users_update: `${config.apiAddress}/Users/Update`,
    Users_remove: `${config.apiAddress}/Users/Delete`,
    Users_getAll: `${config.apiAddress}/Users/GetAll`,
    Users_getById: `${config.apiAddress}/Users/GetById`,
}

export default addresses