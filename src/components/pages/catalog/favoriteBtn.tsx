import { Product } from "../../../api/models/product";
import {
  useFavoritesByUserQuery,
  useFavoriteCreateMutation,
  useFavoriteDeleteMutation,
} from "../../../api/slices/favoriteApiSlice";
import { useUserInfoQuery } from "../../../api/slices/userApiSlice";

function FavoriteBtn(input: { product: Product }) {
  const {
    data: user,
    isLoading: isUserLoading,
    error: userError,
  } = useUserInfoQuery({});

  const userId = user?.id;
  const productId = input.product.id;

  const {
    data: favorites,
    isLoading: isFavoritesLoading,
    error: favoritesError,
  } = useFavoritesByUserQuery({
    req: { idUser: userId },
  });

  const [addFavorite, { isLoading: isAdding }] = useFavoriteCreateMutation();
  const [removeFavorite, { isLoading: isRemoving }] =
    useFavoriteDeleteMutation();

  const isFavorited = favorites?.some(
    (f) => f.idProduct === productId && f.idUser === userId
  );

  const handleClick = async () => {
    if (!userId || isAdding || isRemoving) return;

    const favorite = { idUser: userId, idProduct: productId };

    try {
      if (isFavorited) {
        await removeFavorite({ req: favorite }).unwrap();
      } else {
        await addFavorite(favorite).unwrap();
      }
    } catch (e) {
      console.error("Ошибка при обновлении избранного:", e);
    }
  };

  if (isUserLoading || isFavoritesLoading) {
    return <p className="color-white">Загрузка...</p>;
  }

  if (userError || favoritesError) {
    return <p className="color-white">Ошибка загрузки</p>;
  }

  return (
    <p
      className="color-white"
      onClick={handleClick}
      style={{ cursor: isAdding || isRemoving ? "wait" : "pointer" }}
    >
      {isAdding || isRemoving
        ? "⏳"
        : isFavorited
          ? "★ Удалить из избранного"
          : "☆ В избранное"}
    </p>
  );
}

export default FavoriteBtn;
