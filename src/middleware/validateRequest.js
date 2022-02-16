function validateRequest({ type, schema }) {
  return async (req, res, next) => {
    try {
      let validatedReqBody;

      switch (type) {
        case 'cookies':
          validatedReqBody = await schema.validate(req.cookies);
          break;
        default:
          validatedReqBody = await schema.validate(req.body);
          break;
      }

      req.body = validatedReqBody;
      next();
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
}

export default validateRequest;
