import React from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import Container from './Container';
import Link from 'next/link';

const About: React.FC = () => {
    return (
        <Container id="about">
            <>
                <SectionHeader title="About me" />

                <div className="flex flex-col space-y-10 justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row">
                    <div className="md:w-1/2 space-y-8">
                        <p className="indent-4">
                            I&#39;m Eleni Kamvissis, a front-end developer based in the lovely city of Malmö, Sweden. My journey into the world of tech took a somewhat unconventional route.
                        </p>

                        <p className="indent-4">
                            In 2017, I proudly graduated from Lund University with a degree in Biomedical Engineering. However, my path to becoming an engineer was not a straightforward one. It
                            unfolded while I was working as a nurse, caring for patients in the intensive care unit. Working with critically ill patients was both challenging and rewarding, sparking
                            my deep interest in healthcare technology. However, amid my passion for healthcare tech, a persistent issue emerged – the clunky and inefficient user interfaces I
                            encountered. This highlighted the urgent need for improvement in this area.
                        </p>

                        <p className="indent-4">
                            Motivated by this realization, I decided to pivot my career toward addressing these user interface challenges. And here I am today, thriving as a front-end developer.
                        </p>

                        <p className="indent-4">
                            Want to know more about my working experince and education? Check out my profile on{' '}
                            <Link href="https://www.linkedin.com/in/elenikamvissis/" rel="noopener noreferrer" target="_blank" className="text-pink-600">
                                LinkedIn
                            </Link>
                            .
                        </p>
                    </div>
                    <div className="md:w-1/2 flex flex-row md:items-center justify-center">
                        <Image src="/robot.jpeg" alt="" width={325} height={325} />
                    </div>
                </div>
            </>
        </Container>
    );
};

export default About;
