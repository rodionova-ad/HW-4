function getSimpleNums(N) {
	let array = Array(N + 1).fill().map((x, i) => i)
	
	array[0] = undefined
	array[1] = undefined

	for (let i = 2; i * i <= N; i++) 
		if (array[i])
			for (let j = i * i; j <= N; j += i) 
				array[j] = undefined
	
	return array.filter((a) => a)
}

function calc() {
	let n = document.getElementById("input_n").value;

	if (n && Number(n) > 0) {
		n = Number(n)
		document.getElementById("answer").innerText = `Ответ: ${getSimpleNums(n).join(', ')}`
	} else {
		alert("Некорректные входные данные")
	}
}