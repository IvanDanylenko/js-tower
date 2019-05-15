const loki = require('lokijs');

const db = new loki('js-tower.json');

db.addCollection('users').insert([
    {id: 1, login: 'test', password: 'test', token: 'test-jwt-token', score: 0},
    {id: 2, login: 'demo', password: 'demo', token: 'demo-jwt-token', score: 0}
]);

db.addCollection('tasklevels').insert([
    {id: 1, name: 'Основи JavaScript',
    tasks: [
        {
            id: 1,
            name: 'Вправа 1',
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
            codeEditor: [{id: 1, text: 'function test () { }'}]
        },
        {
            id: 2,
            name: 'Вправа 2',
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
            codeEditor: [{id: 1, text: 'function test () { }'}]
        },
        {
            id: 3,
            name: 'Вправа 3',
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

db.saveDatabase();
