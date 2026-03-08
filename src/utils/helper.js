export function filterRestaurants(searchText, restaurants, setNoResult) {
  const result = restaurants.filter((rest) =>
    rest.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  if (result.length === 0) {
    setNoResult(true);
  } else {
    setNoResult(false);
  }
  return result;
}
