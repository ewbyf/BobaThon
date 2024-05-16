import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const MsgSelect = (props: SvgProps) => (
	<Svg width={115} height={115} fill="none" {...props} style={{marginBottom: -10}}>
		<G filter="url(#a)">
			<Circle cx={57.5} cy={52.5} r={30} fill="url(#b)" />
		</G>
		<Path
			stroke="#F8F8F8"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="m66.108 48.277-6.48 5.42a3.277 3.277 0 0 1-4.17 0l-6.535-5.42"
		/>
		<Path
			stroke="#F8F8F8"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="M64.659 66.5c4.435.013 7.424-3.736 7.424-8.343V47.855c0-4.607-2.989-8.355-7.424-8.355H50.34c-4.435 0-7.424 3.748-7.424 8.355v10.303c0 4.606 2.989 8.355 7.424 8.342H64.66Z"
			clipRule="evenodd"
		/>
		<Defs>
			<LinearGradient id="b" x1={57.5} x2={57.5} y1={15} y2={90} gradientUnits="userSpaceOnUse">
				<Stop stopColor="#E78481" />
				<Stop offset={1} stopColor="#EACBAD" />
			</LinearGradient>
		</Defs>
	</Svg>
);
export default MsgSelect;
