"use client";
import { useState } from "react";
import banner from "../../public/banner.png";
import Image from "next/image";
import estilos from "../styles/page.module.css";
import {
  filtrarProdutos,
  buscarProduto,
  produtosEntradas,
} from "../componentes/service/service";
import Categorias from "../componentes/Categorias/Categorias";
import CampoDeBusca from "../componentes/CampoDeBusca/CampoDeBusca";
import Cards from "../componentes/Cards/Cards";

export default function Home() {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
  const [botaoClicado, setBotaoClicado] = useState("Entradas");

  const handleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 3 &&
      setDadosFiltrados(buscarProduto(textoDigitado));
    setBotaoClicado("");
  };

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };
  return (
    <>
      <header className={estilos.topo}>
        <Image className={estilos.banner} src={banner} alt="banner" />
        <div>
          <h1>RESTAURANT</h1>
          <p>
            De pratos clássicos a criações surpreendentes, nosso cardápio é um
            requinte de sabores refinados
          </p>
        </div>
      </header>

      <main className={estilos.container_principal}>
        <Categorias handleFiltro={handleFiltro} botaoClicado={botaoClicado} />
        <CampoDeBusca
          handleBusca={handleBusca}
          textoBuscaDigitado={textoBuscaDigitado}
        />
      </main>

      <section className={estilos.secao_cards}>
        <h2>Cardápio</h2>
        <div className={estilos.container_cards}>
          {Array.isArray(dadosFiltrados) &&
            dadosFiltrados.length > 0 &&
            dadosFiltrados.map((produto) => (
              <Cards key={produto.id} produto={produto} />
            ))}
        </div>
      </section>
    </>
  );
}
