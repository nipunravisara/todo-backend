import verifyAccessToken from '../middleware/verifyAccessToken';
import auth from './auth';
import todo from './todo';

function routes(app) {
  app.use('/api/auth', auth);
  app.use('/api/todo', verifyAccessToken, todo);

  app.use(async (req, res) => {
    res.status(404);
    res.send({
      success: false,
      status: 404,
      message: 'Not found.',
    });
  });
}

export default routes;
