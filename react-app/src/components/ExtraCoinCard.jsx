import React, {
  Component
} from 'react';
import {
  Input,
  InputGroup,
  InputGroupButton,
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardSubtitle,
  Button
} from 'reactstrap';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux'
import "bootstrap/dist/css/bootstrap.css";
import GetNewCoin from '../actions/getNewCoin'
import InitialLoad2 from '../actions/initialLoad2';

class ExtraCoinCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  getNewCoin = (e) => {
    e.preventDefault()
    this.props.getNewCoin(this.state.value, this.props.initCoins);
    this.props.initialLoad2(this.props.initCoins);
    this.setState({
      value: ''
    });
  }
  handleChange = (event) => {
    var newstr = event.target.value.replace(/ +?/g, '').replace(/[^a-zA-Z]/, '').toUpperCase();
    this.setState({
      value: newstr
    });
  }


  render() {
    return (
      <div>
        <Card body outline color="primary">
          <CardHeader>Add Coin</CardHeader>
          <CardBody>
            <p> </p>
            <p> </p>
            <form onSubmit={this.getNewCoin}>
              <InputGroup >
                <Input placeholder="Coin Name" value={this.state.value} onChange={this.handleChange} />
                <InputGroupButton><Button color="primary" type="submit" > ADD</Button></InputGroupButton>
              </InputGroup>
            </form>

            <p> </p>
            <p> </p>
          </CardBody>
        </Card>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    initCoins: state.initData.coins
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getNewCoin: GetNewCoin,
    initialLoad2: InitialLoad2,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ExtraCoinCard);