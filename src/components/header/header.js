import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
import styles from './header.module.scss';

export const Header = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <Link to="/" activeClassName={styles.selectedNav} exact>Portfolio</Link>
        <Link to="/illustrations" activeClassName={styles.selectedNav}>Illustrations</Link>
        <a href="https://vsco.co/reneevalvarez/images" target="_blank" rel="noopener noreferrer">Photography</a>
        <Link to="/contact" activeClassName={styles.selectedNav}>Contact</Link>
      </nav>
      <section className={styles.portfolioHeader}>
        <img src="/graphic-renee.webp" alt='renee-graphic-rendition' className={styles.graphicRenee} />
        <div className={styles.descriptionWrapper}>
          <h1 className={styles.portfolioDescription}>
            I'm Renee.
                    </h1>
          <p>Creative | Graphic Designer</p>
        </div>
      </section>
    </>
  )
}