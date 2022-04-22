export const favproductAction = (favActionName, data) => {
  console.log({ favActionName, data });
  return { type: favActionName, payload: data };
};
