const express = require('express'),
    walk = require('walk'),
    app = express(),
    ALLfiles = [];

app.listen(9091, () => {
    console.log("Random Picture 9091");
    getAllfiles();
});

app.use(express.static('pictures'));

app.get('/:imgtag', (req, res) => {
    let typeImg = req.params.imgtag;
    console.log(typeImg);
    res.statusCode = 302;
    if (typeImg == 'default') res.setHeader("Location", "default.png");
    else if (typeImg == 'random') res.setHeader("Location", ALLfiles[getRandomInt(ALLfiles.length)]);
    res.end();
});

let getAllfiles = () => {
    let walker = walk.walk('./pictures', {
        followLinks: false
    });
    walker.on('file', (root, stat, next) => {
        // Add this file to the list of files
        ALLfiles.push(stat.name);
        next();
    });

    walker.on('end', () => {
        console.log("loaded all images...", ALLfiles.length);
    });

}

let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}