import { configureStore } from "@reduxjs/toolkit";
import counter from "./slicers/countSlicer";
import langSlicer from "./slicers/langSlicer";

export default configureStore({
    reducer:{
        counter,
        langSlicer
    }
})