import { IphoneMiniSection } from './sections/IphoneMiniSection';
import { IphoneMiniWrapperSection } from './sections/IphoneMiniWrapperSection';
import { VideoSection } from './sections/VideoSection';

export const Frame = (): JSX.Element => {
    return (
        <div className='bg-transparent flex flex-col items-center w-full min-h-screen'>
            <div className='w-full bg-[#FEF7EF]'>
                <VideoSection />
                <IphoneMiniSection />
                <IphoneMiniWrapperSection />
            </div>
        </div>
    );
};
