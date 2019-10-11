import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux'
import { Container, Card, CardItem, Body, Header, CheckBox, Button, Text } from 'native-base';
import { headacheAction } from '../actions';


class HeadacheScreen extends React.Component {
    state = {
        status1: false,
        status2: false,
        status3: false,
        status4: false
    }

    handleCheckbox1 = () => {
        const status = this.state.status1 ? false : true
        this.setState({ status1: status })
    }
    handleCheckbox2 = () => {
        const status = this.state.status2 ? false : true
        this.setState({ status2: status })
    }
    handleCheckbox3 = () => {
        const status = this.state.status3 ? false : true
        this.setState({ status3: status })
    }
    handleCheckbox4 = () => {
        const status = this.state.status4 ? false : true
        this.setState({ status4: status })
    }
    headacheSubmit = () => {
        const { status1, status2, status3, status4 } = this.state
        const status_1 = status1.toString()
        const status_2 = status2.toString()
        const status_3 = status3.toString()
        const status_4 = status4.toString()
        const newHeadache = [{ id: 1, img: status_1 }, { id: 2, img: status_2 }, { id: 3, img: status_3 }, { id: 4, img: status_4 }]
        console.log(newHeadache)
        this.props.getHeadache(newHeadache)
    }
    render() {
        return (
            <Container>
                <View style={styles.multiButtonContainer} >
                    <Card>
                        <CheckBox checked={this.state.status1} onPress={this.handleCheckbox1} style={styles.checkBoxContainer} />
                        <CardItem>
                            <Image source={require('../assets/images/img1.jpg')} style={{ width: 100, height: 100 }} />
                        </CardItem>
                    </Card>
                    <Card>
                        <CheckBox checked={this.state.status2} onPress={this.handleCheckbox2} style={styles.checkBoxContainer} />
                        <CardItem>
                            <Image source={require('../assets/images/img2.jpg')} style={{ width: 100, height: 100 }} />
                        </CardItem>
                    </Card>
                </View>
                <View style={styles.multiButtonContainer}>
                    <Card>
                        <CheckBox checked={this.state.status3} onPress={this.handleCheckbox3} style={styles.checkBoxContainer} />
                        <CardItem>
                            <Image source={require('../assets/images/img3.jpg')} style={{ width: 100, height: 100 }} />
                        </CardItem>
                    </Card>
                    <Card>
                        <CheckBox checked={this.state.status4} onPress={this.handleCheckbox4} style={styles.checkBoxContainer} />
                        <CardItem>
                            <Image source={require('../assets/images/img4.jpg')} style={{ width: 100, height: 100 }} />
                        </CardItem>
                    </Card>
                </View>
                <Body style={styles.buttonContainer}>
                    <Button success style={styles.container} onPress={() => this.headacheSubmit()}><Text>Submit</Text></Button>
                    <Button info style={styles.container} onPress={() => this.props.navigation.navigate('Agenda')}><Text>Next</Text></Button>
                </Body>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    checkBoxContainer: {
        marginLeft: 104
    },
    multiButtonContainer: {
        marginTop: 20,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'

    },
    container: {
        marginHorizontal: 20
    },
    buttonContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',

    }
})
HeadacheScreen.navigationOptions = {
    title: 'Select your headache type',
};
const mapActions = (dispatch) => ({
    getHeadache: (headache) => dispatch(headacheAction(headache))
})
const mapState = (state) => ({
    headache: state.headache
})
export default connect(mapState, mapActions)(HeadacheScreen)