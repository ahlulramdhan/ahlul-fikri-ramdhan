var biodata = {
    "Nama" : "Ahlul Fikri Ramdhan",
    "Usia" : 23,
    "Alamat" : "jalan madrasah RT03/018 no 63 jatimekar jatiasih bekasi",
    "Hobi" : ["Bermain Sepak Bola", "Bermain Game"],
    "Menikah" : false,
    "Sekolah" : [
        {
            "SD" : "MI Nurul Islam",
          
            "Tahun" : 2002,
            "Lulus" : 2008
        },
        {
            "SMP" : "Mts Al-Hamid",
            
            "Tahun" : 2008,
            "Lulus" : 2011
        },
        {
            "SMA" : "MA Al-Hamid",
            
            "Tahun" : 2011,
            "Lulus" : 2014
        },
		{
			"Universitas" : "Universitas Muhammadiyah Prof. DR. Hamka"
			"Tahun" : 2015,
			"lulus" : 2019
    ],
    "Kemampuan" : [
        
        {
            "Python" : "Beginner" 
        }
    ],
    "Minat Coding" : true
};

data = JSON.stringify(biodata);
console.log(data);