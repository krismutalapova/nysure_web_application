import Api from "./Api";

class AuthApi {
    authenticate({email, password}) {
        return Api.post('/authenticate', {email, password});
    }

    register ({id, name, email, password, address, telephone}) {
        return Api.post('/register', {id, name, email, password, address, telephone});
    }
}

export default new AuthApi();