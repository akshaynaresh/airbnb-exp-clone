import airbnbLogo from '../images/airbnb-logo.png'
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={airbnbLogo} alt='AirBnB Logo' className='nav-logo'/>
    </nav>
  );
}