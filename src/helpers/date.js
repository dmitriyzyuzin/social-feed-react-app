/* default format for posts is DD/MM/YYYY HH:MM */
function formatDateForPosts (dateObj) {
  return dateObj.getDate() + '/' + (dateObj.getMonth() + 1) + '/' + dateObj.getFullYear() + ' ' + dateObj.toLocaleTimeString().slice(0, 5)
}

function isDateValid (date) {
  return date instanceof Date && !isNaN(date)
}

function formatDateToSpecificFormat (dateStr, format = 'DD/MM/YYYY HH:MM') {
  const dateObj = new Date(dateStr)
  if (!isDateValid(dateObj)) {
    return 'Invalid date'
  }

  switch (format) {
    case 'DD/MM/YYYY HH:MM':
      return formatDateForPosts(dateObj)
    default:
      return dateObj
  }
}

export {
  formatDateToSpecificFormat
}
