import { Favorite } from "../../../api/models/favorite";
import { Product } from "../../../api/models/product";
import {
  // useFavoritesByUserQuery,
  useFavoriteCreateMutation,
  useFavoriteDeleteMutation,
} from "../../../api/slices/favoriteApiSlice";
import { useProductCatalogQuery } from "../../../api/slices/productApiSlice";
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
    data: favoritesProduct,
    isLoading: isFavoritesLoading,
    error: favoritesError,
  } = useProductCatalogQuery({ req: { id: 0, isFavorite: true } });

  const [addFavorite, { isLoading: isAdding }] = useFavoriteCreateMutation();
  const [removeFavorite, { isLoading: isRemoving }] =
    useFavoriteDeleteMutation();

  const isFavorited = favoritesProduct?.some((f) => f.id === productId);

  const handleClick = async () => {
    if (!userId || isAdding || isRemoving) return;

    let favorite: Favorite = {
      idUser: userId,
      idProduct: productId,
    };

    try {
      if (isFavorited) {
        await removeFavorite({ req: favorite }).unwrap();
      } else {
        await addFavorite({ req: favorite }).unwrap();
      }
    } catch (e) {
      console.error("Ошибка при обновлении избранного:", e);
    }
  };

  if (isUserLoading || isFavoritesLoading) {
    return <p className="color-white">Загрузка...</p>;
  }

  if (userError || favoritesError) {
    return <p className="color-white"></p>;
  }

  return (
    <p
      className="color-white"
      onClick={handleClick}
      style={{ cursor: isAdding || isRemoving ? "wait" : "pointer" }}
    >
      {isAdding || isRemoving ? "⏳" : isFavorited ? "★" : "☆"}
    </p>
  );
}

export default FavoriteBtn;
