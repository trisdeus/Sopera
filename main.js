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
      },
      {
        id: 1,
        title: "Hati yang Terluka",
        genre: "Drama",
        year: "2024",
        duration: "1j 30m",
        description:
          "Drama emosional tentang perjuangan seseorang mengatasi patah hati dan menemukan kebahagiaan kembali.",
      },
      {
        id: 2,
        title: "Rumah Angker",
        genre: "Horor",
        year: "2023",
        duration: "1j 55m",
        description:
          "Kisah menegangkan tentang keluarga yang pindah ke rumah baru yang ternyata berpenghuni makhluk halus.",
      },
      {
        id: 3,
        title: "Hidup Sehari-hari",
        genre: "Slice of Life",
        year: "2024",
        duration: "1j 20m",
        description:
          "Cerita sederhana tentang kehidupan sehari-hari dengan berbagai momen berharga.",
      },
    ],
    romance: [
      {
        id: 4,
        title: "Cinta Pertama",
        genre: "Romantis",
        year: "2023",
        duration: "1j 35m",
      },
      {
        id: 5,
        title: "Janji di Atas Awan",
        genre: "Romantis",
        year: "2024",
        duration: "1j 40m",
      },
      {
        id: 6,
        title: "Rindu yang Membara",
        genre: "Romantis",
        year: "2023",
        duration: "1j 50m",
      },
      {
        id: 7,
        title: "Takdir Cinta",
        genre: "Romantis",
        year: "2024",
        duration: "1j 25m",
      },
      {
        id: 8,
        title: "Hati yang Berdebar",
        genre: "Romantis",
        year: "2023",
        duration: "1j 30m",
      },
    ],
    drama: [
      {
        id: 9,
        title: "Perjuangan Hidup",
        genre: "Drama",
        year: "2024",
        duration: "2j 10m",
      },
      {
        id: 10,
        title: "Darah dan Air Mata",
        genre: "Drama",
        year: "2023",
        duration: "1j 55m",
      },
      {
        id: 11,
        title: "Keluarga yang Terpisah",
        genre: "Drama",
        year: "2024",
        duration: "2j 05m",
      },
      {
        id: 12,
        title: "Mimpi yang Hilang",
        genre: "Drama",
        year: "2023",
        duration: "1j 45m",
      },
      {
        id: 13,
        title: "Perjalanan Kehidupan",
        genre: "Drama",
        year: "2024",
        duration: "2j 00m",
      },
    ],
    horror: [
      {
        id: 14,
        title: "Hantu di Sekolah",
        genre: "Horor",
        year: "2023",
        duration: "1j 30m",
      },
      {
        id: 15,
        title: "Teror Malam",
        genre: "Horor",
        year: "2024",
        duration: "1j 40m",
      },
      {
        id: 16,
        title: "Dendam dari Masa Lalu",
        genre: "Horor",
        year: "2023",
        duration: "1j 50m",
      },
      {
        id: 17,
        title: "Rumah Kosong",
        genre: "Horor",
        year: "2024",
        duration: "1j 35m",
      },
      {
        id: 18,
        title: "Suara di Kegelapan",
        genre: "Horor",
        year: "2023",
        duration: "1j 45m",
      },
    ],
    sliceOfLife: [
      {
        id: 19,
        title: "Pagi yang Indah",
        genre: "Slice of Life",
        year: "2024",
        duration: "1j 15m",
      },
      {
        id: 20,
        title: "Kafe di Sudut Jalan",
        genre: "Slice of Life",
        year: "2023",
        duration: "1j 20m",
      },
      {
        id: 21,
        title: "Teman Sejati",
        genre: "Slice of Life",
        year: "2024",
        duration: "1j 25m",
      },
      {
        id: 22,
        title: "Hari yang Berharga",
        genre: "Slice of Life",
        year: "2023",
        duration: "1j 10m",
      },
      {
        id: 23,
        title: "Kebahagiaan Sederhana",
        genre: "Slice of Life",
        year: "2024",
        duration: "1j 18m",
      },
    ],
  };

  const shortFormData = [
    { id: 24, title: "Momen Spontan", genre: "Slice of Life" },
    { id: 25, title: "Cinta Tak Terduga", genre: "Romantis" },
    { id: 26, title: "Ketakutan Malam", genre: "Horor" },
    { id: 27, title: "Perjuangan Sejati", genre: "Drama" },
    { id: 28, title: "Kebahagiaan Kecil", genre: "Slice of Life" },
    { id: 29, title: "Cinta Segitiga", genre: "Romantis" },
    { id: 30, title: "Misteri Terungkap", genre: "Horor" },
  ];

  // State
  let currentVideoId = null;
  let liked = false;
  let disliked = false;
  let comments = [];

  // Initialize after DOM ready
  function init() {
    populateMovieRows();
    populateShortForm();
    switchTab("library");

    // Close modal on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
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
      return `
                <div class="movie-card ${
                  gradients[gradientIndex % gradients.length]
                }" onclick="openVideoModal(${movie.id})">
                    <div class="movie-card-overlay">${movie.title}</div>
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

  // Populate Short Form
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

    container.innerHTML = shortFormData
      .map((item, index) => {
        const gradientClass = gradients[index % gradients.length];
        return `
                <div class="short-form-item ${gradientClass}">
                    <div class="short-video"></div>
                    <div class="short-info">
                        <div class="short-title">${item.title}</div>
                        <div class="short-genre">${item.genre}</div>
                    </div>
                    <div class="short-actions">
                        <div class="short-action-btn">
                            <div class="short-action-icon">👍</div>
                            <div class="short-action-label">1.2k</div>
                        </div>
                        <div class="short-action-btn">
                            <div class="short-action-icon">💬</div>
                            <div class="short-action-label">245</div>
                        </div>
                        <div class="short-action-btn">
                            <div class="short-action-icon">🔗</div>
                            <div class="short-action-label">Bagikan</div>
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
    };
    const idToShow = map[tab];
    if (idToShow) {
      const el = document.getElementById(idToShow);
      if (el) el.style.display = "block";
    }
  }

  // Video modal functions
  function openVideoModal(videoId) {
    currentVideoId = videoId;
    const modal = document.getElementById("videoModal");
    modal && modal.classList.add("active");

    // Find movie data
    let movie = null;
    for (const category in movieData) {
      const found = movieData[category].find((m) => m.id === videoId);
      if (found) {
        movie = found;
        break;
      }
    }

    if (movie) {
      const titleEl = document.getElementById("modalTitle");
      const yearEl = document.getElementById("modalYear");
      const genreEl = document.getElementById("modalGenre");
      const durationEl = document.getElementById("modalDuration");
      const descEl = document.getElementById("modalDescription");
      const video = document.getElementById("modalVideo");

      if (titleEl) titleEl.textContent = movie.title;
      if (yearEl) yearEl.textContent = movie.year || "2024";
      if (genreEl) genreEl.textContent = movie.genre || "Drama";
      if (durationEl) durationEl.textContent = movie.duration || "1j 30m";
      if (descEl)
        descEl.textContent = movie.description || "Deskripsi tidak tersedia.";
      if (video)
        video.src =
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    }

    // Reset like/dislike
    liked = false;
    disliked = false;
    const likeIcon = document.getElementById("likeIcon");
    const dislikeIcon = document.getElementById("dislikeIcon");
    if (likeIcon) likeIcon.style.opacity = "0.5";
    if (dislikeIcon) dislikeIcon.style.opacity = "0.5";

    // Clear comments
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

  function shareVideo() {
    if (navigator.share) {
      navigator.share({
        title: document.getElementById("modalTitle")?.textContent,
        text: "Tonton film ini di Sopera!",
        url: window.location.href,
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert("Link berhasil disalin!");
    } else {
      alert("Fitur berbagi tidak tersedia di browser ini.");
    }
  }

  function addComment() {
    const input = document.getElementById("commentInput");
    const text = input ? input.value.trim() : "";
    if (text) {
      comments.push({
        author: "Pengguna",
        text: text,
        time: "Sekarang",
      });
      renderComments();
      if (input) input.value = "";
    }
  }

  function renderComments() {
    const container = document.getElementById("commentsList");
    if (!container) return;
    container.innerHTML = comments
      .map(
        (comment) => `
            <div class="comment-item">
                <div class="comment-author">${comment.author}</div>
                <div class="comment-text">${comment.text}</div>
                <div class="comment-actions">
                    <span class="comment-action">Suka</span>
                    <span class="comment-action">Balas</span>
                    <span>${comment.time}</span>
                </div>
            </div>
        `
      )
      .join("");
  }

  // Expose functions that are called from inline attributes
  window.switchTab = switchTab;
  window.openVideoModal = openVideoModal;
  window.closeVideoModal = closeVideoModal;
  window.toggleLike = toggleLike;
  window.toggleDislike = toggleDislike;
  window.shareVideo = shareVideo;
  window.addComment = addComment;

  // Run init when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
