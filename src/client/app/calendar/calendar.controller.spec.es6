/* jshint -W117, -W030 */
describe('CalendarController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.calendar');
        bard.inject('$controller', '$log', '$rootScope');
    });

    beforeEach(function () {
        controller = $controller('CalendarController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Calendar controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Calendar', function() {
                expect(controller.title).to.equal('Calendar');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});
