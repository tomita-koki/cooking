// 現在の時刻を表示
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ja-JP');
    document.getElementById('time').textContent = timeString;
}

// ページ読み込み時に時刻を更新
updateTime();

// 1秒ごとに時刻を更新
setInterval(updateTime, 1000);

console.log('自動リロードテスト - JavaScriptが読み込まれました'); 