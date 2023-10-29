import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "./reducers/indexReducer";

export default configureStore({
    reducer: {
        index: indexReducer
    }
});
