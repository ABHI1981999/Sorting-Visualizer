const container = document.querySelector(".data-container");
const error_box = document.getElementById("error_box");
var num = 10;
function sliderChange(){
	const input1 = document.getElementById("input");
		num = input1.value;
		if(num>20){
			error_box.style.display = "block";
			error_box.innerHTML = "Error : Max Array Size is 20";
			setTimeout(() => {
				error_box.style.display = "none";
			}, 5000)
			
			return;
		}
	generatebars(num);
}

var A;
function onCustomInput(){
	const input1 = document.getElementById("inputval");
	var x = input1.value;
	 x = x.replace(/,+/g,",");
	A = x.split(",");
	num = A.length;
	for(let i=0;i<num;i++){
		if(isNaN(A[i])){
			error_box.style.display = "block";
			error_box.innerHTML = "Error : Invalid Input (Input must be integer value)";
			setTimeout(() => {
				error_box.style.display = "none";
			}, 5000)
			return;
		}
	}
	if(num>20){
		error_box.style.display = "block";
			error_box.innerHTML = "Error : Max Array Size is 20";
			setTimeout(() => {
				error_box.style.display = "none";
			}, 5000)
		return;
	}
	else if(num<5){
		error_box.style.display = "block";
			error_box.innerHTML = "Error : Min Array Size is 5";
			setTimeout(() => {
				error_box.style.display = "none";
			}, 5000);
		return;
	}
	
	flag = -1;
	generatebars(num)
}


var flag = 0;
var prev = num;
function generatebars(num) {
		if(flag!=0 ){
		for(let i=0;i<prev;i++){
				var parent = document.getElementsByClassName("data-container")[0];
        		var child = parent.getElementsByClassName("bar")[0];
        		parent.removeChild(child);
			}
		}

		if(flag==-1){
			for (let i = 0; i < num; i += 1) {
				const value = A[i];
				const bar = document.createElement("div");
				bar.classList.add("bar");
				bar.style.height = `${value * 3}px`;
				bar.style.transform = `translateX(${i * 60}px)`;
				const barLabel = document.createElement("label");
				barLabel.classList.add("bar_id");
				barLabel.innerHTML = value;
				bar.appendChild(barLabel);
				container.appendChild(bar);
			}
		}
		else{
	for (let i = 0; i < num; i += 1) {
		const value = Math.floor(Math.random() * 100) + 1;
		const bar = document.createElement("div");
		bar.classList.add("bar");
		bar.style.height = `${value * 3}px`;
		bar.style.transform = `translateX(${i * 60}px)`;
		const barLabel = document.createElement("label");
		barLabel.classList.add("bar_id");
		barLabel.innerHTML = value;
		bar.appendChild(barLabel);
		container.appendChild(bar);
	}
	}
	prev = num;
	flag = 1;


	document.getElementById("Button1").disabled = false;
	document.getElementById("Button2").disabled = false;
	document.getElementById("Button3").disabled = false;
	document.getElementById("Button4").disabled = false;
	document.getElementById("Button5").disabled = false;
	document.getElementById("Button6").disabled = false;

	document.getElementById("Button1").style.cursor = "pointer";
	document.getElementById("Button2").style.cursor = "pointer";
	document.getElementById("Button3").style.cursor = "pointer";
	document.getElementById("Button4").style.cursor = "pointer";
	document.getElementById("Button5").style.cursor = "pointer";
	document.getElementById("Button6").style.cursor = "pointer";

	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	document.getElementById("Button2").style.backgroundColor = "#6f459e";
	document.getElementById("Button3").style.backgroundColor = "#6f459e";
	document.getElementById("Button4").style.backgroundColor = "#6f459e";
	document.getElementById("Button5").style.backgroundColor = "#6f459e";
	document.getElementById("Button6").style.backgroundColor = "#6f459e";

}


async function SelectionSort() {
	document.title = "Selection Sort Visualizer";
	document.getElementById("Heading").innerHTML = "Selection Sort Visualizer";
	document.getElementsByClassName('head').innerHTML = "Selection Sort Visualizer";
	let bars = document.querySelectorAll(".bar");
	var min_idx;
	for (var i = 0; i < bars.length; i += 1) {
		min_idx = i;

		bars[i].style.backgroundColor = "darkblue";
		for (var j = i + 1; j < bars.length; j += 1) {

			bars[j].style.backgroundColor = "red";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);
			var val1 = parseInt(bars[j].childNodes[0].innerHTML);

			var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

			if (val1 < val2) {
				if (min_idx !== i) {

					bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
				}
				min_idx = j;
			} else {

				bars[j].style.backgroundColor = " rgb(24, 190, 255)";
			}
		}

		var temp1 = bars[min_idx].style.height;
		var temp2 = bars[min_idx].childNodes[0].innerText;
		bars[min_idx].style.height = bars[i].style.height;
		bars[i].style.height = temp1;
		bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
		bars[i].childNodes[0].innerText = temp2;

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 300)
		);

		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

		bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}
	setTimeout(() => {
		document.getElementById("conclusion").innerHTML = "Array has been Sorted Using  Selection Sort Algorithm ";
	}, 300)

	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	document.getElementById("Button1").style.cursor = "pointer";

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
async function partition(bars, lb1, ub1) {
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
			if (parseInt(bars[start + 1].childNodes[0].innerHTML) <= pivot) {
				bars[start].style.backgroundColor = "rgb(0, 183, 255)";
			}
			start++;
		}
		bars[end].style.backgroundColor = "red";
		while (parseInt(bars[end].childNodes[0].innerHTML) > pivot) {
			bars[end].style.backgroundColor = "yellow";
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve();
				}, 300)
			})
			bars[end].style.backgroundColor = "rgb(0, 183, 255)";
			end--;
		}
		if (start < end) {
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve();
				}, 300)
			})
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
		}, 300)
	})
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

		await Promise.all([quickalgo(bars, lb2, loc - 1), quickalgo(bars, loc + 1, ub2)])
	}
	return;
}

async function QuickSort() {
	document.title = "Quick Sort Visualizer";
	document.getElementById("Heading").innerHTML = "Quick Sort Visualizer";
	let bars = document.querySelectorAll(".bar");
	let bar_label = document.querySelectorAll(".bar_id");
	let lb = 0;
	let f = 0;
	let ub = (bars.length - 1);

	await new Promise((resolve, reject) => {
		resolve(quickalgo(bars, lb, ub));
	})
	setTimeout(() => {
		document.getElementById("Button1").disabled = false;
		document.getElementById("Button1").style.cursor = "pointer";
		document.getElementById("Button1").style.backgroundColor = "#6f459e";

		for (let i = 0; i < bars.length; i++) {
			bars[i].style.backgroundColor = "green";
		}
		document.getElementById("conclusion").innerHTML = "Array has been Sorted Using Quick Sort Algorithm ";
	}, 1000)
}




async function sortmaxheap(bars, n) {
	if (n <= 1) {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(bars[n - 1].style.backgroundColor = "green");
			}, 300)

		})
		return;
	}
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(bars[0].style.backgroundColor = "darkblue");
			resolve(bars[n - 1].style.backgroundColor = "red");
		}, 300)

	})
	let temph = bars[0].style.height;
	let tempv = parseInt(bars[0].childNodes[0].innerHTML);
	bars[0].childNodes[0].innerHTML = parseInt(bars[n - 1].childNodes[0].innerHTML);
	bars[0].style.height = bars[n - 1].style.height;
	bars[n - 1].childNodes[0].innerHTML = tempv;
	bars[n - 1].style.height = temph;
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(bars[0].style.backgroundColor = "rgb(0, 183, 255)");
			resolve(bars[n - 1].style.backgroundColor = "green");
		}, 300)

	})
	let j = 1;

	while ((2 * j) < n) {
		var flag = 0;
		var child1 = 2 * j;
		var child2 = child1 + 1;

		if (child2 == n) {
			if (parseInt(bars[j - 1].childNodes[0].innerHTML) < parseInt(bars[child1 - 1].childNodes[0].innerHTML)) {
				await new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(bars[j - 1].style.backgroundColor = "darkblue");
						resolve(bars[child1 - 1].style.backgroundColor = "red");
					}, 300)

				})
				await new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve();
					}, 300)

				})
				let tempv = parseInt(bars[j - 1].childNodes[0].innerHTML);
				let temph = bars[j - 1].style.height;
				bars[j - 1].childNodes[0].innerHTML = parseInt(bars[child1 - 1].childNodes[0].innerHTML);
				bars[j - 1].style.height = bars[child1 - 1].style.height;
				bars[child1 - 1].childNodes[0].innerHTML = tempv;
				bars[child1 - 1].style.height = temph;
				j = child1;
				flag = 1;
			}
		}
		else {

			if ((parseInt(bars[child1 - 1].childNodes[0].innerHTML) > parseInt(bars[child2 - 1].childNodes[0].innerHTML)) && (parseInt(bars[j - 1].childNodes[0].innerHTML) < parseInt(bars[child1 - 1].childNodes[0].innerHTML))) {
				await new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(bars[j - 1].style.backgroundColor = "darkblue");
						resolve(bars[child2 - 1].style.backgroundColor = "yellow");
						resolve(bars[child1 - 1].style.backgroundColor = "red");
					}, 300)

				})
				await new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve();
					}, 300)

				})
				let tempv = parseInt(bars[j - 1].childNodes[0].innerHTML);
				let temph = bars[j - 1].style.height;
				bars[j - 1].childNodes[0].innerHTML = parseInt(bars[child1 - 1].childNodes[0].innerHTML);
				bars[j - 1].style.height = bars[child1 - 1].style.height;
				bars[child1 - 1].childNodes[0].innerHTML = tempv;
				bars[child1 - 1].style.height = temph;
				await new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(bars[j - 1].style.backgroundColor = "rgb(0, 183, 255)");
						resolve(bars[child2 - 1].style.backgroundColor = "rgb(0, 183, 255)");
						resolve(bars[child1 - 1].style.backgroundColor = "rgb(0, 183, 255)");
					}, 300)

				})
				j = child1;
				flag = 1;
			}
			else if (parseInt(bars[child1 - 1].childNodes[0].innerHTML) <= parseInt(bars[child2 - 1].childNodes[0].innerHTML) && parseInt(bars[j - 1].childNodes[0].innerHTML) < parseInt(bars[child2 - 1].childNodes[0].innerHTML)) {
				await new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(bars[j - 1].style.backgroundColor = "darkblue");
						resolve(bars[child1 - 1].style.backgroundColor = "yellow");
						resolve(bars[child2 - 1].style.backgroundColor = "red");
					}, 300)

				})
				await new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve();
					}, 300)

				})
				let tempv = parseInt(bars[j - 1].childNodes[0].innerHTML);
				let temph = bars[j - 1].style.height;
				bars[j - 1].childNodes[0].innerHTML = parseInt(bars[child2 - 1].childNodes[0].innerHTML);
				bars[j - 1].style.height = bars[child2 - 1].style.height;
				bars[child2 - 1].childNodes[0].innerHTML = tempv;
				bars[child2 - 1].style.height = temph;
				await new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(bars[j - 1].style.backgroundColor = "rgb(0, 183, 255)");
						resolve(bars[child1 - 1].style.backgroundColor = "rgb(0, 183, 255)");
						resolve(bars[child2 - 1].style.backgroundColor = "rgb(0, 183, 255)");
					}, 300)

				})
				j = child2;
				flag = 1;
			}

		}
		if (flag == 0) {
			return;
		}
	}
	return;
}


async function heapSort() {
	document.title = "Heap Sort Visualizer";
	document.getElementById("Heading").innerHTML = "Heap Sort Visualizer";
	let bars = document.querySelectorAll(".bar");
	let bar_label = document.querySelectorAll(".bar_id");

	for (var i = 2; i <= num; i++) {
		var insertdata = parseInt(bars[i - 1].childNodes[0].innerHTML);
		var parentIndex = Math.floor(i / 2);
		var j = i;
		while (j > 1) {
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(bars[j - 1].style.backgroundColor = "red")
				}, 300)

			})
			parentIndex = Math.floor(j / 2);
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(bars[parentIndex - 1].style.backgroundColor = "darkblue")
				}, 300)
			})
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				}, 300)
			})

			if (parseInt(bars[parentIndex - 1].childNodes[0].innerHTML) < insertdata) {
				await new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve();
					}, 300)
				})
				var tempv = parseInt(bars[parentIndex - 1].childNodes[0].innerHTML);
				var temph = bars[parentIndex - 1].style.height;
				bars[parentIndex - 1].childNodes[0].innerHTML = insertdata;
				bars[parentIndex - 1].style.height = bars[j - 1].style.height;
				bars[j - 1].childNodes[0].innerHTML = tempv;
				bars[j - 1].style.height = temph;
				await new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(bars[parentIndex - 1].style.backgroundColor = "rgb(0, 183, 255)");
						resolve(bars[j - 1].style.backgroundColor = "rgb(0, 183, 255)");
					}, 300)
				})
				j = parentIndex;
			}
			else {
				await new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(bars[parentIndex - 1].style.backgroundColor = "rgb(0, 183, 255)");
						resolve(bars[j - 1].style.backgroundColor = "rgb(0, 183, 255)");
					}, 300)
				})
				j = 1;
			}
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(bars[parentIndex].style.backgroundColor = "rgb(0, 183, 255)");
					resolve(bars[j - 1].style.backgroundColor = "rgb(0, 183, 255)");
				}, 300)
			})
		}

	}
	for (let i = num; i > 0; i--) {
		await new Promise((resolve, reject) => {
			resolve(sortmaxheap(bars, i))
		})
	}

	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	document.getElementById("Button1").style.cursor = "pointer";
	document.getElementById("conclusion").innerHTML = "Array has been Sorted Using Heap Sort Algorithm ";

}





generatebars(num);

function generate() {
	// window.location.reload();
	generatebars(num);

	
}

function disable() {
	document.getElementById("Button1").disabled = true;
	document.getElementById("Button2").disabled = true;
	document.getElementById("Button3").disabled = true;
	document.getElementById("Button4").disabled = true;
	document.getElementById("Button5").disabled = true;
	document.getElementById("Button6").disabled = true;

	document.getElementById("Button1").style.cursor = "not-allowed";
	document.getElementById("Button2").style.cursor = "not-allowed";
	document.getElementById("Button3").style.cursor = "not-allowed";
	document.getElementById("Button4").style.cursor = "not-allowed";
	document.getElementById("Button5").style.cursor = "not-allowed";
	document.getElementById("Button6").style.cursor = "not-allowed";

	document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
	document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
	document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
	document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
	document.getElementById("Button5").style.backgroundColor = "#d8b6ff";
	document.getElementById("Button6").style.backgroundColor = "#d8b6ff";
}
