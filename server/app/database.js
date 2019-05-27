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
    {
			id: 1, 
			name: 'Основи JavaScript',
    	tasks: [
        {
            id: 1,
            name: 'Коментарі',
            description: `<p>Коментарі - це спеціальний синтаксис в JavaScript, який дозволяє ігнорувати один або більше рядків коду. Частіше всього коментарі використовуються для того, щоб залишити текстові помітки в коді, які допоможуть швидко розібратися в тому, що цей код робить.</p>
            <p>Написати коментар можна двома способами:</p>
            <p>За допомогою <i>//</i>, буде проігнорований весь подальший текст в цьому рядку.</p>
            <blockquote>// Це простий коментар</blockquote>
            <p>За допомогою <i>/*</i> і <i>*/</i>, буде проігнорований весь внутрішній текст.</p>
            <blockquote>/* Це коментар<br>на декілька<br>рядків*/</blockquote>
            <p>Коли ти пишеш код, намагайся часто коментувати його, це допоможе швидко в ньому розібратися</p>`,
            tasks: [
                { id: 1, title: 'Створи простий коментар //' },
                { id: 2, title: 'Створи коментар виду /* */' }
            ],
            tests: [
                { id: 1, value: '//' },
                { id: 2, value: '/*' },
                { id: 3, value: '*/' }
            ],
            codeEditor: [{id: 1, text: ``}]
        },
        {
            id: 2,
            name: 'Об\'явлення змінних',
            description: `<p>В JavaScript існують сім типів даних: <i>undefined</i>, <i>null</i>, <i>boolean</i>, <i>string</i>, <i>symbol</i>, <i>number</i> та <i>object</i>.</p>
            <p>Самий простий спосіб об'явити змінну - за допомогою ключового слова <i>var</i>. Спочатку ми вказуємо ключове слово <i>var</i>, далі назву змінної та крапку з комою в кінці.</p>
            <blockquote>var myVariable;</blockquote>
            <p>Спробуй створити змінну з назвою <i>myName</i>.</p>`,
            tasks: [
                { id: 1, title: 'Об\'яви змінну з назвою myName' },
            ],
            tests: [
                { id: 1, value: 'var myName;' }
            ],
            codeEditor: [{ id: 1, text: ``}]
        },
        {
            id: 3,
            name: 'Тип string',
            description: `<p>Описание</p>`,
            tasks: [
                { id: 1, title: 'Присвой власне ім\'я змінній myName' },
            ],
            tests: [
                { id: 1, value: 'var myName' },
                { id: 1, value: '=' },
                { id: 1, value: '\'' }
            ],
            codeEditor: [{ id: 1, text: `var myName;` }]
        },
        {
            id: 4,
            name: 'Вправа 4',
            description: '<p>In JavaScript, you can store a value in a variable with theassignment operator.</p><p><i>myVariable=5;</i></p><p>This assigns the <i>Number</i> value <i>5</i> to <i>myVariable.</i></p><p>Assignment always goes from right to left. Everything to the rightof the=operator is resolved before the value is assigned to thevariable to the left of the operator.</p><div><p><i>myVar=5;</i></p><p><i>myNum=myVar;</i></p></div><p>This assigns <i>5</i> to <i>myVar</i> and then resolves<i>myVar</i> to <i>5</i> again and assigns it to <i>myNum</i>.</p>',
            tasks: [
                { id: 1, title: 'Повинен бути коментар //Simple comment' },
                { id: 2, title: 'Змінна повинна містити число 1012' }
            ],
            tests: [
                { id: 1, value: '//Simple comment' },
                { id: 2, value: "/*Multiline comment*/" },
                { id: 3, value: 1012}
            ],
            codeEditor: [{id: 1, text: 'function test () { }'}]},
        {
            id: 5,
            name: 'Вправа 5',
            description: '<p>In JavaScript, you can store a value in a variable with theassignment operator.</p><p><i>myVariable=5;</i></p><p>This assigns the <i>Number</i> value <i>5</i> to <i>myVariable.</i></p><p>Assignment always goes from right to left. Everything to the rightof the=operator is resolved before the value is assigned to thevariable to the left of the operator.</p><div><p><i>myVar=5;</i></p><p><i>myNum=myVar;</i></p></div><p>This assigns <i>5</i> to <i>myVar</i> and then resolves<i>myVar</i> to <i>5</i> again and assigns it to <i>myNum</i>.</p>',
            tasks: [
                { id: 1, title: 'Повинен бути коментар //Simple comment' },
                { id: 2, title: 'Змінна повинна містити число 1012' }
            ],
            tests: [
                { id: 1, value: '//Simple comment' },
                { id: 2, value: "/*Multiline comment*/" },
                { id: 3, value: 1012}
            ],
            codeEditor: [{id: 1, text: 'function test () { }'}]}
    ]},
    {id: 2, name: 'Продвинутый JavaScript',
    tasks: [
        {id: 1, name: 'Вправа 1',
            description: '<p>In JavaScript, you can store a value in a variable with theassignment operator.</p><p><i>myVariable=5;</i></p><p>This assigns the <i>Number</i> value <i>5</i> to <i>myVariable.</i></p><p>Assignment always goes from right to left. Everything to the rightof the=operator is resolved before the value is assigned to thevariable to the left of the operator.</p><div><p><i>myVar=5;</i></p><p><i>myNum=myVar;</i></p></div><p>This assigns <i>5</i> to <i>myVar</i> and then resolves<i>myVar</i> to <i>5</i> again and assigns it to <i>myNum</i>.</p>',
            tasks: [
                { id: 1, title: 'Повинен бути коментар //Simple comment' },
                { id: 2, title: 'Змінна повинна містити число 1012' }
            ],
            tests: [
                { id: 1, value: '//Simple comment' },
                { id: 2, value: "/*Multiline comment*/" },
                { id: 3, value: 1012}
            ],
            codeEditor: [{id: 1, text: 'function test () { }'}]},
        {id: 2, name: 'Вправа 2'},
        {id: 3, name: 'Вправа 3'},
        {id: 4, name: 'Вправа 4'},
        {id: 5, name: 'Вправа 5'}
    ]}
]);

/* Collection for ex2 */
db.addCollection('ex2').insert([
	{
		id: 1,
		name: "Рівень1",
		tasks: [
			{
				id: 1,
				name: 'Завдання 1',
				question: `<p>Яке значення буде виведено в консоль?</p>`,
				codeEditor: `function sayHello(name) {
    return name.toUpperCase();
}

let yourSecondName = "2";
sayHello(yourSecondName);
console.log(sayHello("1") + " " + sayHello(yourSecondName));`,
				answer: '1 2'
			},
			{
				id: 2,
				name: 'Завдання 2',
				question: `<p>Яке значення виведе в консоль console.log, що спрацює останнім?</p>`,
				codeEditor: `function noReturn() {
	var sum = 0;
	for(var i = 0; i < 10; i++) {
		sum += i;
	}
	console.log(sum); // 1
}
console.log(noReturn()); // 2`,
				answer: 'undefined'
			}
		]
	}
]);

/* Collection for ex3 */
db.addCollection('ex3').insert([
	{
		id: 1,
		name: 'Рівень 1',
		tasks: [
			{
				id: 1,
				name: 'Завдання 1',
				question: `<p>Скільки типів даних в JavaScript?</p>`,
				choises: [
					{ id: 1, name: '5' },
					{ id: 2, name: '6' },
					{ id: 3, name: '7' },
					{ id: 4, name: '8' },
				],
				answer: 3 // choises id = 3, JavaScript have 7 types of data
			},
			{
				id: 2,
				name: 'Завдання 2',
				question: `<p>Якого типу NaN?</p>`,
				choises: [
					{ id: 1, name: 'Object' },
					{ id: 2, name: 'Number' },
					{ id: 3, name: 'String' },
					{ id: 4, name: 'null' },
					{ id: 5, name: 'undefined' }
				],
				answer: 2 // choises id = 2, NaN has type Number
			}
		]
	}
]);

db.saveDatabase();
