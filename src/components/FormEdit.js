import React, { Component } from 'react';
import {  
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import axios from 'axios';

import { connect } from 'react-redux';

class FormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.thongtinsach.quantity,
            vn: this.props.thongtinsach.vn,
            en: this.props.thongtinsach.en,
        };
        this.onEdit = this.onEdit.bind(this);
    }

    onEdit() {
        
        const { quantity, vn ,en} = this.state;

        axios({
            method: 'post',
            url: 'https://library-uet.herokuapp.com/books/'+ this.props.thongtinsach.id,
            data: {
                "book": {
                "quantity": this.props.thongtinsach.quantity,
                "name": this.props.thongtinsach.vn,
                "description": this.props.thongtinsach.en
                }
            }
          }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


        this.props.dispatch({
            type: "EDIT",
            id : this.props.thongtinsach.id,
            quantity,
            vn,
            en
        });

        this.props.dispatch({
            type: "OPEN_FORM_EDIT",
        });
    }

  render() {
    return (
        <View style={styles.container}>
        <Text>Chinh sua thong tin sach</Text>
        <TextInput 
            style={styles.textInput}
            value={this.state.vn}
            onChangeText={text => this.setState({ vn: text })}
            placeholder ="Ten sach"
        />
        <TextInput 
            style={styles.textInput}
            value={this.state.quantity}
            onChangeText={ text=> this.setState({ quantity: text })}
            placeholder ="So luong"
            />
        <TextInput 
            style={styles.textInput}
            value={this.state.en}
            onChangeText={text => this.setState({ en: text })}
            placeholder ="Chi tiet"

        />
        <TouchableOpacity style={styles.btn} onPress={this.onEdit}>
            <Text>Xac nhan</Text>
        </TouchableOpacity>
    </View>
    );
  }
}

export default connect()(FormEdit);

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
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        width: 80,
        alignItems: 'center',
    }
});