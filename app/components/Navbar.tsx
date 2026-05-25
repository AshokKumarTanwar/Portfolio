export default function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        👨🏻‍💻
      </div>

      {/* Nav Links */}
      <ul className="navLinks">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>MORE</li>
      </ul>

      {/* Contact Button + Notification */}
      <div className="contactWrapper">

        <button className="contactBtn">
          NOTIFICATION
        </button>

        <span className="notificationCount">
          3
        </span>

      </div>

    </nav>
  );
}