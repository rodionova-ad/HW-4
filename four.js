function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

function getArray(n, min, max) {
	return Array(n).fill().map(() => getRandomInt(min || 1, max || 100))
}

function getResultArray(a) {
	return Array.from(a).sort((a, b) => a - b)
}

function calc() {
	let n = document.getElementById('n').value
	let min = document.getElementById('min').value
	let max = document.getElementById('max').value

	if (n && min && max && Number(n) > 0 && Number(min) < Number(max)) {
		n = Number(n)
		min = Number(min)
		max = Number(max)

		let arr = getResultArray(getArray(n * n, min, max))
		let offset = 1
		let count = n * n

		let resArr = Array(n).fill().map((x) => Array(n).fill(0))

		for(let i = n - 1, j = 0, s = 0; s < count; j += offset) {
			if (j === -1 || j === n) {
				offset *= -1
				i--
				j += offset
			}

			resArr[i][j] = arr[s++]
		}

		console.log(resArr.map(e => e.join('\t')).join('\n'))
		document.getElementById('answer').innerHTML = `<pre>${resArr.map(e => e.join('\t')).join('\n')}</pre>`
	} else {
		alert('Некорректные данные')
	}
}