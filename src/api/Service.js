import axios from "axios";

export default class Service {
    static async getAll() {
        const response = await axios.get('/products.json');
        return response.data
    }
}
