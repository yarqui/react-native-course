import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import useRoute from "./src/navigation/router";
import { selectIsCurrentUser } from "./src/redux/auth/authSelectors";
import { authStateChanged } from "../../redux/auth/authOperations";

export const Main = () => {
  const isCurrentUser = useSelector(selectIsCurrentUser);
  const routing = useRoute(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCurrentUser) return;
    dispatch(authStateChanged());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
