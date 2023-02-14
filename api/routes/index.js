/**
 * Layer : Routes
 * File : Index.js
 * Description : Index file for Route Layer.
 * @author : Romil Tiwari
 */

import todoRouter from './todo-routes.js';

/* Todo routes  */
export default (app) => {
    app.use('/', todoRouter);
}
