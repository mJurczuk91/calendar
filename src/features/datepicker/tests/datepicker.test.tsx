import { screen } from '@testing-library/react';
import { renderDatepicker } from './datepicker-test-utils';
import { getMonthNameInPolish, getLastDayOfMonth } from '../utils/datepicker-utils';

describe("DATEPICKER_TESTS", () => {
    ////
    test('it renders current month name in polish', () => {
        renderDatepicker();
        const month = getMonthNameInPolish(new Date().getMonth());
        expect(screen.queryByText(month)).toBeInTheDocument();
    });

    ////
    test('it renders all the days of the month', () => {
        renderDatepicker();
        const day = getLastDayOfMonth(new Date().getMonth(), new Date().getFullYear());
        for(let i = 1; i <= day; i++){
            let elements = screen.getAllByText(i.toString());
            expect(elements.length).toBeGreaterThan(0);
        };
    });
})