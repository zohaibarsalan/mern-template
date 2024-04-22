export const errorHandler = (err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || 'Internal Server Error';

  // Log errors in development mode
  if (process.env.NODE_ENV === 'development') {
    console.error({
      success: false,
      status: errStatus,
      message: errMessage,
      stack: err.stack || {},
    });
  }

  // Send structured error response
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  });
};
