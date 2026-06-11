import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { Button } from "../components/ui/button";
import { ArrowLeft, Download } from "lucide-react";

export default function DownloadHallTicket(): JSX.Element {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const ticketRef = useRef<HTMLDivElement>(null);

  // Retrieve details from localStorage (or fallback to mockup data)
  const getDisplayValue = (val: string | null) => {
    if (!val || val === "null" || val === "undefined") return "";
    return val;
  };

  const fullName = getDisplayValue(localStorage.getItem("reg_fullName"));
  const phone = getDisplayValue(localStorage.getItem("reg_phone"));
  const ward = getDisplayValue(localStorage.getItem("reg_ward"));
  const address = getDisplayValue(localStorage.getItem("reg_address"));
  const district = getDisplayValue(localStorage.getItem("reg_district"));
  const aadhar = getDisplayValue(localStorage.getItem("reg_aadhar"));
  const employee = getDisplayValue(localStorage.getItem("reg_employee"));
  const experience = getDisplayValue(localStorage.getItem("reg_experience"));
  const rawDate = getDisplayValue(localStorage.getItem("reg_trainingDate"));

  // Format YYYY-MM-DD to Tamil format: "DD Month YYYY"
  const formatDateTamil = (dateStr: string) => {
    if (!dateStr) return "";
    if (!dateStr.includes("-")) return dateStr;
    const parts = dateStr.split("-");
    if (parts.length !== 3) return dateStr;
    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const monthsTamil = [
      "ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்",
      "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"
    ];
    return `${day} ${monthsTamil[monthIndex] || ""} ${year}`;
  };

  const trainingDate = formatDateTamil(rawDate);

  const handleDownload = async () => {
    if (!ticketRef.current) return;
    try {
      // Capture the complete 1100px height to prevent bottom footer cutoff
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2, 
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: 700,
        height: 1100,
      });
      
      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement("a");
      link.download = `Hall_Ticket_${id || "EXIM_Training"}.png`;
      link.href = image;
      link.click();
    } catch (error) {
      console.error("Error capturing the ticket image:", error);
    }
  };

  const scheduleItems = [
    { time: "காலை 9:00 - 10:00", event: "வரவேற்புரை" },
    { time: "காலை 10:00 - 11:30", event: "வணிகத்தின் அறிமுகம் மற்றும் விரிவுரை" },
    { time: "காலை 11:30 - 11:45", event: "தேநீர் இடைவேளை" },
    { time: "காலை 11:45 - மதியம் 1:00", event: "வணிக தேவைக்கான பொருட்கள் மற்றும் அதன் விரிவுரை" },
    { time: "மதியம் 1:00 - 2:00", event: "மதிய உணவு இடைவேளை" },
    { time: "மதியம் 2:00 - 3:30", event: "அயல்நாட்டு சந்தை வாய்ப்புகள் மற்றும் விரிவுரை" },
    { time: "மதியம் 3:30 - 4:30", event: "தொழில் தளவாடங்கள் (Logistics) குறித்த விரிவுரை" },
    { time: "மதியம் 4:30 - 5:30", event: "விலைப்பட்டியல் (Invoice) உருவாக்கம் மற்றும் அதன் விளக்கம்" },
    { time: "மதியம் 5:30 - 6:00", event: "முடிவுரை" },
    { time: "மாலை 6:00 - 6:30", event: "புத்தகங்கள் மற்றும் பங்கேற்பு சான்றிதழ்கள் விநியோகம்" }
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4 flex flex-col items-center justify-center">
      
      {/* Top Navigation Bar */}
      <div className="absolute top-6 left-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>முகப்பு பக்கம்</span>
        </button>
      </div>

      {/* Visible simple confirmation card */}
      <div className="w-full max-w-md bg-white border border-gray-150 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center gap-6">
        {/* Success Check Icon */}
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Title & Info */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-gray-950">
            பதிவு வெற்றிகரமாக முடிந்தது!
          </h2>
          <p className="text-sm text-gray-600 font-medium">
            நுழைவுச் சீட்டு வெற்றிகரமாக உருவாக்கப்பட்டது. கீழே உள்ள பொத்தானை கிளிக் செய்து உங்கள் நுழைவுச் சீட்டை பதிவிறக்கம் செய்து கொள்ளலாம்.
          </p>
        </div>

        {/* Single Action Download Button */}
        <Button
          onClick={handleDownload}
          className="w-full bg-[#DA612B] hover:bg-[#c55625] text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
        >
          <Download className="w-5 h-5" />
          <span>Download Hall Ticket</span>
        </Button>
      </div>

      {/* Hidden Container: Maintained in the DOM offscreen so html2canvas can capture it */}
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        {/* Hall Ticket Card (Fixed at 700x1100 to allocate vertical space for footer) */}
        <div 
          ref={ticketRef}
          id="hall-ticket-card"
          className="w-[700px] h-[1100px] shrink-0 bg-white border border-dashed border-gray-400 p-10 flex flex-col justify-between select-none"
        >
          {/* Top content stack */}
          <div className="flex flex-col gap-4">
            
            {/* Header section */}
            <div className="flex flex-col items-center text-center gap-1">
              <img
                src="/govt-emblem.svg"
                alt="govt-emblem"
                className="w-14 h-14 object-contain"
              />
              <span className="font-bold text-sm md:text-base text-gray-900">
                தமிழ்நாடு அரசு
              </span>
              <p className="font-bold text-xs md:text-sm text-gray-800">
                தமிழக அரசின் ஏற்றுமதி தொழில் முனைவோருக்கான பயிற்சி திட்டம்
              </p>
              <p className="text-gray-600 font-bold text-[10px] md:text-xs">
                முதலமைச்சரின் வீட்டுக்கு ஒரு தொழிலதிபர் திட்டம்
              </p>
              <div className="w-full border-t border-gray-300 mt-1" />
            </div>

            {/* Title */}
            <div>
              <span className="font-bold text-sm md:text-base text-gray-955">
                நுழைவுச் சீட்டு
              </span>
            </div>

            {/* Details Table */}
            <div className="flex flex-col text-xs md:text-sm">
              {[
                { label: "முழு பெயர்:", value: fullName },
                { label: "தொலைபேசி எண்:", value: phone },
                { label: "தொகுதி:", value: ward },
                { label: "முகவரி:", value: address },
                { label: "மாவட்டம்:", value: district },
                { label: "ஆதார் எண்:", value: aadhar },
                { label: "தொழில்:", value: employee },
                { label: "ஏற்றுமதியில் அனுபவம்:", value: experience },
                { label: "பயிற்சி தேதி:", value: trainingDate },
                { label: "நேரம்:", value: "காலை 9:00 முதல் மாலை 5:00 வரை" },
                { label: "இடம்:", value: "மகளிர் மையம், சென்னை" }
              ].map((row, index) => (
                <div 
                  key={index}
                  className="flex border-b border-gray-200/70 py-1 items-center"
                >
                  <span className="w-2/5 font-bold text-gray-700">{row.label}</span>
                  <span className="w-3/5 text-gray-900 font-medium">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Agenda Table */}
            <div className="flex flex-col mt-2">
              <h3 className="font-bold text-xs md:text-sm text-gray-800 mb-2">
                நிகழ்ச்சி நிரல்
              </h3>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-700 p-1.5">
                  <div className="col-span-1">நேரம்</div>
                  <div className="col-span-2">நிகழ்ச்சி</div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {scheduleItems.map((item, index) => (
                    <div 
                      key={index}
                      className="grid grid-cols-3 text-xs text-gray-600 p-2"
                    >
                      <div className="col-span-1 font-semibold text-gray-700">{item.time}</div>
                      <div className="col-span-2">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom content stack */}
          <div className="flex flex-col gap-4">
            
            {/* Instructions */}
            <p className="text-center font-bold text-xs md:text-sm text-gray-800">
              இந்த நுழைவுச் சீட்டை நிகழ்வின்போது கொண்டுவரவும்.
            </p>

            <div className="w-full border-t border-gray-300" />

            {/* Custom Bottom Footer Layout */}
            <div className="flex justify-center items-center py-2">
              {/* Center: Tamil Quote */}
              <div className="text-center font-bold text-xs md:text-sm text-gray-700">
                "பிறப்பொக்கும் எல்லா உயிர்க்கும்"
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
