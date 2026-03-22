// ==================== البيانات الافتراضية ====================
const defaultData = {
    welcomeTitle: "🎉 ياهلااااااااا فيكِ يا صديقتي الغالية 🎉",
    welcomeSubtitle: "مرت سنة كاملة... وأنتِ جنبي 🤍",
    portalGuide1: "يلا يا عمري",
    portalGuide2: "اضغطي على البوابة عشان تشوفي المفاجأة 🚀",
    portalText: "إبدأي",
    noteText1: "💖 <strong>تذكير:</strong> كل مرحلة فيها مفاجأة أحلى من اللي قبلها",
    noteText2: "(والمتعة لسى ما بدأت 😉)",
    
    gameTitle: "🎮 لعبة الذكريات 🧩",
    gameSubtitle: "جربي تشغلي مخك شوية.. أكيد ذكية كفاية! 😎",
    gameInstTitle: "لعبة الذاكرة الممتعة",
    gameInstText: "كل 10 ثواني، الكروت بتغير أماكنها! 🤹‍♀️",
    gameHint: "(متفكريش كتير.. عقلك سريع أصلاً 💨)",
    startBtnText: "يلا بينا.. خلينا نشغل المخ!",
    matchLabel: "المطابقة",
    shuffleLabel: "التحريك بعد",
    
    celebTitle: "أبدعتييييييي يا حلوة 🎉",
    celebLine1: "😎 شطورررررررررة!",
    celebLine2: "أثبتي إن مخك سريع وذكي زيك 😘",
    celebLine3: "بس الرحلة لسى ما خلصت.. في مفاجأة تستناكِ 🤫",
    proudText: "\"أهم شيء تكوني مبسوطة وتضحكي..<br>لأن ضحكتك هي أجمل شيء في الدنيا 🤗\"",
    giftBtnText: "يلا نشوف الهدية!",
    
    giftTitle: "🎁 واااااو وصلنا للجزء الحلو!",
    giftSubtitle: "هنا أحلى جزء في الرحلة.. لأن هنا خرجت كل كلمة في قلبي 💝",
    letterTitle: "💌 لأجمل صديقة في الدنيا 💌",
    continueText: "يلا بينا للنهاية الحلوة!",
    
    letterPara1: "يا قمر.. يا عسل.. يا أحلى بنوتة فرفوشة في الدنيا 🌸",
    letterPara2: "سنة كاملة مرت.. سنة فيها ضحك وفيها حزن، سنة فيها كل شيء.. بس الأهم إنها كانت معاكِ.",
    letterPara3: "حقيقي وأنا أسوي الموقع هذا، كنت أبتسم طول الوقت 😊 عشان كل شيء فيه يذكرني فيكِ.. بضحكتك، بطيبتك، بأسلوبك الحلو.. وجودك في حياتي هو النعمة اللي ما أقدر أوصفها.",
    letterPara4: "وبصراحة، أنتِ أثبتي إنك:\n• قوية وقت التحديات\n• مشرقة وقت الصعوبات\n• طيبة وما في بنت طيبة زيك",
    letterPara5: "أنا مش بس فخورة فيكِ.. أنا فرحانة بفرحتك ويا رب نشوف منك الأجمل دائمًا ❤️\n\nبس أتمنى منك تشاركيني.. زعلك زي فرحك.. عشان كذا نحن صديقات لازم نكون مع بعض دايمًا 😊",
    
    signature1: "بكل الحب والاحترام",
    signature2: "صديقتك اللي عمرها ما تقدر تنساكِ",
    
    finalTitle: "🎉 خلاصة الرحلة الرائعة دي! 🎉",
    finalQuote: "\"الحمدلله على وجودك في حياتي.. والحمدلله على كل لحظة عشناها سوا 🤍\"",
    finalMessage: "سنة كاملة وأنا معاكِ.. ويا رب سنين أطول وأجمل 💖",
    finalMessage2: "أنتِ الدليل الحي إن <strong>الذكاء والقلب الكبير</strong> ممكن يجتمعوا في بنوتة وحدة!",
    shareText: "شاركي الفرحة 🌍",
    replayText: "أعيدي الرحلة 🔄",
    footerLine1: "مع كل <strong>الحب</strong> والإعجاب اللي في قلبي،",
    footerName: "صديقتك 🎁",
    footerDate: "📆 سنة كاملة.. وأنتِ جنبي ✨",
    
    wisdomCards: [
        { title: "حكمة اليوم:", text: "الصديقة الحقيقية هي اللي بتشوفك على حقيقتك و<b>تحبك</b> زي ما أنتِ ✨" },
        { title: "حكمة اليوم:", text: "كوني كما أنتِ.. اللي يحبك بيبقى معاكِ <b>يا قمر</b> 🥰" },
        { title: "سر بسيط:", text: "كل الناس بتلمع.. بس <b>لمعانك</b> مختلف! عشان كذا أنا أحبك 😘" }
    ]
};

let wisdomCards = [];

// ==================== تحميل البيانات ====================
function loadDataToForm() {
    const savedData = localStorage.getItem('motherSiteData');
    const data = savedData ? JSON.parse(savedData) : defaultData;
    
    setValue('welcomeTitle', data.welcomeTitle);
    setValue('welcomeSubtitle', data.welcomeSubtitle);
    setValue('portalGuide1', data.portalGuide1);
    setValue('portalGuide2', data.portalGuide2);
    setValue('portalText', data.portalText);
    setValue('noteText1', data.noteText1);
    setValue('noteText2', data.noteText2);
    
    setValue('gameTitle', data.gameTitle);
    setValue('gameSubtitle', data.gameSubtitle);
    setValue('gameInstTitle', data.gameInstTitle);
    setValue('gameInstText', data.gameInstText);
    setValue('gameHint', data.gameHint);
    setValue('startBtnText', data.startBtnText);
    setValue('matchLabel', data.matchLabel);
    setValue('shuffleLabel', data.shuffleLabel);
    
    setValue('celebTitle', data.celebTitle);
    setValue('celebLine1', data.celebLine1);
    setValue('celebLine2', data.celebLine2);
    setValue('celebLine3', data.celebLine3);
    setValue('proudText', data.proudText);
    setValue('giftBtnText', data.giftBtnText);
    
    setValue('giftTitle', data.giftTitle);
    setValue('giftSubtitle', data.giftSubtitle);
    setValue('letterTitle', data.letterTitle);
    setValue('continueText', data.continueText);
    
    setValue('letterPara1', data.letterPara1);
    setValue('letterPara2', data.letterPara2);
    setValue('letterPara3', data.letterPara3);
    setValue('letterPara4', data.letterPara4);
    setValue('letterPara5', data.letterPara5);
    setValue('signature1', data.signature1);
    setValue('signature2', data.signature2);
    
    setValue('finalTitle', data.finalTitle);
    setValue('finalQuote', data.finalQuote);
    setValue('finalMessage', data.finalMessage);
    setValue('finalMessage2', data.finalMessage2);
    setValue('shareText', data.shareText);
    setValue('replayText', data.replayText);
    setValue('footerLine1', data.footerLine1);
    setValue('footerName', data.footerName);
    setValue('footerDate', data.footerDate);
    
    wisdomCards = data.wisdomCards ? [...data.wisdomCards] : [...defaultData.wisdomCards];
    renderWisdomCards();
}

function setValue(id, value) {
    const elem = document.getElementById(id);
    if (elem) elem.value = value || '';
}

function getValue(id) {
    const elem = document.getElementById(id);
    return elem ? elem.value : '';
}

function renderWisdomCards() {
    const container = document.getElementById('wisdomCardsList');
    if (!container) return;
    
    container.innerHTML = '';
    
    wisdomCards.forEach(function(card, index) {
        container.innerHTML += `
            <div class="card-item" data-index="${index}">
                <div class="field">
                    <label>عنوان البطاقة:</label>
                    <input type="text" id="cardTitle${index}" value="${escapeHtml(card.title || 'حكمة اليوم:')}">
                </div>
                <div class="field">
                    <label>نص البطاقة:</label>
                    <textarea id="cardText${index}" rows="3">${escapeHtml(card.text)}</textarea>
                </div>
                <button class="btn btn-danger" onclick="removeWisdomCard(${index})">🗑️ حذف البطاقة</button>
            </div>
        `;
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function addWisdomCard() {
    wisdomCards.push({ title: 'حكمة جديدة:', text: 'اكتبي حكمتك هنا...' });
    renderWisdomCards();
    showNotification('✅ تم إضافة بطاقة جديدة');
}

function removeWisdomCard(index) {
    wisdomCards.splice(index, 1);
    renderWisdomCards();
    showNotification('🗑️ تم حذف البطاقة');
}

function saveAllChanges() {
    const data = {
        welcomeTitle: getValue('welcomeTitle'),
        welcomeSubtitle: getValue('welcomeSubtitle'),
        portalGuide1: getValue('portalGuide1'),
        portalGuide2: getValue('portalGuide2'),
        portalText: getValue('portalText'),
        noteText1: getValue('noteText1'),
        noteText2: getValue('noteText2'),
        
        gameTitle: getValue('gameTitle'),
        gameSubtitle: getValue('gameSubtitle'),
        gameInstTitle: getValue('gameInstTitle'),
        gameInstText: getValue('gameInstText'),
        gameHint: getValue('gameHint'),
        startBtnText: getValue('startBtnText'),
        matchLabel: getValue('matchLabel'),
        shuffleLabel: getValue('shuffleLabel'),
        
        celebTitle: getValue('celebTitle'),
        celebLine1: getValue('celebLine1'),
        celebLine2: getValue('celebLine2'),
        celebLine3: getValue('celebLine3'),
        proudText: getValue('proudText'),
        giftBtnText: getValue('giftBtnText'),
        
        giftTitle: getValue('giftTitle'),
        giftSubtitle: getValue('giftSubtitle'),
        letterTitle: getValue('letterTitle'),
        continueText: getValue('continueText'),
        
        letterPara1: getValue('letterPara1'),
        letterPara2: getValue('letterPara2'),
        letterPara3: getValue('letterPara3'),
        letterPara4: getValue('letterPara4'),
        letterPara5: getValue('letterPara5'),
        signature1: getValue('signature1'),
        signature2: getValue('signature2'),
        
        finalTitle: getValue('finalTitle'),
        finalQuote: getValue('finalQuote'),
        finalMessage: getValue('finalMessage'),
        finalMessage2: getValue('finalMessage2'),
        shareText: getValue('shareText'),
        replayText: getValue('replayText'),
        footerLine1: getValue('footerLine1'),
        footerName: getValue('footerName'),
        footerDate: getValue('footerDate'),
        
        wisdomCards: []
    };
    
    for (let i = 0; i < wisdomCards.length; i++) {
        const titleElem = document.getElementById(`cardTitle${i}`);
        const textElem = document.getElementById(`cardText${i}`);
        data.wisdomCards.push({
            title: titleElem ? titleElem.value : wisdomCards[i].title,
            text: textElem ? textElem.value : wisdomCards[i].text
        });
    }
    
    localStorage.setItem('motherSiteData', JSON.stringify(data));
    showNotification('✅ تم حفظ جميع التغييرات بنجاح!');
}

function previewSite() {
    saveAllChanges();
    const data = localStorage.getItem('motherSiteData');
    if (data) {
        const encodedData = btoa(encodeURIComponent(data));
        const baseUrl = window.location.href.split('/admin')[0];
        const previewUrl = baseUrl + '/index.html?data=' + encodedData + '&preview=true';
        window.open(previewUrl, '_blank');
    } else {
        window.open('index.html', '_blank');
    }
}

function resetToDefault() {
    if (confirm('⚠️ هل أنتِ متأكدة من إعادة تعيين كل شيء للإعدادات الافتراضية؟')) {
        localStorage.setItem('motherSiteData', JSON.stringify(defaultData));
        loadDataToForm();
        showNotification('🔄 تم إعادة التعيين للإعدادات الافتراضية');
    }
}

function generateNewLink() {
    saveAllChanges();
    
    const data = localStorage.getItem('motherSiteData');
    if (!data) {
        showNotification('❌ لا توجد بيانات للحفظ');
        return;
    }
    
    let encodedData;
    try {
        const compressed = JSON.stringify(JSON.parse(data));
        encodedData = btoa(encodeURIComponent(compressed));
    } catch(e) {
        encodedData = btoa(encodeURIComponent(data));
    }
    
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.split('/admin')[0];
    const newUrl = baseUrl + '/index.html?data=' + encodedData;
    
    const linkBox = document.getElementById('newLinkBox');
    const newLinkUrl = document.getElementById('newLinkUrl');
    
    if (linkBox && newLinkUrl) {
        newLinkUrl.innerText = newUrl;
        linkBox.classList.remove('hidden');
        showNotification('🔗 تم إنشاء الرابط الجديد');
        copyToClipboard(newUrl);
        showNotification('📋 تم نسخ الرابط تلقائياً');
    }
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

function copyNewLink() {
    const linkElem = document.getElementById('newLinkUrl');
    if (!linkElem) return;
    copyToClipboard(linkElem.innerText);
    showNotification('📋 تم نسخ الرابط الجديد');
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(function(tab) {
        tab.classList.remove('active');
    });
    
    const targetTab = document.getElementById('tab-' + tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        }
    });
}

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

// ==================== تهيئة الصفحة ====================
document.addEventListener('DOMContentLoaded', function() {
    loadDataToForm();
    
    document.getElementById('addWisdomCardBtn').addEventListener('click', addWisdomCard);
    document.getElementById('saveBtn').addEventListener('click', saveAllChanges);
    document.getElementById('previewBtn').addEventListener('click', previewSite);
    document.getElementById('resetBtn').addEventListener('click', resetToDefault);
    document.getElementById('generateLinkBtn').addEventListener('click', generateNewLink);
    document.getElementById('copyLinkBtn').addEventListener('click', copyNewLink);
    
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const tabId = btn.getAttribute('data-tab');
            if (tabId) switchTab(tabId);
        });
    });
    
    showNotification('✨ مرحباً في لوحة التحكم');
});

// تعريف الدوال في النطاق العام
window.addWisdomCard = addWisdomCard;
window.removeWisdomCard = removeWisdomCard;