import React from "react";

// Card data JSON
const cardData = {
  imageAlt: "Image placeholder",
  note: "குறிப்பு:",
  description:
    "மதிய உணவு வழங்கப்படும். அனைத்து அமர்வுகளும் ஏற்றுமதி-இறக்குமதி வணிகத்தில் நிபுணத்துவம் பெற்ற தொழில் நிபுணர்கள் மற்றும் அரசு அதிகாரிகளால் நடத்தப்படும்.",
  priceLabel: "தொகை :",
  price: "₹ 500",
  buttonText: "உறுதிப்படுத்த பணம் செலுத்துங்கள்",
};

const InfoCard: React.FC = () => {
  return (
    <div
      style={{
        border: "1.5px solid #F5E6DA",
        borderRadius: 20,
        padding: 24,
        background: "#FFF",
        maxWidth: 420,
        margin: "0 auto",
      }}
    >
      {/* Image Placeholder */}
      <div
        style={{
          width: "100%",
          height: 180,
          background: "#FCF6F0",
          borderRadius: 20,
          marginBottom: 24,
        }}
        aria-label={cardData.imageAlt}
      />
      {/* Note and Description */}
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontWeight: 700, fontSize: 20 }}>{cardData.note}</span>
        <span style={{ fontWeight: 400, fontSize: 20, marginLeft: 4 }}>{cardData.description}</span>
      </div>
      {/* Price */}
      <div style={{ marginBottom: 24 }}>
        <span style={{ color: "#F26C1A", fontWeight: 700, fontSize: 22 }}>{cardData.priceLabel}</span>
        <div style={{ fontWeight: 700, fontSize: 32, marginTop: 4 }}>{cardData.price}</div>
      </div>
      {/* Button */}
      <button
        style={{
          width: "100%",
          background: "#F26C1A",
          color: "#FFF",
          fontWeight: 700,
          fontSize: 22,
          border: "none",
          borderRadius: 16,
          padding: "16px 0",
          cursor: "pointer",
        }}
      >
        {cardData.buttonText}
      </button>
    </div>
  );
};

export default InfoCard; 