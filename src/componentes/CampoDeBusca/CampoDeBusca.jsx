import Image from "next/image";
import lupa from "../../../public/lupa.png";
import estilos from "./CampoDeBusca.module.css";

export default function CampoDeBusca({textoBuscaDigitado, handleBusca}) {
  return (
    <div className={estilos.containerBusca}>
      <Image className={estilos.icone} src={lupa} alt={lupa} />
      <input
        type="text"
        value={textoBuscaDigitado}
        onChange={(event) => handleBusca(event.target.value)}
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
      />
    </div>
  );
}
