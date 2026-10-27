const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const ronsQuotesMock = [
    "Give me all the bacon and eggs you have.",
    "Never cross a scabbitman.",
    "Clear alcohols are for rich women on diets.",
    "Capitalism: God's way of determining who is smart and who is poor.",
    "The less I know about other people's affairs, the happier I am.",
    "Under my supervision, gear will be protected and things will get done."
];

app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * ronsQuotesMock.length);
    const frase = [ronsQuotesMock[randomIndex]];
    res.render('index', { frase: frase });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
