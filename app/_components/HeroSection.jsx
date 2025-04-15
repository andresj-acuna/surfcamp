import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = ({ imgSrc, headline, theme = 'turquoise' }) => {
	return (
		<section className={`hero hero--${theme}`}>
			<div className='hero__background'>
				<Image
					src={imgSrc || '/assets/hero-home.png'}
					alt='Surfer riding a wave'
					width={1440}
					height={830}
					priority
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
