
import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducer from "../features/counter/counter.reducer";
import toggleReducer from "../features/theme/theme.reducer";
import userReducer from "../features/user/user.reducers";
import toggleLoginReducer from "../features/Login/login.reducer";
import errorReducer from "../features/IsError/iserr.reducer";
import postsReducer from "../features/posts/posts.reducer";

const reducer=combineReducers({
    count : counterReducer,
    theme : toggleReducer,
    users : userReducer,
    login : toggleLoginReducer,
    IsErr : errorReducer,
    posts : postsReducer
})

const store = createStore(reducer , applyMiddleware(thunk));
export default store;