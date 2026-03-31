const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, '..', 'data.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Helper: read data
function readData() {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

// Helper: write data
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// Helper: generate transaction ID
function genTxnId() {
  return 'TXN' + Date.now();
}

// ─── Routes ─────────────────────────────────────────────────────────────────

// Helper: Get user by PIN
function getUserByPin(data, pin) {
  if (!data.users || !Array.isArray(data.users)) return null;
  return data.users.find(u => u.pin === pin);
}

// POST /login — verify PIN
app.post('/login', (req, res) => {
  const { pin } = req.body;
  if (!pin) return res.status(400).json({ success: false, message: 'PIN is required.' });

  const data = readData();
  const user = getUserByPin(data, pin);
  
  if (user) {
    res.json({ success: true, message: `Welcome ${user.name}` });
  } else {
    res.status(401).json({ success: false, message: 'Invalid PIN. Please try again.' });
  }
});

// GET /balance — fetch current balance
app.get('/balance', (req, res) => {
  const pin = req.query.pin;
  const data = readData();
  const user = getUserByPin(data, pin);
  
  if (!user) return res.status(401).json({ success: false, message: 'Unauthorized' });
  
  res.json({ success: true, balance: user.balance });
});

// POST /withdraw — withdraw amount
app.post('/withdraw', (req, res) => {
  const { pin, amount } = req.body;
  const amt = parseFloat(amount);

  if (!amt || amt <= 0) {
    return res.status(400).json({ success: false, message: 'Please enter a valid amount.' });
  }
  if (amt % 100 !== 0) {
    return res.status(400).json({ success: false, message: 'Amount must be a multiple of ₹100.' });
  }
  if (amt > 20000) {
    return res.status(400).json({ success: false, message: 'Maximum withdrawal limit is ₹20,000 per transaction.' });
  }

  const data = readData();
  const user = getUserByPin(data, pin);
  if (!user) return res.status(401).json({ success: false, message: 'Unauthorized' });

  if (amt > user.balance) {
    return res.status(400).json({ success: false, message: 'Insufficient balance.' });
  }

  user.balance = parseFloat((user.balance - amt).toFixed(2));
  const txn = {
    id: genTxnId(),
    type: 'withdrawal',
    amount: amt,
    date: new Date().toISOString(),
    balanceAfter: user.balance
  };
  if (!user.transactions) user.transactions = [];
  user.transactions.push(txn);
  writeData(data);

  res.json({ success: true, message: `₹${amt.toLocaleString('en-IN')} dispensed successfully.`, balance: user.balance, transaction: txn });
});

// POST /deposit — deposit amount
app.post('/deposit', (req, res) => {
  const { pin, amount } = req.body;
  const amt = parseFloat(amount);

  if (!amt || amt <= 0) {
    return res.status(400).json({ success: false, message: 'Please enter a valid amount.' });
  }
  if (amt > 200000) {
    return res.status(400).json({ success: false, message: 'Maximum deposit limit is ₹2,00,000 per transaction.' });
  }

  const data = readData();
  const user = getUserByPin(data, pin);
  if (!user) return res.status(401).json({ success: false, message: 'Unauthorized' });

  user.balance = parseFloat((user.balance + amt).toFixed(2));
  const txn = {
    id: genTxnId(),
    type: 'deposit',
    amount: amt,
    date: new Date().toISOString(),
    balanceAfter: user.balance
  };
  if (!user.transactions) user.transactions = [];
  user.transactions.push(txn);
  writeData(data);

  res.json({ success: true, message: `₹${amt.toLocaleString('en-IN')} deposited successfully.`, balance: user.balance, transaction: txn });
});

// GET /transactions — get transaction history (last 10)
app.get('/transactions', (req, res) => {
  const pin = req.query.pin;
  const data = readData();
  const user = getUserByPin(data, pin);
  if (!user) return res.status(401).json({ success: false, message: 'Unauthorized' });

  const txns = user.transactions || [];
  const last10 = txns.slice(-10).reverse();
  res.json({ success: true, transactions: last10 });
});

// Fallback: serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// ─── Start Server ────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🏧  Smart ATM Server running at http://localhost:${PORT}`);
  console.log(`📁  Data file: ${DATA_FILE}`);
  console.log(`\n   Press Ctrl+C to stop.\n`);
});
