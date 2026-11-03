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
      'Substitusikan komponen vektor ke dalam persamaan $2\\vec{u} - \\vec{v} + 3\\vec{w} = \\begin{pmatrix} -5 \\\\ 1 \\\\ 5 \\end{pmatrix}$:',
      '$$2\\begin{pmatrix} p \\\\ 2 \\\\ -1 \\end{pmatrix} - \\begin{pmatrix} 4 \\\\ -3 \\\\ q \\end{pmatrix} + 3\\begin{pmatrix} -1 \\\\ r \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ 1 \\\\ 5 \\end{pmatrix}$$',
      '$$\\begin{pmatrix} 2p - 4 - 3 \\\\ 4 + 3 + 3r \\\\ -2 - q + 15 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ 1 \\\\ 5 \\end{pmatrix}$$',
      'Selesaikan tiap baris komponen:',
      'Baris pertama: $2p - 7 = -5 \\implies 2p = 2 \\implies p = 1$.',
      'Baris kedua: $7 + 3r = 1 \\implies 3r = -6 \\implies r = -2$.',
      'Baris ketiga: $13 - q = 5 \\implies q = 8$.',
      'Jadi, nilai $p + q + r = 1 + 8 + (-2) = 7$.',
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
      'Diketahui vektor $\\vec{v} = \\begin{pmatrix} t - 1 \\\\ 1 \\\\ 8 \\end{pmatrix} \\in \\mathbb{R}^3$ dengan $t < 0$.',
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
      'Rumus panjang vektor $\\vec{v} = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$ adalah $|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}$.',
      'Kuadratkan kedua ruas persamaan $|\\vec{v}| = 9$:',
      '$$(t - 1)^2 + 1^2 + 8^2 = 9^2$$',
      '$$(t - 1)^2 + 1 + 64 = 81$$',
      '$$(t - 1)^2 = 16 \\implies t - 1 = \\pm 4$$',
      'Diperoleh $t = 5$ atau $t = -3$. Karena diketahui syarat $t < 0$, maka nilai yang memenuhi adalah $t = -3$.',
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
      'Gunakan identitas Pythagoras $\\cos^2 x = 1 - \\sin^2 x = (1 - \\sin x)(1 + \\sin x)$:',
      '$$\\lim_{x \\to \\frac{\\pi}{2}} \\frac{4(1 - \\sin x)(1 + \\sin x)}{\\sin x - 1} = \\lim_{x \\to \\frac{\\pi}{2}} \\frac{-4(\\sin x - 1)(1 + \\sin x)}{\\sin x - 1}$$',
      'Sederhanakan faktor $(\\sin x - 1)$:',
      '$$= \\lim_{x \\to \\frac{\\pi}{2}} -4(1 + \\sin x)$$',
      'Substitusikan $x = \\frac{\\pi}{2}$ di mana $\\sin\\left(\\frac{\\pi}{2}\\right) = 1$:',
      '$$= -4(1 + 1) = -8$$',
    ],
  },

  // =========================================================================
  // 4. Limit Fungsi Trigonometri x -> 3
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
      'Faktorkan sudut $2x - 6 = 2(x - 3)$ dan gunakan identitas $1 - \\cos 2u = 2\\sin^2 u$ dengan $u = x - 3$:',
      '$$1 - \\cos(2(x - 3)) = 2\\sin^2(x - 3)$$',
      'Substitusikan kembali ke bentuk limit:',
      '$$\\lim_{x \\to 3} \\frac{3 \\cdot 2\\sin^2(x - 3)}{(x - 3)^2} = 6 \\cdot \\lim_{x \\to 3} \\left(\\frac{\\sin(x - 3)}{x - 3}\\right)^2$$',
      'Karena $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$, maka:',
      '$$= 6 \\cdot (1)^2 = 6$$',
    ],
  },

  // =========================================================================
  // 5. Polinomial — Total Pendapatan Perusahaan di Bulan ke-3
  // =========================================================================
  {
    id: 'siaga2-q5',
    number: 5,
    packageId: 'siaga-2',
    topic: 'Polinomial',
    subtopic: 'Operasi Penjumlahan dan Nilai Polinomial',
    type: 'single',
    stimulus:
      'Sebuah perusahaan memproduksi dua jenis barang, yaitu barang A dan barang B. Pendapatan dari penjualan barang A dan barang B dinyatakan dalam bentuk polinomial (dalam juta rupiah) terhadap waktu $x$ (dalam bulan): $A(x) = 3x^3 + 5x^2 - 12x + 150$ dan $B(x) = x^3 - 2x^2 + 20x + 50$.',
    questionText:
      'Total pendapatan perusahaan dari kedua jenis barang pada bulan ketiga adalah ....',
    options: [
      { id: 'A', text: '$\\text{Rp}359.000.000,00$' },
      { id: 'B', text: '$\\text{Rp}356.000.000,00$' },
      { id: 'C', text: '$\\text{Rp}349.000.000,00$' },
      { id: 'D', text: '$\\text{Rp}329.000.000,00$' },
      { id: 'E', text: '$\\text{Rp}250.000.000,00$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Jumlahkan fungsi pendapatan $T(x) = A(x) + B(x)$:',
      '$$T(x) = (3 + 1)x^3 + (5 - 2)x^2 + (-12 + 20)x + (150 + 50) = 4x^3 + 3x^2 + 8x + 200$$',
      'Substitusikan $x = 3$ (bulan ketiga):',
      '$$T(3) = 4(3)^3 + 3(3)^2 + 8(3) + 200 = 4(27) + 3(9) + 24 + 200$$',
      '$$T(3) = 108 + 27 + 24 + 200 = 359\\text{ juta rupiah}$$',
      'Jadi, total pendapatan pada bulan ketiga adalah $\\text{Rp}359.000.000,00$.',
    ],
  },

  // =========================================================================
  // 6. Polinomial — Interval Waktu Keuntungan Positif f(x) > 0
  // =========================================================================
  {
    id: 'siaga2-q6',
    number: 6,
    packageId: 'siaga-2',
    topic: 'Polinomial',
    subtopic: 'Akar-akar Polinomial & Pertidaksamaan',
    type: 'single',
    stimulus:
      'Sebuah bisnis pakaian mencatat keuntungannya setiap bulan mengikuti fungsi suku banyak $f(x) = x^3 - 6x^2 + 11x - 6$ (dalam puluhan juta rupiah), dengan $x$ merupakan waktu dalam bulan.',
    questionText:
      'Jika pengamatan dilakukan dari bulan ke-$2$ hingga bulan ke-$5$ ($2 \\le x \\le 5$), bisnis tersebut memperoleh keuntungan positif ($f(x) > 0$) pada rentang waktu ....',
    options: [
      { id: 'A', text: '$2,5 < x < 3$' },
      { id: 'B', text: '$2,5 \\le x \\le 3$' },
      { id: 'C', text: '$3 < x < 5$' },
      { id: 'D', text: '$3 < x \\le 5$' },
      { id: 'E', text: '$3 \\le x \\le 5$' },
    ],
    correctAnswer: 'D',
    solutionSteps: [
      'Faktorkan suku banyak $f(x) = x^3 - 6x^2 + 11x - 6$:',
      'Uji $x = 1$: $f(1) = 1 - 6 + 11 - 6 = 0$, sehingga $(x - 1)$ adalah faktor.',
      'Bagi dengan $(x - 1)$ menghasilkan $x^2 - 5x + 6 = (x - 2)(x - 3)$.',
      'Diperoleh pemfaktoran lengkap: $f(x) = (x - 1)(x - 2)(x - 3)$ dengan pembuat nol $x = 1, 2, 3$.',
      'Uji tanda pada interval pengamatan $2 \\le x \\le 5$:',
      '• Untuk $2 < x < 3$: $f(2,5) = (1,5)(0,5)(-0,5) = -0,375 < 0$ (rugi).',
      '• Untuk $x = 3$: $f(3) = 0$ (impas).',
      '• Untuk $3 < x \\le 5$: semua faktor positif sehingga $f(x) > 0$ (untung).',
      'Jadi, bisnis memperoleh keuntungan positif pada rentang $3 < x \\le 5$.',
    ],
  },

  // =========================================================================
  // 7. Polinomial — Titik Impas (Break-Even Point) Penjualan
  // =========================================================================
  {
    id: 'siaga2-q7',
    number: 7,
    packageId: 'siaga-2',
    topic: 'Polinomial',
    subtopic: 'Persamaan Polinomial dalam Ekonomi',
    type: 'single',
    stimulus:
      'Sebuah perusahaan teknologi memodelkan pendapatan sebagai $f(x) = 2x^3 + 2x^2 + 40x$ dan biaya operasional sebagai $c(x) = x^3 + 6x^2 + 15x + 150$, dengan $x$ menyatakan jumlah produk terjual (dalam ratusan unit) dan nilai uang dalam jutaan rupiah.',
    questionText:
      'Agar perusahaan tidak mengalami kerugian ($f(x) \\ge c(x)$), jumlah penjualan produk minimal yang harus dicapai adalah ....',
    options: [
      { id: 'A', text: '$400\\text{ unit}$' },
      { id: 'B', text: '$500\\text{ unit}$' },
      { id: 'C', text: '$600\\text{ unit}$' },
      { id: 'D', text: '$700\\text{ unit}$' },
      { id: 'E', text: '$800\\text{ unit}$' },
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Perusahaan tidak merugi jika keuntungan $P(x) = f(x) - c(x) \\ge 0$:',
      '$$P(x) = (2x^3 + 2x^2 + 40x) - (x^3 + 6x^2 + 15x + 150) = x^3 - 4x^2 + 25x - 150$$',
      'Kelompokkan suku-suku untuk memfaktorkan $P(x)$:',
      '$$P(x) = x^2(x - 4) + 25(x - 6)$$',
      'Uji pembagi bulat dari $150$, yaitu $x = 5$:',
      '$$P(5) = 5^3 - 4(5^2) + 25(5) - 150 = 125 - 100 + 125 - 150 = 0$$',
      'Faktorkan dengan $(x - 5)$: $P(x) = (x - 5)(x^2 + x + 30)$.',
      'Karena diskriminan $x^2 + x + 30$ adalah $D = 1 - 120 = -119 < 0$ (definit positif), maka $P(x) \\ge 0 \\iff x \\ge 5$.',
      'Karena $x$ dalam ratusan unit, penjualan minimal adalah $5 \\times 100 = 500\\text{ unit}$.',
    ],
  },

  // =========================================================================
  // 8. Polinomial — Akar-akar Persamaan Kubik
  // =========================================================================
  {
    id: 'siaga2-q8',
    number: 8,
    packageId: 'siaga-2',
    topic: 'Polinomial',
    subtopic: 'Teorema Faktor dan Akar Rasional',
    type: 'single',
    stimulus:
      'Diketahui suku banyak berderajat tiga $g(x) = x^3 + 16x^2 + 83x + 140$.',
    questionText:
      'Akar-akar dari persamaan suku banyak $g(x) = 0$ adalah ....',
    options: [
      { id: 'A', text: '$-7, -5, -4$' },
      { id: 'B', text: '$-7, -5, 4$' },
      { id: 'C', text: '$-7, 5, -4$' },
      { id: 'D', text: '$7, -5, -4$' },
      { id: 'E', text: '$7, 5, 4$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Karena semua koefisien $g(x) = x^3 + 16x^2 + 83x + 140$ bernilai positif, semua akar realnya pasti negatif.',
      'Uji faktor dari $140$, misalnya $x = -4$:',
      '$$g(-4) = (-4)^3 + 16(-4)^2 + 83(-4) + 140 = -64 + 256 - 332 + 140 = 0$$',
      'Bagi $g(x)$ dengan $(x + 4)$ menggunakan skema Horner:',
      '$$g(x) = (x + 4)(x^2 + 12x + 35) = (x + 4)(x + 5)(x + 7) = 0$$',
      'Jadi, akar-akar persamaan $g(x) = 0$ adalah $-7, -5, -4$.',
    ],
  },

  // =========================================================================
  // 9. Matriks — Aturan Cramer pada Koperasi Sekolah (Hari Rabu)
  // =========================================================================
  {
    id: 'siaga2-q9',
    number: 9,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Determinan Matriks & Aturan Cramer',
    type: 'single',
    stimulus:
      'Suatu koperasi menjual buku tulis, pena, dan penggaris kepada anggota dan nonanggota. Data banyak barang yang dibeli pada hari Senin dan daftar harga (dalam ribuan rupiah) disajikan dalam matriks Barang $= \\begin{bmatrix} 12 & 10 & 6 \\\\ 15 & 11 & 9 \\end{bmatrix}$ (baris: Anggota, Nonanggota; kolom: Buku tulis, Pena, Penggaris) dan Harga $= \\begin{bmatrix} 4 & 5 \\\\ 2 & 3 \\\\ 3 & 4 \\end{bmatrix}$ (kolom: Anggota, Nonanggota). Pada hari Rabu, total penjualan buku tulis ($x$) dan pena ($y$) kepada anggota sebesar $56$ ribu rupiah dan kepada nonanggota sebesar $79$ ribu rupiah.',
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
      'Harga buku tulis dan pena untuk Anggota adalah $4$ dan $2$ (ribu rupiah), sedangkan untuk Nonanggota adalah $5$ dan $3$ (ribu rupiah).',
      'Sistem persamaan linear hari Rabu adalah: $4x + 2y = 56$ dan $5x + 3y = 79$, atau $\\begin{bmatrix} 4 & 2 \\\\ 5 & 3 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 56 \\\\ 79 \\end{bmatrix}$.',
      'Berdasarkan aturan Cramer, determinan utama $D = \\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix} = 12 - 10 = 2$.',
      '$$x = \\frac{D_x}{D} = \\frac{\\begin{vmatrix} 56 & 2 \\\\ 79 & 3 \\end{vmatrix}}{\\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix}} = \\frac{168 - 158}{2} = \\frac{10}{2} = 5$$',
      '$$y = \\frac{D_y}{D} = \\frac{\\begin{vmatrix} 4 & 56 \\\\ 5 & 79 \\end{vmatrix}}{\\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix}} = \\frac{316 - 280}{2} = \\frac{36}{2} = 18$$',
    ],
  },

  // =========================================================================
  // 10. Matriks — Pendapatan Koperasi Hari Senin (Buku Tulis & Pena)
  // =========================================================================
  {
    id: 'siaga2-q10',
    number: 10,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Perkalian Matriks dalam Konteks Kontekstual',
    type: 'single',
    stimulus:
      'Suatu koperasi mencatat banyak barang yang dibeli pada hari Senin dan daftar harga (dalam ribuan rupiah) dalam matriks Banyak Barang $= \\begin{bmatrix} 12 & 10 & 6 \\\\ 15 & 11 & 9 \\end{bmatrix}$ (baris: Anggota, Nonanggota; kolom: Buku tulis, Pena, Penggaris) dan Harga $= \\begin{bmatrix} 4 & 5 \\\\ 2 & 3 \\\\ 3 & 4 \\end{bmatrix}$ (baris: Buku tulis, Pena, Penggaris; kolom: Anggota, Nonanggota).',
    questionText:
      'Total pendapatan koperasi dari hasil penjualan buku tulis dan pena pada hari Senin dari anggota dan nonanggota adalah ....',
    options: [
      { id: 'A', text: '$\\text{Rp}176.000,00$' },
      { id: 'B', text: '$\\text{Rp}186.000,00$' },
      { id: 'C', text: '$\\text{Rp}198.000,00$' },
      { id: 'D', text: '$\\text{Rp}216.000,00$' },
      { id: 'E', text: '$\\text{Rp}230.000,00$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Ambil submatriks $2 \\times 2$ untuk penjualan buku tulis dan pena saja:',
      '• Anggota membeli $12$ buku tulis ($\\text{Rp}4.000$) dan $10$ pena ($\\text{Rp}2.000$):',
      '$$P_{\\text{anggota}} = 12(4) + 10(2) = 48 + 20 = 68\\text{ ribu rupiah}$$',
      '• Nonanggota membeli $15$ buku tulis ($\\text{Rp}5.000$) dan $11$ pena ($\\text{Rp}3.000$):',
      '$$P_{\\text{nonanggota}} = 15(5) + 11(3) = 75 + 33 = 108\\text{ ribu rupiah}$$',
      'Jumlahkan keduanya: $68 + 108 = 176\\text{ ribu rupiah} = \\text{Rp}176.000,00$.',
    ],
  },

  // =========================================================================
  // 11. Matriks — Koperasi Hari Jumat Diskon 10% (Tabel Benar/Salah)
  // =========================================================================
  {
    id: 'siaga2-q11',
    number: 11,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Aplikasi SPLDV & Matriks dengan Diskon',
    type: 'table',
    stimulus:
      'Harga normal buku tulis dan pena untuk anggota adalah $\\text{Rp}4.000,00$ dan $\\text{Rp}2.000,00$, sedangkan untuk nonanggota $\\text{Rp}5.000,00$ dan $\\text{Rp}3.000,00$. Pada hari Jumat, khusus anggota mendapat diskon $10\\%$. Total penjualan buku tulis ($x$) dan pena ($y$) pada hari Jumat untuk anggota adalah $\\text{Rp}72.000,00$ dan untuk nonanggota (jumlah barang sama) adalah $\\text{Rp}110.000,00$.',
    questionText:
      'Tentukan kebenaran setiap pernyataan berikut terkait penjualan buku tulis dan pena pada hari Jumat!',
    statements: [
      {
        id: 'S1',
        text: 'Banyak buku tulis yang terjual adalah $10\\text{ buah}$.',
        isTrue: true,
      },
      {
        id: 'S2',
        text: 'Banyak pena yang terjual adalah $20\\text{ buah}$.',
        isTrue: true,
      },
      {
        id: 'S3',
        text: 'Selisih banyak buku tulis dan pena yang terjual adalah $10\\text{ buah}$.',
        isTrue: true,
      },
    ],
    solutionSteps: [
      'Karena anggota mendapat diskon $10\\%$, maka anggota membayar $90\\%$ dari harga normal:',
      '$$0,9(4.000x + 2.000y) = 72.000 \\implies 4x + 2y = 80 \\implies 2x + y = 40$$',
      'Persamaan untuk nonanggota (tanpa diskon):',
      '$$5.000x + 3.000y = 110.000 \\implies 5x + 3y = 110$$',
      'Eliminasi $y$: kalikan persamaan pertama dengan $3$ menjadi $6x + 3y = 120$, lalu kurangkan dengan $5x + 3y = 110$:',
      '$$x = 120 - 110 = 10 \\implies y = 40 - 2(10) = 20$$',
      'Selisih banyak buku tulis dan pena adalah $|20 - 10| = 10\\text{ buah}$. Ketiga pernyataan bernilai Benar.',
    ],
  },

  // =========================================================================
  // 12. Matriks — Persamaan Matriks Hari Jumat (Diskon 10% Anggota)
  // =========================================================================
  {
    id: 'siaga2-q12',
    number: 12,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Pemodelan Matriks dari Masalah Kontekstual',
    type: 'single',
    stimulus:
      'Mengacu pada data koperasi hari Jumat: harga normal buku tulis dan pena untuk anggota adalah $4$ dan $2$ (ribu rupiah) dengan diskon $10\\%$, sedangkan untuk nonanggota adalah $5$ dan $3$ (ribu rupiah) tanpa diskon. Total pembayaran anggota adalah $72$ ribu rupiah dan nonanggota $110$ ribu rupiah.',
    questionText:
      'Persamaan matriks yang tepat untuk menentukan banyak buku tulis ($x$) dan pena ($y$) sebelum disederhanakan adalah ....',
    options: [
      {
        id: 'A',
        text: '$\\begin{bmatrix} 3,6 & 1,8 \\\\ 5 & 3 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 72 \\\\ 110 \\end{bmatrix}$',
      },
      {
        id: 'B',
        text: '$\\begin{bmatrix} 4 & 2 \\\\ 5 & 3 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 72 \\\\ 110 \\end{bmatrix}$',
      },
      {
        id: 'C',
        text: '$\\begin{bmatrix} 3,6 & 5 \\\\ 1,8 & 3 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 72 \\\\ 110 \\end{bmatrix}$',
      },
      {
        id: 'D',
        text: '$\\begin{bmatrix} 4,4 & 2,2 \\\\ 5 & 3 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 72 \\\\ 110 \\end{bmatrix}$',
      },
      {
        id: 'E',
        text: '$\\begin{bmatrix} 4 & 2 \\\\ 4,5 & 2,7 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 72 \\\\ 110 \\end{bmatrix}$',
      },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Harga anggota setelah diskon $10\\%$ (dikalikan $0,9$):',
      '• Buku tulis anggota: $0,9 \\times 4 = 3,6$ ribu rupiah.',
      '• Pena anggota: $0,9 \\times 2 = 1,8$ ribu rupiah.',
      'Harga nonanggota tetap $5$ ribu dan $3$ ribu rupiah.',
      'Maka sistem persamaannya dalam bentuk matriks adalah:',
      '$$\\begin{bmatrix} 3,6 & 1,8 \\\\ 5 & 3 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 72 \\\\ 110 \\end{bmatrix}$$',
    ],
  },

  // =========================================================================
  // 13. Matriks — Harga Apel dan Jeruk (Pak Yana & Bu Mail)
  // =========================================================================
  {
    id: 'siaga2-q13',
    number: 13,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Penyelesaian SPLDV dengan Invers Matriks',
    type: 'single',
    stimulus:
      'Di sebuah toko buah, Pak Yana membeli $3\\text{ kg}$ apel dan $2\\text{ kg}$ jeruk seharga $\\text{Rp}34.000,00$. Di toko yang sama, Bu Mail membeli $5\\text{ kg}$ apel dan $3\\text{ kg}$ jeruk seharga $\\text{Rp}53.000,00$. Harga $1\\text{ kg}$ apel dinyatakan dengan $x$ dan harga $1\\text{ kg}$ jeruk dinyatakan dengan $y$.',
    questionText:
      'Harga $1\\text{ kg}$ apel ($x$) dan $1\\text{ kg}$ jeruk ($y$) berturut-turut adalah ....',
    options: [
      { id: 'A', text: '$\\text{Rp}4.000,00 \\text{ dan } \\text{Rp}11.000,00$' },
      { id: 'B', text: '$\\text{Rp}5.000,00 \\text{ dan } \\text{Rp}9.500,00$' },
      { id: 'C', text: '$\\text{Rp}6.000,00 \\text{ dan } \\text{Rp}8.000,00$' },
      { id: 'D', text: '$\\text{Rp}7.000,00 \\text{ dan } \\text{Rp}6.500,00$' },
      { id: 'E', text: '$\\text{Rp}8.000,00 \\text{ dan } \\text{Rp}5.000,00$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Susun persamaan matriks dari belanjaan Pak Yana dan Bu Mail:',
      '$$\\begin{pmatrix} 3 & 2 \\\\ 5 & 3 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$$',
      'Hitung determinan matriks koefisien: $\\det(A) = 3(3) - 2(5) = 9 - 10 = -1$.',
      'Gunakan rumus invers matriks $A^{-1} = \\frac{1}{-1}\\begin{pmatrix} 3 & -2 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} -3 & 2 \\\\ 5 & -3 \\end{pmatrix}$:',
      '$$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} -3 & 2 \\\\ 5 & -3 \\end{pmatrix}\\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix} = \\begin{pmatrix} -102.000 + 106.000 \\\\ 170.000 - 159.000 \\end{pmatrix} = \\begin{pmatrix} 4.000 \\\\ 11.000 \\end{pmatrix}$$',
      'Jadi, harga $1\\text{ kg}$ apel adalah $\\text{Rp}4.000,00$ dan $1\\text{ kg}$ jeruk adalah $\\text{Rp}11.000,00$.',
    ],
  },

  // =========================================================================
  // 14. Matriks — Evaluasi Kesalahan Invers Matriks Pemilik Toko
  // =========================================================================
  {
    id: 'siaga2-q14',
    number: 14,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Analisis Kesalahan Invers Matriks Ordo 2x2',
    type: 'single',
    stimulus:
      'Dari sistem persamaan $3x + 2y = 34.000$ dan $5x + 3y = 53.000$, pemilik toko menuliskan model matriks untuk mencari harga apel ($x$) dan jeruk ($y$) sebagai berikut: $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 3 & -2 \\\\ -5 & 3 \\end{pmatrix}\\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$. Ketika dihitung, hasilnya bernilai negatif sehingga pemilik toko kebingungan.',
    questionText:
      'Bagian yang salah dari operasi matriks yang ditulis pemilik toko tersebut adalah ....',
    options: [
      {
        id: 'A',
        text: 'Nilai determinan matriks koefisien adalah $-1$, sehingga matriks adjoin seharusnya dikalikan $\\frac{1}{-1}$ menjadi $\\begin{pmatrix} -3 & 2 \\\\ 5 & -3 \\end{pmatrix}$.',
      },
      {
        id: 'B',
        text: 'Elemen diagonal utama $3$ dan $3$ seharusnya diubah tandanya menjadi $-3$ dan $-3$ saat menyusun adjoin.',
      },
      {
        id: 'C',
        text: 'Matriks kolom harga $\\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$ seharusnya diletakkan di sebelah kiri matriks invers.',
      },
      {
        id: 'D',
        text: 'Nilai determinan matriks koefisien seharusnya $19$, sehingga wajib dibagi $19$.',
      },
      {
        id: 'E',
        text: 'Posisi baris pertama dan baris kedua pada matriks harga seharusnya ditukar terlebih dahulu.',
      },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Untuk matriks $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, rumus inversnya adalah $A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.',
      'Pada matriks $A = \\begin{pmatrix} 3 & 2 \\\\ 5 & 3 \\end{pmatrix}$, matriks adjoinnya memang $\\begin{pmatrix} 3 & -2 \\\\ -5 & 3 \\end{pmatrix}$.',
      'Namun, determinannya adalah $\\det(A) = 3(3) - 2(5) = 9 - 10 = -1$ (bukan $+1$).',
      'Pemilik toko lupa membagi matriks adjoin dengan determinan $-1$, sehingga tanda hasil akhir menjadi terbalik (negatif).',
    ],
  },

  // =========================================================================
  // 15. Irisan Kerucut — Persamaan Umum Lingkaran
  // =========================================================================
  {
    id: 'siaga2-q15',
    number: 15,
    packageId: 'siaga-2',
    topic: 'Geometri Analitik',
    subtopic: 'Persamaan Lingkaran',
    type: 'single',
    questionText:
      'Persamaan umum lingkaran yang berpusat di titik $(3, 5)$ dan memiliki jari-jari $5$ adalah ....',
    options: [
      { id: 'A', text: '$x^2 + y^2 - 6x - 10y + 9 = 0$' },
      { id: 'B', text: '$x^2 + y^2 - 6x - 10y - 9 = 0$' },
      { id: 'C', text: '$x^2 + y^2 + 6x + 10y + 9 = 0$' },
      { id: 'D', text: '$x^2 + y^2 - 3x - 5y + 9 = 0$' },
      { id: 'E', text: '$x^2 + y^2 - 6x - 10y + 25 = 0$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Gunakan persamaan baku lingkaran berpusat di $(a, b) = (3, 5)$ dengan jari-jari $r = 5$:',
      '$$(x - 3)^2 + (y - 5)^2 = 5^2$$',
      'Jabarkan bentuk kuadrat:',
      '$$(x^2 - 6x + 9) + (y^2 - 10y + 25) = 25$$',
      '$$x^2 + y^2 - 6x - 10y + 9 = 0$$',
    ],
  },

  // =========================================================================
  // 16. Limit & Geometri — Segitiga DOC dalam Setengah Lingkaran (Benar/Salah)
  // =========================================================================
  {
    id: 'siaga2-q16',
    number: 16,
    packageId: 'siaga-2',
    topic: 'Limit & Trigonometri',
    subtopic: 'Geometri Lingkaran & Limit Trigonometri',
    type: 'table',
    svgType: 'semicircle_triangle',
    stimulus:
      'Perhatikan gambar setengah lingkaran berpusat di $O$ dengan diameter $AB$ dan jari-jari $r$. Titik $C$ dan $D$ terletak pada busur setengah lingkaran sehingga membentuk segitiga sama kaki $DOC$ ($OD = OC = r$) dengan kedua sudut alas $\\angle ODC = \\angle OCD = \\theta$.',
    questionText:
      'Tentukan kebenaran setiap pernyataan berikut berdasarkan informasi pada gambar!',
    statements: [
      {
        id: 'S1',
        text: 'Nilai $\\lim_{\\theta \\to \\frac{\\pi}{3}} \\frac{\\sin 2\\theta}{\\cos 3\\theta} = \\frac{1}{2}\\sqrt{3}$.',
        isTrue: false,
      },
      {
        id: 'S2',
        text: 'Besar sudut $\\theta$ tidak memengaruhi luas segitiga $DOC$.',
        isTrue: false,
      },
      {
        id: 'S3',
        text: 'Besar sudut $\\theta$ memengaruhi panjang jari-jari lingkaran $r$.',
        isTrue: false,
      },
    ],
    solutionSteps: [
      'Evaluasi Pernyataan 1: Substitusikan $\\theta = \\frac{\\pi}{3}$ langsung ke dalam limit:',
      '$$\\lim_{\\theta \\to \\frac{\\pi}{3}} \\frac{\\sin 2\\theta}{\\cos 3\\theta} = \\frac{\\sin\\left(\\frac{2\\pi}{3}\\right)}{\\cos(\\pi)} = \\frac{\\frac{1}{2}\\sqrt{3}}{-1} = -\\frac{1}{2}\\sqrt{3} \\neq \\frac{1}{2}\\sqrt{3} \\quad (\\text{Salah})$$',
      'Evaluasi Pernyataan 2: Karena $\\angle ODC = \\angle OCD = \\theta$, maka sudut puncak $\\angle DOC = \\pi - 2\\theta$. Luas segitiga $DOC$ adalah $L = \\frac{1}{2} r^2 \\sin(\\pi - 2\\theta) = \\frac{1}{2} r^2 \\sin 2\\theta$, sehingga nilainya bergantung pada $\\theta$ (Salah).',
      'Evaluasi Pernyataan 3: Panjang jari-jari lingkaran $r$ adalah ukuran tetap dari lingkaran tersebut dan tidak berubah meskipun posisi titik $C, D$ (sudut $\\theta$) berubah (Salah).',
    ],
  },

  // =========================================================================
  // 17. Limit & Geometri — Rumus Luas Segitiga DOC
  // =========================================================================
  {
    id: 'siaga2-q17',
    number: 17,
    packageId: 'siaga-2',
    topic: 'Limit & Trigonometri',
    subtopic: 'Luas Segitiga dalam Lingkaran',
    type: 'single',
    svgType: 'semicircle_triangle',
    stimulus:
      'Mengacu pada gambar setengah lingkaran berpusat di $O$ berjari-jari $r$, segitiga sama kaki $DOC$ memiliki sisi $OD = OC = r$ dan sudut alas $\\angle ODC = \\angle OCD = \\theta$.',
    questionText:
      'Rumus luas segitiga $DOC$ sebagai fungsi dari $\\theta$ beserta nilai limitnya saat $\\theta \\to \\frac{\\pi}{6}$ adalah ....',
    options: [
      { id: 'A', text: '$L(\\theta) = \\frac{1}{2}r^2\\sin 2\\theta \\text{ dan } \\lim_{\\theta \\to \\frac{\\pi}{6}} L(\\theta) = \\frac{1}{4}\\sqrt{3}\\,r^2$' },
      { id: 'B', text: '$L(\\theta) = \\frac{1}{2}r^2\\sin \\theta \\text{ dan } \\lim_{\\theta \\to \\frac{\\pi}{6}} L(\\theta) = \\frac{1}{4}r^2$' },
      { id: 'C', text: '$L(\\theta) = r^2\\cos 2\\theta \\text{ dan } \\lim_{\\theta \\to \\frac{\\pi}{6}} L(\\theta) = \\frac{1}{2}r^2$' },
      { id: 'D', text: '$L(\\theta) = \\frac{1}{2}r^2\\cos \\theta \\text{ dan } \\lim_{\\theta \\to \\frac{\\pi}{6}} L(\\theta) = \\frac{1}{4}\\sqrt{3}\\,r^2$' },
      { id: 'E', text: '$L(\\theta) = r^2\\sin 2\\theta \\text{ dan } \\lim_{\\theta \\to \\frac{\\pi}{6}} L(\\theta) = \\frac{1}{2}\\sqrt{3}\\,r^2$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Jumlah sudut dalam $\\triangle DOC$ adalah $\\pi$, sehingga sudut pusat $\\angle DOC = \\pi - (\\theta + \\theta) = \\pi - 2\\theta$.',
      'Gunakan rumus luas segitiga dengan dua sisi mengapit satu sudut:',
      '$$L(\\theta) = \\frac{1}{2} \\cdot OD \\cdot OC \\cdot \\sin(\\angle DOC) = \\frac{1}{2} r^2 \\sin(\\pi - 2\\theta) = \\frac{1}{2} r^2 \\sin 2\\theta$$',
      'Saat $\\theta \\to \\frac{\\pi}{6}$, diperoleh:',
      '$$\\lim_{\\theta \\to \\frac{\\pi}{6}} \\frac{1}{2} r^2 \\sin 2\\theta = \\frac{1}{2} r^2 \\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2} r^2 \\left(\\frac{1}{2}\\sqrt{3}\\right) = \\frac{1}{4}\\sqrt{3}\\,r^2$$',
    ],
  },

  // =========================================================================
  // 18. Limit Trigonometri — Menentukan Pasangan Parameter m dan n (PGK)
  // =========================================================================
  {
    id: 'siaga2-q18',
    number: 18,
    packageId: 'siaga-2',
    topic: 'Limit Fungsi',
    subtopic: 'Parameter pada Limit Trigonometri',
    type: 'multiple',
    stimulus:
      'Diketahui persamaan limit fungsi trigonometri berikut:\n$$\\lim_{x \\to 0} \\left(\\frac{\\sin mx}{2x^2 - 6x} \\cdot \\frac{x^2 - 8x}{\\tan nx}\\right) = 2$$',
    questionText:
      'Manakah di antara pasangan nilai $m$ dan $n$ berikut yang memenuhi persamaan limit tersebut? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: '$m = 3 \\text{ dan } n = 2$' },
      { id: 'B', text: '$m = 2 \\text{ dan } n = 3$' },
      { id: 'C', text: '$m = 6 \\text{ dan } n = 4$' },
      { id: 'D', text: '$m = 4 \\text{ dan } n = 6$' },
      { id: 'E', text: '$m = 9 \\text{ dan } n = 6$' },
    ],
    correctAnswer: ['A', 'C', 'E'],
    solutionSteps: [
      'Faktorkan $x$ dari bentuk aljabar pada pembilang dan penyebut:',
      '$$\\lim_{x \\to 0} \\left(\\frac{\\sin mx}{\\tan nx} \\cdot \\frac{x(x - 8)}{x(2x - 6)}\\right) = 2$$',
      'Gunakan sifat $\\lim_{x \\to 0} \\frac{\\sin mx}{\\tan nx} = \\frac{m}{n}$ dan substitusikan $x = 0$ pada $\\frac{x - 8}{2x - 6}$:',
      '$$\\frac{m}{n} \\cdot \\frac{0 - 8}{0 - 6} = 2 \\implies \\frac{m}{n} \\cdot \\frac{4}{3} = 2 \\implies \\frac{m}{n} = \\frac{3}{2}$$',
      'Pasangan $(m, n)$ yang memiliki rasio $\\frac{m}{n} = \\frac{3}{2}$ adalah $(3, 2)$, $(6, 4)$, dan $(9, 6)$.',
    ],
  },

  // =========================================================================
  // 19. Fungsi Trigonometri — Model Suhu Kota f(t) (PGK)
  // =========================================================================
  {
    id: 'siaga2-q19',
    number: 19,
    packageId: 'siaga-2',
    topic: 'Trigonometri',
    subtopic: 'Nilai Maksimum dan Minimum Fungsi Sinus',
    type: 'multiple',
    stimulus:
      'Suhu udara di suatu kota dimodelkan dengan fungsi $f(t) = 6\\sin(15^\\circ(t - 8)) + 26$, dengan $f(t)$ menyatakan suhu dalam $^\\circ\\text{C}$ dan $t$ menyatakan waktu dalam jam setelah pukul $00.00$ ($0 \\le t \\le 24$).',
    questionText:
      'Pilihlah pernyataan yang benar berdasarkan model fungsi suhu tersebut! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Suhu tertinggi di kota tersebut terjadi pada pukul $12.00$.' },
      { id: 'B', text: 'Suhu terendah di kota tersebut adalah $20\\,^\\circ\\text{C}$.' },
      { id: 'C', text: 'Suhu tertinggi di kota tersebut adalah $32\\,^\\circ\\text{C}$ pada pukul $14.00$.' },
      { id: 'D', text: 'Suhu terendah terjadi pada pukul $02.00$.' },
      { id: 'E', text: 'Pada pukul $08.00$, suhu kota tersebut adalah $20\\,^\\circ\\text{C}$.' },
    ],
    correctAnswer: ['B', 'C', 'D'],
    solutionSteps: [
      'Fungsi $f(t) = 6\\sin(15^\\circ(t - 8)) + 26$ memiliki amplitudo $A = 6$ dan garis tengah $D = 26$.',
      '• Suhu tertinggi: $f_{\\text{maks}} = 26 + 6 = 32\\,^\\circ\\text{C}$, tercapai saat $\\sin(15^\\circ(t - 8)) = 1 \\implies 15^\\circ(t - 8) = 90^\\circ \\implies t - 8 = 6 \\implies t = 14$ (pukul $14.00$, sehingga C benar dan A salah).',
      '• Suhu terendah: $f_{\\text{min}} = 26 - 6 = 20\\,^\\circ\\text{C}$ (B benar), tercapai saat $\\sin(15^\\circ(t - 8)) = -1 \\implies 15^\\circ(t - 8) = -90^\\circ \\implies t - 8 = -6 \\implies t = 2$ (pukul $02.00$, sehingga D benar).',
      '• Pada pukul $08.00$ ($t = 8$): $f(8) = 6\\sin(0^\\circ) + 26 = 26\\,^\\circ\\text{C}$ (E salah).',
    ],
  },

  // =========================================================================
  // 20. Vektor & Jarak — 5 Kota Segaris E-D-C-B-A (PGK Waktu < 250 Menit)
  // =========================================================================
  {
    id: 'siaga2-q20',
    number: 20,
    packageId: 'siaga-2',
    topic: 'Vektor & Geometri',
    subtopic: 'Jarak Euclidean & Perbandingan Segmen Garis',
    type: 'multiple',
    svgType: 'collinear_cities',
    stimulus:
      'Lima kota $E, D, C, B, A$ terletak pada satu jalur lurus dengan koordinat $A(230, 240)$ dan $E(-70, -160)$ (dalam km). Waktu tempuh normal antar kota adalah: $A \\to B$ selama $3\\text{ jam}$, $B \\to C$ selama $2\\text{ jam}$, $C \\to D$ selama $4\\text{ jam}$, dan $D \\to E$ selama $1\\text{ jam}$ (kecepatan konstan).',
    questionText:
      'Jika seseorang berkendara dengan kecepatan rata-rata baru sebesar $75\\text{ km/jam}$, perjalanan manakah yang memerlukan waktu tempuh kurang dari $250\\text{ menit}$? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Perjalanan dari kota $A$ ke kota $C$.' },
      { id: 'B', text: 'Perjalanan dari kota $B$ ke kota $D$.' },
      { id: 'C', text: 'Perjalanan dari kota $C$ ke kota $E$.' },
      { id: 'D', text: 'Perjalanan dari kota $A$ ke kota $D$.' },
      { id: 'E', text: 'Perjalanan dari kota $B$ ke kota $E$.' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    solutionSteps: [
      'Hitung jarak total dari kota $A(230, 240)$ ke kota $E(-70, -160)$:',
      '$$|AE| = \\sqrt{(230 - (-70))^2 + (240 - (-160))^2} = \\sqrt{300^2 + 400^2} = 500\\text{ km}$$',
      'Total waktu normal adalah $3 + 2 + 4 + 1 = 10\\text{ jam}$, sehingga $1\\text{ jam}$ perjalanan normal setara dengan $\\frac{500}{10} = 50\\text{ km}$:',
      '• $|AB| = 150\\text{ km}, \\quad |BC| = 100\\text{ km}, \\quad |CD| = 200\\text{ km}, \\quad |DE| = 50\\text{ km}$.',
      'Pada kecepatan $75\\text{ km/jam}$ ($1,25\\text{ km/menit}$), waktu $250\\text{ menit}$ menempuh jarak $250 \\times 1,25 = 312,5\\text{ km}$:',
      '• $A \\to C$: $250\\text{ km} \\implies t = 200\\text{ menit} < 250\\text{ menit}$ (Benar).',
      '• $B \\to D$: $300\\text{ km} \\implies t = 240\\text{ menit} < 250\\text{ menit}$ (Benar).',
      '• $C \\to E$: $250\\text{ km} \\implies t = 200\\text{ menit} < 250\\text{ menit}$ (Benar).',
      '• $A \\to D$ ($450\\text{ km}$) dan $B \\to E$ ($350\\text{ km}$) lebih dari $312,5\\text{ km}$ (Salah).',
    ],
  },

  // =========================================================================
  // 21. Vektor — Koordinat Kota C pada Jalur Lurus A-E
  // =========================================================================
  {
    id: 'siaga2-q21',
    number: 21,
    packageId: 'siaga-2',
    topic: 'Vektor',
    subtopic: 'Rumus Perbandingan Koordinat Titik pada Ruas Garis',
    type: 'single',
    svgType: 'collinear_cities',
    stimulus:
      'Mengacu pada jalur lurus lima kota $A(230, 240)$ hingga $E(-70, -160)$, rasio jarak antar kota sebanding dengan waktu tempuhnya, yaitu $AB : BC : CD : DE = 3 : 2 : 4 : 1$.',
    questionText:
      'Koordinat posisi kota $C$ pada bidang Kartesius tersebut adalah ....',
    options: [
      { id: 'A', text: '$(80, 40)$' },
      { id: 'B', text: '$(140, 120)$' },
      { id: 'C', text: '$(-40, -120)$' },
      { id: 'D', text: '$(50, 20)$' },
      { id: 'E', text: '$(110, 80)$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Dari perbandingan $AB : BC : CD : DE = 3 : 2 : 4 : 1$, jarak $AC = 3 + 2 = 5$ bagian dan jarak $CE = 4 + 1 = 5$ bagian.',
      'Artinya, kota $C$ berada tepat di titik tengah ruas garis $AE$ ($AC : CE = 1 : 1$).',
      'Gunakan rumus titik tengah antara $A(230, 240)$ dan $E(-70, -160)$:',
      '$$C = \\left(\\frac{230 + (-70)}{2}, \\frac{240 + (-160)}{2}\\right) = \\left(\\frac{160}{2}, \\frac{80}{2}\\right) = (80, 40)$$',
    ],
  },

  // =========================================================================
  // 22. Transformasi Geometri — Jenis Transformasi Koin Karambol
  // =========================================================================
  {
    id: 'siaga2-q22',
    number: 22,
    packageId: 'siaga-2',
    topic: 'Transformasi Geometri',
    subtopic: 'Konsep Dasar Transformasi Geometri',
    type: 'single',
    svgType: 'carrom_board',
    stimulus:
      'Perhatikan gambar papan karambol yang dilengkapi sumbu koordinat Kartesius dengan titik pusat papan sebagai titik asal $O(0, 0)$. Sebuah koin karambol disentil dari posisi "awal" hingga meluncur lurus masuk ke lubang pojok kiri atas pada posisi "akhir".',
    questionText:
      'Transformasi geometri yang memindahkan koin karambol dari posisi awal ke posisi akhir adalah ....',
    options: [
      { id: 'A', text: 'Rotasi dengan titik pusat $(0, 0)$' },
      { id: 'B', text: 'Dilatasi dengan titik pusat $(0, 0)$' },
      { id: 'C', text: 'Translasi' },
      { id: 'D', text: 'Refleksi terhadap sumbu-$y$' },
      { id: 'E', text: 'Refleksi terhadap sumbu-$x$' },
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Perhatikan lintasan koin karambol pada gambar: koin bergerak sepanjang garis lurus dari titik awal menuju titik akhir tanpa mengubah ukuran koin.',
      'Perpindahan (pergeseran) suatu objek dari satu titik $(x, y)$ ke titik lain $(x + a, y + b)$ sepanjang vektor arah tertentu dinamakan Translasi (pergeseran).',
    ],
  },

  // =========================================================================
  // 23. Transformasi Geometri — Vektor Translasi Koin Karambol
  // =========================================================================
  {
    id: 'siaga2-q23',
    number: 23,
    packageId: 'siaga-2',
    topic: 'Transformasi Geometri',
    subtopic: 'Vektor Translasi pada Bidang Kartesius',
    type: 'single',
    svgType: 'carrom_board',
    stimulus:
      'Pada papan karambol dengan pusat $O(0, 0)$, posisi awal koin berada di titik $P(1, 1)$ (dalam satuan dm) dan posisi akhir lubang pojok kiri atas berada di titik $P\'(-4, 4)$.',
    questionText:
      'Vektor translasi $\\vec{T} = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$ serta jarak tempuh koin karambol tersebut adalah ....',
    options: [
      { id: 'A', text: '$\\vec{T} = \\begin{pmatrix} -5 \\\\ 3 \\end{pmatrix} \\text{ dan jarak } \\sqrt{34}\\text{ dm}$' },
      { id: 'B', text: '$\\vec{T} = \\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix} \\text{ dan jarak } \\sqrt{34}\\text{ dm}$' },
      { id: 'C', text: '$\\vec{T} = \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix} \\text{ dan jarak } \\sqrt{34}\\text{ dm}$' },
      { id: 'D', text: '$\\vec{T} = \\begin{pmatrix} -5 \\\\ 5 \\end{pmatrix} \\text{ dan jarak } 5\\sqrt{2}\\text{ dm}$' },
      { id: 'E', text: '$\\vec{T} = \\begin{pmatrix} -4 \\\\ 4 \\end{pmatrix} \\text{ dan jarak } 4\\sqrt{2}\\text{ dm}$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Vektor translasi diperoleh dari selisih koordinat akhir dan koordinat awal:',
      '$$\\vec{T} = P\' - P = \\begin{pmatrix} -4 - 1 \\\\ 4 - 1 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ 3 \\end{pmatrix}$$',
      'Jarak tempuh koin adalah panjang vektor translasi $|\\vec{T}|$:',
      '$$|\\vec{T}| = \\sqrt{(-5)^2 + 3^2} = \\sqrt{25 + 9} = \\sqrt{34}\\text{ dm}$$',
    ],
  },

  // =========================================================================
  // 24. Lingkaran — Koordinat Titik Singgung dari Titik (7, 1) (PGK)
  // =========================================================================
  {
    id: 'siaga2-q24',
    number: 24,
    packageId: 'siaga-2',
    topic: 'Geometri Analitik',
    subtopic: 'Garis Singgung Lingkaran dari Titik di Luar Lingkaran',
    type: 'multiple',
    svgType: 'circle_tangent',
    stimulus:
      'Sebuah lingkaran berpusat di $O(0, 0)$ memiliki jari-jari $r = 5$ seperti pada gambar. Dari titik $P(7, 1)$ di luar lingkaran, ditarik dua garis singgung yang menyinggung lingkaran di titik $A$ dan $B$.',
    questionText:
      'Manakah di antara titik berikut yang merupakan titik singgung garis tersebut pada lingkaran? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'titik $(3, 4)$.' },
      { id: 'B', text: 'titik $(3, -4)$.' },
      { id: 'C', text: 'titik $(4, 3)$.' },
      { id: 'D', text: 'titik $(4, -3)$.' },
      { id: 'E', text: 'titik $(-3, 4)$.' },
    ],
    correctAnswer: ['A', 'D'],
    solutionSteps: [
      'Persamaan lingkaran adalah $x^2 + y^2 = 25$. Misalkan titik singgungnya adalah $(x_1, y_1)$, maka persamaan garis singgungnya $x_1 x + y_1 y = 25$.',
      'Karena garis singgung melalui titik $P(7, 1)$, maka:',
      '$$7x_1 + y_1 = 25 \\implies y_1 = 25 - 7x_1$$',
      'Substitusikan ke dalam persamaan lingkaran $x_1^2 + y_1^2 = 25$:',
      '$$x_1^2 + (25 - 7x_1)^2 = 25 \\implies 50x_1^2 - 350x_1 + 600 = 0$$',
      'Bagi kedua ruas dengan $50$: $x_1^2 - 7x_1 + 12 = 0 \\implies (x_1 - 3)(x_1 - 4) = 0$.',
      '• Untuk $x_1 = 3 \\implies y_1 = 25 - 21 = 4 \\implies$ titik $(3, 4)$.',
      '• Untuk $x_1 = 4 \\implies y_1 = 25 - 28 = -3 \\implies$ titik $(4, -3)$.',
    ],
  },

  // =========================================================================
  // 25. Lingkaran — Persamaan Kedua Garis Singgung dari Titik (7, 1)
  // =========================================================================
  {
    id: 'siaga2-q25',
    number: 25,
    packageId: 'siaga-2',
    topic: 'Geometri Analitik',
    subtopic: 'Persamaan Garis Singgung Lingkaran',
    type: 'single',
    svgType: 'circle_tangent',
    stimulus:
      'Mengacu pada lingkaran $x^2 + y^2 = 25$ dan kedua garis singgung yang ditarik dari titik $P(7, 1)$ di luar lingkaran.',
    questionText:
      'Persamaan kedua garis singgung lingkaran tersebut adalah ....',
    options: [
      { id: 'A', text: '$3x + 4y = 25 \\text{ dan } 4x - 3y = 25$' },
      { id: 'B', text: '$3x - 4y = 25 \\text{ dan } 4x + 3y = 25$' },
      { id: 'C', text: '$3x + 4y = 25 \\text{ dan } 4x + 3y = 25$' },
      { id: 'D', text: '$4x + 3y = 25 \\text{ dan } 3x - 4y = 25$' },
      { id: 'E', text: '$3x - 4y = 25 \\text{ dan } 4x - 3y = 25$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Rumus garis singgung lingkaran $x^2 + y^2 = r^2$ di titik singgung $(x_1, y_1)$ adalah $x_1 x + y_1 y = r^2$.',
      'Dari titik singgung pertama $A(3, 4)$ diperoleh garis singgung: $3x + 4y = 25$.',
      'Dari titik singgung kedua $B(4, -3)$ diperoleh garis singgung: $4x - 3y = 25$.',
    ],
  },

  // =========================================================================
  // 26. Matriks — Persamaan Matriks Kantin (Senin, Selasa, Kamis)
  // =========================================================================
  {
    id: 'siaga2-q26',
    number: 26,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Representasi Matriks dari Tabel Data',
    type: 'single',
    stimulus:
      'Sebuah kantin sekolah menjual makanan dan minuman selama 5 hari: Senin ($10$ makanan, $15$ minuman, pendapatan $225$ ribu), Selasa ($12$ makanan, $10$ minuman, pendapatan $230$ ribu), Rabu ($8$ makanan, $12$ minuman, pendapatan $180$ ribu), Kamis ($15$ makanan, $20$ minuman, pendapatan $325$ ribu), dan Jumat ($3$ makanan, $4$ minuman, pendapatan $65$ ribu).',
    questionText:
      'Jika $x$ menyatakan harga satu porsi makanan dan $y$ menyatakan harga satu porsi minuman (dalam ribuan rupiah), matriks yang menyajikan pendapatan kantin pada hari Senin, Selasa, dan Kamis adalah ....',
    options: [
      {
        id: 'A',
        text: '$\\begin{pmatrix} 10 & 12 & 15 \\\\ 15 & 10 & 20 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 230 \\\\ 325 \\end{pmatrix}$',
      },
      {
        id: 'B',
        text: '$\\begin{pmatrix} 10 & 15 \\\\ 12 & 10 \\\\ 15 & 20 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 230 \\\\ 325 \\end{pmatrix}$',
      },
      {
        id: 'C',
        text: '$\\begin{pmatrix} 10 & 15 \\\\ 12 & 10 \\\\ 8 & 12 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 230 \\\\ 180 \\end{pmatrix}$',
      },
      {
        id: 'D',
        text: '$\\begin{pmatrix} 15 & 10 \\\\ 10 & 12 \\\\ 20 & 15 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 230 \\\\ 325 \\end{pmatrix}$',
      },
      {
        id: 'E',
        text: '$\\begin{pmatrix} 10 & 15 \\\\ 12 & 10 \\\\ 15 & 20 \\end{pmatrix}\\begin{pmatrix} y \\\\ x \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 230 \\\\ 325 \\end{pmatrix}$',
      },
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Susun persamaan pendapatan untuk hari Senin, Selasa, dan Kamis:',
      '• Senin: $10x + 15y = 225$',
      '• Selasa: $12x + 10y = 230$',
      '• Kamis: $15x + 20y = 325$',
      'Dalam bentuk perkalian matriks (ordo $3 \\times 2$ dikali $2 \\times 1$ menghasilkan $3 \\times 1$):',
      '$$\\begin{pmatrix} 10 & 15 \\\\ 12 & 10 \\\\ 15 & 20 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 230 \\\\ 325 \\end{pmatrix}$$',
    ],
  },

  // =========================================================================
  // 27. Matriks — Harga Satuan Makanan dan Minuman Kantin Sekolah
  // =========================================================================
  {
    id: 'siaga2-q27',
    number: 27,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Solusi SPLDV dari Tabel Penjualan',
    type: 'single',
    stimulus:
      'Mengacu pada tabel penjualan kantin sekolah: hari Senin terjual $10$ makanan dan $15$ minuman dengan pendapatan $\\text{Rp}225.000,00$; hari Selasa terjual $12$ makanan dan $10$ minuman dengan pendapatan $\\text{Rp}230.000,00$.',
    questionText:
      'Harga satu porsi makanan ($x$) dan satu porsi minuman ($y$) di kantin tersebut berturut-turut adalah ....',
    options: [
      { id: 'A', text: '$\\text{Rp}15.000,00 \\text{ dan } \\text{Rp}5.000,00$' },
      { id: 'B', text: '$\\text{Rp}5.000,00 \\text{ dan } \\text{Rp}15.000,00$' },
      { id: 'C', text: '$\\text{Rp}12.000,00 \\text{ dan } \\text{Rp}7.000,00$' },
      { id: 'D', text: '$\\text{Rp}10.000,00 \\text{ dan } \\text{Rp}8.000,00$' },
      { id: 'E', text: '$\\text{Rp}14.000,00 \\text{ dan } \\text{Rp}6.000,00$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Sederhanakan sistem persamaan hari Senin dan Selasa (dalam ribuan rupiah):',
      '• Senin: $10x + 15y = 225 \\implies 2x + 3y = 45$',
      '• Selasa: $12x + 10y = 230 \\implies 6x + 5y = 115$',
      'Kalikan persamaan pertama dengan $3$ menjadi $6x + 9y = 135$, lalu kurangkan dengan persamaan kedua:',
      '$$4y = 20 \\implies y = 5 \\text{ (ribu rupiah)}$$',
      'Substitusikan $y = 5$: $2x + 3(5) = 45 \\implies 2x = 30 \\implies x = 15$ (ribu rupiah).',
      'Jadi, harga satu porsi makanan $\\text{Rp}15.000,00$ dan satu porsi minuman $\\text{Rp}5.000,00$.',
    ],
  },

  // =========================================================================
  // 28. Matriks — Pasangan Hari yang Dapat Menghitung Harga Satuan (PGK)
  // =========================================================================
  {
    id: 'siaga2-q28',
    number: 28,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Syarat Ketunggalan Solusi SPLDV (Determinan Tak Nol)',
    type: 'multiple',
    stimulus:
      'Data penjualan kantin selama 5 hari: Senin ($10$ makanan, $15$ minuman), Selasa ($12$ makanan, $10$ minuman), Rabu ($8$ makanan, $12$ minuman), Kamis ($15$ makanan, $20$ minuman), dan Jumat ($3$ makanan, $4$ minuman).',
    questionText:
      'Berdasarkan tabel tersebut, pasangan hari manakah yang dapat digunakan untuk menghitung harga satuan makanan dan minuman secara tunggal? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Senin dan Selasa' },
      { id: 'B', text: 'Selasa dan Rabu' },
      { id: 'C', text: 'Senin dan Rabu' },
      { id: 'D', text: 'Kamis dan Jumat' },
      { id: 'E', text: 'Rabu dan Jumat' },
    ],
    correctAnswer: ['A', 'B', 'E'],
    solutionSteps: [
      'Pasangan dua hari dapat menentukan harga satuan secara tunggal jika determinan matriks koefisiennya tidak nol ($\\det \\neq 0$):',
      '• Senin & Selasa: $\\det\\begin{pmatrix} 10 & 15 \\\\ 12 & 10 \\end{pmatrix} = 100 - 180 = -80 \\neq 0$ (Dapat digunakan / Benar).',
      '• Selasa & Rabu: $\\det\\begin{pmatrix} 12 & 10 \\\\ 8 & 12 \\end{pmatrix} = 144 - 80 = 64 \\neq 0$ (Dapat digunakan / Benar).',
      '• Senin & Rabu: $\\det\\begin{pmatrix} 10 & 15 \\\\ 8 & 12 \\end{pmatrix} = 120 - 120 = 0$ karena rasio keduanya $2 : 3$ (Tidak dapat digunakan / Salah).',
      '• Kamis & Jumat: $\\det\\begin{pmatrix} 15 & 20 \\\\ 3 & 4 \\end{pmatrix} = 60 - 60 = 0$ karena rasio keduanya $3 : 4$ (Tidak dapat digunakan / Salah).',
      '• Rabu & Jumat: $\\det\\begin{pmatrix} 8 & 12 \\\\ 3 & 4 \\end{pmatrix} = 32 - 36 = -4 \\neq 0$ (Dapat digunakan / Benar).',
    ],
  },

  // =========================================================================
  // 29. Matriks — Perkalian Matriks Pendapatan Senin sampai Jumat
  // =========================================================================
  {
    id: 'siaga2-q29',
    number: 29,
    packageId: 'siaga-2',
    topic: 'Matriks',
    subtopic: 'Perkalian Matriks Ordo 5x2 dengan 2x1',
    type: 'single',
    stimulus:
      'Dari tabel penjualan kantin selama 5 hari (Senin: $10, 15$; Selasa: $12, 10$; Rabu: $8, 12$; Kamis: $15, 20$; Jumat: $3, 4$), diketahui harga satu porsi makanan adalah $15$ ribu rupiah dan satu porsi minuman adalah $5$ ribu rupiah.',
    questionText:
      'Bentuk perkalian matriks yang menyatakan pendapatan harian dari penjualan makanan dan minuman dari hari Senin sampai Jumat adalah ....',
    options: [
      {
        id: 'A',
        text: '$\\begin{pmatrix} 10 & 15 \\\\ 12 & 10 \\\\ 8 & 12 \\\\ 15 & 20 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 5 \\\\ 15 \\end{pmatrix}$',
      },
      {
        id: 'B',
        text: '$\\begin{pmatrix} 10 & 15 \\\\ 12 & 10 \\\\ 8 & 12 \\\\ 15 & 20 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 15 \\\\ 5 \\end{pmatrix}$',
      },
      {
        id: 'C',
        text: '$\\begin{pmatrix} 15 & 10 \\\\ 10 & 12 \\\\ 12 & 8 \\\\ 20 & 15 \\\\ 4 & 3 \\end{pmatrix}\\begin{pmatrix} 15 \\\\ 5 \\end{pmatrix}$',
      },
      {
        id: 'D',
        text: '$\\begin{pmatrix} 10 & 12 & 8 & 15 & 3 \\\\ 15 & 10 & 12 & 20 & 4 \\end{pmatrix}\\begin{pmatrix} 15 \\\\ 5 \\end{pmatrix}$',
      },
      {
        id: 'E',
        text: '$\\begin{pmatrix} 15 & 5 \\end{pmatrix}\\begin{pmatrix} 10 & 15 \\\\ 12 & 10 \\\\ 8 & 12 \\\\ 15 & 20 \\\\ 3 & 4 \\end{pmatrix}$',
      },
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Matriks jumlah penjualan harian berukuran $5 \\times 2$ dengan kolom pertama untuk makanan dan kolom kedua untuk minuman.',
      'Karena harga makanan $x = 15$ dan harga minuman $y = 5$, maka matriks kolom harganya adalah $\\begin{pmatrix} 15 \\\\ 5 \\end{pmatrix}$.',
      'Hasil kali keduanya menghasilkan matriks pendapatan harian $\\begin{pmatrix} 225 \\\\ 230 \\\\ 180 \\\\ 325 \\\\ 65 \\end{pmatrix}$:',
      '$$\\begin{pmatrix} 10 & 15 \\\\ 12 & 10 \\\\ 8 & 12 \\\\ 15 & 20 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 15 \\\\ 5 \\end{pmatrix}$$',
    ],
  },

  // =========================================================================
  // 30. Fungsi Eksponensial — Grafik Eliminasi Obat Antibiotik (PGK)
  // =========================================================================
  {
    id: 'siaga2-q30',
    number: 30,
    packageId: 'siaga-2',
    topic: 'Fungsi Eksponensial',
    subtopic: 'Peluruhan Eksponensial (Eliminasi Obat)',
    type: 'multiple',
    svgType: 'antibiotic_decay',
    stimulus:
      'Perhatikan grafik eliminasi obat antibiotik dalam darah $C(t) = C_0 \\cdot e^{-kt}$ dengan konsentrasi awal $C(0) = 100\\text{ mg/L}$, $C(4) = 50\\text{ mg/L}$, $C(8) = 25\\text{ mg/L}$, $C(12) = 12,5\\text{ mg/L}$, dan $C(16) = 6,25\\text{ mg/L}$.',
    questionText:
      'Berdasarkan grafik, pada waktu $t$ manakah konsentrasi obat dalam darah berada pada rentang $20\\text{ mg/L}$ hingga $80\\text{ mg/L}$? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: '$4\\text{ jam}$.' },
      { id: 'B', text: '$5\\text{ jam}$.' },
      { id: 'C', text: '$10\\text{ jam}$.' },
      { id: 'D', text: '$15\\text{ jam}$.' },
      { id: 'E', text: '$20\\text{ jam}$.' },
    ],
    correctAnswer: ['A', 'B'],
    solutionSteps: [
      'Dari grafik terlihat waktu paruh obat adalah $4\\text{ jam}$ sehingga $C(t) = 100 \\cdot \\left(\\frac{1}{2}\\right)^{t/4}$.',
      'Periksa konsentrasi obat untuk masing-masing pilihan waktu:',
      '• $t = 4\\text{ jam} \\implies C(4) = 50,0\\text{ mg/L}$ (berada dalam rentang $20 \\le C \\le 80$ / Benar).',
      '• $t = 5\\text{ jam} \\implies C(5) = 100 \\cdot (0,5)^{1,25} \\approx 42,0\\text{ mg/L}$ (berada dalam rentang $20 \\le C \\le 80$ / Benar).',
      '• $t = 10\\text{ jam}$: karena pada $t = 9,29\\text{ jam}$ konsentrasi sudah turun menjadi $20\\text{ mg/L}$, maka untuk $t = 10, 15, 20\\text{ jam}$ konsentrasi berada di bawah $20\\text{ mg/L}$ (Salah).',
    ],
  },

  // =========================================================================
  // 31. Fungsi Eksponensial — Batas Efektivitas Obat (MIC / KHM)
  // =========================================================================
  {
    id: 'siaga2-q31',
    number: 31,
    packageId: 'siaga-2',
    topic: 'Fungsi Eksponensial',
    subtopic: 'Waktu Paruh & Konsentrasi Hambat Minimum (MIC)',
    type: 'single',
    svgType: 'antibiotic_decay',
    stimulus:
      'Pada grafik eliminasi antibiotik $C(t) = 100 \\cdot \\left(\\frac{1}{2}\\right)^{t/4}$, garis putus-putus hijau menunjukkan batas MIC / KHM (Konsentrasi Hambat Minimum) sebesar $12,5\\text{ mg/L}$.',
    questionText:
      'Waktu paruh obat ($T_{1/2}$) serta waktu maksimal obat masih efektif bekerja di atas ambang MIC ($12,5\\text{ mg/L}$) sebelum pasien harus meminum dosis berikutnya adalah ....',
    options: [
      { id: 'A', text: '$T_{1/2} = 4\\text{ jam} \\text{ dan waktu efektif } 12\\text{ jam}$' },
      { id: 'B', text: '$T_{1/2} = 4\\text{ jam} \\text{ dan waktu efektif } 8\\text{ jam}$' },
      { id: 'C', text: '$T_{1/2} = 8\\text{ jam} \\text{ dan waktu efektif } 12\\text{ jam}$' },
      { id: 'D', text: '$T_{1/2} = 4\\text{ jam} \\text{ dan waktu efektif } 16\\text{ jam}$' },
      { id: 'E', text: '$T_{1/2} = 6\\text{ jam} \\text{ dan waktu efektif } 12\\text{ jam}$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Waktu paruh ($T_{1/2}$) adalah waktu yang dibutuhkan agar konsentrasi obat berkurang menjadi setengah konsentrasi awal ($100 \\to 50\\text{ mg/L}$), yaitu $4\\text{ jam}$.',
      'Ambang MIC sebesar $12,5\\text{ mg/L}$ tercapai ketika:',
      '$$100 \\cdot \\left(\\frac{1}{2}\\right)^{t/4} = 12,5 \\implies \\left(\\frac{1}{2}\\right)^{t/4} = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$$',
      '$$\\frac{t}{4} = 3 \\implies t = 12\\text{ jam}$$',
    ],
  },

  // =========================================================================
  // 32. Limit Fungsi Aljabar — Substitusi Langsung x -> 2
  // =========================================================================
  {
    id: 'siaga2-q32',
    number: 32,
    packageId: 'siaga-2',
    topic: 'Limit Fungsi',
    subtopic: 'Limit Fungsi Aljabar',
    type: 'single',
    questionText:
      'Nilai dari $\\lim_{x \\to 2} \\frac{x^2 - 3x + 5}{2x^3 + x^2 + x - 2}$ adalah ....',
    options: [
      { id: 'A', text: '$\\frac{3}{20}$' },
      { id: 'B', text: '$\\frac{4}{20}$' },
      { id: 'C', text: '$\\frac{5}{20}$' },
      { id: 'D', text: '$\\frac{3}{22}$' },
      { id: 'E', text: '$\\frac{5}{22}$' },
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Substitusikan langsung $x = 2$ ke pembilang dan penyebut:',
      '$$\\text{Pembilang} = 2^2 - 3(2) + 5 = 4 - 6 + 5 = 3$$',
      '$$\\text{Penyebut} = 2(2)^3 + 2^2 + 2 - 2 = 2(8) + 4 + 0 = 20$$',
      'Karena penyebut tidak nol ($20 \\neq 0$), maka nilai limitnya adalah $\\frac{3}{20}$.',
    ],
  },

  // =========================================================================
  // 33. Polinomial — Hasil Bagi dan Sisa Pembagian Suku Banyak
  // =========================================================================
  {
    id: 'siaga2-q33',
    number: 33,
    packageId: 'siaga-2',
    topic: 'Polinomial',
    subtopic: 'Pembagian Suku Banyak (Metode Horner)',
    type: 'single',
    questionText:
      'Hasil bagi dan sisa pembagian suku banyak $3x^3 - 5x^2 - 10$ apabila dibagi oleh $(x - 4)$ berturut-turut adalah ....',
    options: [
      { id: 'A', text: '$3x^2 + 8x + 6 \\text{ dan } 22$' },
      { id: 'B', text: '$3x^2 + 6x + 8 \\text{ dan } 22$' },
      { id: 'C', text: '$3x^2 + 8x + 27 \\text{ dan } 102$' },
      { id: 'D', text: '$3x^2 + 7x + 28 \\text{ dan } 102$' },
      { id: 'E', text: '$3x^2 - 7x + 28 \\text{ dan } 102$' },
    ],
    correctAnswer: 'D',
    solutionSteps: [
      'Tuliskan suku banyak secara lengkap dengan koefisien $x^1 = 0$: $P(x) = 3x^3 - 5x^2 + 0x - 10$.',
      'Gunakan metode Horner dengan pembagi $x = 4$ pada koefisien $[3, -5, 0, -10]$:',
      '• Koefisien $x^2$: turunkan $3$.',
      '• Koefisien $x^1$: $3 \\times 4 + (-5) = 12 - 5 = 7$.',
      '• Konstanta hasil bagi: $7 \\times 4 + 0 = 28$.',
      '• Sisa pembagian: $28 \\times 4 + (-10) = 112 - 10 = 102$.',
      'Jadi, hasil baginya adalah $3x^2 + 7x + 28$ dan sisanya adalah $102$.',
    ],
  },
];
