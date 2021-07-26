/**
 * @function
 * formats a number into a `price`
 *
 * @params {string} locale - the output `Language`. eg 'en-NG'.
 * @param {number|string} number - the `value` to be formatted. eg '20.3'.
 * @param {string} currencyCode - the `currency` code. eg 'NGN'.
 * @returns a `string`: the formatted `price`
 *
 * @example
 * const price = formatPrice('en-NG', 20.3, 'NGN');
 * const price = formatPrice('pt-BR', '20000', 'USD');
 */
const formatPrice = (locale, number, currency) => {
	const price = number.toLocaleString(locale, {
		style: "currency",
		currency,
	});
	return price;
};

export default formatPrice;

