const setFavProductToLocalStorage = (value) =>
  localStorage.setItem("favProduct", JSON.stringify(value));

//if local Storage key is exist get data from local Storage, or set key to local Storage
const getFavProductFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("favProduct")) || setFavProductToLocalStorage([]);

export const favouriteProductReducer = (state = getFavProductFromLocalStorage(), action) => {
  switch (action.type) {
    case "ADD_FAV":
      //check  fav product from enter is already exist in fav array
      const checkAlreadyProduct = state.some((data) => data.id == action.payload.id);
      //if does not exist,push to the fav array to local Storage or nothing does
      !checkAlreadyProduct && setFavProductToLocalStorage([...state, action.payload]);
      //return fav array from local storage
      console.log(getFavProductFromLocalStorage());
      return getFavProductFromLocalStorage();

    case "SUB_FAV":
      //remove product from fav array
      const AfterRemoveFavProduct = state.filter((data) => data.id != action.payload.id);
      //set after remove fav product data to fav array to push local Storage
      setFavProductToLocalStorage(AfterRemoveFavProduct);
      //return fav array from local storage
      return getFavProductFromLocalStorage();

    default:
      return state;
  }
};
