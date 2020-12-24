import axios from "axios";
import link from "../../fetchPath";
import { FETCH_USER, LOGIN_USER, LOGIN_ERROR, LOGOUT_ERROR, LOGOUT_USER } from "./types";
import firebase from "firebase";

export const fetchUser = (email) => async (dispatch) => {
	console.log("adasdasdasdasdsa");
	var data = {
		email: email,
	};
	const res = await axios.post(link + "/api/current_user", data);
	dispatch({ type: FETCH_USER, payload: res.data });
	return res.data;
};

export const loginUser = (userData) => async (dispatch) => {
	console.log(userData);
	firebase
		.auth()
		.signInWithEmailAndPassword(userData.email, userData.password)
		.then((res) => {
			console.log(res);
			var data = {
				email: res.user.email,
			};
			dispatch({ type: LOGIN_USER, payload: data });
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: LOGIN_ERROR, payload: err });
		});
};

export const logoutUser = () => async (dispatch) => {
	firebase
		.auth()
		.signOut()
		.then((res) => {
			dispatch({ type: LOGOUT_USER, payload: null });
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: LOGOUT_ERROR, payload: err });
		});
};
