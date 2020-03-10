import React from 'react';
import { Banner } from './Banner';
import { Menu } from './Menu';

export const Header = () => {
    return (
        <header>
            <Menu />
            <Banner />
        </header>
    )
}
