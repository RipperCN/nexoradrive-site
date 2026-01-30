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
          <img src="/images/device.png" />
        </div>
      </section>

      {/* NASIL */}
      <h2 className="title" id="how">Nasıl Çalışır?</h2>
      <div className="steps">
        <div><img src="/images/plug.png" /><p>1. OBD2 cihazını tak</p></div>
        <div><img src="/images/phone.png" /><p>2. Uygulamayı aç</p></div>
        <div><img src="/images/car.png" /><p>3. Aracını canlı izle</p></div>
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

      {/* PROTOTYPE */}
      <section className="proto">
        <div className="proto-wrap">
          <div className="proto-card">
            <h3>Gerçek Prototip</h3>
            <p>İlk donanım üretimi tamamlandı.</p>
            <img src="/images/pcb.png" className="pcb"/>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <h2 className="title" id="brands">Desteklenen Araçlar</h2>
      <div className="slider">
        <div className="track">
          {["ford","toyota","bmw","mercedes","renault","fiat","hyundai","opel","vw",
            "ford","toyota","bmw","mercedes","renault","fiat","hyundai","opel","vw"]
            .map((b,i)=>(<img key={i} src={`/images/${b}.png`} />))}
        </div>
      </div>
    </main>
  );
}
