import Image from "next/image";
import estilos from "./Cards.module.css";

export default function Card({ produto }) {
  return (
    <>
      <div className={estilos.container}>
        <figure>
          <Image src={produto.imagem} alt={produto.nome} />
        </figure>

        <div className={estilos.container_informacoes}>
          <h3 className={estilos.nome}>{produto.nome}</h3>
          <small className={estilos.small}>{produto.categoria}</small>
          <p>{produto.descricao}</p>
        </div>
        <div className={estilos.preco}>
          <span>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(produto.preco)}
          </span>
        </div>
      </div>
    </>
  );
}
