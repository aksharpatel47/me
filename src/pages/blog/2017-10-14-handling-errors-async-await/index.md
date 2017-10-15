---
title: "Correctly handle async function errors in Javascript"
date: "2017-10-15"
tags: ["Javascript","async-await"]
published: true
---

How we write asynchronous code in JavaScript has changed drastically in recent years. We went from callback to promises and now we're in the sweet async-await land. With tools such as Typescript allowing developers to use async functions to target even ```es3``` supported browsers, the adoption of async functions is only going to increase.

### Handling Errors using Try-Catch

Handling erros when using async functions is done using try catch. For example:

```javascript
async function getData() {
  try {
    const result = await fetch("http://localhost")
    handleResult(result)
  } catch (err) {
    handleError(err)
  }
}
```

Handling errors using try-catch looks very simple and makes the code look very clean in comparison to its Promise or callback counterpart code. However, think of the following hypothetical scenario:

```javascript
async function getData() {
  try {
    const result = await getUserData()
    const [userPosts,userStats] = await Promise.all([
      getUserPosts(result.id),
      getUserStats(result.id)
    ])
    const postsComments = await Promise.all(
      userPosts.map(p => getPostComments(p.id))
    )
    // and so on...
  } catch (err) {
    handleError(err)
  }
}
```

For all the promises that can be awaited, we have just one try catch block.

### The Problem - Who Threw The Error?

As you can guess from the above example, it would be tough for us, in case of an error, to find out from where that error originated. So naturally we would consider adding try catch to everything that can throw an error which would bring us to the following situation:

```javascript
async function getData() {
  try {
    const result = await getUserData()

    try {
      const [userPosts,userStats] = await Promise.all([
        getUserPosts(result.id),
        getUserStats(result.id)
      ])
    } catch (err) {
      // handle err
    }

    try {
      const postsComments = await Promise.all(
        userPosts.map(p => getPostComments(p.id))
      )
    } catch (err) {
      // handle error
    }

    // and so on...
  } catch (err) {
    // handle error
  }
}
```

The code becomes very ugly very fast. It becomes quite verbose as well. At this point, one starts to wish they were working with promises instead of async functions. At my work, we overdosed on async functions and had a tough time trying to figure out a feasible solution to handle their errors. Then I came across this tweet by Kent C. Dodds.

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">I basically never use try...catch with async/await. I think it&#39;s ugly. I do this instead:<br><br>await thing().catch(error =&gt; doSomething(error))</p>&mdash; Kent C. Dodds (@kentcdodds) <a href="https://twitter.com/kentcdodds/status/913082703355928576?ref_src=twsrc%5Etfw">September 27, 2017</a></blockquote>

### Solution

The solution is to catch the error at the promise level:

```javascript
async function getData() {
  const result = await getUserData().catch(err => {
    /* Handle Error Here */
  })

  if (result === undefined) return
  // Continue further operations
}
```

The above solution has worked well in a RESTful API project I'm currently working on which is written in Node.js with Typescript.

For example, writing an endpoint for creating a new user:

```typescript
@httpPost("/users", validateSchema(userSchema))
async function createUser(
  req: Request,
  res: Response,
  next: NextFunction) {
  const { user } = req.body

  // This returns the ID of the user if successfully created
  const result = await this.userRepo.add(user).catch((err) => {
    // Handle different kinds of errors here
    // Also send appropriate status
    res.status(400).json({ error: { message: "Error creating user." } })
  })

  if (result === undefined) return

  await this.firebaseAdmin.auth().updateUser(result.id, {
    /* User Details  */
  }).catch ((err) => {
    // Handle error here
  })

  res.sendStatus(201)
}
```

One thing to note here is that execution of the function continues since we've handled the error now. If the rest of your function depends on the result of the first Promise, you'll need to handle it appropriately, as shown above, to stop the function.

### Conclusion

While using try-catch might be perfectly acceptable in specific scenarios, using them solely to handle errors in Promise heavy code is a burden. Use ```catch``` to handle errors in the source Promise itself. This will help simplify error handling and will reduce the complexity of the code.