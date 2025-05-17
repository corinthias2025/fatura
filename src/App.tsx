

function App() {
  return (
   
    <ModalProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="max-w-lg mx-auto px-4 py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Minha Fatura</h1>
            <p className="text-sm text-gray-600">Gerencie e pague suas faturas com facilidade</p>
          </div>
          
          <BillSummary />
          
          <PixPayment />
          <BillDetails />
        </main>
        
        <Footer />
        <PixInstructionModal />
      </div>
    </ModalProvider>
  );
}

export default App;
