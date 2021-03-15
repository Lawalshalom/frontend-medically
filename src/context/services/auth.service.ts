import fireServiceInstance from "./firebase.service";

class AuthService {
  isLoggedIn = false;
  currentUser: unknown = null;
  token: string = '';

  setCurrentUser(userInfo: any) {
    this.isLoggedIn = true;
    this.currentUser = {
      name: userInfo.displayName,
      uid: userInfo.uid,
      email: userInfo.email
    };

    sessionStorage.setItem('userCredentials', JSON.stringify(this.currentUser))
  }

  setToken(token: string) {
    this.token = token;
    sessionStorage.setItem('userToken', token);
  }

  async logout() {
    await fireServiceInstance.logout();
    this.currentUser = null;
    this.isLoggedIn = false;
    this.clearToken();
  }

  clearToken() {
    this.token = '';
    sessionStorage.removeItem('usertoken');
  }

  checkActiveUserSession() {
    const token = sessionStorage.getItem('userToken') || '';
    const loggedInUserCredentials = sessionStorage.getItem('userCredentials') || '';

    console.log(token);
    console.log(loggedInUserCredentials);

    if (!token || !loggedInUserCredentials) return false;

    this.setToken(token);
    this.setCurrentUser(JSON.parse(loggedInUserCredentials));

    return true;
  }
}

const authService = new AuthService();
export default authService;
