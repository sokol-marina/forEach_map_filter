const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

const findMin = (...args) => Math.min(...args)

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]