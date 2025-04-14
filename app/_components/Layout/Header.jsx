'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = ({ theme = 'turquoise' }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navItems = [
		{
			display: 'the camp.',
			slug: '/',
		},
		{
			display: 'the experience.',
			slug: '/experience',
		},
		{
			display: 'the blog.',
			slug: '/blog',
		},
	];

	return (
		<header className={`header header--${theme}`}>
			<Image
				className='header__logo'
				src='/assets/logo.svg'
				alt='Surf logo'
				width={50}
				height={77}
				priority
			/>
			<button
				className='header__menu-toggle'
				onClick={toggleMenu}
				aria-label='Toggle menu'>
				{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
			</button>
			<nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
				<ul className='header__nav-list'>
					{navItems.map((item) => (
						<li key={item.slug}>
							<Link href={item.slug} className='header__nav-link'>
								{item.display}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<Link className='btn btn--black btn--small' href='/events'>
				Book Now
			</Link>
		</header>
	);
};
