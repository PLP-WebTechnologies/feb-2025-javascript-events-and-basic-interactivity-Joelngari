// Offer button click
document.getElementById('offerBtn').addEventListener('click', () => {
  document.getElementById('offerText').textContent = 'Buy 10 eggs, get 2 free! 🤑';
});

// Double-click for secret discount
document.getElementById('offerBtn').addEventListener('dblclick', () => {
  alert('🎉 Secret Deal Unlocked: 20% OFF your next purchase!');
});

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

// Keypress detection – type "egg" for a surprise
let typed = '';
document.addEventListener('keypress', (e) => {
  typed += e.key.toLowerCase();
  if (typed.includes('egg')) {
    alert('🥚 You found the Easter egg!');
    typed = '';
  }
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const msg = document.getElementById('formMsg');

  if (!email.includes('@') || password.length < 8) {
    msg.textContent = '❌ Check your email and password (min 8 chars)';
    msg.style.color = 'red';
  } else {
    msg.textContent = '✅ Message sent successfully!';
    msg.style.color = 'green';
  }
});
