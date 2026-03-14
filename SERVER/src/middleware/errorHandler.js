const errorHandler = (err, req, res, next) => {

    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    if (process.env.NODE_ENV === "development") {

        return res.status(statusCode).json({
            success: false,
            statusCode,
            message,
            stack: err.stack
        });

    }

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });

};

export default errorHandler;