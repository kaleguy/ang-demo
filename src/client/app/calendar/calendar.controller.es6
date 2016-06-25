/*global $ */
/*global _ */
/*global setAll */

(function () {

    angular.module('app.calendar').controller('CalendarController', CalendarController);

    CalendarController.$inject = [
        '$scope', '$timeout', '$compile', '$document',
        'logger', 'uiCalendarConfig', 'dataservice'];

    /* @ngInject */
    function CalendarController(
        $scope, $timeout, $compile, $document, logger,
        uiCalendarConfig, dataservice) {

        var vm = this;
        vm.title = 'Calendar';
        var editable = true;
        var events = [];

        // display of filter lists
        vm.isCollapsedCal = true;
        vm.isCollapsedOwn = true;

        //  next two functions are for hiding popover.
        //  (trigger:focus doesn't work with container: body)
        $document.bind('keypress', function (e) {
            if (e.keyCode === 27) {
                $('.popover').popover('hide');
                $scope.$apply();
            }
        });
        $('body').on('click', function (e) {
            var a = $(e.target).parents('A');
            var popId = a.attr('aria-describedby');
            if (popId) {
                $timeout(function () {
                    var pop = $('.popover[id!=' + popId + ']');
                    if (pop) {
                        pop.popover('hide');
                    }
                }, 1);
            } else {
                $('.popover').popover('hide');
            }
        });

        // load the events into the calendar
        dataservice.getEvents().then(function (data) {
            vm = _.extend(vm, data);
            events.push(data.events);
        });

        /**
         * ========== FullCalendar Setup ==============
         */
        var buttonIcons = {
            refresh: 'left-single-arrow'
        };
        $scope.uiConfig = {

            calendar: {
                height: 'auto',
                editable: editable,
                droppable: true,
                timezone: 'local',
                buttonIcons: buttonIcons,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                dayClick: dayClick,
                eventClick: eventClick,
                viewRender: viewRender
            }
        };
        $scope.eventSources = events;

        /**
         * eventClick: show bootstrap popover with event info
         * @param {object} calEvent
         * @param {object} jsEvent
         */
        function eventClick(calEvent, jsEvent) {

            // let eventClicked = true;
            var el = $(jsEvent.currentTarget);
            var item = calEvent;

            // use an underscore template for the first pass on the content
            // because apparently not possible to get the height right when
            // using ng $compile
            var template = _.template($('#cal_pop').html());

            function _showPopover(el) {

                el.popover('show');
                el.attr('pop', true);
                var popid = '#' + el.attr('aria-describedby');
                el.attr('tabindex', 0);
                el.attr('role', 'button');

                // Once content is drawn, we can $compile it to get the ng commands to work
                var contentEl = $(popid + ' .popover-content');
                var contentElChild = $(popid + ' .tool-content');
                var ngTemplate = contentElChild.html();
                var ngEl = angular.element(ngTemplate);
                var compiled = $compile(ngEl);
                contentElChild.remove();
                contentEl.append(ngEl);
                compiled($scope);
            }

            el.popover({
                title: item.title,
                placement: 'right',
                container: 'body',
                html: true,
                trigger: 'focus',
                content: function content() {
                    return template(item);
                }
            });

            _showPopover(el);
        }

        /* Navigate to the Agenda view of a particular day on clicking the day cell of the Month view */
        function dayClick(date) {
            // view, calendar
            var c = uiCalendarConfig.calendars.mainCalendar;
            c.fullCalendar('changeView', 'agendaDay');
            c.fullCalendar('gotoDate', date);
            $('.popover').popover('hide');
        }

        function viewRender() {}

        /**
         * ============ Color Picker and Filters =====================
         */
        vm.calendarFilters = {};
        vm.ownerFilters = {};

        var unfilterAll = function unfilterAll() {
            setAll(vm.calendarFilters, false);
            setAll(vm.ownerFilters, false);
            //_.each(events, (e) => e.className = _.without(e.className, 'hide');
        };

        /**
         * toggleHide: hide/show events by type (target)
         * @param {string} target - 'calendar' or 'owner'
         * @param {string} key - id of target
         * @param {boolean} hide
         */
        var toggleHide = function toggleHide(target, key, hide) {
            var cpEvents = angular.copy(vm.events);
            cpEvents.forEach(function (e) {
                if (e[target] === key) {
                    if (hide) {
                        e.className.push('hide');
                    } else {
                        e.className = _.without(e.className, 'hide');
                    }
                }
            });
            events.length = 0;
            events.push(cpEvents);
        };

        /**
         * filterCalendars - filter calendars by account. This function also handles
         * the click on the color square, and passes that click to the color picker.
         * @param {string} key
         */
        vm.filterCalendars = function (key) {
            vm.calendarFilters[key] = !vm.calendarFilters[key];
            //console.log(key, vm.calendarFilters[key]);
            toggleHide('calendar', key, vm.calendarFilters[key]);
        };
        vm.filterOwners = function (key) {
            vm.ownerFilters[key] = !vm.ownerFilters[key];
            toggleHide('owner', key, vm.ownerFilters[key]);
        };

        vm.setEventsColor = function (color, account) {

            var cpEvents = angular.copy(vm.events);
            var id = account.id;
            cpEvents.forEach(function (e) {
                if (e.calendar === id) {
                    e.backgroundColor = color;
                }
            });
            events.length = 0;
            events.push(cpEvents);
            $scope.$apply(); // required bc angular fullcalendar does not respond to change in event backgroundColor
        };

        activate();
        function activate() {
            logger.info('Activated Calendar View');
        }
    }
})();

//# sourceMappingURL=calendar.controller.js.map
