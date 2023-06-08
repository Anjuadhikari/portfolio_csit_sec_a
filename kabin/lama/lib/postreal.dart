import 'dart:convert';

import 'package:http/http.dart' as http;
class PostServices{
  final url="http://10.10.1.8:9999/api/v1/auth/get-all-user";
  Future<dynamic> registeruser(
    Map<String,dynamic> data
  ) async{
    final res=await http.get(Uri.parse(url),headers: {"Content-Type":"application/json"});
    return res;
  }
}