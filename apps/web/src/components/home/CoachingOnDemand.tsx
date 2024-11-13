import Image from 'next/image';
import React from 'react';

interface ImageData {
    src: string;
    alt: string;

}

const imageData: ImageData[] = [
    {
        src: "/customcards/9.svg",
        alt: "Gallery image 1"
    },
    {
        src: "/customcards/12.svg",
        alt: "Gallery image 2"
    },
    {
        src: "/customcards/11.svg",
        alt: "Gallery image 3"
    }
];

const CoachingOnDemand: React.FC = () => {
    return (
        <section className="mt-16 px-4 py-8 md:px-8 md:py-12 md:ml-20 md:mr-20">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-4 text-left md:text-4xl text-[#FAFAF9]"> Coaching on Demand </h1>

            {/* Subtitle */}
            <p className="font-normal mb-4 text-left text-[#D6D3D1] text-xl">
                Are you looking for someone to exchange ideas with on equal footing, or
                do you want to learn new skills? <br /> Do you need support in choosing the right tools or advice for your project? Our industry
                experts are ready to help you succeed. </p>
            {/* Image Gallery */}
            <section className="flex z-0 flex-nowrap gap-0 items-center max-md:max-w-full">
                {imageData.map((image, index) => (
                    <Image
                        height={500}
                        width={500}
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={`object-cover my-auto w-1/3 h-full`}
                    />
                ))}
            </section>
        </section>
    );
};

export default CoachingOnDemand;
