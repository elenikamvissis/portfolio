import { NextResponse } from 'next/server';
import connectDb from '@/connect/connectDb';
import Contact from '@/models/contact';
import mongoose from 'mongoose';

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    try {
        await connectDb();
        await Contact.create({ name, email, message });

        return NextResponse.json({ msg: ['Message sent successfully'], success: true }, { status: 201 });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }

            return NextResponse.json({ msg: errorList });
        } else {
            return NextResponse.json({ msg: ['Unable to send message.'] }, { status: 500 });
        }
    }
}
