services are the glue between frontendand backend.
There are 3 type of Angular services: services (simplest), factory (popular) and provider
Use Factory to return a promises object.
============================================================================
Match up the frontend with the backend API
Task                Node API                        Angular Service Function
---------------------------------------------------------
single user         GET     /api/users/:user_id     get(id)
list users          GET     /api/users              all()
create user         POST    /api/users              create(userData)
update a user       PUT     /api/users/:user_id     update(id, userData)
delete user         DELETE  /api/users/:user_id     delete(id)
============================================================================
authService will have 3 main functions:
1. main auth functions (login, logout, get current user, check if logged in)
2. token auth functions (get the token, save the token)
3. auth interceptor (attach the token to HTTP requests, redirect if not logged in)
============================================================================
when creating an interceptor, we have a few options available to us:
1. request      : let us intercept request before they are sent
2. response     : let us change the response that we get back from a request
3. requestError : captures requests that have been cancelled
4. responseError: catches backed calls that fail. In this case, we will use it to catch 403 Forbidden errors if the token does not validate or does not exist.
============================================================================
The foundation of our Angular application will require 5 files:
public/app/controllers/mainCtrl.js
public/app/app.js
public/app/app.routes.js
public/app/views/index.html
public/app/views/pages/home.html