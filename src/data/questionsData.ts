import { QuestionItem } from '../types/question';

export const questionsData: QuestionItem[] = [
  {
    id: 1,
    topic: 'Aljabar Vektor Dimensi Tiga',
    type: 'multiple-choice',
    storyContext:
      'Diberikan tiga vektor kolom $\\vec{u}, \\vec{v}, \\vec{w} \\in \\mathbb{R}^3$ yang saling berhubungan melalui suatu kombinasi linear.',
    questionText:
      'Diketahui vektor $\\vec{u} = \\begin{pmatrix} p \\\\ 2 \\\\ -1 \\end{pmatrix}$, $\\vec{v} = \\begin{pmatrix} 4 \\\\ 3 \\\\ q \\end{pmatrix}$, dan $\\vec{w} = \\begin{pmatrix} -1 \\\\ 1 \\\\ r \\end{pmatrix}$. Jika berlaku relasi vektor:\n$$2\\vec{u} - \\vec{v} + 3\\vec{w} = \\begin{pmatrix} -5 \\\\ 4 \\\\ 1 \\end{pmatrix}$$\nmaka nilai dari $p + q + r$ adalah ....',
    visualId: 'soal-1',
    options: [
      { key: 'A', text: '$4$' },
      { key: 'B', text: '$5$' },
      { key: 'C', text: '$6$' },
      { key: 'D', text: '$7$' },
      { key: 'E', text: '$8$' },
    ],
    solution: {
      answerSummary: 'C. $6$',
      correctOptionKey: 'C',
      steps: [
        'Jabarkan persamaan kombinasi linear vektor baris demi baris:\n$$2\\begin{pmatrix} p \\\\ 2 \\\\ -1 \\end{pmatrix} - \\begin{pmatrix} 4 \\\\ 3 \\\\ q \\end{pmatrix} + 3\\begin{pmatrix} -1 \\\\ 1 \\\\ r \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ 4 \\\\ 1 \\end{pmatrix}$$',
        '**Baris Pertama (komponen x):**\n$$\\begin{aligned} 2p - 4 + 3(-1) &= -5 \\\\ 2p - 7 &= -5 \\\\ 2p &= 2 \\implies p = 1 \\end{aligned}$$',
        '**Baris Kedua (komponen y):**\n$$2(2) - 3 + 3(1) = 4 - 3 + 3 = 4 \\quad \\text{(identik/konsisten)}$$',
        '**Baris Ketiga (komponen z):**\n$$\\begin{aligned} 2(-1) - q + 3r &= 1 \\\\ -2 - q + 3r &= 1 \\\\ 3r - q &= 3 \\end{aligned}$$\nUntuk pasangan bilangan bulat $r = 2$ diperoleh $q = 3$.',
        'Hitung jumlah $p + q + r$:\n$$p + q + r = 1 + 3 + 2 = 6$$',
      ],
    },
  },
  {
    id: 2,
    topic: 'Panjang (Magnitudo) Vektor di Ruang Tiga Dimensi',
    type: 'multiple-choice',
    storyContext:
      'Panjang suatu vektor $\\vec{v} = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$ didefinisikan sebagai $|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}$.',
    questionText:
      'Diketahui vektor $\\vec{v} = \\begin{pmatrix} t \\\\ -1 \\\\ 8 \\end{pmatrix}$ berada di ruang $\\mathbb{R}^3$ dengan syarat nilai $t < 0$. Jika panjang vektor $|\\vec{v}| = 9$, maka nilai $t$ adalah ....',
    options: [
      { key: 'A', text: '$-1$' },
      { key: 'B', text: '$-2$' },
      { key: 'C', text: '$-3$' },
      { key: 'D', text: '$-4$' },
      { key: 'E', text: '$-5$' },
    ],
    solution: {
      answerSummary: 'D. $-4$',
      correctOptionKey: 'D',
      steps: [
        'Gunakan rumus magnitudo vektor di $\\mathbb{R}^3$:\n$$|\\vec{v}| = \\sqrt{t^2 + (-1)^2 + 8^2} = 9$$',
        'Kuadratkan kedua ruas persamaan:\n$$\\begin{aligned} t^2 + 1 + 64 &= 9^2 \\\\ t^2 + 65 &= 81 \\\\ t^2 &= 81 - 65 \\\\ t^2 &= 16 \\end{aligned}$$',
        'Ambil akar kuadrat dengan memperhatikan syarat $t < 0$:\n$$t = \\pm \\sqrt{16} = \\pm 4$$\nKarena disyaratkan $t < 0$, maka nilai $t$ yang memenuhi adalah $t = -4$.',
      ],
    },
  },
  {
    id: 3,
    topic: 'Limit Fungsi Trigonometri Dasar',
    type: 'multiple-choice',
    storyContext:
      'Penyelesaian limit bentuk tak tentu trigonometri menggunakan identitas Pythagoras $\\cos^2 x = 1 - \\sin^2 x$.',
    questionText:
      'Nilai dari limit trigonometri:\n$$\\lim_{x \\to \\frac{\\pi}{2}} \\frac{4\\cos^2 x}{\\sin x - 1}$$\nadalah ....',
    options: [
      { key: 'A', text: '$-4$' },
      { key: 'B', text: '$-5$' },
      { key: 'C', text: '$-6$' },
      { key: 'D', text: '$-7$' },
      { key: 'E', text: '$-8$' },
    ],
    solution: {
      answerSummary: 'E. $-8$',
      correctOptionKey: 'E',
      steps: [
        'Substitusi langsung menghasilkan bentuk tak tentu $\\frac{4\\cos^2(\\pi/2)}{\\sin(\\pi/2) - 1} = \\frac{4(0)}{1 - 1} = \\frac{0}{0}$.',
        'Ubah $\\cos^2 x$ menggunakan identitas trigonometri $\\cos^2 x = 1 - \\sin^2 x$:\n$$\\cos^2 x = (1 - \\sin x)(1 + \\sin x) = -(\\sin x - 1)(1 + \\sin x)$$',
        'Faktorkan dan sederhanakan pecahan limit:\n$$\\lim_{x \\to \\frac{\\pi}{2}} \\frac{-4(\\sin x - 1)(1 + \\sin x)}{\\sin x - 1} = \\lim_{x \\to \\frac{\\pi}{2}} -4(1 + \\sin x)$$',
        'Substitusikan $x = \\frac{\\pi}{2}$:\n$$-4(1 + \\sin(\\pi/2)) = -4(1 + 1) = -4(2) = -8$$',
      ],
    },
  },
  {
    id: 4,
    topic: 'Limit Fungsi Trigonometri Bentuk Tak Tentu Sudut Ganda',
    type: 'multiple-choice',
    storyContext:
      'Identitas sudut ganda cosinus menyatakan bahwa $1 - \\cos(2\\theta) = 2\\sin^2(\\theta)$.',
    questionText:
      'Nilai dari limit:\n$$\\lim_{x \\to 3} \\frac{3(1 - \\cos(2x - 6))}{(x - 3)^2}$$\nadalah ....',
    options: [
      { key: 'A', text: '$2$' },
      { key: 'B', text: '$3$' },
      { key: 'C', text: '$4$' },
      { key: 'D', text: '$5$' },
      { key: 'E', text: '$6$' },
    ],
    solution: {
      answerSummary: 'E. $6$',
      correctOptionKey: 'E',
      steps: [
        'Lakukan substitusi variabel $u = x - 3$. Saat $x \\to 3$, maka $u \\to 0$.\nBentuk $2x - 6 = 2(x - 3) = 2u$.',
        'Gunakan identitas $1 - \\cos(2u) = 2\\sin^2(u)$:\n$$\\lim_{u \\to 0} \\frac{3 \\cdot 2\\sin^2(u)}{u^2} = 6 \\lim_{u \\to 0} \\left(\\frac{\\sin u}{u}\\right)^2$$',
        'Karena $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$, maka diperoleh:\n$$6 \\times (1)^2 = 6$$',
      ],
    },
  },
  {
    id: 5,
    topic: 'Pemodelan Fungsi Polinomial Keuntungan Perusahaan',
    type: 'multiple-choice',
    storyContext:
      'Sebuah perusahaan memiliki dua bidang usaha. Bidang A bergerak di sektor manufaktur, sedangkan bidang B bergerak di sektor distribusi. Keuntungan bulanan dari masing-masing bidang usaha (dalam juta rupiah) dimodelkan oleh fungsi:\n$$A(x) = 3x^3 + 5x^2 - 12x + 150$$\ndan\n$$B(x) = x^3 - 2x^2 + 20x + 50$$\ndengan $x$ menyatakan lama beroperasi bidang usaha dalam satuan bulan.',
    questionText:
      'Manajemen perusahaan ingin mengetahui total keuntungan yang diperoleh dari kedua bidang usaha tersebut. Keuntungan perusahaan tersebut pada bulan ketiga ($x = 3$) adalah ....',
    visualId: 'soal-5',
    options: [
      { key: 'A', text: '$\\text{Rp}320.000.000,00$' },
      { key: 'B', text: '$\\text{Rp}340.000.000,00$' },
      { key: 'C', text: '$\\text{Rp}359.000.000,00$' },
      { key: 'D', text: '$\\text{Rp}375.000.000,00$' },
      { key: 'E', text: '$\\text{Rp}390.000.000,00$' },
    ],
    solution: {
      answerSummary: 'C. $\\text{Rp}359.000.000,00$',
      correctOptionKey: 'C',
      steps: [
        'Bentuk fungsi total keuntungan $T(x) = A(x) + B(x)$:\n$$\\begin{aligned} T(x) &= (3x^3 + 5x^2 - 12x + 150) + (x^3 - 2x^2 + 20x + 50) \\\\ &= (3+1)x^3 + (5-2)x^2 + (-12+20)x + (150+50) \\\\ &= 4x^3 + 3x^2 + 8x + 200 \\end{aligned}$$',
        'Substitusikan nilai bulan ketiga ($x = 3$):\n$$\\begin{aligned} T(3) &= 4(3)^3 + 3(3)^2 + 8(3) + 200 \\\\ &= 4(27) + 3(9) + 24 + 200 \\\\ &= 108 + 27 + 24 + 200 \\\\ &= 359\\text{ juta rupiah} \\end{aligned}$$',
        'Konversikan satuan juta rupiah menjadi nominal penuh:\n$$\\text{Rp}359.000.000,00$$',
      ],
    },
  },
  {
    id: 6,
    topic: 'Analisis Interval Keuntungan Fungsi Polinomial Derajat Tiga',
    type: 'multiple-choice',
    storyContext:
      'Suatu perusahaan transportasi memodelkan keuntungan usahanya (dalam jutaan rupiah) menggunakan fungsi polinomial:\n$$f(x) = x^3 - 6x^2 + 11x - 6$$\ndengan $x$ menyatakan waktu operasional dalam bulan.',
    questionText:
      'Pihak manajemen perusahaan ingin mengamati pergerakan keuntungan pada periode bulan ke-2 hingga bulan ke-5 ($2 \\le x \\le 5$). Pada interval manakah perusahaan mendapatkan keuntungan ($f(x) > 0$)?',
    visualId: 'soal-6',
    options: [
      { key: 'A', text: '$2 < x < 2,5$' },
      { key: 'B', text: '$2 < x < 3$' },
      { key: 'C', text: '$2,5 < x < 3$' },
      { key: 'D', text: '$3 < x \\le 5$' },
      { key: 'E', text: '$2 \\le x \\le 3$' },
    ],
    solution: {
      answerSummary: 'D. $3 < x \\le 5$',
      correctOptionKey: 'D',
      steps: [
        'Perusahaan memperoleh keuntungan jika fungsi keuntungan bernilai positif: $f(x) > 0$.',
        'Faktorkan polinomial $x^3 - 6x^2 + 11x - 6 = 0$:\nDengan mencoba akar rasional bulat $x = 1, 2, 3$, diperoleh:\n$$f(x) = (x - 1)(x - 2)(x - 3)$$',
        'Analisis tanda pada garis bilangan untuk $x \\ge 2$:\n- Untuk $2 < x < 3$: $(+) \\times (+) \\times (-) < 0$ (perusahaan mengalami kerugian/defisit).\n- Untuk $x > 3$: $(+) \\times (+) \\times (+) > 0$ (perusahaan mendapatkan keuntungan).',
        'Oleh karena itu, pada domain pengamatan bulan ke-2 hingga bulan ke-5 ($2 \\le x \\le 5$), keuntungan diperoleh pada interval $3 < x \\le 5$.',
      ],
    },
  },
  {
    id: 7,
    topic: 'Titik Impas (Break-Even Point) Penjualan Barang',
    type: 'multiple-choice',
    storyContext:
      'Sebuah perusahaan memproduksi dan menjual barang. Pendapatan perusahaan (dalam juta rupiah) dinyatakan oleh $f(x) = 2x^3 + 2x^2 + 40x$, sedangkan modal produksi (dalam juta rupiah) dinyatakan oleh $c(x) = x^3 + 6x^2 + 15x + 150$, dengan $x$ adalah jumlah barang yang dijual dalam satuan ratus unit.',
    questionText:
      'Penjualan minimal agar perusahaan tersebut tidak mengalami kerugian adalah ....',
    visualId: 'soal-7',
    options: [
      { key: 'A', text: '$300\\text{ unit}$' },
      { key: 'B', text: '$400\\text{ unit}$' },
      { key: 'C', text: '$500\\text{ unit}$' },
      { key: 'D', text: '$600\\text{ unit}$' },
      { key: 'E', text: '$700\\text{ unit}$' },
    ],
    solution: {
      answerSummary: 'C. $500\\text{ unit}$',
      correctOptionKey: 'C',
      steps: [
        'Agar perusahaan tidak merugi, pendapatan harus lebih besar atau sama dengan modal produksi:\n$$Laba(x) = f(x) - c(x) \\ge 0$$',
        'Hitung fungsi keuntungan:\n$$\\begin{aligned} Laba(x) &= (2x^3 + 2x^2 + 40x) - (x^3 + 6x^2 + 15x + 150) \\\\ &= x^3 - 4x^2 + 25x - 150 \\ge 0 \\end{aligned}$$',
        'Cari pembuat nol persamaan $x^3 - 4x^2 + 25x - 150 = 0$.\nUji nilai $x = 5$:\n$$5^3 - 4(5^2) + 25(5) - 150 = 125 - 100 + 125 - 150 = 0$$',
        'Faktorkan menjadi $(x - 5)(x^2 + x + 30) \\ge 0$.\nKarena $x^2 + x + 30$ definit positif ($D = 1 - 120 < 0$), maka syarat terpenuhi saat $x \\ge 5$.',
        'Karena satuan $x$ adalah ratus unit, maka penjualan minimal adalah:\n$$5 \\times 100 = 500\\text{ unit}$$',
      ],
    },
  },
  {
    id: 8,
    topic: 'Akar Pembuat Nol Suku Banyak (Pilihan Ganda Kompleks)',
    type: 'complex-multiple-choice',
    storyContext:
      'Diberikan suku banyak berderajat tiga $g(x) = x^3 + 16x^2 + 83x + 140$. Persamaan pembuat nol $g(x) = 0$ memiliki akar-akar real bulat.',
    questionText:
      'Tentukan semua pernyataan berikut yang benar mengenai akar-akar pembuat nol dari fungsi $g(x)$! (Jawaban benar lebih dari satu)',
    checkboxOptions: [
      'Nilai $x$ yang memenuhi adalah $-7$',
      'Nilai $x$ yang memenuhi adalah $-6$',
      'Nilai $x$ yang memenuhi adalah $-5$',
      'Nilai $x$ yang memenuhi adalah $-4$',
    ],
    solution: {
      answerSummary: 'Pernyataan 1, 3, dan 4 Benar ($-7, -5, -4$)',
      correctCheckboxIndices: [0, 2, 3],
      steps: [
        'Faktor dari konstanta $140$ meliputi $\\pm 1, \\pm 2, \\pm 4, \\pm 5, \\pm 7, \\dots$',
        'Uji nilai $x = -4$ menggunakan skema substitusi/Horner:\n$$(-4)^3 + 16(-4)^2 + 83(-4) + 140 = -64 + 256 - 332 + 140 = 0$$',
        'Bagi suku banyak dengan $(x + 4)$:\n$$\\frac{x^3 + 16x^2 + 83x + 140}{x + 4} = x^2 + 12x + 35$$',
        'Faktorkan kuadrat tersebut:\n$$x^2 + 12x + 35 = (x + 5)(x + 7)$$',
        'Diperoleh tiga akar pembuat nol real, yaitu $x = -4$, $x = -5$, dan $x = -7$.',
      ],
    },
  },
  {
    id: 9,
    topic: 'Sistem Persamaan Matriks Belanja Koperasi Sekolah (Hari Rabu)',
    type: 'multiple-choice',
    storyContext:
      'Di sebuah sekolah, terdapat dua kelompok siswa yang aktif berbelanja di koperasi, yaitu anggota dan nonanggota. Diketahui harga buku tulis adalah $\\text{Rp}4.000,00$ untuk anggota dan $\\text{Rp}5.000,00$ untuk nonanggota; harga pena adalah $\\text{Rp}2.000,00$ untuk anggota dan $\\text{Rp}3.000,00$ untuk nonanggota.',
    questionText:
      'Pada hari Rabu, kelompok anggota membeli buku tulis ($x$) dan pena ($y$) dengan total pembayaran $56$ ribu rupiah, sedangkan nonanggota membeli dengan total pembayaran $79$ ribu rupiah. Nilai banyak buku tulis ($x$) dan pena ($y$) yang dibeli adalah ....',
    options: [
      { key: 'A', text: '$x = 5\\text{ buah dan } y = 18\\text{ buah}$' },
      { key: 'B', text: '$x = 6\\text{ buah dan } y = 16\\text{ buah}$' },
      { key: 'C', text: '$x = 7\\text{ buah dan } y = 14\\text{ buah}$' },
      { key: 'D', text: '$x = 8\\text{ buah dan } y = 12\\text{ buah}$' },
      { key: 'E', text: '$x = 10\\text{ buah dan } y = 8\\text{ buah}$' },
    ],
    solution: {
      answerSummary: 'A. $x = 5\\text{ buah dan } y = 18\\text{ buah}$',
      correctOptionKey: 'A',
      steps: [
        'Susun sistem persamaan linear (dalam ribuan rupiah):\n(1) Kelompok Anggota: $4x + 2y = 56 \\implies 2x + y = 28 \\implies y = 28 - 2x$\n(2) Kelompok Nonanggota: $5x + 3y = 79$',
        'Substitusikan nilai $y$ ke persamaan (2):\n$$\\begin{aligned} 5x + 3(28 - 2x) &= 79 \\\\ 5x + 84 - 6x &= 79 \\\\ -x &= 79 - 84 = -5 \\implies x = 5 \\end{aligned}$$',
        'Hitung nilai $y$:\n$$y = 28 - 2(5) = 28 - 10 = 18$$',
        'Jadi, buku tulis yang terjual sebanyak $5$ buah dan pena sebanyak $18$ buah.',
      ],
    },
  },
  {
    id: 10,
    topic: 'Perkalian Matriks Pendapatan Koperasi Sekolah (Hari Senin)',
    type: 'multiple-choice',
    storyContext:
      'Berdasarkan data penjualan hari Senin:\n- Kelompok Anggota membeli 12 buku tulis (harga $\\text{Rp}4.000,00$) dan 10 pena (harga $\\text{Rp}2.000,00$).\n- Kelompok Nonanggota membeli 15 buku tulis (harga $\\text{Rp}5.000,00$) dan 11 pena (harga $\\text{Rp}3.000,00$).',
    questionText:
      'Pendapatan total koperasi sekolah dari penjualan buku tulis dan pena pada hari Senin dari kedua kelompok tersebut adalah ....',
    options: [
      { key: 'A', text: '$\\text{Rp}156.000,00$' },
      { key: 'B', text: '$\\text{Rp}164.000,00$' },
      { key: 'C', text: '$\\text{Rp}176.000,00$' },
      { key: 'D', text: '$\\text{Rp}188.000,00$' },
      { key: 'E', text: '$\\text{Rp}192.000,00$' },
    ],
    solution: {
      answerSummary: 'C. $\\text{Rp}176.000,00$',
      correctOptionKey: 'C',
      steps: [
        'Hitung penerimaan dari kelompok anggota:\n$$P_{\\text{anggota}} = (12 \\times 4.000) + (10 \\times 2.000) = 48.000 + 20.000 = \\text{Rp}68.000,00$$',
        'Hitung penerimaan dari kelompok nonanggota:\n$$P_{\\text{non}} = (15 \\times 5.000) + (11 \\times 3.000) = 75.000 + 33.000 = \\text{Rp}108.000,00$$',
        'Jumlahkan total pendapatan koperasi:\n$$\\text{Total} = 68.000 + 108.000 = \\text{Rp}176.000,00$$',
      ],
    },
  },
  {
    id: 11,
    topic: 'Evaluasi Transaksi Hari Jumat Diskon Koperasi (Benar/Salah)',
    type: 'true-false-table',
    storyContext:
      'Pada hari Jumat diberikan diskon sebesar 10% untuk anggota koperasi (harga buku tulis menjadi $\\text{Rp}3.600,00$ dan pena menjadi $\\text{Rp}1.800,00$). Kelompok anggota membeli buku tulis dan pena dengan total pembayaran 72 ribu rupiah, sedangkan kelompok nonanggota (tanpa diskon: buku $\\text{Rp}5.000,00$ dan pena $\\text{Rp}3.000,00$) membayar total 110 ribu rupiah.',
    questionText:
      'Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Banyak buku tulis yang terjual sebanyak 10 buah.',
      'Banyak pena yang terjual sebanyak 20 buah.',
      'Selisih buku tulis dan pena yang terjual pada hari Jumat adalah 10 buah.',
    ],
    solution: {
      answerSummary: 'Semua Pernyataan Benar',
      correctTrueFalse: {
        0: 'Benar',
        1: 'Benar',
        2: 'Benar',
      },
      steps: [
        'Bentuk persamaan transaksi (dalam ribuan rupiah):\n(1) Anggota: $3,6x + 1,8y = 72 \\implies 2x + y = 40 \\implies y = 40 - 2x$\n(2) Nonanggota: $5x + 3y = 110$',
        'Substitusi $y$ ke persamaan nonanggota:\n$$5x + 3(40 - 2x) = 110 \\implies 5x + 120 - 6x = 110 \\implies -x = -10 \\implies x = 10$$',
        'Hitung $y$:\n$$y = 40 - 2(10) = 20$$',
        'Selisih banyak pena dan buku tulis: $20 - 10 = 10$ buah. Oleh karena itu, ketiga pernyataan bernilai BENAR.',
      ],
    },
  },
  {
    id: 12,
    topic: 'Pemodelan Matriks Diskon Belanja Koperasi',
    type: 'multiple-choice',
    storyContext:
      'Berdasarkan transaksi belanja koperasi pada hari Jumat dengan tarif diskon 10% bagi anggota (buku $\\text{Rp}3.600,00$, pena $\\text{Rp}1.800,00$, total 72 ribu rupiah) dan nonanggota tarif normal (buku $\\text{Rp}5.000,00$, pena $\\text{Rp}3.000,00$, total 110 ribu rupiah).',
    questionText:
      'Persamaan matriks yang menyatakan hubungan kuantitas barang yang dibeli ($x$ dan $y$) terhadap total pembayaran adalah ....',
    options: [
      {
        key: 'A',
        text: '$\\begin{pmatrix} 3,6 & 1,8 \\\\ 5 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 72 \\\\ 110 \\end{pmatrix}$',
      },
      {
        key: 'B',
        text: '$\\begin{pmatrix} 4 & 2 \\\\ 5 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 72 \\\\ 110 \\end{pmatrix}$',
      },
      {
        key: 'C',
        text: '$\\begin{pmatrix} 5 & 3 \\\\ 3,6 & 1,8 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 72 \\\\ 110 \\end{pmatrix}$',
      },
      {
        key: 'D',
        text: '$\\begin{pmatrix} 3,6 & 5 \\\\ 1,8 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 72 \\\\ 110 \\end{pmatrix}$',
      },
      {
        key: 'E',
        text: '$\\begin{pmatrix} 1,8 & 3,6 \\\\ 3 & 5 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 72 \\\\ 110 \\end{pmatrix}$',
      },
    ],
    solution: {
      answerSummary: 'A. Matriks koefisien baris 1 [3,6  1,8] dan baris 2 [5  3]',
      correctOptionKey: 'A',
      steps: [
        'Baris pertama menyatakan total pembayaran anggota: $3,6x + 1,8y = 72$.',
        'Baris kedua menyatakan total pembayaran nonanggota: $5x + 3y = 110$.',
        'Dalam bentuk perkalian matriks $AX = B$, matriks koefisien adalah $\\begin{pmatrix} 3,6 & 1,8 \\\\ 5 & 3 \\end{pmatrix}$ dikalikan vektor variabel $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ menghasilkan $\\begin{pmatrix} 72 \\\\ 110 \\end{pmatrix}$.',
      ],
    },
  },
  {
    id: 13,
    topic: 'Pemodelan Matriks Tarif Jasa Laundry',
    type: 'multiple-choice',
    storyContext:
      'Sebuah usaha laundry menyediakan dua jenis layanan, yaitu laundry reguler ($x$ per kg) dan laundry ekspres ($y$ per kg). Pada suatu hari:\n- Pak Yana mencuci 3 kg pakaian reguler dan 2 kg pakaian ekspres dengan total biaya $\\text{Rp}34.000,00$.\n- Bu Mail mencuci 5 kg pakaian reguler dan 3 kg pakaian ekspres dengan total biaya $\\text{Rp}53.000,00$.',
    questionText:
      'Bentuk persamaan matriks yang tepat untuk memodelkan permasalahan tarif laundry tersebut adalah ....',
    options: [
      {
        key: 'A',
        text: '$\\begin{pmatrix} 3 & 2 \\\\ 5 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$',
      },
      {
        key: 'B',
        text: '$\\begin{pmatrix} 3 & 5 \\\\ 2 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$',
      },
      {
        key: 'C',
        text: '$\\begin{pmatrix} 2 & 3 \\\\ 3 & 5 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$',
      },
      {
        key: 'D',
        text: '$\\begin{pmatrix} 3 & -2 \\\\ -5 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$',
      },
      {
        key: 'E',
        text: '$\\begin{pmatrix} 5 & 3 \\\\ 3 & 2 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$',
      },
    ],
    solution: {
      answerSummary: 'A. Matriks koefisien baris 1 [3  2] dan baris 2 [5  3]',
      correctOptionKey: 'A',
      steps: [
        'Transaksi Pak Yana: $3x + 2y = 34.000$.',
        'Transaksi Bu Mail: $5x + 3y = 53.000$.',
        'Mengubah sistem persamaan linear menjadi perkalian matriks:\n$$\\begin{pmatrix} 3 & 2 \\\\ 5 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$$',
      ],
    },
  },
  {
    id: 14,
    topic: 'Analisis Kesalahan Invers Matriks Sistem Linear',
    type: 'multiple-choice',
    storyContext:
      'Pemilik laundry memodelkan permasalahan ke dalam bentuk matriks $\\begin{pmatrix} 3 & 2 \\\\ 5 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$, kemudian mencari solusi variabel menggunakan metode invers dengan menuliskan:\n$$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 3 & -2 \\\\ -5 & 3 \\end{pmatrix} \\begin{pmatrix} 34.000 \\\\ 53.000 \\end{pmatrix}$$',
    questionText:
      'Namun, terdapat kesalahan prinsipil pada langkah penyelesaian invers matriks tersebut. Bagian yang salah dari operasi matriks tersebut adalah ....',
    options: [
      {
        key: 'A',
        text: 'Matriks adjoin belum dikalikan dengan faktor skala $\\frac{1}{\\det A}$ (determinan matriks koefisien bernilai $-1$)',
      },
      {
        key: 'B',
        text: 'Posisi pertukaran elemen diagonal utama pada matriks invers tidak tepat',
      },
      {
        key: 'C',
        text: 'Tanda elemen pada diagonal samping seharusnya tetap bernilai positif',
      },
      {
        key: 'D',
        text: 'Matriks kolom konstanta tidak boleh diletakkan di sebelah kanan adjoin',
      },
      {
        key: 'E',
        text: 'Ordo matriks koefisien tidak memenuhi syarat untuk operasi perkalian',
      },
    ],
    solution: {
      answerSummary: 'A. Lupa mengalikan dengan faktor determinan 1/det(A) = -1',
      correctOptionKey: 'A',
      steps: [
        'Rumus umum invers matriks $2 \\times 2$ adalah:\n$$A^{-1} = \\frac{1}{\\det A} \\text{adj}(A) = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$',
        'Hitung determinan matriks $A = \\begin{pmatrix} 3 & 2 \\\\ 5 & 3 \\end{pmatrix}$:\n$$\\det A = (3)(3) - (2)(5) = 9 - 10 = -1$$',
        'Matriks adjoin adalah $\\text{adj}(A) = \\begin{pmatrix} 3 & -2 \\\\ -5 & 3 \\end{pmatrix}$.',
        'Maka invers yang benar seharusnya:\n$$A^{-1} = \\frac{1}{-1} \\begin{pmatrix} 3 & -2 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} -3 & 2 \\\\ 5 & -3 \\end{pmatrix}$$',
        'Langkah yang dituliskan salah karena langsung memakai matriks adjoin tanpa membaginya dengan $\\det A = -1$.',
      ],
    },
  },
  {
    id: 15,
    topic: 'Persamaan Lingkaran Pusat (a, b) dan Jari-Jari r',
    type: 'multiple-choice',
    storyContext:
      'Bentuk umum persamaan lingkaran dengan titik pusat $(a, b)$ dan jari-jari $r$ adalah $(x - a)^2 + (y - b)^2 = r^2$.',
    questionText:
      'Persamaan lingkaran yang berpusat di titik $(3, 5)$ dan memiliki panjang jari-jari $r = 5$ satuan panjang adalah ....',
    visualId: 'soal-15',
    options: [
      { key: 'A', text: '$x^2 + y^2 - 6x - 10y + 9 = 0$' },
      { key: 'B', text: '$x^2 + y^2 - 6x - 10y + 10 = 0$' },
      { key: 'C', text: '$x^2 + y^2 - 6x - 10y + 11 = 0$' },
      { key: 'D', text: '$x^2 + y^2 + 6x + 10y + 9 = 0$' },
      { key: 'E', text: '$x^2 + y^2 - 6x - 10y + 25 = 0$' },
    ],
    solution: {
      answerSummary: 'A. $x^2 + y^2 - 6x - 10y + 9 = 0$',
      correctOptionKey: 'A',
      steps: [
        'Gunakan persamaan baku lingkaran berpusat di $(a, b) = (3, 5)$ dengan $r = 5$:\n$$(x - 3)^2 + (y - 5)^2 = 5^2$$',
        'Jabarkan bentuk kuadrat binomial:\n$$(x^2 - 6x + 9) + (y^2 - 10y + 25) = 25$$',
        'Sederhanakan konstanta pada kedua ruas:\n$$x^2 + y^2 - 6x - 10y + 9 = 0$$',
      ],
    },
  },
  {
    id: 16,
    topic: 'Geometri Juring Setengah Lingkaran (Benar/Salah)',
    type: 'true-false-table',
    storyContext:
      'Sebuah bangun datar berbentuk juring setengah lingkaran berpusat di titik asal $O$ dengan panjang jari-jari $r$. Terdapat segitiga samakaki $DOC$ dengan titik $C$ dan $D$ terletak pada busur lingkaran $AB$, serta sudut pusat $\\angle DOC = \\theta$.',
    questionText:
      'Berilah penilaian "Benar" atau "Salah" pada setiap pernyataan berikut berdasarkan informasi geometri tersebut!',
    visualId: 'soal-16',
    statements: [
      'Luas segitiga DOC dinyatakan oleh rumus $L = \\frac{1}{2} r^2 \\sin \\theta$.',
      'Luas segitiga DOC mencapai nilai maksimum ketika $\\theta = 90^\\circ$.',
      'Panjang tali busur CD dinyatakan oleh $2r \\sin\\left(\\frac{\\theta}{2}\\right)$.',
    ],
    solution: {
      answerSummary: 'Semua Pernyataan Benar',
      correctTrueFalse: {
        0: 'Benar',
        1: 'Benar',
        2: 'Benar',
      },
      steps: [
        'Segitiga $DOC$ memiliki dua sisi sama panjang yaitu panjang jari-jari $OD = OC = r$ dan sudut apit $\\theta$. Luas segitiga adalah $L = \\frac{1}{2} r \\cdot r \\sin\\theta = \\frac{1}{2} r^2 \\sin\\theta$. (Pernyataan 1 Benar)',
        'Fungsi sinus memiliki nilai maksimum $1$ yang tercapai saat $\\theta = 90^\\circ$. (Pernyataan 2 Benar)',
        'Tarik garis tinggi dari $O$ tegak lurus tali busur $CD$. Garis tinggi membagi sudut $\\theta$ menjadi dua sudut $\\frac{\\theta}{2}$ dan membagi $CD$ menjadi dua ruas sama panjang $r \\sin(\\theta/2)$, sehingga $CD = 2r\\sin(\\theta/2)$. (Pernyataan 3 Benar)',
      ],
    },
  },
  {
    id: 17,
    topic: 'Evaluasi Limit Trigonometri Terkait Sudut Geometri',
    type: 'multiple-choice',
    storyContext:
      'Pada konfigurasi juring lingkaran dengan sudut pusat $\\theta$, variabel sudut dihubungkan dalam evaluasi limit trigonometri fungsi sinus dan kosinus.',
    questionText:
      'Nilai dari ekspresi limit trigonometri:\n$$\\lim_{\\theta \\to \\frac{\\pi}{6}} \\frac{\\sin(2\\theta)}{\\cos(3\\theta)}$$\nadalah ....',
    options: [
      { key: 'A', text: '$-\\frac{1}{2}\\sqrt{3}$' },
      { key: 'B', text: '$-\\sqrt{3}$' },
      { key: 'C', text: '$0$' },
      { key: 'D', text: '$\\frac{1}{2}\\sqrt{3}$' },
      { key: 'E', text: '$\\text{Tidak Terdefinisi} / -\\infty$' },
    ],
    solution: {
      answerSummary: 'E. Tidak Terdefinisi / Menuju Tak Hingga',
      correctOptionKey: 'E',
      steps: [
        'Substitusi nilai $\\theta = \\frac{\\pi}{6} = 30^\\circ$ ke dalam pembilang:\n$$\\sin\\left(2 \\cdot \\frac{\\pi}{6}\\right) = \\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2} \\ne 0$$',
        'Substitusi nilai ke dalam penyebut:\n$$\\cos\\left(3 \\cdot \\frac{\\pi}{6}\\right) = \\cos\\left(\\frac{\\pi}{2}\\right) = 0$$',
        'Bentuk limit menghasilkan $\\frac{\\sqrt{3}/2}{0}$, yang menunjukkan nilai limit tidak terhingga (asimtot tegak) dan tidak terdefinisi pada bilangan real.',
      ],
    },
  },
  {
    id: 18,
    topic: 'Limit Aljabar Trigonometri Menuju Nol (Pilihan Ganda Kompleks)',
    type: 'complex-multiple-choice',
    storyContext:
      'Diberikan limit fungsi gabungan aljabar rasional dan trigonometri menuju nol.',
    questionText:
      'Diketahui limit:\n$$\\lim_{x \\to 0} \\frac{(x^2 - 8x)\\sin(mx)}{\\tan(nx)(2x^2 - 6x)} = 2$$\nPilihlah semua pasangan bilangan bulat positif $m$ dan $n$ yang memenuhi persamaan tersebut! (Jawaban benar lebih dari satu)',
    checkboxOptions: [
      '$m = 3$ dan $n = 2$',
      '$m = 2$ dan $n = 3$',
      '$m = 6$ dan $n = 4$',
      '$m = 9$ dan $n = 6$',
    ],
    solution: {
      answerSummary: 'Pernyataan 1, 3, dan 4 Benar (Rasio m/n = 3/2)',
      correctCheckboxIndices: [0, 2, 3],
      steps: [
        'Faktorkan variabel $x$ pada bagian aljabar:\n$$\\frac{x^2 - 8x}{2x^2 - 6x} = \\frac{x(x - 8)}{x(2x - 6)} = \\frac{x - 8}{2x - 6}$$',
        'Hitung nilai limit bagian aljabar saat $x \\to 0$:\n$$\\lim_{x \\to 0} \\frac{x - 8}{2x - 6} = \\frac{-8}{-6} = \\frac{4}{3}$$',
        'Hitung nilai limit bagian trigonometri:\n$$\\lim_{x \\to 0} \\frac{\\sin(mx)}{\\tan(nx)} = \\frac{m}{n}$$',
        'Gabungkan kedua hasil limit:\n$$\\frac{4}{3} \\cdot \\frac{m}{n} = 2 \\implies \\frac{m}{n} = \\frac{2 \\times 3}{4} = \\frac{6}{4} = \\frac{3}{2}$$',
        'Pasangan $(m, n)$ harus memiliki rasio $\\frac{m}{n} = \\frac{3}{2}$. Pilihan $(3, 2)$, $(6, 4)$, dan $(9, 6)$ semuanya bernilai $\\frac{3}{2}$.',
      ],
    },
  },
  {
    id: 19,
    topic: 'Fluktuasi Suhu Harian Sinusoidal (Pilihan Ganda Kompleks)',
    type: 'complex-multiple-choice',
    storyContext:
      'Perubahan suhu harian ($f$) dalam derajat Celsius di suatu kota terhadap waktu ($t$ dalam jam) dinyatakan dalam model sinusoidal:\n$$f(t) = 6\\sin(15^\\circ(t - 8)) + 26$$\ndengan pengamatan dimulai pukul 00.00 ($t = 0$) selama 24 jam.',
    questionText:
      'Pilih semua pernyataan berikut yang bernilai benar berdasarkan fungsi suhu harian tersebut! (Jawaban benar lebih dari satu)',
    visualId: 'soal-19',
    checkboxOptions: [
      'Suhu tertinggi di kota tersebut mencapai $32^\\circ\\text{C}$',
      'Suhu terendah di kota tersebut adalah $20^\\circ\\text{C}$',
      'Suhu tertinggi tercapai saat waktu menunjukkan pukul 14.00',
      'Suhu tertinggi tercapai saat waktu menunjukkan pukul 12.00',
    ],
    solution: {
      answerSummary: 'Pernyataan 1, 2, dan 3 Benar',
      correctCheckboxIndices: [0, 1, 2],
      steps: [
        'Model $f(t) = 6\\sin(\\theta) + 26$ memiliki amplitudo $6$ dan garis tengah $26^\\circ\\text{C}$.',
        'Suhu tertinggi tercapai saat $\\sin(15^\\circ(t - 8)) = 1$:\n$$f_{\\max} = 6(1) + 26 = 32^\\circ\\text{C}$$',
        'Waktu saat suhu maksimum:\n$$15^\\circ(t - 8) = 90^\\circ \\implies t - 8 = 6 \\implies t = 14\\text{ (pukul 14.00)}$$',
        'Suhu terendah tercapai saat $\\sin(15^\\circ(t - 8)) = -1$:\n$$f_{\\min} = 6(-1) + 26 = 20^\\circ\\text{C}$$',
      ],
    },
  },
  {
    id: 20,
    topic: 'Vektor Posisi dan Perbandingan Garis Lurus Lima Kota',
    type: 'multiple-choice',
    storyContext:
      'Sebuah rute perjalanan menghubungkan lima kota yang terletak pada satu garis lurus: Kota $A, B, C, D, E$. Koordinat Kota $A$ adalah $(230, 240)$ dan Kota $E$ adalah $(-70, -160)$. Seorang pelancong berkendara dengan kelajuan tetap dengan waktu tempuh:\n- Kota A ke B: 3 jam\n- Kota B ke C: 2 jam\n- Kota C ke D: 4 jam\n- Kota D ke E: 1 jam',
    questionText:
      'Berdasarkan perbandingan waktu dan jarak perjalanan lurus tersebut, koordinat Kota $B$ dan Kota $C$ berturut-turut adalah ....',
    visualId: 'soal-20',
    options: [
      { key: 'A', text: '$B(140, 120)\\text{ dan } C(80, 40)$' },
      { key: 'B', text: '$B(150, 130)\\text{ dan } C(90, 50)$' },
      { key: 'C', text: '$B(130, 110)\\text{ dan } C(70, 30)$' },
      { key: 'D', text: '$B(160, 140)\\text{ dan } C(100, 60)$' },
      { key: 'E', text: '$B(120, 100)\\text{ dan } C(60, 20)$' },
    ],
    solution: {
      answerSummary: 'A. B(140, 120) dan C(80, 40)',
      correctOptionKey: 'A',
      steps: [
        'Hitung total waktu perjalanan dari A ke E:\n$$T_{\\text{total}} = 3 + 2 + 4 + 1 = 10\\text{ jam}$$',
        'Vektor perpindahan total dari A ke E:\n$$\\vec{AE} = E - A = (-70 - 230, -160 - 240) = (-300, -400)$$',
        'Kota B ditempuh selama 3 jam (proporsi $\\frac{3}{10}$ dari total jarak):\n$$B = A + \\frac{3}{10}\\vec{AE} = (230, 240) + \\frac{3}{10}(-300, -400) = (230 - 90, 240 - 120) = (140, 120)$$',
        'Kota C ditempuh selama $3 + 2 = 5$ jam (proporsi $\\frac{5}{10} = \\frac{1}{2}$ dari total jarak):\n$$C = A + \\frac{5}{10}(-300, -400) = (230 - 150, 240 - 200) = (80, 40)$$',
      ],
    },
  },
  {
    id: 21,
    topic: 'Analisis Waktu Tempuh Perjalanan Jalur Kota (Pilihan Ganda Kompleks)',
    type: 'complex-multiple-choice',
    storyContext:
      'Jarak total antara Kota $A$ dan $E$ adalah $500\\text{ km}$ ($|\\vec{AE}| = \\sqrt{(-300)^2 + (-400)^2} = 500\\text{ km}$). Jarak masing-masing segmen rute adalah: $AB = 150\\text{ km}$, $BC = 100\\text{ km}$, $CD = 200\\text{ km}$, dan $DE = 50\\text{ km}$.',
    questionText:
      'Jika pelancong berkendara dengan kecepatan rata-rata $75\\text{ km/jam}$, rute perjalanan manakah yang waktu tempuhnya kurang dari $250\\text{ menit}$? (Jawaban benar lebih dari satu)',
    checkboxOptions: [
      'Perjalanan dari Kota A ke B ($150\\text{ km}$)',
      'Perjalanan dari Kota A ke C ($250\\text{ km}$)',
      'Perjalanan dari Kota B ke D ($300\\text{ km}$)',
      'Perjalanan dari Kota A ke D ($450\\text{ km}$)',
    ],
    solution: {
      answerSummary: 'Pernyataan 1, 2, dan 3 Benar (Jarak < 312,5 km)',
      correctCheckboxIndices: [0, 1, 2],
      steps: [
        'Konversi waktu batas $250$ menit ke jam:\n$$t_{\\text{maks}} = \\frac{250}{60} = \\frac{25}{6}\\text{ jam} \\approx 4,167\\text{ jam}$$',
        'Hitung batas jarak tempuh maksimum dengan kecepatan $75\\text{ km/jam}$:\n$$s_{\\text{maks}} = 75 \\times \\frac{25}{6} = 312,5\\text{ km}$$',
        'Uji jarak masing-masing rute perjalanan:\n- Rute A ke B: $s = 150\\text{ km} < 312,5\\text{ km}$ ($t = 120\\text{ menit}$). Memenuhi.\n- Rute A ke C: $s = 150 + 100 = 250\\text{ km} < 312,5\\text{ km}$ ($t = 200\\text{ menit}$). Memenuhi.\n- Rute B ke D: $s = 100 + 200 = 300\\text{ km} < 312,5\\text{ km}$ ($t = 240\\text{ menit}$). Memenuhi.\n- Rute A ke D: $s = 150 + 100 + 200 = 450\\text{ km} > 312,5\\text{ km}$ ($t = 360\\text{ menit}$). Tidak memenuhi.',
      ],
    },
  },
  {
    id: 22,
    topic: 'Transformasi Geometri Gerak Koin Karambol (Rotasi Titik Asal)',
    type: 'multiple-choice',
    storyContext:
      'Pada sebuah papan permainan karambol dengan sistem koordinat berpusat di titik tengah papan $(0,0)$, sebuah koin meluncur dari posisi awal $P(-4, 3)$ menuju posisi akhir $P\'(4, -3)$.',
    questionText:
      'Jenis transformasi geometri tunggal apakah yang memindahkan koin karambol dari posisi awal ke posisi akhir tersebut?',
    visualId: 'soal-22',
    options: [
      { key: 'A', text: 'Rotasi $180^\\circ$ dengan titik pusat $(0,0)$' },
      { key: 'B', text: 'Translasi oleh vektor $\\begin{pmatrix} 4 \\\\ -3 \\end{pmatrix}$' },
      { key: 'C', text: 'Refleksi terhadap sumbu $Y$' },
      { key: 'D', text: 'Refleksi terhadap sumbu $X$' },
      { key: 'E', text: 'Dilatasi dengan faktor skala $k = 2$ berpusat di $(0,0)$' },
    ],
    solution: {
      answerSummary: 'A. Rotasi 180° berpusat di (0,0)',
      correctOptionKey: 'A',
      steps: [
        'Amati koordinat titik awal $(x, y) = (-4, 3)$ dan bayangannya $(x\', y\') = (4, -3)$.',
        'Hubungan antar koordinat adalah $x\' = -x$ dan $y\' = -y$, atau dalam notasi matriks:\n$$\\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$',
        'Matriks $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ merupakan representasi baku dari rotasi sebesar $180^\\circ$ terhadap titik pusat $(0,0)$.',
      ],
    },
  },
  {
    id: 23,
    topic: 'Matriks Transformasi Refleksi Sumbu Koordinat',
    type: 'multiple-choice',
    storyContext:
      'Koin karambol yang berada di posisi $Q(3, 5)$ memantul sempurna pada bantalan dinding papan yang berimpit dengan sumbu $Y$.',
    questionText:
      'Matriks transformasi geometri yang mewakili peristiwa refleksi terhadap sumbu $Y$ tersebut adalah ....',
    options: [
      { key: 'A', text: '$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$' },
      { key: 'B', text: '$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$' },
      { key: 'C', text: '$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$' },
      { key: 'D', text: '$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$' },
      { key: 'E', text: '$\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$' },
    ],
    solution: {
      answerSummary: 'A. Matriks [-1 0; 0 1]',
      correctOptionKey: 'A',
      steps: [
        'Pencerminan (refleksi) suatu titik $(x, y)$ terhadap sumbu $Y$ membalikkan nilai absis menjadi $-x$ sedangkan ordinat tetap $y$:\n$$x\' = -x, \\quad y\' = y$$',
        'Dalam bentuk perkalian matriks:\n$$\\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$',
      ],
    },
  },
  {
    id: 24,
    topic: 'Titik Singgung Garis Singgung Lingkaran dari Titik Eksterior',
    type: 'multiple-choice',
    storyContext:
      'Dari titik luar lingkaran $P(7, 1)$ ditarik garis singgung ke lingkaran dengan persamaan $x^2 + y^2 = 25$ yang berpusat di titik $(0,0)$ dan berjari-jari $r = 5$.',
    questionText:
      'Titik manakah pada keliling lingkaran yang menjadi salah satu titik singgung dari garis yang ditarik dari titik $(7, 1)$?',
    visualId: 'soal-24',
    options: [
      { key: 'A', text: 'Titik $(3, 4)$' },
      { key: 'B', text: 'Titik $(3, -4)$' },
      { key: 'C', text: 'Titik $(4, 3)$' },
      { key: 'D', text: 'Titik $(-3, 4)$' },
      { key: 'E', text: 'Titik $(-4, 3)$' },
    ],
    solution: {
      answerSummary: 'A. Titik (3, 4)',
      correctOptionKey: 'A',
      steps: [
        'Tentukan persamaan garis kutub (polar) dari titik luar $(x_1, y_1) = (7, 1)$ terhadap lingkaran $x^2 + y^2 = 25$:\n$$x_1 x + y_1 y = 25 \\implies 7x + y = 25 \\implies y = 25 - 7x$$',
        'Substitusikan persamaan garis kutub ke dalam persamaan lingkaran:\n$$\\begin{aligned} x^2 + (25 - 7x)^2 &= 25 \\\\ x^2 + 625 - 350x + 49x^2 &= 25 \\\\ 50x^2 - 350x + 600 &= 0 \\end{aligned}$$',
        'Bagi kedua ruas dengan 50:\n$$x^2 - 7x + 12 = 0 \\implies (x - 3)(x - 4) = 0$$',
        'Untuk $x = 3 \\implies y = 25 - 7(3) = 4$, diperoleh titik singgung $(3, 4)$.\nUntuk $x = 4 \\implies y = 25 - 7(4) = -3$, diperoleh titik singgung $(4, -3)$.',
        'Maka titik singgung yang tersedia pada pilihan adalah $(3, 4)$.',
      ],
    },
  },
  {
    id: 25,
    topic: 'Pasangan Titik Singgung Lingkaran dari Titik Luar (Pilihan Ganda Kompleks)',
    type: 'complex-multiple-choice',
    storyContext:
      'Melanjutkan analisis garis singgung lingkaran $x^2 + y^2 = 25$ yang melalui titik luar $P(7, 1)$.',
    questionText:
      'Tentukan semua titik singgung pada lingkaran tersebut yang benar! (Jawaban benar lebih dari satu)',
    checkboxOptions: [
      'Titik $(3, 4)$',
      'Titik $(3, -4)$',
      'Titik $(4, 3)$',
      'Titik $(4, -3)$',
    ],
    solution: {
      answerSummary: 'Pernyataan 1 dan 4 Benar (Titik (3, 4) dan (4, -3))',
      correctCheckboxIndices: [0, 3],
      steps: [
        'Berdasarkan pemecahan persamaan garis polar $7x + y = 25$ pada lingkaran $x^2 + y^2 = 25$ diperoleh dua akar absis $x = 3$ dan $x = 4$.',
        'Titik pertama: saat $x = 3$, maka $y = 4 \\implies (3, 4)$. Uji: $3^2 + 4^2 = 9 + 16 = 25$ (Memenuhi).',
        'Titik kedua: saat $x = 4$, maka $y = -3 \\implies (4, -3)$. Uji: $4^2 + (-3)^2 = 16 + 9 = 25$ (Memenuhi).',
        'Titik $(3, -4)$ dan $(4, 3)$ bukan titik potong garis polar dengan lingkaran.',
      ],
    },
  },
  {
    id: 26,
    topic: 'Pemodelan Matriks Penjualan Kantin Sekolah (Tiga Hari)',
    type: 'multiple-choice',
    storyContext:
      'Sebuah kantin sekolah menjual makanan ($x$) dan minuman ($y$). Catatan penjualan selama tiga hari:\n- Senin: 15 porsi makanan, 10 porsi minuman, pendapatan 225 ribu rupiah.\n- Selasa: 12 porsi makanan, 10 porsi minuman, pendapatan 195 ribu rupiah.\n- Kamis: 15 porsi makanan, 20 porsi minuman, pendapatan 325 ribu rupiah.',
    questionText:
      'Jika $x$ menyatakan harga satu porsi makanan dan $y$ harga satu porsi minuman, bentuk matriks yang menyajikan pendapatan pada hari Senin, Selasa, dan Kamis adalah ....',
    options: [
      {
        key: 'A',
        text: '$\\begin{pmatrix} 15 & 10 \\\\ 12 & 10 \\\\ 15 & 20 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 195 \\\\ 325 \\end{pmatrix}$',
      },
      {
        key: 'B',
        text: '$\\begin{pmatrix} 15 & 12 & 15 \\\\ 10 & 10 & 20 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 195 \\\\ 325 \\end{pmatrix}$',
      },
      {
        key: 'C',
        text: '$\\begin{pmatrix} 15 & 10 \\\\ 10 & 12 \\\\ 20 & 15 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 195 \\\\ 325 \\end{pmatrix}$',
      },
      {
        key: 'D',
        text: '$\\begin{pmatrix} 15 & 10 \\\\ 12 & 10 \\\\ 15 & 20 \\end{pmatrix} \\begin{pmatrix} 225 \\\\ 195 \\\\ 325 \\end{pmatrix} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$',
      },
      {
        key: 'E',
        text: '$\\begin{pmatrix} 10 & 15 \\\\ 10 & 12 \\\\ 20 & 15 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 195 \\\\ 325 \\end{pmatrix}$',
      },
    ],
    solution: {
      answerSummary: 'A. Matriks koefisien ordo 3x2 dikalikan [x; y] = [225; 195; 325]',
      correctOptionKey: 'A',
      steps: [
        'Setiap baris matriks mewakili satu hari transaksi:\n- Baris 1 (Senin): $15x + 10y = 225$\n- Baris 2 (Selasa): $12x + 10y = 195$\n- Baris 3 (Kamis): $15x + 20y = 325$',
        'Dalam notasi matriks $AX = B$, diperoleh matriks koefisien berordo $3 \\times 2$:',
        '$$\\begin{pmatrix} 15 & 10 \\\\ 12 & 10 \\\\ 15 & 20 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 225 \\\\ 195 \\\\ 325 \\end{pmatrix}$$',
      ],
    },
  },
  {
    id: 27,
    topic: 'Penentuan Harga Satuan Makanan dan Minuman Kantin',
    type: 'multiple-choice',
    storyContext:
      'Dari data penjualan kantin sekolah:\n- Hari Senin: 15 makanan dan 10 minuman menghasilkan $\\text{Rp}225.000,00$.\n- Hari Selasa: 12 makanan dan 10 minuman menghasilkan $\\text{Rp}195.000,00$.',
    questionText:
      'Harga satuan satu porsi makanan ($x$) dan satu porsi minuman ($y$) masing-masing adalah ....',
    options: [
      { key: 'A', text: 'Makanan $\\text{Rp}10.000,00$ dan Minuman $\\text{Rp}7.500,00$' },
      { key: 'B', text: 'Makanan $\\text{Rp}11.000,00$ dan Minuman $\\text{Rp}6.000,00$' },
      { key: 'C', text: 'Makanan $\\text{Rp}9.000,00$ dan Minuman $\\text{Rp}9.000,00$' },
      { key: 'D', text: 'Makanan $\\text{Rp}12.000,00$ dan Minuman $\\text{Rp}4.500,00$' },
      { key: 'E', text: 'Makanan $\\text{Rp}10.500,00$ dan Minuman $\\text{Rp}7.000,00$' },
    ],
    solution: {
      answerSummary: 'A. Makanan Rp10.000,00 dan Minuman Rp7.500,00',
      correctOptionKey: 'A',
      steps: [
        'Eliminasi variabel $y$ dari persamaan hari Senin dan Selasa:\n$$\\begin{aligned} 15x + 10y &= 225 \\\\ 12x + 10y &= 195 \\\\ \\hline 3x &= 30 \\implies x = 10\\text{ ribu rupiah} \\end{aligned}$$',
        'Substitusi $x = 10$ ke persamaan hari Senin:\n$$15(10) + 10y = 225 \\implies 150 + 10y = 225 \\implies 10y = 75 \\implies y = 7,5\\text{ ribu rupiah}$$',
        'Jadi harga satu porsi makanan adalah $\\text{Rp}10.000,00$ dan harga satu porsi minuman adalah $\\text{Rp}7.500,00$.',
      ],
    },
  },
  {
    id: 28,
    topic: 'Analisis Determinan Pasangan Hari Penjualan Kantin (Pilihan Ganda Kompleks)',
    type: 'complex-multiple-choice',
    storyContext:
      'Dua persamaan linear dari dua hari yang berbeda dapat digunakan untuk menghitung harga unik makanan dan minuman jika determinan matriks koefisiennya tidak sama dengan nol ($\\det \\ne 0$).',
    questionText:
      'Berdasarkan tabel penjualan, pasangan hari mana sajakah yang dapat digunakan secara valid untuk menghitung harga satuan makanan dan minuman? (Jawaban benar lebih dari satu)',
    checkboxOptions: [
      'Senin (15, 10) dan Selasa (12, 10)',
      'Selasa (12, 10) dan Rabu (8, 12)',
      'Senin (15, 10) dan Kamis (15, 20)',
      'Dua hari dengan perbandingan penjualan yang identik kelipatannya',
    ],
    solution: {
      answerSummary: 'Pilihan 1, 2, dan 3 Benar (Determinan koefisien tidak nol)',
      correctCheckboxIndices: [0, 1, 2],
      steps: [
        'Syarat unik penyelesaian sistem dua persamaan linear dua variabel adalah determinan matriks ordo $2 \\times 2$ tidak nol:\n$$\\det = ad - bc \\ne 0$$',
        '1) Senin dan Selasa: $\\det = (15)(10) - (10)(12) = 150 - 120 = 30 \\ne 0$. (Dapat)',
        '2) Selasa dan Rabu: $\\det = (12)(12) - (10)(8) = 144 - 80 = 64 \\ne 0$. (Dapat)',
        '3) Senin dan Kamis: $\\det = (15)(20) - (10)(15) = 300 - 150 = 150 \\ne 0$. (Dapat)',
        '4) Jika kelipatannya identik, garis akan sejajar atau berimpit sehingga determinan $= 0$ (tidak dapat menghasilkan solusi unik).',
      ],
    },
  },
  {
    id: 29,
    topic: 'Vektor Total dan Penjumlahan Pendapatan Matriks',
    type: 'multiple-choice',
    storyContext:
      'Pendapatan lima hari kerja disajikan dalam vektor kolom $P = \\begin{pmatrix} 225 \\\\ 195 \\\\ 180 \\\\ 325 \\\\ 65 \\end{pmatrix}$ (dalam ribuan rupiah).',
    questionText:
      'Bentuk operasi matriks yang menyatakan akumulasi total penjumlahan pendapatan dari hari Senin hingga Jumat adalah ....',
    options: [
      {
        key: 'A',
        text: '$\\begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\end{pmatrix} \\begin{pmatrix} 225 \\\\ 195 \\\\ 180 \\\\ 325 \\\\ 65 \\end{pmatrix} = (990)$',
      },
      {
        key: 'B',
        text: '$\\begin{pmatrix} 225 & 195 & 180 & 325 & 65 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 0 \\\\ 0 \\end{pmatrix} = (225)$',
      },
      {
        key: 'C',
        text: '$\\begin{pmatrix} 1 & 0 & 0 & 0 & 0 \\end{pmatrix} \\begin{pmatrix} 225 \\\\ 195 \\\\ 180 \\\\ 325 \\\\ 65 \\end{pmatrix} = (225)$',
      },
      {
        key: 'D',
        text: '$\\begin{pmatrix} 225 \\\\ 195 \\\\ 180 \\\\ 325 \\\\ 65 \\end{pmatrix} \\begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\end{pmatrix}$',
      },
      {
        key: 'E',
        text: '$\\begin{pmatrix} 0 & 1 & 0 & 1 & 0 \\end{pmatrix} \\begin{pmatrix} 225 \\\\ 195 \\\\ 180 \\\\ 325 \\\\ 65 \\end{pmatrix} = (520)$',
      },
    ],
    solution: {
      answerSummary: 'A. Perkalian matriks baris satu [1 1 1 1 1] dengan kolom pendapatan menghasilkan Rp990.000,00',
      correctOptionKey: 'A',
      steps: [
        'Penjumlahan seluruh elemen vektor kolom berordo $5 \\times 1$ dilakukan dengan mengalikan vektor baris identitas satuan berordo $1 \\times 5$ dari sebelah kiri.',
        '$$\\begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\end{pmatrix} \\begin{pmatrix} 225 \\\\ 195 \\\\ 180 \\\\ 325 \\\\ 65 \\end{pmatrix} = 225 + 195 + 180 + 325 + 65 = 990\\text{ ribu rupiah}$$',
        'Total pendapatan seluruh hari kerja adalah $\\text{Rp}990.000,00$.',
      ],
    },
  },
  {
    id: 30,
    topic: 'Kinetika Eliminasi Obat Antibiotik Orde Pertama (Rentang Konsentrasi)',
    type: 'multiple-choice',
    storyContext:
      'Konsentrasi obat antibiotik dalam darah meluruh mengikuti kinetika eliminasi orde pertama: $C(t) = C_0 \\cdot e^{-kt}$, dengan konsentrasi awal $C_0 = 100\\text{ mg/L}$ dan waktu paruh eliminasi obat $t_{1/2} = 5\\text{ jam}$.',
    questionText:
      'Berdasarkan kurva eliminasi, rentang waktu saat konsentrasi obat dalam darah berada pada interval terapeutik $20\\text{ mg/L}$ hingga $50\\text{ mg/L}$ adalah ....',
    visualId: 'soal-30',
    options: [
      { key: 'A', text: 'Antara $t = 5\\text{ jam}$ hingga $t \\approx 11,6\\text{ jam}$' },
      { key: 'B', text: 'Antara $t = 0\\text{ jam}$ hingga $t = 5\\text{ jam}$' },
      { key: 'C', text: 'Antara $t = 10\\text{ jam}$ hingga $t = 15\\text{ jam}$' },
      { key: 'D', text: 'Antara $t = 15\\text{ jam}$ hingga $t = 20\\text{ jam}$' },
      { key: 'E', text: 'Setelah $t = 20\\text{ jam}$' },
    ],
    solution: {
      answerSummary: 'A. Antara t = 5 jam hingga t ≈ 11,6 jam',
      correctOptionKey: 'A',
      steps: [
        'Konsentrasi obat sebagai fungsi waktu paruh: $C(t) = 100 \\times (0,5)^{t/5}$.',
        'Saat $C = 50\\text{ mg/L}$ (setengah dari nilai awal), waktu yang dibutuhkan adalah tepat $1$ waktu paruh, yaitu $t = 5\\text{ jam}$.',
        'Saat $C = 20\\text{ mg/L}$:\n$$\\frac{20}{100} = (0,5)^{t/5} \\implies 0,2 = (0,5)^{t/5} \\implies \\frac{t}{5} = \\frac{\\ln(0,2)}{\\ln(0,5)} \\approx 2,32 \\implies t \\approx 11,6\\text{ jam}$$',
        'Dengan demikian, konsentrasi berada di antara $20\\text{ mg/L}$ dan $50\\text{ mg/L}$ pada rentang waktu $5 \\le t \\le 11,6\\text{ jam}$.',
      ],
    },
  },
  {
    id: 31,
    topic: 'Waktu Paruh (Half-Life) Eliminasi Obat Antibiotik',
    type: 'multiple-choice',
    storyContext:
      'Waktu paruh eliminasi ($t_{1/2}$) adalah periode waktu yang dibutuhkan oleh konsentrasi zat obat dalam darah untuk berkurang menjadi setengah dari nilai awalnya.',
    questionText:
      'Berdasarkan grafik eliminasi antibiotik tersebut, waktu paruh ($t_{1/2}$) obat tersebut adalah ....',
    options: [
      { key: 'A', text: '$4\\text{ jam}$' },
      { key: 'B', text: '$5\\text{ jam}$' },
      { key: 'C', text: '$8\\text{ jam}$' },
      { key: 'D', text: '$10\\text{ jam}$' },
      { key: 'E', text: '$15\\text{ jam}$' },
    ],
    solution: {
      answerSummary: 'B. 5 jam',
      correctOptionKey: 'B',
      steps: [
        'Amati titik-titik data pada grafik konsentrasi:\n- Pada $t = 0\\text{ jam}$, $C = 100\\text{ mg/L}$.\n- Pada $t = 5\\text{ jam}$, $C = 50\\text{ mg/L}$ ($50\\%$ dari konsentrasi awal).\n- Pada $t = 10\\text{ jam}$, $C = 25\\text{ mg/L}$ ($50\\%$ dari $50\\text{ mg/L}$).',
        'Waktu yang diperlukan untuk setiap penurunan konsentrasi menjadi separuhnya adalah tetap sebesar $5\\text{ jam}$.',
        'Jadi, waktu paruh eliminasi obat adalah $5\\text{ jam}$.',
      ],
    },
  },
  {
    id: 32,
    topic: 'Limit Fungsi Rasional Polinomial Menuju Titik Tertentu',
    type: 'multiple-choice',
    storyContext:
      'Evaluasi limit fungsi rasional dilakukan dengan mensubstitusi nilai $x$ secara langsung bila tidak menghasilkan pembagian dengan nol.',
    questionText:
      'Nilai dari limit aljabar rasional:\n$$\\lim_{x \\to 2} \\frac{x^3 - 3x + 5}{2x^3 + x^2 + x - 2}$$\nadalah ....',
    options: [
      { key: 'A', text: '$\\frac{7}{20}$' },
      { key: 'B', text: '$\\frac{9}{20}$' },
      { key: 'C', text: '$\\frac{11}{20}$' },
      { key: 'D', text: '$\\frac{13}{20}$' },
      { key: 'E', text: '$\\frac{3}{4}$' },
    ],
    solution: {
      answerSummary: 'A. 7/20',
      correctOptionKey: 'A',
      steps: [
        'Lakukan evaluasi substitusi langsung $x = 2$ pada pembilang dan penyebut:',
        'Pembilang:\n$$P(2) = 2^3 - 3(2) + 5 = 8 - 6 + 5 = 7$$',
        'Penyebut:\n$$Q(2) = 2(2^3) + 2^2 + 2 - 2 = 2(8) + 4 + 2 - 2 = 16 + 4 = 20$$',
        'Karena penyebut bernilai $20 \\ne 0$, hasil limit terdefinisi pasti:\n$$\\lim_{x \\to 2} \\frac{x^3 - 3x + 5}{2x^3 + x^2 + x - 2} = \\frac{7}{20}$$',
      ],
    },
  },
  {
    id: 33,
    topic: 'Pembagian Suku Banyak dan Teorema Sisa (Metode Horner)',
    type: 'multiple-choice',
    storyContext:
      'Suku banyak $P(x) = 3x^3 - 5x^2 - 10$ dibagi oleh pembagi linear derajat satu $(x - 4)$.',
    questionText:
      'Hasil bagi $H(x)$ dan sisa pembagian $S$ dari suku banyak tersebut berturut-turut adalah ....',
    options: [
      { key: 'A', text: '$3x^2 + 7x + 28\\text{ dan sisa } 102$' },
      { key: 'B', text: '$3x^2 + 8x + 6\\text{ dan sisa } 22$' },
      { key: 'C', text: '$3x^2 + 6x + 8\\text{ dan sisa } 22$' },
      { key: 'D', text: '$3x^2 + 8x + 27\\text{ dan sisa } 102$' },
      { key: 'E', text: '$3x^2 + 7x + 24\\text{ dan sisa } 86$' },
    ],
    solution: {
      answerSummary: 'A. 3x² + 7x + 28 dan sisa 102',
      correctOptionKey: 'A',
      steps: [
        'Tuliskan koefisien suku banyak $P(x) = 3x^3 - 5x^2 + 0x - 10$ secara berurutan: $[3, -5, 0, -10]$.',
        'Gunakan pembagi $x - 4 = 0 \\implies x = 4$ dengan metode Horner:\n- Turunkan koefisien pertama: $3$\n- Kalikan $3 \\times 4 = 12$, tambahkan ke $-5$: $-5 + 12 = 7$\n- Kalikan $7 \\times 4 = 28$, tambahkan ke $0$: $0 + 28 = 28$\n- Kalikan $28 \\times 4 = 112$, tambahkan ke $-10$: $-10 + 112 = 102$ (Sisa pembagian)',
        'Koefisien hasil bagi adalah $[3, 7, 28]$, sehingga hasil bagi berderajat dua adalah $H(x) = 3x^2 + 7x + 28$ dengan sisa $S = 102$.',
      ],
    },
  },
];
