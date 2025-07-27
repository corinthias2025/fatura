import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "pix-keys.json");

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Retorna a lista atual de chaves
    try {
      const data = await fs.readFile(filePath, "utf8");
      const pixKeys = JSON.parse(data);
      res.status(200).json(pixKeys);
    } catch (e) {
      res.status(500).json({ error: "Erro ao ler as chaves PIX." });
    }
  } else if (req.method === "POST") {
    // Remove chave enviada do corpo da requisição
    try {
      const { keyToRemove } = req.body;
      if (!keyToRemove) {
        res.status(400).json({ error: "Chave a remover não fornecida." });
        return;
      }

      const data = await fs.readFile(filePath, "utf8");
      let pixKeys = JSON.parse(data);

      // Remove a chave
      pixKeys = pixKeys.filter((key) => key !== keyToRemove);

      // Salva o arquivo atualizado
      await fs.writeFile(filePath, JSON.stringify(pixKeys, null, 2));

      res.status(200).json({ success: true, pixKeys });
    } catch (e) {
      res.status(500).json({ error: "Erro ao remover chave PIX." });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Método ${req.method} não permitido.`);
  }
}
