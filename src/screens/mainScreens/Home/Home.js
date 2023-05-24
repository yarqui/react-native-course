import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch } from "react-redux";
import globalStyles from "../../../utils/globalStyles";
import CreatePostsScreen from "../CreatePostsScreen";
import PostsScreen from "../PostsScreen";
import ProfileScreen from "../ProfileScreen";
import {
  ArrowLeftIcon,
  GridIcon,
  LogOutIcon,
  PlusIcon,
  UserIcon,
} from "../../../components/svg";
import { authLogout } from "../../../redux/auth/authOperations";

const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerStyle: { borderBottomWidth: 1 },
        headerTitleAlign: "center",
        headerRight: () => {
          return (
            <LogOutIcon
              onPress={() => {
                console.log("log out logic");
                dispatch(authLogout());
              }}
            ></LogOutIcon>
          );
        },
        headerRightContainerStyle: { paddingRight: 16 },
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: 83,
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: () => <GridIcon />,
        }}
      />
      <Tabs.Screen
        name="Create Post"
        component={CreatePostsScreen}
        options={{
          headerRight: () => null,
          // headerLeft: () => (
          //   <ArrowLeftIcon
          //     onPress={() => {
          //       navigation.navigate("Posts");
          //     }}
          //   />
          // ),
          headerLeftContainerStyle: { paddingLeft: 16 },
          tabBarIcon: () => <PlusIcon />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <UserIcon />,
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
