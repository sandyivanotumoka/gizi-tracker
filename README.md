# 🥗 GiziTracker

GiziTracker adalah aplikasi web untuk membantu pengguna memantau **konsumsi air, jadwal makan, dan perkembangan berat badan** selama program nutrisi.

Aplikasi ini dibuat menggunakan **Vue 3 + TypeScript** dengan UI modern berbasis **TailwindCSS**.

---

# 🚀 Features

## 🔐 Authentication

* Login Page
* Register Page

## 📊 Dashboard

* User card
* Program progress 30 hari
* Meal schedule berdasarkan hari

## 💧 Water Tracker

* Tambah konsumsi air (+250ml, +500ml)
* Undo air (-250ml)
* Progress bar dinamis
* Warna progress berubah sesuai persentase
* Alert ketika target air tercapai (2000 ml)
* Reset otomatis setiap hari

## ⚖️ Weight Tracker

* Weight chart menggunakan Chart.js
* Visualisasi perkembangan berat badan

---

# 🛠 Tech Stack

Frontend framework:

* Vue 3
* TypeScript

UI & Styling:

* TailwindCSS

Libraries:

* SweetAlert2
* Chart.js
* Vue Router

---

# 📁 Project Structure

```
src
│
├─ components
│   ├─ NavbarDashboard.vue
│   ├─ UserCard.vue
│   ├─ ProgressCard.vue
│   ├─ WeightCard.vue
│   ├─ MealScheduleCard.vue
│   ├─ WaterScheduleCard.vue
│   └─ WeightChart.vue
│
├─ pages
│   ├─ LoginPage.vue
│   ├─ RegisterPage.vue
│   └─ DashboardUser.vue
│
├─ router
│   └─ index.ts
│
└─ main.ts
```

---

# ⚙️ Installation

Clone repository:

```
git clone https://github.com/sandyivanotummoka/gizi-tracker.git
```

Masuk ke folder project:

```
cd gizi-tracker
```

Install dependencies:

```
npm install
```

Jalankan project:

```
npm run dev
```

Project akan berjalan di:

```
http://localhost:5173
```

---

# 📌 Roadmap

Fitur yang akan ditambahkan:

* Water intake history
* Weekly hydration chart
* Meal database
* Nutrition statistics
* Backend API integration
* Authentication system dengan database

---




# 👨‍💻 Author

Developed by **Sandy Ivano**

---

# 📄 License

This project is open source and available under the MIT License.
