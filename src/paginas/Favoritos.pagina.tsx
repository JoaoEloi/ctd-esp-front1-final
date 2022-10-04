import CardPersonagem from "../componentes/personagens/card-personagem.componente";
import { useAppSelector } from "../state/hooks";
import { ReactElement } from "react";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = (): ReactElement => {
  const favorites = useAppSelector((state) => state.characters.favorites);
  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>

        <button className="danger">Test Button</button>
      </div>
      {favorites.map((favorite) => (
        <CardPersonagem key={favorite.id} character={favorite} />
      ))}
    </div>
  );
};

export default PaginaFavoritos;
