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
    }
};

export {services};