var firebaseConfig = {
  apiKey: "AIzaSyAMDcv3PHGZ9dqUeSvTx-bb34N3rE6iRA0",
  authDomain: "eventually-run.firebaseapp.com",
  databaseURL: "https://eventually-run.firebaseio.com",
  projectId: "eventually-run",
  storageBucket: "eventually-run.appspot.com",
  messagingSenderId: "258423598106",
  appId: "1:258423598106:web:bd500052846f6b8f"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();