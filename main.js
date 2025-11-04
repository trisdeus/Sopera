(() => {
  // Sample data for movies
  const movieData = {
    forYou: [
      {
        id: 0,
        title: "Cinta di Musim Hujan",
        genre: "Romantis",
        year: "2024",
        duration: "1j 45m",
        description:
          "Kisah romantis tentang dua insan yang dipertemukan saat musim hujan. Drama romantis yang penuh dengan konflik dan perasaan mendalam.",
        thumb: "images/thumb-0.jpg",
      },
      {
        id: 1,
        title: "Hati yang Terluka",
        genre: "Drama",
        year: "2024",
        duration: "1j 30m",
        description:
          "Drama emosional tentang perjuangan seseorang mengatasi patah hati dan menemukan kebahagiaan kembali.",
        thumb: "images/thumb-1.jpg",
      },
      {
        id: 2,
        title: "Rumah Angker",
        genre: "Horor",
        year: "2023",
        duration: "1j 55m",
        description:
          "Kisah menegangkan tentang keluarga yang pindah ke rumah baru yang ternyata berpenghuni makhluk halus.",
        thumb: "images/thumb-2.jpg",
      },
      {
        id: 3,
        title: "Hidup Sehari-hari",
        genre: "Slice of Life",
        year: "2024",
        duration: "1j 20m",
        description:
          "Cerita sederhana tentang kehidupan sehari-hari dengan berbagai momen berharga.",
        thumb: "images/thumb-3.jpg",
      },
    ],
    romance: [
      {
        id: 4,
        title: "Cinta Pertama",
        genre: "Romantis",
        year: "2023",
        duration: "1j 35m",
        thumb: "images/thumb-4.jpg",
      },
      {
        id: 5,
        title: "Janji di Atas Awan",
        genre: "Romantis",
        year: "2024",
        duration: "1j 40m",
        thumb: "images/thumb-5.jpg",
      },
      {
        id: 6,
        title: "Rindu yang Membara",
        genre: "Romantis",
        year: "2023",
        duration: "1j 50m",
        thumb: "images/thumb-6.jpg",
      },
      {
        id: 7,
        title: "Takdir Cinta",
        genre: "Romantis",
        year: "2024",
        duration: "1j 25m",
        thumb: "images/thumb-7.jpg",
      },
      {
        id: 8,
        title: "Hati yang Berdebar",
        genre: "Romantis",
        year: "2023",
        duration: "1j 30m",
        thumb: "images/thumb-8.jpg",
      },
    ],
    drama: [
      {
        id: 9,
        title: "Perjuangan Hidup",
        genre: "Drama",
        year: "2024",
        duration: "2j 10m",
        thumb: "images/thumb-9.jpg",
      },
      {
        id: 10,
        title: "Darah dan Air Mata",
        genre: "Drama",
        year: "2023",
        duration: "1j 55m",
        thumb: "images/thumb-10.jpg",
      },
      {
        id: 11,
        title: "Keluarga yang Terpisah",
        genre: "Drama",
        year: "2024",
        duration: "2j 05m",
        thumb: "images/thumb-11.jpg",
      },
      {
        id: 12,
        title: "Mimpi yang Hilang",
        genre: "Drama",
        year: "2023",
        duration: "1j 45m",
        thumb: "images/thumb-12.jpg",
      },
      {
        id: 13,
        title: "Perjalanan Kehidupan",
        genre: "Drama",
        year: "2024",
        duration: "2j 00m",
        thumb: "images/thumb-13.jpg",
      },
    ],
    horror: [
      {
        id: 14,
        title: "Hantu di Sekolah",
        genre: "Horor",
        year: "2023",
        duration: "1j 30m",
        thumb: "images/thumb-14.jpg",
      },
      {
        id: 15,
        title: "Teror Malam",
        genre: "Horor",
        year: "2024",
        duration: "1j 40m",
        thumb: "images/thumb-15.jpg",
      },
      {
        id: 16,
        title: "Dendam dari Masa Lalu",
        genre: "Horor",
        year: "2023",
        duration: "1j 50m",
        thumb: "images/thumb-16.jpg",
      },
      {
        id: 17,
        title: "Rumah Kosong",
        genre: "Horor",
        year: "2024",
        duration: "1j 35m",
        thumb: "images/thumb-17.jpg",
      },
      {
        id: 18,
        title: "Suara di Kegelapan",
        genre: "Horor",
        year: "2023",
        duration: "1j 45m",
        thumb: "images/thumb-18.jpg",
      },
    ],
    sliceOfLife: [
      {
        id: 19,
        title: "Pagi yang Indah",
        genre: "Slice of Life",
        year: "2024",
        duration: "1j 15m",
        thumb: "images/thumb-19.jpg",
      },
      {
        id: 20,
        title: "Kafe di Sudut Jalan",
        genre: "Slice of Life",
        year: "2023",
        duration: "1j 20m",
        thumb: "images/thumb-20.jpg",
      },
      {
        id: 21,
        title: "Teman Sejati",
        genre: "Slice of Life",
        year: "2024",
        duration: "1j 25m",
        thumb: "images/thumb-21.jpg",
      },
      {
        id: 22,
        title: "Hari yang Berharga",
        genre: "Slice of Life",
        year: "2023",
        duration: "1j 10m",
        thumb: "images/thumb-22.jpg",
      },
      {
        id: 23,
        title: "Kebahagiaan Sederhana",
        genre: "Slice of Life",
        year: "2024",
        duration: "1j 18m",
        thumb: "images/thumb-23.jpg",
      },
    ],
  };
  const shortFormData = [
    {
      id: 24,
      title: "Momen Spontan",
      genre: "Slice of Life",
      thumb: "images/thumb-24.jpg",
      video: "videos/short-24.mp4",
    },
    {
      id: 25,
      title: "Cinta Tak Terduga",
      genre: "Romantis",
      thumb: "images/thumb-25.jpg",
      video: "videos/short-25.mp4",
    },
    {
      id: 26,
      title: "Ketakutan Malam",
      genre: "Horor",
      thumb: "images/thumb-26.jpg",
      video: "videos/short-26.mp4",
    },
    {
      id: 27,
      title: "Perjuangan Sejati",
      genre: "Drama",
      thumb: "images/thumb-27.jpg",
      video: "videos/short-27.mp4",
    },
    {
      id: 28,
      title: "Kebahagiaan Kecil",
      genre: "Slice of Life",
      thumb: "images/thumb-28.jpg",
      video: "videos/short-28.mp4",
    },
    {
      id: 29,
      title: "Cinta Segitiga",
      genre: "Romantis",
      thumb: "images/thumb-29.jpg",
      video: "videos/short-29.mp4",
    },
    {
      id: 30,
      title: "Misteri Terungkap",
      genre: "Horor",
      thumb: "images/thumb-30.jpg",
      video: "videos/short-30.mp4",
    },
  ];
  class TikTokAutoplayManager {
    constructor() {
      this.currentVideo = null;
      this.currentVideoId = null;
      this.canUnmute = false;
      this.setupUserGestureListener();
      this.setupIntersectionObserver();
    }
    setupUserGestureListener() {
      const enableUnmute = () => {
        this.canUnmute = true;
        document.removeEventListener("touchstart", enableUnmute, {
          once: true,
        });
        document.removeEventListener("click", enableUnmute, { once: true });
      };
      document.addEventListener("touchstart", enableUnmute, { once: true });
      document.addEventListener("click", enableUnmute, { once: true });
    }
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              this.playVideo(entry.target);
            } else {
              entry.target.pause();
            }
          });
        },
        { threshold: 0.5 }
      );
    }
    playVideo(video) {
      video.muted = true;
      video
        .play()
        .then(() => {
          console.log("Video playing muted");
          if (this.canUnmute) {
            video.muted = false;
            video.hasUnmuted = true;
          }
        })
        .catch((error) => {
          console.warn("Autoplay failed:", error.message);
        });
    }
    setVideo(video, videoId) {
      // Stop current video
      if (this.currentVideo) {
        this.currentVideo.pause();
        this.observer.unobserve(this.currentVideo);
      }
      // Set new video
      this.currentVideo = video;
      this.currentVideoId = videoId;
      // Observe new video
      if (video) {
        this.observer.observe(video);
      }
    }
    cleanup() {
      if (this.currentVideo) {
        this.currentVideo.pause();
        this.observer.unobserve(this.currentVideo);
      }
    }
  }
  const autoplayManager = new TikTokAutoplayManager();
  const PROFILE_KEY = "sopera:profile";
  function loadProfileObject() {
    const raw = localStorage.getItem(PROFILE_KEY);
    const defaults = { name: "Akun Saya", email: "user@sopera.id", avatar: "" };
    if (!raw) return defaults;
    try {
      const p = JSON.parse(raw);
      return Object.assign(defaults, p || {});
    } catch (e) {
      return defaults;
    }
  }
  function saveProfileObject(profile) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  }
  function applyProfileToDOM() {
    const profile = loadProfileObject();
    const nameEl = document.getElementById("profileName");
    const emailEl = document.getElementById("profileEmail");
    const avatarImg = document.getElementById("profileAvatarImg");
    const usernameInput = document.getElementById("usernameInput");
    const emailInput = document.getElementById("emailInput");
    if (nameEl) nameEl.textContent = profile.name;
    if (emailEl) emailEl.textContent = profile.email;
    if (avatarImg)
      avatarImg.src = profile.avatar || "images/avatar-default.jpg";
    if (usernameInput) usernameInput.value = profile.name || "";
    if (emailInput) emailInput.value = profile.email || "";
  }

  // --- NEW: Language Management ---
  const LANGUAGE_KEY = "sopera:language";
  const TRANSLATIONS = {
    id: {
      // Default / Indonesian
      // Cover Screen
      "cover-sub": "Streaming. Cerita. Emosi.",
      "cover-enter": "Ketuk untuk masuk",
      // Header
      "search-input-placeholder": "Cari film, genre, tahun...",
      // Search Panel
      "search-close": "×",
      // Notifications Panel
      "notif-panel-header": "Notifikasi",
      "notif-clear": "Bersihkan",
      "notif-empty": "Belum ada notifikasi",
      // Library Tab
      "btn-play": "▶ Putar",
      "btn-info": "ℹ Info",
      "section-title-forYou": "Untuk Kamu",
      "section-title-romance": "Romantis",
      "section-title-drama": "Drama",
      "section-title-horror": "Horor",
      "section-title-sliceOfLife": "Slice of Life",
      // Short Form Tab
      "inline-comment-input-placeholder": "Tulis komentar...",
      "inline-comment-submit": "Kirim",
      "inline-comment-cancel": "×",
      "short-action-label-share": "Bagikan", // Specific label inside short actions
      "short-action-label-likes": "Suka", // Label for likes count button
      "short-action-label-comments": "Komentar", // Label for comments count button
      // Account Tab
      "menu-title-subscription": "Langganan",
      "menu-label-premium": "Paket Premium",
      "subscription-badge": "Aktif",
      "menu-title-settings": "Pengaturan",
      "menu-label-generalSettings": "Pengaturan Umum",
      "menu-label-privacySecurity": "Privasi & Keamanan",
      "menu-label-payment": "Pembayaran",
      "menu-label-about": "Tentang Aplikasi",
      "menu-label-helpSupport": "Bantuan & Dukungan",
      "menu-label-logout": "Keluar",
      "edit-icon-title": "Ubah profil",
      // Settings Tab
      "section-header-settings": "Pengaturan Umum",
      "setting-label-language": "Bahasa",
      "setting-label-theme": "Tema",
      "setting-label-videoQuality": "Kualitas Video Otomatis",
      "setting-label-notifications": "Notifikasi",
      "setting-option-indonesian": "Bahasa Indonesia",
      "setting-option-english": "English",
      "setting-option-light": "Terang",
      "setting-option-dark": "Gelap",
      // Privacy Tab
      "section-header-privacy": "Privasi & Keamanan",
      "setting-label-privacy-data": "Data Pribadi",
      "setting-label-privacy-contacts": "Kontak",
      "setting-label-privacy-history": "Riwayat Aktivitas",
      "setting-label-privacy-password": "Ubah Kata Sandi",
      // Payment Tab
      "section-header-payment": "Pembayaran",
      "setting-label-payment-method": "Metode Pembayaran",
      "setting-label-payment-history": "Riwayat Transaksi",
      "setting-label-payment-promo": "Promo & Kode",
      // About Tab
      "section-header-about": "Tentang Aplikasi",
      "setting-label-about-version": "Versi Aplikasi",
      "setting-description-about-version": "v1.0.0",
      "setting-label-about-privacy": "Kebijakan Privasi",
      "setting-label-about-terms": "Syarat & Ketentuan",
      "setting-label-about-contact": "Kontak Pengembang",
      // Help Tab
      "section-header-help": "Bantuan & Dukungan",
      "setting-label-help-center": "Pusat Bantuan",
      "setting-label-help-contact": "Hubungi Kami",
      "setting-label-help-report": "Laporkan Masalah",
      // Premium Tab
      "section-header-premium": "Paket Premium",
      "current-plan-title": "Langganan Saat Ini: Premium",
      "current-plan-valid": "Berlaku hingga: 31 Desember 2025",
      "btn-plan": "Perbarui Langganan",
      "benefit-title-exclusive": "Konten Eksklusif",
      "benefit-desc-exclusive":
        "Akses konten eksklusif yang hanya tersedia untuk pengguna Premium.",
      "benefit-title-adfree": "Bebas Iklan",
      "benefit-desc-adfree": "Nikmati streaming tanpa gangguan iklan.",
      "benefit-title-offline": "Download untuk Offline",
      "benefit-desc-offline":
        "Simpan drama favoritmu dan tonton kapan saja, bahkan tanpa internet.",
      "benefit-title-hd": "Kualitas HD",
      "benefit-desc-hd": "Streaming dengan kualitas gambar hingga Full HD.",
      // Search Results Tab
      "search-query-title-default": "Hasil pencarian",
      "search-empty": "Tidak ada hasil",
      "view-more-btn": "Lihat selengkapnya",
      // Profile Edit Screen
      "section-header-profileEdit": "Ubah Profil",
      "profile-edit-row-label": "Foto Profil",
      "profile-edit-row-info": "Unggah foto baru (jpg/png).",
      "setting-label-editUsername": "Nama Pengguna",
      "setting-label-editEmail": "Email",
      "profile-edit-form-submit": "Simpan",
      "profile-edit-form-cancel": "Batal",
      "alert-username-required": "Nama pengguna tidak boleh kosong.",
      "alert-email-invalid": "Masukkan email yang valid.",
      "alert-profile-updated": "Profil berhasil diperbarui.",
      // Modals / Overlays
      "modal-close": "×",
      // Comments (in modal)
      "comment-input-placeholder": "Tulis komentar...",
      "comment-action-like": "Suka",
      "comment-action-reply": "Balas",
      "comment-time-now": "Sekarang",
      // Notifications
      "notification-time-1h-ago": "1 jam lalu",
      "notification-time-yesterday": "Kemarin",
      "notification-time-2d-ago": "2 hari lalu",
      // Share
      "alert-link-copied": "Link berhasil disalin!",
      "alert-failed-to-copy": "Gagal menyalin link.",
      "alert-share-not-supported":
        "Fitur berbagi tidak tersedia di browser ini.",
      "share-text-watch-on-sopera": "Tonton film ini di Sopera!",
      "share-text-watch-title-on-sopera": "Tonton {title} di Sopera", // {title} will be replaced
      // Tab Navigation Labels
      "tab-label-library": "Library",
      "tab-label-shortForm": "Short Form",
      "tab-label-accounts": "Akun",
      // Meta Information (Year, Duration, Genre display)
      "meta-year": "Tahun",
      "meta-duration": "Durasi",
      "meta-genre": "Genre",
      // Video Modal Labels
      "modal-label-year": "Tahun:",
      "modal-label-duration": "Durasi:",
      "modal-label-genre": "Genre:",
      "modal-label-description": "Deskripsi:",
      // Settings Actions Alerts/Prompts
      "alert-privacy-data-opened": "Pengaturan Data Pribadi dibuka.",
      "alert-privacy-contacts-opened": "Pengaturan Kontak dibuka.",
      "alert-privacy-history-opened": "Pengaturan Riwayat Aktivitas dibuka.",
      "alert-privacy-password-opened": "Formulir Ubah Kata Sandi dibuka.",
      "alert-privacy-setting-opened":
        "Membuka pengaturan di Privasi & Keamanan.",
      "alert-payment-method-opened": "Pengaturan Metode Pembayaran dibuka.",
      "alert-payment-history-opened": "Pengaturan Riwayat Transaksi dibuka.",
      "alert-payment-promo-opened": "Pengaturan Promo & Kode dibuka.",
      "alert-payment-setting-opened": "Membuka pengaturan di Pembayaran.",
      "alert-about-privacy-opened": "Kebijakan Privasi dibuka.",
      "alert-about-terms-opened": "Syarat & Ketentuan dibuka.",
      "alert-about-contact-opened": "Kontak Pengembang dibuka.",
      "alert-about-setting-opened": "Membuka halaman di Tentang Aplikasi.",
      "alert-help-center-opened": "Pusat Bantuan dibuka.",
      "alert-help-contact-opened": "Hubungi Kami dibuka.",
      "alert-help-report-opened": "Laporan Masalah dibuka.",
      "alert-help-setting-opened": "Membuka halaman di Bantuan & Dukungan.",
      "prompt-current-password": "Masukkan kata sandi saat ini:",
      "prompt-new-password": "Masukkan kata sandi baru:",
      "alert-password-changed": "Kata sandi berhasil diubah!",
      "prompt-enter-promo": "Masukkan kode promo:",
      "alert-promo-applied": 'Kode promo "%promo%" telah diterapkan!', // Note: Replace %promo% in code
      "prompt-report-issue": "Jelaskan masalah yang Anda alami:",
      "alert-issue-reported": "Terima kasih, laporan Anda telah dikirim.",
      "confirm-logout": "Apakah Anda yakin ingin keluar?",
      "alert-logged-out": "Anda telah keluar.",
      // Privacy Data Tab Alerts/Prompts
      "confirm-data-deletion":
        "Anda yakin ingin menghapus semua data pribadi Anda? Tindakan ini tidak dapat dibatalkan.",
      "alert-data-deletion-requested":
        "Permintaan penghapusan data Anda telah dikirim. Data akan dihapus dalam beberapa hari ke depan.",
      // Contact Settings Tab Alerts/Prompts
      "alert-contact-settings-saved": "Pengaturan kontak berhasil disimpan.",
      "alert-contact-settings-save-failed":
        "Gagal menyimpan pengaturan kontak.",
      // Activity History Tab Alerts/Prompts
      "activity-history-empty": "Tidak ada aktivitas ditemukan.",
      "confirm-delete-activity-history":
        "Anda yakin ingin menghapus semua riwayat aktivitas Anda?",
      "alert-activity-history-deleted": "Riwayat aktivitas berhasil dihapus.",
      "alert-activity-history-delete-failed":
        "Gagal menghapus riwayat aktivitas.",
      // Password Change Tab Alerts/Prompts
      "alert-current-password-required": "Masukkan kata sandi saat ini.",
      "alert-new-password-required": "Masukkan kata sandi baru.",
      "alert-new-password-too-short":
        "Kata sandi baru harus memiliki setidaknya 8 karakter.",
      "alert-passwords-do-not-match":
        "Kata sandi baru dan konfirmasi kata sandi tidak cocok.",
      "alert-current-password-incorrect": "Kata sandi saat ini salah.",
      "alert-password-change-failed": "Gagal mengubah kata sandi.",
      "confirm-cancel-password-change":
        "Apakah Anda yakin ingin membatalkan perubahan kata sandi?",
      // Payment Method Tab Alerts/Prompts
      "alert-payment-method-required": "Silakan pilih metode pembayaran.",
      "alert-payment-method-saved": "Metode pembayaran berhasil disimpan.",
      "alert-payment-method-save-failed": "Gagal menyimpan metode pembayaran.",
      "confirm-cancel-payment-method":
        "Apakah Anda yakin ingin membatalkan perubahan?",
      // Promo Code Tab Alerts/Prompts
      "alert-promo-code-required": "Silakan masukkan kode promo.",
      "alert-promo-code-invalid": "Kode promo tidak valid.",
      "alert-promo-code-applied": "Kode promo telah diterapkan!",
      "alert-promo-code-save-failed":
        "Gagal menyimpan kode promo yang diterapkan.",
      "alert-promo-code-input-missing": "Input kode promo tidak ditemukan.",
      // Report Issue Tab Alerts/Prompts
      "alert-issue-report-category-required": "Silakan pilih kategori masalah.",
      "alert-issue-report-description-required":
        "Silakan jelaskan masalah Anda.",
      "alert-issue-report-missing-fields":
        "Gagal mengirim laporan: elemen formulir tidak ditemukan.",
      "alert-issue-report-submitted":
        "Terima kasih, laporan Anda telah dikirim.",
      "confirm-cancel-issue-report":
        "Apakah Anda yakin ingin membatalkan laporan?",
    },
    en: {
      // English Translations
      // Cover Screen
      "cover-sub": "Streaming. Stories. Emotions.",
      "cover-enter": "Tap to enter",
      // Header
      "search-input-placeholder": "Search films, genres, years...",
      // Search Panel
      "search-close": "×",
      // Notifications Panel
      "notif-panel-header": "Notifications",
      "notif-clear": "Clear",
      "notif-empty": "No notifications yet",
      // Library Tab
      "btn-play": "▶ Play",
      "btn-info": "ℹ Info",
      "section-title-forYou": "For You",
      "section-title-romance": "Romance",
      "section-title-drama": "Drama",
      "section-title-horror": "Horror",
      "section-title-sliceOfLife": "Slice of Life",
      // Short Form Tab
      "inline-comment-input-placeholder": "Write a comment...",
      "inline-comment-submit": "Send",
      "inline-comment-cancel": "×",
      "short-action-label-share": "Share", // Specific label inside short actions
      "short-action-label-likes": "Likes", // Label for likes count button
      "short-action-label-comments": "Comments", // Label for comments count button
      // Account Tab
      "menu-title-subscription": "Subscription",
      "menu-label-premium": "Premium Plan",
      "subscription-badge": "Active",
      "menu-title-settings": "Settings",
      "menu-label-generalSettings": "General Settings",
      "menu-label-privacySecurity": "Privacy & Security",
      "menu-label-payment": "Payment",
      "menu-label-about": "About App",
      "menu-label-helpSupport": "Help & Support",
      "menu-label-logout": "Log Out",
      "edit-icon-title": "Edit profile",
      // Settings Tab
      "section-header-settings": "General Settings",
      "setting-label-language": "Language",
      "setting-label-theme": "Theme",
      "setting-label-videoQuality": "Auto Video Quality",
      "setting-label-notifications": "Notifications",
      "setting-option-indonesian": "Bahasa Indonesia",
      "setting-option-english": "English",
      "setting-option-light": "Light",
      "setting-option-dark": "Dark",
      // Privacy Tab
      "section-header-privacy": "Privacy & Security",
      "setting-label-privacy-data": "Personal Data",
      "setting-label-privacy-contacts": "Contacts",
      "setting-label-privacy-history": "Activity History",
      "setting-label-privacy-password": "Change Password",
      // Payment Tab
      "section-header-payment": "Payment",
      "setting-label-payment-method": "Payment Method",
      "setting-label-payment-history": "Transaction History",
      "setting-label-payment-promo": "Promo & Codes",
      // About Tab
      "section-header-about": "About App",
      "setting-label-about-version": "App Version",
      "setting-description-about-version": "v1.0.0",
      "setting-label-about-privacy": "Privacy Policy",
      "setting-label-about-terms": "Terms & Conditions",
      "setting-label-about-contact": "Contact Developer",
      // Help Tab
      "section-header-help": "Help & Support",
      "setting-label-help-center": "Help Center",
      "setting-label-help-contact": "Contact Us",
      "setting-label-help-report": "Report Issue",
      // Premium Tab
      "section-header-premium": "Premium Plan",
      "current-plan-title": "Current Subscription: Premium",
      "current-plan-valid": "Valid until: December 31, 2025",
      "btn-plan": "Renew Subscription",
      "benefit-title-exclusive": "Exclusive Content",
      "benefit-desc-exclusive":
        "Access exclusive content available only to Premium users.",
      "benefit-title-adfree": "Ad-Free",
      "benefit-desc-adfree": "Enjoy streaming without ads.",
      "benefit-title-offline": "Download for Offline",
      "benefit-desc-offline":
        "Save your favorite shows and watch anytime, even without internet.",
      "benefit-title-hd": "HD Quality",
      "benefit-desc-hd": "Stream with picture quality up to Full HD.",
      // Search Results Tab
      "search-query-title-default": "Search Results",
      "search-empty": "No results found",
      "view-more-btn": "View more",
      // Profile Edit Screen
      "section-header-profileEdit": "Edit Profile",
      "profile-edit-row-label": "Profile Picture",
      "profile-edit-row-info": "Upload a new photo (jpg/png).",
      "setting-label-editUsername": "Username",
      "setting-label-editEmail": "Email",
      "profile-edit-form-submit": "Save",
      "profile-edit-form-cancel": "Cancel",
      "alert-username-required": "Username cannot be empty.",
      "alert-email-invalid": "Please enter a valid email.",
      "alert-profile-updated": "Profile updated successfully.",
      // Modals / Overlays
      "modal-close": "×",
      // Comments (in modal)
      "comment-input-placeholder": "Write a comment...",
      "comment-action-like": "Like",
      "comment-action-reply": "Reply",
      "comment-time-now": "Now",
      // Notifications
      "notification-time-1h-ago": "1 hour ago",
      "notification-time-yesterday": "Yesterday",
      "notification-time-2d-ago": "2 days ago",
      // Share
      "alert-link-copied": "Link copied successfully!",
      "alert-failed-to-copy": "Failed to copy link.",
      "alert-share-not-supported":
        "Share feature is not available in this browser.",
      "share-text-watch-on-sopera": "Watch this on Sopera!",
      "share-text-watch-title-on-sopera": "Watch {title} on Sopera", // {title} will be replaced
      // Tab Navigation Labels
      "tab-label-library": "Library",
      "tab-label-shortForm": "Short Form",
      "tab-label-accounts": "Account",
      // Meta Information (Year, Duration, Genre display)
      "meta-year": "Year",
      "meta-duration": "Duration",
      "meta-genre": "Genre",
      // Video Modal Labels
      "modal-label-year": "Year:",
      "modal-label-duration": "Duration:",
      "modal-label-genre": "Genre:",
      "modal-label-description": "Description:",
      // Settings Actions Alerts/Prompts
      "alert-privacy-data-opened": "Personal Data settings opened.",
      "alert-privacy-contacts-opened": "Contacts settings opened.",
      "alert-privacy-history-opened": "Activity History settings opened.",
      "alert-privacy-password-opened": "Change Password form opened.",
      "alert-privacy-setting-opened": "Opening setting in Privacy & Security.",
      "alert-payment-method-opened": "Payment Method settings opened.",
      "alert-payment-history-opened": "Transaction History settings opened.",
      "alert-payment-promo-opened": "Promo & Codes settings opened.",
      "alert-payment-setting-opened": "Opening setting in Payment.",
      "alert-about-privacy-opened": "Privacy Policy opened.",
      "alert-about-terms-opened": "Terms & Conditions opened.",
      "alert-about-contact-opened": "Developer Contact opened.",
      "alert-about-setting-opened": "Opening page in About App.",
      "alert-help-center-opened": "Help Center opened.",
      "alert-help-contact-opened": "Contact Us opened.",
      "alert-help-report-opened": "Issue Report opened.",
      "alert-help-setting-opened": "Opening page in Help & Support.",
      "prompt-current-password": "Enter current password:",
      "prompt-new-password": "Enter new password:",
      "alert-password-changed": "Password changed successfully!",
      "prompt-enter-promo": "Enter promo code:",
      "alert-promo-applied": 'Promo code "%promo%" has been applied!', // Note: Replace %promo% in code
      "prompt-report-issue": "Describe the issue you are experiencing:",
      "alert-issue-reported": "Thank you, your report has been sent.",
      "confirm-logout": "Are you sure you want to log out?",
      "alert-logged-out": "You have been logged out.",
      // Privacy Data Tab Alerts/Prompts
      "confirm-data-deletion":
        "Are you sure you want to delete all your personal data? This action cannot be undone.",
      "alert-data-deletion-requested":
        "Your data deletion request has been sent. Data will be deleted within the next few days.",
      // Contact Settings Tab Alerts/Prompts
      "alert-contact-settings-saved": "Contact settings saved successfully.",
      "alert-contact-settings-save-failed": "Failed to save contact settings.",
      // Activity History Tab Alerts/Prompts
      "activity-history-empty": "No activity found.",
      "confirm-delete-activity-history":
        "Are you sure you want to delete all your activity history?",
      "alert-activity-history-deleted":
        "Activity history deleted successfully.",
      "alert-activity-history-delete-failed":
        "Failed to delete activity history.",
      // Password Change Tab Alerts/Prompts
      "alert-current-password-required": "Enter current password.",
      "alert-new-password-required": "Enter new password.",
      "alert-new-password-too-short":
        "New password must be at least 8 characters long.",
      "alert-passwords-do-not-match":
        "New password and confirmation password do not match.",
      "alert-current-password-incorrect": "Current password is incorrect.",
      "alert-password-change-failed": "Failed to change password.",
      "confirm-cancel-password-change":
        "Are you sure you want to cancel the password change?",
      // Payment Method Tab Alerts/Prompts
      "alert-payment-method-required": "Please select a payment method.",
      "alert-payment-method-saved": "Payment method saved successfully.",
      "alert-payment-method-save-failed": "Failed to save payment method.",
      "confirm-cancel-payment-method":
        "Are you sure you want to cancel the changes?",
      // Promo Code Tab Alerts/Prompts
      "alert-promo-code-required": "Please enter a promo code.",
      "alert-promo-code-invalid": "Invalid promo code.",
      "alert-promo-code-applied": "Promo code has been applied!",
      "alert-promo-code-save-failed": "Failed to save applied promo code.",
      "alert-promo-code-input-missing": "Promo code input field not found.",
      // Report Issue Tab Alerts/Prompts
      "alert-issue-report-category-required":
        "Please select an issue category.",
      "alert-issue-report-description-required": "Please describe your issue.",
      "alert-issue-report-missing-fields":
        "Failed to submit report: form elements missing.",
      "alert-issue-report-submitted":
        "Thank you, your report has been submitted.",
      "confirm-cancel-issue-report":
        "Are you sure you want to cancel the report?",
    },
  };

  function getStoredLanguage() {
    return localStorage.getItem(LANGUAGE_KEY) || "id"; // Default to Indonesian
  }

  function applyLanguage(langCode) {
    const texts = TRANSLATIONS[langCode] || TRANSLATIONS.id; // Fallback to 'id' if translation missing
    const htmlElement = document.documentElement;

    // Update HTML lang attribute
    htmlElement.setAttribute("lang", langCode);

    // --- Update static text elements ---
    // Cover Screen
    setTextIfExists("cover-sub", texts["cover-sub"]);
    setTextIfExists("cover-enter", texts["cover-enter"]);

    // Header / Search
    setPlaceholderIfExists("searchInput", texts["search-input-placeholder"]);
    setTextIfExists("search-close", texts["search-close"]);

    // Notifications Panel
    setTextIfExists("notif-panel-header", texts["notif-panel-header"], true); // true for innerHTML
    setTextIfExists("notif-clear", texts["notif-clear"]);
    setTextIfExists("notifEmpty", texts["notif-empty"]);

    // Library Tab
    setTextIfExists("btn-play", texts["btn-play"]);
    setTextIfExists("btn-info", texts["btn-info"]);
    setTextIfExists(
      "forYouRow",
      texts["section-title-forYou"],
      true,
      ".section-title:first-of-type"
    );
    setTextIfExists(
      "romanceRow",
      texts["section-title-romance"],
      true,
      ".section-title:first-of-type"
    );
    setTextIfExists(
      "dramaRow",
      texts["section-title-drama"],
      true,
      ".section-title:first-of-type"
    );
    setTextIfExists(
      "horrorRow",
      texts["section-title-horror"],
      true,
      ".section-title:first-of-type"
    );
    setTextIfExists(
      "sliceOfLifeRow",
      texts["section-title-sliceOfLife"],
      true,
      ".section-title:first-of-type"
    );

    // Short Form Tab
    // Update placeholder for existing inline comment inputs
    document.querySelectorAll(".inline-comment-input").forEach((input) => {
      input.placeholder = texts["inline-comment-input-placeholder"];
    });
    // Update the share label inside short form actions (this updates existing DOM)
    document
      .querySelectorAll(
        '.short-action-btn[data-action="share"] .short-action-label'
      )
      .forEach((label) => {
        label.textContent = texts["short-action-label-share"];
      });
    // Update the like and comment labels inside short form actions
    // Now, only update if the current text matches the known Indonesian default *with* the label
    // If the text is just a number, don't update it.
    document
      .querySelectorAll(
        '.short-action-btn[data-action="like"] .short-action-label'
      )
      .forEach((label) => {
        const currentText = label.textContent.trim();
        // Check if the text is exactly the old default with the label (e.g., "12 Suka")
        if (
          currentText.includes(
            TRANSLATIONS["id"]["short-action-label-likes"]
          ) ||
          currentText.includes(TRANSLATIONS["en"]["short-action-label-likes"])
        ) {
          // Extract the number if possible, otherwise keep the old default text
          const numberMatch = currentText.match(/\d+/);
          const number = numberMatch ? numberMatch[0] : "0"; // Default to '0' if no number found
          label.textContent = number; // Set only the number
        }
        // If the text is already just a number, leave it as is.
      });
    document
      .querySelectorAll(
        '.short-action-btn[data-action="comment"] .short-action-label'
      )
      .forEach((label) => {
        const currentText = label.textContent.trim();
        // Check if the text is exactly the old default with the label (e.g., "245 Komentar")
        if (
          currentText.includes(
            TRANSLATIONS["id"]["short-action-label-comments"]
          ) ||
          currentText.includes(
            TRANSLATIONS["en"]["short-action-label-comments"]
          )
        ) {
          // Extract the number if possible, otherwise keep the old default text
          const numberMatch = currentText.match(/\d+/);
          const number = numberMatch ? numberMatch[0] : "0"; // Default to '0' if no number found
          label.textContent = number; // Set only the number
        }
        // If the text is already just a number, leave it as is.
      });

    // Account Tab
    setTextIfExists(
      "menu-title-subscription",
      texts["menu-title-subscription"],
      true,
      ".menu-title:first-of-type"
    );
    setTextIfExists("menu-label-premium", texts["menu-label-premium"]);
    setTextIfExists("subscription-badge", texts["subscription-badge"]);
    setTextIfExists(
      "menu-title-settings",
      texts["menu-title-settings"],
      true,
      ".menu-title:nth-of-type(2)"
    );
    setTextIfExists(
      "menu-label-generalSettings",
      texts["menu-label-generalSettings"]
    );
    setTextIfExists(
      "menu-label-privacySecurity",
      texts["menu-label-privacySecurity"]
    );
    setTextIfExists("menu-label-payment", texts["menu-label-payment"]);
    setTextIfExists("menu-label-about", texts["menu-label-about"]);
    setTextIfExists("menu-label-helpSupport", texts["menu-label-helpSupport"]);
    setTextIfExists("menu-label-logout", texts["menu-label-logout"]);
    setTitleIfExists("editProfileBtn", texts["edit-icon-title"]);

    // Settings Tab
    setTextIfExists(
      "settingsTab",
      texts["section-header-settings"],
      true,
      ".section-header h2"
    );
    setTextIfExists(
      "settingsTab",
      texts["setting-label-language"],
      true,
      ".setting-item:first-of-type .setting-label"
    );
    // Update theme options
    const themeSelect = document.querySelector(
      "#settingsTab .setting-item .setting-control:nth-of-type(2)"
    );
    if (themeSelect && themeSelect.children.length >= 2) {
      themeSelect.children[0].textContent = texts["setting-option-light"];
      themeSelect.children[1].textContent = texts["setting-option-dark"];
    }
    // Update language options
    const langSelect = document.querySelector(
      "#settingsTab .setting-item .setting-control:first-of-type"
    );
    if (langSelect && langSelect.children.length >= 2) {
      langSelect.children[0].textContent = texts["setting-option-indonesian"];
      langSelect.children[1].textContent = texts["setting-option-english"];
    }
    // Other settings labels in General Settings
    setTextIfExists(
      "settingsTab",
      texts["setting-label-videoQuality"],
      true,
      ".setting-item:nth-of-type(3) .setting-label"
    );
    setTextIfExists(
      "settingsTab",
      texts["setting-label-notifications"],
      true,
      ".setting-item:nth-of-type(4) .setting-label"
    );

    // Privacy Tab
    setTextIfExists(
      "privacyTab",
      texts["section-header-privacy"],
      true,
      ".section-header h2"
    );
    setTextIfExists(
      "privacyTab",
      texts["setting-label-privacy-data"],
      true,
      ".setting-item:first-of-type .setting-label"
    );
    setTextIfExists(
      "privacyTab",
      texts["setting-label-privacy-contacts"],
      true,
      ".setting-item:nth-of-type(2) .setting-label"
    );
    setTextIfExists(
      "privacyTab",
      texts["setting-label-privacy-history"],
      true,
      ".setting-item:nth-of-type(3) .setting-label"
    );
    setTextIfExists(
      "privacyTab",
      texts["setting-label-privacy-password"],
      true,
      ".setting-item:nth-of-type(4) .setting-label"
    );

    // Payment Tab
    setTextIfExists(
      "paymentTab",
      texts["section-header-payment"],
      true,
      ".section-header h2"
    );
    setTextIfExists(
      "paymentTab",
      texts["setting-label-payment-method"],
      true,
      ".setting-item:first-of-type .setting-label"
    );
    setTextIfExists(
      "paymentTab",
      texts["setting-label-payment-history"],
      true,
      ".setting-item:nth-of-type(2) .setting-label"
    );
    setTextIfExists(
      "paymentTab",
      texts["setting-label-payment-promo"],
      true,
      ".setting-item:nth-of-type(3) .setting-label"
    );

    // About Tab
    setTextIfExists(
      "aboutTab",
      texts["section-header-about"],
      true,
      ".section-header h2"
    );
    setTextIfExists(
      "aboutTab",
      texts["setting-label-about-version"],
      true,
      ".setting-item:first-of-type .setting-label"
    );
    setTextIfExists(
      "aboutTab",
      texts["setting-description-about-version"],
      true,
      ".setting-item:first-of-type .setting-description"
    );
    setTextIfExists(
      "aboutTab",
      texts["setting-label-about-privacy"],
      true,
      ".setting-item:nth-of-type(2) .setting-label"
    );
    setTextIfExists(
      "aboutTab",
      texts["setting-label-about-terms"],
      true,
      ".setting-item:nth-of-type(3) .setting-label"
    );
    setTextIfExists(
      "aboutTab",
      texts["setting-label-about-contact"],
      true,
      ".setting-item:nth-of-type(4) .setting-label"
    );

    // Help Tab
    setTextIfExists(
      "helpTab",
      texts["section-header-help"],
      true,
      ".section-header h2"
    );
    setTextIfExists(
      "helpTab",
      texts["setting-label-help-center"],
      true,
      ".setting-item:first-of-type .setting-label"
    );
    setTextIfExists(
      "helpTab",
      texts["setting-label-help-contact"],
      true,
      ".setting-item:nth-of-type(2) .setting-label"
    );
    setTextIfExists(
      "helpTab",
      texts["setting-label-help-report"],
      true,
      ".setting-item:nth-of-type(3) .setting-label"
    );

    // Premium Tab
    setTextIfExists(
      "premiumTab",
      texts["section-header-premium"],
      true,
      ".section-header h2"
    );
    setTextIfExists(
      "premiumTab",
      texts["current-plan-title"],
      true,
      ".current-plan h3"
    );
    setTextIfExists(
      "premiumTab",
      texts["current-plan-valid"],
      true,
      ".current-plan p"
    );
    setTextIfExists(
      "premiumTab",
      texts["btn-plan"],
      true,
      ".current-plan .btn-plan"
    );
    setTextIfExists(
      "premiumTab",
      texts["benefit-title-exclusive"],
      true,
      ".premium-benefit:first-of-type h3"
    );
    setTextIfExists(
      "premiumTab",
      texts["benefit-desc-exclusive"],
      true,
      ".premium-benefit:first-of-type p"
    );
    setTextIfExists(
      "premiumTab",
      texts["benefit-title-adfree"],
      true,
      ".premium-benefit:nth-of-type(2) h3"
    );
    setTextIfExists(
      "premiumTab",
      texts["benefit-desc-adfree"],
      true,
      ".premium-benefit:nth-of-type(2) p"
    );
    setTextIfExists(
      "premiumTab",
      texts["benefit-title-offline"],
      true,
      ".premium-benefit:nth-of-type(3) h3"
    );
    setTextIfExists(
      "premiumTab",
      texts["benefit-desc-offline"],
      true,
      ".premium-benefit:nth-of-type(3) p"
    );
    setTextIfExists(
      "premiumTab",
      texts["benefit-title-hd"],
      true,
      ".premium-benefit:nth-of-type(4) h3"
    );
    setTextIfExists(
      "premiumTab",
      texts["benefit-desc-hd"],
      true,
      ".premium-benefit:nth-of-type(4) p"
    );

    // Search Results Tab
    setTextIfExists("searchQueryTitle", texts["search-query-title-default"]);

    // Profile Edit Screen
    setTextIfExists(
      "profileEditScreen",
      texts["section-header-profileEdit"],
      true,
      ".section-header h2"
    );
    setTextIfExists(
      "profileEditScreen",
      texts["profile-edit-row-label"],
      true,
      'label[for="editAvatarInput"]'
    );
    setTextIfExists(
      "profileEditScreen",
      texts["profile-edit-row-info"],
      true,
      '.profile-edit-row div[style*="font-size"]'
    );
    setTextIfExists(
      "profileEditScreen",
      texts["setting-label-editUsername"],
      true,
      'label[for="editUsername"]'
    );
    setTextIfExists(
      "profileEditScreen",
      texts["setting-label-editEmail"],
      true,
      'label[for="editEmail"]'
    );
    setTextIfExists(
      "profileEditScreen",
      texts["profile-edit-form-submit"],
      true,
      "#profileEditForm .btn-plan"
    );
    setTextIfExists(
      "profileEditScreen",
      texts["profile-edit-form-cancel"],
      true,
      "#cancelEditProfile"
    );

    // Modals / Overlays
    setTextIfExists("modal-close", texts["modal-close"]);

    // Tab Navigation Labels
    const tabItems = document.querySelectorAll(".tab-item span");
    if (tabItems.length >= 3) {
      tabItems[0].textContent = texts["tab-label-library"];
      tabItems[1].textContent = texts["tab-label-shortForm"];
      tabItems[2].textContent = texts["tab-label-accounts"];
    }

    // --- Update dynamic content placeholders / labels ---
    // Search Results (panel and full page)
    document.querySelectorAll(".search-empty").forEach((el) => {
      if (
        el.textContent.trim() === TRANSLATIONS["id"]["search-empty"] ||
        el.textContent.trim() === TRANSLATIONS["en"]["search-empty"]
      ) {
        el.textContent = texts["search-empty"];
      }
    });
    document.querySelectorAll(".view-more-btn").forEach((btn) => {
      btn.textContent = texts["view-more-btn"];
    });

    // Update comment action text (like, reply) in modal
    document.querySelectorAll(".comment-action").forEach((span) => {
      if (
        span.textContent.trim() === TRANSLATIONS["id"]["comment-action-like"] ||
        span.textContent.trim() === TRANSLATIONS["en"]["comment-action-like"]
      ) {
        span.textContent = texts["comment-action-like"];
      } else if (
        span.textContent.trim() ===
          TRANSLATIONS["id"]["comment-action-reply"] ||
        span.textContent.trim() === TRANSLATIONS["en"]["comment-action-reply"]
      ) {
        span.textContent = texts["comment-action-reply"];
      }
    });

    // Update notification time text
    document.querySelectorAll(".notif-time").forEach((timeEl) => {
      const originalText = timeEl.textContent.trim();
      if (originalText === TRANSLATIONS["id"]["notification-time-1h-ago"]) {
        timeEl.textContent = texts["notification-time-1h-ago"];
      } else if (
        originalText === TRANSLATIONS["id"]["notification-time-yesterday"]
      ) {
        timeEl.textContent = texts["notification-time-yesterday"];
      } else if (
        originalText === TRANSLATIONS["id"]["notification-time-2d-ago"]
      ) {
        timeEl.textContent = texts["notification-time-2d-ago"];
      }
    });

    // Update inline comment box elements (placeholder handled above, update button text here)
    document.querySelectorAll(".inline-comment-submit").forEach((btn) => {
      btn.textContent = texts["inline-comment-submit"];
    });
    document.querySelectorAll(".inline-comment-cancel").forEach((btn) => {
      btn.textContent = texts["inline-comment-cancel"];
    });

    // Update comment input placeholder in modal
    setPlaceholderIfExists("commentInput", texts["comment-input-placeholder"]);

    // Update video modal labels (Year, Duration, Genre, Description)
    setTextIfExists(
      "modalYear",
      texts["modal-label-year"],
      true,
      ".modal-meta-label:first-of-type"
    ); // Assuming first .modal-meta-label is Year
    setTextIfExists(
      "modalDuration",
      texts["modal-label-duration"],
      true,
      ".modal-meta-label:nth-of-type(2)"
    ); // Assuming second .modal-meta-label is Duration
    setTextIfExists(
      "modalGenre",
      texts["modal-label-genre"],
      true,
      ".modal-meta-label:nth-of-type(3)"
    ); // Assuming third .modal-meta-label is Genre
    setTextIfExists(
      "modalDescription",
      texts["modal-label-description"],
      true,
      ".modal-section-title"
    ); // Assuming the section title for description
  }

  function setTextIfExists(
    elementIdOrSelector,
    text,
    isInnerHTML = false,
    subSelector = null
  ) {
    let element;
    if (subSelector) {
      const container =
        document.getElementById(elementIdOrSelector) ||
        document.querySelector(elementIdOrSelector);
      if (container) element = container.querySelector(subSelector);
    } else {
      element =
        document.getElementById(elementIdOrSelector) ||
        document.querySelector(elementIdOrSelector);
    }
    if (element) {
      if (isInnerHTML) {
        element.innerHTML = text;
      } else {
        element.textContent = text;
      }
    }
  }

  function setPlaceholderIfExists(elementId, placeholderText) {
    const element = document.getElementById(elementId);
    if (element) {
      element.placeholder = placeholderText;
    }
  }

  function setTitleIfExists(elementId, titleText) {
    const element = document.getElementById(elementId);
    if (element) {
      element.title = titleText;
    }
  }

  function switchLanguage(newLang) {
    localStorage.setItem(LANGUAGE_KEY, newLang);
    applyLanguage(newLang);
  }

  // State
  let currentVideoId = null;
  let liked = false;
  let disliked = false;
  let comments = [];
  let lastSearchResults = [];
  let lastSearchQuery = "";

  // Initialize after DOM ready
  function init() {
    // prevent background scroll while cover visible
    const cover = document.getElementById("coverScreen");
    // apply stored profile immediately
    applyProfileToDOM();

    // --- Language Initialization ---
    const currentLang = getStoredLanguage();
    applyLanguage(currentLang);

    // --- Wire Language Dropdown ---
    const languageSelect = document.querySelector(
      "#settingsTab .setting-item .setting-control:first-of-type"
    );
    if (languageSelect) {
      // Set the select's value based on stored language
      languageSelect.value =
        currentLang === "en" ? "English" : "Bahasa Indonesia";

      languageSelect.addEventListener("change", (e) => {
        const selectedOptionText = e.target.value;
        let newLangCode = "id";
        if (selectedOptionText === "English") {
          newLangCode = "en";
        } else if (selectedOptionText === "Bahasa Indonesia") {
          newLangCode = "id";
        }
        if (newLangCode !== currentLang) {
          switchLanguage(newLangCode);
        }
      });
    }

    // avatar file input
    const avatarInput = document.getElementById("profileAvatarInput");
    const avatarImg = document.getElementById("profileAvatarImg");
    const saveBtn = document.getElementById("saveProfileBtn");
    const removeAvatarBtn = document.getElementById("removeAvatarBtn");
    // click on avatar image opens file picker
    const avatarWrapper = document.getElementById("profileAvatarWrapper");
    if (avatarWrapper && avatarInput) {
      avatarWrapper.addEventListener("click", () => avatarInput.click());
    }
    if (avatarInput) {
      avatarInput.addEventListener("change", (e) => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result;
          if (avatarImg) avatarImg.src = dataUrl;
          const p = loadProfileObject();
          p.avatar = dataUrl;
          saveProfileObject(p);
        };
        reader.readAsDataURL(f);
      });
    }
    if (removeAvatarBtn) {
      removeAvatarBtn.addEventListener("click", () => {
        const p = loadProfileObject();
        p.avatar = "";
        saveProfileObject(p);
        if (avatarImg) avatarImg.src = "images/avatar-default.jpg";
      });
    }
    // Update saveProfileBtn alert messages
    if (saveBtn) {
      saveBtn.replaceWith(saveBtn.cloneNode(true)); // Remove old listeners
      const newSaveBtn = document.getElementById("saveProfileBtn"); // Get new node
      newSaveBtn.addEventListener("click", () => {
        const usernameInput = document.getElementById("usernameInput");
        const emailInput = document.getElementById("emailInput");
        const name = (usernameInput && usernameInput.value.trim()) || "";
        const email = (emailInput && emailInput.value.trim()) || "";
        // basic validation
        if (!name) {
          alert(TRANSLATIONS[currentLang]["alert-username-required"]);
          usernameInput && usernameInput.focus();
          return;
        }
        // simple email check
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) {
          alert(TRANSLATIONS[currentLang]["alert-email-invalid"]);
          emailInput && emailInput.focus();
          return;
        }
        const p = loadProfileObject();
        p.name = name;
        p.email = email;
        saveProfileObject(p);
        applyProfileToDOM();
        // small confirmation
        alert(TRANSLATIONS[currentLang]["alert-profile-updated"]);
      });
    }
    if (cover) {
      document.body.classList.add("cover-open");
      const hideCover = () => {
        cover.classList.add("hide");
        // allow background scroll after fade
        setTimeout(() => {
          document.body.classList.remove("cover-open");
          if (cover && cover.parentNode) cover.parentNode.removeChild(cover);
        }, 360);
      };
      // support both button and whole-area tap
      cover.querySelector(".cover-enter")?.addEventListener("click", hideCover);
      cover.addEventListener("click", (e) => {
        // avoid closing when clicking inner elements that may delegate
        if (e.target === cover || e.target.closest(".cover-enter")) hideCover();
      });
    }
    populateMovieRows();
    populateShortForm();
    switchTab("library");
    // Theme toggle (wires the "Tema" control in Settings)
    const THEME_KEY = "sopera:theme";
    function applyTheme(theme) {
      const t = theme === "light" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", t);
    }
    function getStoredTheme() {
      return (
        localStorage.getItem(THEME_KEY) ||
        document.documentElement.getAttribute("data-theme") ||
        "dark"
      );
    }
    // apply stored/initial theme immediately
    applyTheme(getStoredTheme());
    // find the Tema select in the settings tab and wire change event
    document.querySelectorAll("#settingsTab .setting-item").forEach((item) => {
      const labelEl = item.querySelector(".setting-label");
      if (!labelEl) return;
      const label = labelEl.textContent.trim().toLowerCase();
      if (label === "tema" || label === "theme") {
        const select = item.querySelector("select");
        if (!select) return;
        // set select to match stored theme (options are Indonesian: Terang/Gelap)
        select.value = getStoredTheme() === "light" ? "Terang" : "Gelap";
        select.addEventListener("change", (e) => {
          const raw = (e.target.value || "").toString().toLowerCase();
          const theme =
            raw.includes("terang") || raw === "light" ? "light" : "dark";
          applyTheme(theme);
          localStorage.setItem(THEME_KEY, theme);
        });
      }
    });
    // if page opened from search (optional) could render later
    // const initialTab = window.location.hash ? "shortForm" : "library";
    // switchTab(initialTab);
    // setTimeout(() => {
    //   const query = decodeURIComponent(window.location.hash.substring(1));
    //   performSearch(query);
    // }, 100);
    // wire search input events
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) =>
        performSearch(e.target.value)
      );
      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeSearch();
        } else if (e.key === "Enter") {
          performSearch(e.target.value);
        }
      });
    }
    // Close modal on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        // if search is open, close it first
        const panel = document.getElementById("searchPanel");
        if (panel && !panel.classList.contains("hidden")) {
          closeSearch();
          return;
        }
        closeVideoModal();
      }
    });
    // Close modal on click outside
    const videoModalEl = document.getElementById("videoModal");
    if (videoModalEl) {
      videoModalEl.addEventListener("click", (e) => {
        if (e.target.id === "videoModal") {
          closeVideoModal();
        }
      });
      // make modal video toggle mute on tap
      const modalVideoEl = document.getElementById("modalVideo");
      if (modalVideoEl) {
        // ensure click on the video itself doesn't close modal and toggles mute
        modalVideoEl.addEventListener("click", (ev) => {
          ev.stopPropagation();
          modalVideoEl.muted = !modalVideoEl.muted;
          // small visual state for debugging/ styling hooks
          modalVideoEl.setAttribute(
            "data-muted",
            modalVideoEl.muted ? "true" : "false"
          );
        });
      }
    }
    // allow hero video to toggle mute on tap as well (if present)
    const heroVideo = document.querySelector(".hero-video");
    if (heroVideo) {
      heroVideo.addEventListener("click", (ev) => {
        ev.stopPropagation();
        heroVideo.muted = !heroVideo.muted;
        heroVideo.setAttribute(
          "data-muted",
          heroVideo.muted ? "true" : "false"
        );
      });
    }
    // Enter key to submit comment
    const commentInputEl = document.getElementById("commentInput");
    if (commentInputEl) {
      commentInputEl.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          addComment();
        }
      });
    }
    const container = document.getElementById("shortFormContainer");
    if (container) {
      // Delegated handler for short-form actions and item clicks
      container.addEventListener("click", function (ev) {
        const btn = ev.target.closest(".short-action-btn");
        // If an action button wasn't clicked, open the short modal/item
        if (!btn) {
          const itemEl = ev.target.closest(".short-form-item");
          if (itemEl) {
            const id = parseInt(itemEl.dataset.id, 10);
            if (!Number.isNaN(id)) openVideoModal(id);
          }
          return;
        }
        // Prevent the item click handler from firing
        ev.stopPropagation();
        const action = btn.dataset.action;
        // prefer data-id on wrapper; fall back to closest short-form-item
        const idAttr =
          btn.closest(".short-actions")?.dataset.id ||
          btn.closest(".short-form-item")?.dataset.id;
        const id = idAttr ? parseInt(idAttr, 10) : null;
        if (id === null || Number.isNaN(id)) return;
        if (action === "like") {
          shortToggleLike(id, btn);
        } else if (action === "comment") {
          // show inline comment box instead of opening modal
          shortShowCommentBox(id, btn);
        } else if (action === "share") {
          shortShare(id);
        }
      });
    }

    // --- Wire Privacy Tab Buttons ---
    const privacyDataItem = document.getElementById("privacy-data-item");
    const privacyContactsItem = document.getElementById(
      "privacy-contacts-item"
    );
    const privacyHistoryItem = document.getElementById("privacy-history-item");
    const privacyPasswordItem = document.getElementById(
      "privacy-password-item"
    );

    if (privacyDataItem)
      privacyDataItem.addEventListener("click", () =>
        openPrivacySetting("data")
      );
    if (privacyContactsItem)
      privacyContactsItem.addEventListener("click", () =>
        openPrivacySetting("contacts")
      );
    if (privacyHistoryItem)
      privacyHistoryItem.addEventListener("click", () =>
        openPrivacySetting("history")
      );
    if (privacyPasswordItem)
      privacyPasswordItem.addEventListener("click", () =>
        openPrivacySetting("password")
      );

    // --- Wire Payment Tab Buttons ---
    const paymentMethodItem = document.getElementById("payment-method-item");
    const paymentHistoryItem = document.getElementById("payment-history-item");
    const paymentPromoItem = document.getElementById("payment-promo-item");

    if (paymentMethodItem)
      paymentMethodItem.addEventListener("click", () =>
        openPaymentSetting("method")
      );
    if (paymentHistoryItem)
      paymentHistoryItem.addEventListener("click", () =>
        openPaymentSetting("history")
      );
    if (paymentPromoItem)
      paymentPromoItem.addEventListener("click", () =>
        openPaymentSetting("promo")
      );

    // --- Wire About Tab Buttons ---
    const aboutPrivacyItem = document.getElementById("about-privacy-item");
    const aboutTermsItem = document.getElementById("about-terms-item");
    const aboutContactItem = document.getElementById("about-contact-item");

    if (aboutPrivacyItem)
      aboutPrivacyItem.addEventListener("click", () =>
        openAboutSetting("privacy")
      );
    if (aboutTermsItem)
      aboutTermsItem.addEventListener("click", () => openAboutSetting("terms"));
    if (aboutContactItem)
      aboutContactItem.addEventListener("click", () =>
        openAboutSetting("contact")
      );

    // --- Wire Help Tab Buttons ---
    const helpCenterItem = document.getElementById("help-center-item");
    const helpContactItem = document.getElementById("help-contact-item");
    const helpReportItem = document.getElementById("help-report-item");

    if (helpCenterItem)
      helpCenterItem.addEventListener("click", () => openHelpSetting("center"));
    if (helpContactItem)
      helpContactItem.addEventListener("click", () =>
        openHelpSetting("contact")
      );
    if (helpReportItem)
      helpReportItem.addEventListener("click", () => openHelpSetting("report"));

    // --- Wire Logout Button ---
    // Find the logout menu item div
    const logoutMenuItem = document
      .querySelector('.menu-item .menu-label:contains("Keluar")')
      ?.closest(".menu-item");
    // Or find it by the icon and label combination if needed
    if (!logoutMenuItem) {
      // Alternative: Find by text within the accounts tab structure if the above fails
      // This is more robust if the structure changes slightly
      document.querySelectorAll(".menu-item").forEach((item) => {
        const label = item.querySelector(".menu-label");
        if (
          label &&
          label.textContent.trim() ===
            TRANSLATIONS[getStoredLanguage()]["menu-label-logout"]
        ) {
          item.addEventListener("click", handleLogout);
        }
      });
    } else {
      logoutMenuItem.addEventListener("click", handleLogout);
    }

    // --- Wire Privacy Data Tab Delete Button ---
    const deleteDataBtn = document.getElementById("deleteDataBtn");
    if (deleteDataBtn) {
      deleteDataBtn.addEventListener("click", requestDataDeletion);
    }

    // --- Wire Contact Settings Tab Buttons ---
    wireContactSettingsButtons(); // Wire the contact settings buttons
    loadContactSettingsIntoForm(); // Load initial values into the form when the page loads (optional, can load only when tab is switched)

    // --- Wire Activity History Tab Buttons ---
    wireActivityHistoryButtons(); // Wire the activity history button
    renderActivityHistory(); // Load and display the history when the page loads (optional, can load only when tab is switched)

    // --- Wire Password Change Tab Buttons ---
    wirePasswordChangeButtons(); // Wire the password change buttons

    // --- Wire Payment Method Tab Buttons ---
    wirePaymentMethodButtons(); // Wire the payment method buttons and select
    loadPrimaryPaymentSelection(); // Load initial saved selection and details into the form when the page loads (optional, can load only when tab is switched)

    // --- Wire Transaction History Tab ---
    renderTransactionHistory(); // Load and display the history when the page loads (optional, can load only when tab is switched)

    // --- Wire Promo Code Tab Buttons ---
    wirePromoCodeButtons(); // Wire the promo code buttons
    displayAppliedPromo(); // Load and display the applied promo code (if any) when the page loads (optional, can load only when tab is switched)

    // --- Wire Report Issue Tab Buttons ---
    wireReportIssueButtons(); // Wire the report issue buttons
  } // End of init function

  // --- New Functions for Settings Actions ---

  function openPrivacySetting(settingType) {
    // Example: Navigate to a specific privacy setting page or show an alert
    let message = `Membuka pengaturan ${settingType} di Privasi & Keamanan.`;
    switch (settingType) {
      case "data":
        // message = TRANSLATIONS[getStoredLanguage()]['alert-privacy-data-opened'] || "Pengaturan Data Pribadi dibuka.";
        switchTab("privacyData"); // Switch to the new privacy data tab
        return; // Exit after switching tab
      case "contacts":
        // message = TRANSLATIONS[getStoredLanguage()]['alert-privacy-contacts-opened'] || "Pengaturan Kontak dibuka.";
        switchTab("contactSettings"); // Switch to the new contact settings tab
        return; // Exit after switching tab
      case "history":
        // message = TRANSLATIONS[getStoredLanguage()]['alert-privacy-history-opened'] || "Pengaturan Riwayat Aktivitas dibuka.";
        switchTab("activityHistory"); // Switch to the new activity history tab
        return; // Exit after switching tab
      case "password":
        // message = TRANSLATIONS[getStoredLanguage()]['alert-privacy-password-opened'] || "Formulir Ubah Kata Sandi dibuka.";
        switchTab("changePassword"); // Switch to the new password change tab
        // Example: Show a prompt for current password
        // const currentPassword = prompt(TRANSLATIONS[getStoredLanguage()]['prompt-current-password'] || "Masukkan kata sandi saat ini:");
        // if (currentPassword) {
        //     const newPassword = prompt(TRANSLATIONS[getStoredLanguage()]['prompt-new-password'] || "Masukkan kata sandi baru:");
        //     if (newPassword) {
        //         // Here you would normally send the data to a server
        //         alert(TRANSLATIONS[getStoredLanguage()]['alert-password-changed'] || "Kata sandi berhasil diubah!");
        //     }
        // }
        return; // Exit after handling password change prompt
      default:
        message =
          TRANSLATIONS[getStoredLanguage()]["alert-privacy-setting-opened"] ||
          `Membuka pengaturan ${settingType} di Privasi & Keamanan.`;
    }
    alert(message);
  }

  function openPaymentSetting(settingType) {
    let message = `Membuka pengaturan ${settingType} di Pembayaran.`;
    switch (settingType) {
      case "method":
        // message = TRANSLATIONS[getStoredLanguage()]['alert-payment-method-opened'] || "Pengaturan Metode Pembayaran dibuka.";
        switchTab("paymentMethod"); // Switch to the new payment method tab
        return; // Exit after switching tab
      case "history":
        // message = TRANSLATIONS[getStoredLanguage()]['alert-payment-history-opened'] || "Pengaturan Riwayat Transaksi dibuka.";
        switchTab("transactionHistory"); // Switch to the new transaction history tab
        return; // Exit after switching tab
      case "promo":
        // message = TRANSLATIONS[getStoredLanguage()]['alert-payment-promo-opened'] || "Pengaturan Promo & Kode dibuka.";
        // Example: Show a prompt for promo code
        // const promoCode = prompt(TRANSLATIONS[getStoredLanguage()]['prompt-enter-promo'] || "Masukkan kode promo:");
        // if (promoCode) {
        //     alert(TRANSLATIONS[getStoredLanguage()]['alert-promo-applied'] || `Kode promo "${promoCode}" telah diterapkan!`);
        // }
        switchTab("promoCode"); // Switch to the new promo code tab
        return; // Exit after switching tab
      default:
        message =
          TRANSLATIONS[getStoredLanguage()]["alert-payment-setting-opened"] ||
          `Membuka pengaturan ${settingType} di Pembayaran.`;
    }
    alert(message);
  }

  function openAboutSetting(settingType) {
    let message = `Membuka ${settingType} di Tentang Aplikasi.`;
    switch (settingType) {
      case "privacy":
        // message = TRANSLATIONS[getStoredLanguage()]['alert-about-privacy-opened'] || "Kebijakan Privasi dibuka.";
        switchTab("privacyPolicy"); // Switch to the new privacy policy tab
        return; // Exit after switching tab
      case "terms":
        // message = TRANSLATIONS[getStoredLanguage()]['alert-about-terms-opened'] || "Syarat & Ketentuan dibuka.";
        switchTab("termsAndConditions"); // Switch to the new terms and conditions tab
        return; // Exit after switching tab
      case "contact":
        // message = TRANSLATIONS[getStoredLanguage()]['alert-about-contact-opened'] || "Kontak Pengembang dibuka.";
        switchTab("developerContact"); // Switch to the new developer contact tab
        return; // Exit after switching tab
      default:
        message =
          TRANSLATIONS[getStoredLanguage()]["alert-about-setting-opened"] ||
          `Membuka ${settingType} di Tentang Aplikasi.`;
    }
    alert(message);
  }

  function openHelpSetting(settingType) {
    let message = `Membuka ${settingType} di Bantuan & Dukungan.`;
    switch (settingType) {
      case "center":
        message =
          TRANSLATIONS[getStoredLanguage()]["alert-help-center-opened"] ||
          "Pusat Bantuan dibuka.";
        // window.open('https://your-help-center-url.com', '_blank');
        break;
      case "contact":
        message =
          TRANSLATIONS[getStoredLanguage()]["alert-help-contact-opened"] ||
          "Hubungi Kami dibuka.";
        // window.location.href = 'mailto:support@sopera.id';
        break;
      case "report":
        // message = TRANSLATIONS[getStoredLanguage()]['alert-help-report-opened'] || "Laporan Masalah dibuka.";
        switchTab("reportIssue"); // Switch to the new report issue tab
        // Example: Show a report form
        // const issueDescription = prompt(TRANSLATIONS[getStoredLanguage()]['prompt-report-issue'] || "Jelaskan masalah yang Anda alami:");
        // if (issueDescription) {
        //     alert(TRANSLATIONS[getStoredLanguage()]['alert-issue-reported'] || "Terima kasih, laporan Anda telah dikirim.");
        // }
        return; // Exit after handling report prompt
      default:
        message =
          TRANSLATIONS[getStoredLanguage()]["alert-help-setting-opened"] ||
          `Membuka ${settingType} di Bantuan & Dukungan.`;
    }
    alert(message);
  }

  function handleLogout() {
    const confirmLogout = confirm(
      TRANSLATIONS[getStoredLanguage()]["confirm-logout"] ||
        "Apakah Anda yakin ingin keluar?"
    );
    if (confirmLogout) {
      // Perform logout actions (e.g., clear tokens, reset state)
      // For this example, we'll just clear profile data
      localStorage.removeItem(PROFILE_KEY);
      // Reset profile UI
      applyProfileToDOM(); // This will load defaults
      // Navigate back to library or show cover screen
      switchTab("library");
      alert(
        TRANSLATIONS[getStoredLanguage()]["alert-logged-out"] ||
          "Anda telah keluar."
      );
    }
  }

  // --- NEW: Privacy Data Functions ---

  function requestDataDeletion() {
    const confirmDelete = confirm(
      TRANSLATIONS[getStoredLanguage()]["confirm-data-deletion"] ||
        "Anda yakin ingin menghapus semua data pribadi Anda? Tindakan ini tidak dapat dibatalkan."
    );
    if (confirmDelete) {
      // Simulate data deletion process
      // In a real application, you would send a request to your backend here.
      // For this example, we'll just clear the profile data.
      localStorage.removeItem(PROFILE_KEY);
      // Reset profile UI
      applyProfileToDOM(); // This will load defaults
      // Navigate back to accounts or show a message
      switchTab("accounts");
      alert(
        TRANSLATIONS[getStoredLanguage()]["alert-data-deletion-requested"] ||
          "Permintaan penghapusan data Anda telah dikirim. Data akan dihapus dalam beberapa hari ke depan."
      );
    }
  }

  // --- NEW: Contact Settings Functions ---

  // Key for storing contact settings
  const CONTACT_SETTINGS_KEY = "sopera:contact_settings";

  // Default contact settings
  const DEFAULT_CONTACT_SETTINGS = {
    email: "",
    phone: "",
    promoEmail: false,
    pushNotif: true,
    sms: false,
  };

  // Load contact settings from localStorage
  function loadContactSettings() {
    const raw = localStorage.getItem(CONTACT_SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_CONTACT_SETTINGS }; // Return a copy of defaults

    try {
      const stored = JSON.parse(raw);
      // Merge with defaults to ensure all keys exist
      return { ...DEFAULT_CONTACT_SETTINGS, ...stored };
    } catch (e) {
      console.warn("Failed to load contact settings, using defaults:", e);
      return { ...DEFAULT_CONTACT_SETTINGS };
    }
  }

  // Save contact settings to localStorage
  function saveContactSettings(settings) {
    try {
      localStorage.setItem(CONTACT_SETTINGS_KEY, JSON.stringify(settings));
      return true;
    } catch (e) {
      console.error("Failed to save contact settings:", e);
      return false;
    }
  }

  // Load and populate the contact settings form
  function loadContactSettingsIntoForm() {
    const settings = loadContactSettings();
    const emailInput = document.getElementById("contactEmailInput");
    const phoneInput = document.getElementById("contactPhoneInput");
    const promoEmailToggle = document.getElementById("promoEmailToggle");
    const pushNotifToggle = document.getElementById("pushNotifToggle");
    const smsToggle = document.getElementById("smsToggle");

    if (emailInput) emailInput.value = settings.email;
    if (phoneInput) phoneInput.value = settings.phone;
    if (promoEmailToggle) promoEmailToggle.checked = settings.promoEmail;
    if (pushNotifToggle) pushNotifToggle.checked = settings.pushNotif;
    if (smsToggle) smsToggle.checked = settings.sms;
  }

  // Save the form data back to storage
  function saveContactSettingsFromForm() {
    const emailInput = document.getElementById("contactEmailInput");
    const phoneInput = document.getElementById("contactPhoneInput");
    const promoEmailToggle = document.getElementById("promoEmailToggle");
    const pushNotifToggle = document.getElementById("pushNotifToggle");
    const smsToggle = document.getElementById("smsToggle");

    if (
      !emailInput ||
      !phoneInput ||
      !promoEmailToggle ||
      !pushNotifToggle ||
      !smsToggle
    ) {
      console.error("One or more contact settings form elements not found.");
      return false;
    }

    // Basic validation for email
    const emailValue = emailInput.value.trim();
    if (emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.["alert-email-invalid"] ||
          "Masukkan email yang valid."
      );
      emailInput.focus();
      return false;
    }

    const newSettings = {
      email: emailValue,
      phone: phoneInput.value.trim(), // You might want more specific validation for phone numbers
      promoEmail: promoEmailToggle.checked,
      pushNotif: pushNotifToggle.checked,
      sms: smsToggle.checked,
    };

    return saveContactSettings(newSettings);
  }

  // Handle Save button click
  function saveContactSettingsHandler() {
    const success = saveContactSettingsFromForm();
    if (success) {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.["alert-contact-settings-saved"] ||
          "Pengaturan kontak berhasil disimpan."
      );
      // Optionally, update the main profile display if email changed
      // applyProfileToDOM(); // This might overwrite other profile data if not handled carefully
      switchTab("privacy"); // Return to the privacy tab after saving
    } else {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.[
          "alert-contact-settings-save-failed"
        ] || "Gagal menyimpan pengaturan kontak."
      );
    }
  }

  // Handle Cancel button click
  function cancelContactSettingsHandler() {
    // Optionally, confirm discard changes
    // const confirmCancel = confirm(TRANSLATIONS[getStoredLanguage()]?.['confirm-cancel-contact-settings'] || "Apakah Anda yakin ingin membatalkan perubahan?");
    // if (confirmCancel) {
    loadContactSettingsIntoForm(); // Reload current saved settings into form
    switchTab("privacy"); // Return to the privacy tab
    // }
  }

  // Wire the Save and Cancel buttons for the Contact Settings tab
  // This should be done inside the init() function
  function wireContactSettingsButtons() {
    const saveBtn = document.getElementById("saveContactSettingsBtn");
    const cancelBtn = document.getElementById("cancelContactSettingsBtn");

    if (saveBtn) {
      // Remove old listener if it exists
      saveBtn.replaceWith(saveBtn.cloneNode(true));
      const newSaveBtn = document.getElementById("saveContactSettingsBtn");
      newSaveBtn.addEventListener("click", saveContactSettingsHandler);
    }

    if (cancelBtn) {
      // Remove old listener if it exists
      cancelBtn.replaceWith(cancelBtn.cloneNode(true));
      const newCancelBtn = document.getElementById("cancelContactSettingsBtn");
      newCancelBtn.addEventListener("click", cancelContactSettingsHandler);
    }
  }

  // --- NEW: Activity History Functions ---

  // Key for storing activity history
  const ACTIVITY_HISTORY_KEY = "sopera:activity_history";

  // Default activity history structure
  const DEFAULT_ACTIVITY_HISTORY = [
    {
      id: "act_001",
      title: 'Menonton "Cinta di Musim Hujan"',
      time: "1 jam yang lalu",
      timestamp: Date.now() - 3600000, // 1 hour ago
    },
    {
      id: "act_002",
      title: 'Mengomentari "Momen Spontan"',
      time: "2 jam yang lalu",
      timestamp: Date.now() - 7200000, // 2 hours ago
    },
    {
      id: "act_003",
      title: 'Menonton "Hati yang Terluka"',
      time: "Kemarin",
      timestamp: Date.now() - 86400000, // 1 day ago
    },
    {
      id: "act_004",
      title: 'Mencari "Horor"',
      time: "2 hari yang lalu",
      timestamp: Date.now() - 172800000, // 2 days ago
    },
  ];

  // Load activity history from localStorage
  function loadActivityHistory() {
    const raw = localStorage.getItem(ACTIVITY_HISTORY_KEY);
    if (!raw) return [...DEFAULT_ACTIVITY_HISTORY]; // Return a copy of defaults

    try {
      const stored = JSON.parse(raw);
      // Ensure stored data is an array
      if (Array.isArray(stored)) {
        return stored;
      } else {
        console.warn("Activity history data is not an array, using defaults.");
        return [...DEFAULT_ACTIVITY_HISTORY];
      }
    } catch (e) {
      console.warn("Failed to load activity history, using defaults:", e);
      return [...DEFAULT_ACTIVITY_HISTORY];
    }
  }

  // Save activity history to localStorage
  function saveActivityHistory(history) {
    try {
      localStorage.setItem(ACTIVITY_HISTORY_KEY, JSON.stringify(history));
      return true;
    } catch (e) {
      console.error("Failed to save activity history:", e);
      return false;
    }
  }

  // Delete all activity history
  function deleteActivityHistory() {
    const confirmDelete = confirm(
      TRANSLATIONS[getStoredLanguage()]?.["confirm-delete-activity-history"] ||
        "Anda yakin ingin menghapus semua riwayat aktivitas Anda?"
    );
    if (confirmDelete) {
      // Clear the history array
      const emptyHistory = [];
      const success = saveActivityHistory(emptyHistory);
      if (success) {
        // Reload the display
        renderActivityHistory();
        alert(
          TRANSLATIONS[getStoredLanguage()]?.[
            "alert-activity-history-deleted"
          ] || "Riwayat aktivitas berhasil dihapus."
        );
      } else {
        alert(
          TRANSLATIONS[getStoredLanguage()]?.[
            "alert-activity-history-delete-failed"
          ] || "Gagal menghapus riwayat aktivitas."
        );
      }
    }
  }

  // Render the activity history list into the container
  function renderActivityHistory() {
    const history = loadActivityHistory();
    const container = document.getElementById("activityListContainer");

    if (!container) {
      console.error("Activity list container not found.");
      return;
    }

    if (history.length === 0) {
      container.innerHTML = `<div class="activity-item"><div class="activity-title">${
        TRANSLATIONS[getStoredLanguage()]?.["activity-history-empty"] ||
        "Tidak ada aktivitas ditemukan."
      }</div></div>`;
      return;
    }

    // Sort history by timestamp (newest first)
    const sortedHistory = history.sort((a, b) => b.timestamp - a.timestamp);

    container.innerHTML = sortedHistory
      .map(
        (activity) => `
          <div class="activity-item">
            <div class="activity-title">${escapeHtml(activity.title)}</div>
            <div class="activity-time">${escapeHtml(activity.time)}</div>
          </div>
        `
      )
      .join("");
  }

  // Wire the Delete History button
  // This should be done inside the init() function
  function wireActivityHistoryButtons() {
    const deleteBtn = document.getElementById("deleteActivityHistoryBtn");

    if (deleteBtn) {
      // Remove old listener if it exists
      deleteBtn.replaceWith(deleteBtn.cloneNode(true));
      const newDeleteBtn = document.getElementById("deleteActivityHistoryBtn");
      newDeleteBtn.addEventListener("click", deleteActivityHistory);
    }
  }

  // --- NEW: Password Change Functions ---

  // Function to handle password change form submission
  function changePassword() {
    const currentPasswordInput = document.getElementById(
      "currentPasswordInput"
    );
    const newPasswordInput = document.getElementById("newPasswordInput");
    const confirmNewPasswordInput = document.getElementById(
      "confirmNewPasswordInput"
    );

    if (
      !currentPasswordInput ||
      !newPasswordInput ||
      !confirmNewPasswordInput
    ) {
      console.error("One or more password change form elements not found.");
      alert(
        TRANSLATIONS[getStoredLanguage()]?.["alert-password-change-failed"] ||
          "Gagal mengubah kata sandi: elemen formulir tidak ditemukan."
      );
      return;
    }

    const currentPassword = currentPasswordInput.value.trim();
    const newPassword = newPasswordInput.value.trim();
    const confirmNewPassword = confirmNewPasswordInput.value.trim();

    // Basic validation
    if (!currentPassword) {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.[
          "alert-current-password-required"
        ] || "Masukkan kata sandi saat ini."
      );
      currentPasswordInput.focus();
      return;
    }
    if (!newPassword) {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.["alert-new-password-required"] ||
          "Masukkan kata sandi baru."
      );
      newPasswordInput.focus();
      return;
    }
    if (newPassword.length < 8) {
      // Example: minimum length
      alert(
        TRANSLATIONS[getStoredLanguage()]?.["alert-new-password-too-short"] ||
          "Kata sandi baru harus memiliki setidaknya 8 karakter."
      );
      newPasswordInput.focus();
      return;
    }
    if (newPassword !== confirmNewPassword) {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.["alert-passwords-do-not-match"] ||
          "Kata sandi baru dan konfirmasi kata sandi tidak cocok."
      );
      confirmNewPasswordInput.focus();
      return;
    }

    // Simulate password verification and change
    // In a real application, you would send these to a server for verification.
    // For this example, we'll just show a success message.
    // You might compare `currentPassword` to a stored hash here if you were storing it locally (which is not recommended).
    // For demo purposes, assume current password is always "oldpass".
    const DEMO_CURRENT_PASSWORD = "oldpass"; // This is just for demonstration!

    if (currentPassword !== DEMO_CURRENT_PASSWORD) {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.[
          "alert-current-password-incorrect"
        ] || "Kata sandi saat ini salah."
      );
      currentPasswordInput.focus();
      return;
    }

    // Passwords match, current password is correct (in demo)
    // Here you would normally send the new password to your backend for updating.
    // Reset form fields
    currentPasswordInput.value = "";
    newPasswordInput.value = "";
    confirmNewPasswordInput.value = "";

    alert(
      TRANSLATIONS[getStoredLanguage()]?.["alert-password-changed"] ||
        "Kata sandi berhasil diubah."
    );
    switchTab("privacy"); // Return to the privacy tab after changing password
  }

  // Function to handle cancel button click
  function cancelPasswordChange() {
    // Optionally, confirm discard changes
    // const confirmCancel = confirm(TRANSLATIONS[getStoredLanguage()]?.['confirm-cancel-password-change'] || "Apakah Anda yakin ingin membatalkan perubahan kata sandi?");
    // if (confirmCancel) {
    // Reset form fields
    const currentPasswordInput = document.getElementById(
      "currentPasswordInput"
    );
    const newPasswordInput = document.getElementById("newPasswordInput");
    const confirmNewPasswordInput = document.getElementById(
      "confirmNewPasswordInput"
    );
    if (currentPasswordInput) currentPasswordInput.value = "";
    if (newPasswordInput) newPasswordInput.value = "";
    if (confirmNewPasswordInput) confirmNewPasswordInput.value = "";

    switchTab("privacy"); // Return to the privacy tab
    // }
  }

  // Wire the Save and Cancel buttons for the Password Change tab
  // This should be done inside the init() function
  function wirePasswordChangeButtons() {
    const saveBtn = document.getElementById("savePasswordBtn");
    const cancelBtn = document.getElementById("cancelPasswordBtn");

    if (saveBtn) {
      // Remove old listener if it exists
      saveBtn.replaceWith(saveBtn.cloneNode(true));
      const newSaveBtn = document.getElementById("savePasswordBtn");
      newSaveBtn.addEventListener("click", changePassword);
    }

    if (cancelBtn) {
      // Remove old listener if it exists
      cancelBtn.replaceWith(cancelBtn.cloneNode(true));
      const newCancelBtn = document.getElementById("cancelPasswordBtn");
      newCancelBtn.addEventListener("click", cancelPasswordChange);
    }
  }

  // --- NEW: Payment Method Functions ---

  // Key for storing payment method
  const PAYMENT_METHOD_KEY = "sopera:payment_method";

  // Default payment method structure
  const DEFAULT_PAYMENT_METHOD = {
    type: "", // e.g., "card", "gopay", "dana", "ovo", "bank"
    details: {}, // e.g., { number: "", expiry: "", name: "" } for card
  };

  // Load payment method from localStorage
  function loadPaymentMethod() {
    const raw = localStorage.getItem(PAYMENT_METHOD_KEY);
    if (!raw) return { ...DEFAULT_PAYMENT_METHOD }; // Return a copy of defaults

    try {
      const stored = JSON.parse(raw);
      // Merge with defaults to ensure all keys exist
      return { ...DEFAULT_PAYMENT_METHOD, ...stored };
    } catch (e) {
      console.warn("Failed to load payment method, using defaults:", e);
      return { ...DEFAULT_PAYMENT_METHOD };
    }
  }

  // Save payment method to localStorage
  function savePaymentMethod(method) {
    try {
      localStorage.setItem(PAYMENT_METHOD_KEY, JSON.stringify(method));
      return true;
    } catch (e) {
      console.error("Failed to save payment method:", e);
      return false;
    }
  }

  // Update the payment details form based on the selected type
  function updatePaymentDetailsForm() {
    const selectElement = document.getElementById("primaryPaymentSelect");
    const container = document.getElementById("paymentDetailsContainer");
    if (!selectElement || !container) {
      console.error("Payment method select or container not found.");
      return;
    }

    const selectedType = selectElement.value;
    let formHTML = "";

    if (selectedType === "card") {
      formHTML = `
          <div class="setting-item">
            <div class="setting-label">Nomor Kartu</div>
            <input type="text" class="comment-input" id="cardNumberInput" placeholder="1234 5678 9012 3456" maxlength="19" />
          </div>
          <div class="setting-item">
            <div class="setting-label">Nama pada Kartu</div>
            <input type="text" class="comment-input" id="cardNameInput" placeholder="Nama Lengkap" />
          </div>
          <div class="setting-item">
            <div class="setting-label">Tanggal Kadaluarsa (MM/YY)</div>
            <input type="text" class="comment-input" id="cardExpiryInput" placeholder="MM/YY" maxlength="5" />
          </div>
          <div class="setting-item">
            <div class="setting-label">CVV</div>
            <input type="text" class="comment-input" id="cardCvvInput" placeholder="123" maxlength="4" />
          </div>
        `;
    } else if (
      selectedType === "gopay" ||
      selectedType === "dana" ||
      selectedType === "ovo"
    ) {
      formHTML = `
          <div class="setting-item">
            <div class="setting-label">Nomor Akun ${selectedType.toUpperCase()}</div>
            <input type="text" class="comment-input" id="walletNumberInput" placeholder="Nomor HP atau Akun" />
          </div>
        `;
    } else if (selectedType === "bank") {
      formHTML = `
          <div class="setting-item">
            <div class="setting-label">Nama Bank</div>
            <select class="setting-control" id="bankNameSelect">
              <option value="">Pilih Bank</option>
              <option value="bca">BCA</option>
              <option value="bni">BNI</option>
              <option value="bri">BRI</option>
              <option value="mandiri">Mandiri</option>
            </select>
          </div>
          <div class="setting-item">
            <div class="setting-label">Nomor Rekening</div>
            <input type="text" class="comment-input" id="bankAccountNumberInput" placeholder="Nomor Rekening" />
          </div>
          <div class="setting-item">
            <div class="setting-label">Nama Pemilik Rekening</div>
            <input type="text" class="comment-input" id="bankAccountNameInput" placeholder="Nama Lengkap" />
          </div>
        `;
    }

    container.innerHTML = formHTML;
    container.style.display = selectedType ? "block" : "none";

    // Load saved details into the newly created fields (if any)
    loadPaymentDetailsIntoForm(selectedType);
  }

  // Load saved details into the specific form fields for the selected type
  function loadPaymentDetailsIntoForm(selectedType) {
    const savedMethod = loadPaymentMethod();
    if (savedMethod.type !== selectedType) {
      // If the saved type is different, clear the form fields
      if (selectedType === "card") {
        document.getElementById("cardNumberInput")?.setAttribute("value", "");
        document.getElementById("cardNameInput")?.setAttribute("value", "");
        document.getElementById("cardExpiryInput")?.setAttribute("value", "");
        document.getElementById("cardCvvInput")?.setAttribute("value", "");
      } else if (
        selectedType === "gopay" ||
        selectedType === "dana" ||
        selectedType === "ovo"
      ) {
        document.getElementById("walletNumberInput")?.setAttribute("value", "");
      } else if (selectedType === "bank") {
        const _bankSel = document.getElementById("bankNameSelect");
        if (_bankSel) _bankSel.value = "";
        document
          .getElementById("bankAccountNumberInput")
          ?.setAttribute("value", "");
        document
          .getElementById("bankAccountNameInput")
          ?.setAttribute("value", "");
      }
      return;
    }

    const details = savedMethod.details || {};
    if (selectedType === "card") {
      document
        .getElementById("cardNumberInput")
        ?.setAttribute("value", details.number || "");
      document
        .getElementById("cardNameInput")
        ?.setAttribute("value", details.name || "");
      document
        .getElementById("cardExpiryInput")
        ?.setAttribute("value", details.expiry || "");
      document
        .getElementById("cardCvvInput")
        ?.setAttribute("value", details.cvv || "");
    } else if (
      selectedType === "gopay" ||
      selectedType === "dana" ||
      selectedType === "ovo"
    ) {
      document
        .getElementById("walletNumberInput")
        ?.setAttribute("value", details.number || "");
    } else if (selectedType === "bank") {
      const _bankSel2 = document.getElementById("bankNameSelect");
      if (_bankSel2) _bankSel2.value = details.bank || "";
      document
        .getElementById("bankAccountNumberInput")
        ?.setAttribute("value", details.accountNumber || "");
      document
        .getElementById("bankAccountNameInput")
        ?.setAttribute("value", details.accountName || "");
    }
  }

  // Load the primary payment method selection
  function loadPrimaryPaymentSelection() {
    const savedMethod = loadPaymentMethod();
    const selectElement = document.getElementById("primaryPaymentSelect");
    if (selectElement) {
      selectElement.value = savedMethod.type;
      // Update the details form based on the loaded selection
      updatePaymentDetailsForm();
    }
  }

  // Get details from the currently visible form fields
  function getPaymentDetailsFromForm(selectedType) {
    const details = {};
    if (selectedType === "card") {
      const number =
        document.getElementById("cardNumberInput")?.value.trim() || "";
      const name = document.getElementById("cardNameInput")?.value.trim() || "";
      const expiry =
        document.getElementById("cardExpiryInput")?.value.trim() || "";
      const cvv = document.getElementById("cardCvvInput")?.value.trim() || "";
      details.number = number;
      details.name = name;
      details.expiry = expiry;
      details.cvv = cvv;
    } else if (
      selectedType === "gopay" ||
      selectedType === "dana" ||
      selectedType === "ovo"
    ) {
      const number =
        document.getElementById("walletNumberInput")?.value.trim() || "";
      details.number = number;
    } else if (selectedType === "bank") {
      const bank = document.getElementById("bankNameSelect")?.value || "";
      const accountNumber =
        document.getElementById("bankAccountNumberInput")?.value.trim() || "";
      const accountName =
        document.getElementById("bankAccountNameInput")?.value.trim() || "";
      details.bank = bank;
      details.accountNumber = accountNumber;
      details.accountName = accountName;
    }
    return details;
  }

  // Handle Save button click
  function savePaymentMethodHandler() {
    const selectElement = document.getElementById("primaryPaymentSelect");
    if (!selectElement) {
      console.error("Payment method select element not found.");
      return;
    }

    const selectedType = selectElement.value;

    if (!selectedType) {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.["alert-payment-method-required"] ||
          "Silakan pilih metode pembayaran."
      );
      selectElement.focus();
      return;
    }

    // Basic validation could be added here for specific fields
    // For example, validate card number format if type is 'card', etc.

    const details = getPaymentDetailsFromForm(selectedType);

    const newPaymentMethod = {
      type: selectedType,
      details: details,
    };

    const success = savePaymentMethod(newPaymentMethod);
    if (success) {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.["alert-payment-method-saved"] ||
          "Metode pembayaran berhasil disimpan."
      );
      switchTab("payment"); // Return to the main payment tab after saving
    } else {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.[
          "alert-payment-method-save-failed"
        ] || "Gagal menyimpan metode pembayaran."
      );
    }
  }

  // Handle Cancel button click
  function cancelPaymentMethodHandler() {
    // Optionally, confirm discard changes
    // const confirmCancel = confirm(TRANSLATIONS[getStoredLanguage()]?.['confirm-cancel-payment-method'] || "Apakah Anda yakin ingin membatalkan perubahan?");
    // if (confirmCancel) {
    loadPrimaryPaymentSelection(); // Reload the saved selection and details into the form
    switchTab("payment"); // Return to the main payment tab
    // }
  }

  // Wire the Save, Cancel buttons and the payment method select dropdown
  // This should be done inside the init() function
  function wirePaymentMethodButtons() {
    const saveBtn = document.getElementById("savePaymentMethodBtn");
    const cancelBtn = document.getElementById("cancelPaymentMethodBtn");
    const selectElement = document.getElementById("primaryPaymentSelect");

    if (saveBtn) {
      // Remove old listener if it exists
      saveBtn.replaceWith(saveBtn.cloneNode(true));
      const newSaveBtn = document.getElementById("savePaymentMethodBtn");
      newSaveBtn.addEventListener("click", savePaymentMethodHandler);
    }

    if (cancelBtn) {
      // Remove old listener if it exists
      cancelBtn.replaceWith(cancelBtn.cloneNode(true));
      const newCancelBtn = document.getElementById("cancelPaymentMethodBtn");
      newCancelBtn.addEventListener("click", cancelPaymentMethodHandler);
    }

    if (selectElement) {
      // Remove old listener if it exists
      selectElement.replaceWith(selectElement.cloneNode(true));
      const newSelectElement = document.getElementById("primaryPaymentSelect");
      newSelectElement.addEventListener("change", updatePaymentDetailsForm);
    }
  }

  // --- NEW: Transaction History Functions ---

  // Key for storing transaction history
  const TRANSACTION_HISTORY_KEY = "sopera:transaction_history";

  // Default transaction history structure
  const DEFAULT_TRANSACTION_HISTORY = [
    {
      id: "txn_001",
      title: "Pembayaran Premium",
      amount: "Rp 59.000",
      date: "15 Nov 2025",
      status: "Berhasil",
    },
    {
      id: "txn_002",
      title: "Pembayaran Premium",
      amount: "Rp 59.000",
      date: "15 Okt 2025",
      status: "Berhasil",
    },
    {
      id: "txn_003",
      title: "Pembayaran Premium",
      amount: "Rp 59.000",
      date: "15 Sep 2025",
      status: "Berhasil",
    },
  ];

  // Load transaction history from localStorage
  function loadTransactionHistory() {
    const raw = localStorage.getItem(TRANSACTION_HISTORY_KEY);
    if (!raw) return [...DEFAULT_TRANSACTION_HISTORY]; // Return a copy of defaults

    try {
      const stored = JSON.parse(raw);
      // Ensure stored data is an array
      if (Array.isArray(stored)) {
        return stored;
      } else {
        console.warn(
          "Transaction history data is not an array, using defaults."
        );
        return [...DEFAULT_TRANSACTION_HISTORY];
      }
    } catch (e) {
      console.warn("Failed to load transaction history, using defaults:", e);
      return [...DEFAULT_TRANSACTION_HISTORY];
    }
  }

  // Save transaction history to localStorage
  function saveTransactionHistory(history) {
    try {
      localStorage.setItem(TRANSACTION_HISTORY_KEY, JSON.stringify(history));
      return true;
    } catch (e) {
      console.error("Failed to save transaction history:", e);
      return false;
    }
  }

  // Render the transaction history list into the container
  function renderTransactionHistory() {
    const history = loadTransactionHistory();
    const container = document.getElementById("transactionListContainer");

    if (!container) {
      console.error("Transaction list container not found.");
      return;
    }

    if (history.length === 0) {
      container.innerHTML = `<div class="transaction-item"><div class="transaction-title">${
        TRANSLATIONS[getStoredLanguage()]?.["transaction-history-empty"] ||
        "Tidak ada transaksi ditemukan."
      }</div></div>`;
      return;
    }

    // Sort history by date or timestamp if available (newest first)
    // For this example, we assume the date is in a format that sorts correctly when compared as strings (e.g., YYYY-MM-DD)
    // If date is DD MMM YYYY like in the example, sorting might require parsing
    // const sortedHistory = history.sort((a, b) => new Date(b.date) - new Date(a.date)); // Example with parsed dates

    container.innerHTML = history
      .map(
        (transaction) => `
          <div class="transaction-item">
            <div class="transaction-title">${escapeHtml(
              transaction.title
            )}</div>
            <div class="transaction-amount">${escapeHtml(
              transaction.amount
            )}</div>
            <div class="transaction-date">${escapeHtml(transaction.date)}</div>
            <div class="transaction-status ${transaction.status.toLowerCase()}">${escapeHtml(
          transaction.status
        )}</div>
          </div>
        `
      )
      .join("");
  }

  // --- NEW: Promo Code Functions ---

  // Key for storing applied promo code
  const APPLIED_PROMO_CODE_KEY = "sopera:applied_promo_code";

  // Default applied promo code structure (none applied)
  const DEFAULT_APPLIED_PROMO_CODE = null;

  // Load applied promo code from localStorage
  function loadAppliedPromo() {
    const raw = localStorage.getItem(APPLIED_PROMO_CODE_KEY);
    if (!raw) return DEFAULT_APPLIED_PROMO_CODE;

    try {
      const stored = JSON.parse(raw);
      // Ensure stored data has the expected structure
      if (stored && typeof stored === "object" && "code" in stored) {
        return stored;
      } else {
        console.warn("Applied promo code data is invalid, clearing.");
        localStorage.removeItem(APPLIED_PROMO_CODE_KEY);
        return DEFAULT_APPLIED_PROMO_CODE;
      }
    } catch (e) {
      console.warn("Failed to load applied promo code, clearing:", e);
      localStorage.removeItem(APPLIED_PROMO_CODE_KEY);
      return DEFAULT_APPLIED_PROMO_CODE;
    }
  }

  // Save applied promo code to localStorage
  function saveAppliedPromo(promo) {
    try {
      if (promo) {
        localStorage.setItem(APPLIED_PROMO_CODE_KEY, JSON.stringify(promo));
      } else {
        // If promo is null/undefined, remove the key
        localStorage.removeItem(APPLIED_PROMO_CODE_KEY);
      }
      return true;
    } catch (e) {
      console.error("Failed to save applied promo code:", e);
      return false;
    }
  }

  // Display the loaded/saved applied promo code details
  function displayAppliedPromo() {
    const promo = loadAppliedPromo();
    const container = document.getElementById("appliedPromoContainer");
    const codeDisplay = document.getElementById("appliedPromoCodeDisplay");
    const discountDisplay = document.getElementById(
      "appliedPromoDiscountDisplay"
    );
    const expiryDisplay = document.getElementById("appliedPromoExpiryDisplay");

    if (!container || !codeDisplay || !discountDisplay || !expiryDisplay) {
      console.error("One or more applied promo display elements not found.");
      return;
    }

    if (promo) {
      container.style.display = "block";
      codeDisplay.textContent = promo.code || "N/A";
      discountDisplay.textContent = promo.discount || "N/A";
      expiryDisplay.textContent = promo.expiry || "N/A";
    } else {
      container.style.display = "none";
      codeDisplay.textContent = "";
      discountDisplay.textContent = "";
      expiryDisplay.textContent = "";
    }
  }

  // Handle Apply button click
  function applyPromoCode() {
    const inputElement = document.getElementById("promoCodeInput");
    if (!inputElement) {
      console.error("Promo code input element not found.");
      alert(
        TRANSLATIONS[getStoredLanguage()]?.["alert-promo-code-input-missing"] ||
          "Input kode promo tidak ditemukan."
      );
      return;
    }

    const enteredCode = inputElement.value.trim();

    if (!enteredCode) {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.["alert-promo-code-required"] ||
          "Silakan masukkan kode promo."
      );
      inputElement.focus();
      return;
    }

    // Simulate promo code validation and application
    // In a real application, you would send this to a server for verification.
    // For this example, we'll use a simple demo code.
    const DEMO_VALID_CODE = "SALE10"; // Example: 10% off
    const DEMO_PROMO_DETAILS = {
      code: DEMO_VALID_CODE,
      discount: "10% off",
      expiry: "31 Dec 2025",
      // Add other relevant details if needed
    };

    if (enteredCode.toUpperCase() === DEMO_VALID_CODE.toUpperCase()) {
      const success = saveAppliedPromo(DEMO_PROMO_DETAILS);
      if (success) {
        alert(
          TRANSLATIONS[getStoredLanguage()]?.["alert-promo-code-applied"] ||
            `Kode promo "${DEMO_VALID_CODE}" telah diterapkan!`
        );
        clearPromoInput();
        displayAppliedPromo(); // Update the display
        // Optionally, update other UI elements to reflect the discount
      } else {
        alert(
          TRANSLATIONS[getStoredLanguage()]?.["alert-promo-code-save-failed"] ||
            "Gagal menyimpan kode promo yang diterapkan."
        );
      }
    } else {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.["alert-promo-code-invalid"] ||
          "Kode promo tidak valid."
      );
      inputElement.focus();
    }
  }

  // Handle Cancel button click
  function cancelPromoCode() {
    clearPromoInput();
    switchTab("payment"); // Return to the main payment tab
  }

  // Clear the promo code input field
  function clearPromoInput() {
    const inputElement = document.getElementById("promoCodeInput");
    if (inputElement) {
      inputElement.value = "";
    }
  }

  // Wire the Apply and Cancel buttons for the Promo Code tab
  // This should be done inside the init() function
  function wirePromoCodeButtons() {
    const applyBtn = document.getElementById("applyPromoCodeBtn");
    const cancelBtn = document.getElementById("cancelPromoCodeBtn");

    if (applyBtn) {
      // Remove old listener if it exists
      applyBtn.replaceWith(applyBtn.cloneNode(true));
      const newApplyBtn = document.getElementById("applyPromoCodeBtn");
      newApplyBtn.addEventListener("click", applyPromoCode);
    }

    if (cancelBtn) {
      // Remove old listener if it exists
      cancelBtn.replaceWith(cancelBtn.cloneNode(true));
      const newCancelBtn = document.getElementById("cancelPromoCodeBtn");
      newCancelBtn.addEventListener("click", cancelPromoCode);
    }
  }

  // --- NEW: Report Issue Functions ---

  // Handle Submit button click
  function submitIssue() {
    const categorySelect = document.getElementById("issueCategorySelect");
    const descriptionInput = document.getElementById("issueDescriptionInput");
    const stepsInput = document.getElementById("reproduceStepsInput");
    const screenshotInput = document.getElementById("issueScreenshotInput");

    if (!categorySelect || !descriptionInput) {
      console.error("One or more issue report form elements not found.");
      alert(
        TRANSLATIONS[getStoredLanguage()]?.[
          "alert-issue-report-missing-fields"
        ] || "Gagal mengirim laporan: elemen formulir tidak ditemukan."
      );
      return;
    }

    const category = categorySelect.value;
    const description = descriptionInput.value.trim();
    const steps = stepsInput ? stepsInput.value.trim() : "";

    if (!category) {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.[
          "alert-issue-report-category-required"
        ] || "Silakan pilih kategori masalah."
      );
      categorySelect.focus();
      return;
    }

    if (!description) {
      alert(
        TRANSLATIONS[getStoredLanguage()]?.[
          "alert-issue-report-description-required"
        ] || "Silakan jelaskan masalah Anda."
      );
      descriptionInput.focus();
      return;
    }

    // Simulate submitting the report
    // In a real application, you would collect the data and send it to a server.
    const reportData = {
      category: category,
      description: description,
      steps: steps,
      // Screenshot would be handled differently, potentially uploaded separately
      screenshot:
        screenshotInput && screenshotInput.files && screenshotInput.files[0]
          ? screenshotInput.files[0].name
          : null,
      timestamp: new Date().toISOString(), // Add timestamp
      userAgent: navigator.userAgent, // Add browser info (optional)
      // Add other relevant context like user ID, app version, etc.
    };

    console.log("Issue Report Submitted:", reportData); // Log the data for demonstration

    // Show success message
    alert(
      TRANSLATIONS[getStoredLanguage()]?.["alert-issue-report-submitted"] ||
        "Terima kasih, laporan Anda telah dikirim."
    );
    // Clear the form
    clearIssueForm();
    // Switch back to the Help & Support tab or another relevant tab
    switchTab("help");
  }

  // Handle Cancel button click
  function cancelIssue() {
    // Optionally, confirm discard changes
    // const confirmCancel = confirm(TRANSLATIONS[getStoredLanguage()]?.['confirm-cancel-issue-report'] || "Apakah Anda yakin ingin membatalkan laporan?");
    // if (confirmCancel) {
    clearIssueForm();
    switchTab("help");
    // }
  }

  // Clear the issue report form fields
  function clearIssueForm() {
    const categorySelect = document.getElementById("issueCategorySelect");
    const descriptionInput = document.getElementById("issueDescriptionInput");
    const stepsInput = document.getElementById("reproduceStepsInput");
    const screenshotInput = document.getElementById("issueScreenshotInput");

    if (categorySelect) categorySelect.value = "";
    if (descriptionInput) descriptionInput.value = "";
    if (stepsInput) stepsInput.value = "";
    if (screenshotInput) {
      screenshotInput.value = ""; // This clears the file selection
      // Note: You might want to clear the preview if one is implemented
    }
  }

  // Wire the Submit and Cancel buttons for the Report Issue tab
  // This should be done inside the init() function
  function wireReportIssueButtons() {
    const submitBtn = document.getElementById("submitIssueBtn");
    const cancelBtn = document.getElementById("cancelIssueBtn");

    if (submitBtn) {
      // Remove old listener if it exists
      submitBtn.replaceWith(submitBtn.cloneNode(true));
      const newSubmitBtn = document.getElementById("submitIssueBtn");
      newSubmitBtn.addEventListener("click", submitIssue);
    }

    if (cancelBtn) {
      // Remove old listener if it exists
      cancelBtn.replaceWith(cancelBtn.cloneNode(true));
      const newCancelBtn = document.getElementById("cancelIssueBtn");
      newCancelBtn.addEventListener("click", cancelIssue);
    }
  }

  // Populate movie rows
  function populateMovieRows() {
    const gradients = [
      "placeholder-gradient",
      "placeholder-gradient-2",
      "placeholder-gradient-3",
      "placeholder-gradient-4",
      "placeholder-gradient-5",
      "placeholder-gradient-6",
      "placeholder-gradient-7",
      "placeholder-gradient-8",
    ];
    function createMovieCard(movie, gradientIndex) {
      const src = movie.thumb
        ? movie.thumb
        : "https://placehold.co/720x1280.jpg";
      return `
                <div class="movie-card ${
                  gradients[gradientIndex % gradients.length]
                }" onclick="openVideoModal(${movie.id})">
                    <img src="${src}" alt="${escapeHtml(
        movie.title
      )}" class="movie-thumb" />
                    <div class="movie-card-overlay">${escapeHtml(
                      movie.title
                    )}</div>
                </div>
            `;
    }
    let gradientIndex = 0;
    const forYouRow = document.getElementById("forYouRow");
    const romanceRow = document.getElementById("romanceRow");
    const dramaRow = document.getElementById("dramaRow");
    const horrorRow = document.getElementById("horrorRow");
    const sliceRow = document.getElementById("sliceOfLifeRow");
    if (forYouRow)
      forYouRow.innerHTML = movieData.forYou
        .map((movie) => createMovieCard(movie, gradientIndex++))
        .join("");
    if (romanceRow)
      romanceRow.innerHTML = movieData.romance
        .map((movie) => createMovieCard(movie, gradientIndex++))
        .join("");
    if (dramaRow)
      dramaRow.innerHTML = movieData.drama
        .map((movie) => createMovieCard(movie, gradientIndex++))
        .join("");
    if (horrorRow)
      horrorRow.innerHTML = movieData.horror
        .map((movie) => createMovieCard(movie, gradientIndex++))
        .join("");
    if (sliceRow)
      sliceRow.innerHTML = movieData.sliceOfLife
        .map((movie) => createMovieCard(movie, gradientIndex++))
        .join("");
  }

  // Populate Short Form (use thumb if available) - Updated to show only numbers on like/comment buttons
  function populateShortForm() {
    const container = document.getElementById("shortFormContainer");
    const gradients = [
      "placeholder-gradient",
      "placeholder-gradient-2",
      "placeholder-gradient-3",
      "placeholder-gradient-4",
      "placeholder-gradient-5",
      "placeholder-gradient-6",
      "placeholder-gradient-7",
      "placeholder-gradient-8",
    ];
    if (!container) return;
    const currentLangForShort = getStoredLanguage(); // Use current language at render time
    container.innerHTML = shortFormData
      .map((item, index) => {
        const gradientClass = gradients[index % gradients.length];
        const thumbSrc = item.thumb || "https://placehold.co/720x1280.jpg";
        const videoSrc = item.video || `videos/short-${item.id}.mp4`;
        return `
          <div class="short-form-item ${gradientClass}" data-id="${item.id}">
            <div class="short-video">
              <video 
                src="${videoSrc}" 
                poster="${thumbSrc}" 
                class="short-video-element"
                muted
                playsinline
                preload="metadata"
                loop
              ></video>
              <img src="${thumbSrc}" alt="${escapeHtml(
          item.title
        )}" class="short-thumb" />
            </div>
            <div class="short-info">
              <div class="short-title">${escapeHtml(item.title)}</div>
              <div class="short-genre">${escapeHtml(item.genre)}</div>
            </div>
            <div class="short-actions" data-id="${item.id}">
              <div class="short-action-btn" data-action="like">
                <div class="short-action-icon">👍</div>
                <div class="short-action-label">12</div> <!-- Just the number -->
              </div>
              <div class="short-action-btn" data-action="comment">
                <div class="short-action-icon">💬</div>
                <div class="short-action-label">245</div> <!-- Just the number -->
              </div>
              <div class="short-action-btn" data-action="share">
                <div class="short-action-icon">🔗</div>
                <div class="short-action-label">${
                  TRANSLATIONS[currentLangForShort]["short-action-label-share"]
                }</div> <!-- Use translated label -->
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // Tab switching
  function switchTab(tab, element) {
    // remove active from bottom nav items
    document
      .querySelectorAll(".tab-item")
      .forEach((item) => item.classList.remove("active"));
    // if caller passed an element, mark it active (works for tab nav)
    if (element && element.classList) {
      element.classList.add("active");
    } else {
      // fallback: set first/second/third tab active for known primary tabs
      const tabs = document.querySelectorAll(".tab-item");
      if (tab === "library") tabs[0] && tabs[0].classList.add("active");
      else if (tab === "shortForm") tabs[1] && tabs[1].classList.add("active");
      else if (tab === "accounts") tabs[2] && tabs[2].classList.add("active");
    }
    // hide all possible sections (including new settings sub-tabs)
    const allIds = [
      "libraryTab",
      "shortFormTab",
      "accountsTab",
      "settingsTab",
      "privacyTab",
      "paymentTab",
      "aboutTab",
      "helpTab",
      "premiumTab",
      "searchResultsTab",
      "privacyDataTab", // Add this if you added the privacy data tab
      "contactSettingsTab", // Add this if you added the contact settings tab
      "activityHistoryTab", // Add this if you added the activity history tab
      "changePasswordTab", // Add this if you added the change password tab
      "paymentMethodTab", // Add this if you added the payment method tab
      "transactionHistoryTab", // Add this if you added the transaction history tab
      "promoCodeTab", // Add this if you added the promo code tab
      "privacyPolicyTab", // Add this if you added the privacy policy tab
      "termsAndConditionsTab", // Add this if you added the terms and conditions tab
      "developerContactTab", // Add this if you added the developer contact tab
      "reportIssueTab", // Add this if you added the report issue tab
      "profileEditScreen", // Add other non-tab sections if they exist
    ];
    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });
    // map logical names to element ids and show the requested one
    const map = {
      library: "libraryTab",
      shortForm: "shortFormTab",
      accounts: "accountsTab",
      settings: "settingsTab",
      privacy: "privacyTab",
      payment: "paymentTab",
      about: "aboutTab",
      help: "helpTab",
      premium: "premiumTab",
      searchResults: "searchResultsTab",
      privacyData: "privacyDataTab", // Add this if you added the privacy data tab
      contactSettings: "contactSettingsTab", // Add this if you added the contact settings tab
      activityHistory: "activityHistoryTab", // Add this if you added the activity history tab
      changePassword: "changePasswordTab", // Add this if you added the change password tab
      paymentMethod: "paymentMethodTab", // Add this if you added the payment method tab
      transactionHistory: "transactionHistoryTab", // Add this if you added the transaction history tab
      promoCode: "promoCodeTab", // Add this if you added the promo code tab
      privacyPolicy: "privacyPolicyTab", // Add this if you added the privacy policy tab
      termsAndConditions: "termsAndConditionsTab", // Add this if you added the terms and conditions tab
      developerContact: "developerContactTab", // Add this if you added the developer contact tab
      reportIssue: "reportIssueTab", // Add this if you added the report issue tab
    };
    const idToShow = map[tab];
    if (idToShow) {
      const el = document.getElementById(idToShow);
      if (el) el.style.display = "block";
    }
  }

  // Video modal functions - Updated to use translated labels
  function openVideoModal(videoId) {
    currentVideoId = videoId;
    const modal = document.getElementById("videoModal");
    modal && modal.classList.add("active");
    let item = null;
    for (const category in movieData) {
      const found = movieData[category].find((m) => m.id === videoId);
      if (found) {
        item = found;
        break;
      }
    }
    if (!item && typeof shortFormData !== "undefined") {
      item = shortFormData.find((s) => s.id === videoId) || null;
    }
    const titleEl = document.getElementById("modalTitle");
    const yearEl = document.getElementById("modalYear");
    const genreEl = document.getElementById("modalGenre");
    const durationEl = document.getElementById("modalDuration");
    const descEl = document.getElementById("modalDescription");
    const video = document.getElementById("modalVideo");
    const currentLangForModal = getStoredLanguage(); // Use current language at modal open time
    if (item) {
      if (titleEl) titleEl.textContent = item.title || "";
      if (yearEl)
        yearEl.innerHTML = `<span class="modal-meta-label">${
          TRANSLATIONS[currentLangForModal]["modal-label-year"]
        }</span> ${item.year || ""}`; // Use translated label
      if (genreEl)
        genreEl.innerHTML = `<span class="modal-meta-label">${
          TRANSLATIONS[currentLangForModal]["modal-label-genre"]
        }</span> ${item.genre || ""}`; // Use translated label
      if (durationEl)
        durationEl.innerHTML = `<span class="modal-meta-label">${
          TRANSLATIONS[currentLangForModal]["modal-label-duration"]
        }</span> ${item.duration || ""}`; // Use translated label
      if (descEl) {
        descEl.innerHTML = `<div class="modal-section-title">${
          TRANSLATIONS[currentLangForModal]["modal-label-description"]
        }</div><div class="modal-description-text">${
          item.description || ""
        }</div>`; // Use translated label
      }
      const src =
        item.video ||
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
      const poster = item.thumb || "";
      if (video) {
        // Set video attributes for TikTok-like behavior
        if (poster) video.setAttribute("poster", poster);
        video.src = src;
        video.muted = true;
        video.playsInline = true;
        video.preload = "metadata";
        video.loop = true;
        video.controls = false;
        video.load();
        // Use autoplay manager for consistent behavior
        autoplayManager.setVideo(video, videoId);
        video
          .play()
          .then(() => {
            console.log("Autoplay started successfully");
          })
          .catch((error) => {
            console.warn("Autoplay failed:", error.message);
            video.muted = true;
            video.controls = false;
          });
        // Toggle mute on video click
        video.addEventListener("click", () => {
          video.muted = !video.muted;
          video.setAttribute("data-muted", video.muted ? "true" : "false");
        });
      }
    } else {
      if (titleEl) titleEl.textContent = "";
      if (yearEl)
        yearEl.innerHTML = `<span class="modal-meta-label">${TRANSLATIONS[currentLangForModal]["modal-label-year"]}</span>`; // Use translated label
      if (genreEl)
        genreEl.innerHTML = `<span class="modal-meta-label">${TRANSLATIONS[currentLangForModal]["modal-label-genre"]}</span>`; // Use translated label
      if (durationEl)
        durationEl.innerHTML = `<span class="modal-meta-label">${TRANSLATIONS[currentLangForModal]["modal-label-duration"]}</span>`; // Use translated label
      if (descEl)
        descEl.innerHTML = `<div class="modal-section-title">${TRANSLATIONS[currentLangForModal]["modal-label-description"]}</div><div class="modal-description-text"></div>`; // Use translated label
      if (video) {
        video.pause();
        video.src = "";
        video.removeAttribute("poster");
      }
    }
    // Reset like/dislike states
    liked = false;
    disliked = false;
    const likeIcon = document.getElementById("likeIcon");
    const dislikeIcon = document.getElementById("dislikeIcon");
    if (likeIcon) likeIcon.style.opacity = "0.5";
    if (dislikeIcon) dislikeIcon.style.opacity = "0.5";
    // Reset comments
    comments = [];
    renderComments();
  }
  function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    modal && modal.classList.remove("active");
    const video = document.getElementById("modalVideo");
    if (video) {
      video.pause();
      video.src = "";
    }
    // Cleanup autoplay manager
    autoplayManager.cleanup();
  }
  function toggleLike() {
    liked = !liked;
    disliked = false;
    const likeIcon = document.getElementById("likeIcon");
    const dislikeIcon = document.getElementById("dislikeIcon");
    if (likeIcon) likeIcon.style.opacity = liked ? "1" : "0.5";
    if (dislikeIcon) dislikeIcon.style.opacity = "0.5";
  }
  function toggleDislike() {
    disliked = !disliked;
    liked = false;
    const likeIcon = document.getElementById("likeIcon");
    const dislikeIcon = document.getElementById("dislikeIcon");
    if (dislikeIcon) dislikeIcon.style.opacity = disliked ? "1" : "0.5";
    if (likeIcon) likeIcon.style.opacity = "0.5";
  }
  // Update shareVideo message
  function shareVideo() {
    const currentLangForShare = getStoredLanguage();
    if (navigator.share) {
      navigator.share({
        title: document.getElementById("modalTitle")?.textContent,
        text: TRANSLATIONS[currentLangForShare]["share-text-watch-on-sopera"],
        url: window.location.href,
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert(TRANSLATIONS[currentLangForShare]["alert-link-copied"]);
    } else {
      alert(TRANSLATIONS[currentLangForShare]["alert-share-not-supported"]);
    }
  }
  // Update comment time logic (addComment, renderComments)
  function addComment() {
    const currentLangForComments = getStoredLanguage();
    const input = document.getElementById("commentInput");
    const text = input ? input.value.trim() : "";
    if (text) {
      comments.push({
        author: "Pengguna",
        text: text,
        time: TRANSLATIONS[currentLangForComments]["comment-time-now"], // Use translated time
      });
      renderComments();
      if (input) input.value = "";
    }
  }
  // Update renderComments to use translated time and actions
  function renderComments() {
    const currentLangForComments = getStoredLanguage();
    const container = document.getElementById("commentsList");
    if (!container) return;
    container.innerHTML = comments
      .map(
        (comment) => `
            <div class="comment-item">
                <div class="comment-author">${comment.author}</div>
                <div class="comment-text">${comment.text}</div>
                <div class="comment-actions">
                    <span class="comment-action">${TRANSLATIONS[currentLangForComments]["comment-action-like"]}</span>
                    <span class="comment-action">${TRANSLATIONS[currentLangForComments]["comment-action-reply"]}</span>
                    <span>${comment.time}</span>
                </div>
            </div>
        `
      )
      .join("");
  }

  // Search helpers - Updated to use translated text
  function openSearch() {
    const panel = document.getElementById("searchPanel");
    const input = document.getElementById("searchInput");
    if (!panel || !input) return;
    panel.classList.remove("hidden");
    panel.setAttribute("aria-hidden", "false");
    input.value = "";
    input.focus();
    renderSearchResults([]); // clear
  }
  function closeSearch() {
    const panel = document.getElementById("searchPanel");
    if (!panel) return;
    panel.classList.add("hidden");
    panel.setAttribute("aria-hidden", "true");
  }
  function toggleSearch() {
    const panel = document.getElementById("searchPanel");
    if (!panel) return openSearch();
    if (panel.classList.contains("hidden")) openSearch();
    else closeSearch();
  }
  function performSearch(query) {
    const raw = (query || "").toString().trim();
    const q = raw.toLowerCase();
    lastSearchQuery = raw;
    if (!q) {
      lastSearchResults = [];
      renderSearchResults([]);
      return;
    }
    // search across all categories: only match when the exact substring `q`
    // appears inside any single field (title, genre, year, description, duration)
    const results = [];
    for (const category in movieData) {
      movieData[category].forEach((m) => {
        const fields = [(m.title || "").toLowerCase()];
        // only push if any single field contains the query substring `q`
        const match = fields.some((field) => field.includes(q));
        if (match) results.push(m);
      });
    }
    lastSearchResults = results;
    renderSearchResults(results);
  }
  // Update search results rendering to use translated text
  function renderSearchResults(results) {
    const currentLangForSearch = getStoredLanguage();
    const container = document.getElementById("searchResults");
    if (!container) return;
    if (!results || results.length === 0) {
      container.innerHTML = `<div class="search-empty" style="color:var(--muted);padding:12px">${TRANSLATIONS[currentLangForSearch]["search-empty"]}</div>`;
      return;
    }
    // show only up to 4 results in the panel
    const limit = 4;
    const shown = results.slice(0, limit);
    container.innerHTML = shown
      .map(
        (r) => `
      <div class="search-result" onclick="openVideoModal(${
        r.id
      }); closeSearch();">
        <div>
          <div class="search-result-title">${r.title}</div>
          <div class="search-result-meta">${r.genre} • ${r.year || ""} • ${
          r.duration || ""
        }</div>
        </div>
      </div>
    `
      )
      .join("");
    // if there are more than limit, show a "view more" button
    if (results.length > limit) {
      const moreBtn = document.createElement("button");
      moreBtn.className = "view-more-btn";
      moreBtn.textContent = TRANSLATIONS[currentLangForSearch]["view-more-btn"];
      moreBtn.addEventListener("click", () => {
        openFullSearchResults();
      });
      const wrapper = document.createElement("div");
      wrapper.style.padding = "12px 0";
      wrapper.appendChild(moreBtn);
      container.appendChild(wrapper);
    }
  }
  function openFullSearchResults() {
    // close the overlay first so the results tab is visible
    closeSearch();
    // populate the dedicated search results tab
    renderFullSearchResults(lastSearchQuery, lastSearchResults);
    // wait a moment for the panel to hide, then switch tab
    setTimeout(() => {
      switchTab("searchResults");
    }, 60);
  }
  // Update renderFullSearchResults to use translated text
  function renderFullSearchResults(query, results) {
    const tab = document.getElementById("searchResultsTab");
    if (!tab) return;
    const titleEl = document.getElementById("searchQueryTitle");
    const listEl = document.getElementById("searchPageResults");
    const currentLangForSearch = getStoredLanguage();
    if (titleEl)
      titleEl.textContent = query
        ? `Hasil pencarian: "${query}"`
        : TRANSLATIONS[currentLangForSearch]["search-query-title-default"];
    if (!listEl) return;
    if (!results || results.length === 0) {
      listEl.innerHTML = `<div class="search-empty" style="color:var(--muted);padding:12px">${TRANSLATIONS[currentLangForSearch]["search-empty"]}</div>`;
      return;
    }
    listEl.innerHTML = results
      .map(
        (r) => `
      <div class="search-result" onclick="openVideoModal(${
        r.id
      }); switchTab('library');">
        <div>
          <div class="search-result-title">${r.title}</div>
          <div class="search-result-meta">${r.genre} • ${r.year || ""} • ${
          r.duration || ""
        }</div>
        </div>
      </div>
    `
      )
      .join("");
  }

  // expose so HTML buttons can call it
  window.openFullSearchResults = openFullSearchResults;
  window.renderFullSearchResults = renderFullSearchResults;
  // Expose functions that are called from inline attributes
  window.switchTab = switchTab;
  window.openVideoModal = openVideoModal;
  window.closeVideoModal = closeVideoModal;
  window.toggleLike = toggleLike;
  window.toggleDislike = toggleDislike;
  window.shareVideo = shareVideo;
  window.addComment = addComment;
  window.toggleSearch = toggleSearch;
  window.openSearch = openSearch;
  window.closeSearch = closeSearch;
  window.performSearch = performSearch;

  // Run init when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // small helper - simple escaping for titles used in templates
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "<")
      .replace(/>/g, ">")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // short-form interaction helpers (keeps state per-short)
  const shortLikeSet = new Set();
  // store inline comments per short (id -> array of comment objects)
  const shortComments = new Map();
  // Update shortToggleLike to show only numbers
  function shortToggleLike(id, btnEl) {
    const key = String(id);
    const labelEl = btnEl.querySelector(".short-action-label");
    // simple toggle visual state + label update (no backend)
    if (shortLikeSet.has(key)) {
      shortLikeSet.delete(key);
      btnEl.classList.remove("liked");
      if (labelEl) {
        // naive decrement if numeric; otherwise leave text
        const n = parseInt(labelEl.textContent.replace(/\D/g, ""), 10);
        const newCount = Math.max(0, n - 1);
        labelEl.textContent = String(newCount); // Update label text after change, just the number
      }
    } else {
      shortLikeSet.add(key);
      btnEl.classList.add("liked");
      if (labelEl) {
        const n = parseInt(labelEl.textContent.replace(/\D/g, ""), 10);
        const newCount = n + 1;
        labelEl.textContent = String(newCount); // Update label text after change, just the number
      }
    }
  }
  function shortOpenComments(id) {
    // populate modal comments from inline storage then open modal
    comments = shortComments.get(String(id))
      ? [...shortComments.get(String(id))]
      : [];
    renderComments();
    openVideoModal(id);
    // focus the input after modal opens
    setTimeout(() => {
      const input = document.getElementById("commentInput");
      if (input) input.focus();
    }, 250);
  }
  // Update shortShare message
  function shortShare(id) {
    const currentLangForShare = getStoredLanguage();
    // find item either in movieData or shortFormData
    let item = null;
    for (const c in movieData) {
      const found = movieData[c].find((m) => m.id === id);
      if (found) {
        item = found;
        break;
      }
    }
    if (!item) {
      item = shortFormData.find((s) => s.id === id) || null;
    }
    const shareUrl = `${window.location.origin}${window.location.pathname}#short:${id}`;
    let shareText =
      TRANSLATIONS[currentLangForShare]["share-text-watch-on-sopera"];
    if (
      item &&
      TRANSLATIONS[currentLangForShare]["share-text-watch-title-on-sopera"]
    ) {
      shareText = TRANSLATIONS[currentLangForShare][
        "share-text-watch-title-on-sopera"
      ].replace("{title}", item.title);
    }
    const payload = {
      title: item ? item.title : "Sopera",
      text: shareText,
      url: shareUrl,
    };
    if (navigator.share) {
      navigator.share(payload).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() =>
          alert(TRANSLATIONS[currentLangForShare]["alert-link-copied"])
        )
        .catch(() =>
          alert(TRANSLATIONS[currentLangForShare]["alert-failed-to-copy"])
        );
    } else {
      prompt("Copy this link:", shareUrl);
    }
  }
  // expose short-form helpers if needed by other modules
  window.shortToggleLike = shortToggleLike;
  window.shortOpenComments = shortOpenComments;
  window.shortShare = shortShare;
  // Show inline comment textfield for a short item (called from delegated click) - Updated to use translated text
  function shortShowCommentBox(id, btnEl) {
    const currentLangForComments = getStoredLanguage();
    const itemEl = btnEl.closest(".short-form-item");
    if (!itemEl) return;
    // avoid duplicate box
    const existing = itemEl.querySelector(".inline-comment-box");
    if (existing) {
      const input = existing.querySelector(".inline-comment-input");
      input && input.focus();
      return;
    }
    const box = document.createElement("div");
    box.className = "inline-comment-box";
    box.innerHTML = `
      <input class="inline-comment-input" type="text" placeholder="${TRANSLATIONS[currentLangForComments]["inline-comment-input-placeholder"]}" />
      <button class="inline-comment-submit">${TRANSLATIONS[currentLangForComments]["inline-comment-submit"]}</button>
      <button class="inline-comment-cancel" aria-label="${TRANSLATIONS[currentLangForComments]["inline-comment-cancel"]}">×</button>
    `;
    // append near actions (positioning controlled by CSS)
    itemEl.appendChild(box);
    const input = box.querySelector(".inline-comment-input");
    const submit = box.querySelector(".inline-comment-submit");
    const cancel = box.querySelector(".inline-comment-cancel");
    function cleanup() {
      box.remove();
    }
    // submit handler
    submit.addEventListener("click", () => {
      const text = (input.value || "").trim();
      if (!text) {
        // simple UX: shake / red outline
        input.classList.add("invalid");
        setTimeout(() => input.classList.remove("invalid"), 800);
        return;
      }
      // store comment for this short
      const key = String(id);
      const arr = shortComments.get(key) || [];
      arr.push({
        author: "Pengguna",
        text,
        time: TRANSLATIONS[currentLangForComments]["comment-time-now"],
      }); // Use translated time
      shortComments.set(key, arr);
      // update comment count label on the short-actions button
      const actionsWrapper = itemEl.querySelector(".short-actions");
      const commentBtn = actionsWrapper?.querySelector(
        '[data-action="comment"] .short-action-label'
      );
      if (commentBtn) {
        const current = parseInt(
          String(commentBtn.textContent).replace(/\D/g, ""),
          10
        );
        const next = Number.isNaN(current) ? arr.length : current + 1;
        commentBtn.textContent = String(next); // Update label text after change, just the number
      }
      // if the modal for this id is open, sync comments to modal
      if (currentVideoId === id) {
        comments = [...arr];
        renderComments();
      }
      cleanup();
    });
    // keyboard: Enter to send, Escape to cancel
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submit.click();
      if (e.key === "Escape") cancel.click();
    });
    cancel.addEventListener("click", cleanup);
    // focus input
    input.focus();
  }
  // expose inline comment function for tests / other code if needed
  window.shortShowCommentBox = shortShowCommentBox;

  // simple notifications store (sample items)
  const notifications = [
    {
      id: "n1",
      title: "Episode Baru: Cinta Pertama",
      text: "Episode 5 tersedia sekarang.",
      time: "1 jam lalu",
      unread: true,
    },
    {
      id: "n2",
      title: "Penawaran Premium",
      text: "Diskon 20% untuk upgrade minggu ini.",
      time: "Kemarin",
      unread: true,
    },
    {
      id: "n3",
      title: "Komentar Baru",
      text: "Seseorang membalas komentar Anda.",
      time: "2 hari lalu",
      unread: false,
    },
  ];
  // Update renderNotifications to use translated time
  function renderNotifications() {
    const currentLangForNotifs = getStoredLanguage();
    const list = document.getElementById("notifList");
    const empty = document.getElementById("notifEmpty");
    if (!list || !empty) return;
    if (!notifications || notifications.length === 0) {
      list.innerHTML = "";
      empty.style.display = "block";
      setTextIfExists(
        "notifEmpty",
        TRANSLATIONS[currentLangForNotifs]["notif-empty"]
      );
      return;
    }
    empty.style.display = "none";
    list.innerHTML = notifications
      .map(
        (n) => `
      <div class="notif-item ${n.unread ? "unread" : ""}" data-id="${
          n.id
        }" onclick="openNotification('${n.id}')">
        <div class="notif-avatar">${(n.title || "").charAt(0) || "N"}</div>
        <div class="notif-body">
          <div class="notif-title">${escapeHtml(n.title)}</div>
          <div class="notif-text">${escapeHtml(n.text)}</div>
          <div class="notif-time">${
            n.time
          }</div> <!-- Time is handled separately below -->
        </div>
      </div>
    `
      )
      .join("");
    // Update the time text inside the rendered elements
    list.querySelectorAll(".notif-time").forEach((timeEl) => {
      const originalText = timeEl.textContent.trim();
      if (originalText === TRANSLATIONS["id"]["notification-time-1h-ago"]) {
        timeEl.textContent =
          TRANSLATIONS[currentLangForNotifs]["notification-time-1h-ago"];
      } else if (
        originalText === TRANSLATIONS["id"]["notification-time-yesterday"]
      ) {
        timeEl.textContent =
          TRANSLATIONS[currentLangForNotifs]["notification-time-yesterday"];
      } else if (
        originalText === TRANSLATIONS["id"]["notification-time-2d-ago"]
      ) {
        timeEl.textContent =
          TRANSLATIONS[currentLangForNotifs]["notification-time-2d-ago"];
      }
    });
  }
  function openNotifications() {
    const panel = document.getElementById("notifPanel");
    if (!panel) return;
    panel.classList.remove("hidden");
    panel.setAttribute("aria-hidden", "false");
    renderNotifications();
  }
  function closeNotifications() {
    const panel = document.getElementById("notifPanel");
    if (!panel) return;
    panel.classList.add("hidden");
    panel.setAttribute("aria-hidden", "true");
  }
  function toggleNotifications() {
    const panel = document.getElementById("notifPanel");
    if (!panel) return openNotifications();
    if (panel.classList.contains("hidden")) openNotifications();
    else closeNotifications();
  }
  function openNotification(id) {
    // mark read and (for demo) open related content
    const idx = notifications.findIndex((n) => n.id === id);
    if (idx >= 0) {
      notifications[idx].unread = false;
      renderNotifications();
      // demo behaviour: if notification mentions episode, open library or modal
      if (notifications[idx].title.toLowerCase().includes("episode")) {
        closeNotifications();
        // open library or video modal - here we try to open movie id 4 as an example
        openVideoModal(4);
      }
    }
  }
  function clearNotifications() {
    // simple clear
    notifications.length = 0;
    renderNotifications();
  }
  // close notifications when clicking outside
  document.addEventListener("click", (e) => {
    const panel = document.getElementById("notifPanel");
    const bell = document.querySelector(".notif-icon");
    if (!panel || !bell) return;
    const withinPanel = e.target.closest && e.target.closest("#notifPanel");
    const onBell = e.target.closest && e.target.closest(".notif-icon");
    if (!withinPanel && !onBell) {
      closeNotifications();
    }
  });
  // expose for HTML
  window.toggleNotifications = toggleNotifications;
  window.openNotifications = openNotifications;
  window.closeNotifications = closeNotifications;
  window.openNotification = openNotification;
  window.clearNotifications = clearNotifications;

  // show profile edit screen, populate fields
  function showProfileEditScreen() {
    const screen = document.getElementById("profileEditScreen");
    if (!screen) return;
    // hide other main sections
    ["libraryTab", "shortFormTab", "accountsTab", "settingsTab"].forEach(
      (id) => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
      }
    );
    screen.style.display = "block";
    // populate values
    const profile = loadProfileObject();
    const nameEl = document.getElementById("editUsername");
    const emailEl = document.getElementById("editEmail");
    const avatarImg = document.getElementById("editAvatarImg");
    if (nameEl) nameEl.value = profile.name || "";
    if (emailEl) emailEl.value = profile.email || "";
    if (avatarImg)
      avatarImg.src = profile.avatar || "images/avatar-default.jpg";
    // wire input handlers (idempotent)
    const avatarInput = document.getElementById("editAvatarInput");
    if (avatarInput && !avatarInput._wired) {
      avatarInput.addEventListener("change", (e) => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result;
          const preview = document.getElementById("editAvatarImg");
          if (preview) preview.src = dataUrl;
        };
        reader.readAsDataURL(f);
      });
      avatarInput._wired = true;
    }
    // form submit - Updated to use translated alerts
    const form = document.getElementById("profileEditForm");
    if (form && !form._wired) {
      form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        const currentLangForEdit = getStoredLanguage();
        const newName = (
          document.getElementById("editUsername")?.value || ""
        ).trim();
        const newEmail = (
          document.getElementById("editEmail")?.value || ""
        ).trim();
        if (!newName) {
          alert(TRANSLATIONS[currentLangForEdit]["alert-username-required"]);
          document.getElementById("editUsername")?.focus();
          return;
        }
        const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
        if (!okEmail) {
          alert(TRANSLATIONS[currentLangForEdit]["alert-email-invalid"]);
          document.getElementById("editEmail")?.focus();
          return;
        }
        // avatar: if a new file selected, read it synchronously now to store; otherwise keep existing
        const avatarInputEl = document.getElementById("editAvatarInput");
        const existingProfile = loadProfileObject();
        function persistAndClose(avatarDataUrl) {
          const p = loadProfileObject();
          p.name = newName;
          p.email = newEmail;
          if (avatarDataUrl) p.avatar = avatarDataUrl;
          saveProfileObject(p);
          applyProfileToDOM();
          // close the edit screen and return to accounts tab
          hideProfileEditScreen();
          switchTab("accounts");
          alert(TRANSLATIONS[currentLangForEdit]["alert-profile-updated"]);
        }
        if (avatarInputEl && avatarInputEl.files && avatarInputEl.files[0]) {
          const f = avatarInputEl.files[0];
          const reader = new FileReader();
          reader.onload = () => persistAndClose(reader.result);
          reader.readAsDataURL(f);
        } else {
          // keep previous avatar
          persistAndClose(existingProfile.avatar || "");
        }
      });
      form._wired = true;
    }
    // cancel button
    const cancelBtn = document.getElementById("cancelEditProfile");
    if (cancelBtn && !cancelBtn._wired) {
      cancelBtn.addEventListener("click", () => {
        hideProfileEditScreen();
        switchTab("accounts");
      });
      cancelBtn._wired = true;
    }
  }
  function hideProfileEditScreen() {
    const screen = document.getElementById("profileEditScreen");
    if (!screen) return;
    screen.style.display = "none";
  }
  // wire "Ubah Profil" button (editProfileBtn) during init
  // ...inside init() after DOM elements are available...
  (function wireEditProfileButton() {
    const editBtn = document.getElementById("editProfileBtn");
    if (editBtn) {
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showProfileEditScreen();
      });
    }
  })();
})();
