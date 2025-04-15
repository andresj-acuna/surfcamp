import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export const InfoBlock = ({ data }) => {
	const { headline, text, reversed, button, imageSrc } = data;

	return (
		<section className={`info ${reversed ? 'info--reversed' : ''}`}>
			<div className='info__image-wrapper'>
				<Image
					className='info__image'
					src={imageSrc || '/assets/info-block-image.png'}
					alt='Surf Info'
					width={683}
					height={658}
					sizes='(max-width: 768px) 100vw, 50vw'
					quality={85}
					priority={true}
				/>
			</div>
			<div className='info__text'>
				<h2 className='info__headline'>{headline}</h2>
				<ReactMarkdown className='copy line-break'>
					{text.replace(/\n/gi, '&nbsp; \n')}
				</ReactMarkdown>
				{button && (
					<Link
						className={`btn btn--medium btn--${button.color}`}
						href={button.href}>
						{button.text}
					</Link>
				)}
			</div>
		</section>
	);
};
