import PropTypes from 'prop-types'
import Logo from "./Logo";


const Header = ({ title}) => {


    return (
        <div className="head">
            <header className='header'>
                <Logo/>
                <h2 >{title}</h2>

             </header>
        </div>

    )
}

Header.defaultProps = {
    title: 'Gaming diary',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}



export default Header
