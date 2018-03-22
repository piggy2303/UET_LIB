import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import FormEdit from './FormEdit';
import axios from 'axios';

class Word extends Component {
    tangSoLuong() {

        axios({
            method: 'post',
            url: 'https://library-uet.herokuapp.com/books/'+ this.props.myword.id,
            data: {
                "book": {
                "quantity": this.props.myword.quantity +1,
                "name": this.props.myword.vn,
                "description": this.props.myword.en
                }
            }
          }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.props.dispatch({
            type: "TANG_SO_LUONG",
            id: this.props.myword.id
        });
    }

    giamSoLuong() {
        axios({
            method: 'post',
            url: 'https://library-uet.herokuapp.com/books/'+ this.props.myword.id,
            data: {
                "book": {
                "quantity": this.props.myword.quantity -1,
                "name": this.props.myword.vn,
                "description": this.props.myword.en
                }
            }
          }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.props.dispatch({
            type: "GIAM_SO_LUONG",
            id: this.props.myword.id
        })
    }

    clear(){
        axios({
            method: 'delete',
            url: 'https://library-uet.herokuapp.com/books/'+ this.props.myword.id,
          }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.props.dispatch({
            type: "GIAM_SO_LUONG",
            id: this.props.myword.id
        })
        
        this.props.dispatch({
            type: "CLEAR",
            id: this.props.myword.id
        })
    }

    openFormEdit(){
        this.props.dispatch({
            type: 'OPEN_FORM_EDIT',
            id: this.props.myword.id,
        })
    }

    render() {
        const { quantity, en, vn, memorized, id, isEdit } = this.props.myword;
        // const hide = memorized 

        return (
            <View style={style.container}>

                <Text>so luong :  {quantity} </Text>
                <Text>Ten sach : {vn}</Text>
                <Text>Chi Tiet sach : {en}</Text>
                <View style={style.button}>
                    <TouchableOpacity style={style.btn} onPress={this.tangSoLuong.bind(this)}>
                        <Text>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btn} onPress={this.giamSoLuong.bind(this)}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btn} onPress={this.clear.bind(this)}>
                        <Text>x</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.btn} onPress={this.openFormEdit.bind(this)}>
                        <Text>edit</Text>
                    </TouchableOpacity>

                </View>
                { this.props.myword.isEdit ? <FormEdit thongtinsach = {this.props.myword}/> : null }
            </View>
        );
    }
}

export default connect()(Word);

const style = StyleSheet.create({
    container: {
        backgroundColor: '#D2DEF6',
        padding: 10,
        margin: 10,

    },
    button: {

        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flex: 1,
    },
    btn: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        width: 80,
        alignItems: 'center',
    }

});