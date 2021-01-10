// Base URL
const base_rul = 'https://api.rawg.io/api/';

// Getting the dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
// format the date to dd/mm/yyyy
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// last year date
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// next year date
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// Upcoming games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// New games
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_rul}${popular_games}`;
export const upcomingGamesURL = () => `${base_rul}${upcoming_games}`;
export const newGamesURL = () => `${base_rul}${new_games}`;

// Game Details
export const gameDetailsURL = (game_id) => `${base_rul}games/${game_id}`;
export const gameScreenshotURL = (game_id) =>
  `${base_rul}games/${game_id}/screenshots`;
