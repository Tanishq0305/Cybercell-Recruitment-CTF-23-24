setCookie = (cName, cvalue, expDays) => {
	let date = new Date();
	date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
	const expires = "expires=" + date.toUTCString();
	document.cookie = cName + "=" + cvalue + ";" +expires+ "; path=/"
}

function showMessage() {
    alert("You're close to the flag!!!");
}
document.addEventListener('contextmenu', event => event.preventDefault());

function showMessage1() {
    alert("Search for Cybercell VIIT on Google!!!");
}
document.addEventListener('contextmenu', event => event.preventDefault());


getCookie = (cName) => {
	const name =cName + "=";
	const cDecoded = decodeURIComponent(document.cookie);
	const cArr = cDecoded.split("; ")
	let value;
	cArr.forEach(val=> {
		if(val.indexOf(name) === 0) value = val.substring(name,length);
	})

	return value;
}

document.querySelector("#cookies-btn").addEventListener("click", () =>{
	document.querySelector("#cookies").style.display= "none";
	setCookie("cookie", "VishwaRecruits{web_domin_is_lit_83}", 5)
})

// cookieMessage = () => {
// 	if(!getCookie("cookie"))
// 	document.querySelector("#cookies").style.display = "block";
// }

// window.addEventListener("load", cookieMessage)