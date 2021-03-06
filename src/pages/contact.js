import React from 'react'

import { Layout } from '../components/Layout/Layout'
import SEO from '../components/seo'
import styles from './styles/contact.module.scss';

const IndexPage = () => (
    <Layout>
        <SEO title="Contact" />
        <form name="contactForm" method="post" className={styles.form} netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="form-name" value="contactForm" />
            <h5 className={styles.greeting}>Nice Weather We're Having</h5>
            <input type="text" placeholder="Name" className={styles.inputs} />
            <input type="email" placeholder="Email" className={styles.inputs} />
            <textarea placeholder="Add  message" className={styles.textarea} />
            <input type="hidden" name="bot-field" />
            <button type="submit">Submit</button>
        </form>
    </Layout>
)

export default IndexPage
