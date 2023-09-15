import React from 'react';

interface IContainerProps {
    id: string;
    children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = (props) => {
    const { id, children } = props;
    return (
        <section id={id}>
            <div className="my-12 pb-12 md:pt-24 md:pb-48">{children}</div>
        </section>
    );
};

export default Container;
