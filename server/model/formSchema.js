import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
    
    email: {
        type: String,
        required: true,
        
    },
   
    phone: {
        type: Number,
        required:true,
       
       
    },
    company:{
        type: String,
        required: true,
       
    },
    message:{
        type: String,
        required:true,
        
    }

});

const Form = mongoose.model('Form', formSchema);

export default Form;




