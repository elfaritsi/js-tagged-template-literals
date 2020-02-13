/* tagged tamplate ini digunakan saat kita ingin membuat hasil pencarian menggunakan highlight
agar lebih memudahkan user untuk menemukan kalimat yg dicari, contohnya kalimat yg diketikkan user 
akan menjadi tebal, atau berwarna*/

let mhs = {
	nama : 'Udin',
	umur : 25
};


/*dengan tagged template ini maka string akan dipecah menjadi array yg dibatasi 
dengan experssion, contoh expression -> (${mhs.nama}).

string akan diletakkan pada parameter pertama pada function, dalam kasus dibawah ini
parameter pertama dalam function coba adalah (strings), sedangkan expression akan 
diletakkan di parameter berikutnya yaitu (values).

di dalam modern javascript terdapat sebuah nama parameter (rest parameter) yg dapat menampung berapapun 
jumlah expression yg terdapat di dalam sebuah kalimat yaitu dengan menuliskan tiga titik (wajib) lalu
diikuti dengan nama parameter (nama parameter boleh bebas), untuk apa menggunakan rest parameter?
Karena kita tidak tahu akan ada berapa banyak nantinya expression di dalam sebuah kalimat. */

function coba(strings, ...values){

	 /* pengulangan menggunakan forEach (tanda || ''  pada parameter values digunakan jika 
	 parameter values tidak ada isinya maka akan ditampilkan string kosong) karena string selalu lebih
	 1 dari pada values */
	
	// let result = '';
	// strings.forEach((str, i) => {
	// 	result+= `${str}${values[i] || ''}`; 
	// });

	// return result;

	/*pengulangan menggunakan reduce (lebih singkat), karena reduce bisa digunakan juga untuk menggabungkan string
	*/

	return strings.reduce((akumulator, nilaiSaatIni, i) => `${akumulator}${nilaiSaatIni}<span class ="str">${values[i] || ''}</span> `,'');

};


let str = coba`Halo Nama Saya ${mhs.nama}, dan Saya ${mhs.umur} Tahun`;

document.body.innerHTML = str;	