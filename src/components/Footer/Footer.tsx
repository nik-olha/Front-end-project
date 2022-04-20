import "../../App.scss"
import ".//static/footer.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton} from "@mui/material";

export default function Footer() {
  return (
    <div className="footer">
      <p>little frontend project</p>
      <IconButton href='https://github.com/nik-olha/is3-frontend-project/tree/demo-frontend-project'>
      <GitHubIcon  />
      </IconButton>
    </div>
  )
}
