
// return random number between min and max
const getRandomNum = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export { getRandomNum }