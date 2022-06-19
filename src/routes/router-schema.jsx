import {ProductsList} from "../pages/poducts-list/ProductsList";
import {ContentWrapper} from "../components/content-wrapper/ContentWrapper";


/**
 * @param {Object} routerSchema Nested list of all routes
 * @param {path} routerSchema.path Relative page path (null if index field is true)
 * @param {element} routerSchema.element React Element to render on relevant page
 * @param {title} routerSchema.title Page title
 * @param {index} routerSchema.index Indicates that the element is rendered according to the index route (if path field present - index field is null)
 * @param {children} routerSchema.children Array of subpages (can be null, if there are no subpages)
 */

export const routerSchema = [{
    path: '/',
    element: <ContentWrapper/>,
    children: [{
        path: 'category/:category',
        element: <ProductsList/>
    }, {
        path: 'product/:product'
    },{
        index: true,
        element: <ProductsList/>
    }]
}]
