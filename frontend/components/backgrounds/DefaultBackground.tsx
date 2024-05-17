import * as React from "react"
import Svg, {
  SvgProps,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const DefaultBackground = (props: SvgProps) => (
  <Svg
    width={430}
    height={932}
    fill="none"
    {...props}
  >
    <Rect width={430} height={932} fill="url(#a)" rx={32} />
    <Defs>
      <LinearGradient
        id="a"
        x1={-207}
        x2={215}
        y1={510}
        y2={932}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EACBAD" />
        <Stop offset={1} stopColor="#E9B7B6" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default DefaultBackground
