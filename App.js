import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import React, { Component } from 'react';

import { styles } from './src/styles';
import Watch from './src/assets/watch.png';

let padNumber = (number) => (number <= 9 ? `0${number}` : number);
const Item = ({ item, index }) => (
  <View style={styles.registros}>
    <View>
      <Text style={styles.item}>
        Nº Registro
      </Text>
      <Text
        style={styles.item}
        key={index + 1}
      >
        {`#${index + 1}`}
      </Text>
    </View>
    <View>
      <Text style={styles.item}>Tempo</Text>
      <Text style={styles.item}>
        {`${padNumber(item.minutos)}:${padNumber(item.segundos)}`}
      </Text>
    </View>
  </View>
)

export class Lista extends Component {
  render() {
    return (
      <SafeAreaView style={styles.scroll}>
        <Text style={styles.title}>Registros</Text>
        <FlatList showsVerticalScrollIndicator={false}
          data={this.props.lap}
          renderItem={Item}
        />
      </SafeAreaView>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutos: 0,
      segundos: 0,
    };
    this.lap = [];
    this.interval = null;
    this.handleStart = this.handleStart.bind(this);
    this.handleLap = this.handleLap.bind(this);
  }

  handleToggle = () => {
    this.setState({ start: !this.state.start }, () => this.handleStart());
  };

  handleLap = (minutos, segundos) => {
    if (this.state.start) {
      this.lap = [...this.lap, { minutos, segundos }];
      this.setState({
        minutos: 0,
        segundos: 0,
        start: false,
      });
      clearInterval(this.interval);
    } else {
      this.setState({
        minutos: 0,
        segundos: 0,
        start: false,
      });
    }
  };

  handleStart = () => {
    let s = this.state
    if (this.state.start) {
      this.interval = setInterval(() => {
        if (this.state.segundos !== 59) {
          this.setState({
            segundos: this.state.segundos + 1,
          });
        } else {
          this.setState({
            segundos: 0,
            minutos: ++this.state.minutos,
          });
        }
      }, 1000);
    } else {
      clearInterval(this.interval);
    }
  };

  render() {
    let padNumber = (n) => (n <= 9 ? `0${n}` : n);
    return (
      <View style={styles.container}>
        <View style={styles.timerBox}>
          <Image style={styles.image} source={Watch} />
          <Text style={styles.status}>
            {this.state.start ? 'Ativado' : 'Desativado'}
          </Text>
          <View style={styles.chronometer}>
            <Text style={styles.time}>
              {padNumber(this.state.minutos) + ':'}
            </Text>
            <Text style={styles.time}>
              {padNumber(this.state.segundos)}
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={this.handleToggle}>
              <Text style={styles.btnText}>
                {this.state.start ? 'Pausar!' : 'Vai!'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => {
                this.handleLap(
                  this.state.minutos,
                  this.state.segundos,
                );
              }}>
              <Text style={styles.btnText}>
                {this.state.start ? 'Salvar e Zerar' : 'Zerar'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.registrosContainer}>
          <Lista
            lap={this.lap}
          />
        </View>
      </View>
    );
  }
}