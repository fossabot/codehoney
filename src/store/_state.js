const state = {
	languages: [{
			id: 1,
			count: 35,
			name: 'Javascript',
			isSelected: true,
			snippets: [{
				id: 0,
				name: 'numWays(n, steps)',
				description: "returns the numbers of possible ways to go the stairs up for a given set of steps",
				code: "var num = 0;var steps = [1,2,4];function numWays(n) {if (n == 0) {num++;}for (var step of steps) {if (n - step >= 0) {  numWays(n - step);  }}}console.time();numWays(30);console.timeEnd();document.getElementById('num').innerHTML = 'Number of ways: ' + num;",
				isSelected: true,
				timeStamp: 1548799437196,

			}, {
				id: 1,
				name: 'longestItem(Array)',
				description: "return the longest item in an Array",
				code: "const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x : a));",
				isSelected: false,
				timeStamp: 1548799457085,

			}, {
				id: 2,
				name: 'offset(arr, offset)',
				description: "Moves the specified amount of elements to the end of the array.",
				code: "const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];",
				isSelected: false,
				timeStamp: 1548799472231,
			}, {
				id: 3,
				name: 'remove(arr, func)',
				description: "Removes elements from an array for which the given function returns false.",
				code: "const remove = (arr, func) => Array.isArray(arr) ? arr.filter(func).reduce((acc, val) => { arr.splice(arr.indexOf(val), 1); return acc.concat(val); }, []) : [];",
				isSelected: false,
				timeStamp: 1548799483443,
			}, ]
		},
		{
			id: 2,
			name: 'SCSS',
			count: 0,
			isSelected: false,
			snippets: [],
		}, {
			id: 3,
			name: 'HTML',
			count: 0,
			isSelected: false,
			snippets: [],
		}
	],
	tags: [{
		id: 1,
		name: 'Arrays',
		count: 0,
		isSelected: false,
	}, {
		id: 2,
		name: 'cool functions',
		count: 0,
		isSelected: false,
	}]
}
export default state
