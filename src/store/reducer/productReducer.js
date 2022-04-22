import { api } from "../api";
export const productReducer = (state = SortArrayByName(api), action) => {
  switch (action.type) {
    case "Filter_others":
      return SortArrayByName(api.filter((product) => product.cat == "others"));

    case "Filter_hats":
      return SortArrayByName(api.filter((product) => product.cat == "hats"));

    case "Filter_handmades":
      return SortArrayByName(api.filter((product) => product.cat == "handmades"));

    case "Filter_bags":
      return SortArrayByName(api.filter((product) => product.cat == "bags"));

    case "Filter_books":
      return SortArrayByName(api.filter((product) => product.cat == "books"));

    case "Filter_all":
      return SortArrayByName(api);

    default:
      return state;
  }
};

const SortArrayByName = (array) => {
  return array.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
};
