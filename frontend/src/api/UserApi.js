import Api from "./Api";

class UserApi {
    current() {
        return Api.get('/user');
    }
}

export default new UserApi();