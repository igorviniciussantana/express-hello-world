import express, { Express, Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.type("html").send(html));

app.get("/meunome", (req, res) => {
  res.send(
    "<style>*{font-family: sans-serif};</style><h1>Meu nome é Igor Vinicius de Souza Santana</h1>"
  );
});

app.get("/tico", (req, res) => {
  res.send(
    '<h1>Teco</h1><img src="https://th.bing.com/th/id/R.8dcc1f403fed853ea5aca1552da04a0a?rik=oQybb4Lz%2b0Uibg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-OgY_4NgFggM%2fTbxKUz6IJnI%2fAAAAAAAAAK4%2fzkqKGqcOIU8%2fs1600%2ftico%2be%2bteco%2bpiscando.jpg&ehk=cNjkQ5bBN0HMD557SFd%2fCnoO%2fIML1X0s%2bzr0deyAq2s%3d&risl=&pid=ImgRaw&r=0" width="50%" />'
  );
});

app.get("/pokemons", (req, res) => {
  const pokemons = {
    ash: [
      "Pikachu",
      "Caterpie",
      "Pidgeotto",
      "Metapod",
      "Butterfree",
      "Bulbasaur",
      "Charmander",
      "Squirtle",
      "Krabby",
      "Raticate",
    ],
  };
  res.json(pokemons);
});

app.post("/series", (req, res) => {
  const seriesFavoritas = {
    series: [req.body.serie1, req.body.serie2, req.body.serie3],
  };
  res.json(seriesFavoritas);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello Express API 
    </section>
  </body>
</html>
`;
