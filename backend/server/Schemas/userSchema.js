const mongoose = require('mongoose')

//Scena for the user document
const userSchema = new mongoose.Schema({
    id:{type : Number,unique:true},
    first_name:{type :String,required :true},
    last_name:{type :String,required :true},
    email:{type :String,required :true},
    gender:{type :String,required :true},
    age:{type :Number,required :true},
})

//For inserting the id of new documents
userSchema.pre('save', async function(next) {
    const doc = this;
    try {
        if (!doc.id) {
            const highestIdUser = await mongoose.model('users').findOne().sort('-id').exec();
            doc.id = highestIdUser ? highestIdUser.id + 1 : 1; 
        }
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model('users', userSchema);

module.exports = User;