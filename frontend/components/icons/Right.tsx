import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Right = (props: SvgProps) => (
	<Svg width={75} height={75} fill="none" {...props}>
		<G filter="url(#a)">
			<Circle cx={37.5} cy={33.5} r={30.5} fill="url(#b)" />
		</G>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={5}
			d="M24.949 32.948c-1.476-4.607.249-9.871 5.085-11.43a8.259 8.259 0 0 1 7.466 1.255c2-1.547 4.911-2.07 7.452-1.254 4.836 1.558 6.571 6.822 5.097 11.429-2.296 7.3-12.55 12.925-12.55 12.925s-10.177-5.539-12.55-12.925Z"
			clipRule="evenodd"
		/>
		<Path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M43 26.212a3.824 3.824 0 0 1 2.636 3.33" />
		<Defs>
			<LinearGradient id="b" x1={37.5} x2={37.5} y1={3} y2={64} gradientUnits="userSpaceOnUse">
				<Stop stopColor="#E9AB75" />
				<Stop offset={1} stopColor="#E78481" />
			</LinearGradient>
		</Defs>
	</Svg>
);
export default Right;
