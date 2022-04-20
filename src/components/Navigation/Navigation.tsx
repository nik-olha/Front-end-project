import ".//static/Navigation.scss"
import logo from ".//static/Group.png"
import ToFavorites from '../buttons/GoToFavoritesButton'

export default function Navigation() {
    return (
        <div className='nav'>
            <Logo />
            <div className='navFavorites'>
                <ToFavorites />
            </div>
        </div>
    )
}

export function Logo() {
    return (
        <ul>
            <li>
                <img className='image' src={logo} alt="Logo" />
            </li>
            <li>Welcome to the magic search</li>
        </ul>
    )
}
