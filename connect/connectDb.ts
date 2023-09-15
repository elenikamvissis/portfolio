import mongoose from 'mongoose';

const uri: string = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.twroyhh.mongodb.net/contact_db`;

const connectDb = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to the databse');
    } catch (error) {
        console.log('There was an error connecting to the database', error);
    }
};

export default connectDb;
