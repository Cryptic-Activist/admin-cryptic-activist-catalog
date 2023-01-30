export const capitalizePathname = (string: string, splitFactor: string) => {
  const array = string.split(splitFactor);
  const capitalized = array.map((element) => {
    const initial = element.substring(0, 1).toUpperCase();
    const rest = element.substring(1, element.length);
    return initial.concat(rest);
  });
  return capitalized.join(" ");
};

export const toUpperCase = (text: string) => {
  return text.toUpperCase();
};

export const toLowerCase = (text: string) => {
  return text.toLowerCase();
};

export const getInitials = (firstName: string, lastName: string): string => {
  const firstInitial: string = firstName.substring(0, 1).toUpperCase();
  const lastInitial: string = lastName.substring(0, 1).toUpperCase();

  return firstInitial.concat(lastInitial);
};
