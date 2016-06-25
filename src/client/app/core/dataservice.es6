/*global lodash */
/*global _ */
/*global removeTags */

(function () {

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];

    /* @ngInject */
    function dataservice($http, $q, exception, logger) {

        var service = {
            getPeople: getPeople,
            getEvents: getEvents,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
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
        function getEvents() {
            return $http.get('/api/events')
                .then(success)
                .catch(fail);

            function success(response) {
                return normalizeEvents(response.data);
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }
        function normalizeEvents(data) {

            var events = data.events;
            _.each(events, function (e) {

                var account = _.find(data.accounts, function (a) {
                    return a.id === e.calendar;
                });
                if (!account) {
                    console.log('No matching account for:', e);
                    return;
                }

                var shortDescription = e.description;
                // need this if text is too long
                e.ellipsisClass = '';
                shortDescription = removeTags(shortDescription);
                if (shortDescription.length > 200) {
                    e.ellipsisClass = 'ellipsis';
                }
                _.defaults(e,{
                    title:'',
                    readOnly: true,
                    description: '',
                    shortDescription: shortDescription,
                    canceled: false,
                    rsvpStatusDescr: false,
                    location: '',
                    participants:[],
                    owner:''
                });

                e.backgroundColor = account.backgroundColor;
                e.className = [];

            });
            return data;
        }

    }

})();
