// ==================== متغيرات عامة ====================
let currentScreen = 1;
let gameActive = false;
let cards = [];
let flippedCards = [];
let matches = 0;
let shuffleTimer;
let shuffleTime = 10;
let isGameStarted = false;

// رموز اللعبة
const symbols = ['🌸', '✨', '💖', '🎯', '🌟', '🎁', '💎', '🌈', '🌸', '✨', '💖', '🎯', '🌟', '🎁', '💎', '🌈'];

// ==================== تحميل البيانات المحفوظة ====================
function loadSavedData() {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get('data');
    
    let savedData = null;
    
    if (encodedData) {
        try {
            let decoded = decodeURIComponent(atob(encodedData));
            savedData = JSON.parse(decoded);
            localStorage.setItem('motherSiteData', JSON.stringify(savedData));
        } catch(e) {
            console.log('خطأ في فك التشفير');
        }
    }
    
    if (!savedData) {
        const stored = localStorage.getItem('motherSiteData');
        if (stored) {
            try {
                savedData = JSON.parse(stored);
            } catch(e) {}
        }
    }
    
    if (savedData) {
        applyDataToSite(savedData);
    }
}

function applyDataToSite(data) {
    if (data.welcomeTitle) document.getElementById('welcomeTitle').innerText = data.welcomeTitle;
    if (data.welcomeSubtitle) document.getElementById('welcomeSubtitle').innerText = data.welcomeSubtitle;
    if (data.portalGuide1) document.getElementById('portalGuide1').innerText = data.portalGuide1;
    if (data.portalGuide2) document.getElementById('portalGuide2').innerText = data.portalGuide2;
    if (data.portalText) document.getElementById('portalText').innerText = data.portalText;
    if (data.noteText1) document.getElementById('noteText1').innerHTML = data.noteText1;
    if (data.noteText2) document.getElementById('noteText2').innerText = data.noteText2;
    
    if (data.gameTitle) document.getElementById('gameTitle').innerHTML = data.gameTitle;
    if (data.gameSubtitle) document.getElementById('gameSubtitle').innerText = data.gameSubtitle;
    if (data.gameInstTitle) document.getElementById('gameInstTitle').innerText = data.gameInstTitle;
    if (data.gameInstText) document.getElementById('gameInstText').innerText = data.gameInstText;
    if (data.gameHint) document.getElementById('gameHint').innerText = data.gameHint;
    if (data.startBtnText) document.getElementById('startBtnText').innerText = data.startBtnText;
    if (data.matchLabel) document.getElementById('matchLabel').innerText = data.matchLabel;
    if (data.shuffleLabel) document.getElementById('shuffleLabel').innerText = data.shuffleLabel;
    
    if (data.celebTitle) document.getElementById('celebTitle').innerHTML = data.celebTitle;
    if (data.celebLine1) document.getElementById('celebLine1').innerText = data.celebLine1;
    if (data.celebLine2) document.getElementById('celebLine2').innerText = data.celebLine2;
    if (data.celebLine3) document.getElementById('celebLine3').innerText = data.celebLine3;
    if (data.proudText) document.getElementById('proudText').innerHTML = data.proudText;
    if (data.giftBtnText) document.getElementById('giftBtnText').innerText = data.giftBtnText;
    
    if (data.giftTitle) document.getElementById('giftTitle').innerHTML = data.giftTitle;
    if (data.giftSubtitle) document.getElementById('giftSubtitle').innerText = data.giftSubtitle;
    if (data.letterTitle) document.getElementById('letterTitle').innerHTML = data.letterTitle;
    if (data.continueText) document.getElementById('continueText').innerText = data.continueText;
    
    let letterHtml = '';
    if (data.letterPara1) letterHtml += `<p>${data.letterPara1}</p>`;
    if (data.letterPara2) letterHtml += `<p>${data.letterPara2}</p>`;
    if (data.letterPara3) letterHtml += `<p>${data.letterPara3}</p>`;
    if (data.letterPara4) letterHtml += `<p style="white-space: pre-line;">${data.letterPara4}</p>`;
    if (data.letterPara5) letterHtml += `<p style="white-space: pre-line;">${data.letterPara5}</p>`;
    document.getElementById('letterContent').innerHTML = letterHtml;
    
    const sig = document.getElementById('signature');
    if (sig) {
        if (data.signature1) sig.querySelector('p:first-child').innerText = data.signature1;
        if (data.signature2) sig.querySelector('p:nth-child(2)').innerText = data.signature2;
    }
    
    if (data.finalTitle) document.getElementById('finalTitle').innerText = data.finalTitle;
    if (data.finalQuote) document.getElementById('finalQuote').innerText = data.finalQuote;
    if (data.finalMessage) document.getElementById('finalMessage').innerHTML = data.finalMessage;
    if (data.finalMessage2) document.getElementById('finalMessage2').innerHTML = data.finalMessage2;
    if (data.shareText) document.getElementById('shareText').innerText = data.shareText;
    if (data.replayText) document.getElementById('replayText').innerText = data.replayText;
    if (data.footerLine1) document.getElementById('footerLine1').innerHTML = data.footerLine1;
    if (data.footerName) document.getElementById('footerName').innerHTML = data.footerName;
    if (data.footerDate) document.getElementById('footerDate').innerHTML = data.footerDate;
    
    if (data.wisdomCards && data.wisdomCards.length > 0) {
        const container = document.getElementById('wisdomCards');
        if (container) {
            container.innerHTML = '';
            data.wisdomCards.forEach((card, index) => {
                container.innerHTML += `
                    <div class="wisdom-card">
                        <div class="card-number">${index + 1}</div>
                        <h3>${card.title || 'حكمة اليوم:'}</h3>
                        <p>${card.text}</p>
                    </div>
                `;
            });
        }
    }
}

// ==================== بداية التشغيل ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ الموقع بدأ التشغيل');
    
    createStars();
    setupGame();
    loadSavedData();
    updateProgressTracker();
    
    setTimeout(function() {
        const loading = document.getElementById('loadingScreen');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(function() {
                loading.style.display = 'none';
            }, 500);
        }
    }, 2000);
    
    // إضافة الأحداث
    document.getElementById('magicPortal').addEventListener('click', activatePortal);
    document.getElementById('startGameBtn').addEventListener('click', startGame);
    document.getElementById('giftBtn').addEventListener('click', goToGift);
    document.getElementById('realGift').addEventListener('click', openGift);
    document.getElementById('continueToFinal').addEventListener('click', goToFinal);
    document.getElementById('shareBtn').addEventListener('click', shareMoment);
    document.getElementById('replayBtn').addEventListener('click', restart);
    document.getElementById('panelToggle').addEventListener('click', togglePanel);
    
    // نقاط التتبع
    document.querySelectorAll('.tracker-dot').forEach(function(dot) {
        dot.addEventListener('click', function() {
            const screenNum = parseInt(this.getAttribute('data-screen'));
            goToScreen(screenNum);
        });
    });
    
    // زر الدخول للإدارة
    const adminSecret = document.getElementById('adminSecret');
    let pressTimer;
    adminSecret.addEventListener('mousedown', function() {
        pressTimer = setTimeout(function() {
            window.location.href = 'admin.html';
        }, 3000);
    });
    adminSecret.addEventListener('mouseup', function() { clearTimeout(pressTimer); });
    adminSecret.addEventListener('mouseleave', function() { clearTimeout(pressTimer); });
});

// ==================== نجوم متحركة ====================
function createStars() {
    const container = document.getElementById('starsBg');
    if (!container) return;
    
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.7 + 0.3};
            animation: twinkle ${Math.random() * 3 + 2}s infinite;
        `;
        container.appendChild(star);
    }
}

// ==================== البوابة ====================
function activatePortal() {
    const portal = document.querySelector('.magic-portal');
    const core = document.querySelector('.portal-core');
    
    if (!portal || !core) return;
    
    portal.style.animation = 'none';
    core.style.transform = 'translate(-50%, -50%) scale(1.5)';
    core.style.opacity = '0.8';
    
    createSparks(portal);
    
    setTimeout(function() {
        goToScreen(2);
    }, 1200);
}

function createSparks(container) {
    for (let i = 0; i < 20; i++) {
        const spark = document.createElement('div');
        spark.innerHTML = '✨';
        spark.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 1.5 + 1}rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            pointer-events: none;
            z-index: 10;
        `;
        container.appendChild(spark);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 120;
        const duration = 0.5 + Math.random() * 0.5;
        
        spark.animate([
            { opacity: 1, transform: `translate(-50%, -50%) rotate(0deg)` },
            { opacity: 0, transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${Math.random() * 360}deg)` }
        ], { duration: duration * 1000 });
        
        setTimeout(function() {
            if (spark.parentNode) spark.remove();
        }, duration * 1000);
    }
}

// ==================== لعبة الذاكرة ====================
function setupGame() {
    const board = document.getElementById('gameBoard');
    if (!board) return;
    
    board.innerHTML = '';
    cards = [];
    
    symbols.forEach(function(symbol, i) {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.dataset.symbol = symbol;
        card.dataset.index = i;
        card.innerHTML = '?';
        card.onclick = function() { flipCard(card); };
        board.appendChild(card);
        cards.push({ element: card, symbol: symbol, matched: false });
    });
}

function startGame() {
    if (gameActive || isGameStarted) return;
    
    isGameStarted = true;
    gameActive = true;
    matches = 0;
    flippedCards = [];
    shuffleTime = 10;
    updateGameStats();
    
    cards.forEach(function(card) {
        card.element.className = 'game-card';
        card.matched = false;
        card.element.innerHTML = '?';
    });
    
    shuffleCards();
    
    clearInterval(shuffleTimer);
    shuffleTimer = setInterval(function() {
        if (shuffleTime > 0) {
            shuffleTime--;
            const shuffleTimeElem = document.getElementById('shuffleTime');
            if (shuffleTimeElem) shuffleTimeElem.innerText = shuffleTime;
            
            if (shuffleTime === 0) {
                shuffleUnmatchedCards();
                shuffleTime = 10;
                showNotification('🔄 الكروت اتحركت! استمري يا ذكية!');
            }
        }
    }, 1000);
    
    showNotification('🎮 يلا بينا! دوري على الكروت المتشابهة');
}

function shuffleCards() {
    const unmatchedIndices = cards.map(function(_, i) { return i; });
    for (let i = unmatchedIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [unmatchedIndices[i], unmatchedIndices[j]] = [unmatchedIndices[j], unmatchedIndices[i]];
    }
    
    unmatchedIndices.forEach(function(newIndex, oldIndex) {
        cards[oldIndex].element.style.order = newIndex;
    });
}

function shuffleUnmatchedCards() {
    if (!gameActive) return;
    
    const unmatchedCards = cards.filter(function(c) { return !c.matched; });
    if (unmatchedCards.length === 0) return;
    
    const indices = unmatchedCards.map(function(_, i) { return i; });
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    unmatchedCards.forEach(function(card, i) {
        card.element.style.order = indices[i];
    });
    
    flippedCards.forEach(function(card) {
        if (card && !cards.find(function(c) { return c.element === card && c.matched; })) {
            card.classList.remove('revealed');
            card.innerHTML = '?';
        }
    });
    flippedCards = [];
}

function flipCard(card) {
    if (!gameActive || flippedCards.length >= 2) return;
    if (card.classList.contains('revealed')) return;
    
    const cardData = cards.find(function(c) { return c.element === card; });
    if (cardData.matched) return;
    
    card.classList.add('revealed');
    card.innerHTML = cardData.symbol;
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];
    const data1 = cards.find(function(c) { return c.element === card1; });
    const data2 = cards.find(function(c) { return c.element === card2; });
    
    if (data1.symbol === data2.symbol) {
        matches++;
        data1.matched = true;
        data2.matched = true;
        
        setTimeout(function() {
            card1.classList.add('matched');
            card2.classList.add('matched');
            flippedCards = [];
            updateGameStats();
            
            if (matches === symbols.length / 2) {
                endGame();
            }
        }, 300);
    } else {
        setTimeout(function() {
            card1.classList.remove('revealed');
            card2.classList.remove('revealed');
            card1.innerHTML = '?';
            card2.innerHTML = '?';
            flippedCards = [];
        }, 800);
    }
}

function updateGameStats() {
    const matchesElem = document.getElementById('matches');
    if (matchesElem) {
        matchesElem.innerText = matches + '/' + (symbols.length / 2);
    }
}

function endGame() {
    gameActive = false;
    isGameStarted = false;
    clearInterval(shuffleTimer);
    showNotification('🏆 مبروك! فزتي زي العادة!');
    setTimeout(function() {
        goToScreen(3);
    }, 1500);
}

// ==================== التنقل بين الشاشات ====================
function goToScreen(num) {
    const current = document.querySelector('.screen.active');
    const next = document.getElementById('screen' + num);
    
    if (!next) return;
    
    if (current) {
        current.classList.remove('active');
    }
    
    next.classList.add('active');
    currentScreen = num;
    updateProgressTracker();
    
    if (num === 2) {
        setupGame();
        isGameStarted = false;
        gameActive = false;
    }
}

function goToGift() {
    goToScreen(4);
}

function openGift() {
    const gift = document.getElementById('realGift');
    const letter = document.getElementById('letterReveal');
    
    if (!gift || !letter) return;
    
    gift.style.transform = 'scale(0.95)';
    gift.style.opacity = '0.7';
    
    setTimeout(function() {
        gift.style.display = 'none';
        letter.style.display = 'block';
        showNotification('💌 الرسالة جاية! اقرأيها بقلبك');
    }, 500);
}

function goToFinal() {
    goToScreen(5);
}

function restart() {
    location.reload();
}

function shareMoment() {
    if (navigator.share) {
        navigator.share({
            title: 'هدية الصداقة',
            text: 'شوفي هدية الصداقة الجميلة هذه!',
            url: window.location.href
        }).catch(function() {
            copyToClipboard();
        });
    } else {
        copyToClipboard();
    }
}

function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    showNotification('📋 تم نسخ الرابط');
}

// ==================== مؤشر التقدم ====================
function updateProgressTracker() {
    const screenNames = ['البداية', 'اللعبة', 'الاحتفال', 'الهدية', 'الختام'];
    const indicator = document.getElementById('screenIndicator');
    if (indicator) {
        indicator.innerText = screenNames[currentScreen - 1];
    }
    
    const dots = document.querySelectorAll('.tracker-dot');
    for (let i = 0; i < dots.length; i++) {
        if (i + 1 === currentScreen) {
            dots[i].classList.add('active');
        } else {
            dots[i].classList.remove('active');
        }
    }
}

function togglePanel() {
    const panel = document.getElementById('controlPanel');
    if (panel) {
        panel.classList.toggle('active');
    }
}

// ==================== إشعارات ====================
function showNotification(msg) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.innerHTML = msg;
    document.body.appendChild(notif);
    
    setTimeout(function() {
        if (notif.parentNode) {
            notif.remove();
        }
    }, 2500);
}