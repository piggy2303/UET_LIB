import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main';
import return_book from './components/data/data';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>

    );
  }
}

const defaultState = {
  arrWords: [],
  filterStatus: "MEMORIZED",
  isAdding: false
};

function getdatafromapi() {
  return fetch("https://library-uet.herokuapp.com/books")
    .then(res => res.json)
    .then(resJson => resJson.books);
}

function getdata() {
  
  arr = return_book();
  return arr;
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case 'GET_DATA':
      return {
        ...state,
        arrWords: getdata()
      }
    case 'FILTER_SHOW_ALL':
      return {
        ...state,
        filterStatus: "SHOW_ALL",
      };
    case 'FILTER_MEMORIZED':
      return {
        ...state,
        filterStatus: "MEMORIZED",
      };

    case 'FILTER_NEED_PRACTICE':
      return {
        ...state,
        filterStatus: "NEED_PRACTICE",
      };
    case 'TANG_SO_LUONG':
      return {
        ...state,
        arrWords: state.arrWords.map(e => {
          if (e.id !== action.id) {
            return e;
          }
          return {
            ...e,
            quantity: e.quantity + 1
          }
        })
      };

    case 'GIAM_SO_LUONG':
      return {
        ...state,
        arrWords: state.arrWords.map(e => {
          if (e.id !== action.id) {
            return e;
          }
          else {
            if (e.quantity <= 1) {
              return e
            }
            return {
              ...e,
              quantity: e.quantity - 1
            }
          }
        })
      };

    case 'CLEAR':
      return {
        ...state,
        arrWords: state.arrWords.map(e => {
          if (e.id !== action.id) {
            return e;
          }

          return {
            ...e,
            memorized: false
          }
        })
      };
    

    
      case 'EDIT':
      return {
        ...state,
        arrWords: state.arrWords.map(e => {
          if (e.id !== action.id) {
            return e;
          }
          else {
            return {
              ...e,
              quantity: action.quantity,
              en: action.en,
            vn: action.vn,
            quantity: action.quantity,
            }
          }
        })
      };


    case "BAT_THEM_TU":
      return {
        ...state,
        isAdding: !state.isAdding,
        arrWords: state.arrWords.map(e => {
          return {
            ...e,
            isEdit : false
          };
        })
      }

    case "OPEN_FORM_EDIT":
      return {
        ...state,
        isAdding: false,
        arrWords: state.arrWords.map(e => {
          if (e.id !== action.id) {
            return {
              ...e,
              isEdit :false
            };
          }
          return {
            ...e,
            isEdit : !e.isEdit
          };
        })
      }

    case "THEM_TU":
      return {
        ...state,
        arrWords:
          [{
            id: state.arrWords.length + 1,
            en: action.en,
            vn: action.vn,
            quantity: action.quantity,
            memorized: true,
            isEdit: false
          }
          ].concat(state.arrWords)
      }
    default:
      break;
  }
  return state;
};

const store = createStore(reducer)