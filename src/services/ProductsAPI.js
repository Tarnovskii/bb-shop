import {Base} from "./Base";

export class ProductsAPI extends Base {
    constructor(props) {
        super('products');
    }

    getProductsByCategory = async (category, skip = 0, limit = 20) => {
        return await this.service.get(`/category/${category}`, {params: {skip, limit}})
    }

    getProductsByQuery = async (q = '', skip = 0, limit = 20) => {
        return await this.service.get('/search', {params: {q, skip, limit}})
    }
}
