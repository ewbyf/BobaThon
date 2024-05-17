import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const MsgSelect = (props: SvgProps) => (
  <Svg
    width={35}
    height={44}
    fill="none"
    {...props}
  >
    <Path
      stroke="#6F5C63"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m26.108 13.277-6.48 5.42a3.277 3.277 0 0 1-4.17 0l-6.535-5.42"
    />
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m26.108 13.277-6.48 5.42a3.277 3.277 0 0 1-4.17 0l-6.535-5.42"
    />
    <Path
      stroke="#6F5C63"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M24.659 31.5c4.435.013 7.424-3.736 7.424-8.343V12.855c0-4.607-2.989-8.355-7.424-8.355H10.34c-4.435 0-7.424 3.748-7.424 8.355v10.302c0 4.607 2.989 8.356 7.424 8.343H24.66Z"
      clipRule="evenodd"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M24.659 31.5c4.435.013 7.424-3.736 7.424-8.343V12.855c0-4.607-2.989-8.355-7.424-8.355H10.34c-4.435 0-7.424 3.748-7.424 8.355v10.302c0 4.607 2.989 8.356 7.424 8.343H24.66Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#c)"
      d="M0 42a2 2 0 0 1 2-2h30a2 2 0 1 1 0 4H2a2 2 0 0 1-2-2Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={17.515}
        x2={17.515}
        y1={13.277}
        y2={19.446}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E78481" />
        <Stop offset={1} stopColor="#EACBAD" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={17.5}
        x2={17.5}
        y1={4.5}
        y2={31.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E78481" />
        <Stop offset={1} stopColor="#EACBAD" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={0}
        x2={34}
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
export default MsgSelect
