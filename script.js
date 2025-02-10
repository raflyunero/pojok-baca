// Show loading screen and hide all content
function showLoading() {
    document.getElementById('loading').style.display = 'flex'; // Display the loading screen
    document.getElementById('categories').style.display = 'none'; // Hide categories
    document.getElementById('catalog').style.display = 'none'; // Hide catalog
  }
  
  // Hide loading screen and show all content
  function hideLoading() {
    document.getElementById('loading').style.display = 'none'; // Hide loading screen
    document.getElementById('categories').style.display = 'flex'; // Show categories
    document.getElementById('catalog').style.display = 'flex'; // Show catalog
  }
  
  function showCategory(category) {
    showLoading(); // Show loading screen when category is selected
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = ''; // Empty catalog before adding books based on category
    
    let books = [];
    if (category === 'education') {
      books = [
        { title: 'Matematika untuk Anak', description: 'Buku pelajaran matematika dasar untuk SD.', image: "Logo Undip Undip.png" },
        { title: 'Ilmu Pengetahuan Alam', description: 'Buku IPA untuk kelas 3 SD.',image:"Logo HD.png" },
        { title: 'Ilmu Pengetahuan Alam', description: 'Buku IPA untuk kelas 2 SD.', image:"Logo Undip Undip.png" },
        { title: 'Ilmu Pengetahuan Alam', description: 'Buku IPA untuk kelas 1 SD.',image:"Logo HD.png" }
      ];
    } else if (category === 'entertainment') {
      books = [
        { title: 'Cerita Rakyat Indonesia', description: 'Kumpulan cerita rakyat dari berbagai daerah.', image: "Logo Undip Undip.png" },
        { title: 'Dongeng sebelum Tidur', description: 'Cerita dongeng yang menghibur.',image:"Logo HD.png" }
      ];
    } else if (category === 'nature') {
      books = [
        { title: 'Dunia Hewan', description: 'Buku mengenal berbagai macam hewan.',image:"Logo HD.png" },
        { title: 'Tumbuhan dan Lingkungan', description: 'Buku tentang tanaman dan ekosistem.', image: "Logo Undip Undip.png" }
      ];
    } else if (category === 'history') {
      books = [
        { title: 'Sejarah Indonesia', description: 'Buku sejarah Indonesia dari masa kerajaan hingga modern.', image: "Logo Undip Undip.png" },
        { title: 'Sejarah Dunia', description: 'Buku sejarah dunia sejak zaman prasejarah hingga sekarang.',image:"Logo HD.png" }
      ];
    }
  
    // Display books based on selected category
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
          <img src="${book.image}" alt="${book.title}">  <!-- Gunakan gambar spesifik dari objek book -->
          <h3>${book.title}</h3>
          <p>${book.description}</p>
        `;
        catalog.appendChild(bookElement);
      });
      
  
    hideLoading(); // Hide loading screen once books are loaded
  }
  
  function closeBookInfo() {
    document.getElementById('bookInfoModal').style.display = 'none';
  }
  
