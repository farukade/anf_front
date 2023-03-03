export const truncate = (str, len = 200) => {
	let newStr = "";
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
	const response = await fetch(`${constants.baseUrl}${url}`, {
		method: method,
		headers: !authed ? { ...defaultHeaders } : { ...defaultHeaders },
		body: JSON.stringify(data),
	});
	const result = await checkStatus(response);
	return parseJSON(result);
};

const checkStatus = async (response) => {
	if (!response.ok) {
		console.log(response);
		// const message = await response.text();

		// const err = JSON.parse(message);
		// throw Object.freeze({ message: err.message || err.error });
	}

	return response;
};

const parseJSON = (response) => response.json();

export const constants = {
	baseUrl: "http://localhost:3000",
};
