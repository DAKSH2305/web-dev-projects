import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, resp) => {
    resp.render('index');
});

app.post('/submit-user', (req, resp) => {
    console.log(req.body);
    resp.render('display', req.body);
});

const PORT = 4800;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 