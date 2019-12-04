var n = prompt("vvedite kolichestvo chasov/dney/mecyacev");
if(n.includes('h')){
    var result = parseInt(n) * 60 * 60;
    alert("V" + " " + n + " " + "chasah" + " " + result + " " + "secund");
}else if(n.includes('d')){
    var day = parseInt(n) * 68400;
    alert("V" + " " + n + " " + "dnyah" + " " + day + " " + "secund");
}
    else if(n.includes('w')){
      var week = parseInt(n) * 604800;
      alert("V" + " " + n + " " + "nedelyah" + " " + week + " " + "secund");
}    else if(n.includes('m')){
  var month = parseInt(n) * 2628000;
  alert("V" + " " + n + " " + "mesyacah" + " " + month + " " + "secund");
} 
else {
  alert ('poprobui eshe raz')
  
}