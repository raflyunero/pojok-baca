function showCategory(category) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = ''; // Kosongkan katalog sebelum menambahkan buku berdasarkan kategori
    
    let books = [];
    if (category === 'education') {
      books = [
        { title: 'Matematika untuk Anak', description: 'Buku pelajaran matematika dasar untuk SD.' },
        { title: 'Ilmu Pengetahuan Alam', description: 'Buku IPA untuk kelas 3 SD.' }
      ];
    } else if (category === 'entertainment') {
      books = [
        { title: 'Cerita Rakyat Indonesia', description: 'Kumpulan cerita rakyat dari berbagai daerah.' },
        { title: 'Dongeng sebelum Tidur', description: 'Cerita dongeng yang menghibur.' }
      ];
    } else if (category === 'nature') {
      books = [
        { title: 'Dunia Hewan', description: 'Buku mengenal berbagai macam hewan.' },
        { title: 'Tumbuhan dan Lingkungan', description: 'Buku tentang tanaman dan ekosistem.' }
      ];
    } else if (category === 'history') {
      books = [
        { title: 'Sejarah Indonesia', description: 'Buku sejarah Indonesia dari masa kerajaan hingga modern.' },
        { title: 'Sejarah Dunia', description: 'Buku sejarah dunia sejak zaman prasejarah hingga sekarang.' }
      ];
    } else if (category === 'sports') {
      books = [
        { title: 'Olahraga untuk Anak', description: 'Buku yang mengenalkan berbagai jenis olahraga.' },
        { title: 'Pentingnya Olahraga', description: 'Mengajarkan manfaat olahraga bagi kesehatan.' }
      ];
    } else if (category === 'crafts') {
      books = [
        { title: 'Kerajinan Tangan', description: 'Buku tutorial membuat kerajinan tangan dari bahan bekas.' },
        { title: 'Membuat Alat Musik Sederhana', description: 'Tutorial membuat alat musik dari bahan-bahan alami.' }
      ];
    } else if (category === 'health') {
      books = [
        { title: 'Kesehatan Anak', description: 'Buku tentang pola makan dan hidup sehat untuk anak.' },
        { title: 'Menjaga Kesehatan Tubuh', description: 'Informasi tentang cara menjaga tubuh tetap sehat.' }
      ];
    } else if (category === 'religion') {
      books = [
        { title: 'Cerita Agama Islam', description: 'Cerita-cerita inspiratif dari agama Islam.' },
        { title: 'Doa Sehari-hari', description: 'Buku kumpulan doa-doa yang diajarkan dalam agama.' }
      ];
    }
  
    // Tampilkan buku berdasarkan kategori
    books.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
      bookElement.innerHTML = `
        <img src="book-image.jpg" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.description}</p>
      `;
      catalog.appendChild(bookElement);
    });
  }
  
  function closeBookInfo() {
    document.getElementById('bookInfoModal').style.display = 'none';
  }
  