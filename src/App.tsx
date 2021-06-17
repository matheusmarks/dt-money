import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement("#root");

export function App() {

  const [isNewTransactionModalOpen,
    setIsNewTransactionModalOpen] = useState(false);

  function handleNewOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenSectionModal={handleNewOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal} />
      <GlobalStyle />
    </>
  );
}
