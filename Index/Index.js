        // Wait for the animation to complete
        const lineElement = document.querySelector('.line');
        lineElement.addEventListener('animationend', () => {
          // Open a new window or perform any desired action here
          window.location = "/Login/login.html"; 
        });