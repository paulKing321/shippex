export interface ITrackDetails {
  fullname: string;
  phone_number: string;
  email: string;
  delivery_address: string;
  delivery_type: string;
  id: string;
  default: boolean;
}
export interface ISignInPayload {
  usr: string;
  pwd: string;
}