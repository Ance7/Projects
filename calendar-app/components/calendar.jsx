export const Calendar = (month, year) => {
  let days

  if (month === 'january') {
    let days = 31
  } else if (month === 'february' && year % 4 === 0) {
    let days = 29
  } else if (month === 'february' && year % 4 !== 0) {
    let days = 28
  } else if (month === 'march') {
    let days = 31
  } else if (month === 'april') {
    let days = 30
  } else if (month === 'may') {
    let days = 31
  } else if (month === 'june') {
    let days = 30
  } else if (month === 'july') {
    let days = 31
  } else if (month === 'august') {
    let days = 31
  } else if (month === 'september') {
    let days = 30
  } else if (month === 'october') {
    let days = 31
  } else if (month === 'november') {
    let days = 30
  } else if (month === 'december') {
    let days = 31
  }

  
}
