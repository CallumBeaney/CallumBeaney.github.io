

function constructimages(folderpath, dirlen)
{
    // this is easily the laziest I've ever been

    let builder = "";
    for (index = 0; index < dirlen; index++) {
      builder += '<div class="grid-item"><img src="' + folderpath + index + '.jpg' + '"></img></div>';
    }
    document.getElementById("indexGrid").insertAdjacentHTML("beforeend", builder);
  }

  function shuffleArray(array) {
    // () => Math.random() - 0.5 generates random values for comparison, which effectively shuffles the array. The slice() method is used to create a shallow copy of the original array before shuffling, so the original colors array remains unchanged
      return array.slice().sort(() => Math.random() - 0.5);
  }

  function colourlinks(id, link) {
    // const colors = ['crimson', 'forestgreen', 'royalblue', 'darkorchid', 'darkorange', 'firebrick'];
        const colors = ['crimson', 'forestgreen', 'sienna', 'royalblue', 'darkorchid', 'darkorange', 'orchid', 'firebrick'];

    const shuffledColors = shuffleArray(colors);

    let elements = document.getElementById(id).getElementsByClassName(link);

    for (i = 0; i < elements.length; i++) {
        next_colour = shuffledColors[i % shuffledColors.length];
        elements[i].style.color = next_colour;
    }
}
