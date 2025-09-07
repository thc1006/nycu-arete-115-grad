// --- 時段設定 ---
const availableTimeSlots = [
    '9/15 (一) 上午', '9/15 (一) 下午', '9/16 (二) 上午', '9/16 (二) 下午',
    '9/17 (三) 上午', '9/17 (三) 下午', '9/18 (四) 上午', '9/18 (四) 下午',
    '9/19 (五) 上午', '9/19 (五) 下午', '9/22 (一) 上午', '9/22 (一) 下午',
    '9/23 (二) 上午', '9/23 (二) 下午', '9/24 (三) 上午', '9/24 (三) 下午',
    '9/25 (四) 上午', '9/25 (四) 下午', '9/26 (五) 上午', '9/26 (五) 下午',
    '9/29 (一) 上午', '9/29 (一) 下午', '9/30 (二) 上午', '9/30 (二) 下午',
    '10/1 (三) 上午', '10/1 (三) 下午', '10/2 (四) 上午', '10/2 (四) 下午',
    '10/3 (五) 上午', '10/3 (五) 下午',
];
// --- 設定結束 ---

// 頁面載入後，動態生成時段選項
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('timeSlotsContainer');
    availableTimeSlots.forEach((slot, index) => {
        const div = document.createElement('div');
        div.className = 'time-slot-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'timeSlots'; // 重要的 name 屬性
        checkbox.value = slot;
        const checkboxId = 'slot-' + index;
        checkbox.id = checkboxId;

        const label = document.createElement('label');
        label.htmlFor = checkboxId;
        label.textContent = slot;

        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
    });

    // 表單提交前的驗證
    const form = document.getElementById('mainForm');
    form.addEventListener('submit', function(event) {
        const checkedSlots = document.querySelectorAll('input[name="timeSlots"]:checked');
        if (checkedSlots.length === 0) {
            alert('請至少勾選一個您可以的拍攝時段！');
            event.preventDefault(); // 阻止表單提交
        } else {
            document.getElementById('submitBtn').textContent = '傳送中...';
        }
    });
});
