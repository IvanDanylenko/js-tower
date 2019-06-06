const loki = require('lokijs');

const db = new loki('js-tower.json');

db.addCollection('users').insert([
	{ id: 1, login: 'test', password: 'test', token: 'test-jwt-token', 
		progress: {
			ex1Level: 0,
			ex1Score: 0,
			ex2Level: 0,
			ex2Score: 0,
			ex3Level: 0,
			ex3Score: 0
		}
	},
	{ id: 2, login: 'demo', password: 'demo', token: 'demo-jwt-token', 
		progress: {
			ex1Level: 0,
			ex1Score: 0,
			ex2Level: 0,
			ex2Score: 0,
			ex3Level: 0,
			ex3Score: 0
		}
	}
]);

/* Collection for ex1 */
db.addCollection('ex1').insert([
	// level 1 - EX1
  {
		id: 1, 
		name: "Рівень 1",
		tasks: [
			// task 1 - EX1
			{
        id: 1,
        name: "Коментарі",
        description: `<p>Коментарі - це спеціальний синтаксис в JavaScript, який дозволяє ігнорувати один або більше рядків коду. Частіше всього коментарі використовуються для того, щоб залишити текстові помітки в коді, які допоможуть швидко розібратися в тому, що цей код робить.</p>
        <p>Написати коментар можна двома способами:</p>
				<p>За допомогою <i>//</i>, буде проігнорований весь подальший текст в цьому рядку.</p>
				<blockquote>// Це простий коментар</blockquote>
				<p>За допомогою <i>/*</i> і <i>*/</i>, буде проігнорований весь внутрішній текст.</p>
				<blockquote>/* Це коментар<br>на декілька<br>рядків*/</blockquote>
				<p>Коли ти пишеш код, намагайся часто коментувати його, це допоможе швидко в ньому розібратися</p>`,
				codeEditor: [{id: 1, text: ``}],
        challenges: [
					{ id: 1, title: "Створи простий коментар" },
					{ id: 2, title: "Створи багаторядковий коментар" }
				],
				tests: [
					{ id: 1, value: "//" },
					{ id: 2, value: "/*" },
					{ id: 3, value: "*/" }
				]
			},
			// end task 1
			// task 2 - EX1
      {
				id: 2,
				name: "Об'явлення змінних",
				description: `<p>В JavaScript існують сім типів даних: <i>undefined</i>, <i>null</i>, <i>boolean</i>, <i>string</i>, <i>symbol</i>, <i>number</i> та <i>object</i>.</p>
				<p>Самий простий спосіб об'явити змінну - за допомогою ключового слова <i>var</i>. Спочатку ми вказуємо ключове слово <i>var</i>, далі назву змінної та крапку з комою в кінці.</p>
				<blockquote>var myVariable;</blockquote>
				<p>Спробуй створити змінну з назвою <i>myName</i>.</p>`,
				codeEditor: [{ id: 1, text: ``}],
				challenges: [
					{ id: 1, title: "Об'яви змінну з назвою myName" },
				],
				tests: [
					{ id: 1, value: "var myName;" }
				]
			},
			// end task 2
			// task 3 - EX1
			{
				id: 3,
				name: "Ключові слова let і const",
				description: `<p>В стандарті ETMAScript 6 (ES6) запровадженому в 2015 році були додані нові можливості мови.</p>
				<p>Згідно до нового стандарту краще об'являти змінну за допомогою ключових слів <i>let</i> або <i>const</i>.</p>
				<p>Ключове слово let працює схожим чином як і var, але областю визначення let змінної є не лише функції але й будь які логічні блоки виділені фігурними дужками</p>
				<p>Ключове слово const відрізняється від let тим, що після присвоєння змінній якогось значення, це значення більше не можна змінювати, воно стає константою</p>
				<p>Приклад:</p>
				<blockquote>
					let variableOne = 20;<br>
					const variableTwo = 30;
				</blockquote>`,
				codeEditor: [{ id: 1, text: `` }],
				challenges: [
					{ id: 1, title: "Об'яви змінну за допомогою ключового слова let" },
					{ id: 1, title: "Об'яви змінну за допомогою ключового слова const" }
				],
				tests: [
					{ id: 1, value: "let" },
					{ id: 2, value: "const" }
				]
			},
			// end task 3
			// task 4 - EX1
			{
				id: 4,
				name: "Завдання",
				description: ``,
				codeEditor: [{ id: 1, text: `` }],
				challenges: [
					{ id: 1, title: "" }
				],
				tests: [
					{ id: 1, value: "" }
				]
			}
			// end task 4
		]
	},
	// end level 1 - EX1
	// level 2 - EX1
  {
		id: 2,
		name: "Рівень 2",
		tasks: [
			// task 5 - EX1
			{
				id: 5,
				name: "Завдання",
				description: ``,
				codeEditor: [{ id: 1, text: `` }],
				challenges: [
					{ id: 1, title: "" }
				],
				tests: [
					{ id: 1, value: "" }
				]
			},
			// end task 5
			// task 6 - EX1
			{
				id: 6,
				name: "Завдання",
				description: ``,
				codeEditor: [{ id: 1, text: `` }],
				challenges: [
					{ id: 1, title: "" }
				],
				tests: [
					{ id: 1, value: "" }
				]
			},
			// end task 6
			// task 7 - EX1
			{
				id: 7,
				name: "Завдання",
				description: ``,
				codeEditor: [{ id: 1, text: `` }],
				challenges: [
					{ id: 1, title: "" }
				],
				tests: [
					{ id: 1, value: "" }
				]
			},
			// end task 7
			// task 8 - EX1
			{
				id: 8,
				name: "Завдання",
				description: ``,
				codeEditor: [{ id: 1, text: `` }],
				challenges: [
					{ id: 1, title: "" }
				],
				tests: [
					{ id: 1, value: "" }
				]
			},
			// end task 8
			// task 9 - EX1
			{
				id: 9,
				name: "Завдання",
				description: ``,
				codeEditor: [{ id: 1, text: `` }],
				challenges: [
					{ id: 1, title: "" }
				],
				tests: [
					{ id: 1, value: "" }
				]
			},
			// end task 9
			// task 10 - EX1
			{
				id: 10,
				name: "Завдання",
				description: ``,
				codeEditor: [{ id: 1, text: `` }],
				challenges: [
					{ id: 1, title: "" }
				],
				tests: [
					{ id: 1, value: "" }
				]
			}
			// end task 10
		]
	}
	// end level 2 - EX1
]);

/* Collection for ex2 */
db.addCollection('ex2').insert([
	// level 1 - EX2
	{
		id: 1,
		name: "Рівень 1",
		tasks: [
			// task 1 - EX2
			{
				id: 1,
				name: "Завдання 1",
				question: `<p>Яке значення буде виведено в консоль?</p>`,
				codeEditor: [
					{
						id: 1, 
						text: `function sayHello(name) {
    return name.toUpperCase();
}

let yourSecondName = "Colt";
sayHello(yourSecondName);
console.log(sayHello("John") + " " + sayHello(yourSecondName));`
					}
				],
				answer: "JOHN GOLT"
			},
			// end task 1
			// task 2 - EX2
			{
				id: 2,
				name: "Завдання 2",
				question: `<p>Яке значення виведе в консоль console.log, що спрацює останнім?</p>`,
				codeEditor: [
					{
						id: 1, 
						text: `function noReturn() {
	var sum = 0;
	for(var i = 0; i < 10; i++) {
		sum += i;
	}
	console.log(sum);
}
console.log(noReturn());`
					}
				],
				answer: "undefined"
			},
			// end task 2
			// task 3 - EX2
			{
				id: 3,
				name: "Завдання 3",
				question: `<p>Яке значення виведе в консоль?</p>`,
				codeEditor: [
					{
						id: 1,
						text: `const str = "101-1";
console.log(parseInt(str, 2));`
					}
				],
				answer: "5"
			},
			// end task 3
			// task 4 - EX2
			{
				id: 4,
				name: "Завдання 4",
				question: `<p>Яке значення виведе в консоль?</p>`,
				codeEditor: [
					{
						id: 1,
						text: `console.log(parseInt('hello', 10));`
					}
				],
				answer: "NaN"
			},
			// end task 4
			// task 5 - EX2
			{
				id: 5,
				name: "Завдання 5",
				question: `<p>Яке значення виведе в консоль?</p>`,
				codeEditor: [
					{
						id: 1,
						text: `let one = 1;
let zero = 0;
console.log(one/zero + one);`
					}
				],
				answer: "Infinity"
			}
			// end task 5
		]
	},
	// end level 1 - EX2
	// level 2 - EX2
	{
		id: 2,
		name: "Рівень 2",
		tasks: [
			// task 6 - EX2
			{
				id: 6,
				name: "Завдання 6",
				question: `<p>Яке значення отримає змінна name?</p>`,
				codeEditor: [
					{
						id: 1,
						text: `let name = 'kittens';
if (name == 'puppies') {
  name += ' woof';
} else if (name == 'kittens') {
  name += ' meow';
} else {
  name += '!';
}`
					}
				],
				answer: "kittens meow"
			},
			// end task 6
			// task 7 - EX2
			{
				id: 7,
				name: "Завдання 7",
				question: `<p>Яке значення виведе в консоль?</p>`,
				codeEditor: [
					{
						id: 1,
						text: ``
					}
				],
				answer: ""
			},
			// end task 7
			// task 8 - EX2
			{
				id: 8,
				name: "Завдання 8",
				question: `<p>Яке значення виведе в консоль?</p>`,
				codeEditor: [
					{
						id: 1,
						text: ``
					}
				],
				answer: ""
			},
			// end task 8
			// task 9 - EX2
			{
				id: 9,
				name: "Завдання 9",
				question: `<p>Яке значення виведе в консоль?</p>`,
				codeEditor: [
					{
						id: 1,
						text: ``
					}
				],
				answer: ""
			},
			// end task 9
			// task 10 - EX2
			{
				id: 10,
				name: "Завдання 10",
				question: `<p>Яке значення виведе в консоль?</p>`,
				codeEditor: [
					{
						id: 1,
						text: ``
					}
				],
				answer: ""
			}
			// end task 10
		]
	}
	// end level 2 - EX2
]);

/* Collection for ex3 */
db.addCollection('ex3').insert([
	// level 1 - EX3
	{
		id: 1,
		name: "Рівень 1",
		tasks: [
			// task 1 - EX3
			{
				id: 1,
				name: "Завдання 1",
				question: `<p>Скільки типів даних в JavaScript?</p>`,
				choises: [
					{ id: 1, name: "П'ять" },
					{ id: 2, name: "Шість" },
					{ id: 3, name: "Сім" },
					{ id: 4, name: "Вісім" }
				],
				answer: 3
			},
			// end task 1
			// task 2 - EX3
			{
				id: 2,
				name: "Завдання 2",
				question: `<p>Якого типу NaN?</p>`,
				choises: [
					{ id: 1, name: "Object" },
					{ id: 2, name: "Number" },
					{ id: 3, name: "String" },
					{ id: 4, name: "null" },
					{ id: 5, name: "undefined" }
				],
				answer: 2
			},
			// end task 2
			// task 3 - EX3
			{
				id: 3,
				name: "Завдання 3",
				question: `<p></p>`,
				choises: [
					{ id: 1, name: "Object" },
					{ id: 2, name: "Number" },
					{ id: 3, name: "String" },
					{ id: 4, name: "null" },
					{ id: 5, name: "undefined" }
				],
				answer: 2353532
			}
			// end task 3
		]
	},
	// end level 1
	// level 2 - EX3
	{
		id: 2,
		name: "Рівень 2",
		tasks: [
			// task 4 - EX3
			{
				id: 4,
				name: "Завдання 4",
				question: `<p></p>`,
				choises: [
					{ id: 1, name: "Object" },
					{ id: 2, name: "Number" },
					{ id: 3, name: "String" },
					{ id: 4, name: "null" },
					{ id: 5, name: "undefined" }
				],
				answer: 2353532
			},
			// end task 4
			// task 5 - EX3
			{
				id: 5,
				name: "Завдання 5",
				question: `<p></p>`,
				choises: [
					{ id: 1, name: "Object" },
					{ id: 2, name: "Number" },
					{ id: 3, name: "String" },
					{ id: 4, name: "null" },
					{ id: 5, name: "undefined" }
				],
				answer: 2353532
			},
			// end task 5
			// task 6 - EX3
			{
				id: 6,
				name: "Завдання 6",
				question: `<p></p>`,
				choises: [
					{ id: 1, name: "Object" },
					{ id: 2, name: "Number" },
					{ id: 3, name: "String" },
					{ id: 4, name: "null" },
					{ id: 5, name: "undefined" }
				],
				answer: 2353532
			}
			// end task 6
		]
	},
	// end level 2
	// level 3 - EX3
	{
		id: 3,
		name: "Рівень 3",
		tasks: [
			// task 7 - EX3
			{
				id: 7,
				name: "Завдання 7",
				question: `<p></p>`,
				choises: [
					{ id: 1, name: "Object" },
					{ id: 2, name: "Number" },
					{ id: 3, name: "String" },
					{ id: 4, name: "null" },
					{ id: 5, name: "undefined" }
				],
				answer: 2353532
			},
			// end task 7
			// task 8 - EX3
			{
				id: 8,
				name: "Завдання 8",
				question: `<p></p>`,
				choises: [
					{ id: 1, name: "Object" },
					{ id: 2, name: "Number" },
					{ id: 3, name: "String" },
					{ id: 4, name: "null" },
					{ id: 5, name: "undefined" }
				],
				answer: 2353532
			},
			// end task 8
			// task 9 - EX3
			{
				id: 9,
				name: "Завдання 9",
				question: `<p></p>`,
				choises: [
					{ id: 1, name: "Object" },
					{ id: 2, name: "Number" },
					{ id: 3, name: "String" },
					{ id: 4, name: "null" },
					{ id: 5, name: "undefined" }
				],
				answer: 2353532
			},
			// end task 9
			// task 10 - EX3
			{
				id: 10,
				name: "Завдання 10",
				question: `<p></p>`,
				choises: [
					{ id: 1, name: "Object" },
					{ id: 2, name: "Number" },
					{ id: 3, name: "String" },
					{ id: 4, name: "null" },
					{ id: 5, name: "undefined" }
				],
				answer: 2353532
			},
			// end task 10
		]
	}
	// end level 3
]);

db.saveDatabase();