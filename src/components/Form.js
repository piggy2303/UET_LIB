import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            vn: "",
            en: "",
        };
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        const { quantity, vn ,en} = this.state;

        this.props.dispatch({
            type: "THEM_TU",
            quantity,
            vn,
            en
        });

        this.props.dispatch({
            type: "BAT_THEM_TU",
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={this.state.quantity}
                    onChangeText={text => this.setState({ quantity: text })}
                    placeholder="so luong"
                />
                <TextInput
                    style={styles.textInput}
                    value={this.state.vn}
                    onChangeText={text => this.setState({ vn: text })}
                    placeholder="ten sach"
                />
                <TextInput
                    style={styles.textInput}
                    value={this.state.en}
                    onChangeText={text => this.setState({ en: text })}
                    placeholder="Chi tiet sach"
                />
                <TouchableOpacity style={styles.btn} onPress={this.onAdd}>
                    <Text>Xac nhan</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(Form);

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInput: {
        height: 50,
        width: 300,
        backgroundColor: 'yellow',
        margin: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
    },

    btn: {
        backgroundColor: '#D2DEF6',
        padding: 10,
        margin: 10,
        width: 80,
        alignItems: 'center',
    }
});