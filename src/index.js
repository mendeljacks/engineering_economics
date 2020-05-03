
/**
 * A function to give present value from arithmetic growth
 *
 * @param {number}  GrowthRate  the value by which the amount linearly increases.
 * @param {number}  i - interest rate.
 * @param {number}  n - number of payments.
 * @returns                        The present value
 * @customfunction
 */
global.pg = (G,i,n) => {
  const brackets = Math.pow(1 + i, n)
  const num = brackets - i*n - 1
  const den = i*i*brackets
  return G * (num/den)
};
