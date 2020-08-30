import hero from "./hero";
import { createStore, compose} from "redux";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    hero,
    composeEnhancers(),
);
export default store;


