import Api from "./Api";

class UserApi {
    currentUser = {
        id: "Loading...",
        name: "Loading...",
        email: "Loading...",
        address: "Loading...",
        phone: "Loading...",
    }
    currentUserSet = () => {};

    constructor(props) {
        console.log("UserApi");
        this.loadUser();
    }

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
}

export default new UserApi();
