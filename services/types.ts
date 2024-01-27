export interface ITrackDetails {
  id: string;
  date: string;
  time: string;
  sender: string;
  consignee: string;
  origin_address: string;
  destination_address: string;
  shipping_service: string;
  total_cod_amount: string;
}
export interface ISignInPayload {
  usr: string;
  pwd: string;
}