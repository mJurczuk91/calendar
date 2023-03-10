import { screen } from '@testing-library/react';
import { renderDatepicker } from './datepicker-test-utils';
import { getMonthNameInPolish, getDaysInMonth } from '../utils/datepicker-utils';

describe("DATEPICKER_TESTS", () => {
    test('it renders current month name in polish', () => {
        renderDatepicker();
        const month = getMonthNameInPolish(new Date().getMonth());
        expect(screen.queryByText(month)).toBeInTheDocument();
    })
})