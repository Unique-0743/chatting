import { useState, useRef } from "react";

const TIME_SLOTS = [
  { id: 1, label: "9:00 AM", sub: "Morning" },
  { id: 2, label: "11:30 AM", sub: "Late Morning" },
  { id: 3, label: "2:00 PM", sub: "Afternoon" },
  { id: 4, label: "4:30 PM", sub: "Evening" },
  { id: 5, label: "7:00 PM", sub: "Night" },
];

const CHARACTER_PLACEHOLDER =
  "data:image/svg+xml;base64," +
  btoa(`<svg xmlns='http://www.w3.org/2000/svg' width='200' height='260' viewBox='0 0 200 260'>
  <rect width='200' height='260' fill='#E1F5EE'/>
  <circle cx='100' cy='90' r='42' fill='#1D9E75'/>
  <ellipse cx='100' cy='210' rx='58' ry='52' fill='#1D9E75'/>
  <circle cx='88' cy='85' r='6' fill='white'/>
  <circle cx='112' cy='85' r='6' fill='white'/>
  <path d='M85 105 Q100 118 115 105' stroke='white' stroke-width='3' fill='none' stroke-linecap='round'/>
</svg>`);

const CONNECT_PLACEHOLDER =
  "data:image/svg+xml;base64," +
  btoa(`<svg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'>
  <rect width='400' height='500' fill='#534AB7'/>
  <circle cx='200' cy='180' r='80' fill='#AFA9EC'/>
  <ellipse cx='200' cy='420' rx='110' ry='100' fill='#AFA9EC'/>
  <circle cx='178' cy='168' r='12' fill='white'/>
  <circle cx='222' cy='168' r='12' fill='white'/>
  <path d='M172 205 Q200 228 228 205' stroke='white' stroke-width='5' fill='none' stroke-linecap='round'/>
  <text x='200' y='490' text-anchor='middle' font-family='sans-serif' font-size='18' fill='#EEEDFE' opacity='0.8'>Ready to connect</text>
</svg>`);

export default function ConnectionApp() {
  const [page, setPage] = useState("home");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [swiped, setSwiped] = useState(false);
  const [swipeX, setSwipeX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(null);
  const trackWidth = 280;
  const thumbSize = 56;
  const maxX = trackWidth - thumbSize - 8;

  function startDrag(clientX) {
    setDragging(true);
    dragStart.current = clientX - swipeX;
  }

  function onDrag(clientX) {
    if (!dragging) return;
    const nx = Math.max(0, Math.min(clientX - dragStart.current, maxX));
    setSwipeX(nx);
    if (nx >= maxX - 4) {
      setDragging(false);
      setSwiped(true);
     
       const message =
    "Ippudu nenu Kaali ee 😁...";

  window.open(
    `https://wa.me/917416748564?text=${encodeURIComponent(message)}`,
    "_blank"
  );
   setTimeout(() => setPage("happy"), 400);
    }
  }

  function endDrag() {
    if (!swiped) {
      setDragging(false);
      setSwipeX(0);
    }
  }

  return (
   <div
  style={{
    minHeight: "100vh",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
    fontFamily: "var(--font-sans)",
    background:
      "linear-gradient(135deg, #EEEDFE 0%, #E1F5EE 50%, #FBEAF0 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflowX: "hidden",
    overflowY: "auto",
  }}
>

      {/* Ambient circles */}
      {[
  { emoji: "😘", top: "5%", left: "5%", size: 60 },
  { emoji: "💙", top: "12%", right: "8%", size: 50 },
  { emoji: "💕", top: "25%", left: "85%", size: 45 },
  { emoji: "😂", top: "45%", left: "3%", size: 65 },
  { emoji: "😆", top: "65%", right: "5%", size: 55 },
  { emoji: "😊", top: "82%", left: "12%", size: 60 },
  { emoji: "😪", top: "85%", right: "15%", size: 50 },
  { emoji: "💙", top: "55%", left: "88%", size: 55 },
  { emoji: "💕", top: "92%", left: "70%", size: 50 },
  
  { emoji: "💙", top: "82%", left: "22%", size: 60 },
  { emoji: "😪", top: "5%", left: "10%", size: 60 },
  { emoji: "😆", top: "25%", left: "75%", size: 45 },
  { emoji: "💕", top: "45%", left: "13%", size: 65 },
  { emoji: "💕", top: "65%", right: "15%", size: 55 },
 
  { emoji: "😘", top: "85%", right: "25%", size: 50 },
  { emoji: "😊", top: "55%", left: "78%", size: 55 },
  { emoji: "😂", top: "92%", left: "60%", size: 50 },
   { emoji: "💙", top: "12%", right: "16%", size: 50 },
].map((item, index) => (
  <div
    key={index}
    style={{
      position: "absolute",
      top: item.top,
      left: item.left,
      right: item.right,
      fontSize: item.size,
      opacity: 0.5,
      pointerEvents: "none",
      userSelect: "none",
      zIndex: 0,
      animation: `float ${3 + index % 3}s ease-in-out infinite`,
    }}
  >
    {item.emoji}
  </div>
))}
      {/* HOME PAGE */}
      {page === "home" && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32, padding: 24 }}>
          <div style={{ textAlign: "center" }}>
             <h1 style={{ margin: "8px 0 0", fontSize: 28, fontWeight: 500, color: "#3C3489", lineHeight: 1.2 }}>💙INTERACT💙</h1>
            <p style={{ margin: "10px 0 0", fontSize: 13, fontWeight: 500, letterSpacing: "0.12em", color: "#7F77DD", textTransform: "uppercase" }}>Someone wants to reach you</p>
           
          </div>

          {/* Character card — PAN card proportions (86×54mm → ~3:1.9 aspect) */}
          <div style={{ border:"2px solid black",width: 310, height: 196, borderRadius: 16, background: "white", boxShadow: "0 2px 32px rgba(83,74,183,0.13), 0 1px 4px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(238,237,254,0.6) 0%, rgba(225,245,238,0.4) 100%)" }} />
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <img
                src={"/Character.jpeg"}
                
                style={{ width: 310, height: 196, objectFit: "cover", borderRadius: 10, border: "2px solid rgba(127,119,221,0.25)" }}
              />
             
            </div>
          </div>

          {/* Question */}
          <div style={{ textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: 20, fontWeight: 500, color: "#3C3489" }}>Are you free now?</p>
            <p style={{ margin: "6px 0 0", fontSize: 14, color: "#888780" }}>Choose to connect instantly or schedule later</p>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 16 }}>
            <button
             onClick={() => {
 

  setPage("connect");
}}
              style={{ padding: "14px 36px", borderRadius: 50, border: "none", background: "#534AB7", color: "white", fontSize: 16, fontWeight: 500, cursor: "pointer", transition: "transform 0.1s, opacity 0.1s" }}
              onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
              onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
            >
              Yes, I'm free
            </button>
            <button
              onClick={() => setPage("slots")}
              style={{ padding: "14px 36px", borderRadius: 50, border: "1.5px solid #534AB7", background: "transparent", color: "#534AB7", fontSize: 16, fontWeight: 500, cursor: "pointer", transition: "transform 0.1s" }}
              onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
              onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
            >
              Not now
            </button>
          </div>
        </div>
      )}

      {/* CONNECT PAGE — full image with swipe overlay */}
      {page === "connect" && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, position: "relative", width: "100%", maxWidth: 420 }}>
          <button onClick={() => setPage("home")} style={{ position: "absolute", top: 16, left: 16, zIndex: 10, background: "rgba(255,255,255,0.85)", border: "none", borderRadius: 50, width: 40, height: 40, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "#534AB7", backdropFilter: "blur(4px)" }}>←</button>

          <div style={{ position: "relative", width: "100%", maxWidth: 420, minHeight: "80vh", overflow: "hidden", borderRadius: 24 }}>
            <img
              src={"/foto.jpeg"}
              //alt="Character to connect"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "80vh" }}
            />

            {/* Gradient overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,20,80,0.85) 0%, transparent 50%)" }} />

            {/* Text above swipe */}
            <div style={{ position: "absolute", bottom: 110, left: 0, right: 0, textAlign: "center" }}>
              <p style={{ margin: 0, color: "white", fontSize: 22, fontWeight: 500 }}>Ready to connect</p>
              <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,0.65)", fontSize: 14 }}>Slide to start chatting</p>
            </div>

            {/* Swipe control */}
            <div
              style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", width: trackWidth, height: thumbSize, borderRadius: 100, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", padding: "0 4px", userSelect: "none", cursor: "grab", backdropFilter: "blur(8px)" }}
              onMouseDown={e => startDrag(e.clientX)}
              onMouseMove={e => onDrag(e.clientX)}
              onMouseUp={endDrag}
              onMouseLeave={endDrag}
              onTouchStart={e => startDrag(e.touches[0].clientX)}
              onTouchMove={e => { e.preventDefault(); onDrag(e.touches[0].clientX); }}
              onTouchEnd={endDrag}
            >
              {/* Track text */}
              <span style={{ position: "absolute", left: 0, right: 0, textAlign: "center", color: "rgba(255,255,255,0.75)", fontSize: 13, fontWeight: 500, letterSpacing: "0.05em", pointerEvents: "none", opacity: swipeX > 60 ? 0 : 1, transition: "opacity 0.2s" }}>
                swipe to connect →
              </span>

              {/* Thumb */}
              <div
                style={{ width: thumbSize, height: thumbSize - 8, borderRadius: 100, background: "white", display: "flex", alignItems: "center", justifyContent: "center", transform: `translateX(${swipeX}px)`, transition: dragging ? "none" : "transform 0.3s cubic-bezier(.22,1,.36,1)", flexShrink: 0, boxShadow: "0 2px 12px rgba(83,74,183,0.25)" }}
              >
                <span style={{ fontSize: 22 }}>→</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HAPPY CHATTING PAGE */}
      {page === "happy" && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, padding: 32, textAlign: "center" }}>
          <div style={{ width: 120, height: 120, borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, boxShadow: "0 4px 32px rgba(83,74,183,0.18)" }}>
            😊
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: 32, fontWeight: 500, color: "#3C3489" }}>Happy Chatting!</h1>
            <p style={{ margin: "10px 0 0", fontSize: 16, color: "#888780", maxWidth: 280 }}>You're now connected. Enjoy your conversation!</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["💬", "🎉", "✨"].map((e, i) => (
              <div key={i} style={{ width: 48, height: 48, borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, boxShadow: "0 2px 12px rgba(83,74,183,0.1)" }}>{e}</div>
            ))}
          </div>
          <button onClick={() => { setPage("home"); setSwipeX(0); setSwiped(false); }} style={{ marginTop: 8, padding: "12px 32px", borderRadius: 50, border: "1.5px solid #534AB7", background: "transparent", color: "#534AB7", fontSize: 15, fontWeight: 500, cursor: "pointer" }}>
            Back to home
          </button>
        </div>
      )}

      {/* SLOTS PAGE */}
      {page === "slots" && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, padding: 32, width: "100%", maxWidth: 400 }}>
          <button onClick={() => setPage("home")} style={{ alignSelf: "flex-start", background: "none", border: "none", color: "#7F77DD", fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, padding: 0, fontFamily: "inherit" }}>
            ← Back
          </button>
          <div style={{ textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 500, letterSpacing: "0.1em", color: "#7F77DD", textTransform: "uppercase" }}>Schedule a time</p>
            <h2 style={{ margin: "8px 0 0", fontSize: 24, fontWeight: 500, color: "#3C3489" }}>Pick a slot</h2>
            <p style={{ margin: "6px 0 0", fontSize: 14, color: "#888780" }}>Choose when you'd like to connect</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: "100%" }}>
            {TIME_SLOTS.map(slot => (
              <button
                key={slot.id}
                onClick={() => {
  setSelectedSlot(slot);

  const message =
    `Nenu busy ga unnanu😎. Let's connect at ${slot.label} (${slot.sub}).`;

  window.open(
    `https://wa.me/917416748564?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  setPage("scheduled");
}}
                style={{ padding: "18px 12px", borderRadius: 16, border: `1.5px solid ${selectedSlot?.id === slot.id ? "#534AB7" : "rgba(83,74,183,0.2)"}`, background: "white", cursor: "pointer", textAlign: "left", transition: "all 0.15s", display: "flex", flexDirection: "column", gap: 4 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#534AB7"; e.currentTarget.style.background = "#EEEDFE"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(83,74,183,0.2)"; e.currentTarget.style.background = "white"; }}
              >
                <span style={{ fontSize: 11, fontWeight: 500, color: "#AFA9EC", letterSpacing: "0.08em", textTransform: "uppercase" }}>{slot.sub}</span>
                <span style={{ fontSize: 20, fontWeight: 500, color: "#3C3489" }}>{slot.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* SCHEDULED PAGE */}
      {page === "scheduled" && selectedSlot && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, padding: 32, textAlign: "center" }}>
          <div style={{ width: 96, height: 96, borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, boxShadow: "0 4px 32px rgba(83,74,183,0.18)" }}>
            📅
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 500, letterSpacing: "0.1em", color: "#7F77DD", textTransform: "uppercase" }}>All set</p>
            <h1 style={{ margin: "10px 0 8px", fontSize: 26, fontWeight: 500, color: "#3C3489" }}>Communication scheduled</h1>
            <p style={{ margin: 0, fontSize: 15, color: "#888780" }}>Your conversation is confirmed for</p>
            <div style={{ marginTop: 20, padding: "20px 40px", borderRadius: 16, background: "white", boxShadow: "0 2px 20px rgba(83,74,183,0.12)", display: "inline-block" }}>
              <p style={{ margin: 0, fontSize: 13, color: "#AFA9EC", textTransform: "uppercase", letterSpacing: "0.08em" }}>{selectedSlot.sub}</p>
              <p style={{ margin: "4px 0 0", fontSize: 36, fontWeight: 500, color: "#534AB7" }}>{selectedSlot.label}</p>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: 14, color: "#888780", maxWidth: 260 }}>You'll be notified before your scheduled connection time.</p>
          <button onClick={() => { setPage("home"); setSelectedSlot(null); }} style={{ padding: "12px 32px", borderRadius: 50, border: "1.5px solid #534AB7", background: "transparent", color: "#534AB7", fontSize: 15, fontWeight: 500, cursor: "pointer" }}>
            Back to home
          </button>
        </div>
      )}
    </div>
  );
}