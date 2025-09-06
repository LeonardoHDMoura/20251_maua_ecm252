import 'package:colecoes/colecoes.dart' as colecoes;
import 'dart:io';
import 'dart:math';

int pegaInput(){
  int input;
  do{
    print("Digite um número:");
    input = int.parse(stdin.readLineSync()!);
    if(input < 1 || input > 60) print('Use um número entre 1 e 60.');
  }while(input < 1 || input > 60);
  return input;
}
void main(List<String> arguments) {

  List<int> user = [], comp = [];
  int input;
  print("----------------- MEGA SENA ---------------");
  do{
    input = pegaInput();
    if(!user.contains(input)){ 
      user.add(input);
      }
    else {print("Número já presente na lista.");}
  }while(user.length < 6);

  do{
    input = Random().nextInt(60) +1;
    if(!comp.contains(input)){ 
      comp.add(input);
      }
  }while(comp.length <6);
  user.sort();
  comp.sort();
  int acertos = 0;
  for(int number in user){
    if(comp.contains(number)) acertos++;
  }
  print('Números do usuário: $user');
  print('Números sorteados: $comp');
  print('Houveram $acertos acertos!');
  //type annotation
  // var nomes = <String>[];
  // var lista = [];
  // List<dynamic> nomes = ["Ana", 'Pedro'];
  // nomes.add(true);
  // nomes.add(1);
  // nomes[0].falar;
  // nomes.add(null);

  // List<Object?> outra = ['whatever', 1];
  // outra.add(true);
  // outra.add(null);
  // print(outra[0].hashCode);
  // var itensDiversos= ["oi", 1, 1.2, true];

  // for(final item in itensDiversos){
  //   print(item);
  // }
  // var numeros = [1, 1.2];
  // var nomes = ['João', 'Pedro'];
}
