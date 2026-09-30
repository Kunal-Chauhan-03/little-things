// ─────────────────────────────────────────────────────────────
// ASSET CONFIG
// ─────────────────────────────────────────────────────────────

export type PhotoAsset = {
  src: string;
  alt: string;
  caption?: string;
};

// 9 Solo photos of Priyanshi — used in Screen 8 (Photo Moment)
export const soloPhotos: PhotoAsset[] = [
  {
    src: "/images/seventh.jpeg",
    alt: "Priyanshi",
    caption: "Pretty.\nThat's it.\nDon't make it weird. 😂"
  },
  {
    src: "/images/first.jpeg",
    alt: "Priyanshi",
    caption: "Main character energy.\n Somehow, even sitting still. 😂"
  },
  {
    src: "/images/ninth.jpeg",
    alt: "Priyanshi",
    caption: "Okay okay…\nI'll admit it. You look very good here.\nDon't let this compliment reach your head. 😭"
  },
  {
    src: "/images/nineteen.jpeg",
    alt: "Priyanshi",
    caption: "Effortlessly elegant.\nAs usual. ✨"
  },
  {
    src: "/images/seventeen.jpeg",
    alt: "Priyanshi",
    caption: "Cutuuu."
  },
  {
    src: "/images/third.jpeg",
    alt: "Priyanshi",
    caption: "0% effort.\n100% photogenic.\nUnfair. 😂"
  },
  {
    src: "/images/twentytwo.jpeg",
    alt: "Priyanshi",
    caption: "Some people just look good in photos.\nYou somehow make them feel like memories. ✨"
  },
  {
    src: "/images/tweleve.jpeg",
    alt: "Priyanshi",
    caption: "Keep smiling.\nIt suits you. ✨"
  },
  {
    src: "/images/twentyone.jpeg",
    alt: "Priyanshi",
    caption: "Graceful.\nDon't get used to compliments though. 😭"
  }
];

// Her solo picture — used in Screen 9 ("And then there's this one.")
export const favoritePhoto: PhotoAsset = {
  src: "/images/eleven.jpeg",
  alt: "Priyanshi's favorite photo"
};

// 2 duo photos — used in Screen 10 ("We have spent THAT much time together...")
export const togetherPhotos: PhotoAsset[] = [
  { src: "/images/firstt.png", alt: "Us" },
  { src: "/images/firsttt.png", alt: "Us" }
];

// Her final photo — used in Screen 17 (Birthday Moment final message)
export const birthdayHeroPhoto: PhotoAsset = {
  src: "/images/eighteen.jpeg",
  alt: "Priyanshi"
};

// Her voice note — used in VoiceNoteSection
export const voiceNote = {
  src: "/audio/WhatsApp Audio 2026-09-18 at 4.12.29 PM.ogg",
  durationLabel: "0:30"
};

// Background music — soft, plays only after user interacts
export const backgroundMusic = {
  src: "/audio/background.mp3"
};

// Her favorite / current song
export const favoriteSong = {
  src: "/audio/favorite-song.mp3",
  title: "Add song title here"
};
