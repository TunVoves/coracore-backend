import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://coracore-backend.onrender.com/api/hello")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  if (!user) return <div>Yükleniyor...</div>;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 20 }}>
      <header style={{ marginBottom: 30 }}>
        <h1>Dashboard</h1>
        <p>
          Hoşgeldin, <strong>{user.name}</strong>! Rolün: {user.role}
        </p>
        <p>Bildirimlerin: {user.notifications}</p>
      </header>

      <section>
        <h2>Hızlı Erişim</h2>
        <ul>
          <li>
            <a href="#">Kullanıcı Yönetimi</a>
          </li>
          <li>
            <a href="#">Raporlar</a>
          </li>
          <li>
            <a href="#">Ayarlar</a>
          </li>
        </ul>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Son Aktivite</h2>
        <ul>
          <li>Kullanıcı "Ahmet" eklendi.</li>
          <li>Rapor "Satış" oluşturuldu.</li>
          <li>Profil güncellendi.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;

