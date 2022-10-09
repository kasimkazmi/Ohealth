import {
	USER_SIGNIN_LOADING,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_ERROR,
	USER_LOGOUT,
	UPDATE_USER_DATA,
	USER_SIGNUP_LOADING,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_ERROR,
	USER_FORGOT_LOADING,
	USER_FORGOT_SUCCESS,
	USER_FORGOT_ERROR,
	GET_USER_DATA_LOADING,
	GET_USER_DATA_SUCCESS,
	GET_USER_DATA_ERROR,
} from "../constants/authConstants";

const initialState = {
	isLoading: false,
	completeprofile: {},
};
export const authReducer = (state = initialState, action, payload) => {
	switch (action.type) {
		case USER_SIGNIN_LOADING:
			return { ...state, loading: action.payload };
		case USER_SIGNIN_SUCCESS:
			return {
				...state,
				loading: false,
				authToken: action.payload.token,
				userData: action.payload
			};
		case UPDATE_USER_DATA:
			return {
				...state,
				loading: false,
				userData: action.payload
			};
		case USER_SIGNIN_ERROR:
			return {
				loading: false
			};
		case USER_LOGOUT:
			return { loading: false, authToken: '', userData: '' };



		case USER_SIGNUP_LOADING:
			return { loading: true };

		case USER_SIGNUP_SUCCESS:
			return { loading: false, signupData: action.payload };

		case USER_SIGNUP_ERROR:
			return {
				loading: false

			}


		case USER_FORGOT_LOADING:
			return { loading: true };

		case USER_FORGOT_SUCCESS:
			return { loading: false, forgotData: action.payload };

		case USER_FORGOT_ERROR:
			return {
				loading: false
			};



		case GET_USER_DATA_LOADING:
			return { loading: true };

		case GET_USER_DATA_SUCCESS:
			return { loading: false, forgotData: action.payload };

		case GET_USER_DATA_ERROR:
			return {
				loading: false
			};


		default:
			return state;

	}
}