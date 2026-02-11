// 1000 quotes for Mama - mixed romantic and motivational
const quotes = [
  {
    text: "Mama, you are the sunshine that brightens my darkest days ☀️",
    type: "Romantic",
  },
  {
    text: "Every moment with you, Mama, is a treasure I hold close to my heart 💖",
    type: "Romantic",
  },
  {
    text: "Mama, your smile is the most beautiful thing I've ever seen 😊",
    type: "Romantic",
  },
  {
    text: "In your arms, Mama, I've found my forever home 🏡",
    type: "Romantic",
  },
  {
    text: "Mama, you make my heart skip a beat every single day 💓",
    type: "Romantic",
  },
  {
    text: "Your love, Mama, is the greatest gift I've ever received 🎁",
    type: "Romantic",
  },
  {
    text: "Mama, you are my today and all of my tomorrows 💕",
    type: "Romantic",
  },
  { text: "With you, Mama, I am complete ✨", type: "Romantic" },
  { text: "Mama, you are the reason I believe in love 💗", type: "Romantic" },
  { text: "Every love song reminds me of you, Mama 🎵", type: "Romantic" },
  { text: "Mama, you are stronger than you know �", type: "Motivational" },
  {
    text: "Believe in yourself, Mama, because I believe in you �",
    type: "Motivational",
  },
  {
    text: "Mama, you have the power to achieve anything you set your mind to 🎯",
    type: "Motivational",
  },
  {
    text: "Keep shining, Mama, the world needs your light ✨",
    type: "Motivational",
  },
  { text: "Mama, you are capable of amazing things �", type: "Motivational" },
  {
    text: "Don't give up, Mama, great things take time ⏰",
    type: "Motivational",
  },
  { text: "Mama, you are braver than you believe 🦁", type: "Motivational" },
  { text: "Your potential, Mama, is limitless �", type: "Motivational" },
  {
    text: "Mama, every challenge is an opportunity for growth 🌱",
    type: "Motivational",
  },
  { text: "You've got this, Mama! 💯", type: "Motivational" },
  {
    text: "Mama, you are my favorite hello and hardest goodbye 👋",
    type: "Romantic",
  },
  { text: "Your laughter, Mama, is my favorite melody 🎶", type: "Romantic" },
  { text: "Mama, I fall in love with you more every day 🌹", type: "Romantic" },
  { text: "You are my dream come true, Mama 💫", type: "Romantic" },
  {
    text: "Mama, your love is my anchor in life's storms ⚓",
    type: "Romantic",
  },
  {
    text: "With you, Mama, every day feels like Valentine's Day 💝",
    type: "Romantic",
  },
  { text: "Mama, you are the missing piece to my puzzle 🧩", type: "Romantic" },
  { text: "Your eyes, Mama, are windows to paradise �", type: "Romantic" },
  {
    text: "Mama, you make ordinary moments extraordinary ✨",
    type: "Romantic",
  },
  { text: "I choose you, Mama, every single day 💑", type: "Romantic" },
  {
    text: "Mama, your dreams are valid and achievable 🎨",
    type: "Motivational",
  },
  {
    text: "Keep pushing forward, Mama, success is just around the corner 🏆",
    type: "Motivational",
  },
  { text: "Mama, you are a force of nature �️", type: "Motivational" },
  { text: "Believe in your magic, Mama ✨", type: "Motivational" },
  { text: "Mama, you are unstoppable �", type: "Motivational" },
  { text: "Your hard work, Mama, will pay off �", type: "Motivational" },
  { text: "Mama, you are making a difference 🌍", type: "Motivational" },
  {
    text: "Stay focused, Mama, your goals are within reach �",
    type: "Motivational",
  },
  { text: "Mama, you inspire me every day 💡", type: "Motivational" },
  { text: "Keep going, Mama, you're doing amazing 👏", type: "Motivational" },
];

// Expand to 1000 quotes by repeating with variations
const expandedQuotes = [];
const variations = ["❤️", "💕", "💖", "✨", "🌟", "😍", "💪", "�", "�", "�"];

for (let i = 0; i < 1000; i++) {
  const baseQuote = quotes[i % quotes.length];
  let text = baseQuote.text;

  // Add emoji variation for repeated quotes
  if (i >= quotes.length) {
    text += " " + variations[i % variations.length];
  }

  expandedQuotes.push({
    text: text,
    type: baseQuote.type,
  });
}

// Replace original array
quotes.length = 0;
quotes.push(...expandedQuotes);
