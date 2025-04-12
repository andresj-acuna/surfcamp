import { Header } from './../_components/Layout/Header';
import { HeroSection } from './../_components/HeroSection';
import { InfoBlock } from './../_components/InfoBlock';

const Home = () => {
	const heroHeadline = ['barrel.', 'your.', 'happiness.'];
	const infoBlockData = {
		headline: 'the experience.',
		text: `At Sam’s Surfcamp, we invite you to embark on an unforgettable surfing adventure...`,
		reversed: false,
		button: {
			text: 'Book now',
			color: 'turquoise',
			href: '/events',
		},
	};

	return (
		<>
			<Header theme='orange' />
			<main>
				<HeroSection
					imgSrc={'/assets/hero-experience.png'}
					headline={heroHeadline}
					theme='orange'
				/>
				<InfoBlock data={infoBlockData} />
				<InfoBlock data={{ ...infoBlockData, reversed: true }} />
				<InfoBlock data={infoBlockData} />
			</main>
		</>
	);
};

export default Home;
