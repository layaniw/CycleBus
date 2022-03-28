import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./Navigation/DrawerNavigator";
import Login from "./Views/Login/LoginView";
import ChildDetail from "./Views/Child/ChildDetailView";
import Register from "./Views/Register/RegisterView";
import ChildRegister from "./Views/Register/ChildRegisterView";
import Parent from "./Views/Parent/ParentView";
import BusRegister from "./Views/Home/BusRegisterView";
import BusList from "./Views/Bus/BusListView";
import BusDetail from "./Views/Bus/BusDetailView";
import RouteMap from "./Views/Map/RouteMapView";
import MarshalRide from "./Views/Ride/MarshalRideView";
import ParentRide from "./Views/Ride/ParentRideView";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerParent" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ChildDetail" component={ChildDetail} options={{ title: "Child Detail" }} />
        <Stack.Screen name="Register" component={Register} options={{ title: "Register" }} />
        <Stack.Screen name="ChildRegister" component={ChildRegister} options={{ title: "Register Child" }} />
        <Stack.Screen name="Parent" component={Parent} options={{ title: "Parent" }} />
        <Stack.Screen name="BusRegister" component={BusRegister} options={{ title: "Register to a Bus" }} />
        <Stack.Screen name="BusList" component={BusList} options={{ title: "Bus List " }} />
        <Stack.Screen name="ParentRide" component={ParentRide} options={{ title: "Ride View " }} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="BusDetail" component={BusDetail} />
        <Stack.Screen name="RouteMap" component={RouteMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App