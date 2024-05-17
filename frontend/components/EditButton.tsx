import * as React from 'react';
import Svg, { Circle, Defs, G, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

const EditButton = (props: SvgProps) => (
	<Svg viewBox='0 0 50 50' fill='none' {...props}>
		<G filter='url(#a)'>
			<Circle cx={25} cy={21} r={18} fill='url(#b)' />
		</G>
		<Path
			fill='#fff'
			d='M32.992 27.953h-5.694c-.555 0-1.007.46-1.007 1.024 0 .565.452 1.023 1.007 1.023h5.695c.555 0 1.007-.458 1.007-1.023s-.452-1.024-1.008-1.024ZM31.12 17.665l-1.04 1.299a.298.298 0 0 1-.423.048c-1.265-1.023-4.503-3.65-5.401-4.377a.308.308 0 0 1-.044-.432l1.004-1.246c.91-1.172 2.497-1.28 3.777-.258l1.471 1.172c.604.473 1.006 1.096 1.143 1.752.16.721-.01 1.43-.486 2.042Z'
			opacity={0.4}
		/>
		<Path
			fill='#fff'
			d='m23.309 15.904 5.396 4.36a.31.31 0 0 1 .05.43l-6.396 8.334a2.1 2.1 0 0 1-1.63.817l-3.492.043a.398.398 0 0 1-.392-.311l-.793-3.451c-.138-.634 0-1.29.402-1.795l6.429-8.375a.3.3 0 0 1 .426-.052Z'
		/>
		<Defs>
			<LinearGradient id='b' x1={25} x2={25} y1={3} y2={39} gradientUnits='userSpaceOnUse'>
				<Stop stopColor='#E9AB75' />
				<Stop offset={1} stopColor='#E78481' />
			</LinearGradient>
		</Defs>
	</Svg>
);
export default EditButton;
