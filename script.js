// Fungsi untuk menampilkan kategori buku berdasarkan pilihan
function showCategory(category) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = ''; // Kosongkan katalog buku sebelumnya

    let books = [];

    if (category === 'education') {
        books = [
            { title: 'Matematika untuk Anak', description: 'Buku pelajaran matematika dasar untuk SD.', image: "Logo Undip Undip.png" },
            { title: 'Ilmu Pengetahuan Alam', description: 'Buku IPA untuk kelas 3 SD.', image: "Logo HD.png" }
        ];
    } else if (category === 'entertainment') {
        books = [
            { title: 'Cerita Rakyat Indonesia', description: 'Kumpulan cerita rakyat dari berbagai daerah.', image: "Logo Undip Undip.png" },
            { title: 'Dongeng sebelum Tidur', description: 'Cerita dongeng yang menghibur.', image: "Logo HD.png" }
        ];
    } else if (category === 'nature') {
        books = [
            { title: 'Dunia Hewan', description: 'Buku mengenal berbagai macam hewan.', image: "Logo HD.png" },
            { title: 'Tumbuhan dan Lingkungan', description: 'Buku tentang tanaman dan ekosistem.', image: "Logo Undip Undip.png" }
        ];
    } else if (category === 'history') {
        books = [
            { title: 'Sejarah Indonesia', description: 'Buku sejarah Indonesia dari masa kerajaan hingga modern.', image: "Logo Undip Undip.png" },
            { title: 'Sejarah Dunia', description: 'Buku sejarah dunia sejak zaman prasejarah hingga sekarang.', image: "Logo HD.png" }
        ];
    }

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.description}</p>
        `;
        catalog.appendChild(bookElement);
    });

    document.getElementById('catalog').style.display = 'flex';
}
