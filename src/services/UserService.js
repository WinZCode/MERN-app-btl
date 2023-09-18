const createUser = () => {
    return new Promise((resovle, reject) => {
        try {
            resovle();
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createUser,
};
