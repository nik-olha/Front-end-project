import { Link } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { IconButton } from "@mui/material";

export default function ButtonHome() {
  console.log("Button is rendering...");
  return (
    <IconButton component={Link} to={`/`}>
      <HomeRoundedIcon color="action" fontSize="large" />
    </IconButton>
  );
}
