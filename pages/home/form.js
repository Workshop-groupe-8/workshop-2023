window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login_form");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("oanf");
    const formdata = new FormData(loginForm);
    let mail = formdata.get("username");
    let password = formdata.get("password");

    if (mail == "" || password == "") {
      alert("Veuillez remplir les deux champs!");
    } else {
      const url = "http://localhost:3000/api/login";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, password }),
      };

      const response = await fetch(url, options);
      const json = await response.json();
      if (json.message === "Mauvais mot de passe") {
        alert("Mauvais mot de passe!");
        window.location.reload();
      } else if (json.message === "login réussi") {
        location.href = "http://127.0.0.1:5500/pages/map/index.html";
      } else {
        alert("Utilisateur non trouvé!");
        window.location.reload();
      }
    }
  });
});
