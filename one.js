function calc() {
	let a = document.getElementById("input_a").value;

	if (a && Number(a) >= 0) {
		a = Number(a);
		document.getElementById("answer").innerText = `Ответ: ${String(a * a)}`;
	} else {
		alert("Некорректные входные данные");
	}
}