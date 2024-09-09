let view = document.getElementById('app'); 
let addColor;
updateVeiw()

function updateVeiw()
{
   view.innerHTML = 
   `
   <div>${addColor}</div>
   <div class="clickDiv" onclick="setVariabelColor(this.innerHTML)">green</div>
   <div class="clickDiv" onclick="setVariabelColor(this.innerHTML)">yellow</div>
   <div class="clickDiv" onclick="setVariabelColor(this.innerHTML)">red</div>
   <button onclick="color()">change color</button>
   `;
}

function color() 
{
    document.body.style.backgroundColor = addColor;
}

function setVariabelColor(newColor) 
{
  addColor =  newColor;
  updateVeiw();
}