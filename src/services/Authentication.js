import Firebase from './../helpers/firebase';
import store from './../store';

class Authentication {
  constructor() {

  }

  doAuthentication(email, password) {
    return Firebase.auth().signInWithEmailAndPassword(email, password);
  }

  checkUserFirebase(){
    return new Promise((resolve, reject) => {
      Firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            resolve(lowerDataUser(user))
          }else {
            resolve(null)
          }
      });
    })
  }

  doLogout() {
    return Firebase.auth().signOut();
  }

  lowerDataUser(user) {
    let userLower = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      metadata: user.metadata,
      phoneNumber: user.phoneNumber,
      photoURL: user,photoURL,
      uid: user.uid
    }

    return userLower;
  }

}

export default new Authentication();
