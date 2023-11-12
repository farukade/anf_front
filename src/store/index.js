import { createStore } from "vuex";

const state = {
	successMessage: {
		timer: 0,
		message: "",
	},
	failedMessage: {
		timer: 0,
		message: "",
	},
	user: null,
	profileOpen: false,
	loading: false,
	isVerified: true,
	addingNewPost: false,
};

const getters = {
	getSuccessMessage(state) {
		return state.successMessage.message;
	},
	getSuccessTimer(state) {
		return state.successMessage.timer;
	},
	getFailedMessage(state) {
		return state.failedMessage.message;
	},
	getFailedTimer(state) {
		return state.failedMessage.timer;
	},
	getUser(state) {
		return state.user;
	},
	getLoading(state) {
		return state.loading;
	},
	getIsVerified(state) {
		return state.isVerified;
	},
	getProfileOpen(state) {
		return state.profileOpen;
	},
	getAddingNewPost(state) {
		return state.addingNewPost;
	},
};

const mutations = {
	updateSuccessMessage(state, data) {
		state.successMessage = data;
	},
	updateFailedMessage(state, data) {
		state.failedMessage = data;
	},
	updateUser(state, data) {
		state.user = data;
	},
	updateLoading(state, data) {
		state.loading = data;
	},
	updateIsVerified(state, data) {
		state.isVerified = data;
	},
	updateProfileOpen(state, data) {
		state.profileOpen = data;
	},
	updateAddingNewPost(state, data) {
		state.addingNewPost = data;
	},
};

const actions = {};

// Create a new store instance.
export const store = createStore({
	state,
	getters,
	mutations,
	actions,
});
