(function () {
    'use strict';

    angular
        .module('app.core')
        .service('CalendarService', Calendar);

    // Calendar.$inject = ['dependency'];

    /* @ngInject */
    function Calendar() {
        this.getCalendarData = getCalendarData;

        function getCalendarData() {

            /**
             * =========== Dummy Data ============
             */
            var data = {};
            data.accounts = [
                {
                    id: 1,
                    name: 'bob@example.com',
                    email_address: 'bob@example.com',
                    value: '1',
                    backgroundColor: 'cornflowerBlue'
                },
                {
                    id: 2,
                    name: 'robert@gmail.com',
                    email_address: 'robert@gmail.com',
                    value: '2',
                    backgroundColor: 'limeGreen'
                },
                {
                    id: 3,
                    name: 'dude@hotmail.com',
                    email_address: 'dude@hotmail.com',
                    value: '3',
                    backgroundColor: 'mediumPurple'
                },
                {
                    id: 4,
                    name: 'rob.smith@hotmail.com',
                    email_address: 'smith@hotmail.com',
                    value: '4',
                    backgroundColor: 'darkCyan'
                }
            ];
            data.owners = [
                {
                    id: 1,
                    name: 'boss@company.com',
                    email_address: 'bob@example.com',
                    value: '1',
                    backgroundColor: 'cornflowerBlue'
                },
                {
                    id: 2,
                    name: 'robert@gmail.com',
                    email_address: 'robert@gmail.com',
                    value: '2',
                    backgroundColor: 'limeGreen'
                },
                {
                    id: 3,
                    name: 'president@hotmail.com',
                    email_address: 'dude@hotmail.com',
                    value: '3',
                    backgroundColor: 'mediumPurple'
                },
                {
                    id: 4,
                    name: 'robert.smith@hotmail.com',
                    email_address: 'robert.smith@hotmail.com',
                    value: '4',
                    backgroundColor: 'darkCyan'
                }
            ];

            data.dummyEvents = [
                {
                    id: 1, title: 'Big Meeting', start: '2016-03-20T07:30:00', end: '2016-03-20T12:30:00', calendar: 1,
                    owner:2,location:'Office',
                    participants:['jane@jane.com','jill@jill.com'],
                    description: 'cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo. Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan. Gluten-free poutine pabst '
                },
                {id: 2, title: 'Little Meeting', start: '2016-03-18', calendar: 2},
                {
                    id: 3, title: 'Launch Event', start: '2016-03-06', calendar: 1,
                    owner:2,
                    description: 'cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo. Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan. Gluten-free poutine pabst '
                },
                {id: 4, title: 'Breakfast at Tiffany\'s', start: '2016-03-08', calendar: 3,
                    owner:4
                },
                {
                    id: 5, title: 'Blastoff', start: '2016-02-28', end: '2016-03-02', calendar: 2,
                    owner:1,
                    description: 'cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo. Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan. Gluten-free poutine pabst '
                },
                {
                    id: 6, title: 'Liftoff', start: '2016-03-01', calendar: 1,
                    owner:3,
                    description: 'cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo. Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan. Gluten-free poutine pabst '
                },
                {
                    id: 6, title: 'Egg Sandwich', start: '2016-03-16', calendar: 4,
                    owner:4,
                    description: 'cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo. Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan. Gluten-free poutine pabst '
                },
                {
                    id: 8, title: 'Touchdown', start: '2016-03-10T07:30:00', end: '2016-03-10T09:30', calendar: 4,
                    owner:2,
                    description: 'cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo. Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan. Gluten-free poutine pabst '
                },
                {
                    id: 9, title: 'Movie Night', start: '2016-03-26', calendar: 4,
                    owner:2,
                    description: 'cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo. Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan. Gluten-free poutine pabst '
                },
                {
                    id: 10, title: 'Big Conference', start: '2016-03-27', end: '2016-04-01', calendar: 4,
                    owner:2,
                    description: 'cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo. Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan. Gluten-free poutine pabst '
                },
                {
                    id: 11, title: 'Touchdown', start: '2016-03-10T14:00:00', end: '2016-03-10T17:30', calendar: 4,
                    owner:4,
                    description: 'cred migas farm-to-table yr single-origin coffee yuccie hammock locavore swag lomo. Semiotics synth put a bird on it butcher, flexitarian poutine XOXO fap cardigan. Gluten-free poutine pabst '
                },
                {
                    id: 12, title: 'Touchdown', start: '2016-03-10T12:30:00', end: '2016-03-10T13:30', calendar: 4,
                    owner:3,
                    description: 'Synth pitchfork neutra, mlkshk chicharrones authentic kale chips quinoa leggings PBR&B post-ironic drinking vinegar tattooed. Slow-carb sartorial sriracha flexitarian vice post-ironic. Pitchfork bitters master cleanse scenester. DIY fap aesthetic YOLO waistcoat drinking vinegar hoodie, twee tousled selfies plaid hammock. Master cleanse squid bitters blog put a bird on it williamsburg art party seitan. Slow-carb you probably haven\'t heard of them cliche vice sartorial. 3 wolf moon bushwick sriracha, migas YOLO drinking vinegar intelligentsia slow-carb salvia'
                }
            ];
            // put the account background color on the event
            _.each(data.dummyEvents, function (e) {
                var account = _.find(data.accounts, function (a) {
                    return a.id === e.calendar
                });
                if (!account) {
                    console.log("No matching account for:", e);
                    return;
                }
                _.defaults(e,{
                    read_only: true,
                    description: '',
                    canceled: false,
                    rsvp_status_descr: false,
                    location: ''
                });

                e.backgroundColor = account.backgroundColor;
                e.className = [];


            });


            return data;

        }
    }

})();

