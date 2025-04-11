import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
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
		<header className='header'>
			<Image
				className='header__logo'
				src='/assets/logo.svg'
				alt='Surf logo'
				width={50}
				height={77}
				priority
			/>
			<ul className='header__nav'>
				{navItems.map((item) => (
					<li key={item.slug}>
						<Link href={item.slug}>{item.display}</Link>
					</li>
				))}
			</ul>
			<Link href='/events'>
				<button className='btn btn--black btn--small'>Book Now</button>
			</Link>
		</header>
	);
};
