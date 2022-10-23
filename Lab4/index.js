import express from "express";
import path from 'path';
import indexController from "./indexController.js";

// obiekt serwer zwracany jako element modułu
const app = express();
const router = express.Router();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
 secret: 'tajneHaslo1234querty',
 resave: false,
 saveUninitialized: true,
 cookie: {}
}));
app.use(flash());

// Routes
app.get('/', indexController.index);



export default app;
