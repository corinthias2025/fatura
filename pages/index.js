import { useEffect, useState } from "react";

export default function Home() {
  const [pixKeys, setPixKeys] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Carregar chaves do backend
  async function loadPixKeys() {
    setLoading(true);
    const res = await fetch("/api/pix-keys");
    const keys = await res.json();
    setPixKeys(keys);
    setCurrentIndex(0);
    setLoading(false);
  }

  useEffect(() => {
    loadPixKeys();
  }, []);

  // Copiar e remover chave atual
  async function copyAndRemoveKey() {
    if (pixKeys.length === 0) return;

    const key = pixKeys[currentIndex];
    try {
      await navigator.clipboard.writeText(key);

      // Envia para API para remover chave do arquivo
      await fetch("/api/pix-keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyToRemove: key }),
      });

      alert("Chave PIX copiada e removida!");

      // Atualiza localmente para próxima chave
      const newPixKeys = pixKeys.filter((_, i) => i !== currentIndex);
      setPixKeys(newPixKeys);

      // Ajusta índice
      if (newPixKeys.length === 0) {
        setCurrentIndex(0);
      } else if (currentIndex >= newPixKeys.length) {
        setCurrentIndex(0);
      }
    } catch (error) {
      alert("Erro ao copiar ou remover chave PIX.");
    }
  }

  if (loading) return <p>Carregando chaves PIX...</p>;
  if (pixKeys.length === 0) return <p>Sem chaves PIX disponíveis.</p>;

  return (
    <div style={{ maxWidth: 500, margin: "20px auto", padding: 20, background: "#fff", borderRadius: 12, boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h2>Fatura residencial - Maio 2025</h2>
      <p><strong>Valor:</strong> R$ 119,00</p>
      <p><strong>Vencimento:</strong> 23 de Maio</p>

      <div style={{ backgroundColor: "#f2faff", border: "1px solid #c6e2ff", borderRadius: 8, padding: 15, margin: "20px 0" }}>
        <strong>Pague com PIX</strong>
        <div style={{ marginTop: 10, fontFamily: "monospace", fontSize: 14, wordBreak: "break-word", background: "#fff", border: "1px dashed #ccc", padding: 10, borderRadius: 6 }}>
          {pixKeys[currentIndex]}
        </div>
        <button
          onClick={copyAndRemoveKey}
          style={{
            marginTop: 10,
            backgroundColor: "#e30613",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          Copiar código PIX e remover
        </button>
      </div>
    </div>
  );
}
