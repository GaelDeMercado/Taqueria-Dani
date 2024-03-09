import React from 'react'
import { pageLinks, socialLinks } from '../data'

export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li>
              <a href={link.href} target="_blank" className="nav-icon">
                <i className={link.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Taqueria Dani ❤️
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}
