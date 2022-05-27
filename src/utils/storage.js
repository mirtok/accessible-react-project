export const userKey = 'userInfo';

/**
 * set user information
 * @param {Object} userInfo
 * @returns
 */
export const setUserInfo = userInfo => {
	const user = sessionStorage.getItem(userKey);
	if (!user) {
		sessionStorage.setItem(userKey, JSON.stringify([userInfo]));
		return;
	}
	const parseUserInfo = JSON.parse(user);
	userInfo['id'] = Date.now();
	parseUserInfo.push(userInfo);
	sessionStorage.setItem(userKey, JSON.stringify(parseUserInfo));
};

/**
 * Obtaining User information
 */
export const getUserInfo = () => {
	const user = sessionStorage.getItem(userKey);
	if (!user) return [];
	return JSON.parse(user);
};
/**
 * Deleting User Information
 * @param {Number} index
 */
export const deleteUserInfo = index => {
	const user = sessionStorage.getItem(userKey);
	if (!user) return false;
	const parseUserInfo = JSON.parse(user);
	parseUserInfo.splice(index, 1);
	sessionStorage.setItem(userKey, JSON.stringify(parseUserInfo));
	return true;
};

/**
 * Updating User Information
 * @param {Number} index
 */
export const updateUserInfo = item => {
	const user = sessionStorage.getItem(userKey);
	if (!user) return false;
	const parseUserInfo = JSON.parse(user);
	const index = parseUserInfo.findIndex(cItem => cItem['id'] == item['id']);
	if (index !== -1) {
		parseUserInfo[index] = item;
	} else {
		item['id'] = Date.now();
		parseUserInfo.push(item);
	}
	sessionStorage.setItem(userKey, JSON.stringify(parseUserInfo));
	return true;
};
