import React from 'react'
//import { Button, View } from "react-native";
import { connect } from 'react-redux'
import DateTimePicker from "react-native-modal-datetime-picker";
import { Body, Card, CardItem, Text, Container, Button } from 'native-base';
import { timeAction } from '../actions';


class AgendaScreen extends React.Component {
    state = {
        isDateTimePickerVisible: false,
        newDate: null
    }
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        const dateObj = date
        const stringDate = dateObj.toString()
        this.setState({ newDate: stringDate }, () => {
            console.log("A date has been picked: ", this.state.newDate)
            this.props.getTime(this.state.newDate)
            this.hideDateTimePicker();
        })

    };

    render() {
        return (
            <Container>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>Track your migraine</Text>
                            <Text note style={{ marginBottom: 20 }}>Pick a date and time of your headache</Text>
                            <Text note style={{ marginBottom: 20 }}>{this.state.newDate}</Text>
                            <Button info onPress={this.showDateTimePicker} ><Text>Date-Time</Text></Button>
                            <DateTimePicker
                                mode="datetime"
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDateTimePicker}
                            />
                        </Body>
                    </CardItem>
                </Card>
                <Body style={{ marginTop: 250 }} >
                    <Button info onPress={() => this.props.navigation.navigate('Question')}><Text>Next</Text></Button>
                </Body>
            </Container>
        )
    }
}
AgendaScreen.navigationOptions = {
    title: 'Select date and time',
};
const mapActions = (dispatch) => ({
    getTime: (time) => dispatch(timeAction(time))
})
export default connect(null, mapActions)(AgendaScreen)
