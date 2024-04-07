import React, { Fragment } from "react";
import Link from 'next/link'

function Navigation() {
  return (
    <Fragment>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            
          <Link className="navbar-brand" href="/">
            Featured Events
          </Link>
          <Link className="navbar-brand" href="/events">
            All Events
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navigation;
