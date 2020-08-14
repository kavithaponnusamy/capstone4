let name=[];
let price=[];

let list = [
	['Apple',1.99,0],
    ['Orange',3.99,0],
    ['Pear',2.99,0],
    ['Carrot',1.99,0],
    ['Spinach',1.99,0]
];

function addToCart(itemName,itemPrice){
	//name.push(itemName);
	//price.push(itemPrice);
	if (itemName==="Apple"){list[0][2]=(list[0][2])+1;	commonQty=list[0][2];}
	if (itemName==="Orange"){list[1][2]=(list[1][2])+1;	commonQty=list[1][2];}
	if (itemName==="Pear"){list[2][2]=(list[2][2])+1;	commonQty=list[2][2];}
	if (itemName==="Carrot"){list[3][2]=(list[3][2])+1;	commonQty=list[3][2];}
	if (itemName==="Spinach"){list[4][2]=(list[4][2])+1;	commonQty=list[4][2];}
	document.getElementById(itemName).innerText=commonQty;
}

function printCart(){
	let total =0;
	let tax = 0;
	let gtotal =0;

	let table = document.createElement("TABLE");
	document.body.appendChild(table);	

// title of the table:
		let rowT = document.createElement("TR");
		
	    let itemCellT = document.createElement("TD");
		let priceCellT = document.createElement("TD");
		let qtyCellT = document.createElement("TD");
		let totalCellT=document.createElement("TD");
	
		let iNameT=document.createTextNode("Item");
		let iPriceT=document.createTextNode("Price");
		let iQtyT=document.createTextNode("Quantity");
		let iTotalT=document.createTextNode("Total");
		
		itemCellT.appendChild(iNameT);
		priceCellT.appendChild(iPriceT);
		qtyCellT.appendChild(iQtyT);
		totalCellT.appendChild(iTotalT);
		
		rowT.appendChild(itemCellT);
		rowT.appendChild(priceCellT);
		rowT.appendChild(qtyCellT);
		rowT.appendChild(totalCellT);
		
		table.appendChild(rowT);

// adding values to the table from Arrays:

	for (let i=0;i<list.length;i++){
		if(list[i][2] !== 0){
		let row = document.createElement("TR");
		
	    let itemCell = document.createElement("TD");
		let priceCell = document.createElement("TD");
		let qtyCell = document.createElement("TD");
		let totalCell=document.createElement("TD");
	
		let iName=document.createTextNode(list[i][0]);
		let iPrice=document.createTextNode(list[i][1]);
		let iQty=document.createTextNode(list[i][2]);

			total = list[i][1] * list[i][2];
			gtotal = gtotal + total;
		let iTotal=document.createTextNode(total);
		
		itemCell.appendChild(iName);
		priceCell.appendChild(iPrice);
		qtyCell.appendChild(iQty);
		totalCell.appendChild(iTotal);
		
		row.appendChild(itemCell);
		row.appendChild(priceCell);
		row.appendChild(qtyCell);
		row.appendChild(totalCell);
		
		table.appendChild(row);
		}
	}

// calculating tax and grand total:
	tax = gtotal * 0.06;
	gtotal = gtotal + tax;

// Adding a row to the table for Tax:
		let rowTx = document.createElement("TR");
		
	    let itemCellTx = document.createElement("TD");
		let priceCellTx = document.createElement("TD");
		let qtyCellTx = document.createElement("TD");
		let totalCellTx=document.createElement("TD");
	
		let iNameTx=document.createTextNode("");
		let iPriceTx=document.createTextNode("");
		let iQtyTx=document.createTextNode("Tax");
		let iTotalTx=document.createTextNode(tax.toFixed(2));
		
		itemCellTx.appendChild(iNameTx);
		priceCellTx.appendChild(iPriceTx);
		qtyCellTx.appendChild(iQtyTx);
		totalCellTx.appendChild(iTotalTx);
		
		rowTx.appendChild(itemCellTx);
		rowTx.appendChild(priceCellTx);
		rowTx.appendChild(qtyCellTx);
		rowTx.appendChild(totalCellTx);
		
		table.appendChild(rowTx);

// Adding a row to the table for Grand Total:
		let rowGT = document.createElement("TR");
		
	    let itemCellGT = document.createElement("TD");
		let priceCellGT = document.createElement("TD");
		let qtyCellGT = document.createElement("TD");
		let totalCellGT=document.createElement("TD");
	
		let iNameGT=document.createTextNode("");
		let iPriceGT=document.createTextNode("");
		let iQtyGT=document.createTextNode("Grand Total");
		let iTotalGT=document.createTextNode(gtotal.toFixed(2));
		
		itemCellGT.appendChild(iNameGT);
		priceCellGT.appendChild(iPriceGT);
		qtyCellGT.appendChild(iQtyGT);
		totalCellGT.appendChild(iTotalGT);
		
		rowGT.appendChild(itemCellGT);
		rowGT.appendChild(priceCellGT);
		rowGT.appendChild(qtyCellGT);
		rowGT.appendChild(totalCellGT);
		
		table.appendChild(rowGT);
}


