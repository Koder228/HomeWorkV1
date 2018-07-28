function myFirstApp(name , age) {

/* 	name = "Дмитрий";
 	age = 19;*/

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills(){

		let skills = ["html" , "css" , "js-2%"];

		for (let i = 0; i < skills.length; i++) {

			document.write("Я мастер -" + skills[i] + "<br><br>");
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {

			document.write("Тебе более 18");

		}
		else{

			document.write("Тебе менее 18");
		}
	}
	checkAge()

	function calcPow(num){
		let multi = num * num;
		document.write("<br><br> Квадрат числа " + num + " = " + multi + "");
	}
	calcPow(4)
}

myFirstApp("Дмитрий", 19);