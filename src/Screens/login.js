import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import { login } from '../Api/auth'

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width - 40;


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.state ={
      email:'',
      password:''
    }
  }

  async onLogin(authcode) {
    await login(authcode);
    this.props.navigation.navigate('Homepage');
  }

  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true
    }
    return false
  }

  validate(data){
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
      
    }
  }

  onSubmit(){
    const Data= {
      email:this.state.email,
      password:this.state.password
    }
    let result=this.validate(Data);
    if(result)
    {
      fetch('https://berkarsln.com/api/login', {body:result,method:'POSt'})
      .then((res) => { return res.json()})
      .then((res) => { 
        if(res.success)
        {
          this.onLogin(res.data.auth);
        }
      })
    }
    else{
    
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
            <Input value={this.state.email} onChangeText={(val)=> this.setState({email:val.toLocaleLowerCase()})} placeholderTextColor="#FFF" placeholder="Email" />
          </Item>
          <Item >
            <Input value={this.state.password} onChangeText={(val)=> this.setState({password:val})}  secureTextEntry placeholderTextColor="#FFF" placeholder="Şifre" />
          </Item >
          <Item last >
            <Input placeholder="Şifremi Unuttum ? " placeholderTextColor="#FFF" onTouchStart={() => { this.props.navigation.navigate('Register') }} />
          </Item>
        </Form>
        <Button onPress={() => {this.onSubmit()}} style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </Button>
        <Button onPress={() => { this.props.navigation.navigate('Register'); }} style={styles.button}>
          <Text style={styles.buttonText}>Üye Ol</Text>
        </Button>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
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