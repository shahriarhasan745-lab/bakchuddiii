// ১. কুইজ আনলক ফাংশন
function checkQuiz() {
  const input = document.getElementById('quiz-input').value.trim();
  
  // ফাঁকা না রাখলেই আনলক হবে (তোমার ইচ্ছা হলে এখানে নির্দিষ্ট কোনো টেক্সট চেক দিতে পারো)
  if (input !== "") {
    document.getElementById('quiz-screen').classList.remove('active');
    
    setTimeout(() => {
      document.getElementById('quiz-screen').style.display = 'none';
      const mainScreen = document.getElementById('main-screen');
      mainScreen.style.display = 'block';
      setTimeout(() => {
        mainScreen.classList.add('active');
        triggerConfetti(); // আনলক হওয়ার সাথে সাথেই কনফেটি বোম!
      }, 50);
    }, 400);
  } else {
    document.getElementById('quiz-error').style.display = 'block';
  }
}

// ২. কেকের মোমবাতি ফুঁ দেওয়া / নেভানো
let candleBlown = false;
function blowCandle() {
  if (!candleBlown) {
    document.getElementById('flame').classList.add('off');
    document.getElementById('cake-status').innerText = '🎉 শুভ জন্মদিন! মোমবাতি নেভানো হয়েছে!';
    document.getElementById('cake-status').style.color = '#4ade80';
    triggerConfetti();
    candleBlown = true;
  }
}

// ৩. পোলারয়েড কার্ড ফ্লিপ করা
function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}

// ৪. কনফেটি অ্যানিমেশন (Canvas Confetti)
function triggerConfetti() {
  if (typeof confetti === 'function') {
    // ডান ও বাম দুই দিক থেকে কনফেটি উড়বে
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// কীবোর্ডের Enter বাটন চাপলেও কুইজ সাবমিট হবে
document.getElementById('quiz-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkQuiz();
  }
});
