import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
const authReducer = (state, action) => {
  switch (action.type) {
    case "signup_error":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "signin":
      return {
        ...state,
        errorMessage: "",
        token: action.payload,
      };
    case "clear_error_message":
      return {
        ...state,
        errorMessage: "",
      };
    case "signout":
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: "signin", payload: token });

    navigate("TrackList");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => async (email, password) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);

    dispatch({ type: "signin", payload: response.data.token });

    navigate("TrackList");
  } catch (error) {
    console.log(error);
    dispatch({ type: "signup_error", payload: "Sorry, error with signup!" });
  }
};

const signin = (dispatch) => async (email, password) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);

    dispatch({ type: "signin", payload: response.data.token });

    navigate("TrackList");
  } catch (error) {
    console.log(error);
    dispatch({ type: "signup_error", payload: "Sorry, error with signup!" });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("Token");

  dispatch({ type: "signout" });

  navigate("loginFlow");
};

const actions = {
  signup,
  signin,
  signout,
  clearErrorMessage,
  tryLocalSignin,
};

const initialState = {
  isSignedIn: false,
  token: null,
};

export const { Context, Provider } = createDataContext(
  authReducer,
  actions,
  initialState
);
