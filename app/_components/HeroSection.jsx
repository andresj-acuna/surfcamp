import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = ({ imgSrc, headline, theme = 'turquoise' }) => {
	return (
		<section className={`hero hero--${theme}`}>
			<div className='hero__background'>
				<Image
					src={imgSrc || '/assets/hero-image.png'}
					alt='Surf hero background'
					width={1440}
					height={830}
					priority
				/>
			</div>
			<div className='hero__headline'>
				<h1>
					{headline.map((word, i) => (
						<span key={i}>{word}</span>
					))}
				</h1>
			</div>
			<button className='btn btn--medium'>
				<Link href='/events'>Book Now</Link>
			</button>
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
