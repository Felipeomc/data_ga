require('dotenv').config()
const mongoose = require('mongoose');
const  DB_USER =  process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect('mongodb+srv://'+DB_USER+':'+DB_PASSWORD+'@softskills.q1v44.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');




const userTurmalinaSchema = new mongoose.Schema({
    id: {type:Number}, 
    name: {type:String}, 
    username: {type:String},
    email: {type:String},
    picture: [String],
    phone: {type:String},
    bio:{type:String},
    systemRole: {type:String},
    projectRoleId: {type:Number},
    permissions: {type:String},
    daysOffInYear: {type:Number},
    daysOff: {type:Number},
}, 
)

const constractRoleSchema = new mongoose.Schema({
    id: {type:Number}, name: {type:String}, permissions: []
}, 
)

const userSchema = new mongoose.Schema({
    user_id:{type:Number},
    username:{type:String},
    bio:{type:String},
    systemRole:{type:String},
    contractId:{type:Number},
    contractRoleID:{type:Number},
    contractRoleName:{type:String},
    projects_id:{ type: Array, of: Number},
    softskills:{ type: Array, of: String },
    hardskill:{ type: Array, of: String },
    nomeCompleto:{type:String},
    methodology:{ type: Array, of: String },
},  { collection: 'users2' }
)

const projetoSchema = new mongoose.Schema({
   
    name: {type:String},
    nature: {type:String},
    begin: {type:String},
    end: {type:String},
    team : {type:String},
    percentual:  {type:String},
    technologies: {type:String},
    softskills: {type:String},
    method_proj: {type:String}, //adicionei em 10/04/23
    data_proj: {type:String},
    
    projectId: {type:Number},
    
},  { collection: 'projetos' }
)

const counter2Schema = new mongoose.Schema({
   
    seq_value: {type:Number},

},  { collection: 'counters2' }
)

const arquivosSchema = new mongoose.Schema({
   
    name: {type:String},
    nature: {type:String},
    begin: {type:String},
    end: {type:String},
    team : {type:String},
    percentual:  {type:String},
    technologies: {type:String},
    softskills: {type:String},
    method_proj: {type:String},//adicionei em 10/04/23
    data_proj: {type:String},
    
    projectId: {type:String},
    
},  { collection: 'arquivos' }
)

mongoose.model('projetos', projetoSchema);

mongoose.model('arquivos', arquivosSchema);

mongoose.model('counters2', counter2Schema);

mongoose.model('users2', userSchema);


module.exports = {
    Mongoose: mongoose,
    ProjetoSchema: projetoSchema,
    ArquivosSchema: arquivosSchema,
    Counter2Schema: counter2Schema,
    UserSchema: userSchema
};


//module.exports = { Mongoose: mongoose, PlaceSchema : projetoSchema, PlaceSchema: arquivosSchema, PlaceSchema: counter2Schema, PlaceSchema: userSchema}
//module.exports = { Mongoose: mongoose, ConstractRoleSchema: constractRoleSchema }
//module.exports = { Mongoose: mongoose, UserTurmalinaSchema: userTurmalinaSchema }

//module.exports = { Mongoose: mongoose, PlaceSchema: placeSchema }


