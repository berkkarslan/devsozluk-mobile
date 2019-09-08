import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button, Text, CheckBox, Body, Left } from 'native-base';
import { login } from '../Api/auth';
let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width - 40;


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.state = {
      fullname: '',
      email: '',
      password: '',
      isCheck: false,
      userData: {}
    };
  }

  async onLogin() {
    await login();
    this.props.navigation.navigate('Homepage');
  }


  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true
    }
    return false
  }

  validate(data) {
    let errors=[];
    if (data.namesurname === '') {
      errors.push('Lütfen Adınızı giriniz!');
    }
    else if (data.password === '') {
      errors.push('Lütfen Şirenizi giriniz!');
    }
    else if (data.email !== '') {
      if(!this.ValidateEmail(data.email))
      {
        errors.push('Lütfen geçerli bir Email adresi giriniz!');
      }
    }
    if(errors.length===0)
    {
      const formData = new FormData();
      Object.keys(data).forEach(key => formData.append(key, data[key]));
      return formData;
  
    }
    else{
      console.warn('Errorler var');
    }
   
  }

  onRegister() {
    const data = {
      namesurname: this.state.fullname,
      email: this.state.email,
      password: this.state.password
    };
    let validate = this.validate(data);
    if (validate) {
      fetch('https://berkarsln.com/api/register', { body: validate, method: 'POST' })
        .then((res) => { return res.json() })
        .then((res) => { this.setState({ userData: res.data }) });
      this.onLogin();
    }
    else {

    }

  }

  render() {
    return (
      <ImageBackground source={require('../assets/bg-login.jpg')} style={styles.base}>
        <Image
          resizeMethod="scale"
          resizeMode="contain"
          style={{ height: imageHeight, width: imageWidth }}
          source={require('../assets/logo2x.png')} />
        <Form>
          <Item>
            <Input onChangeText={(val) => { this.setState({ fullname: val }) }} placeholderTextColor="#FFF" placeholder="Adınız Soyadınız" />
          </Item>
          <Item >
            <Input keyboardType="email-address" onChangeText={(val) => { this.setState({ email: val }) }} placeholderTextColor="#FFF" placeholder="Email" />
          </Item>
          <Item >
            <Input secureTextEntry onChangeText={(val) => { this.setState({ password: val }) }} placeholderTextColor="#FFF" placeholder="Şifre" />
          </Item>
          <Item last style={{ paddingBottom: 10, paddingTop: 10 }}>
            <CheckBox color="#FFF" checked={this.state.isCheck} onPress={(val) => { this.setState({ isCheck: !this.state.isCheck }) }} />
            <Text style={{ marginLeft: 25, color: '#FFF' }}>Kullanım koşullarını kabul ediyorum.</Text>

          </Item>
        </Form>
        <Button onPress={() => { this.onRegister() }} style={styles.button}>
          <Text style={styles.buttonText}>Üye Ol</Text>
        </Button>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginTop: 15
  },
  buttonText: {
    color: '#000'
  }
})