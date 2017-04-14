var simbolo;
var supported = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","u","v","w","x","y","z",
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","U","V","W","X","Y","Z",
                "1","2","3","4","5","6","7","8","9","0"];
  var decoded = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","u","v","w","x","y","z",
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","U","V","W","X","Y","Z",
                "1","2","3","4","5","6","7","8","9","0"];
var MasterKey = null;
function Enc(text){
  simbolo = text.split("");
  return simbolo;
}
function Clave(text){
  var c = text.split("");
  var key = 1;// 1 para que no interfiera con la multiplicación;
  var temp;
  for (var i in c) {
    temp = supported.indexOf(c[i])+1;
    key = temp * key;
  }
  key++;
  return parseInt(Math.pow(key,2));
}
function Miguelizar(text,clave){
  MasterKey = Clave(clave);
  Enc(text);
  var Svalue;
  var constant;
  var final = "";
  var vars;
  var ultimo;
  for (var i in simbolo) {
    Svalue = supported.indexOf(simbolo[i]) + 1;
    constant = Svalue * MasterKey;
    constant = constant.toString();
    vars = constant.split("");
    ultimo = constant.length;
    final = final + constant[0] + constant[ultimo-1];
  }
  console.info('KEY: '+MasterKey);
  console.info('MSG: '+final);

}
function Decode(strmsg,key){
  var Svalue;
  var constant;
  var final = "";
  var vars;
  var ultimo;
  var nums = Splittwo(strmsg);
  for (var i in supported) {
    Svalue = supported.indexOf(supported[i]) + 1;
    constant = Svalue * Key;
    constant = constant.toString();
    vars = constant.split("");
    ultimo = constant.length;
    final.push(constant[0] + constant[ultimo-1]);
  }
  var msg = "";
  var pos;
  for (var i in nums) {
    pos = final.indexOf(nums[i]);
    msg = msg + supported[pos];
  }
  return msg;
}

function Splittwo(str){
  var splited = [];
  var strr = str.split("");
  len = strr.length;
  cantdevars = len/2; // siempre da par lo cual no es problema;
  var final = [];
  for (var i = 0; i < cantdevars; i++) {
    final.push(strr.slice(0,2));
    strr.splice(0,2);
  }
  for (var i in final) {
    splited.push(final[i].join(""));
  }
  return splited;
}
