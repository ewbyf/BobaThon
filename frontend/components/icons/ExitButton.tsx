import * as React from 'react';
import Svg, { Circle, Defs, G, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

const ExitButton = (props: SvgProps) => (
	<Svg viewBox={'0 0 50 50'} fill='none' {...props}>
		<G filter='url(#a)'>
			<Circle cx={25} cy={21} r={18} fill='url(#b)' />
		</G>
		<Path
			fill='#fff'
			d='m28.227 20.5 4.104-3.849a2.044 2.044 0 0 0 0-3.024c-.891-.836-2.336-.836-3.228 0l-4.105 3.846-4.101-3.846c-.892-.836-2.337-.836-3.228 0a2.044 2.044 0 0 0 0 3.024l4.104 3.849-4.104 3.848a2.044 2.044 0 0 0 0 3.024c.447.42 1.031.628 1.615.628.582 0 1.166-.208 1.613-.628l4.102-3.845 4.104 3.845c.447.42 1.028.628 1.613.628.584 0 1.168-.208 1.615-.628a2.044 2.044 0 0 0 0-3.024L28.227 20.5Z'
		/>
		<Defs>
			<LinearGradient id='b' x1={25} x2={25} y1={3} y2={39} gradientUnits='userSpaceOnUse'>
				<Stop stopColor='#E9AB75' />
				<Stop offset={1} stopColor='#E78481' />
			</LinearGradient>
		</Defs>
	</Svg>
);
export default ExitButton;
