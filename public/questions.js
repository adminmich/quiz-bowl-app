/* Question bank for the Quiz Bowl app.
   Types: 'mc' (multiple choice), 'fib' (fill in the blank), 'guess' (guess the word).
   Level scale is 1-20. Grade tag (5-12) maps as:
     L1-L3 grade 5, L4-L6 grade 6, L7-L9 grade 7, L10-L12 grade 8,
     L13-L14 grade 9, L15-L16 grade 10, L17-L18 grade 11, L19-L20 grade 12.
   Every question belongs to exactly one level so there is no cross-level repetition.
   Field `e` is the explanation shown when the answer is wrong. */

window.LEVEL_GRADE = {
  1:5, 2:5, 3:5,
  4:6, 5:6, 6:6,
  7:7, 8:7, 9:7,
  10:8, 11:8, 12:8,
  13:9, 14:9,
  15:10, 16:10,
  17:11, 18:11,
  19:12, 20:12,
};

window.QUESTIONS = [
  /* ============================ MATH ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'math', grade:5, level:1, type:'mc',    q:'What is 7 x 8?', choices:['54','56','58','64'], a:'56', e:'7 x 8 = 56. That is 8 added 7 times.' },
  { subject:'math', grade:5, level:1, type:'mc',    q:'What is 144 / 12?', choices:['10','11','12','14'], a:'12', e:'12 x 12 = 144, so 144 / 12 = 12.' },
  { subject:'math', grade:5, level:1, type:'guess', q:'A shape with three sides.', a:'triangle', e:'"Tri" means three, so a three-sided polygon is a triangle.' },
  { subject:'math', grade:5, level:2, type:'mc',    q:'Which number is a prime?', choices:['9','15','17','21'], a:'17', e:'A prime has only 1 and itself as factors. 17 has no factors besides 1 and 17.' },
  { subject:'math', grade:5, level:2, type:'fib',   q:'The perimeter of a square with side 5 is ____.', a:'20', e:'Perimeter of a square = 4 x side. So 4 x 5 = 20.' },
  { subject:'math', grade:5, level:2, type:'guess', q:'The result of subtraction.', a:'difference', e:'Add: sum. Subtract: difference. Multiply: product. Divide: quotient.' },
  { subject:'math', grade:5, level:3, type:'fib',   q:'1/2 + 1/4 = ____ (as a fraction).', a:'3/4', e:'Give both fractions the same denominator: 1/2 = 2/4. Then 2/4 + 1/4 = 3/4.' },
  { subject:'math', grade:5, level:3, type:'mc',    q:'Which fraction is largest?', choices:['1/2','2/5','3/8','1/3'], a:'1/2', e:'As decimals: 1/2=0.50, 2/5=0.40, 3/8=0.375, 1/3=0.333. 1/2 is biggest.' },
  { subject:'math', grade:5, level:3, type:'mc',    q:'What is 12 + 24 + 36 + 48?', choices:['110','120','130','140'], a:'120', e:'Pair up: (12+48) + (24+36) = 60 + 60 = 120.' },

  /* Grade 6 - L4..L6 */
  { subject:'math', grade:6, level:4, type:'mc',    q:'What is 15% of 200?', choices:['20','25','30','35'], a:'30', e:'15% = 0.15. So 0.15 x 200 = 30.' },
  { subject:'math', grade:6, level:4, type:'fib',   q:'The area of a rectangle 8 by 6 is ____.', a:'48', e:'Area of a rectangle = length x width = 8 x 6 = 48.' },
  { subject:'math', grade:6, level:4, type:'guess', q:'A polygon with eight sides.', a:'octagon', e:'"Octa" means eight. An 8-sided polygon is an octagon.' },
  { subject:'math', grade:6, level:5, type:'mc',    q:'Solve: 3x = 21. x = ?', choices:['3','6','7','9'], a:'7', e:'Divide both sides by 3: x = 21 / 3 = 7.' },
  { subject:'math', grade:6, level:5, type:'fib',   q:'The square root of 81 is ____.', a:'9', e:'9 x 9 = 81, so sqrt(81) = 9.' },
  { subject:'math', grade:6, level:5, type:'guess', q:'The distance around a circle.', a:'circumference', e:'Perimeter of a circle is called circumference. Formula: C = 2 pi r.' },
  { subject:'math', grade:6, level:6, type:'mc',    q:'Which is an irrational number?', choices:['0.5','1/3','pi','7'], a:'pi', e:'Irrational numbers cannot be written as a fraction of two integers; pi never terminates or repeats.' },
  { subject:'math', grade:6, level:6, type:'mc',    q:'What is 2^5?', choices:['10','16','25','32'], a:'32', e:'2 x 2 x 2 x 2 x 2 = 32.' },

  /* Grade 7 - L7..L9 */
  { subject:'math', grade:7, level:7, type:'mc',    q:'Solve: 2x + 3 = 15. x = ?', choices:['5','6','7','8'], a:'6', e:'Subtract 3 from both sides: 2x = 12. Then divide by 2: x = 6.' },
  { subject:'math', grade:7, level:7, type:'guess', q:'A quadrilateral with exactly one pair of parallel sides.', a:'trapezoid', e:'A parallelogram has two pairs of parallel sides; a trapezoid has only one.' },
  { subject:'math', grade:7, level:7, type:'mc',    q:'Which is the value of |-9|?', choices:['-9','0','9','18'], a:'9', e:'Absolute value bars give the distance from zero, always non-negative.' },
  { subject:'math', grade:7, level:8, type:'fib',   q:'The hypotenuse of a right triangle with legs 3 and 4 is ____.', a:'5', e:'Pythagorean theorem: 3^2 + 4^2 = 9 + 16 = 25, sqrt(25) = 5.' },
  { subject:'math', grade:7, level:8, type:'fib',   q:'If a triangle has angles 40 and 60, the third angle is ____ degrees.', a:'80', e:'Angles of any triangle add to 180. 180 - 40 - 60 = 80.' },
  { subject:'math', grade:7, level:8, type:'guess', q:'The Greek letter for the ratio of a circle\'s circumference to its diameter.', a:'pi', e:'That ratio is pi, about 3.14159.' },
  { subject:'math', grade:7, level:9, type:'mc',    q:'What is the slope of y = 4x - 7?', choices:['-7','4','-4','7'], a:'4', e:'In y = mx + b, m is the slope. Here m = 4.' },
  { subject:'math', grade:7, level:9, type:'fib',   q:'The mean of 4, 8, 12, 16 is ____.', a:'10', e:'Mean = sum / count = (4+8+12+16)/4 = 40/4 = 10.' },

  /* Grade 8 - L10..L12 (new content) */
  { subject:'math', grade:8, level:10, type:'mc',    q:'Solve for x: 5x - 4 = 21', choices:['3','4','5','7'], a:'5', e:'Add 4: 5x = 25. Divide by 5: x = 5.' },
  { subject:'math', grade:8, level:10, type:'fib',   q:'The y-intercept of y = 3x + 8 is ____.', a:'8', e:'In y = mx + b, b is the y-intercept. Here b = 8.' },
  { subject:'math', grade:8, level:10, type:'guess', q:'A pair of equations solved together for the same variables.', a:'system', e:'A system of equations has two or more equations solved simultaneously.' },
  { subject:'math', grade:8, level:11, type:'mc',    q:'Simplify: (2^3)(2^4)', choices:['2^7','2^12','4^7','8^4'], a:'2^7', e:'When multiplying same bases, add exponents: 3+4 = 7, so 2^7 = 128.' },
  { subject:'math', grade:8, level:11, type:'fib',   q:'Scientific notation: 45,000 = 4.5 x 10^____.', a:'4', e:'Move the decimal 4 places left: 45,000 = 4.5 x 10^4.' },
  { subject:'math', grade:8, level:11, type:'mc',    q:'What is sqrt(50) simplified?', choices:['5 sqrt(2)','2 sqrt(5)','10 sqrt(5)','25 sqrt(2)'], a:'5 sqrt(2)', e:'sqrt(50) = sqrt(25 x 2) = 5 sqrt(2).' },
  { subject:'math', grade:8, level:12, type:'mc',    q:'Factor: x^2 - 9', choices:['(x-3)(x-3)','(x+3)(x+3)','(x-3)(x+3)','(x-9)(x+1)'], a:'(x-3)(x+3)', e:'Difference of squares: a^2 - b^2 = (a-b)(a+b). x^2 - 9 = (x-3)(x+3).' },
  { subject:'math', grade:8, level:12, type:'guess', q:'A polynomial with three terms.', a:'trinomial', e:'One term: monomial. Two terms: binomial. Three terms: trinomial.' },
  { subject:'math', grade:8, level:12, type:'fib',   q:'The volume of a cube with side 4 is ____.', a:'64', e:'Volume of a cube = side^3 = 4^3 = 64.' },

  /* Grade 9 - L13..L14 */
  { subject:'math', grade:9, level:13, type:'mc',    q:'What is the derivative of x^3?', choices:['x^2','3x','3x^2','x^4/4'], a:'3x^2', e:'Power rule: d/dx(x^n) = n x^(n-1). For x^3: 3 x^2.' },
  { subject:'math', grade:9, level:13, type:'fib',   q:'log base 10 of 1000 = ____.', a:'3', e:'10^3 = 1000, so log10(1000) = 3.' },
  { subject:'math', grade:9, level:13, type:'guess', q:'A triangle with all sides equal.', a:'equilateral', e:'Equilateral = equal sides. Each angle is 60 degrees.' },
  { subject:'math', grade:9, level:14, type:'mc',    q:'sin(90 degrees) = ?', choices:['0','1/2','1','undefined'], a:'1', e:'At 90 degrees on the unit circle, the y-coordinate is 1.' },
  { subject:'math', grade:9, level:14, type:'fib',   q:'The quadratic formula solves ax^2 + bx + ____ = 0.', a:'c', e:'Standard quadratic form is ax^2 + bx + c = 0.' },
  { subject:'math', grade:9, level:14, type:'guess', q:'The point where a curve crosses the x-axis.', a:'root', e:'A root (or zero) of a function is any x where f(x) = 0.' },

  /* Grade 10 - L15..L16 */
  { subject:'math', grade:10, level:15, type:'mc',    q:'Which set contains only real numbers?', choices:['{i, 2i}','{-3, 0, pi}','{sqrt(-4)}','{2+i}'], a:'{-3, 0, pi}', e:'Reals exclude i (imaginary unit). Anything with i is complex.' },
  { subject:'math', grade:10, level:15, type:'fib',   q:'e (Euler\'s number) is approximately ____ (2 decimals).', a:'2.72', e:'e is about 2.71828. Rounded to two decimals: 2.72.' },
  { subject:'math', grade:10, level:15, type:'mc',    q:'For y = x^2, the graph is a', choices:['line','parabola','circle','hyperbola'], a:'parabola', e:'Any y = ax^2 + bx + c is a parabola. If a > 0 it opens upward.' },
  { subject:'math', grade:10, level:16, type:'mc',    q:'The discriminant of ax^2+bx+c is', choices:['b^2 - 4ac','b^2 + 4ac','2b - 4ac','4ac - b^2'], a:'b^2 - 4ac', e:'The discriminant b^2 - 4ac tells how many real roots a quadratic has.' },
  { subject:'math', grade:10, level:16, type:'fib',   q:'cos(0 degrees) = ____.', a:'1', e:'At 0 degrees on the unit circle, the x-coordinate is 1, so cos(0) = 1.' },
  { subject:'math', grade:10, level:16, type:'guess', q:'A line that a curve approaches but never touches.', a:'asymptote', e:'Asymptotes appear in rational and exponential functions; the curve gets arbitrarily close but never crosses.' },

  /* Grade 11 - L17..L18 */
  { subject:'math', grade:11, level:17, type:'mc',    q:'The sum 1+2+3+...+100 equals', choices:['5000','5050','5500','10000'], a:'5050', e:'Sum of first n integers = n(n+1)/2 = 100 x 101 / 2 = 5050.' },
  { subject:'math', grade:11, level:17, type:'fib',   q:'The common difference of 5, 9, 13, 17 is ____.', a:'4', e:'Each term is 4 more than the last. Arithmetic sequence with d = 4.' },
  { subject:'math', grade:11, level:17, type:'guess', q:'The ratio between consecutive terms in a geometric sequence.', a:'common ratio', e:'A geometric sequence multiplies by the same factor each step; that factor is called the common ratio.' },
  { subject:'math', grade:11, level:18, type:'mc',    q:'What is 5!? (5 factorial)', choices:['15','20','60','120'], a:'120', e:'5! = 5 x 4 x 3 x 2 x 1 = 120.' },
  { subject:'math', grade:11, level:18, type:'fib',   q:'The probability of rolling a 6 on a fair die is 1/____.', a:'6', e:'A die has 6 equally likely outcomes and only one is a 6, so P = 1/6.' },

  /* Grade 12 - L19..L20 */
  { subject:'math', grade:12, level:19, type:'mc',    q:'The integral of 2x dx =', choices:['x^2','x^2 + C','2 + C','x^3/3'], a:'x^2 + C', e:'Antiderivative of 2x is x^2. Indefinite integrals need "+ C".' },
  { subject:'math', grade:12, level:19, type:'guess', q:'Branch of mathematics dealing with change and motion.', a:'calculus', e:'Calculus studies rates of change (derivatives) and accumulation (integrals).' },
  { subject:'math', grade:12, level:19, type:'fib',   q:'The limit as x approaches 0 of sin(x)/x is ____.', a:'1', e:'As x tends to 0, sin(x) is approximately x, so sin(x)/x approaches 1.' },
  { subject:'math', grade:12, level:20, type:'mc',    q:'A matrix with determinant 0 is called', choices:['singular','identity','orthogonal','symmetric'], a:'singular', e:'A matrix with det = 0 has no inverse and is called singular.' },
  { subject:'math', grade:12, level:20, type:'guess', q:'A number that cannot be expressed as a fraction of two integers.', a:'irrational', e:'Irrationals (pi, sqrt(2), e) cannot be written as p/q; decimals never repeat.' },
  { subject:'math', grade:12, level:20, type:'fib',   q:'The number of degrees in a full rotation is ____.', a:'360', e:'A full circle is 360 degrees or 2 pi radians.' },
  { subject:'math', grade:12, level:20, type:'mc',    q:'Which theorem relates the sides of a right triangle?', choices:['Fermat','Pythagorean','Euclid','Thales'], a:'Pythagorean', e:'The Pythagorean theorem: a^2 + b^2 = c^2.' },

  /* ============================ SCIENCE ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'science', grade:5, level:1, type:'mc',    q:'Which planet is closest to the Sun?', choices:['Venus','Earth','Mercury','Mars'], a:'Mercury', e:'Order from the Sun: Mercury, Venus, Earth, Mars.' },
  { subject:'science', grade:5, level:1, type:'fib',   q:'Water freezes at ____ degrees Celsius.', a:'0', e:'Pure water at sea level freezes at 0 C and boils at 100 C.' },
  { subject:'science', grade:5, level:1, type:'guess', q:'The gas we breathe in that keeps us alive.', a:'oxygen', e:'Oxygen makes up about 21% of air; our cells use it to release energy from food.' },
  { subject:'science', grade:5, level:2, type:'mc',    q:'How many bones does an adult human have?', choices:['186','206','226','256'], a:'206', e:'Babies have ~270; many fuse as we grow, ending at 206 in adulthood.' },
  { subject:'science', grade:5, level:2, type:'mc',    q:'What organ pumps blood?', choices:['lungs','liver','heart','brain'], a:'heart', e:'The heart is a muscle that pumps blood through arteries and veins.' },
  { subject:'science', grade:5, level:2, type:'guess', q:'The process plants use to make food from sunlight.', a:'photosynthesis', e:'Plants use sunlight, water, and CO2 to make glucose and release oxygen.' },
  { subject:'science', grade:5, level:3, type:'fib',   q:'The center of an atom is called the ____.', a:'nucleus', e:'The nucleus holds protons and neutrons; electrons orbit around it.' },
  { subject:'science', grade:5, level:3, type:'mc',    q:'Which is a mammal?', choices:['shark','frog','whale','eagle'], a:'whale', e:'Mammals have hair, are warm-blooded, and nurse their young; whales do all three.' },

  /* Grade 6 - L4..L6 */
  { subject:'science', grade:6, level:4, type:'mc',    q:'The chemical symbol for gold is', choices:['Go','Gd','Au','Ag'], a:'Au', e:'Au comes from the Latin name aurum. Ag (argentum) is silver.' },
  { subject:'science', grade:6, level:4, type:'fib',   q:'Sound travels fastest through ____ (solid/liquid/gas).', a:'solid', e:'In solids the particles are packed tightest, so sound moves fastest.' },
  { subject:'science', grade:6, level:4, type:'guess', q:'The powerhouse of the cell.', a:'mitochondria', e:'Mitochondria produce ATP, the cell\'s main energy currency.' },
  { subject:'science', grade:6, level:5, type:'mc',    q:'Which force pulls objects toward Earth?', choices:['friction','magnetism','gravity','tension'], a:'gravity', e:'Gravity is the attractive force between masses.' },
  { subject:'science', grade:6, level:5, type:'fib',   q:'Water has the chemical formula ____.', a:'H2O', e:'A water molecule has 2 hydrogen atoms bonded to 1 oxygen atom.' },
  { subject:'science', grade:6, level:6, type:'guess', q:'The layer of gas surrounding Earth.', a:'atmosphere', e:'The atmosphere has 5 layers: troposphere, stratosphere, mesosphere, thermosphere, exosphere.' },
  { subject:'science', grade:6, level:6, type:'mc',    q:'Which is NOT a state of matter?', choices:['solid','liquid','plasma','energy'], a:'energy', e:'States of matter are solid, liquid, gas, plasma. Energy is not a state.' },
  { subject:'science', grade:6, level:6, type:'fib',   q:'The largest planet in our solar system is ____.', a:'Jupiter', e:'Jupiter is a gas giant, more massive than all other planets combined.' },

  /* Grade 7 - L7..L9 */
  { subject:'science', grade:7, level:7, type:'mc',    q:'What is the pH of a neutral solution?', choices:['0','7','10','14'], a:'7', e:'pH runs 0-14. Below 7 is acidic; 7 is neutral; above 7 is basic.' },
  { subject:'science', grade:7, level:7, type:'guess', q:'The unit of electrical resistance.', a:'ohm', e:'Ohm (Omega) measures resistance. Ohm\'s law: V = I x R.' },
  { subject:'science', grade:7, level:8, type:'fib',   q:'DNA stands for ____ acid.', a:'deoxyribonucleic', e:'DNA = DeoxyriboNucleic Acid; it carries genetic instructions.' },
  { subject:'science', grade:7, level:8, type:'mc',    q:'Which particle has no charge?', choices:['proton','electron','neutron','positron'], a:'neutron', e:'Protons are +1, electrons are -1, neutrons are 0 (neutral).' },
  { subject:'science', grade:7, level:8, type:'guess', q:'The scientist who developed the theory of evolution.', a:'Darwin', e:'Darwin proposed natural selection in On the Origin of Species (1859).' },
  { subject:'science', grade:7, level:9, type:'fib',   q:'Newton\'s second law: F = m x ____.', a:'a', e:'Force = mass x acceleration.' },
  { subject:'science', grade:7, level:9, type:'mc',    q:'Which gas is most abundant in Earth\'s atmosphere?', choices:['oxygen','carbon dioxide','nitrogen','argon'], a:'nitrogen', e:'Air is ~78% nitrogen, ~21% oxygen, ~1% argon.' },

  /* Grade 8 - L10..L12 (new content) */
  { subject:'science', grade:8, level:10, type:'mc',    q:'What is the smallest unit of life?', choices:['atom','molecule','cell','organ'], a:'cell', e:'The cell is the smallest unit that can perform all life functions.' },
  { subject:'science', grade:8, level:10, type:'fib',   q:'Plant cells have a rigid outer ____.', a:'cell wall', e:'Cell walls made of cellulose give plant cells shape and support.' },
  { subject:'science', grade:8, level:10, type:'guess', q:'The green pigment that captures light energy in plants.', a:'chlorophyll', e:'Chlorophyll in chloroplasts absorbs sunlight to power photosynthesis.' },
  { subject:'science', grade:8, level:11, type:'mc',    q:'Which is a form of potential energy?', choices:['moving car','stretched spring','flowing water','running fan'], a:'stretched spring', e:'Potential energy is stored energy. A stretched spring stores elastic PE.' },
  { subject:'science', grade:8, level:11, type:'fib',   q:'The SI unit of energy is the ____.', a:'joule', e:'The joule (J) is the SI unit of energy; 1 J = 1 N x 1 m.' },
  { subject:'science', grade:8, level:11, type:'guess', q:'Heat transfer through direct contact.', a:'conduction', e:'Conduction transfers heat by particle contact. Convection uses fluids; radiation uses waves.' },
  { subject:'science', grade:8, level:12, type:'mc',    q:'In H2O + CO2 -> C6H12O6 + O2, which is the product?', choices:['H2O','CO2','O2','sunlight'], a:'O2', e:'This is photosynthesis. Reactants: H2O + CO2 (+ sunlight). Products: C6H12O6 (glucose) + O2.' },
  { subject:'science', grade:8, level:12, type:'fib',   q:'A substance that speeds up a reaction without being used up is a ____.', a:'catalyst', e:'Catalysts lower activation energy; enzymes are biological catalysts.' },
  { subject:'science', grade:8, level:12, type:'guess', q:'The chart that organizes all known elements.', a:'periodic table', e:'Mendeleev\'s periodic table organizes elements by atomic number and repeating properties.' },

  /* Grade 9 - L13..L14 */
  { subject:'science', grade:9, level:13, type:'mc',    q:'The speed of light in vacuum is approximately', choices:['3 x 10^5 m/s','3 x 10^8 m/s','3 x 10^10 m/s','3 x 10^12 m/s'], a:'3 x 10^8 m/s', e:'c is roughly 300,000,000 m/s.' },
  { subject:'science', grade:9, level:13, type:'guess', q:'The process by which liquid becomes gas at the surface.', a:'evaporation', e:'Evaporation happens below boiling point at the surface only.' },
  { subject:'science', grade:9, level:13, type:'fib',   q:'The three types of rocks are igneous, sedimentary, and ____.', a:'metamorphic', e:'Metamorphic rocks form when existing rocks are changed by heat and pressure.' },
  { subject:'science', grade:9, level:14, type:'mc',    q:'Which element has atomic number 6?', choices:['oxygen','carbon','nitrogen','helium'], a:'carbon', e:'Carbon has 6 protons and is the basis of organic chemistry.' },
  { subject:'science', grade:9, level:14, type:'guess', q:'The bending of light passing from one medium to another.', a:'refraction', e:'Refraction is bending due to speed change; reflection is bouncing back.' },
  { subject:'science', grade:9, level:14, type:'fib',   q:'The SI unit of force is the ____.', a:'newton', e:'1 newton accelerates 1 kg at 1 m/s^2. Named after Isaac Newton.' },

  /* Grade 10 - L15..L16 */
  { subject:'science', grade:10, level:15, type:'mc',    q:'Which blood type is the universal donor?', choices:['A+','O-','AB+','B-'], a:'O-', e:'O- has no A, B, or Rh antigens, so any recipient can accept it.' },
  { subject:'science', grade:10, level:15, type:'mc',    q:'DNA is made of building blocks called', choices:['amino acids','nucleotides','lipids','sugars'], a:'nucleotides', e:'Each nucleotide has a phosphate, a sugar, and a nitrogenous base (A, T, C, or G).' },
  { subject:'science', grade:10, level:15, type:'guess', q:'The passing of traits from parents to offspring.', a:'heredity', e:'Heredity uses DNA to pass characteristics through generations.' },
  { subject:'science', grade:10, level:16, type:'mc',    q:'How many chromosomes does a normal human somatic cell have?', choices:['21','23','44','46'], a:'46', e:'46 chromosomes in 23 pairs. Sperm and egg each carry 23.' },
  { subject:'science', grade:10, level:16, type:'fib',   q:'The pair of bases A pairs with in DNA is ____.', a:'T', e:'Base pairing: A-T and C-G in DNA. In RNA, T is replaced by U.' },
  { subject:'science', grade:10, level:16, type:'guess', q:'A change in DNA sequence that can affect traits.', a:'mutation', e:'Mutations can be harmful, beneficial, or neutral. They drive evolution.' },

  /* Grade 11 - L17..L18 */
  { subject:'science', grade:11, level:17, type:'mc',    q:'Which subatomic particle carries a negative charge?', choices:['proton','neutron','electron','photon'], a:'electron', e:'Electrons (-1) orbit; protons (+1) and neutrons (0) sit in the nucleus.' },
  { subject:'science', grade:11, level:17, type:'guess', q:'Einstein\'s famous equation relates energy, mass, and this.', a:'light', e:'E = mc^2. Mass and energy are equivalent; c is the speed of light.' },
  { subject:'science', grade:11, level:17, type:'fib',   q:'The powerhouse molecule of the cell is ____.', a:'ATP', e:'Adenosine TriPhosphate stores chemical energy in its phosphate bonds.' },
  { subject:'science', grade:11, level:18, type:'mc',    q:'What type of bond shares electrons?', choices:['ionic','covalent','metallic','hydrogen'], a:'covalent', e:'Covalent bonds share electron pairs (H2O). Ionic bonds transfer electrons (NaCl).' },
  { subject:'science', grade:11, level:18, type:'fib',   q:'A wave\'s number of cycles per second is its ____.', a:'frequency', e:'Frequency (Hz) counts cycles per second; wavelength is the distance between crests.' },

  /* Grade 12 - L19..L20 */
  { subject:'science', grade:12, level:19, type:'guess', q:'The scientist who proposed general relativity.', a:'Einstein', e:'Einstein published Special Relativity (1905) and General Relativity (1915).' },
  { subject:'science', grade:12, level:19, type:'fib',   q:'The organelle that packages proteins is the Golgi ____.', a:'apparatus', e:'The Golgi apparatus modifies, sorts, and packages proteins from the ER.' },
  { subject:'science', grade:12, level:19, type:'mc',    q:'Which law states that energy cannot be created or destroyed?', choices:['Newton\'s first','Conservation of energy','Ohm\'s law','Boyle\'s law'], a:'Conservation of energy', e:'The First Law of Thermodynamics.' },
  { subject:'science', grade:12, level:20, type:'mc',    q:'The Heisenberg uncertainty principle says we cannot know both', choices:['mass and charge','position and momentum','color and shape','time and temperature'], a:'position and momentum', e:'You cannot precisely know both a particle\'s position and momentum simultaneously.' },
  { subject:'science', grade:12, level:20, type:'fib',   q:'Quantum particles that carry electromagnetic force are ____.', a:'photons', e:'Photons are massless quanta of light and the mediators of the electromagnetic force.' },

  /* ============================ ENGLISH ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'english', grade:5, level:1, type:'mc',    q:'Which word is a noun?', choices:['run','happy','apple','quickly'], a:'apple', e:'A noun names a person, place, thing, or idea. Apple is a thing.' },
  { subject:'english', grade:5, level:1, type:'fib',   q:'The plural of "child" is ____.', a:'children', e:'"Child" has an irregular plural: children.' },
  { subject:'english', grade:5, level:1, type:'guess', q:'A word that describes a noun.', a:'adjective', e:'Adjectives describe nouns: red apple, tall boy.' },
  { subject:'english', grade:5, level:2, type:'mc',    q:'Which is a complete sentence?', choices:['Running fast.','The dog barks.','On the table.','Very cold today.'], a:'The dog barks.', e:'A complete sentence needs a subject and a verb.' },
  { subject:'english', grade:5, level:2, type:'fib',   q:'The opposite of "hot" is ____.', a:'cold', e:'Words with opposite meanings are antonyms.' },
  { subject:'english', grade:5, level:2, type:'mc',    q:'Which word rhymes with "cat"?', choices:['dog','hat','sun','mop'], a:'hat', e:'Rhymes end with the same sound; cat and hat end in "-at".' },
  { subject:'english', grade:5, level:3, type:'guess', q:'A story that is not true, often with talking animals.', a:'fable', e:'A fable is short fiction that teaches a moral, often with animal characters.' },
  { subject:'english', grade:5, level:3, type:'fib',   q:'The past tense of "go" is ____.', a:'went', e:'"Go" is an irregular verb; its past tense is "went".' },

  /* Grade 6 - L4..L6 */
  { subject:'english', grade:6, level:4, type:'mc',    q:'Which is a verb?', choices:['blue','table','swim','beautiful'], a:'swim', e:'A verb is an action or state; "swim" is an action.' },
  { subject:'english', grade:6, level:4, type:'guess', q:'A word that means the same as another.', a:'synonym', e:'Synonyms have similar meanings; antonyms have opposite meanings.' },
  { subject:'english', grade:6, level:4, type:'fib',   q:'"They\'re" is a contraction for "they ____".', a:'are', e:'They\'re = they are; different from their (possessive) and there (place).' },
  { subject:'english', grade:6, level:5, type:'mc',    q:'Which word is spelled correctly?', choices:['recieve','receive','receeve','receve'], a:'receive', e:'"I before E except after C" - after C use EI, so receive.' },
  { subject:'english', grade:6, level:5, type:'guess', q:'A word with the opposite meaning.', a:'antonym', e:'Antonyms are opposites: hot/cold, up/down.' },
  { subject:'english', grade:6, level:6, type:'fib',   q:'A group of words with subject and verb is a ____.', a:'sentence', e:'A sentence needs a subject and a verb and expresses a complete thought.' },
  { subject:'english', grade:6, level:6, type:'mc',    q:'Which is an adverb?', choices:['slow','slowly','slower','slowness'], a:'slowly', e:'Adverbs describe verbs and often end in -ly.' },

  /* Grade 7 - L7..L9 */
  { subject:'english', grade:7, level:7, type:'mc',    q:'Which sentence is punctuated correctly?', choices:['Whats up','What\'s up.','What\'s up?','What is up'], a:'What\'s up?', e:'A question ends with a question mark; "what\'s" needs an apostrophe.' },
  { subject:'english', grade:7, level:7, type:'guess', q:'A figure of speech comparing two unlike things using "like" or "as".', a:'simile', e:'Simile uses "like" or "as"; metaphor is a direct comparison.' },
  { subject:'english', grade:7, level:7, type:'fib',   q:'The main character of a story is called the ____.', a:'protagonist', e:'Protagonist = main character; antagonist opposes them.' },
  { subject:'english', grade:7, level:8, type:'mc',    q:'Which is a metaphor?', choices:['as brave as a lion','time is money','fast like the wind','runs quickly'], a:'time is money', e:'A metaphor says one thing IS another, no "like" or "as".' },
  { subject:'english', grade:7, level:8, type:'guess', q:'Giving human qualities to non-human things.', a:'personification', e:'Personification: "The wind whispered", "The sun smiled".' },
  { subject:'english', grade:7, level:9, type:'fib',   q:'A person, place, thing, or idea is called a ____.', a:'noun', e:'Common nouns are general (dog); proper nouns are specific (Rex).' },
  { subject:'english', grade:7, level:9, type:'mc',    q:'Which word is a preposition?', choices:['jump','under','she','fast'], a:'under', e:'Prepositions show relationships in space/time: in, on, under, before, with.' },

  /* Grade 8 - L10..L12 (new content) */
  { subject:'english', grade:8, level:10, type:'mc',    q:'Which is a subordinating conjunction?', choices:['and','because','or','but'], a:'because', e:'Subordinating conjunctions (because, although, since) introduce dependent clauses.' },
  { subject:'english', grade:8, level:10, type:'guess', q:'A word with the same sound but different spelling and meaning.', a:'homophone', e:'Homophones sound alike: their/there/they\'re, to/too/two.' },
  { subject:'english', grade:8, level:10, type:'fib',   q:'A verb form ending in -ing acting as a noun is a ____.', a:'gerund', e:'Gerund: "Swimming is fun" - "swimming" is a noun made from a verb.' },
  { subject:'english', grade:8, level:11, type:'mc',    q:'Greek myth: Who flew too close to the sun?', choices:['Achilles','Icarus','Odysseus','Perseus'], a:'Icarus', e:'Icarus wore wax wings made by his father Daedalus; the sun melted them.' },
  { subject:'english', grade:8, level:11, type:'guess', q:'Reference to a well-known person, place, or event.', a:'allusion', e:'An allusion is a passing reference to something the reader is expected to know.' },
  { subject:'english', grade:8, level:11, type:'fib',   q:'The word "Herculean" alludes to ____.', a:'Hercules', e:'Herculean means requiring great strength, referencing Hercules of Greek myth.' },
  { subject:'english', grade:8, level:12, type:'mc',    q:'Which is the passive voice?', choices:['The cat chased the mouse.','The mouse was chased by the cat.','The cat is chasing.','Chase the cat.'], a:'The mouse was chased by the cat.', e:'In passive voice, the subject receives the action: "was chased by".' },
  { subject:'english', grade:8, level:12, type:'guess', q:'The overall message or lesson of a literary work.', a:'theme', e:'Theme is the underlying message (love, courage, friendship), not the plot summary.' },

  /* Grade 9 - L13..L14 */
  { subject:'english', grade:9, level:13, type:'mc',    q:'Who wrote "Romeo and Juliet"?', choices:['Dickens','Shakespeare','Austen','Hemingway'], a:'Shakespeare', e:'William Shakespeare wrote Romeo and Juliet around 1595.' },
  { subject:'english', grade:9, level:13, type:'guess', q:'Repetition of consonant sounds at the start of words.', a:'alliteration', e:'Alliteration: "Peter Piper picked a peck of pickled peppers."' },
  { subject:'english', grade:9, level:13, type:'fib',   q:'A 14-line poem with a specific rhyme scheme is a ____.', a:'sonnet', e:'A sonnet is 14 lines of iambic pentameter; Shakespearean sonnets end with a couplet.' },
  { subject:'english', grade:9, level:14, type:'mc',    q:'The turning point of a story is the', choices:['exposition','climax','resolution','setting'], a:'climax', e:'Exposition -> rising action -> climax -> falling action -> resolution.' },
  { subject:'english', grade:9, level:14, type:'guess', q:'A long narrative poem about heroic deeds.', a:'epic', e:'Epics: The Iliad, The Odyssey, Beowulf.' },

  /* Grade 10 - L15..L16 */
  { subject:'english', grade:10, level:15, type:'fib',   q:'"I have a dream" was famously spoken by Martin Luther King ____.', a:'Jr', e:'MLK Jr. delivered the speech on August 28, 1963 during the March on Washington.' },
  { subject:'english', grade:10, level:15, type:'mc',    q:'Which is written in first person?', choices:['She walked home','You should try','I saw the light','They played'], a:'I saw the light', e:'First person uses I/we; second person uses you; third uses he/she/it/they.' },
  { subject:'english', grade:10, level:16, type:'mc',    q:'"The Great Gatsby" was written by', choices:['Steinbeck','Fitzgerald','Faulkner','Twain'], a:'Fitzgerald', e:'F. Scott Fitzgerald published The Great Gatsby in 1925.' },
  { subject:'english', grade:10, level:16, type:'guess', q:'A recurring symbol or idea in literature.', a:'motif', e:'Motifs are recurring elements that support the theme (e.g., light/dark, water).' },

  /* Grade 11 - L17..L18 */
  { subject:'english', grade:11, level:17, type:'mc',    q:'Who wrote "1984"?', choices:['Huxley','Orwell','Bradbury','Kafka'], a:'Orwell', e:'George Orwell published 1984 in 1949.' },
  { subject:'english', grade:11, level:17, type:'guess', q:'An extreme exaggeration used for effect.', a:'hyperbole', e:'Hyperbole is deliberate exaggeration: "I could eat a horse."' },
  { subject:'english', grade:11, level:18, type:'fib',   q:'"To be, or not to be" is from Shakespeare\'s ____.', a:'Hamlet', e:'From Hamlet\'s soliloquy, Act 3, Scene 1.' },
  { subject:'english', grade:11, level:18, type:'mc',    q:'Which is an example of onomatopoeia?', choices:['bright','buzz','tall','swift'], a:'buzz', e:'Onomatopoeia: words that sound like what they describe (buzz, hiss, boom).' },

  /* Grade 12 - L19..L20 */
  { subject:'english', grade:12, level:19, type:'guess', q:'The attitude of the author toward the subject.', a:'tone', e:'Tone is the author\'s attitude; mood is what the reader feels.' },
  { subject:'english', grade:12, level:19, type:'fib',   q:'A word that connects clauses (e.g., and, but, or) is a ____.', a:'conjunction', e:'FANBOYS: For, And, Nor, But, Or, Yet, So.' },
  { subject:'english', grade:12, level:20, type:'mc',    q:'"Stream of consciousness" writing was pioneered by', choices:['Twain','Woolf','Chaucer','Shakespeare'], a:'Woolf', e:'Virginia Woolf and James Joyce popularized stream-of-consciousness in modernist fiction.' },
  { subject:'english', grade:12, level:20, type:'guess', q:'The technique of foreshadowing hints at what?', a:'future events', e:'Foreshadowing gives clues about what will happen later in the story.' },

  /* ============================ HISTORY ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'history', grade:5, level:1, type:'mc',    q:'Who was the first President of the United States?', choices:['Lincoln','Adams','Washington','Jefferson'], a:'Washington', e:'George Washington served 1789-1797.' },
  { subject:'history', grade:5, level:1, type:'fib',   q:'Christopher Columbus sailed the ocean blue in ____.', a:'1492', e:'In 1492 Columbus sailed with three ships to the Americas.' },
  { subject:'history', grade:5, level:1, type:'guess', q:'The large stone tombs built in ancient Egypt for pharaohs.', a:'pyramids', e:'The Great Pyramid of Giza (~2560 BC) is the most famous.' },
  { subject:'history', grade:5, level:2, type:'mc',    q:'The Great Wall was built in', choices:['India','China','Japan','Egypt'], a:'China', e:'The Great Wall was built over centuries starting in the 7th century BC.' },
  { subject:'history', grade:5, level:2, type:'fib',   q:'The country that gave the Statue of Liberty to the US is ____.', a:'France', e:'France gifted Lady Liberty in 1886.' },
  { subject:'history', grade:5, level:3, type:'guess', q:'Ancient civilization known for gladiators and the Colosseum.', a:'Rome', e:'Ancient Rome built the Colosseum around 70-80 AD.' },
  { subject:'history', grade:5, level:3, type:'mc',    q:'On July 4, 1776, the US declared', choices:['war','independence','peace','statehood'], a:'independence', e:'The Declaration of Independence separated 13 colonies from Britain.' },

  /* Grade 6 - L4..L6 */
  { subject:'history', grade:6, level:4, type:'mc',    q:'Who wrote the Declaration of Independence?', choices:['Washington','Jefferson','Franklin','Adams'], a:'Jefferson', e:'Thomas Jefferson was the principal author.' },
  { subject:'history', grade:6, level:4, type:'guess', q:'The world war that ended in 1945.', a:'World War II', e:'WWII ended in 1945; Germany surrendered in May, Japan in September.' },
  { subject:'history', grade:6, level:5, type:'fib',   q:'Abraham Lincoln was the ____th US president.', a:'16', e:'Lincoln was the 16th President (1861-1865).' },
  { subject:'history', grade:6, level:5, type:'mc',    q:'The Renaissance began in', choices:['France','Germany','Italy','England'], a:'Italy', e:'The Renaissance ("rebirth") began in 14th-century Italy.' },
  { subject:'history', grade:6, level:6, type:'guess', q:'The ship that famously sank in 1912.', a:'Titanic', e:'The RMS Titanic hit an iceberg on April 14, 1912.' },
  { subject:'history', grade:6, level:6, type:'fib',   q:'Mahatma Gandhi led the independence movement of ____.', a:'India', e:'Gandhi\'s nonviolent resistance won India\'s independence in 1947.' },
  { subject:'history', grade:6, level:6, type:'mc',    q:'Who painted the Mona Lisa?', choices:['Michelangelo','Da Vinci','Raphael','Donatello'], a:'Da Vinci', e:'Leonardo da Vinci painted her around 1503-1519.' },

  /* Grade 7 - L7..L9 */
  { subject:'history', grade:7, level:7, type:'mc',    q:'The Berlin Wall fell in', choices:['1987','1989','1991','1993'], a:'1989', e:'The Wall opened on November 9, 1989.' },
  { subject:'history', grade:7, level:7, type:'guess', q:'The period of art and learning after the Middle Ages.', a:'Renaissance', e:'The Renaissance (14th-17th c.) revived classical art, science, and learning.' },
  { subject:'history', grade:7, level:8, type:'fib',   q:'The US Civil War ended in the year ____.', a:'1865', e:'General Lee surrendered at Appomattox on April 9, 1865.' },
  { subject:'history', grade:7, level:8, type:'mc',    q:'Who was the British PM during WWII?', choices:['Attlee','Chamberlain','Churchill','Blair'], a:'Churchill', e:'Winston Churchill became PM in May 1940.' },
  { subject:'history', grade:7, level:9, type:'guess', q:'The empire founded by Genghis Khan.', a:'Mongol', e:'The Mongol Empire (1206-1368) was the largest contiguous land empire in history.' },
  { subject:'history', grade:7, level:9, type:'mc',    q:'Which war was fought 1914-1918?', choices:['Civil War','WWI','WWII','Cold War'], a:'WWI', e:'World War I lasted July 1914 to November 1918.' },

  /* Grade 8 - L10..L12 (new content) */
  { subject:'history', grade:8, level:10, type:'mc',    q:'Which river was the cradle of ancient Egyptian civilization?', choices:['Tigris','Nile','Indus','Yangtze'], a:'Nile', e:'The Nile\'s yearly flooding made farming possible along its banks.' },
  { subject:'history', grade:8, level:10, type:'guess', q:'The ancient civilization between the Tigris and Euphrates rivers.', a:'Mesopotamia', e:'Mesopotamia ("land between rivers") is often called the cradle of civilization.' },
  { subject:'history', grade:8, level:10, type:'fib',   q:'The Great Wall of China was mainly built to keep out invaders from the ____.', a:'north', e:'Northern nomads like the Mongols were the main threat.' },
  { subject:'history', grade:8, level:11, type:'mc',    q:'The Roman Empire fell in AD', choices:['196','476','1066','1215'], a:'476', e:'The Western Roman Empire fell in 476 when Rome was overthrown by Odoacer.' },
  { subject:'history', grade:8, level:11, type:'guess', q:'The plague that killed a third of Europe in the 1300s.', a:'Black Death', e:'The Black Death (bubonic plague) killed 25-50 million people in Europe.' },
  { subject:'history', grade:8, level:11, type:'fib',   q:'Feudal Europe\'s social system tied peasants (serfs) to a piece of ____.', a:'land', e:'Serfs worked their lord\'s land in exchange for protection and a plot to farm.' },
  { subject:'history', grade:8, level:12, type:'mc',    q:'Who led the Protestant Reformation in 1517?', choices:['Martin Luther','King Henry','John Calvin','Thomas More'], a:'Martin Luther', e:'Martin Luther nailed his 95 Theses to a church door in Wittenberg.' },
  { subject:'history', grade:8, level:12, type:'guess', q:'The route named after a valuable trade good linking China to Europe.', a:'Silk Road', e:'The Silk Road carried silk, spices, and ideas between Asia and Europe for centuries.' },
  { subject:'history', grade:8, level:12, type:'fib',   q:'The Industrial Revolution began in ____ (country).', a:'Britain', e:'The Industrial Revolution started in Britain in the mid-1700s with textile machinery and steam power.' },

  /* Grade 9 - L13..L14 */
  { subject:'history', grade:9, level:13, type:'mc',    q:'The French Revolution began in', choices:['1776','1789','1804','1815'], a:'1789', e:'The Bastille was stormed on July 14, 1789.' },
  { subject:'history', grade:9, level:13, type:'guess', q:'The economic system Karl Marx criticized.', a:'capitalism', e:'Marx and Engels critiqued capitalism in Das Kapital and The Communist Manifesto.' },
  { subject:'history', grade:9, level:14, type:'fib',   q:'The Cold War ended in ____ (year).', a:'1991', e:'The Soviet Union dissolved on December 26, 1991.' },
  { subject:'history', grade:9, level:14, type:'mc',    q:'Which US president issued the Emancipation Proclamation?', choices:['Grant','Lincoln','Jefferson','Jackson'], a:'Lincoln', e:'Lincoln issued it on January 1, 1863.' },

  /* Grade 10 - L15..L16 */
  { subject:'history', grade:10, level:15, type:'guess', q:'The alliance system that led to WWI included this German-led group.', a:'Central Powers', e:'Germany, Austria-Hungary, Ottoman Empire, and Bulgaria.' },
  { subject:'history', grade:10, level:15, type:'fib',   q:'The atomic bomb was dropped on Hiroshima in ____ (year).', a:'1945', e:'August 6, 1945; Nagasaki was hit three days later.' },
  { subject:'history', grade:10, level:16, type:'mc',    q:'The Magna Carta was signed in', choices:['1066','1215','1492','1607'], a:'1215', e:'King John signed it in 1215, limiting royal power.' },
  { subject:'history', grade:10, level:16, type:'guess', q:'The 1929 event that started the Great Depression.', a:'stock market crash', e:'The Wall Street Crash of October 1929 triggered the Depression.' },

  /* Grade 11 - L17..L18 */
  { subject:'history', grade:11, level:17, type:'fib',   q:'Nelson Mandela was president of ____.', a:'South Africa', e:'Mandela became South Africa\'s first Black president in 1994.' },
  { subject:'history', grade:11, level:17, type:'mc',    q:'The Ottoman Empire fell after', choices:['WWI','WWII','Cold War','French Revolution'], a:'WWI', e:'The Ottoman Empire fell after WWI; Turkey became a republic in 1923.' },
  { subject:'history', grade:11, level:18, type:'guess', q:'The document that ended WWI and blamed Germany.', a:'Treaty of Versailles', e:'The 1919 Treaty of Versailles imposed harsh terms on Germany.' },
  { subject:'history', grade:11, level:18, type:'fib',   q:'The pharaoh whose tomb was found nearly intact in 1922 was ____.', a:'Tutankhamun', e:'Howard Carter discovered King Tut\'s tomb in the Valley of the Kings.' },

  /* Grade 12 - L19..L20 */
  { subject:'history', grade:12, level:19, type:'mc',    q:'The United Nations was founded in', choices:['1919','1939','1945','1955'], a:'1945', e:'The UN was founded on October 24, 1945 after WWII.' },
  { subject:'history', grade:12, level:19, type:'guess', q:'The Cold War standoff over missiles in the Caribbean in 1962.', a:'Cuban Missile Crisis', e:'The 13-day Cuban Missile Crisis was the closest the world came to nuclear war.' },
  { subject:'history', grade:12, level:20, type:'fib',   q:'The Roman general who crossed the Rubicon in 49 BC was Julius ____.', a:'Caesar', e:'"Crossing the Rubicon" now means passing a point of no return.' },
  { subject:'history', grade:12, level:20, type:'mc',    q:'Which document is considered the foundation of modern democracy?', choices:['Magna Carta','Ten Commandments','US Constitution','Napoleonic Code'], a:'US Constitution', e:'Ratified in 1788, the US Constitution established a modern representative democracy.' },

  /* ============================ GEOGRAPHY ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'geography', grade:5, level:1, type:'mc',    q:'How many continents are there?', choices:['5','6','7','8'], a:'7', e:'Africa, Antarctica, Asia, Australia/Oceania, Europe, N. America, S. America.' },
  { subject:'geography', grade:5, level:1, type:'fib',   q:'The capital of France is ____.', a:'Paris', e:'Paris has been the capital since the 10th century.' },
  { subject:'geography', grade:5, level:1, type:'guess', q:'The largest ocean on Earth.', a:'Pacific', e:'The Pacific covers about 63 million square miles.' },
  { subject:'geography', grade:5, level:2, type:'mc',    q:'Mount Everest is in', choices:['Andes','Alps','Himalayas','Rockies'], a:'Himalayas', e:'Everest (8,849 m) sits on the Nepal-Tibet border in the Himalayas.' },
  { subject:'geography', grade:5, level:2, type:'fib',   q:'The longest river in the world is the ____.', a:'Nile', e:'The Nile flows ~6,650 km north to the Mediterranean.' },
  { subject:'geography', grade:5, level:2, type:'guess', q:'The continent Egypt is in.', a:'Africa', e:'Egypt sits in northeastern Africa; Sinai extends into Asia.' },
  { subject:'geography', grade:5, level:3, type:'mc',    q:'Which is a desert?', choices:['Amazon','Sahara','Everglades','Congo'], a:'Sahara', e:'The Sahara is the largest hot desert; the Amazon and Congo are rainforests.' },
  { subject:'geography', grade:5, level:3, type:'fib',   q:'The capital of Japan is ____.', a:'Tokyo', e:'Tokyo (formerly Edo) has been Japan\'s capital since 1868.' },

  /* Grade 6 - L4..L6 */
  { subject:'geography', grade:6, level:4, type:'mc',    q:'Which country has the largest population?', choices:['USA','India','China','Russia'], a:'India', e:'India surpassed China as the most populous country in 2023.' },
  { subject:'geography', grade:6, level:4, type:'guess', q:'The imaginary line at 0 degrees latitude.', a:'equator', e:'The Equator divides Earth into Northern and Southern Hemispheres.' },
  { subject:'geography', grade:6, level:5, type:'fib',   q:'The capital of Australia is ____.', a:'Canberra', e:'Canberra was purpose-built in 1913 as a compromise between Sydney and Melbourne.' },
  { subject:'geography', grade:6, level:5, type:'mc',    q:'Which is NOT a Great Lake?', choices:['Erie','Superior','Michigan','Tahoe'], a:'Tahoe', e:'The Great Lakes are Superior, Michigan, Huron, Erie, Ontario (HOMES).' },
  { subject:'geography', grade:6, level:6, type:'guess', q:'The country shaped like a boot.', a:'Italy', e:'Italy\'s peninsula is famously shaped like a boot.' },
  { subject:'geography', grade:6, level:6, type:'fib',   q:'The Amazon River is in ____ (continent).', a:'South America', e:'The Amazon flows mostly through Brazil.' },
  { subject:'geography', grade:6, level:6, type:'mc',    q:'The capital of Canada is', choices:['Toronto','Vancouver','Ottawa','Montreal'], a:'Ottawa', e:'Ottawa was chosen as capital in 1857.' },

  /* Grade 7 - L7..L9 */
  { subject:'geography', grade:7, level:7, type:'mc',    q:'Which strait separates Europe and Africa?', choices:['Bering','Gibraltar','Bosphorus','Malacca'], a:'Gibraltar', e:'The Strait of Gibraltar (13 km at narrowest) separates Spain from Morocco.' },
  { subject:'geography', grade:7, level:7, type:'guess', q:'The largest country by land area.', a:'Russia', e:'Russia covers ~17 million sq km across 11 time zones.' },
  { subject:'geography', grade:7, level:8, type:'fib',   q:'The capital of Egypt is ____.', a:'Cairo', e:'Cairo (Al-Qahirah) is the largest city in the Arab world.' },
  { subject:'geography', grade:7, level:8, type:'mc',    q:'Which river runs through Paris?', choices:['Thames','Rhine','Seine','Danube'], a:'Seine', e:'The Seine runs through Paris; the Thames flows through London.' },
  { subject:'geography', grade:7, level:9, type:'guess', q:'The mountain range along the west coast of South America.', a:'Andes', e:'The Andes stretch ~7,000 km, the longest continental range in the world.' },
  { subject:'geography', grade:7, level:9, type:'mc',    q:'Which country has the most time zones?', choices:['USA','China','Russia','France'], a:'France', e:'France has 12 time zones due to overseas territories worldwide.' },

  /* Grade 8 - L10..L12 (new content) */
  { subject:'geography', grade:8, level:10, type:'mc',    q:'Which continent has no permanent human population?', choices:['Australia','Antarctica','South America','Africa'], a:'Antarctica', e:'Antarctica has only research stations; no permanent residents due to extreme cold.' },
  { subject:'geography', grade:8, level:10, type:'guess', q:'A ring of high pressure and low winds near the equator.', a:'doldrums', e:'The doldrums frustrated sailing ships because of the lack of consistent wind.' },
  { subject:'geography', grade:8, level:10, type:'fib',   q:'A large flat landform is a ____.', a:'plateau', e:'A plateau is a flat elevated area, often bounded by cliffs.' },
  { subject:'geography', grade:8, level:11, type:'mc',    q:'Which of these is a tectonic plate?', choices:['Pacific','Atlantic','Arctic','Indian Ocean'], a:'Pacific', e:'The Pacific Plate is the largest oceanic plate.' },
  { subject:'geography', grade:8, level:11, type:'guess', q:'A river that flows into a larger river.', a:'tributary', e:'Tributaries feed into a main river; the opposite (branch outward) is a distributary.' },
  { subject:'geography', grade:8, level:11, type:'fib',   q:'The top of a mountain is called the ____.', a:'peak', e:'Peak, summit, or crest all name a mountain\'s highest point.' },
  { subject:'geography', grade:8, level:12, type:'mc',    q:'Which climate is hot and wet year-round?', choices:['tundra','tropical rainforest','desert','Mediterranean'], a:'tropical rainforest', e:'Tropical rainforests near the equator get heavy rain and stay warm all year.' },
  { subject:'geography', grade:8, level:12, type:'guess', q:'The natural process by which rocks are broken down.', a:'weathering', e:'Weathering breaks rocks in place; erosion carries them away.' },
  { subject:'geography', grade:8, level:12, type:'fib',   q:'Land forms shaped by moving ice are called ____.', a:'glacial', e:'Glacial landforms include U-shaped valleys, moraines, and fjords.' },

  /* Grade 9 - L13..L14 */
  { subject:'geography', grade:9, level:13, type:'mc',    q:'The capital of Brazil is', choices:['Rio','Sao Paulo','Brasilia','Salvador'], a:'Brasilia', e:'Brasilia became capital in 1960, built inland to promote development.' },
  { subject:'geography', grade:9, level:13, type:'guess', q:'The narrow waterway separating Alaska from Russia.', a:'Bering Strait', e:'The Bering Strait is ~85 km wide and links the Pacific and Arctic Oceans.' },
  { subject:'geography', grade:9, level:14, type:'fib',   q:'The tallest mountain in Africa is Mount ____.', a:'Kilimanjaro', e:'Kilimanjaro (5,895 m) is a dormant volcano in Tanzania.' },
  { subject:'geography', grade:9, level:14, type:'mc',    q:'Which country is landlocked?', choices:['Portugal','Switzerland','Vietnam','Chile'], a:'Switzerland', e:'Switzerland is surrounded by France, Germany, Austria, Italy, Liechtenstein.' },

  /* Grade 10 - L15..L16 */
  { subject:'geography', grade:10, level:15, type:'guess', q:'The line at 180 degrees longitude where the day changes.', a:'International Date Line', e:'Crossing the date line westward adds a day; eastward subtracts one.' },
  { subject:'geography', grade:10, level:15, type:'fib',   q:'The smallest country in the world is ____ City.', a:'Vatican', e:'Vatican City (~0.44 sq km) is inside Rome.' },
  { subject:'geography', grade:10, level:16, type:'mc',    q:'The Ring of Fire is associated with', choices:['deserts','earthquakes','glaciers','tundras'], a:'earthquakes', e:'The Ring of Fire hosts 75% of the world\'s volcanoes and 90% of earthquakes.' },
  { subject:'geography', grade:10, level:16, type:'guess', q:'The deepest ocean trench.', a:'Mariana Trench', e:'The Mariana Trench reaches ~11,000 m at Challenger Deep.' },

  /* Grade 11 - L17..L18 */
  { subject:'geography', grade:11, level:17, type:'fib',   q:'The capital of Kazakhstan is ____.', a:'Astana', e:'Astana became capital in 1997, replacing Almaty.' },
  { subject:'geography', grade:11, level:17, type:'mc',    q:'Which river is the longest in Asia?', choices:['Ganges','Mekong','Yangtze','Indus'], a:'Yangtze', e:'The Yangtze (~6,300 km) is the third-longest river in the world.' },
  { subject:'geography', grade:11, level:18, type:'guess', q:'The imaginary lines running north-south on a map.', a:'longitude', e:'Longitude runs pole to pole; latitude runs east-west.' },
  { subject:'geography', grade:11, level:18, type:'fib',   q:'The capital of Iceland is ____.', a:'Reykjavik', e:'Reykjavik is the northernmost capital of a sovereign state.' },

  /* Grade 12 - L19..L20 */
  { subject:'geography', grade:12, level:19, type:'mc',    q:'Which sea is the saltiest?', choices:['Mediterranean','Dead','Red','Caspian'], a:'Dead', e:'The Dead Sea has ~34% salinity, 10x saltier than the ocean.' },
  { subject:'geography', grade:12, level:19, type:'guess', q:'The scientific term for the study of maps.', a:'cartography', e:'Cartography combines geography, art, and science to design maps.' },
  { subject:'geography', grade:12, level:20, type:'fib',   q:'The world\'s largest hot desert is the ____ Desert.', a:'Sahara', e:'The Sahara covers ~9 million sq km across North Africa.' },
  { subject:'geography', grade:12, level:20, type:'mc',    q:'A group of islands is called an', choices:['isthmus','atoll','archipelago','peninsula'], a:'archipelago', e:'Archipelago = a chain or cluster of islands (e.g., the Philippines).' },

  /* ============================ ARALING PANLIPUNAN (Tagalog) ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'araling', grade:5, level:1, type:'mc',    q:'Sino ang pambansang bayani ng Pilipinas?', choices:['Andres Bonifacio','Jose Rizal','Emilio Aguinaldo','Apolinario Mabini'], a:'Jose Rizal', e:'Si Dr. Jose Rizal ang kinilalang pambansang bayani dahil sa kanyang mga akda.' },
  { subject:'araling', grade:5, level:1, type:'fib',   q:'Ang pambansang bulaklak ng Pilipinas ay ____.', a:'sampaguita', e:'Ang sampaguita ay itinalagang pambansang bulaklak noong 1934.' },
  { subject:'araling', grade:5, level:1, type:'guess', q:'Ang pinakamalaking isla ng Pilipinas.', a:'Luzon', e:'Ang Luzon ang pinakamalaki; kinaroroonan ng Maynila.' },
  { subject:'araling', grade:5, level:2, type:'mc',    q:'Kailan ang Araw ng Kalayaan ng Pilipinas?', choices:['Hunyo 12','Hulyo 4','Agosto 21','Nobyembre 30'], a:'Hunyo 12', e:'Ipinahayag ni Aguinaldo ang kalayaan noong Hunyo 12, 1898 sa Kawit, Cavite.' },
  { subject:'araling', grade:5, level:2, type:'fib',   q:'Ang kabisera ng Pilipinas ay ____.', a:'Manila', e:'Ang Maynila (Manila) ay ang opisyal na kabisera.' },
  { subject:'araling', grade:5, level:3, type:'guess', q:'Ang pambansang ibon ng Pilipinas.', a:'agila', e:'Ang Philippine Eagle o Haribon ay ang pambansang ibon.' },
  { subject:'araling', grade:5, level:3, type:'mc',    q:'Ilang pangunahing pangkat ng isla ang Pilipinas?', choices:['3','7','3 pangkat','7,641'], a:'3 pangkat', e:'Luzon, Visayas, at Mindanao ang tatlong pangunahing pangkat ng isla.' },

  /* Grade 6 - L4..L6 */
  { subject:'araling', grade:6, level:4, type:'mc',    q:'Sino ang unang pangulo ng Pilipinas?', choices:['Manuel Quezon','Jose Laurel','Emilio Aguinaldo','Manuel Roxas'], a:'Emilio Aguinaldo', e:'Si Aguinaldo ang unang pangulo sa ilalim ng Republikang Malolos noong 1899.' },
  { subject:'araling', grade:6, level:4, type:'guess', q:'Ang taon na dumating si Ferdinand Magellan sa Pilipinas.', a:'1521', e:'Dumaong si Magellan sa Homonhon noong Marso 16, 1521.' },
  { subject:'araling', grade:6, level:5, type:'fib',   q:'Si ____ ang bayaning nanalo laban kay Magellan sa Mactan.', a:'Lapu-Lapu', e:'Si Lapu-Lapu, datu ng Mactan, ang tumalo kay Magellan noong Abril 27, 1521.' },
  { subject:'araling', grade:6, level:5, type:'mc',    q:'Ilang rehiyon meron ang Pilipinas?', choices:['15','17','18','20'], a:'17', e:'Ang Pilipinas ay hinati sa 17 rehiyon, kabilang ang NCR, CAR, at BARMM.' },
  { subject:'araling', grade:6, level:6, type:'guess', q:'Ang pambansang wika ng Pilipinas.', a:'Filipino', e:'Ang Filipino, na batay sa Tagalog, ang pambansang wika.' },
  { subject:'araling', grade:6, level:6, type:'fib',   q:'Ang unang aklat ni Rizal ay pinamagatang Noli Me ____.', a:'Tangere', e:'"Noli Me Tangere" (1887) ay nagsiwalat ng abuso ng mga prayle.' },
  { subject:'araling', grade:6, level:6, type:'mc',    q:'Alin ang pinakamataas na bundok sa Pilipinas?', choices:['Mayon','Apo','Pulag','Pinatubo'], a:'Apo', e:'Ang Mount Apo (2,954 m) sa Davao ang pinakamataas na bundok.' },

  /* Grade 7 - L7..L9 */
  { subject:'araling', grade:7, level:7, type:'mc',    q:'Sino ang tinaguriang "Ama ng Rebolusyong Pilipino"?', choices:['Jose Rizal','Andres Bonifacio','Apolinario Mabini','Marcelo del Pilar'], a:'Andres Bonifacio', e:'Si Bonifacio ang nagtatag ng Katipunan noong 1892.' },
  { subject:'araling', grade:7, level:7, type:'guess', q:'Ang lihim na samahang binuo ni Andres Bonifacio.', a:'Katipunan', e:'Itinatag ang KKK noong Hulyo 7, 1892 sa Tondo.' },
  { subject:'araling', grade:7, level:8, type:'fib',   q:'Ang lugar kung saan binaril si Rizal, ngayon ay ____ Park.', a:'Rizal', e:'Binaril si Rizal sa Bagumbayan (Luneta/Rizal Park) noong Disyembre 30, 1896.' },
  { subject:'araling', grade:7, level:8, type:'mc',    q:'Sino ang tinaguriang "Utak ng Rebolusyon"?', choices:['Bonifacio','Mabini','Rizal','Aguinaldo'], a:'Mabini', e:'Si Apolinario Mabini, "Dakilang Lumpo", ang matalinong utak ng rebolusyon.' },
  { subject:'araling', grade:7, level:9, type:'guess', q:'Ang pangalan ng rebolusyong pumatalsik kay Marcos noong 1986.', a:'EDSA', e:'Ang EDSA People Power (Peb. 22-25, 1986) ay walang-dugong pagpapatalsik.' },
  { subject:'araling', grade:7, level:9, type:'fib',   q:'Ang pinakamalaking lawa sa Pilipinas ay Lawa ng ____.', a:'Laguna', e:'Laguna de Bay: 949 sq km, pinakamalaking lawa sa Pilipinas.' },

  /* Grade 8 - L10..L12 (Asya / new content) */
  { subject:'araling', grade:8, level:10, type:'mc',    q:'Aling ilog ang pinakamahalaga sa kabihasnang Tsino?', choices:['Ganges','Yangtze','Mekong','Indus'], a:'Yangtze', e:'Ang Yangtze at Yellow River (Huang He) ang pinakamahalaga sa sinaunang Tsina.' },
  { subject:'araling', grade:8, level:10, type:'guess', q:'Ang pinakamalaking kontinente sa mundo.', a:'Asya', e:'Ang Asya ang pinakamalaki sa laki at populasyon.' },
  { subject:'araling', grade:8, level:10, type:'fib',   q:'Ang tinaguriang "Bubong ng Mundo" ay ang bulubunduking ____.', a:'Himalaya', e:'Nasa Himalayas ang Mount Everest, tinaguriang "Bubong ng Mundo".' },
  { subject:'araling', grade:8, level:11, type:'mc',    q:'Sino ang nagtatag ng relihiyong Islam?', choices:['Buddha','Confucius','Muhammad','Jesus'], a:'Muhammad', e:'Si Propeta Muhammad ang nagtatag ng Islam noong ika-7 dantaon.' },
  { subject:'araling', grade:8, level:11, type:'guess', q:'Ang sistema ng pagkakastilo ng lipunan sa India.', a:'caste', e:'Ang caste system ay panlipunang hirarkiya sa India batay sa relihiyon at tradisyon.' },
  { subject:'araling', grade:8, level:12, type:'fib',   q:'Ang unang bansang Europeo na nakarating sa Asya sa pamamagitan ng ruta sa dagat ay ang ____.', a:'Portugal', e:'Si Vasco da Gama ng Portugal ay unang nakarating sa India sa dagat noong 1498.' },
  { subject:'araling', grade:8, level:12, type:'mc',    q:'Alin ang bansang hindi nakolonya sa Timog-Silangang Asya?', choices:['Vietnam','Thailand','Indonesia','Philippines'], a:'Thailand', e:'Ang Thailand (Siam) ang natatanging bansa sa TS-Asya na hindi nakolonya ng mga Europeo.' },

  /* Grade 9 - L13..L14 */
  { subject:'araling', grade:9, level:13, type:'mc',    q:'Aling bansa ang naghahari sa Pilipinas mula 1898 hanggang 1946?', choices:['Espanya','Estados Unidos','Hapon','Britanya'], a:'Estados Unidos', e:'Sa Kasunduan sa Paris (1898), inilipat ng Espanya ang Pilipinas sa Amerika.' },
  { subject:'araling', grade:9, level:13, type:'guess', q:'Ang tatlong sangay ng gobyerno: Ehekutibo, Lehislatibo, at ito.', a:'Hudikatura', e:'Ehekutibo (Pangulo), Lehislatibo (Kongreso), Hudikatura (Korte Suprema).' },
  { subject:'araling', grade:9, level:14, type:'mc',    q:'Anong sistema ng gobyerno ang Pilipinas?', choices:['Monarkiya','Presidensyal','Parlamentaryo','Pederal'], a:'Presidensyal', e:'Ang Pangulo ay pinuno ng estado at pinuno ng pamahalaan, hinahalal ng bayan.' },
  { subject:'araling', grade:9, level:14, type:'fib',   q:'Ilan ang senador sa Senado ng Pilipinas?', a:'24', e:'24 senador; bawat isa ay 6 na taon; kalahati ay hinahalal bawat 3 taon.' },

  /* Grade 10 - L15..L16 */
  { subject:'araling', grade:10, level:15, type:'mc',    q:'Sino ang unang babaeng pangulo ng Pilipinas?', choices:['Gloria Arroyo','Miriam Santiago','Corazon Aquino','Leni Robredo'], a:'Corazon Aquino', e:'Si Cory Aquino ay Pangulo mula 1986 hanggang 1992.' },
  { subject:'araling', grade:10, level:15, type:'guess', q:'Ang pinakamahalagang batas na inilalatag ang balangkas ng pamahalaan.', a:'Konstitusyon', e:'Ang 1987 Konstitusyon ang kasalukuyang saligang batas.' },
  { subject:'araling', grade:10, level:16, type:'fib',   q:'Ang kasunduan ng 1898 na naglipat ng Pilipinas sa Amerika ay Kasunduan sa ____.', a:'Paris', e:'Ang Kasunduan sa Paris ay tumapos sa Digmaang Espanyol-Amerikano.' },
  { subject:'araling', grade:10, level:16, type:'guess', q:'Ang buwis na binabayaran ng mga negosyo at manggagawa sa gobyerno.', a:'buwis', e:'Ang buwis (tax) ay pangunahing pinagmumulan ng kita ng pamahalaan para sa mga serbisyo publiko.' },

  /* Grade 11 - L17..L18 */
  { subject:'araling', grade:11, level:17, type:'mc',    q:'Aling batas ang nagbigay ng kalayaan sa Pilipinas mula sa Amerika?', choices:['Jones Law','Tydings-McDuffie Act','Bell Trade Act','Manila Pact'], a:'Tydings-McDuffie Act', e:'Ang Tydings-McDuffie Act (1934) ay nagtakda ng 10-taong transisyon patungo sa kalayaan.' },
  { subject:'araling', grade:11, level:17, type:'guess', q:'Ang kilusang nakikibaka para sa reporma mula sa Espanya sa pamamagitan ng pahayagan.', a:'Propaganda Movement', e:'Nila Rizal, del Pilar, at Lopez Jaena; ginamit ang La Solidaridad.' },
  { subject:'araling', grade:11, level:18, type:'fib',   q:'Ang batas na nagtatag sa BARMM ay tinatawag na ____ Basic Law.', a:'Bangsamoro', e:'RA 11054 (2018) ang nagtatag sa Bangsamoro Autonomous Region.' },
  { subject:'araling', grade:11, level:18, type:'mc',    q:'Alin ang unang republikang itinatag sa Asya?', choices:['Japan','China','Republikang Malolos','India'], a:'Republikang Malolos', e:'Ang Republikang Malolos (1899) ang unang demokratikong republika sa Asya.' },

  /* Grade 12 - L19..L20 */
  { subject:'araling', grade:12, level:19, type:'guess', q:'Ang pandaigdigang samahan pagkatapos ng WWII na miyembro ang Pilipinas.', a:'United Nations', e:'Ang Pilipinas ay isa sa 51 orihinal na miyembro ng UN noong 1945.' },
  { subject:'araling', grade:12, level:19, type:'fib',   q:'Ang unang Pinoy na Pangulo ng UN General Assembly ay ____ Romulo.', a:'Carlos', e:'Si Carlos P. Romulo ay pinili noong 1949, unang Asyano sa posisyon.' },
  { subject:'araling', grade:12, level:20, type:'mc',    q:'Alin ang pandaigdigang samahan sa kalakalan na kasapi ang Pilipinas?', choices:['NATO','ASEAN','EU','G7'], a:'ASEAN', e:'Ang Pilipinas ay founding member ng ASEAN (Association of Southeast Asian Nations) noong 1967.' },
  { subject:'araling', grade:12, level:20, type:'guess', q:'Ang teritoryong pinag-aagawan ng Pilipinas, Tsina, at iba pang bansa.', a:'West Philippine Sea', e:'Kilala rin bilang South China Sea; may kasangkot na hindi pagkakasundo sa mga isla at karagatan.' },

  /* ============================ FILIPINO (Tagalog) ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'filipino', grade:5, level:1, type:'mc',    q:'Alin sa mga sumusunod ang pangngalan?', choices:['tumakbo','maganda','mansanas','mabilis'], a:'mansanas', e:'Ang pangngalan ay pangalan ng tao, bagay, lugar, o pangyayari.' },
  { subject:'filipino', grade:5, level:1, type:'fib',   q:'Ang salitang tumutukoy sa kilos o galaw ay tinatawag na ____.', a:'pandiwa', e:'Ang pandiwa ay bahagi ng pananalita na nagsasabi ng aksyon.' },
  { subject:'filipino', grade:5, level:1, type:'guess', q:'Ang salitang naglalarawan ng pangngalan.', a:'pang-uri', e:'Ang pang-uri ay naglalarawan sa pangngalan (mabait, malaki, maganda).' },
  { subject:'filipino', grade:5, level:2, type:'mc',    q:'Ano ang kabaligtaran ng "maliit"?', choices:['maganda','mabait','malaki','mahaba'], a:'malaki', e:'Kasalungat (antonym) ang tawag sa may kabaligtarang kahulugan.' },
  { subject:'filipino', grade:5, level:2, type:'fib',   q:'Ang pambansang alay sa mga Pilipino ay ang Pambansang ____.', a:'Awit', e:'"Lupang Hinirang" ang pambansang awit ng Pilipinas.' },
  { subject:'filipino', grade:5, level:3, type:'guess', q:'Salita na katunog o may parehong tunog sa dulo.', a:'tugma', e:'Ang tugma ay ginagamit sa tula at kanta.' },
  { subject:'filipino', grade:5, level:3, type:'mc',    q:'Alin sa mga sumusunod ay panghalip?', choices:['bahay','ako','malaki','tumakbo'], a:'ako', e:'"Ako", "ikaw", "siya" ay mga panghalip panao.' },

  /* Grade 6 - L4..L6 */
  { subject:'filipino', grade:6, level:4, type:'mc',    q:'Ilan ang bahagi ng pananalita sa Filipino?', choices:['6','7','8','9'], a:'8', e:'Walo: pangngalan, panghalip, pandiwa, pang-uri, pang-abay, pang-ukol, pangatnig, pandamdam.' },
  { subject:'filipino', grade:6, level:4, type:'guess', q:'Ang tawag sa dalawang salita na pinagsama para bumuo ng bagong salita.', a:'tambalan', e:'Halimbawa: "silid-tulugan", "bahay-aliwan".' },
  { subject:'filipino', grade:6, level:5, type:'fib',   q:'Ang isang linya ng tula ay tinatawag na ____.', a:'taludtod', e:'Pangkat ng mga taludtod: saknong.' },
  { subject:'filipino', grade:6, level:5, type:'mc',    q:'Alin ang tamang paggamit ng "ng" at "nang"?', choices:['Kumain ng adobo. Umuwi nang maaga.','Kumain nang adobo. Umuwi ng maaga.','Kumain ng adobo. Umuwi ng maaga.','Kumain nang adobo. Umuwi nang maaga.'], a:'Kumain ng adobo. Umuwi nang maaga.', e:'"Ng" ay para sa pangngalan; "nang" ay para sa pandiwa/pang-abay.' },
  { subject:'filipino', grade:6, level:6, type:'guess', q:'Ang bahagi ng pananalita na nagpapahayag ng damdamin.', a:'pandamdam', e:'Halimbawa: "Aba!", "Naku!", "Aray!".' },
  { subject:'filipino', grade:6, level:6, type:'fib',   q:'Ang salaysay ng buhay ng isang tao na sinulat niya mismo ay ____.', a:'talambuhay', e:'Sariling talambuhay (autobiograpiya) ay isinulat ng tao mismo.' },
  { subject:'filipino', grade:6, level:6, type:'mc',    q:'Alin ang pangatnig?', choices:['at','ako','maganda','bahay'], a:'at', e:'Ang pangatnig ay nag-uugnay ng salita/parirala: at, ngunit, o, kung.' },

  /* Grade 7 - L7..L9 */
  { subject:'filipino', grade:7, level:7, type:'mc',    q:'Sino ang sumulat ng "Noli Me Tangere"?', choices:['Andres Bonifacio','Jose Rizal','Francisco Balagtas','Amado Hernandez'], a:'Jose Rizal', e:'Isinulat ni Rizal ang Noli noong 1887 sa Berlin, Germany.' },
  { subject:'filipino', grade:7, level:7, type:'guess', q:'Tayutay na naghahambing gamit ang "parang" o "tulad ng".', a:'pagtutulad', e:'Simile sa Filipino: "Mabait siya parang santo".' },
  { subject:'filipino', grade:7, level:8, type:'fib',   q:'Ang tayutay na nagbibigay ng katangian ng tao sa bagay o hayop ay ____.', a:'pagbibigay-katauhan', e:'Personipikasyon: "Kumaway ang mga puno".' },
  { subject:'filipino', grade:7, level:8, type:'mc',    q:'Sino ang tinaguriang "Prinsipe ng Makatang Tagalog"?', choices:['Jose Rizal','Amado Hernandez','Francisco Balagtas','Lope K. Santos'], a:'Francisco Balagtas', e:'Sikat siya sa obra maestra na "Florante at Laura".' },
  { subject:'filipino', grade:7, level:9, type:'guess', q:'Ang tawag sa maikling kuwento na nagtuturo ng aral, may hayop na tauhan.', a:'pabula', e:'Ang pabula ay parang fable sa English.' },
  { subject:'filipino', grade:7, level:9, type:'fib',   q:'Ang unang pambansang epiko ng Pilipinas ay ang ____.', a:'Ibalon', e:'Ang Ibalon ng Bicol ay tungkol sa Baltog, Handyong, at Bantong.' },

  /* Grade 8 - L10..L12 (Panitikang Asyano) */
  { subject:'filipino', grade:8, level:10, type:'mc',    q:'Sa aling bansa nagmula ang haiku?', choices:['Tsina','Korea','Japan','Vietnam'], a:'Japan', e:'Ang haiku ay Japanese poetry na may 5-7-5 na pantig sa 3 linya.' },
  { subject:'filipino', grade:8, level:10, type:'guess', q:'Ang pambansang panitikan ng India, may 24,000 taludtod na epiko.', a:'Ramayana', e:'Ang Ramayana ay tungkol kay Rama at Sita, isinulat ni Valmiki.' },
  { subject:'filipino', grade:8, level:11, type:'fib',   q:'Ang haiku ay may ____-7-5 na pantig sa bawat linya.', a:'5', e:'Ang haiku ay 3-linyang tula na may 5-7-5 na pantig.' },
  { subject:'filipino', grade:8, level:11, type:'mc',    q:'Aling epiko ang tungkol sa mga digmaan ng India?', choices:['Ramayana','Mahabharata','Iliad','Gilgamesh'], a:'Mahabharata', e:'Ang Mahabharata ay pinakamahabang epiko sa mundo; naglalaman ng Bhagavad Gita.' },
  { subject:'filipino', grade:8, level:12, type:'guess', q:'Ang pinakamatandang epiko sa mundo, mula sa Mesopotamia.', a:'Gilgamesh', e:'Ang Epiko ni Gilgamesh ay sinulat sa cuneiform, ~2100 BCE.' },
  { subject:'filipino', grade:8, level:12, type:'fib',   q:'Ang isang tradisyunal na tulang Tsino na maikli at may malalalim na kahulugan ay tinatawag na ____.', a:'shi', e:'Ang shi ay klasikal na Chinese poetry; mayroong iba\'t ibang anyo.' },

  /* Grade 9 - L13..L14 */
  { subject:'filipino', grade:9, level:13, type:'mc',    q:'Alin ang epikong Ilokano?', choices:['Biag ni Lam-ang','Hinilawod','Ibalon','Darangen'], a:'Biag ni Lam-ang', e:'Ang "Biag ni Lam-ang" ay epiko ng mga Ilokano.' },
  { subject:'filipino', grade:9, level:13, type:'guess', q:'Ang tayutay na nagpapalabis para sa diin.', a:'pagmamalabis', e:'Hyperbole: "Mamamatay ako sa gutom!" - hindi literal.' },
  { subject:'filipino', grade:9, level:14, type:'fib',   q:'Ang sequel ni Rizal sa Noli Me Tangere ay ang ____.', a:'El Filibusterismo', e:'"El Filibusterismo" (1891) ay pangalawang nobela, mas rebolusyonaryo.' },
  { subject:'filipino', grade:9, level:14, type:'mc',    q:'Ano ang ibig sabihin ng "salawikain"?', choices:['tugma','tula','kasabihan','alamat'], a:'kasabihan', e:'Ang salawikain (proverb) ay maikling kasabihan na naglalaman ng aral.' },

  /* Grade 10 - L15..L16 */
  { subject:'filipino', grade:10, level:15, type:'mc',    q:'Sino ang sumulat ng "Florante at Laura"?', choices:['Balagtas','Rizal','Bonifacio','Hernandez'], a:'Balagtas', e:'"Florante at Laura" (1838) ay isinulat ni Francisco Balagtas.' },
  { subject:'filipino', grade:10, level:15, type:'guess', q:'Ang panitikang nagsasalaysay ng pinagmulan ng lugar o bagay.', a:'alamat', e:'Halimbawa: alamat ng pinya, alamat ng bulkang Mayon.' },
  { subject:'filipino', grade:10, level:16, type:'fib',   q:'Ang tauhang kalaban ng pangunahing tauhan ay tinatawag na ____.', a:'kontrabida', e:'Bida (protagonist) vs. kontrabida (antagonist).' },
  { subject:'filipino', grade:10, level:16, type:'mc',    q:'Aling anyo ng panitikan ay may 3 saknong at 4 na linya bawat isa?', choices:['tanaga','dalit','ambahan','diona'], a:'tanaga', e:'Ang tanaga ay 4-linya sa isang saknong na may 7-7-7-7 na pantig; may aral.' },

  /* Grade 11 - L17..L18 */
  { subject:'filipino', grade:11, level:17, type:'mc',    q:'Sino ang tinaguriang "Ama ng Balarilang Tagalog"?', choices:['Jose Rizal','Lope K. Santos','Balagtas','Bienvenido Lumbera'], a:'Lope K. Santos', e:'Sumulat ng "Balarila ng Wikang Pambansa" (1940).' },
  { subject:'filipino', grade:11, level:17, type:'guess', q:'Ang matandang alpabetong Filipino bago dumating ang mga Espanyol.', a:'baybayin', e:'Ang Baybayin ay sinaunang sistema ng pagsulat mula sa 1200s.' },
  { subject:'filipino', grade:11, level:18, type:'fib',   q:'Ang unang nobelang Filipino ay Ninay, sinulat ni Pedro ____.', a:'Paterno', e:'Sinulat ni Pedro Paterno ang "Ninay" (1885).' },
  { subject:'filipino', grade:11, level:18, type:'mc',    q:'Aling akda ni Rizal ay naglalarawan ng edukasyong Pilipino?', choices:['Mi Ultimo Adios','A la Juventud Filipina','Noli Me Tangere','El Filibusterismo'], a:'A la Juventud Filipina', e:'Isinulat noong 1879, hinihikayat ang kabataang Pilipino sa edukasyon.' },

  /* Grade 12 - L19..L20 */
  { subject:'filipino', grade:12, level:19, type:'guess', q:'Ang huling tula na isinulat ni Rizal bago siya binaril.', a:'Mi Ultimo Adios', e:'Isinulat sa bisperas ng kanyang bitay noong Disyembre 29, 1896.' },
  { subject:'filipino', grade:12, level:19, type:'fib',   q:'Ang unang Pambansang Alagad ng Sining sa panitikan ay si Amado ____.', a:'Hernandez', e:'National Artist for Literature noong 1973; "Mga Ibong Mandaragit".' },
  { subject:'filipino', grade:12, level:20, type:'mc',    q:'Aling akdang Pilipino ang tumaboy sa mga tsismis at inggit sa kanayunan?', choices:['Banaag at Sikat','Mga Ibong Mandaragit','Luha ng Buwaya','Dekada 70'], a:'Luha ng Buwaya', e:'Sinulat ni Amado V. Hernandez tungkol sa pagsasamantala sa magsasaka.' },
  { subject:'filipino', grade:12, level:20, type:'guess', q:'Ang aklat ni Lualhati Bautista tungkol sa Batas Militar.', a:'Dekada 70', e:'"Dekada \'70" (1983) ay nobelang naglalarawan ng Martial Law period.' },

  /* ============================ MAPEH ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'mapeh', grade:5, level:1, type:'mc',    q:'How many food groups are in "Go, Grow, Glow"?', choices:['2','3','4','5'], a:'3', e:'Go (energy), Grow (build muscles), Glow (protect body).' },
  { subject:'mapeh', grade:5, level:1, type:'fib',   q:'The Filipino dance where dancers step over bamboo poles is called ____.', a:'tinikling', e:'Tinikling imitates the tikling bird\'s movements.' },
  { subject:'mapeh', grade:5, level:1, type:'guess', q:'How many teeth does a healthy adult usually have?', a:'32', e:'32 permanent teeth including 4 wisdom teeth.' },
  { subject:'mapeh', grade:5, level:2, type:'mc',    q:'Which color is a primary color?', choices:['green','purple','red','orange'], a:'red', e:'Primary colors: red, blue, yellow.' },
  { subject:'mapeh', grade:5, level:2, type:'fib',   q:'A game with 5 players a side shooting into a hoop is ____.', a:'basketball', e:'Basketball is the most popular sport in the Philippines.' },
  { subject:'mapeh', grade:5, level:3, type:'guess', q:'The system in your body that pumps blood.', a:'circulatory', e:'Includes the heart, blood vessels, and blood.' },
  { subject:'mapeh', grade:5, level:3, type:'mc',    q:'Which is a Filipino folk song about a firefly?', choices:['Bahay Kubo','Leron Leron Sinta','Paruparong Bukid','Alitaptap'], a:'Alitaptap', e:'"Alitaptap" is a lullaby about a firefly.' },

  /* Grade 6 - L4..L6 */
  { subject:'mapeh', grade:6, level:4, type:'mc',    q:'Which nutrient gives the most energy per gram?', choices:['carbohydrates','protein','fats','vitamins'], a:'fats', e:'Fats: 9 cal/g. Carbs & proteins: 4 cal/g. Vitamins: 0.' },
  { subject:'mapeh', grade:6, level:4, type:'guess', q:'The Filipino painter of "Spoliarium".', a:'Juan Luna', e:'Luna won gold at the 1884 Madrid Exposition.' },
  { subject:'mapeh', grade:6, level:5, type:'fib',   q:'The music tempo term "allegro" means to play ____.', a:'fast', e:'Allegro: fast (120-168 bpm). Andante: walking pace.' },
  { subject:'mapeh', grade:6, level:5, type:'mc',    q:'How many players are on a volleyball team on the court?', choices:['5','6','7','9'], a:'6', e:'3 front row, 3 back row.' },
  { subject:'mapeh', grade:6, level:6, type:'guess', q:'The body\'s largest organ.', a:'skin', e:'The skin covers ~2 sq m in an adult.' },
  { subject:'mapeh', grade:6, level:6, type:'fib',   q:'The Filipino martial art with sticks is called ____.', a:'arnis', e:'Arnis (Eskrima/Kali) is the national martial art.' },
  { subject:'mapeh', grade:6, level:6, type:'mc',    q:'Which is NOT a wind instrument?', choices:['flute','trumpet','violin','clarinet'], a:'violin', e:'Violin is a string instrument played with a bow.' },

  /* Grade 7 - L7..L9 */
  { subject:'mapeh', grade:7, level:7, type:'mc',    q:'How many players on a soccer team on the field?', choices:['9','10','11','12'], a:'11', e:'1 goalkeeper + 10 outfield players.' },
  { subject:'mapeh', grade:7, level:7, type:'guess', q:'The three primary colors in painting.', a:'red yellow blue', e:'In pigments: red, yellow, blue. In light (RGB): red, green, blue.' },
  { subject:'mapeh', grade:7, level:8, type:'fib',   q:'BMI = weight / height ____.', a:'squared', e:'BMI = weight (kg) / height (m)^2.' },
  { subject:'mapeh', grade:7, level:8, type:'mc',    q:'The Filipino artist famous for rural sunlit scenes is', choices:['Fernando Amorsolo','Juan Luna','Vicente Manansala','Ang Kiukok'], a:'Fernando Amorsolo', e:'First National Artist, famous for dalagang bukid and farmers.' },
  { subject:'mapeh', grade:7, level:9, type:'guess', q:'The disease caused by lack of vitamin C.', a:'scurvy', e:'Scurvy was common among sailors; citrus fruits prevent it.' },
  { subject:'mapeh', grade:7, level:9, type:'fib',   q:'A note held for one full beat in 4/4 time is a ____ note.', a:'quarter', e:'4/4 time: whole=4, half=2, quarter=1, eighth=1/2.' },

  /* Grade 8 - L10..L12 (Music/Arts of Asia, adolescence health) */
  { subject:'mapeh', grade:8, level:10, type:'mc',    q:'The Indonesian ensemble made of percussion instruments is', choices:['gamelan','sitar','koto','gagaku'], a:'gamelan', e:'Gamelan music uses gongs and metallophones, from Java and Bali.' },
  { subject:'mapeh', grade:8, level:10, type:'guess', q:'The stringed instrument famous in Indian classical music.', a:'sitar', e:'The sitar has 18-21 strings; popularized worldwide by Ravi Shankar.' },
  { subject:'mapeh', grade:8, level:11, type:'fib',   q:'Japanese theater with masked actors and stylized movement is ____.', a:'Noh', e:'Noh theater dates from the 14th century; performers wear masks.' },
  { subject:'mapeh', grade:8, level:11, type:'mc',    q:'The traditional Chinese art of writing with a brush is', choices:['origami','ikebana','calligraphy','henna'], a:'calligraphy', e:'Chinese calligraphy uses brush and ink; considered high art.' },
  { subject:'mapeh', grade:8, level:12, type:'guess', q:'The stage of life between childhood and adulthood.', a:'adolescence', e:'Adolescence involves puberty, physical, emotional, and social changes.' },
  { subject:'mapeh', grade:8, level:12, type:'fib',   q:'The main hormone in male puberty is ____.', a:'testosterone', e:'Testosterone drives male secondary sex characteristics; estrogen in females.' },

  /* Grade 9 - L13..L14 */
  { subject:'mapeh', grade:9, level:13, type:'mc',    q:'Which vitamin is produced by skin exposure to sunlight?', choices:['A','B12','C','D'], a:'D', e:'UVB rays trigger vitamin D synthesis in the skin.' },
  { subject:'mapeh', grade:9, level:13, type:'guess', q:'The art movement led by Picasso featuring fragmented shapes.', a:'cubism', e:'Cubism (1907-1920s) broke subjects into geometric shapes.' },
  { subject:'mapeh', grade:9, level:14, type:'fib',   q:'The Olympic Games are held every ____ years.', a:'4', e:'Summer and Winter Games each run every 4 years, alternating every 2.' },
  { subject:'mapeh', grade:9, level:14, type:'mc',    q:'How many bones make up the human skull?', choices:['12','22','30','42'], a:'22', e:'22 bones: 8 cranial + 14 facial.' },

  /* Grade 10 - L15..L16 */
  { subject:'mapeh', grade:10, level:15, type:'guess', q:'The Filipino boxer with 8 world titles in different weight classes.', a:'Manny Pacquiao', e:'The only boxer to win titles in 8 divisions.' },
  { subject:'mapeh', grade:10, level:15, type:'fib',   q:'The 5 lines and 4 spaces where music notes are written is a ____.', a:'staff', e:'Line notes E-G-B-D-F (Every Good Boy Does Fine). Spaces spell FACE.' },
  { subject:'mapeh', grade:10, level:16, type:'mc',    q:'Which art period celebrated realistic proportion and perspective?', choices:['Gothic','Renaissance','Baroque','Modernism'], a:'Renaissance', e:'Renaissance artists (Da Vinci, Michelangelo) mastered linear perspective and human anatomy.' },
  { subject:'mapeh', grade:10, level:16, type:'guess', q:'The Filipino contemporary dance based on martial arts movement.', a:'Sayaw-sining', e:'Modern Filipino performance blending traditional dance and martial forms.' },

  /* Grade 11 - L17..L18 */
  { subject:'mapeh', grade:11, level:17, type:'mc',    q:'The first Filipino Olympic gold was won in', choices:['boxing','swimming','weightlifting','athletics'], a:'weightlifting', e:'Hidilyn Diaz won gold at Tokyo 2020 (held 2021) in 55 kg weightlifting.' },
  { subject:'mapeh', grade:11, level:17, type:'guess', q:'Beats per minute at rest.', a:'resting heart rate', e:'Normal adult: 60-100 bpm. Athletes: 40-60.' },
  { subject:'mapeh', grade:11, level:18, type:'fib',   q:'The Filipina Broadway star known as "The Voice" is Lea ____.', a:'Salonga', e:'Original Kim in Miss Saigon; voice of Princess Jasmine and Mulan.' },
  { subject:'mapeh', grade:11, level:18, type:'mc',    q:'A lung disease caused by smoking is', choices:['diabetes','hypertension','emphysema','arthritis'], a:'emphysema', e:'Emphysema damages the alveoli; part of COPD.' },

  /* Grade 12 - L19..L20 */
  { subject:'mapeh', grade:12, level:19, type:'guess', q:'The Japanese art of paper folding.', a:'origami', e:'Origami transforms a single square without cuts or glue.' },
  { subject:'mapeh', grade:12, level:19, type:'fib',   q:'The recommended daily water intake is about ____ liters for adults.', a:'2', e:'General guide: ~2 L (8 glasses)/day, adjusted for activity and climate.' },
  { subject:'mapeh', grade:12, level:20, type:'mc',    q:'The National Artist for Music known for "Mutya ng Pasig" is', choices:['Levi Celerio','Nicanor Abelardo','Antonio Molina','Ryan Cayabyab'], a:'Nicanor Abelardo', e:'National Artist (1997); pillar of Filipino classical music and kundiman.' },
  { subject:'mapeh', grade:12, level:20, type:'guess', q:'The chronic disease of high blood sugar.', a:'diabetes', e:'Diabetes: Type 1 (autoimmune) and Type 2 (insulin resistance). Managed by diet, exercise, and medication.' },
];

/* Available subjects, in display order. 'mixed' is synthetic. */
window.SUBJECTS = [
  { id:'mixed',     label:'Mixed Subjects' },
  { id:'math',      label:'Math' },
  { id:'science',   label:'Science' },
  { id:'english',   label:'English' },
  { id:'history',   label:'History' },
  { id:'geography', label:'Geography' },
  { id:'araling',   label:'Araling Panlipunan' },
  { id:'filipino',  label:'Filipino' },
  { id:'mapeh',     label:'MAPEH' },
];
