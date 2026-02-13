# 💚 BillGuard - Smart Expense Tracker

A Progressive Web App (PWA) for tracking bills, managing expenses, and maintaining your financial health score.

## Features

✅ **Bill Management**
- Add one-time or recurring bills
- Set due dates with reminders
- Track payment status (paid on time, delayed)

✅ **Health Score System**
- Simulates credit score based on payment behavior
- +5 points for on-time payments
- -15 points for late payments
- Visual score trend chart

✅ **Smart Notifications**
- 24-hour reminders before bills are due
- Real-time in-app notifications
- Browser push notifications (if enabled)

✅ **Mobile Responsive**
- 100% mobile-friendly design
- Works on iPhone and Android
- Installable as a native app

✅ **Offline Support**
- Works without internet connection
- All data stored locally
- No server required

## Installation

### Desktop
1. Open `index.html` in a modern browser (Chrome, Edge, Safari, Firefox)
2. Click the install icon in the address bar

### Mobile (iPhone)
1. Open the app in Safari
2. Tap the Share button
3. Select "Add to Home Screen"

### Mobile (Android)
1. Open the app in Chrome
2. Tap the menu (three dots)
3. Select "Add to Home Screen"

## Usage

### Adding a Bill
1. Tap the "+" (Add) button in the bottom navigation
2. Fill in bill details:
   - Title (e.g., "Electric Bill")
   - Amount
   - Due date and time
   - Type (One-time or Recurring)
   - Whether it affects your health score
3. Tap "Add Bill"

### Marking Bills as Paid
1. Go to Dashboard or Bills view
2. Find the bill
3. Tap "✓ Paid" if paid on time
4. Tap "⏰ Late" if paid late

### Viewing History
1. Tap the "📈" (History) button
2. View your health score trend
3. See all payment history with status

## Health Score System

- **Starting Score**: 750
- **On-Time Payment**: +5 points
- **Late Payment**: -15 points
- **Score Range**: 300 - 850

Only bills marked as "Affects Health Score" will impact your score.

## Technology Stack

- Pure HTML5, CSS3, JavaScript (No frameworks)
- LocalStorage for data persistence
- Service Worker for offline support
- Canvas API for charts
- Notification API for reminders

## Browser Support

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile browsers (iOS Safari, Chrome Android)

## Color Theme

Primary: Teal Green (#14b8a6)
Success: Green (#10b981)
Danger: Red (#ef4444)
Warning: Orange (#f59e0b)

## License

Free to use for personal and commercial purposes.

---

Made with 💚 by BillGuard Team
