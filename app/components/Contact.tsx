'use client';
import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import Container from './Container';

import { RiCheckFill, RiErrorWarningLine } from 'react-icons/ri';

const Contact: React.FC<{}> = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<Array<string>>([]);
    const [success, setSucess] = useState<boolean>(false);

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        const res = await fetch('api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSucess(success);

        if (success) {
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <Container id="contact">
            <>
                <SectionHeader title="Contact me" />
                <div className="pb-28">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" required autoComplete="off" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" required autoComplete="off" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea rows={4} id="message" required value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <div>
                            <button type="submit" className="px-4 py-2 w-48 bg-zinc-600 text-white font-medium rounded-md">
                                Send message
                            </button>
                        </div>
                    </form>
                    {!!success === false && error.length > 0 && (
                        <div className="bg-slate-100 flex flex-col mt-4 p-4">
                            {error.map((err, index) => (
                                <div key={index} className="text-pink-600 flex flex-row items-center">
                                    <RiErrorWarningLine style={{ marginRight: '8px' }} /> {err}
                                </div>
                            ))}
                        </div>
                    )}
                    {!!success === true && (
                        <div className="bg-slate-100 flex flex-col mt-4 p-4">
                            {success && (
                                <div className="flex flex-row items-center text-emerald-600">
                                    <RiCheckFill style={{ marginRight: '8px' }} />
                                    Message sent!
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </>
        </Container>
    );
};

export default Contact;
