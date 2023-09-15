import React from 'react';

interface ISectionHeaderProps {
    title: string;
}

const SectionHeader: React.FC<ISectionHeaderProps> = (props) => {
    const { title } = props;
    return (
        <h2 className="text-center font-bold text-4xl">
            {title}
            <hr className="w-16 h-1 mx-auto my-4 bg-pink-500 border-0 rounded"></hr>
        </h2>
    );
};

export default SectionHeader;
