export function LandingStyles() {
  return (
    <style>{`
        .font-display { font-family: var(--font-sans); }
        @keyframes antMarchRight  { from { transform: translateX(-48px); } to { transform: translateX(calc(100vw + 48px)); } }
        @keyframes antMarchLeft   { from { transform: translateX(calc(100vw + 48px)); } to { transform: translateX(-48px); } }
        @keyframes antBob         { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-1.5px); } }
        @keyframes geoFade        { 0%,100%{opacity:.06} 50%{opacity:.13} }
        @keyframes fadeUp         { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes orbFloat       { 0%,100%{transform:translate(0,0) scale(1);opacity:.85} 50%{transform:translate(20px,-18px) scale(1.06);opacity:1} }
        .ant-march-r { animation: antMarchRight var(--dur) var(--del) linear infinite; will-change: transform; }
        .ant-march-l { animation: antMarchLeft  var(--dur) var(--del) linear infinite; will-change: transform; }
        .ant-rotate-r { display: inline-block; transform: rotate(90deg); transform-origin: center; }
        .ant-rotate-l { display: inline-block; transform: rotate(-90deg); transform-origin: center; }
        .ant-bob { display: inline-block; animation: antBob .42s ease-in-out infinite; }
        .geo-anim  { animation: geoFade 6s ease-in-out infinite; }
        .anim-up   { animation: fadeUp .7s ease both; }
        .anim-up-2 { animation: fadeUp .7s .18s ease both; }
        .hero-orb  { animation: orbFloat 9s ease-in-out infinite; will-change: transform, opacity; filter: blur(8px); }
        @media (prefers-reduced-motion: reduce) {
          .ant-march-r, .ant-march-l, .ant-bob, .geo-anim, .anim-up, .anim-up-2, .hero-orb { animation: none !important; }
        }
        .carousel-track { transition: transform .5s cubic-bezier(.4,0,.2,1); }
        .benefit-card   { transition: transform .25s ease, box-shadow .25s ease; }
        .benefit-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(33,44,124,.1); }
        .tcard::before { content:'"'; font-family:var(--font-sans); font-size:72px; color:#E2482D; opacity:.13; position:absolute; top:6px; left:18px; line-height:1; pointer-events:none; }
        input:focus, textarea:focus { border-color: #39438A !important; outline: none; }
      `}</style>
  );
}
