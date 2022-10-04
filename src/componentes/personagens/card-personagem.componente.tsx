import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";
import { ReactElement } from "react";
import { ICharacter } from "../../types";
import { addFavorite } from "../../state/characters";
import { useAppDispatch, useAppSelector } from "../../state/hooks";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */

interface CharacterProps {
  character: ICharacter;
}
export default function CardPersonagem(props: CharacterProps): ReactElement {
  // const dispatch = useAppDispatch();
  // const favorites = useAppSelector((state) => state.characters.favorites);

  const { character } = props;

  // function onClickAddFavorite() {
  //   dispatch(addFavorite(character));
  // }

  return (
    <div key={character.id} className="card-personagem-div">
      <img
        className="card-personagem-img"
        src={character.image}
        alt={character.name}
      />
      <h4 className="card-personagem-body">{character.name}</h4>
      <span className="card-personagem-body">{character.status}</span>
      <span className="card-personagem-body">{character.gender}</span>
      <BotaoFavorito />
    </div>
  );
}
