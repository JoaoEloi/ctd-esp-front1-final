import "./botao-favorito.css";
import { addFavorite } from "../../state/characters";
import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { ICharacter } from "../../types";
import FavIcon from "../../assets/png-transparent-star-polygons-in-art-and-culture-shape-computer-icons-favorited-angle-triangle-orange-thumbnail.png";
import UnfavIcon from "../../assets/star_favs_icon-icons.com_72395.png";
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */

interface CharacterProps {
  character: ICharacter;
}

const BotaoFavorito = (props: CharacterProps): ReactElement => {
  const dispatch = useAppDispatch();
  const { character } = props;

  const favorites = useAppSelector((state) => state.characters.favorites);
  const isFavorite = favorites.find((s) => s.id == character.id) !== undefined;

  function onClickAddFavorite() {
    dispatch(addFavorite(character));
  }

  return (
    <div className="botao-favorito">
      <button
        className={`character ${isFavorite ? FavIcon : UnfavIcon}`}
        onClick={onClickAddFavorite}
      >
        Favoritar
      </button>
    </div>
  );
};

export default BotaoFavorito;
