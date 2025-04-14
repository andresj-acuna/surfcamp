import { Header } from './_components/Layout/Header';
import { HeroSection } from './_components/HeroSection';
import { InfoBlock } from './_components/InfoBlock';
import { fetchDataFromStrapi, normalizeInfoBlock } from '@/utils/strapi.utils';

const Home = async () => {
	const data = await fetchDataFromStrapi('infoblocks-landing?populate=deep');

	const infoBlocksRaw = data.attributes.info_blocks.data;
	const infoBlocks = infoBlocksRaw.map(normalizeInfoBlock);

	const heroHeadline = ['barrel.', 'your.', 'happiness.'];

	return (
		<>
			<Header theme='turquoise' />
			<main>
				<HeroSection headline={heroHeadline} theme='turquoise' />
				{infoBlocks.map((block) => (
					<InfoBlock key={block.id} data={block} />
				))}
			</main>
		</>
	);
};

export default Home;
