import React from "react";
import '../styles/header.css';

const Header = () => (
  <header class="header">
    <div class="header__left">
        <a href="https://www.linkedin.com/in/najel-alarcon/" target="_blank" class="header__icon">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Najel-A" target="_blank" class="header__icon">
            <i class="fab fa-github"></i>
        </a>
    </div>
    <div class="header__right">
        <a href="mailto:najel.alarcon@sjsu.edu" class="header__icon">
            <i class="fas fa-envelope"></i>
        </a>
        <span class="header__contact-text">Contact Me</span>
    </div>
</header>

);

export default Header;
