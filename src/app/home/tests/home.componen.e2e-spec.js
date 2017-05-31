'use strict';

describe('Skeleton Test', function () {
    beforeEach(function (done) {
        setTimeout(function () {
            console.log('inside timeout');
            done();
        }, 500);
    });
    it('passes', function () {
        expect({}).toBeDefined();
    });
});