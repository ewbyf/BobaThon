import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const Unfavorited = (props: SvgProps) => (
	<Svg viewBox='0 0 65 62' fill='none' {...props}>
		<Path
			fill='#F9E6E4'
			d='m32.387 61.468-.76-.526a117.505 117.505 0 0 1-20.501-16.04A40.98 40.98 0 0 1 1.263 29.36C-2.388 17.907 1.896 4.82 13.857.934c6.314-1.983 13.27-.765 18.53 3.307v57.227Z'
		/>
		<Path
			fill='#F9E6E4'
			d='m32.35 61.467.76-.526A117.505 117.505 0 0 0 53.612 44.9a40.979 40.979 0 0 0 9.862-15.542C67.126 17.906 62.84 4.817 50.88.932 44.567-1.051 37.61.167 32.35 4.239v57.228Z'
		/>
		<Path stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M47.14 4.622c5.675 1.32 9.685 4.965 10.167 9.243' />
	</Svg>
);
export default Unfavorited;
