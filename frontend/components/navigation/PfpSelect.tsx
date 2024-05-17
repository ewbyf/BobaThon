import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const PfpSelect = (props: SvgProps) => (
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
      d="M16.756 20.797c-5.802 0-10.756.877-10.756 4.39s4.923 4.422 10.756 4.422c5.801 0 10.754-.879 10.754-4.39 0-3.512-4.921-4.422-10.754-4.422Z"
      clipRule="evenodd"
    />
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M16.756 20.797c-5.802 0-10.756.877-10.756 4.39s4.923 4.422 10.756 4.422c5.801 0 10.754-.879 10.754-4.39 0-3.512-4.921-4.422-10.754-4.422Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#6F5C63"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M16.756 15.787A6.894 6.894 0 1 0 9.86 8.893a6.87 6.87 0 0 0 6.846 6.894h.049Z"
      clipRule="evenodd"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M16.756 15.787A6.894 6.894 0 1 0 9.86 8.893a6.87 6.87 0 0 0 6.846 6.894h.049Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#c)"
      d="M0 40a2 2 0 0 1 2-2h30a2 2 0 1 1 0 4H2a2 2 0 0 1-2-2Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16.755}
        x2={16.755}
        y1={20.797}
        y2={29.609}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E78481" />
        <Stop offset={1} stopColor="#EACBAD" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={16.755}
        x2={16.755}
        y1={2}
        y2={15.787}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E78481" />
        <Stop offset={1} stopColor="#EACBAD" />
      </LinearGradient>
      <LinearGradient
        id="c"
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
export default PfpSelect
