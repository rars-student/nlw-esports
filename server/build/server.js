import express from "express";
const app = express();
const port = 5555;
app.get("/ads", (req, res) => {
    return res.json([
        {
            id: 1,
            anuncio: "Anuncio 1",
        },
        {
            id: 2,
            anuncio: "Anuncio 2",
        },
        {
            id: 3,
            anuncio: "Anuncio 3",
        },
        {
            id: 4,
            anuncio: "Anuncio 4",
        },
    ]);
});
app.listen(port, () => {
    console.log("Escutando a porta " + port);
});
