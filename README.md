# Example EOS wallet app

An example app for the EOS platform.

![](http://imgur.com/a/s0uNH)

## Get started

* Install all dependencies via `yarn` (preferably) or `npm i`
* Start project via `npm start`

## View the project

To view the project, these are the routes below. Note that you do not need to be logged in to view the authenticated routes at this time, we are still working on integrating the API and hashing out functionality.

### Unauthenticated routes

* [`/login`](http://localhost:3000/login)
* [`/create-account`](http://localhost:3000/create-account)
* [`/create-account/email`](http://localhost:3000/create-account/email)
* [`/create-account/phone`](http://localhost:3000/create-account/phone)
* [`/create-account/password`](http://localhost:3000/create-account/password)
* [`/about`](http://localhost:3000/about)
* [`/faq`](http://localhost:3000/faq)

### Authenticated routes

* [`/`](http://localhost:3000/) - Make transfers to other users
* [`/transactions`](http://localhost:3000/transactions) - View list of past transactions
* [`/permissions`](http://localhost:3000/permissions) - View and change account permissions
* [`/users`](http://localhost:3000/users) - View a list of users
* [`/user/:id`](http://localhost:3000/user/xyz) - View a specific user
* [`/preferences`](http://localhost:3000/preferences)

## Make a contribution

Please check out our [contributing guidelines](./CONTRIBUTING.md).
