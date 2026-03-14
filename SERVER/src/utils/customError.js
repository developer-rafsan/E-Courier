const customError = (message = "Internal Server Error", statusCode = 500) => {

    const err = new Error(message);
    err.statusCode = statusCode;

    throw err;
};

export default customError;