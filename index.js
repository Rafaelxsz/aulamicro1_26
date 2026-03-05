const express = require("express");
const servidor = express();


servidor.get("/:rafael", (req, res) => {
    const {rafael} = req.params
    res.status(200).json({
        mensagem: `Seja bem-vindo ${rafael}`
    })
  });
  

servidor.listen(3030, () => {
  console.log("Servidor esta on Rafael Cristiano");
});