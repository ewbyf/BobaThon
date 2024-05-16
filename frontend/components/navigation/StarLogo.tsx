import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const StarLogo = (props: SvgProps) => (
	<Svg width={39} height={39} fill="none" {...props}>
		<Path
			stroke="#6F5C63"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="m21.294 6.788 2.97 5.932c.291.582.853.986 1.504 1.08l6.643.956c1.642.237 2.295 2.226 1.107 3.366l-4.804 4.616a1.956 1.956 0 0 0-.575 1.747l1.133 6.517c.28 1.612-1.436 2.841-2.903 2.079L20.43 30a2.028 2.028 0 0 0-1.863 0l-5.937 3.08c-1.467.762-3.183-.468-2.902-2.08l1.132-6.516a1.955 1.955 0 0 0-.575-1.747l-4.804-4.616c-1.188-1.14-.534-3.129 1.107-3.366l6.643-.956a1.998 1.998 0 0 0 1.506-1.08l2.968-5.932c.734-1.467 2.854-1.467 3.588 0Z"
			clipRule="evenodd"
		/>
	</Svg>
);
export default StarLogo;
