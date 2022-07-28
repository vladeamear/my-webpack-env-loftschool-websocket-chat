export function createNewElement(tag, options = {}) {
  const element = document.createElement(tag)
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      Array.isArray(value)
        ? value.forEach(item => element.classList.add(item))
        : element.classList.add(value)
      return
    }
    
    if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue
      })
      return
    }
    
    if (key === 'innerText') {
      element.innerText = value
      return
    }
    
    element.setAttribute(key, value)
  })
  return element
}

export function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}
