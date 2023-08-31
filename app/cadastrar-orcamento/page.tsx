"use client"

import { useState } from 'react';

export default function CadastrarOrcamento() {
  const [maoDeObra, setMaoDeObra] = useState([{ descricao: '', preco: '' }]);
  const [pecas, setPecas] = useState([{ quantidade: '', nome: '', preco: '' }]);

  const addMaoDeObra = () => setMaoDeObra([...maoDeObra, { descricao: '', preco: '' }]);
  const addPecas = () => setPecas([...pecas, { quantidade: '', nome: '', preco: '' }]);

  const totalMaoDeObra = maoDeObra.reduce((total, obra) => total + Number(obra.preco), 0);
  const totalPecas = pecas.reduce((total, peca) => total + Number(peca.preco), 0);
  const totalGeral = totalMaoDeObra + totalPecas;

  return (
    <div className="mx-auto p-4 bg-white text-black">
      <h1 className="text-2xl mb-4">Cadastro</h1>

      <section className="mb-6">
        <h2 className="text-xl mb-2">Cliente</h2>
        <div className="flex flex-col mb-2">
          <label className="mb-1">Nome:</label>
          <input className="border p-2" placeholder="Nome" />
        </div>
        <div className="flex flex-col mb-2">
          <label className="mb-1">CPF:</label>
          <input className="border p-2" placeholder="CPF" />
        </div>
        <div className="flex flex-col mb-2">
          <label className="mb-1">Telefone:</label>
          <input className="border p-2" placeholder="Telefone" />
        </div>
        <div className="flex flex-col mb-2">
          <label className="mb-1">Endereço:</label>
          <input className="border p-2" placeholder="Endereço" />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl mb-2">Veículo</h2>
        <div className="flex flex-col mb-2">
          <label className="mb-1">Placa:</label>
          <input className="border p-2" placeholder="Placa" />
        </div>
        <div className="flex flex-col mb-2">
          <label className="mb-1">Chassi:</label>
          <input className="border p-2" placeholder="Chassi" />
        </div>
        <div className="flex flex-col mb-2">
          <label className="mb-1">Ano:</label>
          <input className="border p-2" placeholder="Ano" />
        </div>
        <div className="flex flex-col mb-2">
          <label className="mb-1">Cor:</label>
          <input className="border p-2" placeholder="Cor" />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl mb-2">Mão de Obra</h2>
        {maoDeObra.map((_, index) => (
          <div className="flex flex-col mb-2" key={index}>
            <label className="mb-1">Descrição:</label>
            <input className="border p-2" placeholder="Descrição" />
            <label className="mb-1 mt-2">Preço:</label>
            <input className="border p-2" placeholder="Preço" />
          </div>
        ))}
        <button className="mt-2 p-2 bg-blue-500 text-white" onClick={addMaoDeObra}>
          +
        </button>
      </section>

      <section className="mb-6">
        <h2 className="text-xl mb-2">Peças</h2>
        {pecas.map((_, index) => (
          <div className="flex flex-col mb-2" key={index}>
            <label className="mb-1">Quantidade:</label>
            <input className="border p-2" placeholder="Quantidade" />
            <label className="mb-1 mt-2">Nome:</label>
            <input className="border p-2" placeholder="Nome" />
            <label className="mb-1 mt-2">Preço:</label>
            <input className="border p-2" placeholder="Preço" />
          </div>
        ))}
        <button className="mt-2 p-2 bg-blue-500 text-white" onClick={addPecas}>
          +
        </button>
      </section>

      <section>
        <h2 className="text-xl mb-2">Total</h2>
        <div>Total Mão de Obra: {totalMaoDeObra}</div>
        <div>Total Peças: {totalPecas}</div>
        <div>Total Geral: {totalGeral}</div>
      </section>
    </div>
  );
}