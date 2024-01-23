const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Blog:paOlo104@cluster0.remm9dj.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection successful');
}).catch((error) => {
    console.log('Something went wrong', error);
});
