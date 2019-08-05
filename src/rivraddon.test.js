const analytics = require('./rivraddon');


describe('trackPbjsEvent', () => {
    it('should return xhr obj', () => {
        expect(analytics.trackPbjsEvent('test')).toBeTruthy();
    });
});

describe('enableAnalytics', () => {
    global.console = {
        log: jest.fn(),
        info: jest.fn(),
        error: jest.fn()
    };

    it('should return a message', () => {
        expect(analytics.enableAnalytics()).toBe('SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics');
    });


    it('should console a message', () => {
        expect(global.console.log).toHaveBeenCalledWith(
            'SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics'
        )
    });
});
