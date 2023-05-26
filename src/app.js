import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import { Server } from "socket.io";

const app = express();
const port = 8080;

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  let testUser = {
    age: 50,
    lastName: "Martinez",
  };
  res.render("index", testUser);
});

const httpServer = app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
);

const socketServer = new Server(httpServer);
