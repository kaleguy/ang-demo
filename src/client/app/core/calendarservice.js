(function () {

    'use strict';

    angular
        .module('app.core')
        .factory('calendarservice', calendarservice);

    calendarservice.$inject = ['$http', '$q', 'exception', 'logger'];

    /* @ngInject */
    function calendarservice($http, $q, exception, logger) {

        var service = {
            getEvents: getEvents,
        };

        return service;

        function getEvents() {
            return $http.get('/api/people')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }

    }

})();

