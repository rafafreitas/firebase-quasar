import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyA0YHGfkCznKifJ_Is2jJZarnCPQOB88zc',
  authDomain: 'im-hungry-rafa.firebaseapp.com',
  databaseURL: 'https://im-hungry-rafa.firebaseio.com',
  projectId: 'im-hungry-rafa',
  storageBucket: 'im-hungry-rafa.appspot.com',
  messagingSenderId: '192441332066'
}

Firebase.initializeApp(config)

export default Firebase
