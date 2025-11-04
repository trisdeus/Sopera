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

    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        const usernameInput = document.getElementById("usernameInput");
        const emailInput = document.getElementById("emailInput");
        const name = (usernameInput && usernameInput.value.trim()) || "";
        const email = (emailInput && emailInput.value.trim()) || "";

        // basic validation
        if (!name) {
          alert("Nama pengguna tidak boleh kosong.");
          usernameInput && usernameInput.focus();
          return;
        }
        // simple email check
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) {
          alert("Masukkan email yang valid.");
          emailInput && emailInput.focus();
          return;
        }

        const p = loadProfileObject();
        p.name = name;
        p.email = email;
        saveProfileObject(p);
        applyProfileToDOM();
        // small confirmation
        alert("Profil berhasil diperbarui.");
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
      // Existing event delegation
      container.addEventListener("click", function (ev) {
        const btn = ev.target.closest(".short-action-btn");
        if (!btn) {
          // Handle video item click
          const itemEl = ev.target.closest(".short-form-item");
          if (itemEl) {
            const id = parseInt(itemEl.dataset.id, 10);
            if (!Number.isNaN(id)) {
              openVideoModal(id);
            }
          }
          return;
        }

        // ... existing action handling ...
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

  // Populate Short Form (use thumb if available)
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
                <div class="short-action-label">12</div>
              </div>
              <div class="short-action-btn" data-action="comment">
                <div class="short-action-icon">💬</div>
                <div class="short-action-label">245</div>
              </div>
              <div class="short-action-btn" data-action="share">
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

    if (item) {
      if (titleEl) titleEl.textContent = item.title || "";
      if (yearEl) yearEl.textContent = item.year || "";
      if (genreEl) genreEl.textContent = item.genre || "";
      if (durationEl) durationEl.textContent = item.duration || "";
      if (descEl) descEl.textContent = item.description || "";

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
      if (yearEl) yearEl.textContent = "";
      if (genreEl) genreEl.textContent = "";
      if (durationEl) durationEl.textContent = "";
      if (descEl) descEl.textContent = "";
      if (video) {
        video.pause();
        video.src = "";
        video.removeAttribute("poster");
      }
    }

    // ... existing like/dislike and comments reset ...
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
        const fields = [(m.title || "").toLowerCase()];

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

  // small helper - simple escaping for titles used in templates
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // short-form interaction helpers (keeps state per-short)
  const shortLikeSet = new Set();
  // store inline comments per short (id -> array of comment objects)
  const shortComments = new Map();

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
        if (!Number.isNaN(n)) labelEl.textContent = `${Math.max(0, n - 1)}`;
      }
    } else {
      shortLikeSet.add(key);
      btnEl.classList.add("liked");
      if (labelEl) {
        const n = parseInt(labelEl.textContent.replace(/\D/g, ""), 10);
        if (!Number.isNaN(n)) labelEl.textContent = `${n + 1}`;
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

  function shortShare(id) {
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
    const payload = {
      title: item ? item.title : "Sopera",
      text: item ? `Tonton ${item.title} di Sopera` : "Tonton di Sopera",
      url: shareUrl,
    };

    if (navigator.share) {
      navigator.share(payload).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => alert("Link berhasil disalin!"))
        .catch(() => alert("Gagal menyalin link."));
    } else {
      prompt("Salin link ini:", shareUrl);
    }
  }

  // expose short-form helpers if needed by other modules
  window.shortToggleLike = shortToggleLike;
  window.shortOpenComments = shortOpenComments;
  window.shortShare = shortShare;

  // Show inline comment textfield for a short item (called from delegated click)
  function shortShowCommentBox(id, btnEl) {
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
      <input class="inline-comment-input" type="text" placeholder="Tulis komentar..." />
      <button class="inline-comment-submit">Kirim</button>
      <button class="inline-comment-cancel" aria-label="Batal">×</button>
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
      arr.push({ author: "Pengguna", text, time: "Sekarang" });
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
        commentBtn.textContent = String(next);
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

  function renderNotifications() {
    const list = document.getElementById("notifList");
    const empty = document.getElementById("notifEmpty");
    if (!list || !empty) return;
    if (!notifications || notifications.length === 0) {
      list.innerHTML = "";
      empty.style.display = "block";
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
          <div class="notif-time">${escapeHtml(n.time)}</div>
        </div>
      </div>
    `
      )
      .join("");
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

    // form submit
    const form = document.getElementById("profileEditForm");
    if (form && !form._wired) {
      form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        const newName = (
          document.getElementById("editUsername")?.value || ""
        ).trim();
        const newEmail = (
          document.getElementById("editEmail")?.value || ""
        ).trim();
        if (!newName) {
          alert("Nama pengguna tidak boleh kosong.");
          document.getElementById("editUsername")?.focus();
          return;
        }
        const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
        if (!okEmail) {
          alert("Masukkan email yang valid.");
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
          alert("Profil berhasil diperbarui.");
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

  // ...existing code...
})();
