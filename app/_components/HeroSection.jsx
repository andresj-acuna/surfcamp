'use client';

import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from '../_hooks/useMediaQuery';

export const HeroSection = ({
	imgSrc,
	mobileImgSrc,
	heroAlt,
	headline,
	theme = 'turquoise',
}) => {
	const isMobile = useMediaQuery('(max-width: 768px)');

	const imageToShow = isMobile
		? mobileImgSrc || imgSrc
		: imgSrc || '/assets/hero-home.png';

	return (
		<section className={`hero hero--${theme}`}>
			<div className='hero__background'>
				<Image
					src={imageToShow}
					alt={heroAlt}
					width={1440}
					height={830}
					priority
					loading='eager'
					sizes='(max-width: 768px) 100vw, 1440px'
				/>
			</div>
			<div className='hero__headline'>
				<h1>
					{headline.map((word, i) => (
						<span key={i}>{word}</span>
					))}
				</h1>
			</div>
			<Link href='/events' className='btn btn--medium'>
				Book Now
			</Link>
			<Image
				className='hero__logo'
				src='/assets/logo.svg'
				alt='Surf hero logo'
				width={120}
				height={185}
			/>
		</section>
	);
};
