import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	const footerItems = [
		{
			display: 'the camp.',
			slug: '/',
		},
		{
			display: 'the blog.',
			slug: '/blog',
		},
		{
			display: 'the experience.',
			slug: '/experience',
		},
		{
			display: 'the events.',
			slug: '/events',
		},
	];

	const policies = [
		{
			display: 'Imprint',
			slug: '/imprint',
		},
		{
			display: 'Terms and Conditions',
			slug: '/toc',
		},
		{
			display: 'Data Protection',
			slug: '/data-protection',
		},
	];

	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<Image
					className='footer__logo'
					src='/assets/logo.svg'
					alt='Surf footer logo'
					width={80}
					height={123}
				/>
				<ul className='footer__nav'>
					{footerItems.map((item) => (
						<li key={item.slug}>
							<Link href={item.slug}>{item.display}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className='footer__policies'>
				<ul className='footer__policies-nav'>
					{policies.map((policy) => (
						<li key={policy.slug}>
							<Link href={policy.slug}>{policy.display}</Link>
						</li>
					))}
				</ul>
				<p className='copy'>© Sam’s Surfcamp - all rights reserved</p>
			</div>
		</footer>
	);
};
