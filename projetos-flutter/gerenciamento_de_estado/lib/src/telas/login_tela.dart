import 'package:flutter/material.dart';
import 'package:gerenciamento_de_estado/src/blocs/provider.dart';
import '../blocs/bloc.dart';

class LoginTela extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    final bloc = Provider.of(context);
    return Container(
      margin: EdgeInsets.all(18),
      child: Column(
        children: [
          emailField(bloc),
          passwordField(bloc),
          Container(
            margin: EdgeInsets.only(top: 12),
            child: Row(
              children: [
                Expanded(child: submitButton(bloc),)
              ],),
          )
        ],
      ),
    );
  }

  Widget emailField(Bloc bloc){
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

  Widget passwordField(Bloc bloc){
    return StreamBuilder(
      stream: bloc.password, 
      builder: (BuildContext context, AsyncSnapshot<String> snapshot){
        return TextField(
          obscureText: true,
          decoration: InputDecoration(
            labelText: 'Senha',
            hintText: '********',
            errorText: snapshot.error?.toString(),
          ),
          onChanged: bloc.changePassword,
        );
      }
    );

  }

  Widget submitButton(Bloc bloc){
    return StreamBuilder(
      stream: bloc.emailAndPasswordAreOkay, 
      builder: (BuildContext context, AsyncSnapshot<bool> snapshot){
        return ElevatedButton(
          onPressed: !snapshot.hasData ? null : bloc.submitForm, 
          child: Text('Login')
          );

      });
    
    
  }
}