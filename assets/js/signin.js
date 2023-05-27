// setting firebase with website
const signinButton = document.getElementById("signinButton");
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWj_cLl9i4vAAQfeSF7lQhdA2nXmjUric",
  authDomain: "auth-signup-d2242.firebaseapp.com",
  projectId: "auth-signup-d2242",
  storageBucket: "auth-signup-d2242.appspot.com",
  messagingSenderId: "326074842195",
  appId: "1:326074842195:web:72e542252de3631cd8daa6",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      location.href = "resume.html";
      // ...
    })
    .catch((error) => {
      alert(error.message);
    });
};

//signin
signinButton.addEventListener("click", signIn);
