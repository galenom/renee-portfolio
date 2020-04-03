import React from 'react';
import { createPortal } from 'react-dom';
import GatsbyImage from 'gatsby-image'
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from './ExpandedGalleryImage.module.scss';
import { useScrollLock } from '../hooks/useScrollLock';

export const ExpandedGalleryImage = ({
    isVisible,
    imageData,
    closeModal,
    onNext,
    onPrevious
}) => {    
    useScrollLock(isVisible);

    const modalClasses = [
        styles.portal,
        !isVisible && styles.hidden
    ].filter(Boolean).join(' ');

    return typeof window !== 'undefined' && createPortal(
        <aside className={modalClasses}>
            <section className={styles.controls}>
                <button className={styles.closeBtn} onClick={closeModal}>
                    <CloseIcon />
                </button>
            </section>
            <article className={styles.content}>
                <section className={styles.carousel}>
                        <button className={styles.carouselBtn} onClick={onPrevious}><ChevronLeftIcon /></button>
                        {
                            imageData && (
                                <GatsbyImage
                                    fluid={imageData.image.childImageSharp.fluid}
                                    className={styles.img}
                                    imgStyle={{
                                        objectFit: 'contain'
                                    }}
                                />
                            )
                        }
                        <button className={styles.carouselBtn} onClick={onNext}><ChevronRightIcon /></button>
                </section>
                <section className={styles.details}>
                    <h1>{imageData?.title}</h1>
                    <p>{imageData?.subtitle}</p>
                </section>
            </article>
        </aside>,
        document.body
    );
}