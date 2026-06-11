import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';
import { Input } from '../../../../components/ui/input';
import { Separator } from '../../../../components/ui/separator';

export const IphoneMiniWrapperSection = (): JSX.Element => {
    const navigate = useNavigate();
    // Form field data
    const formFields = [
        { label: 'முழு பெயர்', id: 'fullName' },
        { label: 'தொலைபேசி எண் (whatsapp)', id: 'phone' },
        { label: 'தொகுதி', id: 'ward' },
        { label: 'முகவரி', id: 'address' },
        { label: 'மாவட்டம்', id: 'district' },
        { label: 'ஆதார் எண்', id: 'aadharNumber' },
        { label: 'ஆதார் புகைப்படம்', id: 'aadharImage' },
        { label: 'தொழில்', id: 'employee' },
        { label: 'பயிற்சி தேதி', id: 'trainingDate', isDate: true },
    ];

    // Form states
    const [formData, setFormData] = React.useState({
        fullName: '',
        phone: '',
        ward: '',
        address: '',
        district: '',
        aadharNumber: '',
        aadharImage: '',
        employee: '',
        exportExperience: 'yes',
        trainingDate: '',
    });
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Schedule timeline data
    const scheduleItems = [
        {
            time: 'காலை 9:00 - 10:00',
            description: 'பதிவு மற்றும் வரவேற்பு',
        },
        {
            time: 'காலை 10:00 - 11:30',
            description: 'ஏற்றுமதி-இறக்குமதி வணிகத்தின் அறிமுகம்',
        },
        {
            time: 'காலை 11:30 - 11:45',
            description: 'தேநீர் இடைவேளை',
        },
        {
            time: 'காலை 11:45 - மதயம 1:00',
            description: 'ஆவணங்கள் மற்றும் சட்ட தேவைகள்',
        },
        {
            time: 'மதியம் 1:00 - 2:00',
            description: 'மதிய உணவு இடைவேளை',
        },
        {
            time: 'மதியம் 2:00 - 3:30',
            description: 'தொழில் நிபுணர்கள் அமர்வு',
        },
        {
            time: 'மதியம் 3:30 - 4:30',
            description: 'சந்தை வாய்ப்புகள் மற்றும் வெற்றிக் கதைகள்',
        },
        {
            time: 'மதியம் 4:30 - 5:00',
            description: 'கேள்வி பதில் அமர்வு மற்றும் நிறைவு',
        },
    ];

    const handleSubmit = () => {
        const exportExperienceText = formData.exportExperience === 'yes' ? 'ஆம்' : 'இல்லை';

        localStorage.setItem('reg_fullName', formData.fullName);
        localStorage.setItem('reg_phone', formData.phone);
        localStorage.setItem('reg_ward', formData.ward);
        localStorage.setItem('reg_address', formData.address);
        localStorage.setItem('reg_district', formData.district);
        localStorage.setItem('reg_aadhar', formData.aadharNumber);
        localStorage.setItem('reg_employee', formData.employee);
        localStorage.setItem('reg_experience', exportExperienceText);
        localStorage.setItem('reg_trainingDate', formData.trainingDate);

        navigate('/payment');
    };

    return (
        <div className='px-6 flex flex-col lg:flex-row gap-14 my-10 p-6 md:p-10'>
            <div className='w-full flex flex-col gap-2 mt-4 flex-1 max-w-2xl p-6 md:p-10 bg-white border border-solid border-black/10 rounded-2xl'>
                <h2 className="font-extrabold text-xl sm:text-2xl leading-[30px] sm:leading-[35px] text-[#1a1a1a] [font-family:'Inter',Helvetica] tracking-[0]">
                    நிகழ்ச்சி நிரல்
                </h2>

                <div className='relative flex flex-col gap-[25px] sm:gap-[30px]'>
                    <div className='absolute left-1 border-l border-solid border-black/20 top-2 bottom-0' />
                    {scheduleItems.map((item, index) => (
                        <div
                            key={index}
                            className='flex items-start relative z-10'>
                            {/* Dot */}
                            <div className='w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#da612b] rounded-full mr-4 mt-1' />
                            {/* Content */}
                            <div>
                                <p className="font-normal text-base lg:text-lg leading-5 [font-family:'Inter',Helvetica] tracking-[0]">
                                    <span className='font-bold text-[#da612b]'>
                                        {item.time}
                                    </span>
                                    <br />
                                    <span className='font-medium text-black'>
                                        {item.description}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div id='zoho-form-section' className='overflow-hidden flex-1 flex justify-center w-full'>
                <CardContent className='p-3 sm:p-3.5 lg:max-w-[600px] bg-[#fcebd8]  border border-solid border-[#0000001f] rounded-xl w-full'>
                    <h3 className="font-extrabold text-base lg:text-lg text-[#1a1a1a] [font-family:'Inter',Helvetica] tracking-[0] mb-3">
                        நிகழ்விற்கு பதிவு செய்ய விவரங்களை இங்கே நிரப்பவும்.
                    </h3>

                    <Separator className='mb-4 bg-black/10' />

                    <div className='flex flex-col gap-3 sm:gap-3.5'>
                        {formFields.map((field) => (
                            <div
                                key={field.id}
                                className='flex flex-col gap-1.5 sm:gap-2'>
                                <label
                                    htmlFor={field.id}
                                    className="font-medium text-base lg:text-lg leading-[35px] text-[#1a1a1a] [font-family:'Inter',Helvetica] tracking-[0]">
                                    {field.label}
                                </label>
                                {field.isDate ? (
                                    <Input
                                        id={field.id}
                                        type="date"
                                        className='h-8 sm:h-9 bg-[#fad3a7] rounded-[7px] border-none text-black font-medium text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#da612b] px-2'
                                        value={formData[field.id as keyof typeof formData] || ''}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <Input
                                        id={field.id}
                                        className='h-8 sm:h-9 bg-[#fad3a7] rounded-[7px] border-none'
                                        value={formData[field.id as keyof typeof formData] || ''}
                                        onChange={handleChange}
                                    />
                                )}
                                {errors[field.id] && (
                                    <span className="text-red-600 text-xs sm:text-sm font-semibold mt-0.5">
                                        {errors[field.id]}
                                    </span>
                                )}
                            </div>
                        ))}
                        <div className="font-medium text-base lg:text-lg leading-[35px] text-[#1a1a1a] [font-family:'Inter',Helvetica] tracking-[0]">
                            ஏற்றுமதியில் அனுபவம் உள்ளதா?
                        </div>
                        <div className='flex items-center gap-6 mt-2'>
                            <label className='flex items-center gap-2 text-base lg:text-lg text-[#1a1a1a] font-medium'>
                                <input
                                    type='radio'
                                    name='exportExperience'
                                    value='yes'
                                    checked={formData.exportExperience === 'yes'}
                                    onChange={handleRadioChange}
                                    className='accent-[#000000] w-4 h-4'
                                />
                                ஆம்
                            </label>

                            <label className='flex items-center gap-2 text-base lg:text-lg text-[#1a1a1a] font-medium'>
                                <input
                                    type='radio'
                                    name='exportExperience'
                                    value='no'
                                    checked={formData.exportExperience === 'no'}
                                    onChange={handleRadioChange}
                                    className='accent-[#000000] w-4 h-4'
                                />
                                இல்லை
                            </label>
                        </div>
                        {errors.exportExperience && (
                            <span className="text-red-600 text-xs sm:text-sm font-semibold mt-1">
                                {errors.exportExperience}
                            </span>
                        )}
                        <Button 
                            onClick={handleSubmit}
                            className="w-full h-10 sm:h-12 mt-3 sm:mt-4 bg-[#da612b] hover:bg-[#c55525] rounded-[10px] font-extrabold text-xs text-white [font-family:'Inter',Helvetica]"
                        >
                            Submit
                        </Button>
                    </div>
                </CardContent>
            </div>
        </div>
    );
};
