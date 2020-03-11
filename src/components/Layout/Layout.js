/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import '../default.scss'
import styles from './Layout.module.scss';
import { Footer } from '../Footer'
import { Header } from '../Header';

export const Layout = ({ children }) => {


  return (
    <div className={styles.site}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};