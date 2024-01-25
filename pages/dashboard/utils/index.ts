import * as yup from 'yup';

export interface ITrack {
  trackID: number;
}

export const TrackSchema = yup.object().shape({
  trackID: yup.number().required('AWB ID is required').min(10, 'Please enter a valid AWB ID').max(13, 'Please enter a valid AWB ID'),
});