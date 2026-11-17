const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let total = 0;

let prices = document.querySelectorAll(".prices");

prices.forEach((price) => {
    total += Number(price.innerText);
});

let table = document.querySelector("table");

let newRow = document.createElement("tr");
let newCell = document.createElement("td");

newCell.innerText = total;

newRow.appendChild(newCell);
table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

