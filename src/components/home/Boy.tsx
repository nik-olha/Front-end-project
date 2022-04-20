import { useDispatch, useSelector } from "react-redux";
import { getGryffindor } from "../../redux/actions";
import { InitialState } from "../../types";
import "../../App.scss"

import Button from '@mui/material/Button';

export default function Boy() {
    const dispatch = useDispatch();
    const colors = useSelector((state: InitialState) => state.color);
    const handleGryffingor = () => {
        dispatch(getGryffindor());
    };
    return (
        <div>
            <div className="main-content__wrapper">
                <div className="main-content">
                    <div className="sorting-hat">
                        <div className="sorting-hat__answer">{colors}</div>
                        <div className="sorting-hat__top"></div>
                        <div className="sorting-hat__eye left"></div>
                        <div className="sorting-hat__eye right"></div>
                        <div className="sorting-hat__mouth"></div>
                        <div className="sorting-hat__base"></div>
                    </div>
                    <div className="avatar">
                        <div className="avatar__hair"></div>
                        <div className="avatar__head">
                            <div className="avatar__eyes left"></div>
                            <div className="avatar__eyes right"></div>
                            <div className="avatar__mouth"></div>
                        </div>
                        <div className="avatar__ears left"></div>
                        <div className="avatar__ears right"></div>
                        <div className="avatar__coat">
                            <div className="avatar__shirt">
                                <div className="avatar__tie"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button size="large" color="inherit" className='sortbutton' onClick={handleGryffingor}> Sort me!</Button>
            </div>
        </div>
    )
}
