// const initialState = {
//   username: "", // Store `username` when user enters their username
//   password: "", // Store `password` when user enters their password
//   errors: {}, // Store error data from the backend here
//   isAuthorized: false, // If auth is successful, set this to `true`
//   isLoading: false, // Set this to `true` if You want to show spinner
// };
// <ROOT>/App/Views/Login/LoginView.js

import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';

import Spinner from "react-native-loading-spinner-overlay";

import APIKit, { setClientToken } from "../../shared/APIKit";

const initialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  password2: "",
  errors: {},
  isAuthorized: false,
  isLoading: false,
  selectedValue: 0,
};

class Register extends Component {
  state = initialState;

  componentWillUnmount() { }

  onNameChange = (name) => {
    this.setState({ name });
  };

  onEmailChange = (email) => {
    this.setState({ email });
  };

  onUsernameChange = (username) => {
    this.setState({ username });
  };

  onPasswordChange = (password) => {
    this.setState({ password });
  };

  onPassword2Change = (password2) => {
    this.setState({ password2 });
  };

  onPressRegister() {
    const { name, email, username, password, password2 } = this.state;
    const payload = { user: { name: name, email: email, username: username, password: password, password2: password2 } };

    console.log(payload)

    const onSuccess = ({ data }) => {
      this.setState({ isLoading: false});
      setClientToken(data.token);
      this.props.navigation.navigate("ChildRegister")
    };

    const onFailure = (error) => {
      this.setState({ errors: error.response.data, isLoading: false });
    };

    // Show spinner when call is made
    this.setState({ isLoading: true });

    APIKit.post("api/register/", payload).then(onSuccess).catch(onFailure);
  }

  getNonFieldErrorMessage() {
    // Return errors that are served in `non_field_errors`
    let message = null;
    const { errors } = this.state;
    if (errors.non_field_errors) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {errors.non_field_errors.map((item) => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  getErrorMessageByField(field) {
    // Checks for error message in specified field
    // Shows error message from backend
    let message = null;
    if (this.state.errors[field]) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {this.state.errors[field].map((item) => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  // onSelectedValueChange = (value) => {
  //   this.setState({ selectedValue: value });
  // };

  render() {
    const { isLoading } = this.state;

    return (
      <View style={styles.containerStyle}>
        <Spinner visible={isLoading} />

          <View>
            <TextInput
              style={styles.input}
              value={this.state.name}
              maxLength={256}
              placeholder="Enter name..."
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={(event) =>
                this.passwordInput.wrappedInstance.focus()
              }
              onChangeText={this.onNameChange}
              underlineColorAndroid="transparent"
              placeholderTextColor="#999"
            />

            {this.getErrorMessageByField("name")}

            <TextInput
              style={styles.input}
              value={this.state.email}
              maxLength={256}
              placeholder="Enter email..."
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={(event) =>
                this.passwordInput.wrappedInstance.focus()
              }
              onChangeText={this.onEmailChange}
              underlineColorAndroid="transparent"
              placeholderTextColor="#999"
            />

            {this.getErrorMessageByField("email")}

            {/* <Picker
              style={styles.dropdown}
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={this.onSelectedValueChange}
            >
              <Picker.Item label="Parent" value="parent" />
              <Picker.Item label="Child" value="child" />
              <Picker.Item label="Marshal" value="marshal" />
            </Picker> */}

            <TextInput
              style={styles.input}
              value={this.state.username}
              maxLength={256}
              placeholder="Enter username..."
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={(event) =>
                this.passwordInput.wrappedInstance.focus()
              }
              onChangeText={this.onUsernameChange}
              underlineColorAndroid="transparent"
              placeholderTextColor="#999"
            />

            {this.getErrorMessageByField("username")}

            <TextInput
              ref={(node) => {
                this.passwordInput = node;
              }}
              style={styles.input}
              value={this.state.password}
              maxLength={40}
              placeholder="Enter password..."
              onChangeText={this.onPasswordChange}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              blurOnSubmit
              onSubmitEditing={this.onPressRegister.bind(this)}
              secureTextEntry
              underlineColorAndroid="transparent"
              placeholderTextColor="#999"
            />

            {this.getErrorMessageByField("password")}

            {this.getNonFieldErrorMessage()}

            <TextInput
              ref={(node) => {
                this.password2Input = node;
              }}
              style={styles.input}
              value={this.state.password2}
              maxLength={40}
              placeholder="Reenter password..."
              onChangeText={this.onPassword2Change}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              blurOnSubmit
              onSubmitEditing={this.onPressRegister.bind(this)}


              secureTextEntry
              underlineColorAndroid="transparent"
              placeholderTextColor="#999"
            />

            {this.getErrorMessageByField("password2")}

            {this.getNonFieldErrorMessage()}

            <TouchableOpacity
              style={styles.registerButton}
              onPress={this.onPressRegister.bind(this)}
            >
              <Text style={styles.registerButtonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
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
const styles = {
  innerContainer: {
    marginBottom: 32,
  },
  logotypeContainer: {
    alignItems: "center",
  },
  logotype: {
    maxWidth: 280,
    maxHeight: 100,
    resizeMode: "contain",
    alignItems: "center",
  },
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
  },
  input: {
    height: 50,
    padding: 12,
    backgroundColor: "white",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    marginBottom: utils.dimensions.defaultPadding,
  },
  registerButton: {
    borderColor: utils.colors.primaryColor,
    borderWidth: 2,
    padding: utils.dimensions.defaultPadding,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  registerButtonText: {
    color: utils.colors.primaryColor,
    fontSize: utils.fonts.mediumFontSize,
    fontWeight: "bold",
  },
  errorMessageContainerStyle: {
    marginBottom: 8,
    backgroundColor: "#fee8e6",
    padding: 8,
    borderRadius: 4,
  },
  errorMessageTextStyle: {
    color: "#db2828",
    textAlign: "center",
    fontSize: 12,
  },
  dropdown: {
    height: 50,
    padding: 12,
    backgroundColor: "white",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    marginBottom: utils.dimensions.defaultPadding,
  },
};

export default Register;
