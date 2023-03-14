export const createIntervalTimestamps = (interval:number = 15):Date[] => {
    const hours = [];
    const date = new Date();
    date.setHours(0, 0, 0);
    while(date.getDate() === new Date().getDate()){
        hours.push(new Date(date));
        date.setMinutes(date.getMinutes()+interval);
    }
    return hours;
}