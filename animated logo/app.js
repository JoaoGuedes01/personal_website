const logo = document.querySelectorAll("#logo path")

for(i=0;i<logo.length;i++){
    console.log("letter" + i + "has " + logo[i].getTotalLength())
}