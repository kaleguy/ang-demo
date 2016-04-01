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

        $scope.eventSources = [];


        activate();


        function activate() {
            logger.info('Activated Calendar View');
        }
    }
})();
