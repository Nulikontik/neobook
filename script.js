async function login() {
  const loginInput = document.getElementById("login").value;
  const passwordInput = document.getElementById("password").value;

  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login: loginInput, password: passwordInput }),
  });

  if (response.ok) {
    alert("Вы успешно вошли!");
  } else {
    alert("Неверный логин или пароль");
  }
}
