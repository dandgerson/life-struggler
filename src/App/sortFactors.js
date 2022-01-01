const sortFactors = factors => factors
  .slice()
  .sort((a, b) => b.weight - a.weight)

export default sortFactors
