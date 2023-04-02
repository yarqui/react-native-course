import Svg, { Path, G, Rect, Defs, ClipPath } from "react-native-svg";
import { globalStyles } from "../../utils/globalStyles";

const PlusIcon = ({ focused }) => {
  // const color = focused ? "#FFFFFF" : "#212121";
  // const bgcBtn = focused ? "#FF6C00" : "#F6F6F6";
  const bgcBtn = "#FF6C00";
  const color = "#FFFFFF";

  return (
    <Svg
      style={{
        // alignSelf: "center",
        marginTop: 32,
        marginLeft: 52,
        // maxWidth: 70,
        // maxHight: 40,
      }}
      fill="none"
    >
      <G clipPath="url(#clip0_12_109)">
        <Rect width="70" height="40" rx="20" fill={bgcBtn} />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.5 13.5H34.5V19.5H28.5V20.5H34.5V26.5H35.5V20.5H41.5V19.5H35.5V13.5Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_12_109">
          <Rect width="70" height="40" fill={bgcBtn} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default PlusIcon;
