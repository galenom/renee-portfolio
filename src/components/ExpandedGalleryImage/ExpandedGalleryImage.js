import React from 'react';
import { createPortal } from 'react-dom';
import GatsbyImage from 'gatsby-image'
import { useSwipeable } from 'react-swipeable';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from './ExpandedGalleryImage.module.scss';
import { useScrollLock } from '../hooks/useScrollLock';
import { Favorite } from '../Favorite';

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

    const handlers = useSwipeable({
        onSwipedLeft: onNext,
        onSwipedRight: onPrevious
    })

    return typeof window !== 'undefined' && createPortal(
        <aside className={modalClasses}>
            <section className={styles.controls}>
                <button className={styles.backBtn} onClick={closeModal}>
                    <KeyboardBackspaceIcon fontSize="large" />
                </button>
                <Favorite title={imageData?.title} dark/>
                <button className={styles.closeBtn} onClick={closeModal}>
                    <CloseIcon fontSize="large" />
                </button>
            </section>
            <article className={styles.content}>
                <section className={styles.carousel} {...handlers}>
                        <button className={styles.carouselBtn} onClick={onPrevious}><ChevronLeftIcon fontSize="large" /></button>
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
                        <button className={styles.carouselBtn} onClick={onNext}><ChevronRightIcon fontSize="large" /></button>
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