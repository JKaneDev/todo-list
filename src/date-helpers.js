export const getCurrentDate = () => {
	const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;

	return currentDate;
}

export const getTomorrowsDate = () => {
    const date = new Date();
    let day = date.getDate() + 1;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let tomorrowsDate = `${year}-${month}-${day}`;

	return tomorrowsDate;
}