Demonstration of a change in behavior in the Sequelize findById()
method on a model after calling graphql-sequelize's resolver().  The
association `Basket.hasMany(Apple)` can no longer be retrieved using
`findById()`, though `findOne()` works fine. Use `npm test` to see the
test case fail after `resolver(Basket)` has been called.
