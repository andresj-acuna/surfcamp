import Image from 'next/image';
import Link from 'next/link';

export const InfoBlock = ({ data }) => {
	const { headline, text, reversed, button } = data;
	const { text: btnText, color, href } = button;
	return (
		<section className={`info ${reversed ? 'info--reversed' : ''}`}>
			<div className='info__image-wrapper'>
				<Image
					className='info__image'
					src='/assets/info-block-image.png'
					alt='Surf Info'
					width={683}
					height={658}
				/>
			</div>
			<div className='info__text'>
				<h2 className='info__headline'>{headline}</h2>
				<p className='copy'>{text}</p>
				<button className={`btn btn--medium btn--${color}`}>
					<Link href={href}>{btnText}</Link>
				</button>
			</div>
		</section>
	);
};
