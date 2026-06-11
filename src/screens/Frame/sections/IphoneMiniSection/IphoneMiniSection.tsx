import React from 'react';
import { Card, CardContent } from '../../../../components/ui/card';
import { cn } from '../../../../lib/utils';
import clsx from 'clsx';

const imageCards = [
    {
        id: 1,
        imageSrc: '/aerial-view-cargo-ship-with-cargo-container-sea-1-1.png',
        imageAlt: 'Aerial view cargo',
        overlayText: 'ஏற்றுமதி & இறக்குமதி பயிற்சி',
        secondaryImage: null,
    },
    {
        id: 2,
        imageAlt: 'Aerial view cargo',
        overlayText: 'உலக சந்தைகள்',
        imageSrc:
            '/technological-futuristic-holograms-logistics-means-transport-1.png',
    },
    {
        id: 3,
        imageSrc:
            '/freepik--the-style-is-candid-image-photography-with-natural--747-1.png',
        overlayText: 'மகளிர் மையம்',
        imageAlt: 'Aerial view cargo',
    },
];

const infoCards = [
    {
        id: 1,
        title: 'அனைத்து தொகுதிகளிலும்',
        description:
            'தமிழகத்தில் உள்ள அனைத்து தொகுதிகளிலும் உள்ள மகளிரை, ஏற்றுமதி-இறக்குமதி வணிக வாய்ப்புகளில் பயிற்சி அளிப்பதின் மூலம் தமிழ்நாடு அரசின் புரட்சிகர முன்முயற்சி.',
        imageSrc: '/group-1.png',
        hasNumberHighlight: true,
        number: '234',
    },
    {
        id: 2,
        title: 'மகளிர் மையம்',
        description:
            'ஏற்றுமதி-இறக்குமதி பயிற்சி மூலம் பெண்களை வலுப்படுத்துதல் பெண் தொழில்முனைவோர்களுக்காக சிறப்பாக வடிவமைக்கப்பட்டது. ',
        imageSrc: '/vector.svg',
    },
    {
        id: 3,
        title: 'நிபுணர் பயிற்சி',
        description:
            'தொழில் நிபுணர்கள் மற்றும் வல்லுனர்களிடமிருந்து கற்றுக்கொள்ளுங்கள். இந்த மறுமலர்ச்சி பயணத்தில் இலட்சக்கண்கான தொழில்முனைவோரை உருவாக்குவது.',
        imageSrc: '/group-2.png',
    },
];

const points = [
    'தன்னிறைவான தொழில்முனைவோராக உருவாகுங்கள் ஏற்றுமதிக்குத் தேவையான தொழில்நுட்ப அறிவு, சந்தை அணுகுமுறை மற்றும் வணிகத் திறன்களை கற்றுக்கொண்டு, தன்னம்பிக்கையுடன் உங்கள் சொந்த வணிகத்தைத் தொடங்க தயாராகுங்கள்.',
    'நிபுணர்களிடம் நேரடி மற்றும் நடைமுறை பயிற்சி ஏற்றுமதி துறையில் அனுபவமுள்ள நிபுணர்களிடம் இருந்து நேரடியாக கற்றுக்கொண்டு, சந்தை அணுகுமுறை, பணி நடைமுறைகள் மற்றும் தொழில்முறை செயல்பாடுகளில் நேரடி பயிற்சி பெறுங்கள்.',
    'உலகளாவிய நெட்வொர்க் கட்டமைப்புக்கான வாய்ப்பு மற்ற ஏற்றுமதி ஆர்வலர்கள், சிறு மற்றும் நடுத்தர வணிகங்கள், மற்றும் சந்தை நிபுணர்களுடன் இணைந்து, உங்கள் சர்வதேச தொடர்புகளை உருவாக்குங்கள்.',
    'ஒருநாள் பயிற்சி – 18 மாதங்கள் வரை தொடரும் வழிகாட்டல் இது ஒருநாள் பயிற்சியாக இருந்தாலும், உங்கள் ஏற்றுமதி பயணத்தில் நீங்கள் வெற்றி பெறும் வரை, அடுத்த 18 மாதங்கள் வரை தொடரும் ஆதரவு மற்றும் வழிகாட்டலுடன் உங்களைத் தொடர்ந்து நாங்கள் பயணிப்போம்.',
];

export const IphoneMiniSection = (): JSX.Element => {
    return (
        <div className='w-full'>
            <div className='flex flex-col w-full gap-3 sm:gap-3.5 mt-14 px-6'>
                <div className={cn('lg:grid-cols-3 lg:grid lg:gap-5 lg:px-24')}>
                    {imageCards.map((cardItem) => (
                        <div
                            key={cardItem.id}
                            className='flex justify-center mt-3 lg:mt-0'>
                            <div className='w-full h-full max-h-[100px] rounded-xl overflow-hidden lg:max-w-[551px] lg:max-h-[257px] relative'>
                                <img
                                    src={cardItem.imageSrc}
                                    alt={cardItem.imageAlt}
                                    className='w-full h-full object-cover'
                                />

                                <div className='absolute px-4 py-3 bottom-0 right-0 flex justify-center items-center rounded-tl-lg bg-[rgba(0,_0,_0,_0.05)] backdrop-filter backdrop-blur-[12.7px]'>
                                    <p className='text-white text-sm lg:text-base text-center font-bold leading-normal'>
                                        {cardItem.overlayText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-12 lg:flex flex-row-reverse justify-around items-center w-full gap-14'>
                    <div className='flex flex-col gap-4 flex-1 items-center'>
                        {infoCards.map((card) => (
                            <Card
                                key={card.id}
                                className='w-full bg-white rounded-xl overflow-hidden border border-solid border-[#da612b29] lg:max-w-[600px]'>
                                <CardContent className='p-0 relative'>
                                    {card.hasNumberHighlight ? (
                                        <div className='absolute top-0 bottom-0 right-0 w-[40%] h-full overflow-hidden flex items-center justify-center'>
                                            <img
                                                className='absolute top-0 bottom-0 right-0 w-full h-full object-contain'
                                                alt='Group'
                                                src={card.imageSrc}
                                            />
                                            <div className='relative font-bold text-[#da612b] text-2xl sm:text-[36px] lg:text-[43.2px] whitespace-nowrap font-inter z-10'>
                                                {card.number}
                                            </div>
                                        </div>
                                    ) : (
                                        <img
                                            className={clsx(
                                                'absolute right-2 bottom-1 w-12 h-12 sm:w-16 sm:h-16 object-contain'
                                            )}
                                            alt='Group'
                                            src={card.imageSrc}
                                        />
                                    )}

                                    <div className='flex flex-col max-w-[62%] sm:max-w-[70%] items-start gap-1 px-3 pt-3 pb-4 sm:px-3.5 sm:pt-3.5'>
                                        <div className='font-bold text-[#1a1a1a] text-base lg:text-lg leading-norma font-inter'>
                                            {card.title}
                                        </div>
                                        <div
                                            className={`font-medium text-[#1a1a1a] text-base lg:text-lg leading-norma font-inter break-words mt-2`}>
                                            {card.description}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        <Card className='bg-white rounded-xl border border-solid border-[#da612b29] w-full p-4 lg:max-w-[600px]'>
                            <div className='font-medium text-[#1a1a1a] text-base lg:text-lg font-inter break-words leading-normal'>
                                &#34;இந்த விரிவான ஏற்றுமதி-இறக்குமதி பயிற்சி
                                திட்டம் மூலம் தமிழ்நாடு முழுவதும்
                                தொழில்முனைவோர்களை உருவாக்கி, வலுப்படுத்த நாங்கள்
                                உறுதிபூண்டுள்ளோம்.&#34;
                            </div>
                            <div className="mt-2 font-bold text-[#1a1a1a] text-sm lg:text-lg leading-5 whitespace-normal [font-family:'Inter',Helvetica] tracking-[0] text-right">
                                - மாண்புமிகு தமிழ்நாடு முதலமைச்சர்
                            </div>
                        </Card>
                    </div>

                    <section className='rounded-xl p-6 md:p-10 max-w-2xl flex-1'>
                        <h2 className='text-3xl md:text-4xl font-extrabold text-[#232323] mb-8 leading-tight'>
                            ஏன் இந்த ஏற்றுமதி பயிற்சித் திட்டத்தில் இணைய
                            வேண்டும்?
                        </h2>
                        <ul className='list-disc pl-6 space-y-6 text-lg md:text-xl text-[#232323]'>
                            {points.map((point, idx) => (
                                <li key={idx} className='leading-relaxed'>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};
