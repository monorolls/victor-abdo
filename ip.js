 const LOCK_DURATION = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
const COUNTDOWN_DURATION = 3; // Countdown duration in seconds

async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP:', error);
        return null;
    }
}

async function checkLockStatus(ip) {
    try {
        const response = await fetch('/check-ip', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ip })
        });
        const data = await response.json();
        const lockedContent = document.getElementById('lockedContent');
        const linksContainer = document.getElementById('linksContainer');
        const extractButton = document.getElementById('extractButton');

        if (data.locked) {
            const currentTime = new Date().getTime();
            if (currentTime < data.unlockTime) {
                linksContainer.style.display = 'none';
                lockedContent.style.display = 'block';
                extractButton.style.display = 'none';
                return true;
            } else {
                // Unlock IP after the duration has passed
                await fetch('/lock-ip', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ip, duration: 0 })
                });
            }
        }
        return false;
    } catch (error) {
        console.error('Error checking lock status:', error);
        return false;
    }
}

async function lockContent(ip) {
    try {
        await fetch('/lock-ip', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ip, duration: LOCK_DURATION })
        });
    } catch (error) {
        console.error('Error locking content:', error);
    }
}

function getCountdownImage(seconds) {
    const baseUrl = 'https://i.imgur.com/UvDgpCs.gif';
    return `${baseUrl}?${seconds}`; // Add seconds as a query parameter (just to demonstrate)
}

window.addEventListener('load', async () => {
    const ip = await getUserIP();
    if (ip && (await checkLockStatus(ip))) {
        return;
    }

    const linksContainer = document.getElementById('linksContainer');
    const lockedContent = document.getElementById('lockedContent');
    linksContainer.style.display = 'none';
    lockedContent.style.display = 'none';
});

document.getElementById('extractButton').addEventListener('click', async () => {
    const countdownImage = document.getElementById('countdownImage');
    const loading = document.getElementById('loading');
    const loadingBar = document.getElementById('loadingBar');
    const linksContainer = document.getElementById('linksContainer');
    const lockedContent = document.getElementById('lockedContent');
    
    loading.style.display = 'block';
    loadingBar.style.width = '100%';

    lockedContent.style.display = 'none';
    linksContainer.style.display = 'none';

    let secondsLeft = COUNTDOWN_DURATION;
    countdownImage.src = getCountdownImage(secondsLeft);

    const countdownInterval = setInterval(() => {
        secondsLeft--;
        if (secondsLeft >= 0) {
            countdownImage.src = getCountdownImage(secondsLeft);
        }
        if (secondsLeft <= 0) {
            clearInterval(countdownInterval);
            countdownImage.src = 'https://i.imgur.com/92xFbAL.png';
            
            const urls = [
                'https://monopolygo.wiki/latest-reward-links/',
            ];
            extractLinksFromMultipleUrls(urls);

            setTimeout(() => {
                loading.style.display = 'none';
            }, 0);

            const ip = await getUserIP();
            if (ip) {
                setTimeout(() => {
                    lockContent(ip);
                }, 10000);
            }
        }
    }, 500); 
});

async function extractLinksFromMultipleUrls(urls) {
    const allLinks = [];
    for (const url of urls) {
        try {
            const response = await fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent(url));
            if (!response.ok) {
                throw new Error('Failed to fetch from ' + url);
            }
            const text = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const links = doc.querySelectorAll('a');
            links.forEach(link => {
                if (link.href.startsWith('https://mply.io/')) {
                    const cleanLink = link.href.split('?')[0];
                    const linkText = link.textContent.trim() || 'Unknown';
                    allLinks.push({ url: cleanLink, title: linkText });
                }
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    displayLinks(allLinks);
}

function displayLinks(links) {
    const container = document.getElementById('linksContainer');
    container.innerHTML = '';
    if (links.length === 0) {
        container.innerHTML = 'No links found.';
        return;
    }
    links.forEach(link => {
        const linkDiv = document.createElement('div');
        linkDiv.className = 'link-item';

        const image = document.createElement('img');
        image.src = 'https://i.imgur.com/hMAhlhY.png';
        image.alt = 'Link Image';

        const title = document.createElement('span');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.url;
        a.target = '_blank';

        linkDiv.appendChild(image);
        linkDiv.appendChild(title);
        linkDiv.appendChild(a);
        container.appendChild(linkDiv);
    });

    container.style.display = 'block';
}

document.getElementById('unlockButton').addEventListener('click', async () => {
    const ip = await getUserIP();
    if (ip) {
        try {
            await fetch('/lock-ip', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ip, duration: 0 })
            });
            window.location.reload();
        } catch (error) {
            console.error('Error unlocking content:', error);
        }
    }
});
