import { Dispatch } from "redux";
import { Character, GetCharactersAction, FilterCharactersAction, AddToFavoriteAction, DeleteFromFavoriteAction, GetGryffindorAction } from "../types";

export function fetchCharacters() {
  return (dispatch: Dispatch) => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((data) => dispatch(getCharacters(data)));
  };
}

export function getCharacters(characters: Character[]): GetCharactersAction {
  return {
    type: "GET_CHARACTERS",
    payload: {
      characters,
    },
  };
}

export function filterCharacters(keyword: string): FilterCharactersAction {
  return {
    type: "FILTER_CHARACTERS",
    payload: {
      keyword,
    },
  };
}

export function addToFavorite(character: Character): AddToFavoriteAction {
  return {
    type: "ADD_TO_FAVORITE",
    payload:
    {
      character
    }

  }
}

export function deleteFromFavorite(character: Character): DeleteFromFavoriteAction {
  return {
    type: "DELETE_FROM_FAVORITE",
    payload: {
      character
    }
  }
}

export function getGryffindor(): GetGryffindorAction {
  return {
    type: "GET_GRYFFINDOR",
  }
}
