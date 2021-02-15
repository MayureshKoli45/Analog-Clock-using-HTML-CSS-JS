setInterval(() => {
    // SETTING UP CURRENT DATE
    d = new Date();

    // SETTING UP CURRENT HOURS, MINUTES AND SECONDS
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    // SETTING UP VARIABLES WITH FORMULAS
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    // SETTING UP ROTATIONS
    hours.style.transform = `Rotate(${hrotation}deg)`;
    minutes.style.transform = `Rotate(${mrotation}deg)`;
    seconds.style.transform = `Rotate(${srotation}deg)`;
    
}, 1000);