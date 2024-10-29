import portaint from '../../assets/portaint.jpg'
import './header.css'
import data from './data.js'

const Header = () => {
    return (
        <header id="header">
            <div className="container header__container">
                <div className="header_portfolio">
                    <img src={portaint} alt="Header Portaint" />
                </div>
                <h3>Tô Đông Dương </h3>
                <p>You are a click away from building your dream website or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!</p>
                <div className="header__contact">
                    <a href="#contact" className='btn primary'>Let's Talk</a>
                    <a href="#portfolio" className='btn primary'>My Work</a>
                </div>
                <div className="header__socials">
                    {
                        data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
                    }
                </div>
            </div>
        </header>
    )
}

export default Header