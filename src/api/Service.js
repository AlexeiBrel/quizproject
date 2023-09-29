import axios from "axios";

export default class Service {
    static async getAll() {
        const response = await axios.get('/src/data/products.json');
        return response.data
    }
}
