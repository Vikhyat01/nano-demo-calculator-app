import express, { json, Router } from 'express';
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(json());

const baseRouter = Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send("Hello world!");
});

baseRouter.post('/add', (req, res) => {
    const ans = req.body.first+req.body.second;
    res.json({result : ans});
});


baseRouter.post('/subtract', (req, res) => {
    const ans = req.body.first - req.body.second;
    res.json({ result: ans });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});