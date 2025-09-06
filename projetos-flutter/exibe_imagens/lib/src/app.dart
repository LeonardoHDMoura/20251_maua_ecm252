import 'package:flutter/material.dart';

class AppState extends State<App>{
  var numeroImagens = 0;
  @override
  Widget build(BuildContext? buildContext){
    return MaterialApp( home: Scaffold(
      appBar: AppBar(
        title: const Text("Minhas Imagens")
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){setState(()=>numeroImagens++);},
        child: Icon(
          Icons.camera_alt
        ),
      ),
      body: Text('$numeroImagens')
    )
  );
}
}

class App extends StatefulWidget{
  State<App> createState(){
    return AppState();
  }
}