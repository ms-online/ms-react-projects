//显示重复输入的通知栏
export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}

//显示游戏的弹出框（游戏结束/游戏获胜）
export function checkWin(correct, wrong, word) {
    let status = 'win';

    //验证是否获胜
        word.split('').forEach(letter => {
            if (!correct.includes(letter)) {
                status = '';
        }
        })

    //验证失败
    if (wrong.length === 6) {
        status = 'lose';
    }

    return status;
}