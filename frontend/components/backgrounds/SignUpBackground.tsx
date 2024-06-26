import * as React from "react"
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from "react-native-svg"
const SignUpBackground = (props: SvgProps) => (
  <Svg
    width={430}
    height={932}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Rect width={430} height={932} fill="#EACBAD" rx={32} />
      <Path
        fill="#E9B7B6"
        d="M681.871 77.073C675.266-119.552 534.318-128.7 424.004-43.467 368.595-.738 315.739 60.107 262.623 116.253c-48.216 50.878-110.596 120.689-159.084 109.542-21.356-5.114-26.666-37.238-41.358-55.323-42.025-51.809-120.338 30.83-157.014 119.526-74.72 181.061-17.997 326.269 47.428 403.625C106.374 875.383 422.408 796.496 598.49 418.467c47.684-101.705 87.147-234.539 83.381-341.394Z"
      />
      <Path
        fill="#fff"
        d="M873.451 433.753c90.916-169.65-23.414-260.473-158.232-253.671-67.678 3.349-142.092 23.475-214.42 39.485-65.612 14.459-152.455 36.527-187.86-1.462-15.494-16.904-4.207-47.116-7.718-71.025-10.005-68.456-116.574-44.969-191.015 8.175C-37.629 263.83-61.065 419.688-43.871 523.479c40.447 243.901 345.574 363.752 679.51 148.903 90.105-57.62 188.553-146.329 237.812-238.629ZM47.43 134.831c-4.566 6.581 2.636 18.288 9.903 12.702 10.032-7.346-2.958-24.027-9.904-12.702ZM195.54 53.01c-13.1 21 28.8 35.4 27.4 8.8-.2-13.8-19.5-20.5-27.4-8.8ZM79.5 119a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
      />
      <Path fill="#fff" d="M0 557h430v375H0z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={430} height={932} fill="#fff" rx={32} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SignUpBackground
