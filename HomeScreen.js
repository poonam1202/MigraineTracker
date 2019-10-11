//import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Container, Card, CardItem, Body, Text, Button } from 'native-base';

class HomeScreen extends React.Component {
  render() {
    if (!this.props.time.time) return (
      <Container>
        <Card>
          <CardItem>
            <Body>
              <Text style={{ fontWeight: "600" }}>MigraineTracker</Text>
              <Text note>No records yet</Text>
            </Body>
          </CardItem>
        </Card>
        <Button transparent style={styles.iconContainer} onPress={() => this.props.navigation.navigate('Headache')}>
          <Ionicons name="ios-add-circle" size={60} color="dodgerblue" />
        </Button>
      </Container>
    )
    else return (
      <Container>
        <Card>
          <CardItem>
            <Body>
              <Text style={{ fontWeight: "600" }}>MigraineTracker</Text>
              <Text note>Last migraine was {this.props.time.time}</Text>
              <Text note>Triggered by peanuts</Text>
            </Body>
          </CardItem>
        </Card>
        <Button transparent style={styles.iconContainer} onPress={() => this.props.navigation.navigate('Headache')}>
          <Ionicons name="ios-add-circle" size={60} color="dodgerblue" />
        </Button>
      </Container>

    )
  }
}
const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 370,
    marginLeft: 290
  }
})

HomeScreen.navigationOptions = {
  title: 'Dashboard',
};
const mapState = (state) => ({
  time: state.time
})
export default connect(mapState, null)(HomeScreen)