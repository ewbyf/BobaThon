import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Left = (props: SvgProps) => (
	<Svg width={75} height={75} fill="none" {...props}>
		<G filter="url(#a)">
			<Circle cx={37.5} cy={33.5} r={30.5} fill="url(#b)" />
		</G>
		<Path
			fill="#fff"
			d="m42.968 32.652 6.954-6.521c1.511-1.417 1.511-3.708 0-5.124-1.51-1.417-3.96-1.417-5.47 0l-6.955 6.516-6.95-6.516c-1.51-1.417-3.96-1.417-5.47 0-1.51 1.416-1.51 3.707 0 5.124l6.955 6.521-6.955 6.521c-1.51 1.417-1.51 3.708 0 5.124a3.992 3.992 0 0 0 2.738 1.064c.985 0 1.975-.353 2.732-1.063l6.95-6.517 6.955 6.517a3.98 3.98 0 0 0 2.733 1.063c.99 0 1.98-.353 2.737-1.063 1.511-1.417 1.511-3.708 0-5.125l-6.954-6.52Z"
		/>
		<Defs>
			<LinearGradient id="b" x1={37.5} x2={37.5} y1={3} y2={64} gradientUnits="userSpaceOnUse">
				<Stop stopColor="#D5BCC8" />
				<Stop offset={1} stopColor="#CACFD2" />
			</LinearGradient>
		</Defs>
	</Svg>
);
export default Left;
