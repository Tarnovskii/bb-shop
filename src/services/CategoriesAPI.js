import {Base} from "./Base";

export class CategoriesAPI extends Base {
    constructor() {
        super('products/categories');
    }

    getCategoriesList = async () => {
        return await this.service.get('/')
    }
}
