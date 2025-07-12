const firebaseConfig = {
  apiKey: "AIzaSyDob_7qzgGxmQmFCU46bRjaKLrfTCu0R1c",
  authDomain: "rewear-login.firebaseapp.com",
  projectId: "rewear-login",
  storageBucket: "rewear-login.firebasestorage.app",
  messagingSenderId: "680149013457",
  appId: "1:680149013457:web:c201b49fef1da6678386f0",
  measurementId: "G-EH53F3Y4M8"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


document.querySelector(".login-btn").addEventListener("click", () => {
  const email = document.querySelectorAll("input")[0].value.trim();
  const password = document.querySelectorAll("input")[1].value.trim();
  const errorBox = document.getElementById("error-msg");

 
  errorBox.innerText = "";

  if (!email || !password) {
    errorBox.innerText = "Please enter both email and password.";
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        errorBox.innerHTML = `
          No account found. <a href="register.html" style="color:#D69B7B;">Click here to sign up</a>.
        `;
      } else if (error.code === "auth/wrong-password") {
        errorBox.innerText = "Incorrect password. Please try again.";
      } else {
        errorBox.innerText = error.message;
      }
    });
});


  


