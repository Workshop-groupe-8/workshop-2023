const loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("oanf");
  const formdata = new FormData(loginForm);
  let username = formdata.get("username");
  let password = formdata.get("password");

  if (username == "" || password == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username} and password of ${password}`
    );
  }
});
