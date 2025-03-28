const quotes=[
    "Chaos is life.",
    "Burn it all.",
    "Death is freedom.",
    "Embrace the dark.",
    "Live fast, die young.",
    "Pain is power.",
    "The end is near.",
    "Rebel or die.",
    "Fate is a lie.",
    "I am chaos.",
    "Live in the shadows.",
    "Fear nothing.",
    "No rules, no mercy.",
    "All is vanity.",
    "I don’t fit in.",
    "Burn the bridges.",
    "The void awaits.",
    "Rise from the ashes."
  ];

let text=document.getElementById("mainText");


function switchQuotes(){
    let index=Math.floor(Math.random()*quotes.length);
    text.innerText=quotes[index];
}


function clock(){
    let ceas=new Date();
    let s=ceas.getSeconds();
    let m=ceas.getMinutes();
    let h=ceas.getHours();
    s= s<10 ? '0'+s : s;
    m= m<10 ? '0'+m : m;
    h= h<10 ? '0'+h : h;
    text.innerText=h+":"+m+":"+s;
}

setInterval(clock,1000);
