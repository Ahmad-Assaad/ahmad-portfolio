import "../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <a href="#hello">Home</a>
        <a href="#about-me">About me</a>
        <a href="#experience">Experience</a>
        <a href="#contact-me">Contact me</a>
      </ul>
    </div>
  );
}

export default Navbar;
