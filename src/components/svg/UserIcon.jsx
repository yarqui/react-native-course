import Svg, { Path, G, Rect, Defs, ClipPath } from "react-native-svg";
import { globalStyles } from "../../utils/globalStyles";

const UserIcon = ({ focused }) => {
  const color = focused ? "#FFFFFF" : "#212121";
  // const bgcBtn = focused ? "#FF6C00" : "#F6F6F6";

  return (
    <Svg
      style={{
        alignSelf: "center",
        marginTop: 32,
        marginLeft: 50,
      }}
      fill="none"
    >
      {/* <G clipPath="url(#clip0_34656_96)">
        <Rect width="70" height="40" rx="20" fill={bgcBtn} />
      </G> */}
      <Path
        d="M43 29V27C43 24.7909 41.2091 23 39 23H31C28.7909 23 27 24.7909 27 27V29"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 19C37.2091 19 39 17.2091 39 15C39 12.7909 37.2091 11 35 11C32.7909 11 31 12.7909 31 15C31 17.2091 32.7909 19 35 19Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <ClipPath id="clip0_34656_96">
          <Rect width="70" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default UserIcon;
