import PropTypes from 'prop-types'


const Header = ({ title}) => {


    return (
        <header className='header'>

            <h2>{title}</h2>

        </header>
    )
}

Header.defaultProps = {
    title: 'Gaming diary',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
