function populateIndex(indexReference)
{   
  /* 
  FIELDS: All fields String but year which is Int.
    <a class="grid-item" href="____">
      <div>
        <p>
          <b>____ </b>
          <i><span class="grid-crumbs">1970</span></i>
          lorem ipsum uwu
        </p>
      </div>
    </a>  
  */
 
  let serve = "";

  for ([entry, info] of Object.entries(indexReference)) 
  {
    const link    = '<a class="grid-item ' + info.type + '" href=' + info.link + ' ">';
    const image   = (info.image != null) ? '<img src="' + info.image + '"></img>' : "";
    const title   = '<div><p><b>' + info.name + '</b>  ';
    const crumbs  = '<i>' + info.year + '・' + info. field + '<br></i>';      
    const text    = info.text;

    let postFace  = (info.author != null || info.company != null) ? '<i> — with ' : "";

    if (info.author != null && info.company != null) {
        postFace += info.author + " and " + info.company + '</i>';
    } else if (info.author != null) {
        postFace += info.author + '</i>';
    } else if (info.company != null) {
        postFace += info.company + '</i>';
    }

    const compiled = link + image + title + crumbs + text + postFace + '</p></div></a>';
    serve += compiled;
  } 

  document.getElementById("indexGrid").insertAdjacentHTML("beforeend", serve);

}


function shuffleObject(obj){
  // new obj to return
let newObj = {};
  // create keys array
var keys = Object.keys(obj);
  // randomize keys array
  keys.sort(function(a,b){return Math.random()- 0.5;});
// save in new array
  keys.forEach(function(k) {
      newObj[k] = obj[k];
});
return newObj;
}


!function main() {
  _primaryPages = shuffleObject(primaryPages);
  populateIndex(_primaryPages); 

  _secondaryPages = shuffleObject(secondaryPages);
  populateIndex(_secondaryPages); 

  _tertiaryPages = shuffleObject(tertiaryPages);
  populateIndex(_tertiaryPages); 

  _endPages = shuffleObject(endPages);
  populateIndex(_endPages); 
}();





// // ALTERNATIVE SHUFFLE METHOD
// function shuffle(items)
// {
//     let cached = items.slice(0), temp, i = cached.length, rand;
//     while(--i)
//     {
//         rand = Math.floor(i * Math.random());
//         temp = cached[rand];
//         cached[rand] = cached[i];
//         cached[i] = temp;
//     }
//     return cached;
// }
// function shuffleNodes()
// {
//     let list = document.getElementById("indexGrid");
//     let nodes = list.children, i = 0;
//     nodes = Array.prototype.slice.call(nodes);
//     nodes = shuffle(nodes);
//     while(i < nodes.length)
//     {
//         list.appendChild(nodes[i]);
//         ++i;
//     }
// }