function Navbar() {
    return (
  <nav
    className="navbar navbar-expand-lg bg-dark border-bottom border-body"
    data-bs-theme="dark"
  >
    <div className="container-fluid d-flex justify-content-around">
      <a className="navbar-brand ms-5" href="#">
        HACKFLIX
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-end me-5"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
}

export default Navbar;
