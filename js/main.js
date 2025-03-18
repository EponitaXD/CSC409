// This code refers to the data variable specified in
// contentsPosts.js
document.addEventListener('DOMContentLoaded', function() {
    let temp, i;
    temp = document.getElementsByTagName("template")[0];
    item = temp.content.querySelector("div");

    for (i=0; i < data.posts.length; i++) {
        // create node for the post div
        appendDiv = document.importNode(item, true);
        
        // create node for p tag
        a = document.importNode(item.querySelector("p"), true);
        a.textContent += data.posts[i].date;

        // add to post div
        appendDiv.appendChild(a);

        // create node for h3 tag
        a = document.importNode(item.querySelector("h3"), true);
        a.textContent += data.posts[i].title;

        // add to post div
        appendDiv.appendChild(a);

        // create node for img
        a = document.importNode(item.querySelector('img'));
        a.src = data.posts[i].imgSrc;
        a.alt = data.posts[i].imgAlt;

        // add image to div
        appendDiv.appendChild(a);

        // append node to document
        document.getElementById("postsID").appendChild(appendDiv);
    }
});