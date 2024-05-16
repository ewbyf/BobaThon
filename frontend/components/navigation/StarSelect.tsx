import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const StarSelect = (props: SvgProps) => (
	<Svg width={115} height={115} fill="none" {...props}>
		<G filter="url(#a)">
			<Circle cx={57.5} cy={52.5} r={37.5} fill="url(#b)" />
		</G>
		<Path
			stroke="#F8F8F8"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="m59.294 39.788 2.97 5.932c.291.583.853.986 1.504 1.08l6.643.956c1.641.237 2.295 2.226 1.107 3.366l-4.804 4.616a1.956 1.956 0 0 0-.575 1.747L67.272 64c.28 1.612-1.436 2.842-2.903 2.08L58.43 63a2.028 2.028 0 0 0-1.862 0l-5.938 3.08c-1.467.762-3.183-.468-2.902-2.08l1.132-6.516a1.955 1.955 0 0 0-.575-1.747l-4.804-4.616c-1.188-1.14-.535-3.129 1.107-3.366l6.643-.956a1.998 1.998 0 0 0 1.506-1.08l2.968-5.932c.734-1.467 2.854-1.467 3.588 0Z"
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
export default StarSelect;
