import React, { Component } from 'react';
import { Switch, Form } from 'antd';
// import Switch from 'antd/lib/switch';
// import Form from 'antd/lib/form';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [
        {
          name: 'test switch A',
          identifier: 1,
          value: false,
        },
        {
          name: 'test switch B',
          identifier: 2,
          value: true,
        },
        {
          name: 'test switch C',
          identifier: 3,
          value: false,
        },
      ]
    }
  }

  handleSwitchChange(event) {
    console.log('A switch has been changed, which switch is it?');
    console.log('Received event: ', event);
    console.log('The event shown above does not include the attributes, therefore you do not have access to the attribute "identified"')
  }

  handleSwitchChangeWithIndex(index, event) {
    console.log('This way, you can access whatever value that can be added on the switch as attributes');
    console.log(index, event);
  }

  render() {
    const switches = [];

    this.state.fields.forEach((field, index) => {
      switches.push(
        <Form.Item label={field.name} key="form-switch">
          <Switch
            identifier={field.identifier}
            key={field.name}
            defaultChecked={true}
            onChange={this.handleSwitchChange}
            // onChange={status => this.handleSwitchChangeWithIndex(index, status)}
          />
        </Form.Item>
      );
    });

    return (
      <div className="App">
        {switches}
      </div>
    );
  }
}

export default App;
