import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component {

    componentWillMount() {
        this.props.dispatch({
          type: "GET_DATA"
        });
      }

    getWordList() {
        const { myFilter, myWords } = this.props;
        if (myFilter === 'SHOW_ALL') {
            return myWords;
        }
        if (myFilter === 'MEMORIZED') {
            return myWords.filter(e => e.memorized);
        }
        if (myFilter === 'NEED_PRACTICE') {
            return myWords.filter(e => !e.memorized);
        }
        return myWords;
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1, alignSelf: 'stretch' }}>
                <Header />
                <View style={{ flex: 10 }}>
                    { this.props.myIsAdding ? <Form /> : null }
                   
                    <FlatList
                        data={this.getWordList()}
                        renderItem={({ item }) => <Word myword={item} />
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords,
        myIsAdding : state.isAdding
    };
}

export default connect(mapStateToProps)(Main);
