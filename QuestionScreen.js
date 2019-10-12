import React from 'react'
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'
import { Container, Text, Card, CardItem, Body, Button } from 'native-base';
import { ques_1, ques_3, ques_4 } from '../constants/Questions'
import { posQuesAction, negQuesAction } from '../actions';

class QuestionScreen extends React.Component {
  state = {
    negQues1: null,
    negQues2: null,
    negQues3: null,
    posQues1: null,
    posQues2: null,
    posQues3: null,
    status_yes1: false,
    status_yes2: false,
    status_yes3: false,
    status_no1: false,
    status_no2: false,
    status_no3: false,
    ans1: 'yes',
    ans2: 'no'
  }
  positiveAns = (ques) => {
    const { ans1, status_no1, status_no2, status_no3 } = this.state
    switch (ques) {
      case 1:
        const posQues1 = { ques_no: 1, ans: ans1 }
        this.setState({ status_no1: true, posQues1 })
        break;
      case 2:
        const posQues2 = { ques_no: 2, ans: ans1 }
        this.setState({ status_no2: true, posQues2 })
        break;
      default:
        const posQues3 = { ques_no: 3, ans: ans1 }
        this.setState({ status_no3: true, posQues3 })
        break;
    }
  }
  negativeAns = (ques) => {
    const { ans2, status_yes1, status_yes2, status_yes3 } = this.state
    switch (ques) {
      case 1:
        const negQues1 = { ques_no: 1, ans: ans2 }
        this.setState({ status_yes1: true, negQues1 })
        break;
      case 2:
        const negQues2 = { ques_no: 2, ans: ans2 }
        this.setState({ status_yes2: true, negQues2 })
        break;
      default:
        const negQues3 = { ques_no: 3, ans: ans2 }
        this.setState({ status_yes3: true, negQues3 })
        break;
    }
  }
  questionSubmit = () => {
    const { negQues1, negQues2, negQues3, posQues1, posQues2, posQues3 } = this.state
    const negQues = [{ negQues1 }, { negQues2 }, { negQues3 }]
    const posQues = [{ posQues1 }, { posQues2 }, { posQues3 }]
    console.log(negQues, posQues)
    this.props.getNegQuestions(negQues)
    this.props.getPosQuestions(posQues)
  }
  render() {
    return (
      <Container>
        <Card>
          <CardItem>
            <Body>
              <Text>{ques_1}</Text>
              <View style={styles.multiButtonContainer}>
                <Button success disabled={this.state.status_yes1} onPress={() => this.positiveAns(1)} style={styles.buttonContainer} ><Text> Yes </Text></Button>
                <Button danger disabled={this.state.status_no1} onPress={() => this.negativeAns(1)} style={styles.buttonContainer}><Text> No </Text></Button>
              </View>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text>{ques_3}</Text>
              <View style={styles.multiButtonContainer}>
                <Button success disabled={this.state.status_yes2} onPress={() => this.positiveAns(2)} style={styles.buttonContainer}><Text> Yes </Text></Button>
                <Button danger disabled={this.state.status_no2} onPress={() => this.negativeAns(2)} style={styles.buttonContainer}><Text> No </Text></Button>
              </View>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text>{ques_4}</Text>
              <View style={styles.multiButtonContainer}>
                <Button success disabled={this.state.status_yes3} onPress={() => this.positiveAns(3)} style={styles.buttonContainer}><Text> Yes </Text></Button>
                <Button danger disabled={this.state.status_no3} onPress={() => this.negativeAns(3)} style={styles.buttonContainer}><Text> No </Text></Button>
              </View>
            </Body>
          </CardItem>
        </Card>
        <Body style={styles.btnContainer}>
          <Button success style={styles.container} onPress={() => this.questionSubmit()}><Text>Submit</Text></Button>
          <Button info style={styles.container} onPress={() => this.props.navigation.navigate('Home')}><Text>Home</Text></Button>
        </Body>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20
  },
  multiButtonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    marginHorizontal: 20
  },
  btnContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
})

QuestionScreen.navigationOptions = {
  title: 'Tell Us More',
};
const mapActions = (dispatch) => ({
  getPosQuestions: (ans) => dispatch(posQuesAction(ans)),
  getNegQuestions: (ans) => dispatch(negQuesAction(ans))
})
export default connect(null, mapActions)(QuestionScreen)