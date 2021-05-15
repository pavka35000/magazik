var card = document.querySelector(".card")
var Product_field = document.querySelector(".Product_field")
console.log(card.outerHTML)
var card_html = ''
    
for(var i = 0; i < 5; i++)
{
    card_html += card.outerHTML
    Product_field.innerHTML = card_html
}