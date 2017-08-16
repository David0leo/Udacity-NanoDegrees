export const postUnixTimeToSimplifiedTimeElapsedString = (currentTime, postTime) => {
  const sIfQuantityMoreThanOne = (someQuantity) => {
    if (someQuantity > 1 && someQuantity < 2) {
      return ''
    } else {
      return 's'
    }
  }

  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24
  const years = days * 365

  const millisecondsElapsed = currentTime - postTime
  console.log(millisecondsElapsed)

  const secondsElapsed = millisecondsElapsed / seconds

  // I'm including .0 to clarify that these variables are floats.
  if (secondsElapsed < 0.0) {
    return "some time in the future you time traveller you"
  }

  if (secondsElapsed < 1.0) {
    return 'a moment ago'
  } else if (secondsElapsed < 30.0) {
    return 'seconds ago'
  }

  const minutesElapsed = millisecondsElapsed / minutes
  if (minutesElapsed < 1.0) {
    return `${Math.round(secondsElapsed)} second${sIfQuantityMoreThanOne(secondsElapsed)} ago`
  } else if (minutesElapsed < 60.0) {
    return `${Math.round(minutesElapsed)} minute${sIfQuantityMoreThanOne(minutesElapsed)} ago`
  }
  
  const hoursElapsed = millisecondsElapsed / hours
  if (hoursElapsed < 24.0) {
    return `${Math.round(hoursElapsed)} hour${sIfQuantityMoreThanOne(hoursElapsed)} ago`
  }

  const daysElapsed = millisecondsElapsed / days
  if (daysElapsed < 365.0) {
    return `${Math.round(daysElapsed)} day${sIfQuantityMoreThanOne(daysElapsed)} ago`
  }

  const yearsElapsed = millisecondsElapsed / years
  if (yearsElapsed < 40.0) {
    return `${Math.round(yearsElapsed)} year${sIfQuantityMoreThanOne(yearsElapsed)} ${Math.round(daysElapsed % 365)} day${sIfQuantityMoreThanOne(daysElapsed % 365)} ago`
  }

  return `Ok somehow you posted more than 40 years ago. wtf.`
  
}

export default postUnixTimeToSimplifiedTimeElapsedString;