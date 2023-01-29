export const capitalizePathname = (string: string, splitFactor: string) => {
  const array = string.split(splitFactor);
  const capitalized = array.map((element) => {
    const initial = element.substring(0, 1).toUpperCase();
    const rest = element.substring(1, element.length);
    return initial.concat(rest);
  });
  return capitalized.join(" ");
};
