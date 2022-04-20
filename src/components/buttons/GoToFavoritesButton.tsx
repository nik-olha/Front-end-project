import { useSelector } from "react-redux";
import { InitialState } from "../../types";
import { Link } from 'react-router-dom';

import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from "@mui/material/colors";


const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function ToFavorites() {
  const favorites = useSelector((state: InitialState) => state.favorite);
  return (
    <div>
      <IconButton aria-label="favorite" component={Link} to={`/favorites/`}>
        <StyledBadge badgeContent={!favorites.length ? "" : favorites.length} color="secondary">
          <FavoriteIcon sx={{ color: pink[400] }} fontSize="large" />
        </StyledBadge>
      </IconButton>
    </div>
  );
}
