import axios from "axios";
import { ISignInPayload, ITrackDetails } from "./types";

const baseUrl = 'https://shippex-demo.bc.brandimic.com/api/method/'
export const instance = axios.create({
  baseURL: baseUrl,
});

export function signIn(data: ISignInPayload) {
  return instance.post(`${baseUrl}login`, data);
}

export async function trackAWB() {
  const token = sessionStorage.getItem('user_token')
  return instance
    .get(`${baseUrl}frappe.client.get`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data as ITrackDetails);
}