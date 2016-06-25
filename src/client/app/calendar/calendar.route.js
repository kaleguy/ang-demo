'use strict';

(function () {

    angular.module('app.calendar').run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'calendar',
            config: {
                url: '/calendar',
                templateUrl: 'app/calendar/calendar.html',
                controller: 'CalendarController',
                controllerAs: 'vm',
                title: 'Calendar',
                settings: {
                    nav: 2,
                    content: '<i class="fa fa-lock"></i> Calendar'
                }
            }
        }];
    }
})();

//# sourceMappingURL=calendar.route.js.map