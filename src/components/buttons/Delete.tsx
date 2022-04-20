import { useDispatch, useSelector } from 'react-redux';
import { deleteFromFavorite } from '../../redux/actions';
import { Character, InitialState } from '../../types';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Delete({ character }: { character: Character }) {
    const dispatch = useDispatch();
    const favorites = useSelector((state: InitialState) => state.favorite);
    function isItDisabled(item: Character) {
        if (favorites.filter((character: Character) => character.id === item.id).length > 0) {
            return false
        }
        return true;
    }
    return (
        <IconButton disabled={isItDisabled(character)} aria-label="delete" size="small"
            onClick={() => dispatch(deleteFromFavorite(character))}>
            <DeleteIcon />
        </IconButton>
    )
}
