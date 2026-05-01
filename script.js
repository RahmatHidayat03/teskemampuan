// Data Soal (Contoh Ringkas)
const allPG = [
    { id: 1, text: "Berapa hari puasa yang disunahkan setelah idul fitri (Nyawalan)...", options: ["7", "5", "6", "10"], correct: "6" },
    { id: 2, text: "Malaikat yang bertugas menyampaikan wahyu adalah...", options: ["Mikail", "Israfil", "Izrail", "Jibril"], correct: "Jibril" },
    { id: 3, text: "Kitab Taurat diturunkan kepada Nabi...", options: ["Ibrahim AS", "Musa AS", "Daud AS", "Isa AS"], correct: "Musa AS" },
    { id: 4, text: "Beriman kepada hari kiamat termasuk rukun iman yang ke...", options: ["3", "4", "5", "6"], correct: "5" },
    { id: 5, text: "Perilaku jujur dalam perkataan dan perbuatan disebut...", options: ["Amanah", "Siddiq", "Fathonah", "Tabligh"], correct: "Siddiq" },
    { id: 6, text: "Hukum membaca surat pendek adalah...", options: ["Wajib", "Sunah", "Makruh", "Mubah"], correct: "Sunah" },
    { id: 7, text: "Hukum menuntut ilmu bagi setiap Muslim adalah...", options: ["Mubah", "Sunnah", "Fardhu Ain", "Fardhu Kifayah"], correct: "Fardhu Ain" },
    { id: 8, text: "Arti surah Al-Fil adalah...", options: ["Gajah", "Sapi", "Semut", "Burung"], correct: "Gajah" },
    { id: 9, text: "Khalifah pertama setelah wafatnya Rasulullah SAW adalah...", options: ["Umar bin Khattab", "Ali bin Abi Thalib", "Utsman bin Affan", "Abu Bakar Ash-Shiddiq"], correct: "Abu Bakar Ash-Shiddiq" },
    { id: 10, text: "Pusat perhatian mata saat shalat sebaiknya diarahkan ke...", options: ["Langit", "Tempat Sujud", "Depan", "Imam"], correct: "Tempat Sujud" },
    { id: 11, text: "Malaikat yang bertugas menanya di alam kubur adalah...", options: ["Munkar & Nakir", "Raqib & Atid", "Malik & Ridwan", "Jibril & Mikail"], correct: "Munkar & Nakir" },
    { id: 12, text: "Zakat yang wajib dikeluarkan setiap jiwa sebelum Idul Fitri adalah...", options: ["Zakat Mal", "Zakat Perniagaan", "Zakat Fitrah", "Zakat Profesi"], correct: "Zakat Fitrah" },
    { id: 13, text: "Membaca doa Iftitah dalam shalat hukumnya adalah...", options: ["Wajib", "Sunnah", "Rukun", "Haram"], correct: "Sunnah" },
    { id: 14, text: "Nama ibu kandung Nabi Muhammad SAW adalah...", options: ["Halimah", "Khadijah", "Aminah", "Fathimah"], correct: "Aminah" },
    { id: 15, text: "Sifat 'Fathonah' pada Nabi dan Rasul berarti...", options: ["Menyampaikan", "Cerdas", "Dapat dipercaya", "Benar"], correct: "Cerdas" },
    { id: 16, text: "Shalat yang dilakukan untuk meminta hujan disebut...", options: ["Istikharah", "Istisqa", "Kusuf", "Tahajud"], correct: "Istisqa" },
    { id: 17, text: "Rukun wudhu yang dilakukan setelah membasuh muka adalah...", options: ["Mengusap kepala", "Membasuh tangan", "Membasuh kaki", "Tertib"], correct: "Membasuh tangan" },
    { id: 18, text: "Huruf Idgham Bighunnah berjumlah...", options: ["2", "4", "6", "15"], correct: "4" },
    { id: 19, text: "Membasuh telinga saat wudhu hukumnya...", options: ["Wajib", "Sunnah", "Makruh", "Mubah"], correct: "Sunnah" },
    { id: 20, text: "Rukun Islam yang ketiga adalah...", options: ["Shalat", "Zakat", "Puasa", "Haji"], correct: "Puasa" },
    { id: 21, text: "Kota kelahiran Nabi Muhammad SAW adalah...", options: ["Madinah", "Makkah", "Thaif", "Yaman"], correct: "Makkah" },
    { id: 22, text: "Surah Al-Alaq ayat 1-5 turun di...", options: ["Gua Hira", "Gua Tsur", "Masjid Nabawi", "Masjidil Haram"], correct: "Gua Hira" },
    { id: 23, text: "Malaikat peniaga pintu Surga adalah...", options: ["Malik", "Ridwan", "Atid", "Mikail"], correct: "Ridwan" },
    { id: 24, text: "Istilah bagi orang yang keluar dari agama Islam disebut...", options: ["Musyrik", "Munafik", "Murtad", "Fasik"], correct: "Murtad" },
    { id: 25, text: "Hukum bacaan Nun mati bertemu huruf 'Ba' adalah...", options: ["Izhar", "Ikhfa", "Iqlab", "Idgham"], correct: "Iqlab" },
    { id: 26, text: "Nabi yang memiliki mukjizat tidak hangus terbakar api adalah...", options: ["Nabi Ibrahim AS", "Nabi Ismail AS", "Nabi Yunus AS", "Nabi Nuh AS"], correct: "Nabi Ibrahim AS" },
    { id: 27, text: "Mandi yang dilakukan untuk menghilangkan hadas besar disebut...", options: ["Mandi sunnah", "Mandi wajib", "Mandi sore", "Mandi fardhu kifayah"], correct: "Mandi wajib" },
    { id: 28, text: "Puasa pada tanggal 1 Syawal hukumnya...", options: ["Wajib", "Sunnah", "Haram", "Makruh"], correct: "Haram" },
    { id: 29, text: "Wanita yang telah selesai masa haidnya diwajibkan untuk...", options: ["Wudhu saja", "Tayamum", "Mandi wajib", "Puasa"], correct: "Mandi wajib" },
    { id: 30, text: "Orang yang mengumandangkan adzan disebut...", options: ["Makmum", "Imam", "Muadzin", "Mubaligh"], correct: "Muadzin" },
    { id: 31, text: "Adab yang benar kepada guru saat di kelas adalah...", options: ["Mengobrol dengan teman", "Mendengarkan dengan tenang", "Mengerjakan tugas lain", "Tidur di meja"], correct: "Mendengarkan dengan tenang" },
    { id: 32, text: "Nabi yang ditelan ikan Paus adalah...", options: ["Nabi Yusuf AS", "Nabi Yunus AS", "Nabi Yakub AS", "Nabi Ilyas AS"], correct: "Nabi Yunus AS" },
    { id: 33, text: "Salah satu tanda kiamat sughra (kecil) adalah...", options: ["Matahari terbit dari Barat", "Munculnya Dajjal", "Banyaknya kemaksiatan", "Turunnya Nabi Isa"], correct: "Banyaknya kemaksiatan" },
    { id: 34, text: "Sifat sombong atau merasa dirinya paling hebat disebut...", options: ["Ujub", "Takabur", "Sum'ah", "Tamak"], correct: "Takabur" },
    { id: 35, text: "Nabi Muhammad SAW diutus ke dunia untuk menyempurnakan...", options: ["Agama", "Kekayaan", "Akhlak", "Kesenian"], correct: "Akhlak" },
    { id: 36, text: "Bacaan 'Ghunnah' pada hukum Nun Tasydid dibaca selama...", options: ["1 harakat", "2-3 harakat", "5 harakat", "6 harakat"], correct: "2-3 harakat" },
    { id: 37, text: "Mad yang terjadi karena ada Mad Thabi'i di akhir ayat/waqaf disebut...", options: ["Mad Iwad", "Mad Badal", "Mad Arid Lissukun", "Mad Layyin"], correct: "Mad Arid Lissukun" },
    { id: 38, text: "Membaca Surah Al-Fatihah dalam shalat hukumnya...", options: ["Sunnah", "Wajib", "Rukun", "Mubah"], correct: "Rukun" },
    { id: 39, text: "Minuman keras (Khamr) hukumnya haram karena...", options: ["Mahal", "Membahayakan kesehatan", "Memabukkan", "Rasanya pahit"], correct: "Memabukkan" },
    { id: 40, text: "Jika huruf Hamzah bertemu Mad Thabi'i dalam satu kata, disebut...", options: ["Mad Wajib Muttasil", "Mad Jaiz Munfasil", "Mad Arid lissukun", "Mad Iwad"], correct: "Mad Wajib Muttasil" }
];

const allEssay = [
    { id: 1, text: "Jika huruf Dal (د) sukun bertemu dengan huruf Ta (ت), disebut dengan Idgham..." }, // idghom mutajanissain
    { id: 2, text: "Apa yang harus dilakukan jika seseorang berbicara dengan sengaja saat sedang shalat?" }, // harus diulangi lagi
    { id: 3, text: "Sebutkan 2 contoh air yang suci dan menyucikan (Air Mutlak)!" }, //Air hujan dan air sumur (atau air laut/sungai)
    { id: 4, text: "Apa nama hukum tajwid jika Mad Thobi'i bertemu huruf bertasydid dalam satu kata?" }, //Mad Lazim Mutsaqqal Kilmi.
    { id: 5, text: "Sebutkan 3 hal yang membatalkan wudhu!" }, //1. Buang air (kecil/besar/kentut), 2. Tidur nyenyak, 3. Menyentuh kemaluan.
    { id: 6, text: "Kapan sebuah bacaan disebut sebagai Mad Iwad?" }, //"Jika ada Fathatain (fathah tanwin) di akhir ayat atau tempat berhenti (waqaf)."
    { id: 7, text: "Apa tujuan dilakukannya Sujud Sahwi di akhir shalat?" } //Untuk mengganti kesalahan atau keraguan jumlah rakaat (lupa) dalam shalat
];

let timeLimit = 10 * 60; // 10 Menit

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startExam() {
    const name = document.getElementById('userName').value;
    if (!name) return alert("Harap isi nama!");

    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('exam-container').classList.remove('hidden');
    document.getElementById('user-display').innerText = "Santri: " + name;

    generateQuestions();
    startTimer();
    activateAntiCheat();
}

function generateQuestions() {
    const qList = document.getElementById('question-list');
    const selectedPG = shuffle(allPG).slice(0, 20);
    const selectedEssay = shuffle(allEssay).slice(0, 3);

    let html = "<h3>Bagian 1: Pilihan Ganda</h3>";
    selectedPG.forEach((q, idx) => {
        html += `<div class="question-block"><p>${idx + 1}. ${q.text}</p>`;
        q.options.forEach(opt => {
            html += `<label><input type="radio" name="pg_${q.id}" value="${opt}"> ${opt}</label><br>`;
        });
        html += `</div>`;
    });

    html += "<h3>Bagian 2: Essay</h3>";
    selectedEssay.forEach((q, idx) => {
        html += `<div class="question-block"><p>${idx + 1}. ${q.text}</p>
                 <textarea name="essay_${q.id}" rows="3" style="width:100%"></textarea></div>`;
    });

    qList.innerHTML = html;
}

function startTimer() {
    const timerEl = document.getElementById('timer');
    const interval = setInterval(() => {
        let mins = Math.floor(timeLimit / 60);
        let secs = timeLimit % 60;
        timerEl.innerText = `Waktu: ${mins}:${secs < 10 ? '0' : ''}${secs}`;

        if (timeLimit <= 0) {
            clearInterval(interval);
            submitAnswers();
        }
        timeLimit--;
    }, 1000);
}

function activateAntiCheat() {
    // Deteksi jika user pindah tab
    window.onblur = function () {
        alert("Peringatan! Dilarang meninggalkan jendela ujian.");
    };
}

document.getElementById('quizForm').onsubmit = function (e) {
    e.preventDefault();
    submitAnswers();
};

function submitAnswers() {
    const formData = new FormData(document.getElementById('quizForm'));
    const data = {
        nama: document.getElementById('userName').value,
        jawaban: Object.fromEntries(formData.entries())
    };

    // Kirim ke Google Apps Script (Ganti URL dengan URL Web App Anda)
    fetch('https://script.google.com/macros/s/AKfycbxu9Oaevfo16r1k2WqdYbDzvnrsjhZKGCn54BG0kWZMsrmkwSVHTjJiFC5Zqg_9ghYq/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data)
    }).then(() => {
        document.getElementById('exam-container').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');
    });
}