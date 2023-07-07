const services = {
    async sneakersList() {
        const request = await fetch("http://127.0.0.1:8000/api/v1/sneakers/");
        return request;
    },
    async signUp(username, password, email) {
        const body = new FormData();
        body.append("username", username);
        body.append("password", password);
        body.append("email", email);
        const request = await fetch("http://127.0.0.1:8000/api/v1/auth/users/", {
            method: "POST",
            body: body
        });
        return request;
    },
    async login(username, password) {
        const body = new FormData();
        body.append("username", username);
        body.append("password", password);
        const request = await fetch("http://127.0.0.1:8000/auth/token/login/", {
            method: "POST",
            body: body
        });
        return request;
    },

    async logout(token, username, password) {
        const headers = new Headers();
        headers.append('Authorization', 'Token ' + token);
        const body = new FormData();
        body.append("username", username);
        body.append("password", password);
        const request = await fetch("http://127.0.0.1:8000/auth/token/logout/", {
            method: "POST",
            body: body
        });
        return request;
    },
    async lookFor(item) {
        const request = await fetch("http://127.0.0.1:8000/api/v1/sneakers?search=" + item);
        return request;
    },
    async filteringItems(category) {
        const request = await fetch("http://127.0.0.1:8000/api/v1/sneakers?category=" + category);
        return request;
    }
};

export {services};