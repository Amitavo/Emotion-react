import React from "react";
import GenreCard from "../components/GenreCard";
import Meditational from "../img/genre/meditational.jpg";
import Devotional from "../img/Images_by_Arindam/dakile_jodi_artwork.jpg";
import Classical from "../img/Images_by_Arindam/sanjhbati_ghor_artwork.jpg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export default function SectionGenre() {
  return (
    <div className="section-genre">
      <div className="container ">
        <div className="row ">
          <div className="col-lg-6 m-0 p-0 pb-3 ">
            <NavLink href="/bengali">
              <GenreCard text="Bengali" />
            </NavLink>
          </div>
          <div className="col-lg-6 m-0 p-0 pb-3 ">
            <NavLink href="/meditational">
              <GenreCard text="Meditational" image={Meditational} />
            </NavLink>
          </div>
          <div className="col-lg-6 m-0 p-0 pb-3 ">
            <NavLink href="/devotional">
              <GenreCard text="Devotional" image={Devotional} />
            </NavLink>
          </div>
          <div className="col-lg-6 m-0 p-0 pb-3 ">
            <NavLink href="/classical">
              <GenreCard text="Classical" image={Classical} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
