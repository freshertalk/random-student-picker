document.addEventListener('DOMContentLoaded', () => {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const generateBtn = document.getElementById('generate');
    const resultDiv = document.getElementById('result');

    generateBtn.addEventListener('click', () => {
        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);

        // Reset previous states
        resultDiv.classList.remove('show');
        minInput.classList.remove('shake');
        maxInput.classList.remove('shake');
        removeRings();

        // Validate inputs
        if (isNaN(min) || isNaN(max)) {
            resultDiv.textContent = 'Please enter valid numbers';
            resultDiv.style.color = 'var(--error)';
            if (isNaN(min)) minInput.classList.add('shake');
            if (isNaN(max)) maxInput.classList.add('shake');
            setTimeout(() => {
                minInput.classList.remove('shake');
                maxInput.classList.remove('shake');
            }, 500);
            return;
        }

        if (min > max) {
            resultDiv.textContent = 'Lowest ID cannot be greater than Highest ID';
            resultDiv.style.color = 'var(--error)';
            minInput.classList.add('shake');
            maxInput.classList.add('shake');
            setTimeout(() => {
                minInput.classList.remove('shake');
                maxInput.classList.remove('shake');
            }, 500);
            return;
        }

        // Generate random student ID
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resultDiv.textContent = `Selected Student ID: ${randomNumber}`;
        resultDiv.style.color = 'var(--primary)';
        setTimeout(() => {
            resultDiv.classList.add('show');
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            createStars();
            createRings();
        }, 10);
    });

    function createStars() {
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        document.body.appendChild(starsContainer);

        for (let i = 0; i < 10; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            starsContainer.appendChild(star);
        }

        setTimeout(() => {
            starsContainer.remove();
        }, 9000);
    }

    function createRings() {
        const ringsContainer = document.createElement('div');
        ringsContainer.className = 'rings';
        resultDiv.appendChild(ringsContainer);

        for (let i = 0; i < 3; i++) {
            const ring = document.createElement('div');
            ring.className = 'ring';
            ringsContainer.appendChild(ring);
        }

        setTimeout(() => {
            ringsContainer.remove();
        }, 5000);
    }

    function removeRings() {
        const existingRings = document.querySelector('.rings');
        if (existingRings) existingRings.remove();
    }
});