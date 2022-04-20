import ".//static/Navigation.scss"
import { Logo } from './Navigation'
import ButtonHome from '../buttons/HomeButton'

export default function Navigation() {
    return (
        <div className='nav'>
                 <Logo/>
            <div className='navFavorites'>
                <ButtonHome />
            </div>
        </div>
    )
}
