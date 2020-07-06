function calc() {
	let arr = Array(25).fill().map((el, i) => document.getElementById(`a${i}`).value)
	if (arr.map(e => Boolean(e)).reduce((a, b) => a && b)) {
		arr = arr.map(e => Number(e))

		let offset = Number((arr.reduce((a, b) => a + b) / 25).toFixed(3))

		arr = arr.map(e => Number((e - offset).toFixed(3)))
		arr = Array(5).fill().map((x, i) => Array(5).fill().map((y, j) => arr[i * 5 + j]))

		document.getElementById('answer').innerHTML = `<pre>${arr.map(e => e.join('\t')).join('\n')}</pre>`
	} else {
		alert('Некорректные данные')
	}
}