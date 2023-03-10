const bootcamp_gallery = []

for(let i=1; i<11; i++){
    if(i==6)
        continue;
    bootcamp_gallery.push(
        `/images/bootcamp/gallery/${i}.png`
    )
}

export default bootcamp_gallery

//testing