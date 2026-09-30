// ─────────────────────────────────────────────────────────────
// SITE COPY
// ─────────────────────────────────────────────────────────────

export const entry = {
  lines: ["Hey Priyanshi…", "I made something.", "Don't ask questions. Just enter. 😭"],
  cta: "Okay fine →"
};

export const afterEntry = {
  lines: ["So… you actually clicked it."],
  lines2: [
    "I could've just sent",
    "“Happy Birthday ❤️”",
    "but where's the fun in that?"
  ],
  cta: "Keep going →"
};

export const notObvious = {
  line1: "You're probably expecting some dramatic birthday paragraph right now.",
  line2: "Nope.",
  line3: "Not yet. 😭",
  line4: "First, let's take a walk.",
  cta: "Go"
};

export const memoryWalk = {
  intro: "Somewhere between college, deadlines, random conversations...",
  hint: "click around to reveal",
  memories: [
    {
      key: "notes",
      label: "notes",
      text: "The unofficial notes department.\nSomehow everyone wanted your notes.\nSomehow I was one of the lucky ones. 😂"
    },
    {
      key: "sports-room",
      label: "sports room",
      text: "Somehow going to get sports equipment became a whole conversation session."
    },
    {
      key: "project",
      label: "project",
      text: "Deadlines we both pretended to have under control."
    },
    {
      key: "walks",
      label: "walks",
      text: "Some of the best conversations happened on completely uneventful walks."
    },
    {
      key: "marungi",
      label: "“marungi”",
      text: "Your solution to approximately 73% of my nonsense. 😭"
    },
    {
      key: "chup-kar",
      label: "“chup kar”",
      text: "Probably one of your most frequently used responses around me."
    }
  ]
};

export const attackMode = {
  title: "Threat detected.",
  subtitle: "Priyanshi has entered attack mode.",
  stats: [
    { label: "Attack", value: "100" },
    { label: "Damage", value: "0" },
    { label: "Height advantage", value: "Questionable 😭" },
    { label: "Special move", value: "“MARUNGI”" }
  ],
  outro1: "Somehow I survived.",
  outro2: "Mostly.",
  cta: "Continue →"
};

export type WorldObject = {
  key: string;
  emoji: string;
  label: string;
  text: string;
  text2?: string;
};

export const lookAround = {
  title: "Look around.",
  hint: "click objects to discover",
  objects: [
    { key: "coffee", emoji: "☕", label: "coffee", text: "Morning coffee.\nObviously." },
    {
      key: "flower",
      emoji: "🌷",
      label: "flowers",
      text: "Tulips & roses. \nObviously your kind of flowers. 🌷"
    },
    {
      key: "movie",
      emoji: "🎬",
      label: "movie ticket",
      text: "You recommended one movie. \nSomehow, I ended up with a whole watchlist. 😂"
    },
    {
      key: "korea",
      emoji: "✈️",
      label: "Korea postcard",
      text: "Destination:\nSouth Korea 🇰🇷\n\nSeoul is waiting. 😭",
      text2: "Mission objectives:\n☐ Explore Seoul\n☐ Meet BTS\n☐ Experience Korea\n☐ Somehow survive seeing Cha Eun-woo\n\nPriorities are priorities. 😭"
    },
    {
      key: "food",
      emoji: "🥟",
      label: "food favorites",
      text: "Momos when required. \n Rajma chawal when life needs fixing."
    },
    {
      key: "note",
      emoji: "📝",
      label: "small note",
      text: "“Sherrr Zinda h!!😭😭”"
    }
  ] as WorldObject[],
  cta: "Continue →"
};

export const photoMoment = {
  line1: "Okay.",
  line2: "Enough investigation.",
  line3: "Some things deserve a proper frame."
};

export const favoritePhotoSection = {
  line1: "And then there's this one.",
  line2: "Yeah.",
  line3: "This one stays. ❤️"
};

export const togetherSection = {
  line1: "Oh. And apparently...",
  line2: "We have spent THAT much time together...",
  line3: "...and somehow still don't have enough photos.",
  line4: "Brilliant work from both of us. 😭",
  line5: "We need to fix that."
};

export const voiceNoteSection = {
  topHeading: "Listen to this...",
  subText: "I recorded a quick voice note for you. 🎧",
  playLabel: "Play it... 🎵",
  cta: "Press play.",
  after1: "Yeah.",
  after2: "That's exactly the energy I was expecting. 😂"
};

export const quietTransition = {
  line1: "Okay, Pri.",
  line2: "Jokes apart..."
};

export type MessageBlock = {
  text: string;
  emphasis?: boolean;
  poem?: boolean;
};

export const importantMessage = {
  paragraphs: [
    { text: "I don't think I've ever properly told you this." },
    {
      text: "The random conversations, the stupid arguments, the teasing, the “chup kar”, the “marungi”, the walks, the project chaos… somehow all of those little things became some of my favorite parts of college."
    },
    {
      text: "And honestly, there were times when things weren't particularly great for me. But having someone around who I could talk to without thinking twice, laugh with without trying, and just be myself around made things a little easier."
    },
    { text: "You became a really important part of my college life, Pri.", emphasis: true },
    { text: "Not because of one huge moment." },
    {
      text: "Just because of all those little moments that kept adding up… until having you around became something I genuinely valued."
    },
    { text: "And there's something I really hope for." },
    { text: "I don't want this friendship to be something that only belongs to these college years." },
    { text: "I want you to stay in my life like this — as my choti bhen urf bestie.", emphasis: true },
    {
      text: "The same person I can randomly annoy, argue with, laugh with, talk nonsense with, and somehow end up talking to again. 😂"
    },
    { text: "I don't know what life will look like years from now." },
    { text: "I don't know where we'll both end up." },
    { text: "Maybe college will eventually just become a bunch of old memories." },
    {
      text: "But I genuinely hope that when I look back at this part of my life…\n\nyou're still one of the people I get to call my bestie.",
      emphasis: true
    }
  ] as MessageBlock[]
};

export const drinkWaterCallback = {
  line1: "Okay.",
  line2: "Enough emotional damage for today.",
  line3: "You know what you'd probably tell me here...",
  big: "Drink water and sleep. 😂",
  line4: "Your most powerful method of emotional support."
};

export const futureSurprise = {
  line1: "One more thing.",
  line2: "Okay, Pinky Ponky…\nthis isn't the last surprise.\n\nI have a few plans I'd genuinely love to make with you, if you're comfortable. ❤️",
  handwrittenNote: "Let's make them happen soon. ✨",
  list: ["More food.", "More stupid conversations.", "More photos.", "More memories."]
};

export const photoApology = {
  title: "Okay… one last slightly serious page. ❤️",
  paragraphs: [
    "This page might not have been part of the original plan, but I felt like I had to add it. When I started making this website, things between us were different, so I just wanted to clear something…",
    "Sorryyy in advance — and also for the beautiful pictures of yours I took without permission. 😭❤️",
    "That café plan wasn't about some random conversation. I genuinely wanted to spend some time with you, know more about you, and understand the things I still don't know. While making this site, I realized that I actually know only a small part of your story, so I made it from whatever little pieces, memories, photos and moments I had. Maybe that's why I wanted more time with you — I wanted to know *you*, not just the things I already knew.",
    "And weirdly, when I was thinking about this website, I actually thought that maybe having a little fight or some ups and downs before your birthday would somehow make this wish and everything I wrote here mean even more.",
    "I know that sounds stupid now. 😭",
    "And yeah… things have been a little up and down lately. I don't really know what changed or what you're feeling, but I know things aren't the same right now. If somewhere along the way I talked too much, did too much, crossed a line, or made you uncomfortable without realizing it, I'm genuinely sorry. That was never my intention.",
    "I didn't change this website because of everything that happened, because I made it for you with the bond and memories that meant something to me. I'm not expecting anything from you because of it, and you don't owe me anything.",
    "I just wanted you to know that I genuinely care about you. You're someone I really admire, and if someday I have a daughter, I'd hope she has some of the confidence, craziness, kindness and individuality that you have. Maybe that's why all of this mattered to me more than I expected.",
    "I don't know what happens after this, or what is happening right now. I just hope you're happy, and if things can be good between us again someday, I'll be genuinely happy about that. ❤️",
    "That's all. No pressure. Just something I wanted you to know.",
    "Now enough emotional damage. 😂",
    "So… did I redeem that walk with you? 👀",
    "*(I'm actually serious about this one.)*",
    "Happy Birthday, Pri. ❤️"
  ],
  cta: "Replay?"
};

export const birthdayMoment = {
  headline: "Happy Birthday, Priyanshi. ❤️",
  message: [
    "I hope this year brings you the kind of happiness you don't have to force.",
    "I hope you stay happy, healthy, and peaceful — not just on the good days, but even on the days when things don't go exactly the way you want. I hope you get to do more of the things that make you genuinely happy.",
    "Keep being the same crazy, funny, caring, slightly annoying Cutiee that you are. And don't ever lose the little things that make you you.",
    "I just want this year to give you a lot of reasons to smile.",
    "So yeah, Pri…",
    "have the happiest birthday and an absolutely beautiful year ahead. ❤️"
  ]
};

export const finalLetter = {
  salutation: "Dear Priyanshi,",
  paragraphs: [
    "I don't really know how to fit years of memories, jokes, conversations and everything in between into one website.",
    "But I wanted to make something that reminded you of how many good moments you've been part of.",
    "Thank you for being you.",
    "I hope this year brings you everything you're hoping for, and a ridiculous amount of happiness."
  ],
  closingWish: "Happy Birthday, Priyanshi. ❤️",
  signature: "— Kunal"
};

export const finalScreen = {
  line1: "For Pri. 🌷",
  line2: "One more year.\nA lot more memories.",
  cta: "Replay?"
};
