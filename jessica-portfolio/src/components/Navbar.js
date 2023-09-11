import React from 'react';

function Navbar() {
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#home" onClick={() => handleNavigation('home')}>
            Home
          </a>
        </li>
        {/* Other navigation items */}
      </ul>
    </nav>
  );
}

export default Navbar;
