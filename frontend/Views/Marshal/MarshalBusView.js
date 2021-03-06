import React, { Component } from "react";
import { FlatList, StyleSheet, View, Text, Alert, TouchableOpacity, Image, TextInput, Button } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


import APIKit, { setClientToken } from "../../shared/APIKit";
import { FlatItem } from "../Common/List";

const initialState = {
    dataSource: [],
    childDetail: null,
};

class MarshalBus extends Component {
    state = initialState;

    async componentDidMount() {

        const onSuccess = ({ data }) => {

            this.setState({ dataSource: data.data, isLoading: false });
        };

        const onFailure = (error) => {
            this.setState({ errors: error.response.data, isLoading: false });
        };

        // Show spinner when call is made
        this.setState({ isLoading: true });

        APIKit.get("marshal_bus/").then(onSuccess).catch(onFailure);

    }


    getListViewItem = (item) => {
        this.props.navigation.navigate("MarshalRide", { busId: item.bus_id , routeId : item.default_route})
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <TouchableWithoutFeedback onPress={() => this.getListViewItem(item)}>
                            <View>
                                <FlatItem title={item.bus_name} subtitle={item.area} />
                            </View>
                        </TouchableWithoutFeedback>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}


// Define some colors and default sane values
const utils = {
    colors: { primaryColor: "blue" },
    dimensions: { defaultPadding: 12 },
    fonts: { largeFontSize: 18, mediumFontSize: 16, smallFontSize: 12 },
};

// Define styles here
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        justifyContent:"center"
    },
})

export default MarshalBus;
