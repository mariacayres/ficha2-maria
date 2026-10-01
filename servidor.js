const http = require('http');
const PORT = 3000;
const cards = [
  { name: "araujo ", type: "Criatura", attack: 7, defense: 5 },
  { name: "rafa ", type: "Criatura", attack: 4, defense: 8 },
  { name: "eliseu ", type: "Criatura", attack: 6, defense: 6 },
  { name: "dinis ", type: "Criatura", attack: 5, defense: 7 },
  { name: "francisco ", type: "Criatura", attack: 9, defense: 3 },
];



const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);


    if (req.url === "/") {
    
    const numerodec = cards.length
    res.end(`<h1>o numero de cartas e: ${numerodec}</h1> `);
    return;}



    if (req.url === "/sobre") {
    res.end(' <h1> Meu nome e maria <h1> Turma: TGPSI24-T');
    return;
  }

  if (req.url === "/cartas") {
    const items = cards.map(card => `<li>${card.name}</li>`).join("");
    res.write(`<h1><ul>${items}<ul><h1>`);
    res.end(`${cards.length}`)
    return;
  }
   if (req.url === "/agora") {
    const now = new Date().toLocaleString("pt-PT");
    res.end(`<h1>${now}</h1>`);
    return;
  }
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<h1>erro 404</h1>`)

});

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});

