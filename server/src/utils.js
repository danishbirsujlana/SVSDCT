const checkToken = (par) => {
    let token = '';
    if (par && par.startsWith('Bearer')) {
        token = par.split(' ')[1];
    }
    if (!token) {
        return "";
    }
    return token;
};

module.exports = { checkToken }