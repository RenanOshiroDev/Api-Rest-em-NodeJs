import mongoose from 'mongoose';

async function connectDataBase(){
    mongoose.connect(
        'mongodb+srv://admin123:admin123@cluster0.njxcuak.mongodb.net/Livraria?retryWrites=true&w=majority');
    return mongoose.connection;
}

export default connectDataBase;


