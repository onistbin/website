import Koa from 'koa'
import path from 'path'
import bodyParser from 'koa-bodyparser'
import session from 'koa-session-minimal'
import jwt from 'koa-jwt'
import MysqlStore from 'koa-mysql-session'
import config from './conf/config'
import routers from './routers'

const app = new Koa();

const sessionConfig = {
    host     : config.database.HOST,
    user : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASES
};

app.use(jwt({
    secret: config.secret,
  }).unless({
    path: [/\/signin/, /\/signup/],
}));

app.use(session({
    key: 'USER_SIG',
    store: new MysqlStore(sessionConfig)
}));

app.use(bodyParser());

app.use(routers.routes())
    .use(routers.allowedMethods());

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
});