import {Header} from "./components/header/Header";
import {Provider} from "react-redux";
import {store} from "./store/init/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routerSchema} from "./routes/router-schema";

export const Application = props => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    {routerSchema.map(RouteElement)}
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

const RouteElement = ({children, parentKey = '', ...args}, index) => {
    return (
        <Route key={`${parentKey}${index}`} {...args} children={children?.map((route, _index) => {
            return RouteElement({...route, parentKey: `${parentKey}${index}`}, _index)
        })}/>
    )
}
