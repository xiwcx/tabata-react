type LeftPad = (str: string, len: number, character?: string) => string;
export const leftPad: LeftPad = (str, len, character = " ") => {
  if (character.length !== 1) {
    throw Error("character should have length of one");
  }

  if (str.length >= len) return str;

  return `${new Array(len - str.length).fill(character).join("")}${str}`;
};
