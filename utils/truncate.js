/**
 * @function
 * truncates a string: helps shorten long strings.
 *
 * @param {string} str - the string.
 * @param {number} maxLength - the length to truncate from
 * @returns a `string`: the `truncated` string.
 *
 * @example
 * const description = truncate(data.desc, 30);
 */
const truncate = (str, maxLength) => {
	if (!maxLength || str.length <= maxLength) {
		return str;
	}

	const truncate = `${str.slice(0, maxLength - 3)}...`;

	return truncate;
};

export default truncate;

