import React , {useState}from 'react';
import { useParams } from 'react-router-dom';
import RazorpayModal from '../components/razorpay_modal'
import { ArrowLeft, X, MoreHorizontal, Clock, CreditCard, Smartphone, Globe, Wallet, Calendar } from 'lucide-react';


function PaymentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedMethod, setSelectedMethod] = useState('UPI');

  const paymentMethods = [
    { id: 'UPI', name: 'UPI', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'Cards', name: 'Cards', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'Netbanking', name: 'Netbanking', icon: <Globe className="w-5 h-5" /> },
    { id: 'Wallet', name: 'Wallet', icon: <Wallet className="w-5 h-5" /> },
    { id: 'Pay Later', name: 'Pay Later', icon: <Calendar className="w-5 h-5" /> }
  ];

  const upiApps = [
    { name: 'PhonePe', color: 'bg-purple-600' },
    { name: 'GPay', color: 'bg-blue-500' },
    { name: 'Paytm', color: 'bg-blue-700' },
    { name: 'Samsung Pay', color: 'bg-gray-800' },
    { name: 'Amazon Pay', color: 'bg-orange-500' }
  ];

  const recommendedBanks = [
    { name: 'Yes Bank Netbanking', logo: '🏦', color: 'bg-blue-600' },
    { name: 'ICICI Bank Netbanking', logo: '🏦', color: 'bg-orange-600' },
    { name: 'Bank of India Netbanking', logo: '⭐', color: 'bg-orange-500' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full h-full sm:h-auto sm:max-w-6xl sm:max-h-[90vh] sm:mx-4 bg-white sm:rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors touch-manipulation"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Payment Options</h1>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors touch-manipulation sm:block hidden">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors touch-manipulation"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-full sm:max-h-[calc(90vh-140px)] overflow-hidden">
          {/* Sidebar - Mobile: Horizontal scroll, Desktop: Vertical */}
          <div className="w-full lg:w-80 bg-[#FDECD9] overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto">
            <div className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-2 p-4 lg:p-6 min-w-max lg:min-w-0">
              <h2 className="hidden lg:block text-sm font-medium text-gray-700 mb-4">Recommended</h2>
              
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`flex-shrink-0 lg:w-full flex flex-col lg:flex-row items-center lg:justify-between p-3 lg:p-4 rounded-xl transition-all duration-200 touch-manipulation ${
                    selectedMethod === method.id
                      ? 'bg-white shadow-md border-2 border-orange-200'
                      : 'bg-white/50 hover:bg-white/70 border-2 border-transparent'
                  } min-w-[80px] lg:min-w-0`}
                >
                  <div className="flex flex-col lg:flex-row items-center space-y-1 lg:space-y-0 lg:space-x-3">
                    <div className="text-gray-600">
                      {method.icon}
                    </div>
                    <span className="font-medium text-gray-800 text-xs lg:text-sm text-center lg:text-left">{method.name}</span>
                  </div>
                  <div className="flex space-x-1 mt-2 lg:mt-0">
                    {method.id === 'UPI' && (
                      <>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-purple-600 rounded-sm flex items-center justify-center text-xs text-white font-bold">P</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-blue-500 rounded-sm flex items-center justify-center text-xs text-white font-bold">G</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-blue-700 rounded-sm flex items-center justify-center text-xs text-white font-bold">P</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-orange-500 rounded-sm flex items-center justify-center text-xs text-white font-bold">A</div>
                      </>
                    )}
                    {method.id === 'Cards' && (
                      <>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-blue-600 rounded-sm flex items-center justify-center text-xs text-white font-bold">V</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-red-500 rounded-sm flex items-center justify-center text-xs text-white font-bold">M</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-blue-800 rounded-sm flex items-center justify-center text-xs text-white font-bold">A</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-blue-400 rounded-sm flex items-center justify-center text-xs text-white font-bold">R</div>
                      </>
                    )}
                    {method.id === 'Netbanking' && (
                      <>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-red-600 rounded-sm flex items-center justify-center text-xs text-white font-bold">A</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-blue-600 rounded-sm flex items-center justify-center text-xs text-white font-bold">S</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-orange-600 rounded-sm flex items-center justify-center text-xs text-white font-bold">I</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-red-500 rounded-sm flex items-center justify-center text-xs text-white font-bold">K</div>
                      </>
                    )}
                    {method.id === 'Wallet' && (
                      <>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-purple-600 rounded-sm flex items-center justify-center text-xs text-white font-bold">P</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-blue-700 rounded-sm flex items-center justify-center text-xs text-white font-bold">P</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-red-500 rounded-sm flex items-center justify-center text-xs text-white font-bold">F</div>
                        <div className="w-4 h-3 lg:w-6 lg:h-4 bg-green-600 rounded-sm flex items-center justify-center text-xs text-white font-bold">M</div>
                      </>
                    )}
                    {method.id === 'Pay Later' && (
                      <div className="w-4 h-3 lg:w-6 lg:h-4 bg-indigo-600 rounded-sm flex items-center justify-center text-xs text-white font-bold">L</div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h2 className="text-xl font-semibold text-gray-900">UPI QR</h2>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  11:37
                </div>
              </div>

              {/* UPI QR Section */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-gray-100">
                <div className="flex flex-col items-center space-y-6">
                  {/* QR Code */}
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-black rounded-lg relative overflow-hidden">
                        {/* QR Code Pattern */}
                        <div className="absolute inset-0 opacity-90">
                          <div className="grid grid-cols-8 gap-0 h-full w-full">
                            {Array.from({ length: 64 }).map((_, i) => (
                              <div
                                key={i}
                                className={`${
                                  Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        {/* Corner markers */}
                        <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-4 h-4 sm:w-6 sm:h-6 bg-black border border-white sm:border-2"></div>
                        <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 bg-black border border-white sm:border-2"></div>
                        <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-4 h-4 sm:w-6 sm:h-6 bg-black border border-white sm:border-2"></div>
                      </div>
                    </div>
                  </div>

                  {/* UPI Apps */}
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-4 sm:mb-6">
                      Scan the QR using any UPI App
                    </h3>
                    <div className="flex justify-center space-x-3 sm:space-x-4">
                      {upiApps.map((app, index) => (
                        <button
                          key={index}
                          className={`w-10 h-10 sm:w-12 sm:h-12 ${app.color} rounded-full flex items-center justify-center text-white font-bold text-sm hover:scale-110 transition-transform cursor-pointer shadow-lg touch-manipulation`}
                        >
                          {app.name.charAt(0)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Banks */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Recommended</h3>
                <div className="space-y-3">
                  {recommendedBanks.map((bank, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-[#FDECD9]/20 transition-all duration-200 group touch-manipulation"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 ${bank.color} rounded-lg flex items-center justify-center text-white text-base sm:text-lg`}>
                          {bank.logo}
                        </div>
                        <span className="font-medium text-gray-800 group-hover:text-gray-900 text-sm sm:text-base">
                          {bank.name}
                        </span>
                      </div>
                      <div className="text-gray-400 group-hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end bg-white border-t border-gray-200 px-4 sm:px-6 py-4 sticky bottom-0">
            <button
            onClick={() => {
              // Handle next button click
              console.log('Next button clicked');

              const registrationId = Math.floor(Math.random() * 1000000000000).toString();
              const url = `/payment/${registrationId}`;
              window.location.href = url;

            }}
            className="bg-[#DA612B] text-white px-4 py-2 rounded-lg touch-manipulation">
              NEXT
            </button>
        </div>
      </div>
    </div>
  );
}


const Payments = () => {
    const params = useParams();
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='max-w-[70%] gap-10 lg:gap-16 py-5 px-4 lg:py-16 lg:px-14 flex flex-col lg:flex-row border border-solid border-[#DA612B50] rounded-lg'>
                <div className='border border-solid border-[#DA612B29] rounded-lg bg-[#FEF7EF] w-full max-h-[250px] lg:max-w-[40%] overflow-hidden'>
                    <iframe
                        loading='lazy'
                        width='100%'
                        height='100%'
                        allowfullscreen=''
                        referrerpolicy='no-referrer-when-downgrade'
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20849.23330452445!2d80.18446771713364!3d13.070061996069501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266b2082873a1%3A0x7f2b6f60e42a31f8!2sKoyambedu%2C%20Chennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1750170886467!5m2!1sen!2sin'></iframe>
                </div>

                <div className='w-full'>
                    <p className='text-black font-medium text-base lg:text-xl leading-normal'>
                        <span className='font-bold'>குறிப்பு:</span> மதிய உணவு
                        வழங்கப்படும். அனைத்து அமர்வுகளும் ஏற்றுமதி-இறக்குமதி
                        வணிகத்தில் நிபுணத்துவம் பெற்ற தொழில் நிபுணர்கள் மற்றும்
                        அரசு அதிகாரிகளால் நடத்தப்படும்.
                    </p>

                    <div className='mt-5'>
                        <p className='text-[#DA612B] font-medium text-base lg:text-xl'>
                            தொகை :
                        </p>
                        <p className='text-[#1A1A1A] font-bold text-xl lg:text-2xl mt-1'>
                            ₹ 500
                        </p>
                    </div>

                    <button 
                    onClick={() => setIsPaymentModalOpen(true)}
                    className='bg-[#DA612B] text-white text-sm lg:text-base font-semibold py-3 px-8 rounded-lg mt-5'>
                        உறுதிப்படுத்த பணம் செலுத்துங்கள்
                    </button>
                </div>

                <PaymentModal 
                    isOpen={isPaymentModalOpen} 
                    onClose={() => setIsPaymentModalOpen(false)} 
                />

            </div>
        </div>
    );
};

export default Payments;
