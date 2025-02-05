document.addEventListener('DOMContentLoaded', () => {
    // Extinguish flames after 10 seconds
    setTimeout(() => {
        document.querySelectorAll('.flame').forEach(flame => {
            flame.style.animation = 'blow-out 2s forwards';
        });
    }, 10000);

    // Add confetti effect (simple version)
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear`;
        document.body.appendChild(confetti);
    }
});

// Confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confetti-fall {
        0% { transform: translateY(-100vh) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(720deg); }
    }
`;
document.head.appendChild(style);
