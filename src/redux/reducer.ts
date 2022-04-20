import { Character, CharacterActions, InitialState } from "../types";

const initialState: InitialState = {
  characters: [],
  filterCharacters: [],
  favorite: [],
  color: ""
};

export default function Reducer(state = initialState, action: CharacterActions): InitialState {
  switch (action.type) {
    case "GET_CHARACTERS": {
      console.log(state);
      action.payload.characters.forEach((c, i) => { c.id = i; });
      return {
        ...state,
        characters: action.payload.characters,
        filterCharacters: action.payload.characters,
      };
    }
    case "FILTER_CHARACTERS": {
      let filteredData = state.characters.filter((character: Character) => {
        return (
          character.name
            .toLowerCase()
            .search(action.payload.keyword.toLocaleLowerCase()) !== -1
        );
      });
      return {
        ...state,
        filterCharacters: filteredData,
      };
    }
    case "ADD_TO_FAVORITE": {
      const { character } = action.payload;
      let favoriteNames = state.favorite.map((character: Character) => {
        return (character.id)
      })
      if (favoriteNames.includes(character.id)) {
        console.log(state.favorite)
        return state
      } else {
        return {
          ...state,
          favorite: [...state.favorite, character],
        };
      }
    }
    case "DELETE_FROM_FAVORITE": {
      const { character } = action.payload;
      return {
        ...state,
        favorite: state.favorite.filter(function (item) {
          return item.id !== character.id;
        }),
      };
    }
    case "GET_GRYFFINDOR": {
      const houses = ["gryffindor", "hufflepuff", "slytherin", "ravenclaw"]
      return {
        ...state,
        color: houses[Math.floor(Math.random() * houses.length)]
      };
    }
    default:
      return state;
  }
}
