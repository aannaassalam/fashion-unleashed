import { FETCH_USER, LOGIN_USER, LOGIN_ERROR, LOGOUT_USER, LOGOUT_ERROR } from "../actions/types";

const initialState = {
	currentUser: null,
	authError: null,
};
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER:
			return {
				authError: null,
				currentUser: action.payload,
			};
		case LOGIN_USER:
			return {
				authError: null,
				currentUser: action.payload,
			};
		case LOGIN_ERROR:
			return {
				authError: action.payload,
				currentUser: null,
			};
		case LOGOUT_USER:
			return {
				authError: null,
				currentUser: action.payload,
			};
		case LOGOUT_ERROR:
			return {
				authError: action.payload,
				currentUser: null,
			};
		default:
			return state;
	}
};

export default authReducer;
