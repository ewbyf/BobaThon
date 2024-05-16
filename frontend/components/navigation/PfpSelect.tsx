import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const PfpSelect = (props: SvgProps) => (
	<Svg width={115} height={115} fill="none" {...props}>
		<G filter="url(#a)">
			<Circle cx={57.5} cy={52.5} r={37.5} fill="url(#b)" />
		</G>
		<Path
			stroke="#F8F8F8"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="M57.756 56.797c-5.802 0-10.756.878-10.756 4.39 0 3.513 4.923 4.422 10.756 4.422 5.801 0 10.754-.879 10.754-4.39 0-3.512-4.921-4.422-10.754-4.422ZM57.756 51.787a6.894 6.894 0 1 0-6.895-6.894 6.87 6.87 0 0 0 6.846 6.894h.049Z"
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
export default PfpSelect;
