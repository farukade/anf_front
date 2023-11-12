import { store } from "../store";

export const truncate = (str, len = 200) => {
	let newStr = "";
	if (!str.length) {
		return str;
	}
	let shortStr = str.split("").splice(0, len).join("");
	if (str.length > len) {
		newStr = `${shortStr}...`;
		return newStr;
	}
	newStr = `${str}`;
	return newStr;
};

export const defaultHeaders = {
	Accept: "application/json",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
	"Content-Type": "application/json",
};

export const request = async (method, url, authed = false, data) => {
	const token = getCookie("token");
	const response = await fetch(`${constants.baseUrl}${url}`, {
		method: method,
		headers: !authed
			? {
					...defaultHeaders,
			  }
			: {
					...defaultHeaders,
					Authorization: token ? `Bearer ${token}` : undefined,
			  },
		body: JSON.stringify(data),
	});
	const result = await checkStatus(response);
	return parseJSON(result);
};

export const verifyToken = async () => {
	return await request("POST", "/users/verify/login", true);
};

const checkStatus = async (response) => {
	if (!response.ok) {
		console.log(response);
		const contentType = response.headers.get("content-type");
		if (contentType && contentType.includes("application/json")) {
			return response;
		} else {
			console.log("Response is not in JSON format");
			return {
				json: () => {
					return { success: false, message: "Response is not in JSON format" };
				},
			};
		}
	} else {
		return response;
	}
};

const parseJSON = (response) => response.json();

export const setCookie = (cname, cvalue, exdays) => {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export const getCookie = (cname) => {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

export const logOut = () => {
	setCookie("token", "", 0);
	setCookie("username", "", 0);
	setCookie("email", "", 0);
	store.commit("updateUser", null);
	window.location = "/admin";
};

export const logIn = (data) => {
	const { email, username, token } = data;
	setCookie("token", token, 0.2);
	setCookie("username", username, 0.2);
	setCookie("email", email, 0.2);
	store.commit("updateUser", data);
	window.location = "/admin";
};

export const tokenValid = async () => {
	try {
		const response = await verifyToken();
		if (response?.success) {
			store.commit("updateIsVerified", true);
			store.commit("updateLoading", false);
			return true;
		} else {
			store.commit("updateIsVerified", false);
			store.commit("updateLoading", false);
			return false;
		}
	} catch (error) {
		console.log(error);
		store.commit("updateIsVerified", false);
		store.commit("updateLoading", false);
		return false;
	}
};

export const constants = {
	baseUrl: "https://anftv.onrender.com/",
};
