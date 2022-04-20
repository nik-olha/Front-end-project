import { Character } from "../../types"

 export function Faculty(character: Character) {
  if (character.house === "Gryffindor") {
      return "hp-character griffindor"
  }
  else if (character.house === "Slytherin") {
      return "hp-character slytherin"
  }
  else if (character.house === "Ravenclaw") {
      return "hp-character ravenclaw"
  }
  else if (character.house === "Hufflepuff") {
      return "hp-character hufflepuff"
  }
  else {
      return "hp-character non"
  };
}
