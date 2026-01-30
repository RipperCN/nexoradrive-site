"use client";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      s: Math.random() * 0.5 + 0.2
    }));

    function animate() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "#00f2ff";
        ctx.fill();
        star.y += star.s;
        if (star.y > canvas.height) star.y = 0;
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <main className="body">
      <canvas id="stars"></canvas>

      {/* HEADER */}
      <header className="header">
        <div className="logo">NEXORA <span>IOT</span></div>
        <nav>
          <a href="#how">Nasıl Çalışır?</a>
          <a href="#features">Özellikler</a>
          <a href="#story">Hikaye</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#pricing">Fiyatlandırma</a>
          <a href="#brands">Araçlar</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="left">
          <h1>Aracın seninle<br/>konuşmaya başlıyor.</h1>
          <p>Nexora Drive, OBD2 cihazı ve mobil uygulamasıyla aracından gelen
            verileri anlık analiz eder.</p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeER7Ygk7orV2HvAa40TrQZY-RnZdUnbEaOtAazKoT2910Ymw/viewform"
            target="_blank"
            className="cta"
          >
            🔔 Erken Erişime Katıl
          </a>

          <div className="badges">
            <span>⚡ Gerçek zamanlı</span>
            <span>⚠️ Arıza uyarısı</span>
            <span>📱 Mobil uygulama</span>
          </div>
        </div>

        <div className="right">
          <img src="/device.png" />
        </div>
      </section>

      {/* ===== YENİ: MINI STATS + TRUST (Hero altı) ===== */}
      <section className="stats-trust">
        <div className="mini-stats">
          <div className="stat">+552 <span>erken kayıt</span></div>
          <div className="stat">+30 <span>marka uyumlu</span></div>
        </div>
        <div className="trust-grid">
          {["🔒 Veriler şifreli","🛠️ OBD2 standart uyum","☁️ Bulut altyapı","📡 Canlı bağlantı","🇹🇷 Türkiye merkezli"]
            .map((t,i)=>(<div key={i} className="trust-item">{t}</div>))}
        </div>
      </section>

      {/* NASIL */}
      <h2 className="title" id="how">Nasıl Çalışır?</h2>
      <div className="steps">
        <div><img src="/plug.png" /><p>1. OBD2 cihazını tak</p></div>
        <div><img src="/phone.png" /><p>2. Uygulamayı aç</p></div>
        <div><img src="/car.png" /><p>3. Aracını canlı izle</p></div>
      </div>

      {/* STORY */}
      <h2 className="title" id="story">Bir Günün Hikayesi</h2>
      <div className="story-flow">
        <div className="story-card"><span>🚗</span><h4>Yola çıktın</h4><p>Her şey normal görünüyor.</p></div>
        <div className="story-card"><span>⚠️</span><h4>Tehlike Yaklaşıyor</h4><p>Motor sıcaklığı yükseliyor.</p></div>
        <div className="story-card"><span>📱</span><h4>Nexora Uyardı</h4><p>Telefonuna anlık bildirim geldi.</p></div>
        <div className="story-card"><span>🛠️</span><h4>Önlem Aldın</h4><p>Büyük masrafların önüne geçtin.</p></div>
      </div>

      {/* FEATURES */}
      <h2 className="title" id="features">Akıllı Özellikler</h2>
      <div className="feature-grid">
        {[
          ["⚡","Anlık Uyarı","Arıza gelmeden haber al"],
          ["🧠","AI Tahmin","Sorunları önceden sez"],
          ["📊","Canlı Panel","Tüm veriler tek ekranda"],
          ["☁️","Bulut","Her yerden eriş"],
          ["🔔","Kritik Alarm","Acil durum bildirimi"],
          ["🧾","Geçmiş","Bakım kayıtları"]
        ].map((f,i)=>(
          <div key={i} className="fcard">
            <span className="icon">{f[0]}</span>
            <h4>{f[1]}</h4>
            <p>{f[2]}</p>
          </div>
        ))}
      </div>

      {/* ===== YENİ: DEMO / VIDEO ===== */}
      <section className="demo">
        <h2>NEXORA DRİVE ARACININ GÜCÜ CEBİNDE</h2>
        <p>Gerçek zamanlı veri, tek ekranda.</p>
        <div className="demo-box">
          <iframe
            src="https://www.youtube.com/embed/wVpoyDUp44Q"
            title="Nexora Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* DASHBOARD */}
      <h2 className="title" id="dashboard">Canlı Dashboard</h2>
      <div className="dash">
        <div className="dash-card">🌡️ Motor: 92°C</div>
        <div className="dash-card">⚡ Voltaj: 13.9V</div>
        <div className="dash-card">🚗 Hız: 84 km/s</div>
        <div className="dash-card">⛽ Yakıt: %56</div>
      </div>

      {/* PRICING */}
      <h2 className="title" id="pricing">Fiyatlandırma</h2>
      <div className="pricing">
        <h3>Beta Süreci</h3>
        <p>Ürün fiyatlandırması beta sürecinden sonra açıklanacaktır.</p>
        <span>🎯 Erken kayıt olanlar için özel avantajlar</span>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeER7Ygk7orV2HvAa40TrQZY-RnZdUnbEaOtAazKoT2910Ymw/viewform"
          target="_blank"
          className="pricing-btn"
        >
          🔔 Erken Erişim İçin Kaydol
        </a>
      </div>

      {/* ===== YENİ: SSS (Mini FAQ) ===== */}
      <section className="faq">
        <h2 className="title">Sık Sorulan Sorular</h2>
        <div className="faq-grid">
          <div><strong>İnternet şart mı?</strong><p>Evet, canlı veriler için gerekir.</p></div>
          <div><strong>Arabaya zarar verir mi?</strong><p>Hayır, OBD2 standart uyumlu.</p></div>
          <div><strong>Her araçta çalışır mı?</strong><p>2008+ OBD2 araçların çoğunda.</p></div>
          <div><strong>Aylık ücret var mı?</strong><p>Beta sürecinde yok.</p></div>
        </div>
      </section>

      {/* PROTOTYPE */}
      <section className="proto">
        <div className="proto-wrap">
          <div className="proto-card">
            <h3>Gerçek Prototip</h3>
            <p>İlk donanım üretimi tamamlandı.</p>
            <img src="/pcb.png" className="pcb"/>
          </div>

          <div className="proto-info">
            <h3>Neden Nexora?</h3>
            <ul>
              <li>⚡ Gerçek zamanlı motor verileri</li>
              <li>🧠 Yapay zekâ ile arıza tahmini</li>
              <li>📱 Mobil uygulama entegrasyonu</li>
              <li>🔔 Anlık kritik uyarılar</li>
              <li>☁️ Bulut kayıt ve geçmiş analiz</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== YENİ: ROADMAP (Brands öncesi) ===== */}
      <section className="roadmap">
        <h2 className="title">Yol Haritası</h2>
        <div className="road-grid">
          <div><span>2026 Q1</span><p>Donanım Beta</p></div>
          <div><span>2026 Q2</span><p>Mobil Uygulama</p></div>
          <div><span>2026 Q3</span><p>AI Arıza Tahmin</p></div>
          <div><span>2026 Q4</span><p>Global</p></div>
        </div>
      </section>

      {/* BRANDS */}
      <h2 className="title" id="brands">Desteklenen Araçlar</h2>
      <div className="slider">
        <div className="track">
          {["ford","toyota","bmw","mercedes","renault","fiat","hyundai","opel","vw",
            "ford","toyota","bmw","mercedes","renault","fiat","hyundai","opel","vw"]
            .map((b,i)=>(<img key={i} src={`/${b}.png`} />))}
        </div>
      </div>

      {/* FOTOĞRAFTAKİ ALT CTA + FOOTER */}
      <section className="photo-cta">
        <h2>Araban seni uyarabilseydi?</h2>
        <p>Nexora bunu yapıyor.</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeER7Ygk7orV2HvAa40TrQZY-RnZdUnbEaOtAazKoT2910Ymw/viewform"
          target="_blank"
          className="photo-btn"
        >
          🔔 Erken Erişime Katıl
        </a>

        <div className="photo-footer">
          <h4>NEXORA DRIVE</h4>
          <p>Aracının gücü cebinde.</p>
          <div>
            <a
              href="https://www.instagram.com/nexora.iot?igsh=MWRxbm1rMm43N3Vkdg%3D%3D&utm_source=qr"
              target="_blank"
            >
              Instagram
            </a>
            <a href="mailto:nexora.iot@gmail.com">nexora.iot@gmail.com</a>
          </div>
          <span>©️ 2026 Nexora. Tüm hakları saklıdır.</span>
        </div>
      </section>

      <style jsx>{`
        #stars{position:fixed;inset:0;z-index:-1;}
        .body{min-height:100vh;color:white;font-family:Segoe UI;padding:30px;}
        .header{display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;backdrop-filter:blur(10px);}
        .logo{font-size:22px;font-weight:bold;}
        .logo span{color:#00f2ff;}
        nav a{margin-left:20px;color:#aaa;}

        .hero{display:flex;justify-content:space-between;align-items:center;margin-top:60px;flex-wrap:wrap;}
        .left{max-width:520px;}
        h1{font-size:52px;}
        .cta{display:inline-block;margin-top:20px;padding:12px 25px;border-radius:8px;background:linear-gradient(90deg,#00f2ff,#007bff);color:white;text-decoration:none;}
        .cta:hover{transform:scale(1.08);box-shadow:0 0 25px #00f2ff;}
        .badges span{display:inline-block;margin-right:15px;margin-top:15px;color:#7ff;}
        .right img{width:340px;filter:drop-shadow(0 0 50px #00f2ff);animation:float 4s infinite;}
        @keyframes float{0%{transform:translateY(0);}50%{transform:translateY(-12px);}100%{transform:translateY(0);}}
        .title{text-align:center;margin:100px 0 40px;font-size:34px;}

        /* Yeni: stats + trust */
        .stats-trust{max-width:1000px;margin:60px auto;display:grid;gap:30px;}
        .mini-stats{display:flex;justify-content:center;gap:40px;}
        .stat{font-size:28px;font-weight:700;color:#00f2ff}
        .stat span{display:block;font-size:14px;color:#cfffff}
        .trust-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px}
        .trust-item{background:#0b1121;border-radius:12px;padding:12px;text-align:center}

        .steps{display:flex;justify-content:center;gap:50px;flex-wrap:wrap;}
        .steps div{background:#0f172a;padding:30px;border-radius:16px;transition:.35s;width:220px;text-align:center;}
        .steps div:hover{transform:scale(1.15);box-shadow:0 0 35px #00f2ff;}
        .steps img{width:170px;margin-bottom:15px;}

        .story-flow{display:flex;justify-content:center;gap:40px;flex-wrap:wrap;}
        .story-card{width:220px;background:#0b1121;border-radius:16px;padding:25px;text-align:center;transition:.4s;box-shadow:0 0 25px rgba(0,242,255,.15);}
        .story-card span{font-size:36px;}
        .story-card:hover{transform:translateY(-12px) scale(1.05);box-shadow:0 0 45px #00f2ff;}

        .feature-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:30px;max-width:1000px;margin:0 auto;}
        .fcard{background:#0b1121;border-radius:16px;padding:25px;text-align:center;transition:.4s;}
        .fcard:hover{transform:translateY(-10px) scale(1.05);box-shadow:0 0 40px #00f2ff;}
        .icon{font-size:34px;}

        /* Demo */
        .demo{text-align:center;margin:120px 0}
        .demo-box{max-width:720px;margin:20px auto;aspect-ratio:16/9}
        .demo-box iframe{width:100%;height:100%;border-radius:16px;border:0;box-shadow:0 0 40px rgba(0,242,255,.25)}

        .dash{display:flex;justify-content:center;gap:30px;flex-wrap:wrap;}
        .dash-card{background:#020b20;border:1px solid #00f2ff;padding:20px;border-radius:12px;box-shadow:0 0 20px #00f2ff;}

        .pricing{text-align:center;background:#0f172a;padding:40px;border-radius:16px;max-width:500px;margin:0 auto;}
        .pricing span{color:#00f2ff;}
        .pricing-btn{display:inline-block;margin-top:20px;padding:12px 28px;border-radius:10px;background:linear-gradient(90deg,#00f2ff,#007bff);color:white;text-decoration:none;box-shadow:0 0 25px #00f2ff;}

        /* FAQ */
        .faq{max-width:900px;margin:120px auto}
        .faq-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px}
        .faq-grid div{background:#0b1121;border-radius:12px;padding:16px}

        .proto{text-align:center;margin:120px 0;}
        .pcb{width:300px;margin-top:25px;border-radius:18px;box-shadow:0 0 60px rgba(0,242,255,.4);}
        .proto-wrap{display:flex;justify-content:center;align-items:center;gap:80px;flex-wrap:wrap;}
        .proto-info{max-width:380px;background:#0b1121;border-radius:18px;padding:30px 35px;box-shadow:0 0 40px rgba(0,242,255,.25);animation:floatInfo 4s ease-in-out infinite;}
        .proto-info h3{color:#00f2ff;margin-bottom:15px;}
        .proto-info ul{list-style:none;padding:0;}
        .proto-info li{margin-bottom:10px;color:#cfffff;}
        @keyframes floatInfo{0%{transform:translateY(0);}50%{transform:translateY(-10px);}100%{transform:translateY(0);}}

        /* Roadmap */
        .roadmap{max-width:900px;margin:120px auto}
        .road-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px}
        .road-grid div{background:#0b1121;border-radius:14px;padding:20px;text-align:center}
        .road-grid span{color:#00f2ff;font-weight:700}

        .slider{overflow:hidden;width:100%;padding:30px 0;}
        .track{display:flex;gap:60px;animation:scroll 18s linear infinite;}
        .track img{width:120px;filter:grayscale(1);transition:.3s;}
        .track img:hover{filter:grayscale(0);transform:scale(1.1);}
        @keyframes scroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}

        .photo-cta{text-align:center;margin:140px 0 0;padding-bottom:60px;}
        .photo-cta h2{font-size:42px;}
        .photo-cta p{color:#7ff;margin:10px 0 25px;}
        .photo-btn{display:inline-block;padding:14px 32px;border-radius:10px;background:linear-gradient(90deg,#00f2ff,#007bff);color:white;text-decoration:none;box-shadow:0 0 30px #00f2ff;}
        .photo-footer{margin-top:80px;color:#aaa;}
        .photo-footer h4{color:white;}
        .photo-footer a{margin:0 10px;color:#00f2ff;text-decoration:none;}
      `}</style>
    </main>
  );
}
