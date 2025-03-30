// 全局交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 标签切换逻辑
    const tabs = document.querySelectorAll('.sidebar-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有活动标签
            tabs.forEach(t => t.classList.remove('active'));
            // 添加当前活动标签
            this.classList.add('active');
        });
    });

    // 设置按钮点击逻辑
    const settingsBtn = document.querySelector('.settings-btn');
    const settingsModal = document.querySelector('.settings-modal');
    
    if (settingsBtn && settingsModal) {
        settingsBtn.addEventListener('click', function() {
            settingsModal.classList.remove('hidden');
        });
        
        // 关闭模态窗口
        const closeModalBtn = settingsModal.querySelector('.modal-close');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', function() {
                settingsModal.classList.add('hidden');
            });
        }
    }

    // 列表项点击逻辑
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // 可以在这里添加导航到详情页的逻辑
            console.log('Clicked on item:', this.textContent);
        });
    });

    // 返回按钮逻辑
    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // 可以在这里添加返回逻辑
            console.log('Back button clicked');
        });
    });

    // 提交按钮逻辑
    const submitButtons = document.querySelectorAll('.submit-btn');
    submitButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Submit button clicked');
        });
    });
}); 