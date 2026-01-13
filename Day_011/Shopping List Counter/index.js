let appleCount = 0;
function addApple(){
    appleCount++;
    document.getElementById("apple-count").textContent = appleCount;
    totalItems();
    totalCost();
}
function resetApple(
){
    appleCount = 0;
    document.getElementById("apple-count").textContent = 0;
    totalItems();
    totalCost();
}
function removeApple(){
if(appleCount>0){
    appleCount--;
}
document.getElementById("apple-count").textContent = appleCount;
    totalItems();
    totalCost();
}

let milkCount = 0;
function addMilk(){
   milkCount++;
   document.getElementById("milk-count").textContent = milkCount;
    totalItems();
    totalCost();
}
function resetMilk(){
   milkCount = 0;
   document.getElementById("milk-count").textContent = 0;
    totalItems();
    totalCost();
}
function removeMilk(){
   if(milkCount>0){
    milkCount--;
}
   document.getElementById("milk-count").textContent = milkCount;
    totalItems();
    totalCost();
}

let breadCount = 0;
function addBread(){
    breadCount++;
    document.getElementById("bread-count").textContent = breadCount;
    totalItems();
    totalCost();
}
function resetBread(){
    breadCount = 0;
    document.getElementById("bread-count").textContent = 0;
    totalItems();
    totalCost();
}
function removeBread(){
if(breadCount>0){
    breadCount--;
}
document.getElementById("bread-count").textContent = breadCount;
    totalItems();
    totalCost();
}

let bananaCount = 0;
function addBanana(){
    bananaCount++;
    document.getElementById("banana-count").textContent = bananaCount;
    totalItems();
    totalCost();}
function resetBanana(){
    bananaCount = 0;
    document.getElementById("banana-count").textContent = bananaCount;
    totalItems();
    totalCost();
}
function removeBanana(){
if(bananaCount>0){
    bananaCount--;
}
document.getElementById("banana-count").textContent = bananaCount;
    totalItems();
    totalCost();
}

let cheeseCount = 0;
function addCheese(){
    cheeseCount++;
    document.getElementById("cheese-count").textContent = cheeseCount;
    totalItems();
    totalCost();
}
function resetCheese(){
    cheeseCount = 0;
    document.getElementById("cheese-count").textContent = cheeseCount;
    totalItems();
    totalCost();
}
function removeCheese(){
if(cheeseCount>0){
    cheeseCount--;
}
document.getElementById("cheese-count").textContent = cheeseCount;
    totalItems();
    totalCost();
}

let total = 0;
function totalItems(){
    total = appleCount + breadCount + milkCount + bananaCount + cheeseCount;
    document.getElementById("total-items").textContent = total;
}

let Cost = 0.00;
function totalCost(){
    Cost = appleCount*0.75 + milkCount*3.25 + breadCount*2.25 + bananaCount*1.25 + cheeseCount*5.25;
    document.getElementById("total-price").textContent = Cost;
}