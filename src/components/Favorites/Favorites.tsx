import { useSelector } from "react-redux";
import { Details } from "../buttons/DetailsButton"
import { InitialState } from "../../types";
import { Faculty } from "../models/model";
import Delete from "../buttons/Delete";
import Navigation from "../Navigation/NavFavorites";
import Footer from "../Footer/Footer";
import ".//static/cards.scss"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Avatar, CardHeader } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Favorites() {
    const favorites = useSelector((state: InitialState) => state.favorite);
    console.log(favorites)
    return (
        <div>
            <Navigation />
            <div className="cards">
                {favorites.map((character) => {
                    return (
                        <div className="card">
                            <Card sx={{ maxWidth: 345, padding: 2 }}>
                                <CardHeader sx={{ color: grey[800] }}
                                    avatar={
                                        <Avatar className={Faculty(character)} ><br></br>
                                        </Avatar>
                                    }
                                    title={character.name}
                                    subheader={character.dateOfBirth !== "" ? character.dateOfBirth : "Date of birth is unknown"}
                                />
                                <h1>{character.name}</h1>
                                <CardActions className="buttons">
                                    <Delete character={character} />
                                    <Details characterId={character.id} />
                                </CardActions>
                            </Card>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}
