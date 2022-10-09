import axios from "axios";
import {
	USER_SIGNIN_LOADING,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_ERROR,


	USER_SIGNUP_LOADING,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_ERROR,

	USER_FORGOT_LOADING,
	USER_FORGOT_SUCCESS,
	USER_FORGOT_ERROR,


	USER_UPLOADIMG_LOADING,
	USER_UPLOADIMG_SUCCESS,
	USER_UPLOADIMG_ERROR,
	GET_USER_DATA_ERROR,
	GET_USER_DATA_SUCCESS,
	GET_USER_DATA_LOADING,
} from "../constants/authConstants";

import { BASE_URL } from "../../constants/env";
import { getData, storageKey, storeData } from "../../constants";

// export const loginApi = (input) => async (dispatch) => {
// 	alert("Called APi")
// 	dispatch({
// 		type: USER_SIGNIN_LOADING,
// 		payload: true
// 	});
// 	try {

// 		const { data } = await axios.post(`${BASE_URL}/login/userLogin`, input);
// 		// console.log(data,'login----')
// 		if (data.statusCode == 200) {
// 			storeData(storageKey.AUTH_TOKEN, data.data.token);
// 			storeData(storageKey.USERDATA, JSON.stringify(data.data));
// 		}
// 		dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.data });
// 		return data;



// 	} catch (error) {
// 		console.log(error, '---error --')
// 		alert(error)
// 		dispatch({
// 			type: USER_SIGNIN_ERROR,
// 			payload: false
// 		});
// 	}
// };
export const loginApi = (input) => async (dispatch) => {
	dispatch({
		type: USER_SIGNIN_LOADING,
		payload: true
	});
	try {

		const { data } = await axios.post(`${BASE_URL}/login/userLogin`, input);
		// console.log(data,'login----')
		if (data.statusCode == 200) {
			storeData(storageKey.AUTH_TOKEN, data.data.token);
			storeData(storageKey.USERDATA, JSON.stringify(data.data));
		}
		dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.data });
		return data;



	} catch (error) {
		console.log(error, '---error --')
		alert(error)
		dispatch({
			type: USER_SIGNIN_ERROR,
			payload: false
		});
	}
};
export const registerApi = (input) => async (dispatch) => {
	dispatch({
		type: USER_SIGNUP_LOADING,
		payload: true
	});
	try {
		const { data } = await axios.post(`${BASE_URL}/register/userRegistration`, input);

		dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.data });
		return data;



	} catch (error) {
		console.log(error, '---USER_SIGNUP_ERROR --')
		alert(error)
		dispatch({
			type: USER_SIGNUP_ERROR,
			payload: false
		});
	}
};


export const forgotApi = (input) => async (dispatch) => {
	dispatch({
		type: USER_FORGOT_LOADING,
		payload: true
	});
	try {
		const { data } = await axios.post(`${BASE_URL}/forgotPassword`, input);

		//console.log(data, '---USER_FORGOT_SUCCESS --')
		dispatch({ type: USER_FORGOT_SUCCESS, payload: data.data });
		return data;



	} catch (error) {
		// console.log(error,'---USER_FORGOT_ERROR --')
		alert(error)
		dispatch({
			type: USER_FORGOT_ERROR,
			payload: false
		});
	}
};



export const uploadImgApi = (input) => async (dispatch) => {
	dispatch({
		type: USER_UPLOADIMG_LOADING,
		payload: true
	});
	try {

		var token = await getData(storageKey.AUTH_TOKEN);
		console.log(input, "==========")
		const { data } = await axios.post(`${BASE_URL}/register/extractInformation`, input, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: token
			}
		});


		// console.log(data, '---USER_UPLOADIMG_SUCCESS --')
		dispatch({ type: USER_UPLOADIMG_SUCCESS, payload: data.data });
		return data;



	} catch (error) {
		// console.log(error,'---USER_UPLOADIMG_ERROR --')
		alert(error)
		dispatch({
			type: USER_UPLOADIMG_ERROR,
			payload: false
		});
	}
};

export const getProfileApi = () => async (dispatch) => {
	dispatch({
		type: GET_USER_DATA_LOADING,
		payload: true
	});
	try {

		var token = await getData(storageKey.AUTH_TOKEN);
		const { data } = await axios.post(`${BASE_URL}/register/extractInformation`, {
			headers: {
				Authorization: token
			}
		});


		dispatch({ type: GET_USER_DATA_SUCCESS, payload: data.data });
		return data;



	} catch (error) {
		console.log(error, '---USER_UPDATEPROFILE_ERROR --')
		alert(error)
		dispatch({
			type: GET_USER_DATA_ERROR,
			payload: false
		});
	}
};





