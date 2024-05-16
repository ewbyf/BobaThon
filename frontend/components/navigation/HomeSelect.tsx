import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const HomeSelect = (props: SvgProps) => (
	<Svg width={115} height={115} fill="none" {...props}>
		<G filter="url(#a)">
			<Circle cx={57.5} cy={52.5} r={37.5} fill="url(#b)" />
		</G>
		<Path
			stroke="#F8F8F8"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="M53.736 66.157v-4.6c0-1.17.954-2.12 2.136-2.129H60.2a2.14 2.14 0 0 1 2.15 2.129v4.614c0 .994.8 1.806 1.804 1.829h2.886c2.877 0 5.209-2.309 5.209-5.157v0-13.086a3.66 3.66 0 0 0-1.443-2.857l-9.87-7.872a4.77 4.77 0 0 0-5.917 0l-9.827 7.886a3.63 3.63 0 0 0-1.443 2.857v13.072c0 2.848 2.332 5.157 5.21 5.157h2.885a1.852 1.852 0 0 0 1.862-1.843v0"
		/>
		<Defs>
			<LinearGradient id="b" x1={57.5} x2={57.5} y1={15} y2={90} gradientUnits="userSpaceOnUse">
				<Stop stopColor="#E78481" />
				<Stop offset={1} stopColor="#EACBAD" />
			</LinearGradient>
		</Defs>
	</Svg>
);
export default HomeSelect;
