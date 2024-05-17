import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const HomeSelect = (props: SvgProps) => (
  <Svg
    width={36}
    height={44}
    fill="none"
    {...props}
  >
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M13.736 31.157v-4.6c0-1.17.954-2.12 2.135-2.129h4.33a2.14 2.14 0 0 1 2.15 2.129v4.614c0 .994.8 1.806 1.804 1.829h2.886c2.877 0 5.209-2.309 5.209-5.157v0-13.086a3.66 3.66 0 0 0-1.443-2.857l-9.87-7.872a4.77 4.77 0 0 0-5.917 0l-9.827 7.886A3.63 3.63 0 0 0 3.75 14.77v13.072C3.75 30.69 6.082 33 8.96 33h2.885a1.852 1.852 0 0 0 1.862-1.843v0"
    />
    <Path
      fill="url(#b)"
      d="M1 42a2 2 0 0 1 2-2h30a2 2 0 1 1 0 4H3a2 2 0 0 1-2-2Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={18}
        x2={18}
        y1={3}
        y2={33}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E78481" />
        <Stop offset={1} stopColor="#EACBAD" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={1}
        x2={35}
        y1={42}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.415} stopColor="#E78481" />
        <Stop offset={0.965} stopColor="#EACBAD" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default HomeSelect
