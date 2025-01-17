import { baseUrl } from "../Network/Network";

export const loginUrl = baseUrl + "auth/login";

export const signupUrl = baseUrl + "auth/signup";

export const getAllUser = baseUrl + "users/";

export const getUserById = (id) => baseUrl + `users/${id}`;
