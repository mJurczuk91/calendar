import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import datepickerSlice from '../../datepicker/store/datepicker.slice';
import Calendar from '..';

describe('CALENDAR TESTS', () => {
    test("it renders an 15min interval hour list", () => { 
        renderCalendar();
        expect(screen.getByText("00:00")).toBeInTheDocument();
        expect(screen.getByText("23:45")).toBeInTheDocument();
    });
});

const renderCalendar = () => {
    const store = configureStore({
        reducer: {
            datepickerSlice,
        }
    });
    
    render(<Provider store={store}>
        <Calendar />
    </Provider>);
}