import Image from 'next/image';

export const InfoBlock = ({ data, button }) => {
	const { headline, text, reversed } = data;
	const { text: btnText, color, href } = button;
	return (
		<section className={`info ${reversed ? 'info--reversed' : ''}`}>
			<Image
				className='info__image'
				src='/assets/info-block-image.png'
				alt='Surf Info'
				width={683}
				height={658}
			/>

			<div className='info__text'>
				<h2 className='info__headline'>{headline}</h2>
				<p className='copy'>{text}</p>
				<button className={`btn btn--medium btn--${color}`}>{btnText}</button>
			</div>
		</section>
	);
};
