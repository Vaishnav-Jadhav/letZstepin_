import { Link } from "react-router-dom";


export function Header() {
  return (
    <>
      <header className="w-100 p-3 bg-black text-white d-flex justify-content-between px-auto align-content-center position-sticky top-0 z-1">
        <div className="d-flex justify-content-center">
          <Link to="/">
            <img src="/assets/brandLogo.png" height={40} />
          </Link>
        </div>
        <div className="d-flex justify-content-around">
          <div>
            <Link to="/">
              <button className="btn btn-black border-1 text-light">
                Home
              </button>
            </Link>
            <Link to="/work">
              <button className="btn btn-black border-1 text-light">
                Work
              </button>
            </Link>
            <Link to="/about">
              <button className="btn btn-black border-1 text-light">
                About Us
              </button>
            </Link>
            <Link to="/location">
              <button className="btn btn-black border-1 text-light">
                Location
              </button>
            </Link>
          </div>
          <div>
            <Link to="/signin">
              <button className="btn btn-light rounded-4 fw-semibold text-dark">
                sign-in
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}