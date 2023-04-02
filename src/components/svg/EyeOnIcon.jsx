import Svg, { Path, Circle } from "react-native-svg";

const EyeOnIcon = (props) => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
        stroke="#BDBDBD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
        stroke="#BDBDBD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="12"
        cy="12"
        r="3"
        stroke="#BDBDBD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EyeOnIcon;
