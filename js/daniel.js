const navn = "Daniel"
    console.log(String(navn) + " sier hei!")
    const symbollist = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,.-;:_'*¨^+\?1234567890!#¤%&/()=☺☻♥♦♣♠•◘○◙♂♀♪♫☼►   "
    let count = ""
    let hasclicked = false
    function start (clicked)
    {
        if (clicked == false | hasclicked == false)
        {
            const maxcount = 100
            const randomTimes = Math.floor(Math.random() * maxcount) + 1
            for (var i = 0; i < randomTimes; i++)
            {
                const randomIndex = Math.floor(Math.random() * symbollist.length)
                //const plusOrMinus = Math.random() < 0.5 ? -1 : 1
                //count += plusOrMinus
                    count = symbollist[randomIndex] + count
            }
            let part = document.querySelector("#count")
            part.textContent = String(count)
            //console.log(count)
            setTimeout(() => {start(false)}, 1)
        }
        hasclicked = true
    }