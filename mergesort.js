//take in an array to sort
// recursively split it until you get to 1 element
// start merging them backwards by comparing elements

const mergesort = function () {
	
	const pub = {}
	
	pub.sort = function (array) {
		if (array.length <= 1) { return array }
		const arrayHalf = Math.floor(array.length/2)
		const lower = pub.sort(array.slice(0, arrayHalf))
		const higher = pub.sort(array.slice(arrayHalf, array.length))
		return pub.merge(lower, higher)
	}
	
	pub.merge = function (lower, higher) {
		let sortedArray = []
		let leftIndex = 0
		let rightIndex = 0
		while (true) {
			if (leftIndex >= lower.length) {
				sortedArray = sortedArray.concat(higher.slice(rightIndex))
				break
			} else if (rightIndex >= higher.length) {
				sortedArray = sortedArray.concat(lower.slice(leftIndex))
				break
			}
			if (lower[leftIndex] <= higher[rightIndex]) {
				sortedArray.push(lower[leftIndex])
				leftIndex++
			} else {
				sortedArray.push(higher[rightIndex])
				rightIndex++
			}
		}
		return sortedArray
	}
	
	return pub
	
}

module.exports = mergesort
