(function () {
    'use strict';

    angular
        .module('app.calendar')
        .controller('CalendarController', CalendarController);


    CalendarController.$inject =
        ['$scope', '$timeout', '$compile', '$document', 'logger', 'uiCalendarConfig', 'CalendarService'];
    /* @ngInject */
    function CalendarController($scope, $timeout, $compile, $document, logger, uiCalendarConfig, CalendarService) {

        var vm = this;
        vm.title = 'Calendar';
        var editable = true;
        var events = [];

        var data  = CalendarService.getCalendarData();
        //vm = _.extend(vm, data);

        const refresh = (force) => events.push(data.dummyEvents);
        refresh();

        /**
         * ========== FullCalendar Setup ==============
         */
        let customButtons = {};
        if (editable) {
            customButtons = {
                addButton: {
                    text: 'Add Event',
                    click:  () => { editEvent(); $scope.$apply(); }
                }
            }
        }
        customButtons.refreshButton = {
            text: 'Refresh',
            click:  () => {
                $('.splash_small').show();
                refresh(true);
            },
            icon: 'refresh'
        };

        let buttonIcons = {
            refresh: 'left-single-arrow'
        };

        $scope.uiConfig = {

            calendar: {
                height: 'auto',
                editable: editable,
                droppable: true,
                timezone: "local",
                buttonIcons: buttonIcons,
                customButtons: customButtons,
                drop:  (date, jsEvent) => {},
                header: {
                    left: 'prev,next today addButton refreshButton',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                dayClick,
                eventClick,
                viewRender

            }
        };

        $scope.eventSources = events;

        /**
         * eventClick: show bootstrap popover with event info
         * @param calEvent
         * @param jsEvent
         */
        function eventClick (calEvent, jsEvent) {

           // let eventClicked = true;
            let el = $(jsEvent.currentTarget);
            let item = calEvent;

            // use an underscore template for the first pass on the content
            // because apparently not possible to get the height right when
            // using ng $compile
            let template = _.template($('#cal_pop').html());

            function _showPopover(el) {

                el.popover('show');
                el.attr('pop', true);
                let popid = '#' + el.attr("aria-describedby");
                el.attr('tabindex', 0);
                el.attr('role', 'button');

                // Once content is drawn, we can $compile it to get the ng commands to work
                let contentEl = $(popid + ' .popover-content');
                let contentElChild = $(popid + ' .tool-content');
                let ng_template = contentElChild.html();
                let ng_el = angular.element(ng_template);
                let compiled = $compile(ng_el);
                contentElChild.remove();
                contentEl.append(ng_el);
                compiled($scope);

            }

            el.popover({
                title : item.title,
                placement: 'right',
                container: 'body',
                html: true,
                content: () => template(item)
            });

            _showPopover(el);

        };

        /* Navigate to the Agenda view of a particular day on clicking the day cell of the Month view */
        function dayClick (date) { // view, calendar
            let c = uiCalendarConfig.calendars.mainCalendar;
            c.fullCalendar('changeView', 'agendaDay');
            c.fullCalendar('gotoDate', date);
            removePop();
        };

        function viewRender(){

        }


        activate();
        function activate() {
            logger.info('Activated Calendar View');
        }
    }
})();
