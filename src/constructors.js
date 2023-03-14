

function constructimages(folderpath, dirlen)
{
    // this is easily the laziest I've ever been

    let builder = "";
    for (index = 0; index < dirlen; index++) {
      builder += '<div class="grid-item"><img src="' + folderpath + index + '.jpg' + '"></img></div>';
    }
    document.getElementById("indexGrid").insertAdjacentHTML("beforeend", builder);

}

function colourlinks(id, link) 
{
    const colors = ['crimson', 'forestgreen', 'sienna', 'royalblue', 'darkorchid', 'darkorange', 'orchid', 'firebrick'];
    
    let elements = document.getElementById(id).getElementsByClassName(link);
    for (i=0;i<elements.length;i++) {
      let random_color = colors[Math.floor(Math.random() * colors.length)];
      elements[i].style.color = random_color;
    }
  }