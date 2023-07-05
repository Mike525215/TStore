const services = {
    async sneakersList() {
        const request = await fetch("http://127.0.0.1:8000/api/v1/sneakers/");
        return request;
    }
};

export {services};