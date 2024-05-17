import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const StarSelect = (props: SvgProps) => (
  <Svg
    width={34}
    height={42}
    fill="none"
    {...props}
  >
    <Path
      stroke="#6F5C63"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m18.42 3.1 2.969 5.933c.291.582.853.986 1.504 1.08l6.643.956c1.641.236 2.295 2.226 1.107 3.365l-4.804 4.616a1.956 1.956 0 0 0-.575 1.747l1.133 6.517c.28 1.612-1.436 2.842-2.903 2.08l-5.938-3.08a2.028 2.028 0 0 0-1.863 0l-5.937 3.08c-1.467.762-3.183-.468-2.902-2.08l1.132-6.517a1.955 1.955 0 0 0-.575-1.747l-4.804-4.616c-1.188-1.14-.534-3.128 1.107-3.365l6.643-.957a1.998 1.998 0 0 0 1.506-1.08L14.83 3.1c.734-1.467 2.854-1.467 3.588 0Z"
      clipRule="evenodd"
    />
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m18.42 3.1 2.969 5.933c.291.582.853.986 1.504 1.08l6.643.956c1.641.236 2.295 2.226 1.107 3.365l-4.804 4.616a1.956 1.956 0 0 0-.575 1.747l1.133 6.517c.28 1.612-1.436 2.842-2.903 2.08l-5.938-3.08a2.028 2.028 0 0 0-1.863 0l-5.937 3.08c-1.467.762-3.183-.468-2.902-2.08l1.132-6.517a1.955 1.955 0 0 0-.575-1.747l-4.804-4.616c-1.188-1.14-.534-3.128 1.107-3.365l6.643-.957a1.998 1.998 0 0 0 1.506-1.08L14.83 3.1c.734-1.467 2.854-1.467 3.588 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#b)"
      d="M0 40a2 2 0 0 1 2-2h30a2 2 0 1 1 0 4H2a2 2 0 0 1-2-2Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16.625}
        x2={16.625}
        y1={2}
        y2={29.625}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E78481" />
        <Stop offset={1} stopColor="#EACBAD" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={0}
        x2={34}
        y1={40}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.415} stopColor="#E78481" />
        <Stop offset={0.965} stopColor="#EACBAD" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default StarSelect
