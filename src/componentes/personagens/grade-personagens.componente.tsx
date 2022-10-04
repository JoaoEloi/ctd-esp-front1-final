import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { ReactElement } from "react";
import { useAppSelector } from "../../state/hooks";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = (): ReactElement => {
  const list = useAppSelector((state) => state.characters.list);

  return (
    <div className="grade-personagens">
      {list.map((character) => (
        <CardPersonagem key={character.id} character={character} />
      ))}
    </div>
  );
};

export default GradePersonagem;
