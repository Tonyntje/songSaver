
import { Link } from 'react-router-dom'
import '../css/navMenu.css'

export default function NavMenu() {
    return (
        <div className='nav-menu'>
            <div className='pfp'>
                <a href="https://github.com/Tonyntje" target="_blank" rel="noreferrer">
                    <img alt="tony profile" src="https://i.pinimg.com/736x/7c/ce/af/7cceaf0ccc8303837e6acb7c215a0ee1.jpg" />
                </a>
            </div>
            <nav>
                <Link to={"/about"}>About</Link>
                <Link to={"/"}>Overview</Link>
                <Link to={"/deze-link-bestaat-niet-hey"}>Error page</Link>
            </nav>
        </div>
    )
}