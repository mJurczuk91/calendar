export const getDaysInMonth = (m: number, y: number):number => {
    return m===2 ? y & 3 || !(y%25) && y & 15 ? 28 : 29 : 30 + (m+(m>>3)&1);
    // https://stackoverflow.com/questions/222309/calculate-last-day-of-month
}

export const getMonthNameInPolish = (month:number):string => {
    switch (month){
        case 0:{
            return 'Styczeń';
        }
        case 1:{
            return 'Luty';
        }
        case 2:{
            return 'Marzec';
        }
        case 3:{
            return 'Kwiecień';
        }
        case 4:{
            return 'Maj';
        }
        case 5:{
            return 'Czerwiec';
        }
        case 6:{
            return 'Lipiec';
        }
        case 7:{
            return 'Sierpień';
        }
        case 8:{
            return 'Wrzesień';
        }
        case 9:{
            return 'Październik';
        }
        case 10:{
            return 'Listopad';
        }
        case 11:{
            return 'Grudzień';
        }
        default: {
            return 'INCORRECT_MONTH_NUMBER';
        }
    }
}
