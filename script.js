document.addEventListener('DOMContentLoaded', () => {
    
    // OS Detection Logic
    const osHint = document.getElementById('os-hint');
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    function detectOS() {
        const platform = navigator.platform.toLowerCase();
        const userAgent = navigator.userAgent.toLowerCase();
        
        if (platform.includes('mac') || userAgent.includes('mac')) {
            return 'mac';
        } else if (platform.includes('win') || userAgent.includes('win')) {
            return 'windows';
        } else if (platform.includes('linux') || userAgent.includes('linux')) {
            return 'linux';
        }
        return 'mac'; // Default fallback
    }

    const userOS = detectOS();
    
    // Update UI based on OS
    if (userOS === 'mac') {
        osHint.innerHTML = '<i class="fa-brands fa-apple"></i> Detected macOS';
        activateTab('mac');
    } else if (userOS === 'windows') {
        osHint.innerHTML = '<i class="fa-brands fa-windows"></i> Detected Windows';
        activateTab('windows');
    } else if (userOS === 'linux') {
        osHint.innerHTML = '<i class="fa-brands fa-linux"></i> Detected Linux';
        activateTab('linux');
    }

    // Tab Switching Logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            activateTab(target);
        });
    });

    function activateTab(tabName) {
        // Deactivate all
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        // Activate target
        const activeTab = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
        const activeContent = document.getElementById(tabName);
        
        if (activeTab && activeContent) {
            activeTab.classList.add('active');
            activeContent.classList.add('active');
        }
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 12, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
        } else {
            navbar.style.background = 'rgba(10, 10, 12, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});
