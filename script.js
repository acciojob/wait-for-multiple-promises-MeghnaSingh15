//your JS code here. If required.
const Promise1 = new Promise((resolve,reject) =>
	setTimeout(() => {
		console.log("Promise1 resolved");
		resolve("Promise1");
	},1000)
);
const Promise2 = new Promise((resolve,reject) =>
	setTimeout(() => {
		console.log("Promise2 resolved");
		resolve("Promise2");
	},2000)
);
const Promise3 = new Promise((resolve,reject) =>
	setTimeout(() => {
		console.log("Promise3 resolved");
		resolve("Promise3");
	},1500)
);
Promise.all([Promise1, Promise2, Promise3])
.then(() => {
	const loadingRow = document.getElementById('tr_loading');
    loadingRow.remove();
	console.log("All promises resolved");
});