var term = {
Canada: 10,
Germany: 13,
Spain: 22
}
let sumtem = 0;
let count = 0
let sum = 0
let max = 0

 
 
 window.addEventListener('DOMContentLoaded', function () {

for (let key in term) {
    count++
}

for (let key in term) {
  sumtem += term[key];
}

sum = sumtem/count;

document.getElementById("sred").innerHTML += sum;

});

  window.addEventListener('DOMContentLoaded',function () {
	 
	 for (let key in term) {
		 if (term[key] > max) {
		 max = term[key]; }
	 };
	 document.getElementById("max").innerHTML += max;
 });





		 
  






	

 



