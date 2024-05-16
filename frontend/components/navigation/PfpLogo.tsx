import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PfpLogo = (props: SvgProps) => (
	<Svg width={36} height={36} fill="none" {...props}>
		<Path
			stroke="#6F5C63"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="M17.977 23.019c-5.801 0-10.756.877-10.756 4.39s4.923 4.422 10.756 4.422c5.802 0 10.754-.88 10.754-4.39 0-3.512-4.921-4.422-10.754-4.422ZM17.977 18.009a6.894 6.894 0 1 0-6.894-6.895 6.87 6.87 0 0 0 6.845 6.895h.05Z"
			clipRule="evenodd"
		/>
	</Svg>
);
export default PfpLogo;
