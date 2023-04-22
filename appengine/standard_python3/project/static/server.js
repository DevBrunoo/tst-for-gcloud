function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hour = data.getHours()
    //definir hour
    //var hour = 22
    if(hour >= 0 && hour < 3) {
        //From 00:00 to 03:00
        img.src = 'https://i.ibb.co/Kst6q3R/imgmorning.png'
        document.body.style.background = '#ee4b34'
        msg.innerHTML = `Now it's ${hour} in the morning.<br> The best way to predict the future is to create it. – Abraham Lincoln.`
    } else if (hour >= 3 && hour <= 6 ){
        //From 03:00 to 06:00
        img.src = 'https://i.ibb.co/MPqH9PB/imgmorning-1.png'
        document.body.style.background = '#f07739'
        msg.innerHTML = `Now it's ${hour} in the morning.<br> You are never too old to set another goal or to dream a new dream. – C.S.Lewis. `
    } else if (hour >= 6 && hour <= 9 ){
        //From 06:00 to 09:00
        img.src = 'https://i.ibb.co/7W7JjYQ/imgmorning-2.png'
        document.body.style.background = '#f5a741'
        msg.innerHTML = `Now it's ${hour} in the morning.<br> Live as if you were to die tomorrow. Learn as if you were to live forever. – Gandhi`
    } else if (hour >= 9 && hour <= 12 ){
        //From 09:00 to 12:00
        img.src = 'https://i.ibb.co/T8nzqmy/imgmorning-3.png'
        document.body.style.background = '#ffffff'
        msg.innerHTML = `Now it's ${hour} in the afternoon.<br> Learning is not a spectator sport. – D. Blocher`
    } else if (hour >= 12 && hour <= 15 ){
        //From 12:00 to 15:00
        img.src = 'https://i.ibb.co/zrn4v83/imgmorning-4.png'
        document.body.style.background = '#4fc1e2'
        msg.innerHTML = `Now it's ${hour} in the afternoon.<br> There is no substitute for hard work. – Thomas Edison`
    } else if (hour >= 15 && hour <= 18 ){
        //From 15:00 to 18:00
        img.src = 'https://i.ibb.co/QKbj3Qw/imgmorning-5.png'
        document.body.style.background = '#1d6fc4'
        msg.innerHTML = `Now it's ${hour} in the night.<br> Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles begins with a single step. – Lao Tzu`
    } else if (hour >= 18 && hour <= 21 ){
        //From 18:00 to 21:00
        img.src = 'https://i.ibb.co/Yjk46yS/imgmorning-6.png'
        document.body.style.background = '#0e3763'
        msg.innerHTML = `Now it's ${hour} in the night.<br> By failing to prepare, you are preparing to fail. – Benjamin Franklin`
    } else {
        img.src = 'https://i.ibb.co/5YK9KN8/imgmorning.png'
        document.body.style.background = '#1d231f'
        msg.innerHTML = `Now it's ${hour} of the night. Before going to sleep read a little about the subject you like the most, in addition to being more possible to memorize, it will make you more relaxed`
        //From 21:00 to 00:00
    }
}

