import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function DetailsButton({ characterId, characterName }: { characterId: number, characterName: string }) {
  return (
    <div>
      <Button component={Link} to={`/detail/${characterId}`} color="inherit"> {characterName} </Button>
    </div>
  );
}

export function Details({ characterId }: { characterId: number }) {
  return (
    <div>
      <Button component={Link} to={`/detail/${characterId}`} color="inherit">Details</Button>
    </div>
  );
}
