import { configureStore } from "@reduxjs/toolkit";
import EventReducer from "./EventReducer.js";

export default configureStore({
    reducer:{
        Events: EventReducer
    }
})