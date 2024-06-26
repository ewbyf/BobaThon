import * as React from "react"
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from "react-native-svg"
const SignInBackground = (props: SvgProps) => (
  <Svg
    width={430}
    height={932}
    viewBox="0 0 430 932"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Rect width={430} height={932} fill="#EACBAD" rx={32} />
      <Path
        fill="#E9B7B6"
        d="M670.871 346.073C664.266 149.448 523.318 140.3 413.004 225.532c-55.409 42.73-108.265 103.576-161.381 159.722-48.216 50.878-110.596 120.689-159.084 109.542-21.356-5.114-26.666-37.238-41.358-55.323-42.025-51.809-120.338 30.83-157.014 119.526-74.72 181.061-17.997 326.269 47.428 403.625C95.375 1144.38 411.408 1065.5 587.49 687.467c47.684-101.705 87.147-234.539 83.381-341.394Z"
      />
      <Path
        fill="#fff"
        d="M862.451 702.753c90.916-169.65-23.414-260.473-158.232-253.671-67.678 3.349-142.092 23.475-214.42 39.485-65.612 14.459-152.455 36.526-187.86-1.462-15.494-16.904-4.207-47.116-7.718-71.025-10.005-68.456-116.574-44.969-191.015 8.175C-48.629 532.83-72.065 688.688-54.871 792.479c40.447 243.901 345.574 363.751 679.51 148.903 90.105-57.62 188.553-146.329 237.812-238.629ZM55.43 413.831c-4.566 6.581 2.636 18.288 9.903 12.702 10.032-7.346-2.958-24.027-9.904-12.702ZM203.54 332.01c-13.1 21 28.8 35.4 27.4 8.8-.2-13.8-19.5-20.5-27.4-8.8ZM87.5 398a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={430} height={932} fill="#fff" rx={32} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SignInBackground
