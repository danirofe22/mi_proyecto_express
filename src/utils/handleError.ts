export const getErrorData = (error: any): any => {
    return {
        message: error.message,
        code: error.code,
        stackTrace: error.stack,
        error: error,
    };
}
