import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import {store} from "../../../store/init/store";
import {CategoriesMenu} from "../CategoriesMenu";

it('render_categories-menu_without_crashes', () => {
    const div = document.createElement('div')

    ReactDOM.render((
        <Provider store={store}>
            <CategoriesMenu/>
        </Provider>
    ), div)
});

