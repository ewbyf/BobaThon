import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const BobaImage = (props: SvgProps) => (
  <Svg
 
    viewBox="0 0 230 244"
    style={{
        height: 230,
        width: 244
    }}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h210v244H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.00072 0 0 .00062 -.152 -.098)" />
      </Pattern>
      <Image
        id="b"
        width={1920}
        height={1920}
      />
    </Defs>
  </Svg>
)
export default BobaImage;