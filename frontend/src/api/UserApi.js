import Api from "./Api";

class UserApi {
    constructor(props) {
        this.loadUser();
    }

    currentUser = {
        id: "Loading...",
        name: "Loading...",
        email: "Loading...",
        address: "Loading...",
        phone: "Loading...",
    }
    currentUserSet = () => {};

    current() {
        return Api.get('/user');
    }

    async loadUser() {
        try {
            let userObject = await this.current();
            this.currentUser = userObject.data;
            this.currentUserSet(this.currentUser);
        } catch (e) {
            console.error(e);
        }
    }
    
    bindCurrentUserStateSetter(currentUserStateSetter) {
        this.currentUserSet = currentUserStateSetter;
    }

    updateUser(user) {
        return Api.patch('/user', user);
    }
}

export default new UserApi();
