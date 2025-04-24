/* var mensaje = "todo listo.."

alert(mensaje) */



let nota1 = prompt('ingrese la nota 1 de html :')
nota1 = parseFloat(nota1)
document.getElementById('nota1html').textContent = nota1.toFixed(1);

let nota2 = prompt('ingrese la nota 2 de html :')
nota2 = parseFloat(nota2)
document.getElementById('nota2html').textContent = nota2.toFixed(1);

let nota3 = prompt('ingrese la nota 3  de html :')
nota3 = parseFloat(nota3)
document.getElementById('nota3html').textContent = nota3.toFixed(1);

let nota1css = prompt('ingrese la nota 1 css :')
nota1css = parseFloat(nota1css)
document.getElementById('nota1css').textContent = nota1css.toFixed(1);

let nota2css = prompt('ingrese la nota 2 css :')
nota2css = parseFloat(nota2css)
document.getElementById('nota2css').textContent = nota2css.toFixed(1);

let nota3css = prompt('ingrese la nota 3 css :')
nota3css = parseFloat(nota3css)
document.getElementById('nota3css').textContent = nota3css.toFixed(1);

let nota1js = prompt('ingrese la nota 1 js :')
nota1js = parseFloat(nota1js)
document.getElementById('nota1js').textContent = nota1js.toFixed(1);

let nota2js = prompt('ingrese la nota 2 js :')
nota2js = parseFloat(nota2js)
document.getElementById('nota2js').textContent = nota2js.toFixed(1);

let nota3js = prompt('ingrese la nota 3 js :')
nota3js = parseFloat(nota3js)
document.getElementById('nota3js').textContent = nota3js.toFixed(1);


var promediohtml = (nota1 + nota2 + nota3) / 3
document.getElementById("promediohtml").textContent = promediohtml.toFixed(1)


var promediocss = (nota1css + nota2css + nota3css) / 3
document.getElementById("promediocss").textContent = promediocss.toFixed(1)

var promediojs = (nota1js + nota2js + nota3js) / 3
document.getElementById("promediojs").textContent = promediojs.toFixed(1)







