import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCharacters } from "../../redux/actions";
import { InitialState } from "../../types";
import { Faculty } from "../models/model";
import Search from "./Search"
import DetailsButton from "../buttons/DetailsButton";
import AddToFavorites from "../buttons/AddToFavorites";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ".//static/styles.scss"

export default function TableContent() {
    const characters = useSelector((state: InitialState) => state.filterCharacters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);
    return (
        <Paper sx={{ maxWidth: '1500px', overflow: 'hidden', alignSelf: 'center' }}>
            <TableContainer sx={{ height: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Search /></TableCell>
                            <TableCell align="right">House</TableCell>
                            <TableCell align="right">Date of Birth</TableCell>
                            <TableCell align="right">Add to Favorite</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {characters.map((character) => (
                            <TableRow
                                key={character.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <DetailsButton characterId={character.id} characterName={character.name} />
                                </TableCell>
                                <TableCell align="right"> <div className={Faculty(character)}>
                                    <br></br>
                                    <p className="faculty">{character.house !== "" ? character.house : "Unknown"}</p></div></TableCell>
                                <TableCell align="right"> {character.dateOfBirth}</TableCell>
                                <TableCell> <AddToFavorites character={character} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ Paper>
    );
}
