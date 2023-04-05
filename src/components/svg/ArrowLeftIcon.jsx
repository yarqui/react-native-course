import Svg, { Path } from "react-native-svg";

const ArrowLeftIcon = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 12H4"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 18L4 12L10 6"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
