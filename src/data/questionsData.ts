import { Question } from '../types/question';

export const questionsData: Question[] = [
  // =========================================================================
  // 1. Vektor di R3 — Operasi Linear 2u - v + 3w
  // =========================================================================
  {
    id: 'siaga2-q1',
    number: 1,
    packageId: 'siaga-2',
    topic: 'Vektor',
    subtopic: 'Operasi Aljabar Vektor di R³',
    type: 'single',
    stimulus:
      'Diketahui vektor $\\vec{u} = \\begin{pmatrix} p \\\\ 2 \\\\ -1 \\end{pmatrix}$, $\\vec{v} = \\begin{pmatrix} 4 \\\\ -3 \\\\ q \\end{pmatrix}$, dan $\\vec{w} = \\begin{pmatrix} -1 \\\\ r \\\\ 5 \\end{pmatrix}$.',
    questionText:
      'Jika $2\\vec{u} - \\vec{v} + 3\\vec{w} = \\begin{pmatrix} -5 \\\\ 1 \\\\ 5 \\end{pmatrix}$, maka nilai dari $p + q + r$ adalah ....',
    options: [
      { id: 'A', text: '$5$' },
      { id: 'B', text: '$6$' },
      { id: 'C', text: '$7$' },
      { id: 'D', text: '$8$' },
      { id: 'E', text: '$9$' },
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Substitusikan komponen vektor ke dalam persamaan kombinasi linear $2\\vec{u} - \\vec{v} + 3\\vec{w} = \\begin{pmatrix} -5 \\\\ 1 \\\\ 5 \\end{pmatrix}$:',
      '$$2\\begin{pmatrix} p \\\\ 2 \\\\ -1 \\end{pmatrix} - \\begin{pmatrix} 4 \\\\ -3 \\\\ q \\end{pmatrix} + 3\\begin{pmatrix} -1 \\\\ r \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ 1 \\\\ 5 \\end{pmatrix}$$',
      '$$\\begin{pmatrix} 2p - 4 - 3 \\\\ 4 - (-3) + 3r \\\\ -2 - q + 15 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ 1 \\\\ 5 \\end{pmatrix}$$',
      'Selesaikan persamaan untuk tiap baris komponen:',
      '• Baris 1: $2p - 7 = -5 \\implies 2p = 2 \\implies p = 1$',
      '• Baris 2: $7 + 3r = 1 \\implies 3r = -6 \\implies r = -2$',
      '• Baris 3: $13 - q = 5 \\implies q = 8$',
      'Hitung jumlah $p + q + r$:',
      '$$p + q + r = 1 + 8 + (-2) = 7$$',
    ],
  },

  // =========================================================================
  // 2. Vektor di R3 — Panjang Vektor |v| = 9
  // =========================================================================
  {
    id: 'siaga2-q2',
    number: 2,
    packageId: 'siaga-2',
    topic: 'Vektor',
    subtopic: 'Panjang (Modulus) Vektor',
    type: 'single',
    stimulus:
      'Diketahui vektor $\\vec{v} = \\begin{pmatrix} t - 1 \\\\ 1 \\\\ 8 \\end{pmatrix} \\in \\mathbb{R}^3$ dengan syarat nilai $t < 0$.',
    questionText:
      'Jika panjang vektor $|\\vec{v}| = 9$, maka nilai $t$ yang memenuhi adalah ....',
    options: [
      { id: 'A', text: '$-1$' },
      { id: 'B', text: '$-2$' },
      { id: 'C', text: '$-3$' },
      { id: 'D', text: '$-4$' },
      { id: 'E', text: '$-5$' },
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Rumus modulus vektor $\\vec{v} = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$ adalah $|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}$.',
      'Kuadratkan kedua ruas persamaan $|\\vec{v}| = 9$:',
      '$$(t - 1)^2 + 1^2 + 8^2 = 9^2$$',
      '$$(t - 1)^2 + 1 + 64 = 81$$',
      '$$(t - 1)^2 = 81 - 65 = 16$$',
      'Tarik akar kedua ruas:',
      '$$t - 1 = \\pm 4 \\implies t = 1 \\pm 4$$',
      'Diperoleh dua kemungkinan nilai: $t = 5$ atau $t = -3$.',
      'Karena terdapat batasan $t < 0$, maka nilai yang memenuhi adalah $t = -3$.',
    ],
  },

  // =========================================================================
  // 3. Limit Fungsi Trigonometri x -> pi/2
  // =========================================================================
  {
    id: 'siaga2-q3',
    number: 3,
    packageId: 'siaga-2',
    topic: 'Limit Fungsi',
    subtopic: 'Limit Fungsi Trigonometri',
    type: 'single',
    questionText:
      'Nilai dari $\\lim_{x \\to \\frac{\\pi}{2}} \\frac{4\\cos^2 x}{\\sin x - 1}$ adalah ....',
    options: [
      { id: 'A', text: '$-4$' },
      { id: 'B', text: '$-5$' },
      { id: 'C', text: '$-6$' },
      { id: 'D', text: '$-7$' },
      { id: 'E', text: '$-8$' },
    ],
    correctAnswer: 'E',
    solutionSteps: [
      'Substitusi langsung menghasilkan bentuk tak tentu $\\frac{4\\cos^2(\\pi/2)}{\\sin(\\pi/2) - 1} = \\frac{0}{0}$.',
      'Gunakan identitas Pythagoras $\\cos^2 x = 1 - \\sin^2 x$ pada pembilang:',
      '$$\\lim_{x \\to \\frac{\\pi}{2}} \\frac{4(1 - \\sin^2 x)}{\\sin x - 1}$$',
      'Faktorkan selisih dua kuadrat $1 - \\sin^2 x = (1 - \\sin x)(1 + \\sin x)$:',
      '$$= \\lim_{x \\to \\frac{\\pi}{2}} \\frac{-4(\\sin x - 1)(1 + \\sin x)}{\\sin x - 1}$$',
      'Bagi pembilang dan penyebut dengan faktor pembuat nol $(\\sin x - 1)$:',
      '$$= \\lim_{x \\to \\frac{\\pi}{2}} -4(1 + \\sin x)$$',
      'Substitusikan $x = \\frac{\\pi}{2}$ di mana $\\sin\\left(\\frac{\\pi}{2}\\right) = 1$:',
      '$$= -4(1 + 1) = -8$$',
    ],
  },

  // =========================================================================
  // 4. Limit Fungsi Trigonometri Sudut Rangkap x -> 3
  // =========================================================================
  {
    id: 'siaga2-q4',
    number: 4,
    packageId: 'siaga-2',
    topic: 'Limit Fungsi',
    subtopic: 'Limit Fungsi Trigonometri Sudut Rangkap',
    type: 'single',
    questionText:
      'Nilai dari $\\lim_{x \\to 3} \\frac{3(1 - \\cos(2x - 6))}{(x - 3)^2}$ adalah ....',
    options: [
      { id: 'A', text: '$2$' },
      { id: 'B', text: '$3$' },
      { id: 'C', text: '$4$' },
      { id: 'D', text: '$5$' },
      { id: 'E', text: '$6$' },
    ],
    correctAnswer: 'E',
    solutionSteps: [
      'Gunakan substitusi variabel: misalkan $u = x - 3$. Saat $x \\to 3$, maka $u \\to 0$.',
      'Bentuk argumen kosinus dapat ditulis: $2x - 6 = 2(x - 3) = 2u$. Persamaan limit menjadi:',
      '$$\\lim_{u \\to 0} \\frac{3(1 - \\cos 2u)}{u^2}$$',
      'Gunakan rumus sudut rangkap kosinus $1 - \\cos 2u = 2\\sin^2 u$:',
      '$$\\lim_{u \\to 0} \\frac{3 \\cdot 2\\sin^2 u}{u^2} = 6 \\cdot \\lim_{u \\to 0} \\left(\\frac{\\sin u}{u}\\right)^2$$',
      'Karena $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$, maka diperoleh:',
      '$$= 6 \\cdot (1)^2 = 6$$',
    ],
  },

  // =========================================================================
  // 5. Polinomial — Penjumlahan Keuntungan Dua Sektor Usaha
  // =========================================================================
  {
    id: 'siaga2-q5',
    number: 5,
    packageId: 'siaga-2',
    topic: 'Polinomial',
    subtopic: 'Operasi Penjumlahan dan Nilai Polinomial',
    type: 'single',
    stimulus:
      'Sebuah perusahaan memiliki dua bidang usaha. Bidang A bergerak di sektor manufaktur, sedangkan bidang B bergerak di sektor distribusi. Keuntungan bulanan dari masing-masing bidang usaha (dalam juta rupiah) dimodelkan oleh fungsi:\n$$A(x) = 3x^3 + 5x^2 - 12x + 150$$\n$$B(x) = x^3 - 2x^2 + 20x + 50$$\ndengan $x$ menyatakan lama beroperasi bidang usaha dalam satuan bulan.',
    questionText:
      'Manajemen perusahaan ingin mengetahui total keuntungan yang diperoleh dari kedua bidang usaha tersebut. Keuntungan perusahaan tersebut pada bulan ketiga adalah ....',
    options: [
      { id: 'A', text: '$\\text{Rp}359.000.000,00$' },
      { id: 'B', text: '$\\text{Rp}365.000.000,00$' },
      { id: 'C', text: '$\\text{Rp}372.000.000,00$' },
      { id: 'D', text: '$\\text{Rp}380.000.000,00$' },
      { id: 'E', text: '$\\text{Rp}395.000.000,00$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Jumlahkan kedua fungsi polinomial untuk memperoleh total keuntungan $T(x) = A(x) + B(x)$:',
      '$$T(x) = (3x^3 + 5x^2 - 12x + 150) + (x^3 - 2x^2 + 20x + 50)$$',
      '$$T(x) = 4x^3 + 3x^2 + 8x + 200$$',
      'Evaluasi fungsi total keuntungan pada bulan ketiga ($x = 3$):',
      '$$T(3) = 4(3)^3 + 3(3)^2 + 8(3) + 200$$',
      '$$T(3) = 4(27) + 3(9) + 24 + 200 = 108 + 27 + 24 + 200 = 359$$',
      'Karena satuan fungsi dalam juta rupiah, total keuntungan pada bulan ketiga adalah $\\text{Rp}359.000.000,00$.',
    ],
  },

  // =========================================================================
  // 6. Polinomial — Akar-akar & Pertidaksamaan Transportasi
  // =========================================================================
  {
    id: 'siaga2-q6',
    number: 6,
    packageId: 'siaga-2',
    topic: 'Polinomial',
    subtopic: 'Akar-akar Polinomial & Pertidaksamaan',
    type: 'single',
    stimulus:
      'Suatu perusahaan yang bergerak di bidang transportasi memodelkan keuntungan usahanya (dalam jutaan rupiah) menggunakan fungsi $f(x) = x^3 - 6x^2 + 11x - 6$, dengan $x$ menyatakan waktu dalam bulan. Pihak manajemen perusahaan ingin mengamati pergerakan keuntungan pada periode bulan ke-$2$ hingga bulan ke-$5$ ($2 \\le x \\le 5$).',
    questionText:
      'Pada interval mana perusahaan mendapatkan keuntungan ($f(x) > 0$)?',
    options: [
      { id: 'A', text: '$2{,}5 < x < 3$' },
      { id: 'B', text: '$2{,}5 \\le x \\le 3$' },
      { id: 'C', text: '$2 < x < 3$' },
      { id: 'D', text: '$3 < x \\le 5$' },
      { id: 'E', text: '$2 \\le x \\le 4$' },
    ],
    correctAnswer: 'D',
    solutionSteps: [
      'Perusahaan mendapatkan keuntungan jika nilai fungsi keuntungan bernilai positif: $f(x) > 0$.',
      'Faktorkan suku banyak $x^3 - 6x^2 + 11x - 6 = 0$. Uji nilai $x = 1$:',
      '$$f(1) = 1^3 - 6(1)^2 + 11(1) - 6 = 1 - 6 + 11 - 6 = 0$$',
      'Bagi dengan $(x - 1)$ menghasilkan $x^2 - 5x + 6 = (x - 2)(x - 3)$.',
      'Diperoleh bentuk pemfaktoran penuh: $f(x) = (x - 1)(x - 2)(x - 3)$.',
      'Buat garis bilangan untuk tanda nilai $f(x)$:',
      '• Untuk $x < 1$: bernilai negatif',
      '• Untuk $1 < x < 2$: bernilai positif',
      '• Untuk $2 < x < 3$: bernilai negatif (mengalami kerugian)',
      '• Untuk $x > 3$: bernilai positif (mendapatkan keuntungan)',
      'Karena periode pengamatan dibatasi pada $2 \\le x \\le 5$, maka perusahaan mendapatkan keuntungan pada interval $3 < x \\le 5$.',
    ],
  },

  // =========================================================================
  // 7. Polinomial — Pendapatan vs Modal (Titik Impas)
  // =========================================================================
  {
    id: 'siaga2-q7',
    number: 7,
    packageId: 'siaga-2',
    topic: 'Polinomial',
    subtopic: 'Pemodelan Polinomial dalam Ekonomi',
    type: 'single',
    stimulus:
      'Sebuah perusahaan memproduksi dan menjual suatu barang. Pendapatan perusahaan (dalam juta rupiah) dinyatakan oleh fungsi $f(x) = 2x^3 + 2x^2 + 40x$, sedangkan modal produksi yang dikeluarkan perusahaan (dalam juta rupiah) dinyatakan oleh fungsi $c(x) = x^3 + 6x^2 + 15x + 150$, dengan $x$ menyatakan jumlah barang yang dijual (dalam satuan ratus unit).',
    questionText:
      'Penjualan minimal agar perusahaan tidak mengalami kerugian adalah ....',
    options: [
      { id: 'A', text: '$400\\text{ unit}$' },
      { id: 'B', text: '$500\\text{ unit}$' },
      { id: 'C', text: '$600\\text{ unit}$' },
      { id: 'D', text: '$700\\text{ unit}$' },
      { id: 'E', text: '$800\\text{ unit}$' },
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Syarat agar perusahaan tidak mengalami kerugian adalah pendapatan lebih besar atau sama dengan modal produksi: $f(x) \\ge c(x)$.',
      '$$2x^3 + 2x^2 + 40x \\ge x^3 + 6x^2 + 15x + 150$$',
      '$$x^3 - 4x^2 + 25x - 150 \\ge 0$$',
      'Cari pembuat nol dari persamaan $P(x) = x^3 - 4x^2 + 25x - 150 = 0$. Uji nilai $x = 5$:',
      '$$P(5) = 5^3 - 4(5)^2 + 25(5) - 150 = 125 - 100 + 125 - 150 = 0$$',
      'Faktorkan polinomial dengan pembagian Horner:',
      '$$P(x) = (x - 5)(x^2 + x + 30) \\ge 0$$',
      'Periksa diskriminan faktor kuadrat $x^2 + x + 30$: $D = 1^2 - 4(1)(30) = -119 < 0$. Karena $a > 0$ dan $D < 0$, faktor kuadrat definit positif untuk semua $x \\in \\mathbb{R}$.',
      'Sehingga pertidaksamaan hanya ditentukan oleh faktor linear: $x - 5 \\ge 0 \\implies x \\ge 5$.',
      'Karena $x$ dalam satuan ratus unit, penjualan minimal adalah $5 \\times 100 = 500\\text{ unit}$.',
    ],
  },

  // =========================================================================
  // 8. Polinomial — Akar Rasional g(x) = 0
  // =========================================================================
  {
    id: 'siaga2-q8',
    number: 8,
    packageId: 'siaga-2',
    topic: 'Polinomial',
    subtopic: 'Teorema Faktor dan Akar Rasional',
    type: 'multiple',
    stimulus:
      'Diketahui suku banyak derajat tiga $g(x) = x^3 + 16x^2 + 83x + 140$. Nilai-nilai $x$ yang mengakibatkan $g(x) = 0$ dicari untuk menentukan titik potong kurva terhadap sumbu-$x$.',
    questionText:
      'Tentukan semua pernyataan berikut yang benar berdasarkan informasi tersebut! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Nilai $x$ yang memenuhi adalah $-7$.' },
      { id: 'B', text: 'Nilai $x$ yang memenuhi adalah $-6$.' },
      { id: 'C', text: 'Nilai $x$ yang memenuhi adalah $-5$.' },
      { id: 'D', text: 'Nilai $x$ yang memenuhi adalah $-4$.' },
      { id: 'E', text: 'Nilai $x$ yang memenuhi adalah $-2$.' },
    ],
    correctAnswer: ['A', 'C', 'D'],
    solutionSteps: [
      'Gunakan Teorema Akar Rasional: calon akar riil dari persamaan suku banyak dengan semua koefisien positif harus bernilai negatif.',
      'Uji calon akar rasional pembagi $140$:',
      '• Uji $x = -4$:',
      '$$g(-4) = (-4)^3 + 16(-4)^2 + 83(-4) + 140 = -64 + 256 - 332 + 140 = 0$$',
      'Karena bernilai $0$, maka $(x + 4)$ adalah faktor dari $g(x)$.',
      'Lakukan pembagian Horner untuk membagi $g(x)$ dengan $(x + 4)$:',
      '$$g(x) = (x + 4)(x^2 + 12x + 35)$$',
      'Faktorkan persamaan kuadrat hasil bagi:',
      '$$x^2 + 12x + 35 = (x + 5)(x + 7) = 0$$',
      'Diperoleh seluruh akar persamaan $g(x) = 0$ adalah $x = -4$, $x = -5$, dan $x = -7$.',
      'Oleh karena itu, opsi A ($-7$), C ($-5$), dan D ($-4$) bernilai BENAR.',
    ],
  },

  // =========================================================================
  // 9. Matriks — Determinan Matriks & Aturan Cramer (Hari Rabu)
  // =========================================================================
  {
    id: 'siaga2-q9',
    number: 9,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Determinan Matriks & Aturan Cramer',
    type: 'single',
    stimulus:
      'Suatu koperasi menjual buku tulis, pena, dan penggaris kepada anggota dan nonanggota. Data banyak barang yang dibeli pada hari Senin dan daftar harga (dalam ribuan rupiah) disajikan dalam matriks $\\text{Barang} = \\begin{bmatrix} 12 & 10 & 6 \\\\ 15 & 11 & 9 \\end{bmatrix}$ (baris: Anggota, Nonanggota; kolom: Buku tulis, Pena, Penggaris) dan $\\text{Harga} = \\begin{bmatrix} 4 & 5 \\\\ 2 & 3 \\\\ 3 & 4 \\end{bmatrix}$ (kolom: Anggota, Nonanggota). Pada hari Rabu, total penjualan buku tulis ($x$) dan pena ($y$) kepada anggota sebesar $56$ ribu rupiah dan kepada nonanggota sebesar $79$ ribu rupiah.',
    questionText:
      'Nilai $x$ dan $y$ berdasarkan aturan determinan Cramer adalah ....',
    options: [
      {
        id: 'A',
        text: '$x = \\frac{\\begin{vmatrix} 56 & 2 \\\\ 79 & 3 \\end{vmatrix}}{\\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix}} = 5 \\text{ dan } y = \\frac{\\begin{vmatrix} 4 & 56 \\\\ 5 & 79 \\end{vmatrix}}{\\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix}} = 18$',
      },
      {
        id: 'B',
        text: '$x = \\frac{\\begin{vmatrix} 2 & 56 \\\\ 3 & 79 \\end{vmatrix}}{\\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix}} = -5 \\text{ dan } y = \\frac{\\begin{vmatrix} 56 & 4 \\\\ 79 & 5 \\end{vmatrix}}{\\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix}} = -18$',
      },
      {
        id: 'C',
        text: '$x = \\frac{\\begin{vmatrix} 56 & 4 \\\\ 79 & 5 \\end{vmatrix}}{\\begin{vmatrix} 4 & 5 \\\\ 2 & 3 \\end{vmatrix}} = 18 \\text{ dan } y = \\frac{\\begin{vmatrix} 2 & 56 \\\\ 3 & 79 \\end{vmatrix}}{\\begin{vmatrix} 4 & 5 \\\\ 2 & 3 \\end{vmatrix}} = 5$',
      },
      {
        id: 'D',
        text: '$x = \\frac{\\begin{vmatrix} 56 & 3 \\\\ 79 & 2 \\end{vmatrix}}{\\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix}} = 8 \\text{ dan } y = \\frac{\\begin{vmatrix} 4 & 56 \\\\ 5 & 79 \\end{vmatrix}}{\\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix}} = 12$',
      },
      {
        id: 'E',
        text: '$x = \\frac{\\begin{vmatrix} 56 & 2 \\\\ 79 & 3 \\end{vmatrix}}{\\begin{vmatrix} 4 & 3 \\\\ 5 & 2 \\end{vmatrix}} = 10 \\text{ dan } y = \\frac{\\begin{vmatrix} 4 & 56 \\\\ 5 & 79 \\end{vmatrix}}{\\begin{vmatrix} 4 & 3 \\\\ 5 & 2 \\end{vmatrix}} = 8$',
      },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Identifikasi harga satuan barang dari matriks $\\text{Harga} = \\begin{bmatrix} 4 & 5 \\\\ 2 & 3 \\\\ 3 & 4 \\end{bmatrix}$ di mana kolom 1 adalah Anggota dan kolom 2 adalah Nonanggota:',
      '• Baris 1 (Buku Tulis): Anggota $= 4$, Nonanggota $= 5$',
      '• Baris 2 (Pena): Anggota $= 2$, Nonanggota $= 3$',
      'Susun sistem persamaan linear transaksi hari Rabu ($x$ = banyak buku tulis, $y$ = banyak pena):',
      '$$\\begin{cases} 4x + 2y = 56 \\\\ 5x + 3y = 79 \\end{cases} \\iff \\begin{bmatrix} 4 & 2 \\\\ 5 & 3 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 56 \\\\ 79 \\end{bmatrix}$$',
      'Berdasarkan aturan Cramer, hitung determinan utama $D$:',
      '$$D = \\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix} = (4)(3) - (2)(5) = 12 - 10 = 2$$',
      'Ganti kolom pertama dengan vektor hasil $\\begin{bmatrix} 56 \\\\ 79 \\end{bmatrix}$ untuk mencari nilai $x$:',
      '$$x = \\frac{D_x}{D} = \\frac{\\begin{vmatrix} 56 & 2 \\\\ 79 & 3 \\end{vmatrix}}{\\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix}} = \\frac{(56)(3) - (2)(79)}{2} = \\frac{168 - 158}{2} = \\frac{10}{2} = 5$$',
      'Ganti kolom kedua dengan vektor hasil $\\begin{bmatrix} 56 \\\\ 79 \\end{bmatrix}$ untuk mencari nilai $y$:',
      '$$y = \\frac{D_y}{D} = \\frac{\\begin{vmatrix} 4 & 56 \\\\ 5 & 79 \\end{vmatrix}}{\\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix}} = \\frac{(4)(79) - (56)(5)}{2} = \\frac{316 - 280}{2} = \\frac{36}{2} = 18$$',
      'Jadi, opsi yang tepat adalah **A**.',
    ],
  },

  // =========================================================================
  // 10. Matriks — Penjualan Koperasi Hari Senin
  // =========================================================================
  {
    id: 'siaga2-q10',
    number: 10,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Perkalian Matriks dalam Konteks Kontekstual',
    type: 'single',
    stimulus:
      'Di sebuah sekolah, terdapat dua kelompok siswa yang aktif berbelanja perlengkapan belajar di koperasi, yaitu kelompok anggota dan kelompok nonanggota. Matriks berikut menunjukkan data penjualan hari Senin:\n\n' +
      '| Kelompok | Buku Tulis | Pena | Penggaris |\n' +
      '| :--- | :---: | :---: | :---: |\n' +
      '| Anggota | $12$ | $10$ | $4$ |\n' +
      '| Nonanggota | $15$ | $11$ | $5$ |\n\n' +
      'Daftar harga satuan barang (dalam ribuan rupiah):\n\n' +
      '| Status Siswa | Buku Tulis | Pena | Penggaris |\n' +
      '| :--- | :---: | :---: | :---: |\n' +
      '| Anggota | $4$ | $2$ | $3$ |\n' +
      '| Nonanggota | $5$ | $3$ | $4$ |',
    questionText:
      'Pendapatan koperasi dari penjualan buku tulis dan pena pada hari Senin dari kelompok anggota dan nonanggota adalah ....',
    options: [
      { id: 'A', text: '$\\text{Rp}176.000,00$' },
      { id: 'B', text: '$\\text{Rp}184.000,00$' },
      { id: 'C', text: '$\\text{Rp}192.000,00$' },
      { id: 'D', text: '$\\text{Rp}200.000,00$' },
      { id: 'E', text: '$\\text{Rp}210.000,00$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Hitung pendapatan dari penjualan buku tulis dan pena untuk kelompok anggota:',
      '$$\\text{Pendapatan Anggota} = (12 \\times \\text{Rp}4.000) + (10 \\times \\text{Rp}2.000) = \\text{Rp}48.000 + \\text{Rp}20.000 = \\text{Rp}68.000$$',
      'Hitung pendapatan dari penjualan buku tulis dan pena untuk kelompok nonanggota:',
      '$$\\text{Pendapatan Nonanggota} = (15 \\times \\text{Rp}5.000) + (11 \\times \\text{Rp}3.000) = \\text{Rp}75.000 + \\text{Rp}33.000 = \\text{Rp}108.000$$',
      'Total pendapatan hari Senin dari kedua kelompok:',
      '$$\\text{Total Pendapatan} = \\text{Rp}68.000 + \\text{Rp}108.000 = \\text{Rp}176.000,00$$',
      'Dalam format matriks baris dan kolom:\n$$\\begin{pmatrix} 12 & 10 \\end{pmatrix}\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} 15 & 11 \\end{pmatrix}\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix} = 68 + 108 = 176\\text{ (ribu rupiah)}$$',
    ],
  },

  // =========================================================================
  // 11. Matriks — Evaluasi Diskon 10% Hari Jumat (Tabel B/S)
  // =========================================================================
  {
    id: 'siaga2-q11',
    number: 11,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Aplikasi SPLDV & Diskon Koperasi',
    type: 'table',
    stimulus:
      'Pada hari Jumat diberikan diskon sebesar $10\\%$ untuk anggota koperasi yang membeli buku tulis, pena, atau penggaris. Harga normal untuk anggota adalah buku tulis $\\text{Rp}4.000$, pena $\\text{Rp}2.000$, dan penggaris $\\text{Rp}3.000$. Setelah diskon $10\\%$, harga untuk anggota menjadi: buku tulis $\\text{Rp}3.600$ dan pena $\\text{Rp}1.800$.\n\n' +
      'Harga untuk nonanggota tetap normal: buku tulis $\\text{Rp}5.000$ dan pena $\\text{Rp}3.000$.\n\n' +
      'Pada hari Jumat tersebut diperoleh data transaksi:\n' +
      '• Anggota koperasi membeli buku tulis dan pena dengan total pembayaran $\\text{Rp}72.000,00$.\n' +
      '• Nonanggota koperasi membeli buku tulis dan pena dengan total pembayaran $\\text{Rp}110.000,00$.',
    questionText:
      'Tentukan Benar atau Salah untuk setiap pernyataan berikut dengan memberi tanda centang (✓)!',
    statements: [
      {
        id: 's1',
        text: 'Banyak buku tulis yang terjual sebanyak 10 buah.',
        isTrue: true,
      },
      {
        id: 's2',
        text: 'Banyak pena yang terjual sebanyak 20 buah.',
        isTrue: true,
      },
      {
        id: 's3',
        text: 'Selisih buku tulis dan pena yang terjual pada hari Jumat adalah 10 buah.',
        isTrue: true,
      },
    ],
    correctAnswer: { s1: true, s2: true, s3: true },
    solutionSteps: [
      'Modelkan sistem persamaan linear dari data hari Jumat:',
      '• Transaksi Anggota: $3.600x + 1.800y = 72.000 \\implies 2x + y = 40$',
      '• Transaksi Nonanggota: $5.000x + 3.000y = 110.000 \\implies 5x + 3y = 110$',
      'Eliminasi variabel $y$: Kalikan persamaan pertama dengan $3$:',
      '$$6x + 3y = 120$$',
      'Kurangkan dengan persamaan kedua:',
      '$$(6x + 3y) - (5x + 3y) = 120 - 110 \\implies x = 10$$',
      'Substitusikan $x = 10$ ke persamaan $2x + y = 40$:',
      '$$2(10) + y = 40 \\implies 20 + y = 40 \\implies y = 20$$',
      'Evaluasi kebenaran setiap pernyataan:',
      '1. Banyak buku tulis ($x$) terjual sebanyak $10$ buah $\\implies$ **Benar**.',
      '2. Banyak pena ($y$) terjual sebanyak $20$ buah $\\implies$ **Benar**.',
      '3. Selisih buku tulis dan pena $= |20 - 10| = 10$ buah $\\implies$ **Benar**.',
    ],
  },

  // =========================================================================
  // 12. Matriks — Analisis Kesalahan Invers Matriks Tarif Laundry
  // =========================================================================
  {
    id: 'siaga2-q12',
    number: 12,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Analisis Kesalahan Invers Matriks Ordo 2x2',
    type: 'single',
    stimulus:
      'Usaha laundry menyediakan dua jenis layanan, yaitu laundry reguler dan laundry ekspres. Pada suatu hari diperoleh data transaksi sebagai berikut:\n' +
      '• Pak Yana mencuci $3\\text{ kg}$ pakaian dengan layanan reguler dan $2\\text{ kg}$ pakaian dengan layanan ekspres dengan total biaya $\\text{Rp}34.000,00$.\n' +
      '• Bu Mail mencuci $5\\text{ kg}$ pakaian dengan layanan reguler dan $3\\text{ kg}$ pakaian dengan layanan ekspres dengan total biaya $\\text{Rp}53.000,00$.\n\n' +
      'Pemilik laundry memodelkan permasalahan tersebut ke dalam bentuk matriks. Variabel $x$ menyatakan tarif reguler/kg dan $y$ menyatakan tarif ekspres/kg:\n' +
      '$$\\begin{pmatrix} 3 & 2 \\\\ 5 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$$\n' +
      'Pemilik menyelesaikan menggunakan metode invers matriks dan menuliskan:\n' +
      '$$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 3 & -2 \\\\ -5 & 3 \\end{pmatrix} \\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$$',
    questionText:
      'Namun, terdapat kesalahan pada penyelesaian menggunakan metode invers matriks tersebut. Bagian yang salah dari operasi matriks tersebut adalah ....',
    options: [
      {
        id: 'A',
        text: 'Matriks adjoin seharusnya dikalikan dengan faktor $\\frac{1}{\\det(A)} = -1$, sehingga invers yang benar adalah $\\begin{pmatrix} -3 & 2 \\\\ 5 & -3 \\end{pmatrix}$.',
      },
      {
        id: 'B',
        text: 'Matriks adjoin seharusnya semua bertanda negatif.',
      },
      {
        id: 'C',
        text: 'Elemen diagonal utama pada adjoin seharusnya tidak ditukar posisinya.',
      },
      {
        id: 'D',
        text: 'Matriks konstanta biaya seharusnya berada di ruas kiri sebelum matriks koefisien.',
      },
      {
        id: 'E',
        text: 'Determinan matriks koefisien bernilai nol sehingga sistem tidak memiliki invers.',
      },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Matriks koefisien sistem persamaan adalah $A = \\begin{pmatrix} 3 & 2 \\\\ 5 & 3 \\end{pmatrix}$.',
      'Hitung determinan matriks $A$:',
      '$$\\det(A) = ad - bc = 3(3) - 2(5) = 9 - 10 = -1$$',
      'Tentukan matriks adjoin dari matriks $2 \\times 2$:',
      '$$\\text{Adj}(A) = \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\begin{pmatrix} 3 & -2 \\\\ -5 & 3 \\end{pmatrix}$$',
      'Rumus invers matriks adalah $A^{-1} = \\frac{1}{\\det(A)} \\text{Adj}(A)$:',
      '$$A^{-1} = \\frac{1}{-1} \\begin{pmatrix} 3 & -2 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} -3 & 2 \\\\ 5 & -3 \\end{pmatrix}$$',
      'Kesalahan pemilik laundry adalah langsung mengalikan adjoin tanpa mengalikan dengan faktor $\\frac{1}{\\det(A)} = \\frac{1}{-1} = -1$.',
    ],
  },

  // =========================================================================
  // 13. Geometri Analitik — Persamaan Lingkaran Pusat (3, 5) r = 5
  // =========================================================================
  {
    id: 'siaga2-q13',
    number: 13,
    packageId: 'siaga-2',
    topic: 'Geometri Analitik',
    subtopic: 'Persamaan Lingkaran',
    type: 'single',
    questionText:
      'Persamaan lingkaran yang berpusat di titik $(3, 5)$ dan berjari-jari $5$ satuan panjang adalah ....',
    options: [
      { id: 'A', text: '$x^2 + y^2 - 6x - 10y + 9 = 0$' },
      { id: 'B', text: '$x^2 + y^2 - 6x - 10y + 10 = 0$' },
      { id: 'C', text: '$x^2 + y^2 - 6x - 10y + 11 = 0$' },
      { id: 'D', text: '$x^2 + y^2 + 6x + 10y + 9 = 0$' },
      { id: 'E', text: '$x^2 + y^2 - 10x - 6y + 9 = 0$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Gunakan persamaan baku lingkaran dengan pusat $(a, b)$ dan jari-jari $r$:',
      '$$(x - a)^2 + (y - b)^2 = r^2$$',
      'Substitusikan pusat $(a, b) = (3, 5)$ dan jari-jari $r = 5$:',
      '$$(x - 3)^2 + (y - 5)^2 = 5^2$$',
      'Jabarkan kuadrat suku dua:',
      '$$x^2 - 6x + 9 + y^2 - 10y + 25 = 25$$',
      'Kurangkan kedua ruas dengan $25$:',
      '$$x^2 + y^2 - 6x - 10y + 9 = 0$$',
    ],
  },

  // =========================================================================
  // 14. Limit & Trigonometri — Juring Setengah Lingkaran (Tabel B/S)
  // =========================================================================
  {
    id: 'siaga2-q14',
    number: 14,
    packageId: 'siaga-2',
    topic: 'Limit & Geometri',
    subtopic: 'Juring Lingkaran & Limit Trigonometri',
    type: 'table',
    svgType: 'semicircle_triangle',
    stimulus:
      'Sebuah bangun datar berbentuk juring setengah lingkaran berpusat di $O$ dengan panjang jari-jari $r$. Terdapat segitiga $DOC$ dengan $C$ dan $D$ terletak pada busur $AB$, serta sudut $\\angle ODC = \\angle OCD = \\theta$.',
    questionText:
      'Berilah tanda centang (✓) pada pernyataan "Benar" atau "Salah" berdasarkan informasi tersebut!',
    statements: [
      {
        id: 's1',
        text: 'Nilai $\\lim_{\\theta \\to \\frac{\\pi}{6}} \\frac{\\sin 2\\theta}{\\cos 3\\theta}$ menuju tak hingga (terjadi pembagian dengan nol).',
        isTrue: true,
      },
      {
        id: 's2',
        text: 'Besar $\\theta$ tidak memengaruhi luas segitiga DOC.',
        isTrue: false,
      },
      {
        id: 's3',
        text: 'Besar $\\theta$ memengaruhi panjang jari-jari lingkaran.',
        isTrue: false,
      },
    ],
    correctAnswer: { s1: true, s2: false, s3: false },
    solutionSteps: [
      'Analisis pernyataan 1:',
      '$$\\lim_{\\theta \\to \\frac{\\pi}{6}} \\frac{\\sin 2\\theta}{\\cos 3\\theta}$$',
      'Substitusikan $\\theta = \\frac{\\pi}{6}$:',
      'Pembilang: $\\sin\\left(2 \\cdot \\frac{\\pi}{6}\\right) = \\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2} \\ne 0$',
      'Penyebut: $\\cos\\left(3 \\cdot \\frac{\\pi}{6}\\right) = \\cos\\left(\\frac{\\pi}{2}\\right) = 0$',
      'Karena pembilang berhingga tak nol dan penyebut mendekati nol, limit tidak terdefinisi berhingga / menuju tak hingga $\\implies$ **Benar**.',
      'Analisis pernyataan 2: Segitiga $DOC$ memiliki sudut $\\angle ODC = \\angle OCD = \\theta$, sehingga sudut pusat $\\angle DOC = 180^\\circ - 2\\theta$. Luasnya $L = \\frac{1}{2}r^2 \\sin(180^\\circ - 2\\theta) = \\frac{1}{2}r^2 \\sin 2\\theta$. Luas segitiga sangat bergantung pada sudut $\\theta$. Pernyataan "tidak memengaruhi" $\\implies$ **Salah**.',
      'Analisis pernyataan 3: Jari-jari lingkaran $r$ bernilai tetap (konstan) dan merupakan dimensi lingkaran, tidak ditentukan oleh sudut $\\theta$ pada segitiga $\\implies$ **Salah**.',
    ],
  },

  // =========================================================================
  // 15. Limit Fungsi — Parameter m dan n
  // =========================================================================
  {
    id: 'siaga2-q15',
    number: 15,
    packageId: 'siaga-2',
    topic: 'Limit Fungsi',
    subtopic: 'Parameter pada Limit Trigonometri',
    type: 'multiple',
    stimulus:
      'Diketahui limit fungsi trigonometri dengan parameter $m$ dan $n$:\n$$\\lim_{x \\to 0} \\left( \\frac{\\sin mx}{\\tan nx} \\cdot \\frac{x^2 - 8x}{2x^2 - 6x} \\right) = 2$$',
    questionText:
      'Pilih pernyataan berikut yang benar untuk nilai $m$ dan $n$ yang memenuhi berdasarkan informasi tersebut! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: '$m = 3$ dan $n = 2$.' },
      { id: 'B', text: '$m = 2$ dan $n = 3$.' },
      { id: 'C', text: '$m = 4$ dan $n = 6$.' },
      { id: 'D', text: '$m = 6$ dan $n = 4$.' },
      { id: 'E', text: '$m = 9$ dan $n = 6$.' },
    ],
    correctAnswer: ['A', 'D', 'E'],
    solutionSteps: [
      'Gunakan sifat limit perkalian dua fungsi: $\\lim [f(x) \\cdot g(x)] = [\\lim f(x)] \\cdot [\\lim g(x)]$.',
      'Hitung limit bagian aljabar:',
      '$$\\lim_{x \\to 0} \\frac{x^2 - 8x}{2x^2 - 6x} = \\lim_{x \\to 0} \\frac{x(x - 8)}{x(2x - 6)} = \\frac{-8}{-6} = \\frac{4}{3}$$',
      'Hitung limit bagian trigonometri:',
      '$$\\lim_{x \\to 0} \\frac{\\sin mx}{\\tan nx} = \\frac{m}{n}$$',
      'Substitusikan ke persamaan limit awal:',
      '$$\\frac{m}{n} \\cdot \\frac{4}{3} = 2 \\implies \\frac{m}{n} = 2 \\cdot \\frac{3}{4} = \\frac{3}{2}$$',
      'Rasio nilai parameter harus memenuhi perbandingan $m : n = 3 : 2$:',
      '• Opsi A: $m = 3, n = 2 \\implies \\frac{3}{2}$ (**Benar**)',
      '• Opsi B: $m = 2, n = 3 \\implies \\frac{2}{3} \\ne \\frac{3}{2}$ (Salah)',
      '• Opsi C: $m = 4, n = 6 \\implies \\frac{4}{6} = \\frac{2}{3} \\ne \\frac{3}{2}$ (Salah)',
      '• Opsi D: $m = 6, n = 4 \\implies \\frac{6}{4} = \\frac{3}{2}$ (**Benar**)',
      '• Opsi E: $m = 9, n = 6 \\implies \\frac{9}{6} = \\frac{3}{2}$ (**Benar**)',
    ],
  },

  // =========================================================================
  // 16. Trigonometri — Model Suhu Harian
  // =========================================================================
  {
    id: 'siaga2-q16',
    number: 16,
    packageId: 'siaga-2',
    topic: 'Trigonometri',
    subtopic: 'Nilai Maksimum dan Minimum Fungsi Sinus',
    type: 'multiple',
    stimulus:
      'Perubahan suhu harian ($f$) dalam derajat celcius di suatu kota terhadap waktu ($t$ dalam jam) dinyatakan dalam persamaan:\n$$f(t) = 6\\sin 15^\\circ(t - 8) + 26$$\nPengamatan tersebut dimulai pukul $00.00$ ($t = 0$) hingga $t = 24$.',
    questionText:
      'Pilih pernyataan berikut yang benar berdasarkan informasi tersebut! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Suhu tertinggi di kota tersebut pada saat waktu menunjukkan pukul 12.00.' },
      { id: 'B', text: 'Suhu tertinggi di kota tersebut pada saat waktu menunjukkan pukul 14.00.' },
      { id: 'C', text: 'Suhu terendah di kota tersebut adalah $20^\\circ\\text{C}$.' },
      { id: 'D', text: 'Suhu tertinggi di kota tersebut adalah $32^\\circ\\text{C}$.' },
      { id: 'E', text: 'Suhu terendah terjadi pada pukul 02.00.' },
    ],
    correctAnswer: ['B', 'C', 'D', 'E'],
    solutionSteps: [
      'Fungsi suhu sinusoidal: $f(t) = 6\\sin(15^\\circ(t - 8)) + 26$. Nilai fungsi sinus berkisar $-1 \\le \\sin \\theta \\le 1$.',
      'Hitung suhu ekstrem:',
      '• Suhu maksimum: $f_{\\max} = 6(1) + 26 = 32^\\circ\\text{C}$ (Opsi D Benar)',
      '• Suhu minimum: $f_{\\min} = 6(-1) + 26 = 20^\\circ\\text{C}$ (Opsi C Benar)',
      'Tentukan waktu terjadinya suhu tertinggi saat $\\sin(15^\\circ(t - 8)) = 1$:',
      '$$15^\\circ(t - 8) = 90^\\circ \\implies t - 8 = 6 \\implies t = 14\\text{ (pukul 14.00)}$$',
      'Sehingga suhu tertinggi terjadi pada pukul 14.00 (Opsi B Benar, Opsi A Salah).',
      'Tentukan waktu terjadinya suhu terendah saat $\\sin(15^\\circ(t - 8)) = -1$:',
      '$$15^\\circ(t - 8) = -90^\\circ \\implies t - 8 = -6 \\implies t = 2\\text{ (pukul 02.00)}$$',
      'Sehingga suhu terendah terjadi pada pukul 02.00 (Opsi E Benar).',
    ],
  },

  // =========================================================================
  // 17. Vektor & Geometri — Segmen Jalur Lima Kota
  // =========================================================================
  {
    id: 'siaga2-q17',
    number: 17,
    packageId: 'siaga-2',
    topic: 'Vektor & Kinematika',
    subtopic: 'Segmen Garis Jalur Lima Kota',
    type: 'multiple',
    svgType: 'collinear_cities',
    stimulus:
      'Sebuah jalur perjalanan menghubungkan lima kota berdekatan dalam satu lintasan garis lurus. Letak Kota A pada koordinat $(230, 240)$, sedangkan letak Kota E pada koordinat $(-70, -160)$. Denah urutan kota pada jalur lurus adalah $E - D - C - B - A$.\n\n' +
      'Seorang pelancong melakukan perjalanan dengan kecepatan rata-rata yang sama dari setiap perjalanan:\n' +
      '• Dari Kota A ke B dalam waktu $3\\text{ jam}$.\n' +
      '• Dari Kota B ke C dalam waktu $2\\text{ jam}$.\n' +
      '• Dari Kota C ke D dalam waktu $4\\text{ jam}$.\n' +
      '• Dari Kota D ke E dalam waktu $1\\text{ jam}$.',
    questionText:
      'Jika pelancong tersebut melakukan perjalanan dengan kecepatan rata-rata $75\\text{ km/jam}$, rute perjalanan mana yang waktu tempuhnya kurang dari $250\\text{ menit}$? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Perjalanan dari Kota A ke B.' },
      { id: 'B', text: 'Perjalanan dari Kota A ke C.' },
      { id: 'C', text: 'Perjalanan dari Kota B ke D.' },
      { id: 'D', text: 'Perjalanan dari Kota C ke E.' },
      { id: 'E', text: 'Perjalanan dari Kota A ke D.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    solutionSteps: [
      'Hitung jarak total dari Kota A ke Kota E:',
      '$$|\\vec{AE}| = \\sqrt{(-70 - 230)^2 + (-160 - 240)^2} = \\sqrt{(-300)^2 + (-400)^2} = 500\\text{ km}$$',
      'Total waktu tempuh semula $= 3 + 2 + 4 + 1 = 10\\text{ jam}$.',
      'Rasio jarak ruas jalan sama dengan rasio waktu tempuh:',
      '• Jarak $AB = \\frac{3}{10} \\times 500 = 150\\text{ km}$',
      '• Jarak $BC = \\frac{2}{10} \\times 500 = 100\\text{ km}$',
      '• Jarak $CD = \\frac{4}{10} \\times 500 = 200\\text{ km}$',
      '• Jarak $DE = \\frac{1}{10} \\times 500 = 50\\text{ km}$',
      'Batas waktu tempuh: $250\\text{ menit} = \\frac{250}{60}\\text{ jam} = \\frac{25}{6}\\text{ jam}$.',
      'Jarak tempuh maksimum dengan kecepatan $75\\text{ km/jam}$:',
      '$$s_{\\max} = 75 \\times \\frac{25}{6} = 312{,}5\\text{ km}$$',
      'Evaluasi tiap rute perjalanan:',
      '• Rute A ke B: $s = 150\\text{ km} < 312{,}5\\text{ km}$ ($t = 120\\text{ menit}$) $\\implies$ **Benar**.',
      '• Rute A ke C: $s = 150 + 100 = 250\\text{ km} < 312{,}5\\text{ km}$ ($t = 200\\text{ menit}$) $\\implies$ **Benar**.',
      '• Rute B ke D: $s = 100 + 200 = 300\\text{ km} < 312{,}5\\text{ km}$ ($t = 240\\text{ menit}$) $\\implies$ **Benar**.',
      '• Rute C ke E: $s = 200 + 50 = 250\\text{ km} < 312{,}5\\text{ km}$ ($t = 200\\text{ menit}$) $\\implies$ **Benar**.',
      '• Rute A ke D: $s = 150 + 100 + 200 = 450\\text{ km} > 312{,}5\\text{ km}$ ($t = 360\\text{ menit}$) $\\implies$ Salah.',
    ],
  },

  // =========================================================================
  // 18. Transformasi Geometri — Koin Karambol
  // =========================================================================
  {
    id: 'siaga2-q18',
    number: 18,
    packageId: 'siaga-2',
    topic: 'Transformasi Geometri',
    subtopic: 'Jenis Transformasi Geometri',
    type: 'single',
    svgType: 'carrom_board',
    stimulus:
      'Perhatikan gambar papan karambol yang dilengkapi sumbu koordinat Kartesius dengan pusat di titik $O(0, 0)$. Sebuah koin karambol meluncur lurus dari posisi awal di kuadran I menuju posisi akhir di lubang sudut kuadran II.',
    questionText:
      'Transformasi geometri apakah yang memindahkan koin karambol dari posisi awal ke posisi akhir tersebut?',
    options: [
      { id: 'A', text: 'Rotasi dengan titik pusat $(0, 0)$' },
      { id: 'B', text: 'Dilatasi dengan titik pusat $(0, 0)$' },
      { id: 'C', text: 'Translasi' },
      { id: 'D', text: 'Refleksi terhadap sumbu-$y$' },
      { id: 'E', text: 'Refleksi terhadap sumbu-$x$' },
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Perhatikan pergerakan koin karambol pada bidang koordinat papan karambol:',
      '• Koin bergerak sepanjang lintasan garis lurus berarah dari posisi awal menuju posisi akhir.',
      '• Orientasi posisi koin tidak mengalami perputaran sudut terhadap pusat acuan (bukan rotasi).',
      '• Ukuran dan skala koin tetap sama tanpa mengalami pembesaran atau pengecilan (bukan dilatasi).',
      '• Posisi akhir bukan bayangan cermin terhadap sumbu koordinat (bukan refleksi).',
      'Pergeseran setiap titik pada objek dengan arah dan jarak tertentu merupakan definisi dari transformasi **Translasi (pergeseran)**.',
    ],
  },

  // =========================================================================
  // 19. Geometri Analitik — Titik Singgung Lingkaran dari Titik (7, 1)
  // =========================================================================
  {
    id: 'siaga2-q19',
    number: 19,
    packageId: 'siaga-2',
    topic: 'Geometri Analitik',
    subtopic: 'Titik Singgung Lingkaran dari Titik di Luar Lingkaran',
    type: 'multiple',
    svgType: 'circle_tangent',
    stimulus:
      'Sebuah lingkaran berpusat di $O(0, 0)$ memiliki jari-jari $r = 5$, sehingga memiliki persamaan $x^2 + y^2 = 25$. Dari titik $P(7, 1)$ di luar lingkaran ditarik dua garis singgung ke lingkaran.',
    questionText:
      'Titik manakah pada lingkaran yang menjadi titik singgung garis yang ditarik dari titik $(7, 1)$? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'titik $(3, 4)$' },
      { id: 'B', text: 'titik $(3, -4)$' },
      { id: 'C', text: 'titik $(4, 3)$' },
      { id: 'D', text: 'titik $(4, -3)$' },
      { id: 'E', text: 'titik $(-3, 4)$' },
    ],
    correctAnswer: ['A', 'D'],
    solutionSteps: [
      'Tentukan persamaan garis polar (garis kutub) dari titik $P(x_1, y_1) = (7, 1)$ terhadap lingkaran $x^2 + y^2 = 25$:',
      '$$x_1 x + y_1 y = r^2 \\implies 7x + 1y = 25 \\implies y = 25 - 7x$$',
      'Substitusikan persamaan garis polar $y = 25 - 7x$ ke dalam persamaan lingkaran:',
      '$$x^2 + (25 - 7x)^2 = 25$$',
      '$$x^2 + (625 - 350x + 49x^2) = 25$$',
      '$$50x^2 - 350x + 600 = 0$$',
      'Sederhanakan dengan membagi $50$ pada kedua ruas:',
      '$$x^2 - 7x + 12 = 0 \\implies (x - 3)(x - 4) = 0$$',
      'Diperoleh dua absis titik singgung: $x = 3$ atau $x = 4$.',
      '• Untuk $x = 3$: $y = 25 - 7(3) = 25 - 21 = 4 \\implies$ titik $(3, 4)$.',
      '• Untuk $x = 4$: $y = 25 - 7(4) = 25 - 28 = -3 \\implies$ titik $(4, -3)$.',
      'Jadi titik-titik singgung lingkaran adalah $(3, 4)$ (Opsi A) dan $(4, -3)$ (Opsi D).',
    ],
  },

  // =========================================================================
  // 20. Matriks — Kantin Sekolah: Matriks Senin, Selasa, Kamis
  // =========================================================================
  {
    id: 'siaga2-q20',
    number: 20,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Representasi Matriks dari Tabel Data',
    type: 'single',
    stimulus:
      'Sebuah kantin sekolah menjual makanan dan minuman dengan penjualan selama 5 hari disajikan dalam tabel berikut:\n\n' +
      '| Hari Penjualan | Jumlah Makanan | Jumlah Minuman | Pendapatan (ribu rupiah) |\n' +
      '| :--- | :---: | :---: | :---: |\n' +
      '| Senin | $10$ | $15$ | $225$ |\n' +
      '| Selasa | $10$ | $12$ | $230$ |\n' +
      '| Rabu | $12$ | $8$ | $180$ |\n' +
      '| Kamis | $20$ | $15$ | $325$ |\n' +
      '| Jumat | $15$ | $4$ | $65$ |',
    questionText:
      'Jika $x$ menyatakan harga satu porsi makanan dan $y$ menyatakan harga satu porsi minuman (dalam ribuan rupiah), matriks yang menyajikan pendapatan kantin pada hari Senin, Selasa, dan Kamis adalah ....',
    options: [
      {
        id: 'A',
        text: '$\\begin{pmatrix} 10 & 15 \\\\ 10 & 12 \\\\ 20 & 15 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 230 \\\\ 325 \\end{pmatrix}$',
      },
      {
        id: 'B',
        text: '$\\begin{pmatrix} 15 & 10 \\\\ 12 & 10 \\\\ 15 & 20 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 230 \\\\ 325 \\end{pmatrix}$',
      },
      {
        id: 'C',
        text: '$\\begin{pmatrix} 10 & 10 & 20 \\\\ 15 & 12 & 15 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 230 \\\\ 325 \\end{pmatrix}$',
      },
      {
        id: 'D',
        text: '$\\begin{pmatrix} 10 & 15 \\\\ 12 & 8 \\\\ 20 & 15 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 180 \\\\ 325 \\end{pmatrix}$',
      },
      {
        id: 'E',
        text: '$\\begin{pmatrix} 20 & 15 \\\\ 10 & 12 \\\\ 10 & 15 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 325 \\\\ 230 \\\\ 225 \\end{pmatrix}$',
      },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Identifikasi banyak penjualan dan pendapatan pada 3 hari yang diminta:',
      '• Hari Senin: $10\\text{ makanan} + 15\\text{ minuman} \\implies 10x + 15y = 225$',
      '• Hari Selasa: $10\\text{ makanan} + 12\\text{ minuman} \\implies 10x + 12y = 230$',
      '• Hari Kamis: $20\\text{ makanan} + 15\\text{ minuman} \\implies 20x + 15y = 325$',
      'Susun persamaan linear ke dalam bentuk perkalian matriks $A \\cdot \\vec{x} = \\vec{b}$:',
      '$$\\begin{pmatrix} 10 & 15 \\\\ 10 & 12 \\\\ 20 & 15 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 230 \\\\ 325 \\end{pmatrix}$$',
    ],
  },

  // =========================================================================
  // 21. Matriks — Pasangan Hari untuk Menghitung Harga Satuan
  // =========================================================================
  {
    id: 'siaga2-q21',
    number: 21,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Syarat Ketunggalan Solusi SPLDV (Determinan Tak Nol)',
    type: 'multiple',
    stimulus:
      'Mengacu pada tabel data penjualan makanan dan minuman kantin selama 5 hari (Senin s.d. Jumat):\n' +
      'Senin: $(10, 15)$, Selasa: $(10, 12)$, Rabu: $(12, 8)$, Kamis: $(20, 15)$, Jumat: $(15, 4)$.',
    questionText:
      'Berdasarkan tabel tersebut, pasangan hari mana yang dapat digunakan untuk menghitung harga satuan makanan dan minuman? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Senin dan Selasa' },
      { id: 'B', text: 'Selasa dan Rabu' },
      { id: 'C', text: 'Senin dan Rabu' },
      { id: 'D', text: 'Kamis dan Jumat' },
      { id: 'E', text: 'Dua hari dengan koefisien yang saling kelipatan (sebanding)' },
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    solutionSteps: [
      'Syarat agar sistem dua persamaan linear memiliki solusi unik (tunggal) adalah determinan matriks koefisien tidak sama dengan nol ($\\det \\ne 0$), yang berarti perbandingan jumlah makanan dan minuman pada kedua hari tidak boleh sama.',
      'Uji determinan tiap pasangan hari:',
      '• Senin dan Selasa: $\\det = 10(12) - 15(10) = 120 - 150 = -30 \\ne 0 \\implies$ **Dapat digunakan**.',
      '• Selasa dan Rabu: $\\det = 10(8) - 12(12) = 80 - 144 = -64 \\ne 0 \\implies$ **Dapat digunakan**.',
      '• Senin dan Rabu: $\\det = 10(8) - 15(12) = 80 - 180 = -100 \\ne 0 \\implies$ **Dapat digunakan**.',
      '• Kamis dan Jumat: $\\det = 20(4) - 15(15) = 80 - 225 = -145 \\ne 0 \\implies$ **Dapat digunakan**.',
      'Karena keempat pasangan tersebut memiliki determinan tak nol, maka semuanya dapat digunakan untuk menentukan harga satuan.',
    ],
  },

  // =========================================================================
  // 22. Matriks — Penjumlahan Pendapatan Senin s.d. Jumat
  // =========================================================================
  {
    id: 'siaga2-q22',
    number: 22,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Perkalian Matriks Penjumlahan Pendapatan',
    type: 'single',
    stimulus:
      'Diberikan matriks data penjualan kantin selama 5 hari (Senin s.d. Jumat):\n$$M = \\begin{pmatrix} 10 & 15 \\\\ 10 & 12 \\\\ 12 & 8 \\\\ 20 & 15 \\\\ 15 & 4 \\end{pmatrix}$$',
    questionText:
      'Bentuk operasi perkalian matriks yang menyatakan penjumlahan total pendapatan dari penjualan makanan dan minuman dari hari Senin sampai Jumat adalah ....',
    options: [
      {
        id: 'A',
        text: '$\\begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\end{pmatrix} \\begin{pmatrix} 10 & 15 \\\\ 10 & 12 \\\\ 12 & 8 \\\\ 20 & 15 \\\\ 15 & 4 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$',
      },
      {
        id: 'B',
        text: '$\\begin{pmatrix} 10 & 15 \\\\ 10 & 12 \\\\ 12 & 8 \\\\ 20 & 15 \\\\ 15 & 4 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\\\ 1 \\\\ 1 \\end{pmatrix} \\begin{pmatrix} x & y \\end{pmatrix}$',
      },
      {
        id: 'C',
        text: '$\\begin{pmatrix} x & y \\end{pmatrix} \\begin{pmatrix} 10 & 15 \\\\ 10 & 12 \\\\ 12 & 8 \\\\ 20 & 15 \\\\ 15 & 4 \\end{pmatrix}$',
      },
      {
        id: 'D',
        text: '$\\begin{pmatrix} 1 & 1 \\end{pmatrix} \\begin{pmatrix} 10 & 10 & 12 & 20 & 15 \\\\ 15 & 12 & 8 & 15 & 4 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$',
      },
      {
        id: 'E',
        text: '$\\begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$',
      },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Pendapatan per hari dinyatakan oleh perkalian matriks penjualan $M$ dengan vektor kolom harga $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$:',
      '$$M \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 10x + 15y \\\\ 10x + 12y \\\\ 12x + 8y \\\\ 20x + 15y \\\\ 15x + 4y \\end{pmatrix}_{5 \\times 1}$$',
      'Untuk menjumlahkan seluruh elemen baris pendapatan tersebut, kalikan dari sebelah kiri dengan matriks baris unit $\\begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\end{pmatrix}_{1 \\times 5}$:',
      '$$\\text{Total} = \\begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\end{pmatrix} \\begin{pmatrix} 10 & 15 \\\\ 10 & 12 \\\\ 12 & 8 \\\\ 20 & 15 \\\\ 15 & 4 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$',
      'Hasil operasi tersebut adalah $(10+10+12+20+15)x + (15+12+8+15+4)y = 67x + 54y$.',
    ],
  },

  // =========================================================================
  // 23. Fungsi Eksponensial — Grafik Eliminasi Antibiotik (Rentang 20-50)
  // =========================================================================
  {
    id: 'siaga2-q23',
    number: 23,
    packageId: 'siaga-2',
    topic: 'Fungsi Eksponensial',
    subtopic: 'Peluruhan Eksponensial Orde Pertama',
    type: 'multiple',
    svgType: 'antibiotic_decay',
    stimulus:
      'Perhatikan grafik eliminasi obat antibiotik dalam darah yang mengikuti model kinetika eliminasi orde pertama: $C(t) = C_0 e^{-kt}$.\n\n' +
      'Berdasarkan kurva peluruhan pada grafik:\n' +
      '• Saat $t = 0\\text{ jam}$, konsentrasi $C = 100{,}0\\text{ mg/L}$\n' +
      '• Saat $t = 4\\text{ jam}$, konsentrasi $C = 50{,}0\\text{ mg/L}$ (waktu paruh $T_{1/2} = 4\\text{ jam}$)\n' +
      '• Saat $t = 8\\text{ jam}$, konsentrasi $C = 25{,}0\\text{ mg/L}$\n' +
      '• Saat $t = 12\\text{ jam}$, konsentrasi $C = 12{,}5\\text{ mg/L}$ (KHM/MIC)\n' +
      '• Saat $t = 16\\text{ jam}$, konsentrasi $C = 6{,}25\\text{ mg/L}$',
    questionText:
      'Berdasarkan grafik, tentukan waktu saat konsentrasi obat dalam darah berada pada rentang 20 hingga 50 mg/L! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: '4 jam.' },
      { id: 'B', text: '5 jam.' },
      { id: 'C', text: '10 jam.' },
      { id: 'D', text: '15 jam.' },
      { id: 'E', text: '2 jam.' },
    ],
    correctAnswer: ['A', 'B'],
    solutionSteps: [
      'Konsentrasi obat berada pada interval target $20 \\le C(t) \\le 50\\text{ mg/L}$.',
      'Dari grafik peluruhan eksponensial orde pertama:',
      '• Konsentrasi $C = 50\\text{ mg/L}$ dicapai tepat saat $t = 4\\text{ jam}$.',
      '• Pada $t = 8\\text{ jam}$, konsentrasi adalah $25\\text{ mg/L} > 20$.',
      '• Pada $t = 12\\text{ jam}$, konsentrasi turun menjadi $12{,}5\\text{ mg/L} < 20$.',
      '• Konsentrasi $C = 20\\text{ mg/L}$ tercapai pada waktu $t \\approx 9{,}3\\text{ jam}$.',
      'Rentang waktu saat konsentrasi berada antara $20$ dan $50\\text{ mg/L}$ adalah $4 \\le t \\le 9{,}3\\text{ jam}$.',
      'Evaluasi opsi waktu yang diberikan:',
      '• $t = 4\\text{ jam}$: $C = 50\\text{ mg/L}$ (memenuhi interval) $\\implies$ **Benar**.',
      '• $t = 5\\text{ jam}$: $C \\approx 42\\text{ mg/L}$ (memenuhi interval) $\\implies$ **Benar**.',
      '• $t = 10\\text{ jam}$: $C \\approx 17{,}7\\text{ mg/L} < 20$ (di luar batas) $\\implies$ Salah.',
      '• $t = 15\\text{ jam}$: $C \\approx 7\\text{ mg/L} < 20$ (di luar batas) $\\implies$ Salah.',
    ],
  },

  // =========================================================================
  // 24. Limit Fungsi — Limit Aljabar x -> 2
  // =========================================================================
  {
    id: 'siaga2-q24',
    number: 24,
    packageId: 'siaga-2',
    topic: 'Limit Fungsi',
    subtopic: 'Limit Fungsi Aljabar',
    type: 'single',
    questionText:
      'Nilai dari $\\lim_{x \\to 2} \\frac{x^2 - 3x + 5}{2x^3 + x^2 + x - 2}$ adalah ....',
    options: [
      { id: 'A', text: '$\\frac{3}{20}$' },
      { id: 'B', text: '$\\frac{1}{5}$' },
      { id: 'C', text: '$\\frac{1}{4}$' },
      { id: 'D', text: '$\\frac{7}{20}$' },
      { id: 'E', text: '$\\frac{2}{5}$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Periksa apakah limit bernilai tentu dengan metode substitusi langsung $x = 2$:',
      '• Hitung nilai pembilang pada $x = 2$:',
      '$$2^2 - 3(2) + 5 = 4 - 6 + 5 = 3$$',
      '• Hitung nilai penyebut pada $x = 2$:',
      '$$2(2)^3 + (2)^2 + 2 - 2 = 2(8) + 4 + 2 - 2 = 16 + 4 = 20$$',
      'Karena penyebut tidak sama dengan nol ($20 \\ne 0$), maka limit ini bukan bentuk tak tentu $\\frac{0}{0}$.',
      'Sehingga nilai limit diperoleh langsung:',
      '$$\\lim_{x \\to 2} \\frac{x^2 - 3x + 5}{2x^3 + x^2 + x - 2} = \\frac{3}{20}$$',
    ],
  },

  // =========================================================================
  // 25. Polinomial — Pembagian Horner 3x^3 - 5x^2 - 10 dibagi (x - 4)
  // =========================================================================
  {
    id: 'siaga2-q25',
    number: 25,
    packageId: 'siaga-2',
    topic: 'Polinomial',
    subtopic: 'Pembagian Suku Banyak (Metode Horner)',
    type: 'single',
    questionText:
      'Hasil bagi dan sisa suku banyak $3x^3 - 5x^2 - 10$ apabila dibagi oleh $(x - 4)$ adalah ....',
    options: [
      { id: 'A', text: '$3x^2 + 8x + 6$ dan $22$' },
      { id: 'B', text: '$3x^2 + 6x + 8$ dan $22$' },
      { id: 'C', text: '$3x^2 + 8x + 27$ dan $102$' },
      { id: 'D', text: '$3x^2 + 7x + 28$ dan $102$' },
      { id: 'E', text: '$3x^2 + 7x + 26$ dan $94$' },
    ],
    correctAnswer: 'D',
    solutionSteps: [
      'Tulis suku banyak dalam urutan derajat menurun lengkap beserta koefisien $0$ pada suku $x^1$:',
      '$$P(x) = 3x^3 - 5x^2 + 0x - 10$$',
      'Pembagi adalah $(x - 4)$, sehingga nilai pembuat nol pembagi adalah $x = 4$.',
      'Lakukan pembagian sintetis Horner:',
      '$$\\begin{array}{c|rrrr} 4 & 3 & -5 & 0 & -10 \\\\ & & 12 & 28 & 112 \\\\ \\hline & 3 & 7 & 28 & 102 \\end{array}$$',
      'Penjabaran langkah:',
      '• Turunkan koefisien pertama: $3$',
      '• Kalikan $3$ dengan $4 = 12$, jumlahkan: $-5 + 12 = 7$',
      '• Kalikan $7$ dengan $4 = 28$, jumlahkan: $0 + 28 = 28$',
      '• Kalikan $28$ dengan $4 = 112$, jumlahkan: $-10 + 112 = 102$ (Sisa)',
      'Koefisien hasil bagi berderajat dua adalah $3, 7, 28$:',
      '$$\\text{Hasil bagi } H(x) = 3x^2 + 7x + 28, \\quad \\text{Sisa } S = 102$$',
    ],
  },
];
