import axios from "axios";
import { ISignInPayload, ITrackDetails } from "./types";

const baseUrl = 'https://shippex-demo.bc.brandimic.com/api/method/'
export const instance = axios.create({
  baseURL: baseUrl,
});

export function signIn(data: ISignInPayload) {
  return instance.post(`${baseUrl}login`, data);
}

export async function trackAWB(param: number) {
  return axios.get('https://shippex-demo.bc.brandimic.com/api/method/frappe.client.get', {
    params: {
      doctype: 'AWB',
      filters: JSON.stringify({
        name: ['like', param]
      })
    },
  })
    .then((res) => res.data as ITrackDetails);
}