"use strict";
/*
fetch(`https://www.google.com/search?q=js&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjryc72_PriAhXi_CoKHaC5AGoQ_AUIECgB&biw=1707&bih=732#`)
    .then(response => response.text())
    .then(response => response.blob())
    .then(response => response.jsone())
    .then(image => console.log(image))
    .catch(err => console.warn(err));
*/
    

    //console.log dir info warn error

    fetch(
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic3.bocoup.com%2Fassets%2F2017%2F08%2F19225141%2Fecma-test262-work-featured-640x480.jpg&imgrefurl=https%3A%2F%2Fbocoup.com%2Fservices%2Freliability-standards-and-testing&docid=RGFqrt4LSwm6zM&tbnid=iygccidNae_Y-M%3A&vet=10ahUKEwiYxpCMgvviAhXLLFAKHc5XBDQQMwgqKAAwAA..i&w=640&h=480&bih=732&biw=1707&q=javascript&ved=0ahUKEwiYxpCMgvviAhXLLFAKHc5XBDQQMwgqKAAwAA&iact=mrc&uact=8'
        )
    
    .then(response => response.blob())
    .then(image => {
        const url = URL.createObjectURL(image);
        const img = document.createElement('img');
        img.src = url;

        document.append(img);
    })

    .catch(err => console.warn(err));

    // куки.

    // json

    // window