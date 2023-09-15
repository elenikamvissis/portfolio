import React from 'react';
import SectionHeader from './SectionHeader';
import Container from './Container';

interface SkillItem {
    skill: string;
}

const SKILL_ITEMS: Array<SkillItem> = [
    { skill: 'HTML' },
    { skill: 'CSS' },
    { skill: 'JavaScript' },
    { skill: 'TypeScript' },
    { skill: 'React' },
    { skill: 'React Native' },
    { skill: 'Redux' },
    { skill: 'Next.js' },
    { skill: 'Node.js' },
    { skill: 'MongoDB' },
    { skill: 'Express.js' },
    { skill: 'Material UI' },
    { skill: 'Tailwind CSS' },
    { skill: 'Git' },
    { skill: 'GitHub' }
];

const Skills: React.FC<{}> = () => {
    return (
        <Container id="skills">
            <>
                <SectionHeader title="My skills" />

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="text-center md:w-1/2 md:text-left">
                        <div className="flex flex-wrap flex-row justify-center">
                            {SKILL_ITEMS.map((item, index) => {
                                return (
                                    <p key={index} className="bg-pink-50 px-4 py-2 mr-2 mt-2 text-pink-900 rounded font-semibold">
                                        {item.skill}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </>
        </Container>
    );
};

export default Skills;
