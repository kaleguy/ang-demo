'use strict';

module.exports = {
    people: getPeople(),
    events: getEvents()
};

function getPeople() {
    return [
        {id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida'},
        {id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
        {id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
        {id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
        {id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
        {id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
        {id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'},
        {id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah'}
    ];
}

function getEvents() {

    var data = {};
    data.accounts = [
        {
            id: 1,
            name: 'bob@example.com',
            emailAddress: 'bob@example.com',
            value: '1',
            backgroundColor: 'cornflowerBlue'
        },
        {
            id: 2,
            name: 'robert@gmail.com',
            emailAddress: 'robert@gmail.com',
            value: '2',
            backgroundColor: 'limeGreen'
        },
        {
            id: 3,
            name: 'dude@hotmail.com',
            emailAddress: 'dude@hotmail.com',
            value: '3',
            backgroundColor: 'mediumPurple'
        },
        {
            id: 4,
            name: 'rob.smith@hotmail.com',
            emailAddress: 'smith@hotmail.com',
            value: '4',
            backgroundColor: 'darkCyan'
        }
    ];
    data.owners = [
        {
            id: 1,
            name: 'boss@company.com',
            emailAddress: 'bob@example.com',
            value: '1',
            backgroundColor: 'cornflowerBlue'
        },
        {
            id: 2,
            name: 'robert@gmail.com',
            emailAddress: 'robert@gmail.com',
            value: '2',
            backgroundColor: 'limeGreen'
        },
        {
            id: 3,
            name: 'president@hotmail.com',
            emailAddress: 'dude@hotmail.com',
            value: '3',
            backgroundColor: 'mediumPurple'
        },
        {
            id: 4,
            name: 'robert.smith@hotmail.com',
            emailAddress: 'robert.smith@hotmail.com',
            value: '4',
            backgroundColor: 'darkCyan'
        }
    ];

    const year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let lastMonth = month - 1;
    month = ('0' + month).slice(-2);
    lastMonth = ('0' + lastMonth).slice(-2);
    const yearMonth = year + '-' + month;

    data.events = [
        {
            id: 1, title: 'Big Meeting',
            start: `${yearMonth}-20T07:30:00`,
            end: `${yearMonth}-20T12:30:00`,
            calendar: 1,
            owner:2,location:'Office',
            participants:['jane@jane.com','jill@jill.com'],
            description:
                `cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo.
                Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan.
                Gluten-free poutine pabst`
        },
        {
            id: 2,
            title: 'Little Meeting',
            start: `${yearMonth}-18`,
            calendar: 2
        },
        {
            id: 3,
            title: 'Launch Event',
            start: `${yearMonth}-06`,
            calendar: 1,
            owner:2,
            description:
               `cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo.
                Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan.
                Gluten-free poutine pabst`
        },
        {
            id: 4,
            title: 'Breakfast at Tiffany\'s',
            start: `${yearMonth}-08`,
            calendar: 3,
            owner:4
        },
        {
            id: 5,
            title: 'Blastoff',
            start: `${lastMonth}-28`,
            end: `${yearMonth}-02`,
            calendar: 2,
            owner:1,
            description:
                `cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo.
                Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan.
                Gluten-free poutine pabst`
        },
        {
            id: 6,
            title: 'Liftoff',
            start: `${yearMonth}-01`,
            calendar: 1,
            owner:3,
            description:
                `cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo.
                Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan.
                Gluten-free poutine pabst`
        },
        {
            id: 6, title: 'Egg Sandwich', start: `${yearMonth}-16`, calendar: 4,
            owner:4,
            description:
                `cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo.
                Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan.
                Gluten-free poutine pabst`
        },
        {
            id: 8,
            title: 'Touchdown',
            start: `${yearMonth}-10T07:30:00`,
            end: `${yearMonth}-10T09:30`,
            calendar: 4,
            owner:2,
            description:
                `cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo.
                Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan.
                Gluten-free poutine pabst`
        },
        {
            id: 9,
            title: 'Movie Night',
            start: `${yearMonth}-26`,
            calendar: 4,
            owner:2,
            description:
                `cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo.
                Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan.
                Gluten-free poutine pabst`
        },
        {
            id: 10,
            title: 'Big Conference',
            start: `${yearMonth}-27`,
            end: `${yearMonth}-01`,
            calendar: 4,
            owner:2,
            description:
                `cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo.
                Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan.
                Gluten-free poutine pabst`
        },
        {
            id: 11,
            title: 'Touchdown',
            start: `${yearMonth}-10T14:00:00`,
            end: `${yearMonth}-10T17:30`,
            calendar: 4,
            owner:4,
            description:
                `cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo.
                Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan.
                Gluten-free poutine pabst`
        },
        {
            id: 12,
            title: 'Touchdown',
            start: `${yearMonth}-10T12:30:00`,
            end: `${yearMonth}-10T13:30`,
            calendar: 4,
            owner:3,
            description:
                `cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo.
                Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan.
                Gluten-free poutine pabst`
        }
    ];

    return data;
}

