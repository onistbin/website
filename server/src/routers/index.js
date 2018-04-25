import Router from 'koa-router'
import api from './libs/api'
import error from './libs/error'

const router = new Router();

router.use('/api', api.routes(), api.allowedMethods());

export default router