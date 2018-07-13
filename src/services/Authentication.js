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
            console.log(user)
            if (!user.emailVerified){
              this.sendVerificationEmail(user)
            }
            resolve(this.lowerDataUser(user))
          }else {
            resolve(null)
          }
      });
    })
  }

  sendVerificationEmail(user){
    user.sendEmailVerification().then(function() {
      console.log('Enviado E-Mail de verificação!')
    }).catch(function(error) {
      console.log( 'sendEmailVerification' , error)
    });
  }

  doLogout() {
    return Firebase.auth().signOut();
  }

  lowerDataUser(user) {
    return {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      metadata: user.metadata,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uid: user.uid
    }
  }

}

export default new Authentication();
