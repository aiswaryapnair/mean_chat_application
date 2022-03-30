const mongoose=require('mongoose');
const Schema=mongoose.Schema;
// MongoUrl='mongodb://localhost:27017/chatapp';
MongoUrl='mongodb+srv://userone:userone@ictkfiles.s2x9o.mongodb.net/chatapp?retryWrites=true&w=majority';

mongoose.connect(MongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("MongoDB Connected Successfully");})
.catch(err=>{console.log("Error from MongoDB: "+err);})   // Error Handling for MongoDB
const ContactSchema=new Schema({
    uid:String,
    to:String,
    isBlocked:Boolean,
    isMuted:Boolean

   // repsw:String
});
var contactdata=mongoose.model('contactdata',ContactSchema);
module.exports =contactdata; 
