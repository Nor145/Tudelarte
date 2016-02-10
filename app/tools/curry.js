
export default (func, ...first) => (...second) => func(...first, ...second)
