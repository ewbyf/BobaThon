import * as React from 'react';
import Svg, { SvgProps, Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const First = (props: SvgProps) => (
	<Svg width={85} height={85} fill="none" {...props}>
		<Circle cx={42.433} cy={42.433} r={39.781} fill="url(#a)" stroke="url(#b)" strokeWidth={5.304} />
		<Circle cx={42.433} cy={42.433} r={39.781} stroke="url(#c)" strokeWidth={5.304} />
		<Path
			fill="#6F5C63"
			d="M40.853 59V34.383h-5.14V31.07c1.037 0 1.969-.113 2.795-.338.827-.226 1.533-.601 2.12-1.127.6-.527 1.051-1.248 1.352-2.165h3.427V59h-4.554Z"
		/>
		<Defs>
			<LinearGradient id="a" x1={42.433} x2={42.433} y1={0} y2={84.866} gradientUnits="userSpaceOnUse">
				<Stop stopColor="#F8E3E5" />
				<Stop offset={1} stopColor="#FDD5D9" />
			</LinearGradient>
			<LinearGradient id="b" x1={14.394} x2={59.631} y1={6.729} y2={80.567} gradientUnits="userSpaceOnUse">
				<Stop stopColor="#E88D87" />
				<Stop offset={1} stopColor="#EAC4A9" />
			</LinearGradient>
			<LinearGradient id="c" x1={14.394} x2={59.631} y1={6.729} y2={80.567} gradientUnits="userSpaceOnUse">
				<Stop stopColor="#E88D87" />
				<Stop offset={1} stopColor="#EAC4A9" />
			</LinearGradient>
		</Defs>
	</Svg>
);
export default First;
