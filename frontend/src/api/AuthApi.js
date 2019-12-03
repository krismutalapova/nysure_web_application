import Api from "./Api";

class AuthApi {
    authenticate({email, password}) {
        return Api.post('/authenticate', {email, password});
    }

    register ({id, name, email, password, address, telephone}) {
        name = "name";
        address = "address";
        telephone = "98398473";
        return Api.post('/register', {id, name, email, password, address, telephone});
    }
}

export default new AuthApi();