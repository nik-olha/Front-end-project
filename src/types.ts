export type Character = {
    id: number
    name: string
    species: string
    house: string
    dateOfBirth: string
    image: string
    alternate_names: any
    patronus: string
    ancestry: string
    wand: {
        wood: string,
        core: string,
        length: string
    }
}

export type HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => void

export type AddToFavoriteAction = {
    type: "ADD_TO_FAVORITE",
    payload: {
        character: Character
    }
}

export type DeleteFromFavoriteAction = {
    type: "DELETE_FROM_FAVORITE",
    payload: {
        character: Character
    }
}

export type GetCharactersAction = {
    type: "GET_CHARACTERS",
    payload: {
        characters: Character[]
    }
}

export type FilterCharactersAction = {
    type: "FILTER_CHARACTERS",
    payload: {
        keyword: string
    },
}

export type GetGryffindorAction = {
    type: "GET_GRYFFINDOR",
}

export type CharacterActions = AddToFavoriteAction | DeleteFromFavoriteAction | GetCharactersAction | FilterCharactersAction | GetGryffindorAction

export type InitialState = {
    characters: Character[],
    filterCharacters: Character[],
    favorite: Character[]
    color: string
}
