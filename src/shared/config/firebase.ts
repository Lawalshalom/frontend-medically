import firebase from 'firebase/app';
import 'firebase/auth';


class FirebaseService {

  constructor() {
    this.firebase.initializeApp(this.config);
  }

  private config = {
    apiKey: "AIzaSyATFbLdJalJk9VDKMgDZvPZ2f4GUDXtGpM",
    authDomain: "medicaly-4525c.firebaseapp.com",
    projectId: "medicaly-4525c",
    storageBucket: "medicaly-4525c.appspot.com",
    messagingSenderId: "696920671129",
    appId: "1:696920671129:web:3c52d49278db2e081d0908"
  };

  firebase = firebase;
  private auth = this.firebase.auth();

  loginWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  sendResetPasswordLink(email: string) {
    this.auth.sendPasswordResetEmail(email)
  }

  loginWithSocialAccounts() { }

  signUpWithEmailAndPassword() { }

  signUpWithSocialAccounts() { }
}

const firebaseServiceInstance = new FirebaseService();

export default firebaseServiceInstance;
