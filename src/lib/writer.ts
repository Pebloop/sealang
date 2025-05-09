const arrToChar = [
	{arr: [false, false, false, false, false, false], char: ' '},
	{arr: [true, false, false, false, false, false], char: 'B'},
	{arr: [false, true, false, false, false, false], char: 'C'},
	{arr: [false, false, true, false, false, false], char: '?'},
	{arr: [false, false, false, true, false, false], char: 'A'},
	{arr: [false, false, false, false, true, false], char: 'D'},
	{arr: [false, false, false, false, false, true], char: 'E'},
	{arr: [true, true, false, false, false, false], char: 'd'},
	{arr: [true, false, true, false, false, false], char: 'f'},
	{arr: [true, false, false, true, false, false], char: 'Z'},
	{arr: [true, false, false, false, true, false], char: 'e'},
	{arr: [true, false, false, false, false, true], char: 'V'},
	{arr: [false, true, true, false, false, false], char: 'h'},
	{arr: [false, true, false, true, false, false], char: 'a'},
	{arr: [false, true, false, false, true, false], char: 'g'},
	{arr: [false, true, false, false, false, true], char: 'W'},
	{arr: [false, false, true, true, false, false], char: 'c'},
	{arr: [false, false, true, false, true, false], char: 'i'},
	{arr: [false, false, true, false, false, true], char: 'Y'},
	{arr: [false, false, false, true, true, false], char: 'b'},
	{arr: [false, false, false, true, false, true], char: 'U'},
	{arr: [false, false, false, false, true, true], char: 'X'},
	{arr: [true, true, true, false, false, false], char: 'l'},
	{arr: [true, true, false, true, false, false], char: 'q'},
	{arr: [true, true, false, false, true, false], char: 'm'},
	{arr: [true, true, false, false, false, true], char: 'è'},
	{arr: [true, false, true, true, false, false], char: 'n'},
	{arr: [true, false, true, false, true, false], char: 'k'},
	{arr: [true, false, true, false, false, true], char: 'u'},
	{arr: [true, false, false, true, true, false], char: 'r'},
	{arr: [true, false, false, true, false, true], char: 'z'},
	{arr: [true, false, false, false, true, true], char: 'à'},
	{arr: [false, true, true, true, false, false], char: 'p'},
	{arr: [false, true, true, false, true, false], char: 'j'},
	{arr: [false, true, true, false, false, true], char: 'v'},
	{arr: [false, true, false, true, true, false], char: 's'},
	{arr: [false, true, false, true, false, true], char: 'ç'},
	{arr: [false, true, false, false, true, true], char: 'x'},
	{arr: [false, false, true, true, true, false], char: 'o'},
	{arr: [false, false, true, true, false, true], char: 't'},
	{arr: [false, false, true, false, true, true], char: 'w'},
	{arr: [false, false, false, true, true, true], char: 'y'},
	{arr: [true, true, true, true, false, false], char: 'I'},
	{arr: [true, true, true, false, true, false], char: 'F'},
	{arr: [true, true, true, false, false, true], char: 'M'},
	{arr: [true, true, false, true, true, false], char: 'J'},
	{arr: [true, true, false, true, false, true], char: 'T'},
	{arr: [true, true, false, false, true, true], char: 'N'},
	{arr: [true, false, true, true, true, false], char: 'H'},
	{arr: [true, false, true, true, false, true], char: 'R'},
	{arr: [true, false, true, false, true, true], char: 'L'},
	{arr: [true, false, false, true, true, true], char: 'S'},
	{arr: [false, true, true, true, true, false], char: 'G'},
	{arr: [false, true, true, true, false, true], char: 'P'},
	{arr: [false, true, true, false, true, true], char: 'K'},
	{arr: [false, true, false, true, true, true], char: 'Q'},
	{arr: [false, false, true, true, true, true], char: 'O'},
	{arr: [true, true, true, true, true, false], char: '\''},
	{arr: [true, true, true, true, false, true], char: '"'},
	{arr: [true, true, true, false, true, true], char: ','},
	{arr: [true, true, false, true, true, true], char: ':'},
	{arr: [true, false, true, true, true, true], char: '.'},
	{arr: [false, true, true, true, true, true], char: ';'},
	{arr: [true, true, true, true, true, true], char: '!'},
]

export function arrayToChar(arr: boolean[]) : string {
	if (arr.length !== 6) {
		throw new Error("Array length must be 6");
	}

	const found = arrToChar.find(a => a.arr.every((v, i) => v === arr[i]));
	if (found) {
		return found.char;
	} else {
		throw new Error("Array not found in arrToChar");
	}

}