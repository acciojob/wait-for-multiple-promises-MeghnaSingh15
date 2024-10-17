//your JS code here. If required.
const Promise1 = new Promise1((resolve,reject) =>
	setTimeout(() => {
		console.log("Promise1 resolved");
	},1000)
);
const Promise2 = new Promise2((resolve,reject) =>
	setTimeout(() => {
		console.log("Promise1 resolved");
	},2000)
);
const Promise3 = new Promise3((resolve,reject) =>
	setTimeout(() => {
		console.log("Promise1 resolved");
	},1500)
);
Promise.all([Promise1, Promise2, Promise3])
.then(() => {
	console.log("All promises resolved");
});