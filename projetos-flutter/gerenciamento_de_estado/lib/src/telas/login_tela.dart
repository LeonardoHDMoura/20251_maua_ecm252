import 'package:flutter/material.dart';
import '../blocs/bloc.dart';

class LoginTela extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(18),
      child: Column(
        children: [
          emailField(),
          passwordField(),
          Container(
            margin: EdgeInsets.only(top: 12),
            child: Row(
              children: [
                Expanded(child: submitButton(),)
              ],),
          )
        ],
      ),
    );
  }

  Widget emailField(){
    return StreamBuilder(
      stream: bloc.email, 
      builder: (BuildContext context, AsyncSnapshot<String> snapshot){
        return TextField(
          keyboardType: TextInputType.emailAddress,
          decoration: InputDecoration(
            labelText: 'Email',
            hintText: 'seu@email.com',
            errorText: snapshot.hasError ? snapshot.error.toString() : null,
          ),
          onChanged: (userInput){
            bloc.changeEmail(userInput);
          },
          
        );
      },
    );
  }

  Widget passwordField(){
    return StreamBuilder(
      stream: bloc.password, 
      builder: (BuildContext context, AsyncSnapshot<String> snapshot){
        return TextField(
          obscureText: true,
          decoration: InputDecoration(
            labelText: 'Senha',
            hintText: '********',
            errorText: snapshot.hasError ? snapshot.error.toString() : null,
          ),
          onChanged: bloc.changePassword,
        );
      }
    );

  }

  Widget submitButton(){
    return ElevatedButton(
      onPressed: (){
      }, 
      child: Text('Login')
      );
  }
}