document.getElementById("logout-btn").addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "landing page.html";
  });
});

auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "login.html"; 
  }
});