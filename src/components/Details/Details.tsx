import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { InitialState } from "../../types"
import { Faculty } from "../models/model";
import Delete from "../buttons/Delete"
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import HomeButton from "../buttons/HomeButton";
import AddToFavorites from "../buttons/AddToFavorites";
import ".//static/Details.scss"

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';


export default function Details() {
    const characters = useSelector((state: InitialState) => state.characters);
    const { id } = useParams();
    const detailedCharacter = characters.filter(
        (character) => character.id.toString() === id 
    );
    return (
        <div>
            <Navigation />
            <div className="details">
                <div >{detailedCharacter.map((character) => {
                    return (
                        <Card key={character.id} className="card" >
                            <CardHeader sx={{ color: grey[800], padding: 0 }}
                                avatar={
                                    <Avatar className={Faculty(character)} ><br></br>
                                    </Avatar>
                                }
                                title={character.name}
                                subheader={character.dateOfBirth !== "" ? character.dateOfBirth : "Date of birth is unknown"}
                            />
                            <CardMedia
                                component="img"
                                height="350"
                                image={character.image !== "" ? character.image : require("./static/ghost.gif")}
                                alt="Image"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    <p> Alternative names: <br></br>
                                        {character.alternate_names.join(", ")}
                                    </p>
                                </Typography>
                                House: {character.house !== "" ? character.house : "Unknown"} <br></br>
                                Ancestry: {character.ancestry !== "" ? character.ancestry : "Unknown"}
                                <br></br>
                                Wand: {character.wand.wood !== "" ? character.wand.wood : "Unknown"} {character.wand.core} {character.wand.length}{character.wand.wood !== "" ? "inches" : ""}
                            </CardContent>
                            <div className="buttons">
                                <div className="favorites">
                                    <AddToFavorites character={character} /> <Delete character={character} /></div>
                                <HomeButton />
                            </div>
                        </Card>
                    );
                })}</div>
            </div>
            <Footer />
        </div>
    )
}
