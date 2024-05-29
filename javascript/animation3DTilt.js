document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.homeResults img');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
  
        const width = window.innerWidth;
        const height = window.innerHeight;
  
        const windowCenterX = width / 2;
        const windowCenterY = height / 2;
  
        const maxTilt = 20;// Maximum tilt angle

        const transformedX = (y - windowCenterY) / windowCenterY * maxTilt;
        const transformedY = (x - windowCenterX) / windowCenterX * maxTilt;
        
        image.style.transform = `rotateX(${-transformedX}deg) rotateY(${transformedY}deg)`;
    });

    // Reset the rotation when the mouse leaves the image area
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'rotateX(0) rotateY(0)';
    });
});
