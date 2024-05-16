import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
const PreferenceBackground = (props: SvgProps) => (
  <Svg
    width={430}
    height={932}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Rect width={430} height={932} fill="url(#b)" rx={32} />
      <Path
        fill="#fff"
        d="M-375.289 591.722c-65.48-194.286 82.039-299.009 231.586-291.789 75.086 3.548 154.123 26.32 231.704 44.378 70.392 16.307 162.933 41.253 210.73-2.495 20.976-19.466 14.807-54.087 23.863-81.538 25.875-78.601 140.206-52.112 212.198 8.549 146.8 123.935 139.653 302.689 98.155 421.868-97.565 280.065-465.009 418.925-793.003 173.831-88.576-65.73-179.837-167.1-215.233-272.804Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={-207}
        x2={215}
        y1={510}
        y2={932}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EACBAD" />
        <Stop offset={1} stopColor="#E9B7B6" />
      </LinearGradient>
      <ClipPath id="a">
        <Rect width={430} height={932} fill="#fff" rx={32} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default PreferenceBackground
