import { useDispatch, useSelector } from 'react-redux';
import { Character, InitialState } from '../../types';
import { addToFavorite } from '../../redux/actions';
import Button from '@mui/material/Button';


export default function AddToFavorites({ character }: { character: Character }) {
  const dispatch = useDispatch();
  function isItDisabled(item: Character) {
    if (favorites.filter((character: Character) => character.id === item.id).length > 0) {
      return true
    }
    return false;
  }
  const favorites = useSelector((state: InitialState) => state.favorite);
  return (
    <Button color="inherit"
      disabled={isItDisabled(character)}

      onClick={() => {
        dispatch(addToFavorite(character))
      }}> add to Favorite </Button>
  )
}
