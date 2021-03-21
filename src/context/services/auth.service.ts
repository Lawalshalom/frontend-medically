import { IFirebaseUserCredentials } from '../../interfaces/FirebaseUserCredentials';
import { KEYS } from '../../shared/constants';
import fireServiceInstance from './firebase.service';

class AuthService {
  isLoggedIn = false;
  currentUser: IFirebaseUserCredentials | null = null;
  token: string = '';

  setCurrentUser(userInfo: IFirebaseUserCredentials) {
    this.isLoggedIn = true;
    this.currentUser = {
      displayName: userInfo.displayName,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      uid: userInfo.uid,
      genotype: userInfo.genotype,
      blood_group: userInfo.blood_group,
      date_of_birth: userInfo.date_of_birth,
      email: userInfo.email,
      phone: userInfo.phone,
    };

    sessionStorage.setItem(
      KEYS.USER_CREDENTIALS,
      JSON.stringify(this.currentUser)
    );
  }

  setToken(token: string) {
    this.token = token;
    sessionStorage.setItem(KEYS.USERTOKEN, token);
  }

  async logout() {
    await fireServiceInstance.logout();
    this.currentUser = null;
    this.isLoggedIn = false;
    this.clearToken();
  }

  clearToken() {
    this.token = '';
    sessionStorage.removeItem(KEYS.USERTOKEN);
  }

  checkActiveUserSession() {
    const token = sessionStorage.getItem(KEYS.USERTOKEN) || '';
    const loggedInUserCredentials =
      sessionStorage.getItem(KEYS.USER_CREDENTIALS) || '';

    if (!token || !loggedInUserCredentials) return false;

    this.setToken(token);
    this.setCurrentUser(JSON.parse(loggedInUserCredentials));

    return true;
  }
}

const authService = new AuthService();
export default authService;
