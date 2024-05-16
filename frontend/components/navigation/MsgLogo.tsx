import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const MsgLogo = (props: SvgProps) => (
	<Svg width={35} height={36} fill="none" {...props}>
		<Path
			stroke="#6F5C63"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="m26.108 13.277-6.48 5.42a3.277 3.277 0 0 1-4.17 0l-6.535-5.42"
		/>
		<Path
			stroke="#6F5C63"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="M24.659 31.5c4.435.013 7.424-3.736 7.424-8.343V12.855c0-4.607-2.989-8.355-7.424-8.355H10.34c-4.435 0-7.424 3.748-7.424 8.355v10.302c0 4.607 2.989 8.356 7.424 8.343H24.66Z"
			clipRule="evenodd"
		/>
	</Svg>
);
export default MsgLogo;
