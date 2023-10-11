window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login_form");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("oanf");
    const formdata = new FormData(loginForm);
    let username = formdata.get("username");
    let password = formdata.get("password");

    if (username == "" || password == "") {
      alert("Ensure you input a value in both fields!");
    } else {
      const url = "http://localhost:3000/api/login";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      };

      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      alert("This form has been successfully submitted!");
      location.href = "http://127.0.0.1:5500/pages/map/index.html";
    }
  });
});
