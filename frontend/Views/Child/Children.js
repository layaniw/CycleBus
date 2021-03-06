// const initialState = {
//   username: "", // Store `username` when user enters their username
//   password: "", // Store `password` when user enters their password
//   errors: {}, // Store error data from the backend here
//   isAuthorized: false, // If auth is successful, set this to `true`
//   isLoading: false, // Set this to `true` if You want to show spinner
// };
// <ROOT>/App/Views/Login/LoginView.js

import React, { Component } from "react";
import { FlatList, StyleSheet, View, Text, Alert, TouchableOpacity, Image, TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";
import APIKit, { setClientToken } from "../../shared/APIKit";
import { FlatItem, Seperator } from "../Common/List";

const initialState = {
    dataSource: []
};



class Children extends Component {
    state = initialState;

     componentDidMount() {

        const onSuccess = ({ data }) => {
            this.setState({ dataSource: data.data, isLoading: false });
        };

        const onFailure = (error) => {
            this.setState({ errors: error.response.data, isLoading: false });
        };

        // Show spinner when call is made
        this.setState({ isLoading: true });

        APIKit.get("child/").then(onSuccess).catch(onFailure);

    }


    onPress = (item) => {
        this.props.navigation.navigate("ChildDetail", { childId: item.user.id });
    }

    render() {
        console.log(this.state.dataSource);

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => 
                        <TouchableWithoutFeedback onPress={() => this.onPress(item)}>
                            <View>
                                <FlatItem title={item.user.name} subtitle={item.end_location.location_name} />
                            </View>
                         </TouchableWithoutFeedback>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "center"
    },
    item: {
        fontSize: 18,
        height: 44,
    }
})

export default Children;
