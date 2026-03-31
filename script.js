const API_URL = 'http://localhost:3000';

// State
let currentLang = 'en';
let enteredPin = '';
let withdrawAmount = '';
let depositAmount = '';

// Language Dictionary
const dict = {
    en: {
        welcome: "WELCOME TO SMART BANK",
        insert: "Please insert your card to start",
        enterPin: "ENTER PIN",
        menuTitle: "SELECT OPERATION",
        btnWithdraw: "Withdrawal",
        btnDeposit: "Deposit",
        btnBalance: "Balance Enquiry",
        btnExit: "Exit",
        withdrawTitle: "WITHDRAW CASH",
        multiples: "Enter amount in multiples of 100",
        depositTitle: "DEPOSIT CASH",
        depositInst: "Enter amount up to 2,00,000",
        balanceTitle: "AVAILABLE BALANCE",
        anotherTxn: "Do you want another transaction?",
        btnYes: "Yes",
        btnNo: "No",
        btnBack: "Back",
        btnCancel: "CANCEL",
        btnClear: "CLEAR",
        btnSubmit: "ENTER",
        successProcessing: "Processing Transaction...",
        thankYou: "THANK YOU FOR USING SMART BANK",
        collectCard: "Please collect your card"
    },
    hi: {
        welcome: "स्मार्ट बैंक में आपका स्वागत है",
        insert: "शुरू करने के लिए अपना कार्ड डालें",
        enterPin: "पिन दर्ज करें",
        menuTitle: "ऑपरेशन चुनें",
        btnWithdraw: "निकासी",
        btnDeposit: "जमा",
        btnBalance: "बैलेंस पूछताछ",
        btnExit: "बाहर जाएं",
        withdrawTitle: "नकद निकासी",
        multiples: "100 के गुणकों में राशि दर्ज करें",
        depositTitle: "नकद जमा करें",
        depositInst: "2,00,000 तक की राशि दर्ज करें",
        balanceTitle: "उपलब्ध बैलेंस",
        anotherTxn: "क्या आप एक और लेनदेन चाहते हैं?",
        btnYes: "हाँ",
        btnNo: "नहीं",
        btnBack: "वापस",
        btnCancel: "रद्द करें",
        btnClear: "साफ करें",
        btnSubmit: "दर्ज करें",
        successProcessing: "लेनदेन संसाधित किया जा रहा है...",
        thankYou: "स्मार्ट बैंक का उपयोग करने के लिए धन्यवाद",
        collectCard: "कृपया अपना कार्ड लें"
    },
    ta: {
        welcome: "ஸ்மார்ட் வங்கிக்கு வருக",
        insert: "தொடங்க உங்கள் கார்டை செருகவும்",
        enterPin: "பின் உள்ளிடவும்",
        menuTitle: "செயல்பாட்டைத் தேர்ந்தெடுக்கவும்",
        btnWithdraw: "பணம் எடுத்தல்",
        btnDeposit: "பணம் செலுத்துதல்",
        btnBalance: "கையிருப்பு விசாரணை",
        btnExit: "வெளியேறு",
        withdrawTitle: "பணம் எடுத்தல்",
        multiples: "100ன் மடங்குகளில் தொகையை உள்ளிடவும்",
        depositTitle: "பணம் வைப்பு",
        depositInst: "2,00,000 வரை தொகையை உள்ளிடவும்",
        balanceTitle: "கிடைக்கக்கூடிய இருப்பு",
        anotherTxn: "நீங்கள் மற்றொரு பரிவர்த்தனை செய்ய விரும்புகிறீர்களா?",
        btnYes: "ஆம்",
        btnNo: "இல்லை",
        btnBack: "பின்னால்",
        btnCancel: "ரத்து செய்",
        btnClear: "அழி",
        btnSubmit: "உள்ளிடுக",
        successProcessing: "செயலாக்கப்படுகிறது...",
        thankYou: "பயன்படுத்தியதற்கு நன்றி",
        collectCard: "கார்டை எடுத்துக்கொள்ளவும்"
    },
    te: {
        welcome: "స్మార్ట్ బ్యాంకుకు స్వాగతం",
        insert: "ప్రారంభించడానికి మీ కార్డును చొప్పించండి",
        enterPin: "పిన్ నమోదు చేయండి",
        menuTitle: "కార్యాచరణను ఎంచుకోండి",
        btnWithdraw: "నగదు ఉపసంహరణ",
        btnDeposit: "నగదు జమ",
        btnBalance: "నిల్వ విచారణ",
        btnExit: "నిష్క్రమించండి",
        withdrawTitle: "నగదు ఉపసంహరణ",
        multiples: "100 గుణిజాలలో మొత్తాన్ని నమోదు చేయండి",
        depositTitle: "నగదు జమ చేయండి",
        depositInst: "2,00,000 వరకు మొత్తాన్ని నమోదు చేయండి",
        balanceTitle: "అందుబాటులో ఉన్న నిల్వ",
        anotherTxn: "మీరు మరో లావాదేవీని కోరుకుంటున్నారా?",
        btnYes: "అవును",
        btnNo: "కాదు",
        btnBack: "వెనుకకు",
        btnCancel: "రద్దు చేయండి",
        btnClear: "తాజా చేయండి",
        btnSubmit: "నమోదు చేయండి",
        successProcessing: "లావాదేవీ ప్రాసెస్ అవుతోంది...",
        thankYou: "స్మార్ట్ బ్యాంక్ ఉపయోగించినందుకు ధన్యవాదాలు",
        collectCard: "దయచేసి మీ కార్డును తీసుకోండి"
    },
    ml: {
        welcome: "സ്മാർട്ട് ബാങ്കിലേക്ക് സ്വാഗതം",
        insert: "തുടങ്ങാൻ നിങ്ങളുടെ കാർഡ് ഇടുക",
        enterPin: "പിൻ നൽകുക",
        menuTitle: "പ്രവർത്തനം തിരഞ്ഞെടുക്കുക",
        btnWithdraw: "പിൻവലിക്കൽ",
        btnDeposit: "നിക്ഷേപം",
        btnBalance: "ബാലൻസ് അന്വേഷണം",
        btnExit: "പുറത്തുകടക്കുക",
        withdrawTitle: "പണം പിൻവലിക്കുക",
        multiples: "100 ന്റെ ഗുണിതങ്ങളിൽ തുക നൽകുക",
        depositTitle: "പണം നിക്ഷേപിക്കുക",
        depositInst: "2,00,000 വരെ തുക നൽകുക",
        balanceTitle: "ലഭ്യമായ ബാലൻസ്",
        anotherTxn: "നിങ്ങൾക്ക് മറ്റൊരു ഇടപാട് വേണമെന്നുണ്ടോ?",
        btnYes: "അതെ",
        btnNo: "ഇല്ല",
        btnBack: "തിരികെ",
        btnCancel: "റദ്ദാക്കുക",
        btnClear: "മായ്ക്കുക",
        btnSubmit: "നൽകുക",
        successProcessing: "ഇടപാട് പ്രോസസ്സ് ചെയ്യുന്നു...",
        thankYou: "സ്മാർട്ട് ബാങ്ക് ഉപയോഗിച്ചതിന് നന്ദി",
        collectCard: "ദയവായി നിങ്ങളുടെ കാർഡ് എടുക്കുക"
    },
    kn: {
        welcome: "ಸ್ಮಾರ್ಟ್ ಬ್ಯಾಂಕ್‌ಗೆ ಸ್ವಾಗತ",
        insert: "ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮ ಕಾರ್ಡ್ ಅನ್ನು ಸೇರಿಸಿ",
        enterPin: "ಪಿನ್ ನಮೂದಿಸಿ",
        menuTitle: "ಕಾರ್ಯಾಚರಣೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        btnWithdraw: "ಹಣ ಹಿಂಪಡೆಯುವಿಕೆ",
        btnDeposit: "ಠೇವಣಿ",
        btnBalance: "ಬ್ಯಾಲೆನ್ಸ್ ವಿಚಾರಣೆ",
        btnExit: "ನಿರ್ಗಮಿಸಿ",
        withdrawTitle: "ಹಣ ಹಿಂಪಡೆಯಿರಿ",
        multiples: "100 ರ ಗುಣಕಗಳಲ್ಲಿ ಮೊತ್ತವನ್ನು ನಮೂದಿಸಿ",
        depositTitle: "ಹಣ ಜಮಾ ಮಾಡಿ",
        depositInst: "2,00,000 ವರೆಗೆ ಮೊತ್ತವನ್ನು ನಮೂದಿಸಿ",
        balanceTitle: "ಲಭ್ಯವಿರುವ ಬ್ಯಾಲೆನ್ಸ್",
        anotherTxn: "ನೀವು ಇನ್ನೊಂದು ವಹಿವಾಟು ಬಯಸುತ್ತೀರಾ?",
        btnYes: "ಹೌದು",
        btnNo: "ಇಲ್ಲ",
        btnBack: "ಹಿಂದೆ",
        btnCancel: "ರದ್ದುಮಾಡಿ",
        btnClear: "ಅಳಿಸಿ",
        btnSubmit: "ನಮೂದಿಸಿ",
        successProcessing: "ವಹಿವಾಟು ಪ್ರಕ್ರಿಯೆಗೊಳ್ಳುತ್ತಿದೆ...",
        thankYou: "ಸ್ಮಾರ್ಟ್ ಬ್ಯಾಂಕ್ ಬಳಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು",
        collectCard: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಕಾರ್ಡ್ ತೆಗೆದುಕೊಳ್ಳಿ"
    },
    fr: {
        welcome: "BIENVENUE À SMART BANK",
        insert: "Veuillez insérer votre carte pour commencer",
        enterPin: "ENTRER LE CODE PIN",
        menuTitle: "SÉLECTIONNER L'OPÉRATION",
        btnWithdraw: "Retrait",
        btnDeposit: "Dépôt",
        btnBalance: "Demande de solde",
        btnExit: "Quitter",
        withdrawTitle: "RETIRER DE L'ESPÈCES",
        multiples: "Entrez le montant en multiples de 100",
        depositTitle: "DÉPOSER DE L'ESPÈCES",
        depositInst: "Entrez un montant jusqu'à 2 00 000",
        balanceTitle: "SOLDE DISPONIBLE",
        anotherTxn: "Voulez-vous une autre transaction ?",
        btnYes: "Oui",
        btnNo: "Non",
        btnBack: "Retour",
        btnCancel: "ANNULER",
        btnClear: "EFFACER",
        btnSubmit: "ENTRER",
        successProcessing: "Traitement de la transaction...",
        thankYou: "MERCI D'AVOIR UTILISÉ SMART BANK",
        collectCard: "Veuillez récupérer votre carte"
    },
    es: {
        welcome: "BIENVENIDO A SMART BANK",
        insert: "Por favor inserte su tarjeta para comenzar",
        enterPin: "INGRESAR PIN",
        menuTitle: "SELECCIONAR OPERACIÓN",
        btnWithdraw: "Retiro",
        btnDeposit: "Depósito",
        btnBalance: "Consulta de Saldo",
        btnExit: "Salir",
        withdrawTitle: "RETIRAR EFECTIVO",
        multiples: "Ingrese el monto en múltiplos de 100",
        depositTitle: "DEPOSITAR EFECTIVO",
        depositInst: "Ingrese monto hasta 2,00,000",
        balanceTitle: "SALDO DISPONIBLE",
        anotherTxn: "¿Desea otra transacción?",
        btnYes: "Sí",
        btnNo: "No",
        btnBack: "Volver",
        btnCancel: "CANCELAR",
        btnClear: "BORRAR",
        btnSubmit: "ENTRAR",
        successProcessing: "Procesando Transacción...",
        thankYou: "GRACIAS POR USAR SMART BANK",
        collectCard: "Por favor retire su tarjeta"
    },
    de: {
        welcome: "WILLKOMMEN BEI SMART BANK",
        insert: "Bitte führen Sie Ihre Karte ein",
        enterPin: "PIN EINGEBEN",
        menuTitle: "VORGANG WÄHLEN",
        btnWithdraw: "Auszahlung",
        btnDeposit: "Einzahlung",
        btnBalance: "Kontostand",
        btnExit: "Beenden",
        withdrawTitle: "BARGELD ABHEBEN",
        multiples: "Geben Sie den Betrag in Vielfachen von 100 ein",
        depositTitle: "BARGELD EINZAHLEN",
        depositInst: "Betrag bis zu 2.00.000 eingeben",
        balanceTitle: "VERFÜGBARER KONTOSTAND",
        anotherTxn: "Möchten Sie eine weitere Transaktion?",
        btnYes: "Ja",
        btnNo: "Nein",
        btnBack: "Zurück",
        btnCancel: "ABBRECHEN",
        btnClear: "LÖSCHEN",
        btnSubmit: "EINGABE",
        successProcessing: "Transaktion wird verarbeitet...",
        thankYou: "DANKE, DASS SIE SMART BANK NUTZEN",
        collectCard: "Bitte entnehmen Sie Ihre Karte"
    },
    zh: {
        welcome: "欢迎来到智能银行",
        insert: "请插入您的卡片以开始",
        enterPin: "输入密码",
        menuTitle: "选择操作",
        btnWithdraw: "取款",
        btnDeposit: "存款",
        btnBalance: "余额查询",
        btnExit: "退出",
        withdrawTitle: "提取现金",
        multiples: "请输入100的倍数金额",
        depositTitle: "存入现金",
        depositInst: "输入金额，最高2,00,000",
        balanceTitle: "可用余额",
        anotherTxn: "您想进行其他交易吗？",
        btnYes: "是",
        btnNo: "否",
        btnBack: "返回",
        btnCancel: "取消",
        btnClear: "清除",
        btnSubmit: "确定",
        successProcessing: "正在处理交易...",
        thankYou: "感谢您使用智能银行",
        collectCard: "请取走您的卡片"
    }
};

// UI helpers
function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    // Clear inputs when navigating
    document.getElementById('withdraw-error').innerText = '';
    document.getElementById('deposit-error').innerText = '';
    clearAmt('w');
    clearAmt('d');
}

function updateLanguage(lang) {
    const t = dict[lang] || dict.en;
    document.getElementById('text-welcome').innerText = t.welcome;
    document.getElementById('text-insert').innerText = t.insert;
    document.getElementById('text-enter-pin').innerText = t.enterPin;
    document.getElementById('text-menu-title').innerText = t.menuTitle;
    document.getElementById('btn-withdraw').innerText = t.btnWithdraw;
    document.getElementById('btn-deposit').innerText = t.btnDeposit;
    document.getElementById('btn-balance').innerText = t.btnBalance;
    if (document.getElementById('btn-statement')) document.getElementById('btn-statement').innerText = t.btnStatement || "Mini Statement";
    document.getElementById('btn-exit').innerText = t.btnExit;
    document.getElementById('text-withdraw').innerText = t.withdrawTitle;
    document.getElementById('text-multiples').innerText = t.multiples;
    document.getElementById('text-deposit').innerText = t.depositTitle;
    document.getElementById('text-deposit-inst').innerText = t.depositInst;
    document.getElementById('text-balance-title').innerText = t.balanceTitle;
    if (document.getElementById('text-statement-title')) document.getElementById('text-statement-title').innerText = t.statementTitle || "MINI STATEMENT";
    document.getElementById('text-another-txn').innerText = t.anotherTxn;
    document.getElementById('btn-yes').innerText = t.btnYes;
    document.getElementById('btn-no').innerText = t.btnNo;
    document.getElementById('btn-w-back').innerText = t.btnBack;
    document.getElementById('btn-d-back').innerText = t.btnBack;
    if (document.getElementById('btn-s-back')) document.getElementById('btn-s-back').innerText = t.btnBack;
    document.getElementById('text-processing').innerText = t.successProcessing;
    document.getElementById('text-thank-you').innerText = t.thankYou;
    document.getElementById('text-collect-card').innerText = t.collectCard;
    document.getElementById('btn-cancel').innerText = t.btnCancel;
    document.getElementById('btn-clear').innerText = t.btnClear;
    document.getElementById('btn-w-submit').innerText = t.btnSubmit;
    document.getElementById('btn-d-submit').innerText = t.btnSubmit;
}

// Actions
function selectLanguage(lang) {
    currentLang = lang;
    updateLanguage(lang);
    goTo('screen-welcome');
}

function insertCard() {
    goTo('screen-pin');
    clearPin();
}

function updatePinDisplay() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < enteredPin.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
}

function pressKey(num) {
    if (enteredPin.length < 4) {
        enteredPin += num;
        updatePinDisplay();
        
        if (enteredPin.length === 4) {
            verifyPin();
        }
    }
}

function clearPin() {
    enteredPin = '';
    document.getElementById('pin-error').innerText = '';
    updatePinDisplay();
}

function cancelPin() {
    goTo('screen-welcome');
}

async function verifyPin() {
    try {
        const res = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pin: enteredPin })
        });
        const data = await res.json();
        
        if (data.success) {
            goTo('screen-menu');
        } else {
            document.getElementById('pin-error').innerText = data.message;
            setTimeout(clearPin, 1000);
        }
    } catch (err) {
        document.getElementById('pin-error').innerText = "Server Error. Try again.";
        setTimeout(clearPin, 1000);
    }
}

// Withdrawal / Deposit Keypad
function pressAmtKey(type, num) {
    if (type === 'w') {
        if (withdrawAmount.length < 6) withdrawAmount += num;
        document.getElementById('withdraw-amount').innerText = withdrawAmount || '0';
    } else {
        if (depositAmount.length < 6) depositAmount += num;
        document.getElementById('deposit-amount').innerText = depositAmount || '0';
    }
}

function clearAmt(type) {
    if (type === 'w') {
        withdrawAmount = '';
        document.getElementById('withdraw-amount').innerText = '0';
    } else {
        depositAmount = '';
        document.getElementById('deposit-amount').innerText = '0';
    }
}

// Transactions
async function submitWithdraw() {
    const amount = Number(withdrawAmount);
    if (!amount) return;

    try {
        const res = await fetch(`${API_URL}/withdraw`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, pin: enteredPin })
        });
        const data = await res.json();
        
        if (data.success) {
            showSuccess(data.message, true);
        } else {
            document.getElementById('withdraw-error').innerText = data.message;
            setTimeout(() => clearAmt('w'), 2000);
        }
    } catch (err) {
        document.getElementById('withdraw-error').innerText = "Server Error.";
    }
}

async function submitDeposit() {
    const amount = Number(depositAmount);
    if (!amount) return;

    try {
        const res = await fetch(`${API_URL}/deposit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, pin: enteredPin })
        });
        const data = await res.json();
        
        if (data.success) {
            showSuccess(data.message, false);
        } else {
            document.getElementById('deposit-error').innerText = data.message;
            setTimeout(() => clearAmt('d'), 2000);
        }
    } catch (err) {
        document.getElementById('deposit-error').innerText = "Server Error.";
    }
}

async function checkBalance() {
    try {
        const res = await fetch(`${API_URL}/balance?pin=${enteredPin}`);
        const data = await res.json();
        
        if (data.success) {
            document.getElementById('balance-value').innerText = data.balance.toLocaleString('en-IN') + '.00';
            goTo('screen-balance');
        }
    } catch (err) {
        alert("Failed to fetch balance.");
    }
}

// Success & Animation
function showSuccess(msg, isDispense) {
    goTo('screen-success');
    document.getElementById('success-msg').innerText = '';
    
    const animArea = document.getElementById('cash-anim-area');
    if (isDispense) {
        animArea.style.display = 'block';
        // Reset animation
        animArea.innerHTML = `
            <div class="cash-slot"></div>
            <div class="money-bill bill-1">₹500</div>
            <div class="money-bill bill-2">₹500</div>
            <div class="money-bill bill-3">₹500</div>
        `;
    } else {
        animArea.style.display = 'none';
    }

    // Wait for animation (if any) then show message and prompt
    setTimeout(() => {
        document.getElementById('success-msg').innerText = msg;
        setTimeout(() => {
            goTo('screen-balance'); // Show balance after success
            checkBalance();
        }, 3000);
    }, isDispense ? 2500 : 1000);
}

function exitTransaction() {
    goTo('screen-exit');
}

function takeCard() {
    // Reset to start
    currentLang = 'en';
    enteredPin = '';
    withdrawAmount = '';
    depositAmount = '';
    goTo('screen-language');
}

async function checkStatement() {
    try {
        const res = await fetch(`${API_URL}/transactions?pin=${enteredPin}`);
        const data = await res.json();
        
        if (data.success) {
            const list = document.getElementById('statement-list');
            list.innerHTML = ''; // clear

            if (data.transactions.length === 0) {
                list.innerHTML = '<p style="color:white; margin-top:20px;">No recent transactions</p>';
            } else {
                data.transactions.forEach(txn => {
                    const date = new Date(txn.date).toLocaleString('en-IN', {
                        day: '2-digit', month: 'short', 
                        hour: '2-digit', minute:'2-digit'
                    });
                    const sign = txn.type === 'deposit' ? '+' : '-';
                    const colorClass = txn.type === 'deposit' ? 'deposit' : 'withdrawal';
                    
                    list.innerHTML += `
                        <div class="statement-item ${colorClass}">
                            <div>
                                <div>${txn.type.toUpperCase()}</div>
                                <div class="statement-date">${date}</div>
                            </div>
                            <div>${sign}₹${txn.amount.toLocaleString('en-IN')}</div>
                        </div>
                    `;
                });
            }
            goTo('screen-statement');
        }
    } catch (err) {
        alert("Failed to fetch statement.");
    }
}

// Init
window.onload = () => {
    updateLanguage('en');
    goTo('screen-language');
};
