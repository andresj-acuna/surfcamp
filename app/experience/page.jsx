import { Header } from './../_components/Layout/Header';
import { HeroSection } from './../_components/HeroSection';
import { InfoBlock } from './../_components/InfoBlock';
import { fetchDataFromStrapi, normalizeInfoBlock } from '@/utils/strapi.utils';

const Experience = async () => {
	const data = await fetchDataFromStrapi('infoblocks-experience?populate=deep');

	const infoBlocksRaw = data.attributes.info_blocks.data;
	const infoBlocks = infoBlocksRaw.map(normalizeInfoBlock);

	const heroHeadline = ['barrel.', 'your.', 'happiness.'];

	return (
		<>
			<Header theme='orange' />
			<main>
				<HeroSection
					imgSrc={'/assets/hero-experience.png'}
					mobileImgSrc={'/assets/hero-experience-mobile.webp'}
					heroAlt={'Luxury oceanview glamping'}
					headline={heroHeadline}
					theme='orange'
				/>
				{infoBlocks.map((block) => (
					<InfoBlock key={block.id} data={block} />
				))}
			</main>
		</>
	);
};

export default Experience;
