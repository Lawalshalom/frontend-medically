import axios from 'axios';

const API_BASE = 'https://medicalyapp.herokuapp.com'


export default class ApiService {
  axiosInstance;

  constructor(authToken: string) {
    this.axiosInstance = axios.create({
      baseURL: API_BASE,
      headers: {
        'Accept': 'application/json',
        'Authorization': authToken
      }
    })
  }

  getUserProfile() { }

  getUserRelatives() { }

  getRelativeInfo() { }

  deleteRelative() { }

  updateRelative() { }

  createSubscription() { }

  getActiveSubscription() { }

  updateProfile() { }

  createRelative() { }

  getHealthHistory() { }
}
