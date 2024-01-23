
# CRUD
I'm using Nodejs, Express and Mongodb to create server for a Blog




## Usage/Examples


npm install express

const express = require('express')

npm install mongoose

const mongoose = require('mongoose')

npm install postman

npm install gitbash

mpm install nodemon




## Tech Stack

**Client:** Insomnia

**Server:** Node, Express, MongoDB


## Support

For support, email olalereb688@gmail.com.

## API Reference

#### Create blogs

```http
  POST: http://localhost:3000/blogs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` title` | `string` | "blog title"|
| ` subTitle` | `string` |"blog subtitle" |
| ` description` | `string` |"blog content" |


#### Get blog

```http
  GET: http://localhost:3000/blogs
```

#### Get a blog

```http
GET: http://localhost:3000/blog/${id}
```


#### Update a product
```http
PATCH: http://localhost:3000/blogs/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` title` | `string` | "blog title"|
| ` subtitle` | `string` |  "blog subTile" |
| ` description` | `string` |"blog content" |


#### Delete a product
```http
 DELETE: http://localhost:3000/blogs/${id}
```



## Documentation

[Documentation](http://localhost:3000/blogs)

