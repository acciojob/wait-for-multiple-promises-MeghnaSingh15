//your JS code here. If required.
const Promise1 = new Promise((resolve,reject) =>
	setTimeout(() => {
		console.log("Promise1 resolved");
	},1000)
);
const Promise2 = new Promise((resolve,reject) =>
	setTimeout(() => {
		console.log("Promise1 resolved");
	},2000)
);
const Promise3 = new Promise((resolve,reject) =>
	setTimeout(() => {
		console.log("Promise1 resolved");
	},1500)
);
Promise.all([Promise1, Promise2, Promise3])
.then(() => {
	const loadingRow = document.getElementById('loadingRow');
    loadingRow.remove();
	console.log("All promises resolved");
});