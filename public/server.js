const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // Добавляем модуль path

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Добавляем маршрут для статических файлов (например, HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // Отправляем файл index.html при запросе корневого маршрута
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/login", (req, res) => {
  const { login, password } = req.body;

  // Ваша логика аутентификации здесь (например, сравнение с базой данных)

  if (login === "ваш_логин" && password === "ваш_пароль") {
    console.log("Аутентификация прошла успешно!");
    res.send("success");
  } else {
    console.log("Неверный логин или пароль");
    res.status(401).send("error");
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
