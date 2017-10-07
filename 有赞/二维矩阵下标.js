function Find(target, array) {
// write code here
	var row = array[0].length - 1
	var col = array.length - 1
	var i = 0, j = row
	while (1) {
		if (i > col) {
			return false
		}
		if (array[i][j] === target) {
			return true
		} else if (array[i][j] > target){
			while (j !== -1) {
				if (array[i][j] === target) {
					return true
				}
				j--
			}
			j = row
		}
		i ++
	}
}