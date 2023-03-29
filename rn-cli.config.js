module.exports = {
  server: {
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        // Set the default port for React DevTools
        process.env.REACT_DEVTOOLS_PORT = 19000;
        middleware(req, res, next);
      };
    },
  },
};
