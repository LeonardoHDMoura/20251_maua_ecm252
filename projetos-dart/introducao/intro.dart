import 'dart:developer';

int somar(int a,int b){
    return a+b;
}
void main(){

    //switch/expression
    final mediaFinal=10;
    final conceito = switch(mediaFinal){
        10  || 9=> 'A',
        8 => 'B',
        _ => 'R'
    };
    //expression
    // const a = 2 + 2;
    // const b = a;
    // final c = somar(2,1);
    // var d = somar;
    // var e = 2>=3;
    // var f = if(a>b){
    //     print("oi");
    // }
    //statement

    // const nota = 9.7;
    // switch(nota){
    //     case >= 9 && <= 10:
    //         print("A");
    //     default:
    //         print("outro conceito");
    // }
    // const nota = 10;
    // //fall-through
    // switch(nota){
    //     case 9 || 10:
    //         print("A");
    //     case 8:
    //         print("B");
    //     default:
    //         print("C");
    // }

    // const idade = 19;
    // if (idade >= 18){
    //     print("Sim");
    //     print("Até logo");
    // }
    // else{
    //     print("Não");
    // }
    // var b = 2;
    // final a = b + 2;
    // var a = 2;
    // var a;
    // a = 2;
    // a = a + 2;

    //operadores de inferência de tipo
    //const, final, var
    // const nome = 'João';
    // nome = "abc";
    // final nome = 'João'.toUpperCase();
    // // nome = "João";
    // nome = "João Silva";
    // var nome = "João";
    // print(nome.runtimeType);
    // // nome.falar();
    // nome = "João Silva";
    // print(nome.runtimeType);

    // int a = 2; //estático
    // dynamic b = 2; //dinâmico
    // b = "abc";
    // b.falar();
    // a.falar();

    // double d1 = 2;
    // int i1 = 2;


    // String idadeTextual = '25';
    // int idade = int.parse(idadeTextual);
    // String pesoTextual = '80.5';
    // double peso = double.parse(pesoTextual);
    // String alturaTextual = '180';
    // num altura = num.parse(alturaTextual);
    // print(altura.runtimeType);

    // var letra = 'x';    
    // print(letra * 10);
    // String nome = 'João';
    // String sobrenome = 'Silva';
    // // String nomeCompleto = nome + ' ' + sobrenome;
    // String nomeCompleto = '$nome $sobrenome';
    // int idade = 20;
    // print("Minha idade é: $idade")
    // print("No ano que vem terei ${idade+1}");
    // print("Minha idade é " + idade.toString());
    // bool deMaior= false;
    // int idade = 17;
    // num peso = 80;
    // double altura = 1.82;
    // print(nome.runtimeType);
    // print(deMaior.runtimeType);
    // print(idade.runtimeType);
    // print(peso.runtimeType);
    // print(altura.runtimeType);
}