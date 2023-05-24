import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import useRoute from "../../../src/navigation/router";
import { selectHasCurrentUser } from "../../../src/redux/auth/authSelectors";
import { authStateChanged } from "../../redux/auth/authOperations";

export const Main = () => {
  const hasCurrentUser = useSelector(selectHasCurrentUser);

  const routing = useRoute(hasCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasCurrentUser) return;
    dispatch(authStateChanged());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
