import mongoose from 'mongoose';

const { Schema } = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [2, 'Name must be at least 2 characters'],
        maxLength: [50, 'Name cannot be longer than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'E-mail is required'],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, 'Invalid e-mail address']
    },
    message: {
        type: String,
        required: [true, 'Message is required']
    },

    date: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
