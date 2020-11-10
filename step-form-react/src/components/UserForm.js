import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

class UserForm extends Component {
    //存储初始化字段值
    state = {
        step: 1,
        name: '',
        phone: '',
        email: '',
        occupation: '',
        city: '',
        hobbies: ''
    };
    //创建下一步函数
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step:step + 1
        })
    }
    //创建上一步函数
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step:step - 1
        })
    }
    //获取输入框中的值更新state
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    render() {

        switch (this.step) {
            case 1:
                return ( 
                    <FormUserDetails/>
                );
            case 2:
                return ( 
                    <FormPersonalDetails/>
                );
            case 3:
                return ( 
                    <Confirm/>
                );
            case 4:
                return ( 
                    <Success/>
                );
            default:
        }
        
    }
}
 
export default UserForm;