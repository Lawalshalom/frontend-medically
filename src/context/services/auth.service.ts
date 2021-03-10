class AuthService {
  isLoggedIn = false;
  currentUser: unknown = null;
  token: string = '';

  setCurrentUser(userInfo: unknown) {
    this.currentUser = userInfo;
    this.isLoggedIn = true;
  }

  setToken(token: string) {
    this.token = token;
  }

  logout() { }
}

const authService = new AuthService();
export default authService;
