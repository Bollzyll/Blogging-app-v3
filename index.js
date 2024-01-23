// console.log('application is running');

// console.log('Node application is running');

// console.log('application is ended');    
 require('./src/db/mongoose');
const Blog = require('./src/db/models/blog');

const express = require('express');
const app = express();

app.use(express.json());


// To Create
app.post('/blogs', async (req, res) => {
    const blog = new Blog(req.body);
    try {
        await blog.save();
    res.status(201).send(blog);
    } catch (error) {
        res.status(500).send(error);
    }
})
    // Blog.create(req.body).then((blog) => {
    //     res.status(201).send(blog);
    // }).catch((error) => {
    //     res.status(400).send(error);
    // })
    // Blog.insertMany(req.body).then((blogs) => {
    //     res.status(201).send(blogs)
    // }).catch((error) => {
    //     res.status(400).send(error);
    // })


// To get all blogs

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.status(200).send(blogs);
    } catch (error) {
        res.status(500).send(error);
    }
})

// To fetch a blog

app.get('/blogs/:id',async (req, res) => {
    try{
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404);
        }
        res.status(200).send(blog);
    } catch (error) {
        res.status(500).send(error);
    }
   
})
    // Blog.findOne({_id:req.params.id}).then((blog) => {
    //     if (!blog) {
    //         return res.status(404).send();
    //     }
    //     res.send(blog);
    // }).catch((error) => {
    //     res.status(500).send(error);
    // })   


// To update blog

app.patch('/blogs/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body,{new: true});
        if (!blog) {
            return res.status(404).send();
        }
        res.status(200).send(blog);
    } catch (error) {
        res.status(500).send(error);
    }
   

    // Blog.updateOne({_id: req.params.id}, req.body).then(response => {
    //     res.status(200).send(response);
    // }).catch(error => {
    //     res.status(500).send(error);
    // })
})


// To delete blog

app.delete('/blogs/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if(!blog) {
            return res.status(404).send();
        } 
        res.send(blog);
    } catch (error) {
        res.status(500).send(error);
    }    
})   
  




app.listen(3000, (req, res) =>{
    console.log('app is running in port 3000!');
})

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

// app.get('/about', (req, res) => {
//     res.send('</hi>This is about the page!</hi>');
// })

// app.get('/services', (req, res) => {
//     res.send({"name": "Bolu", "designation": "software engineer", "country": "Nigeria"});
// })

// app.get('/contact/:id', (req, res) => {
//     res.send("I am reading the parameter "+req.params.id);
// })