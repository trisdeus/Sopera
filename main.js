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
  let lastSearchResults = [];
  let lastSearchQuery = "";

  // Initialize after DOM ready
  function init() {
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
      "premiumTab",
      "searchResultsTab",
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

  // Search helpers
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
        const fields = [
          (m.title || "").toLowerCase(),
          (m.genre || "").toLowerCase(),
          (m.year || "").toLowerCase(),
          (m.description || "").toLowerCase(),
          (m.duration || "").toLowerCase(),
        ];

        // only push if any single field contains the query substring `q`
        const match = fields.some((field) => field.includes(q));
        if (match) results.push(m);
      });
    }

    lastSearchResults = results;
    renderSearchResults(results);
  }

  function renderSearchResults(results) {
    const container = document.getElementById("searchResults");
    if (!container) return;
    if (!results || results.length === 0) {
      container.innerHTML = `<div class="search-empty" style="color:var(--muted);padding:12px">Tidak ada hasil</div>`;
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
      moreBtn.textContent = "Lihat selengkapnya";
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

  function renderFullSearchResults(query, results) {
    const tab = document.getElementById("searchResultsTab");
    if (!tab) return;
    const titleEl = document.getElementById("searchQueryTitle");
    const listEl = document.getElementById("searchPageResults");
    if (titleEl)
      titleEl.textContent = query
        ? `Hasil pencarian: "${query}"`
        : "Hasil pencarian";
    if (!listEl) return;
    if (!results || results.length === 0) {
      listEl.innerHTML = `<div class="search-empty" style="color:var(--muted);padding:12px">Tidak ada hasil</div>`;
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
})();
