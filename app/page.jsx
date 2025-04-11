import { HeroSection } from './_components/HeroSection';

const Home = () => {
	const heroHeadline = 'barrel. your. happiness.';
	return (
		<main>
			<HeroSection headline={heroHeadline} />
		</main>
	);
};

export default Home;
