var Vopros = prompt("vvedite Chislo");
var sum = 0;
for (i = 0; i <= Vopros; i++) {
  if (i % 2 == 1){
    sum += i;
  }
}
alert(sum);