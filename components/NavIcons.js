import React from "react";
import Image from "next/image";

function NavIcons() {
    return (
      <div className="nav-icons">
          <Image
          className="search-icon" alt="search icon" width="40" height="40"
          src="/icon-awesome-search.png"
        />
        <Image
          className="favorites-icon" alt="favorite icon" width="40" height="40"
          src="/icon-material-favorite-border.png"
        />
        <Image
          className="shopping-icon" alt="shopping icon" width="40" height="40"
          src="/icon-awesome-shopping-bag.png"
        />
      </div>
    );
  }

  export default NavIcons