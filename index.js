const container = document.querySelector(".data-container");

function generatebars(num = 10) {

	//for loop to generate 20 bars
	for (let i = 0; i < num; i += 1) {

		// To generate random values from 1 to 100
		const value = Math.floor(Math.random() * 100) + 1;

		// To create element "div"
		const bar = document.createElement("div");

		// To add class "bar" to "div"
		bar.classList.add("bar");

		// Provide height to the bar
		bar.style.height = `${value * 3}px`;

		// Translate the bar towards positive X axis
		bar.style.transform = `translateX(${i * 60}px)`;

		// To create element "label"
		const barLabel = document.createElement("label");

		// To add class "bar_id" to "label"
		barLabel.classList.add("bar_id");

		// Assign value to "label"
		barLabel.innerHTML = value;

		// Append "Label" to "div"
		bar.appendChild(barLabel);

		// Append "div" to "data-container div"
		container.appendChild(bar);
	}
}


async function SelectionSort() {
	document.title = "Selection Sort Visualizer";
	document.getElementById("Heading").innerHTML = "Selection Sort Visualizer";
	document.getElementsByClassName('head').innerHTML = "Selection Sort Visualizer";
	let bars = document.querySelectorAll(".bar");
	// Assign 0 to min_idx
	var min_idx;
	for (var i = 0; i < bars.length; i += 1) {

		// Assign i to min_idx
		min_idx = i;

		// Provide darkblue color to the ith bar
		bars[i].style.backgroundColor = "darkblue";
		for (var j = i + 1; j < bars.length; j += 1) {

			// Provide red color to the jth bar
			bars[j].style.backgroundColor = "red";

			// To pause the execution of code for 300 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);

			// To store the integer value of jth bar to var1
			var val1 = parseInt(bars[j].childNodes[0].innerHTML);

			// To store the integer value of (min_idx)th bar to var2
			var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);


			// Compare val1 & val2
			if (val1 < val2) {
				if (min_idx !== i) {

					// Provide skyblue color to the (min-idx)th bar
					bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
				}
				min_idx = j;
			} else {

				// Provide skyblue color to the jth bar
				bars[j].style.backgroundColor = " rgb(24, 190, 255)";
			}
		}

		// To swap ith and (min_idx)th bar
		var temp1 = bars[min_idx].style.height;
		var temp2 = bars[min_idx].childNodes[0].innerText;
		bars[min_idx].style.height = bars[i].style.height;
		bars[i].style.height = temp1;
		bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
		bars[i].childNodes[0].innerText = temp2;

		// To pause the execution of code for 300 milliseconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 300)
		);

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

		// Provide lightgreen color to the ith bar
		bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}
	setTimeout(() => {
		document.getElementById("conclusion").innerHTML = "Array has been Sorted Using  Selection Sort Algorithm ";
	}, 300)

	// To enable the button "Generate New Array" after final(sorted)
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	document.getElementById("Button1").style.cursor = "pointer";
	// document.getElementById("Button2").style.cursor = "pointer";
	// document.getElementById("Button3").style.cursor = "pointer";
	// To enable the button "Selection Sort" after final(sorted)
	// document.getElementById("Button2").disabled = false;
	// document.getElementById("Button2").style.backgroundColor = "#6f459e";
	// document.getElementById("Button3").disabled = false;
	// document.getElementById("Button3").style.backgroundColor = "#6f459e";
}

async function BubbleSort() {
	document.title = "Bubble Sort Visualizer";
	document.getElementById("Heading").innerHTML = "Bubble Sort Visualizer";
	let bars = document.querySelectorAll(".bar");
	var min_idx;
	for (var i = 0; i < bars.length; i += 1) {

		min_idx = i;

		for (var j = 0; j < (bars.length - i - 1); j += 1) {
			bars[j].style.backgroundColor = "darkblue";
			bars[j + 1].style.backgroundColor = "red";

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);

			var val1 = parseInt(bars[j].childNodes[0].innerHTML);

			var val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

			if (val1 > val2) {
				var temp1 = bars[j + 1].style.height;
				var temp2 = bars[j + 1].childNodes[0].innerText;
				bars[j + 1].style.height = bars[j].style.height;
				bars[j].style.height = temp1;
				bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
				bars[j].childNodes[0].innerText = temp2;
			}
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);

			bars[j].style.backgroundColor = " rgb(24, 190, 255)";

			bars[j + 1].style.backgroundColor = " rgb(49, 226, 13)";

		}
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 300)
		);
		bars[0].style.backgroundColor = " rgb(49, 226, 13)";



	}
	setTimeout(() => {
		document.getElementById("conclusion").innerHTML = "Array has been Sorted Using Bubble Sort Algorithm ";
	}, 300)


	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	document.getElementById("Button1").style.cursor = "pointer";
	// document.getElementById("Button2").style.cursor = "pointer";
	// document.getElementById("Button3").style.cursor = "pointer";

	// document.getElementById("Button2").disabled = false;
	// document.getElementById("Button2").style.backgroundColor = "#6f459e";
	// document.getElementById("Button3").disabled = false;
	// document.getElementById("Button3").style.backgroundColor = "#6f459e";
}


async function InsertionSort() {
	document.title = "Insertion Sort Visualizer";
	document.getElementById("Heading").innerHTML = "Insertion Sort Visualizer";
	let bars = document.querySelectorAll(".bar");
	let bar_label = document.querySelectorAll(".bar_id");
	let temp_bar = document.getElementById("temp-barid");
	let temp_label = document.getElementById("temp-label");
	var temp;
	document.getElementById("temp-container").style.display = "block";
	for (var i = 1; i < bars.length; i += 1) {

		var temp = parseInt(bars[i].childNodes[0].innerHTML);
		var temp1 = bars[i].style.height;

		var j = i - 1;
		let val2 = parseInt(bars[j].childNodes[0].innerHTML);
		bars[i].style.backgroundColor = "darkblue";
		bars[j].style.backgroundColor = "red";
		temp_bar.style.height = temp1;
		temp_bar.style.backgroundColor = "darkblue";
		temp_label.innerHTML = temp;
		while (j >= 0 && val2 > temp) {
			bars[j].style.backgroundColor = "red";

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);
			bars[j + 1].style.height = bars[j].style.height;
			bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
			bars[i].style.backgroundColor = "rgb(0, 183, 255)";
			bars[j].style.backgroundColor = "transparent";
			bar_label[j].style.color = "transparent";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);
			if (j > 0) {
				val2 = parseInt(bars[j - 1].childNodes[0].innerHTML);
			}
			bars[j].style.backgroundColor = " rgb(0, 183, 255)";
			bar_label[j].style.color = "black";
			j--;

		}
		bars[j + 1].style.height = temp1;
		bars[j + 1].childNodes[0].innerText = temp;
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 300)
		);
		bars[j + 1].style.backgroundColor = " rgb(0, 183, 255)";
		if (j >= 0) {
			bars[j].style.backgroundColor = " rgb(0, 183, 255)";
		}
		bars[i].style.backgroundColor = "rgb(0, 183, 255)";
	}

	setTimeout(() => {
		for (let i = 0; i < bars.length; i++) {
			document.getElementById("temp-container").style.display = "none";
			bars[i].style.backgroundColor = "rgb(49, 226, 13)";
		}
		document.getElementById("conclusion").innerHTML = "Array has been Sorted Using Insertion Sort Algorithm ";
	}, 300)

	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	document.getElementById("Button1").style.cursor = "pointer";
}






let loc;
async function partition( bars, lb1, ub1) {
	let pivot = parseInt(bars[lb1].childNodes[0].innerHTML);
	let start = lb1;
	let end = ub1;
	bars[start].style.backgroundColor = "darkblue";
	await new Promise((resolve, reject) => {
		setTimeout(() => {
		  resolve();
		}, 300)
	})
	while (start < end) {
		while (parseInt(bars[start].childNodes[0].innerHTML) <= pivot && start < ub1) {
			bars[start].style.backgroundColor = "red";
			await new Promise((resolve, reject) => {
				setTimeout(() => {
				  resolve();
				}, 300)
				
			})
			start++;
		}
		bars[end].style.backgroundColor = "red";
		while (parseInt(bars[end].childNodes[0].innerHTML) > pivot) {
			bars[end].style.backgroundColor = "yellow";
			await new Promise((resolve, reject) => {
				setTimeout(() => {
				  resolve();
				}, 300)})
				bars[end].style.backgroundColor = "rgb(0, 183, 255)";
			end--;
		}
		if (start < end) {
			await new Promise((resolve, reject) => {
				setTimeout(() => {
				  resolve();
				}, 300)})
			let temph = bars[start].style.height;
			let tempv = parseInt(bars[start].childNodes[0].innerHTML);
			bars[start].style.height = bars[end].style.height;
			bars[start].childNodes[0].innerHTML = bars[end].childNodes[0].innerHTML;
			bars[end].style.height = temph;
			bars[end].childNodes[0].innerHTML = tempv;

		}
	}
	await new Promise((resolve, reject) => {
		setTimeout(() => {
		  resolve();
		}, 300)})
	let temph = bars[end].style.height;
	let tempv = parseInt(bars[end].childNodes[0].innerHTML);
	bars[end].style.height = bars[lb1].style.height;
	bars[end].childNodes[0].innerHTML = bars[lb1].childNodes[0].innerHTML;
	bars[end].style.backgroundColor = "green";
	bars[lb1].style.height = temph;
	bars[lb1].childNodes[0].innerHTML = tempv;
	loc = end;

}

async function quickalgo(bars, lb2, ub2) {
	if (lb2 < ub2) {
		await new Promise((resolve) => {
				resolve(partition(bars, lb2, ub2));
			})
		
		// await new Promise((resolve) => {
		// 	setTimeout(() => {
		// 	  resolve(quickalgo(bars, lb2, loc - 1));
		// 	}, 300)
			
		// })

		await Promise.all([quickalgo(bars, lb2, loc - 1),quickalgo(bars, loc + 1, ub2)])
		// quickalgo(bars, loc + 1, ub2);
	}
	return ;
}

async function QuickSort() {
	document.title = "Quick Sort Visualizer";
	document.getElementById("Heading").innerHTML = "Quick Sort Visualizer";
	let bars = document.querySelectorAll(".bar");
	let bar_label = document.querySelectorAll(".bar_id");
	let lb = 0;
	let f=0;
	let ub = (bars.length - 1);
	
	await new Promise((resolve, reject) => {
			resolve(quickalgo(bars, lb, ub));
	})
	setTimeout(() => {
		document.getElementById("Button1").disabled = false;
		document.getElementById("Button1").style.cursor = "pointer";
		document.getElementById("Button1").style.backgroundColor = "#6f459e";

		for(let i=0;i<bars.length;i++){
			bars[i].style.backgroundColor = "green";
		}
		document.getElementById("conclusion").innerHTML = "Array has been Sorted Using Quick Sort Algorithm ";
	}, 1000)
}






generatebars();

function generate() {
	window.location.reload();
}

function disable() {
	document.getElementById("Button1").disabled = true;
	document.getElementById("Button2").disabled = true;
	document.getElementById("Button3").disabled = true;
	document.getElementById("Button4").disabled = true;
	document.getElementById("Button5").disabled = true;

	document.getElementById("Button1").style.cursor = "not-allowed";
	document.getElementById("Button2").style.cursor = "not-allowed";
	document.getElementById("Button3").style.cursor = "not-allowed";
	document.getElementById("Button4").style.cursor = "not-allowed";
	document.getElementById("Button5").style.cursor = "not-allowed";

	document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
	document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
	document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
	document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
	document.getElementById("Button5").style.backgroundColor = "#d8b6ff";
}
