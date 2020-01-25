function cek (username){
	var nama = /^[a-z_.] {8,12}$/;
	return nama.test (username);
	}
if (cek("ahlulfikri")){
	alert("Username Diterima");
}
else
	alert ("ganti username!");

function uji (password){
		var pass = /^ [a-z]+[0-9]+[a-z]+[0-9]+[a-z]$/;
		return pass.test (password);
		
if (uji("q1w2e3r")){
	alert("password benar");
	}
	
else
	alert ("password salah");