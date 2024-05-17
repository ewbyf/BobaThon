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
const ExploreBackground = (props: SvgProps) => (
  <Svg
    width={430}
    height={932}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Rect width={430} height={932} fill="#fff" rx={32} />
      <Path
        fill="url(#b)"
        d="M-75.28-108.3c-145.595 125.892-71.329 251.609 56.998 293.493 64.396 21.087 141.086 28.918 214.354 39.845 66.442 9.974 155.431 20.438 174.901 68.579 8.42 21.328-12.929 45.502-18.205 69.085-15.15 67.504 92.768 83.701 181.296 60.709 180.631-47.064 258.279-184.22 279.358-287.291 49.495-242.227-192.552-463.315-581.254-382.166C127.413-224.479 3.742-176.865-75.28-108.3Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={443.955}
        x2={188.072}
        y1={458.632}
        y2={-239.78}
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
export default ExploreBackground
