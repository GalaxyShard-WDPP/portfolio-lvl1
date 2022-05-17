let nav = document.getElementById("navigation");

let links = [
    {name:"Home", link:"index.html"},
    {name:"About", link:"about.html"},
    {name:"Projects", link:"projects.html"}
];
for (let i = 0; i < links.length; i++)
{
    let anchor = document.createElement("a");
    anchor.innerHTML = links[i].name;
    anchor.href = links[i].link;
    
    nav.appendChild(anchor);
    if (i !== links.length-1)
    {
        let divider = document.createElement("span");
        divider.innerHTML = " | ";
        nav.appendChild(divider);
    }
}