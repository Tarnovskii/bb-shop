import React from 'react'
import ReactDOM from 'react-dom'
import {Cart} from "../Cart";
import {Provider} from "react-redux";
import {store} from "../../../store/init/store";

it('render_cart_without_crashes_when_open_with_close_event', () => {
    const div = document.createElement('div')

    ReactDOM.render((
        <Provider store={store}>
            <Cart isOpen={true} closeCart={() => {}}/>
        </Provider>
    ), div)
});

it('render_cart_without_crashes_when_open_without_close_event', () => {
    const div = document.createElement('div')

    ReactDOM.render((
        <Provider store={store}>
            <Cart isOpen={true}/>
        </Provider>
    ), div)
});

it('render_cart_without_crashes_when_close_with_closeEvent', () => {
    const div = document.createElement('div')

    ReactDOM.render((
        <Provider store={store}>
            <Cart isOpen={false} closeCart={() => {}}/>
        </Provider>
    ), div)
});

it('render_cart_without_crashes_when_close_without_closeEvent', () => {
    const div = document.createElement('div')

    ReactDOM.render((
        <Provider store={store}>
            <Cart isOpen={false}/>
        </Provider>
    ), div)
});

