import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:lama/postreal.dart';
class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final email=TextEditingController();
  final password=TextEditingController();
  final number=TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold
    (
      body: Container(
       
        height: 400,
        child: Form(
          child: Column(children: [
            TextFormField(
              controller: email,
              decoration:InputDecoration(
                label: Text("Email"),
              ) ,
            ),
            SizedBox(height: 20.0),
             TextFormField(
              controller: password,
              decoration:InputDecoration(
                label: Text("password"),
              ) ,
            ),
              SizedBox(height: 20.0),
             TextFormField(
              controller: number,
              decoration:InputDecoration(
                label: Text("contact"),
              ) ,
            ),
              SizedBox(height: 20.0),
          
          ]),
        ),
      ),
      floatingActionButton: FloatingActionButton.extended(onPressed: ()async{
        try{
          print("hello");
        final res=await PostServices().registeruser({
          'email':email.text,
          'password':password.text,
          'contact':number.text,
          'full_name':"SAfal",
          'role_id':'2',
        });
        print("res=${res.body}");
        }catch(e){
          print("error=$e");
        }

        
      }, label: Text("Login")),
    );
  }
}