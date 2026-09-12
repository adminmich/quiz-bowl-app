/* Question bank for the Quiz Bowl app.
   Types: 'mc' (multiple choice), 'fib' (fill in the blank), 'guess' (guess the word).
   Levels 1-5 loosely map to grades 5-6, 6-7, 8-9, 10-11, 12+.
   Field `e` holds the explanation shown when the student gets the question wrong. */

window.QUESTIONS = [
  /* =====================================================================
     MATH
     ===================================================================== */
  { subject:'math', level:1, type:'mc',    q:'What is 7 x 8?', choices:['54','56','58','64'], a:'56', e:'7 x 8 = 56. Think of 8 groups of 7, or memorize the times table row for 7.' },
  { subject:'math', level:1, type:'mc',    q:'Which number is a prime?', choices:['9','15','17','21'], a:'17', e:'A prime has only 1 and itself as factors. 9=3x3, 15=3x5, 21=3x7, but 17 has no factors besides 1 and 17.' },
  { subject:'math', level:1, type:'fib',   q:'The perimeter of a square with side 5 is ____.', a:'20', e:'Perimeter of a square = 4 x side. So 4 x 5 = 20.' },
  { subject:'math', level:1, type:'fib',   q:'1/2 + 1/4 = ____ (as a fraction).', a:'3/4', e:'Give both fractions the same denominator: 1/2 = 2/4. Then 2/4 + 1/4 = 3/4.' },
  { subject:'math', level:1, type:'mc',    q:'Which fraction is largest?', choices:['1/2','2/5','3/8','1/3'], a:'1/2', e:'Compare as decimals: 1/2=0.50, 2/5=0.40, 3/8=0.375, 1/3=0.333. 1/2 is biggest.' },
  { subject:'math', level:1, type:'guess', q:'A shape with three sides.', a:'triangle', e:'"Tri" means three, so a three-sided polygon is a triangle.' },
  { subject:'math', level:1, type:'guess', q:'The result of subtraction.', a:'difference', e:'Add: sum. Subtract: difference. Multiply: product. Divide: quotient.' },
  { subject:'math', level:1, type:'mc',    q:'What is 144 / 12?', choices:['10','11','12','14'], a:'12', e:'12 x 12 = 144, so 144 / 12 = 12.' },

  { subject:'math', level:2, type:'mc',    q:'What is 15% of 200?', choices:['20','25','30','35'], a:'30', e:'15% = 0.15. So 0.15 x 200 = 30. Or take 10% (=20) plus 5% (=10) = 30.' },
  { subject:'math', level:2, type:'fib',   q:'The area of a rectangle 8 by 6 is ____.', a:'48', e:'Area of a rectangle = length x width = 8 x 6 = 48.' },
  { subject:'math', level:2, type:'mc',    q:'Solve: 3x = 21. x = ?', choices:['3','6','7','9'], a:'7', e:'Divide both sides by 3: x = 21 / 3 = 7.' },
  { subject:'math', level:2, type:'guess', q:'The distance around a circle.', a:'circumference', e:'Perimeter of a circle has a special name: circumference. Formula: C = 2 x pi x r.' },
  { subject:'math', level:2, type:'fib',   q:'The square root of 81 is ____.', a:'9', e:'A square root asks: what number times itself equals 81? 9 x 9 = 81.' },
  { subject:'math', level:2, type:'mc',    q:'Which is an irrational number?', choices:['0.5','1/3','pi','7'], a:'pi', e:'Irrational numbers cannot be written as a fraction of two integers. 0.5=1/2, 1/3 is a fraction, 7=7/1, but pi never terminates or repeats.' },
  { subject:'math', level:2, type:'guess', q:'A polygon with eight sides.', a:'octagon', e:'"Octa" means eight, like an octopus with 8 arms. So an 8-sided polygon is an octagon.' },
  { subject:'math', level:2, type:'mc',    q:'What is 2^5?', choices:['10','16','25','32'], a:'32', e:'2 x 2 x 2 x 2 x 2 = 4 x 4 x 2 = 32.' },

  { subject:'math', level:3, type:'mc',    q:'Solve: 2x + 3 = 15. x = ?', choices:['5','6','7','8'], a:'6', e:'Subtract 3 from both sides: 2x = 12. Then divide by 2: x = 6.' },
  { subject:'math', level:3, type:'fib',   q:'The hypotenuse of a right triangle with legs 3 and 4 is ____.', a:'5', e:'Pythagorean theorem: a^2 + b^2 = c^2. So 3^2 + 4^2 = 9 + 16 = 25, and sqrt(25) = 5.' },
  { subject:'math', level:3, type:'guess', q:'A quadrilateral with exactly one pair of parallel sides.', a:'trapezoid', e:'A parallelogram has two pairs of parallel sides. A trapezoid has only one pair.' },
  { subject:'math', level:3, type:'mc',    q:'What is the slope of the line y = 4x - 7?', choices:['-7','4','-4','7'], a:'4', e:'In y = mx + b, m is the slope. Here m = 4 and the y-intercept is -7.' },
  { subject:'math', level:3, type:'fib',   q:'If a triangle has angles 40 and 60, the third angle is ____ degrees.', a:'80', e:'The angles of any triangle add up to 180 degrees. So 180 - 40 - 60 = 80.' },
  { subject:'math', level:3, type:'guess', q:'The Greek letter used for the ratio of a circle\'s circumference to its diameter.', a:'pi', e:'That ratio is pi, about 3.14159. It appears in every circle formula.' },
  { subject:'math', level:3, type:'mc',    q:'Which is the value of |-9|?', choices:['-9','0','9','18'], a:'9', e:'The absolute value bars |x| give the distance from zero, always non-negative. |-9| = 9.' },
  { subject:'math', level:3, type:'fib',   q:'The mean of 4, 8, 12, 16 is ____.', a:'10', e:'Mean = sum / count = (4+8+12+16) / 4 = 40 / 4 = 10.' },

  { subject:'math', level:4, type:'mc',    q:'What is the derivative of x^3?', choices:['x^2','3x','3x^2','x^4/4'], a:'3x^2', e:'Power rule: d/dx(x^n) = n x^(n-1). For x^3, that gives 3 x^2.' },
  { subject:'math', level:4, type:'fib',   q:'log base 10 of 1000 = ____.', a:'3', e:'log10(1000) asks: 10 to what power equals 1000? 10^3 = 1000, so the answer is 3.' },
  { subject:'math', level:4, type:'guess', q:'A triangle with all sides equal.', a:'equilateral', e:'Equilateral = equal sides. All three sides (and angles) are equal; each angle is 60 degrees.' },
  { subject:'math', level:4, type:'mc',    q:'sin(90 degrees) = ?', choices:['0','1/2','1','undefined'], a:'1', e:'On the unit circle, sin gives the y-coordinate. At 90 degrees the point is (0,1), so sin(90) = 1.' },
  { subject:'math', level:4, type:'fib',   q:'The quadratic formula solves ax^2 + bx + ____ = 0.', a:'c', e:'The standard quadratic form is ax^2 + bx + c = 0, where c is the constant term.' },
  { subject:'math', level:4, type:'guess', q:'The point where a curve crosses the x-axis.', a:'root', e:'A root (or zero) of an equation is any x where the function equals zero, meaning the curve touches the x-axis.' },
  { subject:'math', level:4, type:'mc',    q:'Which set contains only real numbers?', choices:['{i, 2i}','{-3, 0, pi}','{sqrt(-4)}','{2+i}'], a:'{-3, 0, pi}', e:'Real numbers exclude i (imaginary unit). -3, 0, and pi are all real. Anything with i is complex.' },
  { subject:'math', level:4, type:'fib',   q:'e (Euler\'s number) is approximately ____ (2 decimals).', a:'2.72', e:'Euler\'s number e is about 2.71828. Rounded to two decimals that is 2.72.' },

  { subject:'math', level:5, type:'mc',    q:'The integral of 2x dx =', choices:['x^2','x^2 + C','2 + C','x^3/3'], a:'x^2 + C', e:'Antiderivative of 2x is x^2. Because indefinite integrals have a family of solutions, we add "+ C".' },
  { subject:'math', level:5, type:'guess', q:'Branch of mathematics dealing with change and motion.', a:'calculus', e:'Calculus studies rates of change (derivatives) and accumulation (integrals). Newton and Leibniz developed it.' },
  { subject:'math', level:5, type:'fib',   q:'The limit as x approaches 0 of sin(x)/x is ____.', a:'1', e:'This is a fundamental limit. As x gets very small, sin(x) is approximately equal to x, so sin(x)/x approaches 1.' },
  { subject:'math', level:5, type:'mc',    q:'A matrix with determinant 0 is called', choices:['singular','identity','orthogonal','symmetric'], a:'singular', e:'A matrix with det = 0 has no inverse and is called singular. All others are called invertible or non-singular.' },
  { subject:'math', level:5, type:'guess', q:'A number that cannot be expressed as a fraction of two integers.', a:'irrational', e:'Rationals can be written as p/q. Irrationals (like pi, sqrt(2), e) cannot, and their decimals never repeat.' },
  { subject:'math', level:5, type:'fib',   q:'The number of degrees in a full rotation is ____.', a:'360', e:'A full circle contains 360 degrees, or equivalently 2 x pi radians.' },
  { subject:'math', level:5, type:'mc',    q:'Which theorem relates the sides of a right triangle?', choices:['Fermat','Pythagorean','Euclid','Thales'], a:'Pythagorean', e:'The Pythagorean theorem states a^2 + b^2 = c^2 for the two legs a, b and the hypotenuse c.' },

  /* =====================================================================
     SCIENCE
     ===================================================================== */
  { subject:'science', level:1, type:'mc',    q:'Which planet is closest to the Sun?', choices:['Venus','Earth','Mercury','Mars'], a:'Mercury', e:'Order from Sun: Mercury, Venus, Earth, Mars. Mercury is first (and hottest during day).' },
  { subject:'science', level:1, type:'fib',   q:'Water freezes at ____ degrees Celsius.', a:'0', e:'Pure water at sea level freezes at 0 C and boils at 100 C.' },
  { subject:'science', level:1, type:'mc',    q:'How many bones does an adult human have?', choices:['186','206','226','256'], a:'206', e:'Babies are born with about 270 bones. Many fuse together as we grow, ending at 206 in adulthood.' },
  { subject:'science', level:1, type:'guess', q:'The gas we breathe in that keeps us alive.', a:'oxygen', e:'Oxygen (O2) makes up about 21% of air. Our cells use it to convert food into energy.' },
  { subject:'science', level:1, type:'fib',   q:'The center of an atom is called the ____.', a:'nucleus', e:'The nucleus holds protons and neutrons. Electrons orbit around it in shells.' },
  { subject:'science', level:1, type:'mc',    q:'What organ pumps blood?', choices:['lungs','liver','heart','brain'], a:'heart', e:'The heart is a muscle that pumps blood through the body via arteries and veins.' },
  { subject:'science', level:1, type:'guess', q:'The process plants use to make food from sunlight.', a:'photosynthesis', e:'Photosynthesis: plants use sunlight, water, and CO2 to make glucose and release oxygen.' },
  { subject:'science', level:1, type:'mc',    q:'Which is a mammal?', choices:['shark','frog','whale','eagle'], a:'whale', e:'Mammals have hair, are warm-blooded, and feed young with milk. Whales do all three, even though they live in water.' },

  { subject:'science', level:2, type:'mc',    q:'The chemical symbol for gold is', choices:['Go','Gd','Au','Ag'], a:'Au', e:'Gold\'s symbol Au comes from its Latin name aurum. Ag (argentum) is silver.' },
  { subject:'science', level:2, type:'fib',   q:'Sound travels fastest through ____ (solid/liquid/gas).', a:'solid', e:'Sound needs particles to travel. In solids the particles are packed tightest, so sound moves fastest.' },
  { subject:'science', level:2, type:'guess', q:'The powerhouse of the cell.', a:'mitochondria', e:'Mitochondria produce ATP, the cell\'s main energy currency, through cellular respiration.' },
  { subject:'science', level:2, type:'mc',    q:'Which force pulls objects toward Earth?', choices:['friction','magnetism','gravity','tension'], a:'gravity', e:'Gravity is the attractive force between masses. Earth\'s gravity gives us weight and keeps us grounded.' },
  { subject:'science', level:2, type:'fib',   q:'Water has the chemical formula ____.', a:'H2O', e:'A water molecule is 2 hydrogen atoms bonded to 1 oxygen atom, hence H2O.' },
  { subject:'science', level:2, type:'guess', q:'The layer of gas surrounding Earth.', a:'atmosphere', e:'Earth\'s atmosphere has 5 main layers: troposphere, stratosphere, mesosphere, thermosphere, exosphere.' },
  { subject:'science', level:2, type:'mc',    q:'Which is NOT a state of matter?', choices:['solid','liquid','plasma','energy'], a:'energy', e:'The main states of matter are solid, liquid, gas, and plasma. Energy is not a state of matter itself.' },
  { subject:'science', level:2, type:'fib',   q:'The largest planet in our solar system is ____.', a:'Jupiter', e:'Jupiter is a gas giant. Its mass is more than all the other planets combined.' },

  { subject:'science', level:3, type:'mc',    q:'What is the pH of a neutral solution?', choices:['0','7','10','14'], a:'7', e:'pH scale runs 0 to 14. Below 7 is acidic, 7 is neutral (like pure water), above 7 is basic.' },
  { subject:'science', level:3, type:'guess', q:'The unit of electrical resistance.', a:'ohm', e:'Ohm (symbol omega) measures resistance. Ohm\'s law: V = I x R.' },
  { subject:'science', level:3, type:'fib',   q:'DNA stands for ____ acid.', a:'deoxyribonucleic', e:'DNA = DeoxyriboNucleic Acid. It carries genetic instructions in nearly all living things.' },
  { subject:'science', level:3, type:'mc',    q:'Which particle has no charge?', choices:['proton','electron','neutron','positron'], a:'neutron', e:'Protons have +1 charge, electrons have -1 charge, neutrons have 0 (that\'s why they are called "neutral").' },
  { subject:'science', level:3, type:'guess', q:'The scientist who developed the theory of evolution.', a:'Darwin', e:'Charles Darwin published "On the Origin of Species" in 1859, proposing natural selection.' },
  { subject:'science', level:3, type:'fib',   q:'Newton\'s second law: F = m x ____.', a:'a', e:'Force = mass x acceleration (F = ma). Bigger mass or bigger acceleration means bigger force.' },
  { subject:'science', level:3, type:'mc',    q:'Which gas is most abundant in Earth\'s atmosphere?', choices:['oxygen','carbon dioxide','nitrogen','argon'], a:'nitrogen', e:'Air is roughly 78% nitrogen, 21% oxygen, 1% argon, and less than 0.05% CO2.' },

  { subject:'science', level:4, type:'mc',    q:'The speed of light in vacuum is approximately', choices:['3 x 10^5 m/s','3 x 10^8 m/s','3 x 10^10 m/s','3 x 10^12 m/s'], a:'3 x 10^8 m/s', e:'c is roughly 300,000,000 m/s = 3 x 10^8 m/s, or about 300,000 km/s.' },
  { subject:'science', level:4, type:'guess', q:'The process by which liquid becomes gas at the surface.', a:'evaporation', e:'Evaporation happens below boiling point at the liquid\'s surface. Boiling produces vapor throughout the liquid.' },
  { subject:'science', level:4, type:'fib',   q:'The three types of rocks are igneous, sedimentary, and ____.', a:'metamorphic', e:'Igneous = cooled magma. Sedimentary = compressed sediment layers. Metamorphic = existing rock changed by heat and pressure.' },
  { subject:'science', level:4, type:'mc',    q:'Which element has atomic number 6?', choices:['oxygen','carbon','nitrogen','helium'], a:'carbon', e:'Atomic number = number of protons. Carbon has 6 protons and is the basis of all organic chemistry.' },
  { subject:'science', level:4, type:'guess', q:'The bending of light as it passes from one medium to another.', a:'refraction', e:'When light enters water or glass, its speed changes, so its direction bends. That is refraction. Reflection is bouncing back.' },
  { subject:'science', level:4, type:'fib',   q:'The SI unit of force is the ____.', a:'newton', e:'1 newton = the force needed to accelerate 1 kg at 1 m/s^2. Named after Isaac Newton.' },
  { subject:'science', level:4, type:'mc',    q:'Which blood type is the universal donor?', choices:['A+','O-','AB+','B-'], a:'O-', e:'O- has neither A, B, nor Rh antigens, so it can be given to anyone. AB+ is the universal recipient.' },

  { subject:'science', level:5, type:'mc',    q:'Which subatomic particle carries a negative charge?', choices:['proton','neutron','electron','photon'], a:'electron', e:'Electrons (-1) orbit the nucleus. Protons (+1) and neutrons (0) sit inside the nucleus.' },
  { subject:'science', level:5, type:'guess', q:'Einstein\'s famous equation relates energy, mass, and this.', a:'light', e:'E = mc^2, where c is the speed of light. Mass and energy are equivalent; a little mass yields a lot of energy.' },
  { subject:'science', level:5, type:'fib',   q:'The powerhouse molecule of the cell is ____.', a:'ATP', e:'Adenosine TriPhosphate stores chemical energy. Breaking one phosphate bond releases usable energy.' },
  { subject:'science', level:5, type:'mc',    q:'What type of bond shares electrons?', choices:['ionic','covalent','metallic','hydrogen'], a:'covalent', e:'Covalent bonds share electron pairs between atoms (like H2O). Ionic bonds transfer electrons (like NaCl).' },
  { subject:'science', level:5, type:'guess', q:'The scientist who proposed general relativity.', a:'Einstein', e:'Albert Einstein published Special Relativity in 1905 and General Relativity in 1915, redefining gravity as spacetime curvature.' },
  { subject:'science', level:5, type:'fib',   q:'The organelle that packages proteins is the Golgi ____.', a:'apparatus', e:'The Golgi apparatus (or Golgi body) modifies, sorts, and packages proteins from the ER for delivery inside or outside the cell.' },
  { subject:'science', level:5, type:'mc',    q:'Which law states that energy cannot be created or destroyed?', choices:['Newton\'s first','Conservation of energy','Ohm\'s law','Boyle\'s law'], a:'Conservation of energy', e:'The First Law of Thermodynamics: energy is neither created nor destroyed, only transformed from one form to another.' },

  /* =====================================================================
     ENGLISH
     ===================================================================== */
  { subject:'english', level:1, type:'mc',    q:'Which word is a noun?', choices:['run','happy','apple','quickly'], a:'apple', e:'A noun names a person, place, thing, or idea. Apple is a thing (a fruit). "Run" is a verb, "happy" is an adjective, "quickly" is an adverb.' },
  { subject:'english', level:1, type:'fib',   q:'The plural of "child" is ____.', a:'children', e:'"Child" has an irregular plural: children. Most nouns just add -s, but some old English words keep their older plural forms.' },
  { subject:'english', level:1, type:'guess', q:'A word that describes a noun.', a:'adjective', e:'Adjectives describe nouns: red apple, tall boy, funny joke. They answer "which one, what kind, how many".' },
  { subject:'english', level:1, type:'mc',    q:'Which is a complete sentence?', choices:['Running fast.','The dog barks.','On the table.','Very cold today.'], a:'The dog barks.', e:'A complete sentence needs a subject (who) and a verb (what they do). "The dog" is the subject; "barks" is the verb.' },
  { subject:'english', level:1, type:'fib',   q:'The opposite of "hot" is ____.', a:'cold', e:'Words with opposite meanings are called antonyms. Hot and cold are common antonyms.' },
  { subject:'english', level:1, type:'guess', q:'A story that is not true, often with talking animals.', a:'fable', e:'A fable is a short fictional story, usually with animal characters, that teaches a moral. Aesop wrote many famous ones.' },
  { subject:'english', level:1, type:'mc',    q:'Which word rhymes with "cat"?', choices:['dog','hat','sun','mop'], a:'hat', e:'Rhyming words end with the same sound. Cat and hat both end in "-at".' },
  { subject:'english', level:1, type:'fib',   q:'The past tense of "go" is ____.', a:'went', e:'"Go" is an irregular verb. Its past tense is "went" (not "goed"). Past participle is "gone".' },

  { subject:'english', level:2, type:'mc',    q:'Which is a verb?', choices:['blue','table','swim','beautiful'], a:'swim', e:'A verb is an action or state. Swim is an action. Blue and beautiful are adjectives; table is a noun.' },
  { subject:'english', level:2, type:'guess', q:'A word that means the same as another.', a:'synonym', e:'Synonyms have similar meanings (big/large). Antonyms have opposite meanings (big/small).' },
  { subject:'english', level:2, type:'fib',   q:'"They\'re" is a contraction for "they ____".', a:'are', e:'They\'re = they are. Their = belonging to them. There = a place. All sound alike but mean different things.' },
  { subject:'english', level:2, type:'mc',    q:'Which word is spelled correctly?', choices:['recieve','receive','receeve','receve'], a:'receive', e:'The rule "i before e except after c" applies: after c, use "ei". So it is receive, not recieve.' },
  { subject:'english', level:2, type:'guess', q:'A word with the opposite meaning.', a:'antonym', e:'Antonyms are opposites (hot/cold, up/down). Synonyms are same-meaning words (happy/glad).' },
  { subject:'english', level:2, type:'fib',   q:'A group of words with subject and verb is a ____.', a:'sentence', e:'A sentence needs at least a subject and a verb, and expresses a complete thought.' },
  { subject:'english', level:2, type:'mc',    q:'Which is an adverb?', choices:['slow','slowly','slower','slowness'], a:'slowly', e:'Adverbs describe verbs and often end in -ly. "Slowly" describes how something is done. "Slow" is an adjective.' },

  { subject:'english', level:3, type:'mc',    q:'Which sentence is punctuated correctly?', choices:['Whats up','What\'s up.','What\'s up?','What is up'], a:'What\'s up?', e:'A question ends with a question mark. "What\'s" needs an apostrophe (contraction of "what is").' },
  { subject:'english', level:3, type:'guess', q:'A figure of speech comparing two unlike things using "like" or "as".', a:'simile', e:'Simile: uses "like" or "as" (brave AS a lion). Metaphor: direct comparison without those words (time IS money).' },
  { subject:'english', level:3, type:'fib',   q:'The main character of a story is called the ____.', a:'protagonist', e:'The protagonist is the main character we follow. The antagonist opposes them (often the villain).' },
  { subject:'english', level:3, type:'mc',    q:'Which is a metaphor?', choices:['as brave as a lion','time is money','fast like the wind','runs quickly'], a:'time is money', e:'A metaphor directly says one thing IS another. Time is money = time is valuable. No "like" or "as", that would be a simile.' },
  { subject:'english', level:3, type:'guess', q:'Giving human qualities to non-human things.', a:'personification', e:'Personification: "The wind whispered", "The sun smiled". Non-human things do human actions.' },
  { subject:'english', level:3, type:'fib',   q:'A person, place, thing, or idea is called a ____.', a:'noun', e:'Nouns name things. Common nouns are general (dog); proper nouns are specific and capitalized (Rex).' },
  { subject:'english', level:3, type:'mc',    q:'Which word is a preposition?', choices:['jump','under','she','fast'], a:'under', e:'Prepositions show relationships in space, time, or direction: in, on, under, above, before, with.' },

  { subject:'english', level:4, type:'mc',    q:'Who wrote "Romeo and Juliet"?', choices:['Dickens','Shakespeare','Austen','Hemingway'], a:'Shakespeare', e:'William Shakespeare wrote Romeo and Juliet around 1595, along with Hamlet, Macbeth, and many others.' },
  { subject:'english', level:4, type:'guess', q:'Repetition of consonant sounds at the start of words.', a:'alliteration', e:'Alliteration: "Peter Piper picked a peck of pickled peppers". Same starting sound in several nearby words.' },
  { subject:'english', level:4, type:'fib',   q:'A 14-line poem with a specific rhyme scheme is a ____.', a:'sonnet', e:'A sonnet has 14 lines in iambic pentameter. Shakespearean sonnets have three quatrains and a couplet (ABAB CDCD EFEF GG).' },
  { subject:'english', level:4, type:'mc',    q:'The turning point of a story is the', choices:['exposition','climax','resolution','setting'], a:'climax', e:'Exposition sets things up, rising action builds tension, the climax is the peak, then falling action leads to resolution.' },
  { subject:'english', level:4, type:'guess', q:'A long narrative poem about heroic deeds.', a:'epic', e:'Epics are long narrative poems about heroic characters. The Iliad, The Odyssey, and Beowulf are famous examples.' },
  { subject:'english', level:4, type:'fib',   q:'"I have a dream" was famously spoken by Martin Luther King ____.', a:'Jr', e:'Martin Luther King Jr. delivered "I Have a Dream" on August 28, 1963 during the March on Washington.' },
  { subject:'english', level:4, type:'mc',    q:'Which is written in first person?', choices:['She walked home','You should try','I saw the light','They played'], a:'I saw the light', e:'First person uses I/we. Second person uses you. Third person uses he/she/it/they.' },

  { subject:'english', level:5, type:'mc',    q:'Who wrote "1984"?', choices:['Huxley','Orwell','Bradbury','Kafka'], a:'Orwell', e:'George Orwell published 1984 in 1949. Huxley wrote Brave New World, Bradbury wrote Fahrenheit 451.' },
  { subject:'english', level:5, type:'guess', q:'An extreme exaggeration used for effect.', a:'hyperbole', e:'Hyperbole = deliberate over-the-top exaggeration ("I could eat a horse"). Not meant to be taken literally.' },
  { subject:'english', level:5, type:'fib',   q:'"To be, or not to be" is from Shakespeare\'s ____.', a:'Hamlet', e:'The line is from Hamlet\'s soliloquy in Act 3, Scene 1, where he contemplates existence.' },
  { subject:'english', level:5, type:'mc',    q:'Which is an example of onomatopoeia?', choices:['bright','buzz','tall','swift'], a:'buzz', e:'Onomatopoeia = words that sound like what they describe. Buzz, hiss, boom, sizzle.' },
  { subject:'english', level:5, type:'guess', q:'The attitude of the author toward the subject.', a:'tone', e:'Tone is the author\'s attitude (sarcastic, hopeful, angry). Mood is the feeling the reader gets.' },
  { subject:'english', level:5, type:'fib',   q:'A word that connects clauses (e.g., and, but, or) is a ____.', a:'conjunction', e:'Conjunctions join words, phrases, or clauses. FANBOYS: For, And, Nor, But, Or, Yet, So.' },
  { subject:'english', level:5, type:'mc',    q:'"The Great Gatsby" was written by', choices:['Steinbeck','Fitzgerald','Faulkner','Twain'], a:'Fitzgerald', e:'F. Scott Fitzgerald published The Great Gatsby in 1925 during the Jazz Age.' },

  /* =====================================================================
     HISTORY
     ===================================================================== */
  { subject:'history', level:1, type:'mc',    q:'Who was the first President of the United States?', choices:['Lincoln','Adams','Washington','Jefferson'], a:'Washington', e:'George Washington served as the 1st US President (1789-1797) after leading the Continental Army.' },
  { subject:'history', level:1, type:'fib',   q:'Christopher Columbus sailed the ocean blue in ____.', a:'1492', e:'In 1492, Columbus sailed the ocean blue with three ships: the Nina, the Pinta, and the Santa Maria.' },
  { subject:'history', level:1, type:'guess', q:'The large stone tombs built in ancient Egypt for pharaohs.', a:'pyramids', e:'Pyramids were tombs for pharaohs. The Great Pyramid of Giza is the largest, built around 2560 BC.' },
  { subject:'history', level:1, type:'mc',    q:'The Great Wall was built in', choices:['India','China','Japan','Egypt'], a:'China', e:'The Great Wall of China was built over many dynasties (starting around 7th century BC) to defend against invasions from the north.' },
  { subject:'history', level:1, type:'fib',   q:'The country that gave the Statue of Liberty to the US is ____.', a:'France', e:'France gifted Lady Liberty to the US in 1886 to celebrate 100 years of American independence and friendship between the nations.' },
  { subject:'history', level:1, type:'guess', q:'Ancient civilization known for gladiators and the Colosseum.', a:'Rome', e:'Ancient Rome (753 BC - 476 AD) built the Colosseum around 70-80 AD, where gladiators fought before crowds of 50,000+.' },
  { subject:'history', level:1, type:'mc',    q:'On July 4, 1776, the US declared', choices:['war','independence','peace','statehood'], a:'independence', e:'The Declaration of Independence, adopted July 4, 1776, formally announced the 13 colonies\' separation from Great Britain.' },

  { subject:'history', level:2, type:'mc',    q:'Who wrote the Declaration of Independence?', choices:['Washington','Jefferson','Franklin','Adams'], a:'Jefferson', e:'Thomas Jefferson was the principal author. A Committee of Five (including Franklin and Adams) revised it.' },
  { subject:'history', level:2, type:'guess', q:'The world war that ended in 1945.', a:'World War II', e:'WWII ended in 1945: Germany surrendered in May (V-E Day), Japan surrendered in September (V-J Day) after two atomic bombs.' },
  { subject:'history', level:2, type:'fib',   q:'Abraham Lincoln was the ____th US president.', a:'16', e:'Lincoln served as the 16th President (1861-1865), led the Union through the Civil War, and abolished slavery.' },
  { subject:'history', level:2, type:'mc',    q:'The Renaissance began in', choices:['France','Germany','Italy','England'], a:'Italy', e:'The Renaissance ("rebirth") began in Italy in the 14th century, driven by cities like Florence, Venice, and Rome rediscovering classical learning.' },
  { subject:'history', level:2, type:'guess', q:'The ship that famously sank in 1912.', a:'Titanic', e:'The RMS Titanic hit an iceberg on April 14, 1912 and sank in the North Atlantic, killing over 1,500 people.' },
  { subject:'history', level:2, type:'fib',   q:'Mahatma Gandhi led the independence movement of ____.', a:'India', e:'Gandhi\'s nonviolent resistance (satyagraha) helped India gain independence from British rule in 1947.' },
  { subject:'history', level:2, type:'mc',    q:'Who painted the Mona Lisa?', choices:['Michelangelo','Da Vinci','Raphael','Donatello'], a:'Da Vinci', e:'Leonardo da Vinci painted the Mona Lisa around 1503-1519. It now hangs in the Louvre in Paris.' },

  { subject:'history', level:3, type:'mc',    q:'The Berlin Wall fell in', choices:['1987','1989','1991','1993'], a:'1989', e:'The Berlin Wall was opened on November 9, 1989, marking the beginning of the end of the Cold War.' },
  { subject:'history', level:3, type:'guess', q:'The period of art and learning after the Middle Ages.', a:'Renaissance', e:'The Renaissance (roughly 14th-17th century) saw a revival of classical art, science, and learning across Europe.' },
  { subject:'history', level:3, type:'fib',   q:'The US Civil War ended in the year ____.', a:'1865', e:'The Civil War (1861-1865) ended when General Lee surrendered at Appomattox Court House on April 9, 1865.' },
  { subject:'history', level:3, type:'mc',    q:'Who was the British PM during WWII?', choices:['Attlee','Chamberlain','Churchill','Blair'], a:'Churchill', e:'Winston Churchill became PM in May 1940 and led Britain through WWII with his famous "we shall fight on the beaches" speech.' },
  { subject:'history', level:3, type:'guess', q:'The empire founded by Genghis Khan.', a:'Mongol', e:'Genghis Khan founded the Mongol Empire in 1206. At its peak, it was the largest contiguous land empire in history.' },
  { subject:'history', level:3, type:'fib',   q:'The Berlin Wall separated East and West ____.', a:'Germany', e:'Built in 1961 by East Germany, the Wall divided communist East Germany from democratic West Germany until 1989.' },
  { subject:'history', level:3, type:'mc',    q:'Which war was fought 1914-1918?', choices:['Civil War','WWI','WWII','Cold War'], a:'WWI', e:'World War I lasted from July 1914 to November 1918, ending with the armistice on November 11, 1918.' },

  { subject:'history', level:4, type:'mc',    q:'The French Revolution began in', choices:['1776','1789','1804','1815'], a:'1789', e:'The French Revolution began in 1789 with the storming of the Bastille on July 14, ending the monarchy of Louis XVI.' },
  { subject:'history', level:4, type:'guess', q:'The economic system Karl Marx criticized in his writings.', a:'capitalism', e:'Marx and Engels critiqued capitalism in "Das Kapital" and "The Communist Manifesto", proposing socialism as the alternative.' },
  { subject:'history', level:4, type:'fib',   q:'The Cold War ended in ____ (year).', a:'1991', e:'The Cold War ended in 1991 with the dissolution of the Soviet Union on December 26, 1991.' },
  { subject:'history', level:4, type:'mc',    q:'Which US president issued the Emancipation Proclamation?', choices:['Grant','Lincoln','Jefferson','Jackson'], a:'Lincoln', e:'Lincoln issued the Emancipation Proclamation on January 1, 1863, declaring slaves in Confederate states free.' },
  { subject:'history', level:4, type:'guess', q:'The alliance system that led to WWI included this German-led group.', a:'Central Powers', e:'The Central Powers (Germany, Austria-Hungary, Ottoman Empire, Bulgaria) fought against the Allies (UK, France, Russia, later US).' },
  { subject:'history', level:4, type:'fib',   q:'The atomic bomb was dropped on Hiroshima in ____ (year).', a:'1945', e:'The US dropped an atomic bomb on Hiroshima on August 6, 1945, and on Nagasaki on August 9. Japan surrendered days later.' },

  { subject:'history', level:5, type:'mc',    q:'The Magna Carta was signed in', choices:['1066','1215','1492','1607'], a:'1215', e:'King John of England signed the Magna Carta in 1215, limiting royal power and laying the foundation for constitutional government.' },
  { subject:'history', level:5, type:'guess', q:'The 1929 event that started the Great Depression.', a:'stock market crash', e:'The Wall Street Crash of October 1929 (Black Thursday and Black Tuesday) triggered the Great Depression that lasted through the 1930s.' },
  { subject:'history', level:5, type:'fib',   q:'Nelson Mandela was president of ____.', a:'South Africa', e:'Mandela became South Africa\'s first Black president in 1994 after 27 years in prison, ending the apartheid regime.' },
  { subject:'history', level:5, type:'mc',    q:'The Ottoman Empire fell after', choices:['WWI','WWII','Cold War','French Revolution'], a:'WWI', e:'The Ottoman Empire (1299-1922) collapsed after WWI. Turkey was established as a republic in 1923 under Ataturk.' },
  { subject:'history', level:5, type:'guess', q:'The document that ended WWI and blamed Germany.', a:'Treaty of Versailles', e:'The Treaty of Versailles (1919) imposed harsh terms on Germany, including huge reparations, which many historians say contributed to WWII.' },
  { subject:'history', level:5, type:'fib',   q:'The pharaoh whose tomb was found nearly intact in 1922 was ____.', a:'Tutankhamun', e:'Howard Carter discovered King Tut\'s tomb in the Valley of the Kings in 1922, one of archaeology\'s greatest finds.' },

  /* =====================================================================
     GEOGRAPHY
     ===================================================================== */
  { subject:'geography', level:1, type:'mc',    q:'How many continents are there?', choices:['5','6','7','8'], a:'7', e:'The seven continents are Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, and South America.' },
  { subject:'geography', level:1, type:'fib',   q:'The capital of France is ____.', a:'Paris', e:'Paris has been the capital of France since the 10th century, sitting on the Seine River.' },
  { subject:'geography', level:1, type:'guess', q:'The largest ocean on Earth.', a:'Pacific', e:'The Pacific Ocean covers about 63 million square miles, larger than all land on Earth combined.' },
  { subject:'geography', level:1, type:'mc',    q:'Mount Everest is in', choices:['Andes','Alps','Himalayas','Rockies'], a:'Himalayas', e:'Mount Everest (8,849 m) sits on the border of Nepal and Tibet in the Himalayan range.' },
  { subject:'geography', level:1, type:'fib',   q:'The longest river in the world is the ____.', a:'Nile', e:'The Nile flows about 6,650 km from central Africa north to the Mediterranean Sea. The Amazon is a close second by length.' },
  { subject:'geography', level:1, type:'guess', q:'The continent Egypt is in.', a:'Africa', e:'Egypt sits in northeastern Africa, with the Sinai Peninsula extending into Asia across the Suez Canal.' },
  { subject:'geography', level:1, type:'mc',    q:'Which is a desert?', choices:['Amazon','Sahara','Everglades','Congo'], a:'Sahara', e:'The Sahara is the largest hot desert (9 million sq km), covering much of North Africa. The Amazon and Congo are rainforests.' },
  { subject:'geography', level:1, type:'fib',   q:'The capital of Japan is ____.', a:'Tokyo', e:'Tokyo has been Japan\'s capital since 1868 (formerly known as Edo). It is one of the largest urban areas in the world.' },

  { subject:'geography', level:2, type:'mc',    q:'Which country has the largest population?', choices:['USA','India','China','Russia'], a:'India', e:'India surpassed China as the most populous country in 2023, with over 1.4 billion people.' },
  { subject:'geography', level:2, type:'guess', q:'The imaginary line at 0 degrees latitude.', a:'equator', e:'The Equator divides Earth into Northern and Southern Hemispheres. It runs through countries like Ecuador, Kenya, and Indonesia.' },
  { subject:'geography', level:2, type:'fib',   q:'The capital of Australia is ____.', a:'Canberra', e:'Canberra was purpose-built as capital in 1913 as a compromise between rival cities Sydney and Melbourne.' },
  { subject:'geography', level:2, type:'mc',    q:'Which is NOT a Great Lake?', choices:['Erie','Superior','Michigan','Tahoe'], a:'Tahoe', e:'The Great Lakes are Superior, Michigan, Huron, Erie, and Ontario (HOMES). Lake Tahoe is in California and Nevada.' },
  { subject:'geography', level:2, type:'guess', q:'The country shaped like a boot.', a:'Italy', e:'Italy\'s peninsula in the Mediterranean is famously shaped like a high-heeled boot kicking Sicily.' },
  { subject:'geography', level:2, type:'fib',   q:'The Amazon River is in ____ (continent).', a:'South America', e:'The Amazon River flows through South America, mostly Brazil, with the world\'s largest drainage basin and rainforest.' },
  { subject:'geography', level:2, type:'mc',    q:'The capital of Canada is', choices:['Toronto','Vancouver','Ottawa','Montreal'], a:'Ottawa', e:'Ottawa was chosen as Canada\'s capital in 1857 by Queen Victoria, partly as a compromise between English and French Canada.' },

  { subject:'geography', level:3, type:'mc',    q:'Which strait separates Europe and Africa?', choices:['Bering','Gibraltar','Bosphorus','Malacca'], a:'Gibraltar', e:'The Strait of Gibraltar (only 13 km at its narrowest) separates Spain (Europe) from Morocco (Africa).' },
  { subject:'geography', level:3, type:'guess', q:'The largest country by land area.', a:'Russia', e:'Russia covers about 17 million sq km, spanning 11 time zones and two continents (Europe and Asia).' },
  { subject:'geography', level:3, type:'fib',   q:'The capital of Egypt is ____.', a:'Cairo', e:'Cairo (Al-Qahirah) is Egypt\'s capital and the largest city in the Arab world, sitting near the Nile Delta.' },
  { subject:'geography', level:3, type:'mc',    q:'Which river runs through Paris?', choices:['Thames','Rhine','Seine','Danube'], a:'Seine', e:'The Seine flows through Paris. The Thames is in London, the Rhine mostly in Germany, the Danube through central Europe.' },
  { subject:'geography', level:3, type:'guess', q:'The mountain range along the west coast of South America.', a:'Andes', e:'The Andes stretch about 7,000 km along South America\'s Pacific coast, the world\'s longest continental mountain range.' },
  { subject:'geography', level:3, type:'fib',   q:'The Sahara desert is on the continent of ____.', a:'Africa', e:'The Sahara covers most of North Africa across 11 countries, from the Atlantic Ocean to the Red Sea.' },
  { subject:'geography', level:3, type:'mc',    q:'Which country has the most time zones?', choices:['USA','China','Russia','France'], a:'France', e:'France has 12 time zones because of its overseas territories in the Pacific, Atlantic, and Indian Oceans.' },

  { subject:'geography', level:4, type:'mc',    q:'The capital of Brazil is', choices:['Rio','Sao Paulo','Brasilia','Salvador'], a:'Brasilia', e:'Brasilia was built in the interior and became capital in 1960, replacing Rio de Janeiro, to promote development inland.' },
  { subject:'geography', level:4, type:'guess', q:'The narrow waterway that separates Alaska from Russia.', a:'Bering Strait', e:'The Bering Strait (about 85 km wide) separates Alaska (USA) from Siberia (Russia), connecting the Pacific and Arctic Oceans.' },
  { subject:'geography', level:4, type:'fib',   q:'The tallest mountain in Africa is Mount ____.', a:'Kilimanjaro', e:'Mount Kilimanjaro (5,895 m) in Tanzania is a dormant volcano and Africa\'s highest peak.' },
  { subject:'geography', level:4, type:'mc',    q:'Which country is landlocked?', choices:['Portugal','Switzerland','Vietnam','Chile'], a:'Switzerland', e:'Landlocked countries have no ocean access. Switzerland is surrounded by France, Germany, Austria, Italy, and Liechtenstein.' },
  { subject:'geography', level:4, type:'guess', q:'The line at 180 degrees longitude where the day changes.', a:'International Date Line', e:'The International Date Line zigzags through the Pacific. Crossing it going west adds a day; going east subtracts one.' },
  { subject:'geography', level:4, type:'fib',   q:'The smallest country in the world is ____ City.', a:'Vatican', e:'Vatican City (0.44 sq km, ~800 people) is an enclave inside Rome and the headquarters of the Catholic Church.' },

  { subject:'geography', level:5, type:'mc',    q:'The Ring of Fire is associated with', choices:['deserts','earthquakes','glaciers','tundras'], a:'earthquakes', e:'The Ring of Fire is a horseshoe of tectonic-plate boundaries around the Pacific, home to 75% of the world\'s volcanoes and 90% of earthquakes.' },
  { subject:'geography', level:5, type:'guess', q:'The deepest ocean trench.', a:'Mariana Trench', e:'The Mariana Trench in the western Pacific reaches ~11,000 m at its deepest point (Challenger Deep), deeper than Everest is tall.' },
  { subject:'geography', level:5, type:'fib',   q:'The capital of Kazakhstan is ____.', a:'Astana', e:'Astana (renamed Nur-Sultan 2019-2022, then back to Astana) became capital in 1997, replacing Almaty.' },
  { subject:'geography', level:5, type:'mc',    q:'Which river is the longest in Asia?', choices:['Ganges','Mekong','Yangtze','Indus'], a:'Yangtze', e:'The Yangtze (~6,300 km) is the longest river entirely within one country (China) and the third-longest in the world.' },
  { subject:'geography', level:5, type:'guess', q:'The imaginary lines running north-south on a map.', a:'longitude', e:'Longitude lines (meridians) run pole to pole. Latitude lines run east-west parallel to the equator.' },
  { subject:'geography', level:5, type:'fib',   q:'The capital of Iceland is ____.', a:'Reykjavik', e:'Reykjavik is the northernmost capital of a sovereign state and home to about a third of Iceland\'s population.' },
  { subject:'geography', level:5, type:'mc',    q:'Which sea is the saltiest?', choices:['Mediterranean','Dead','Red','Caspian'], a:'Dead', e:'The Dead Sea has about 34% salinity (10x saltier than the ocean). The high density makes swimmers float easily.' },

  /* =====================================================================
     ARALING PANLIPUNAN (Tagalog)
     ===================================================================== */
  { subject:'araling', level:1, type:'mc',    q:'Sino ang pambansang bayani ng Pilipinas?', choices:['Andres Bonifacio','Jose Rizal','Emilio Aguinaldo','Apolinario Mabini'], a:'Jose Rizal', e:'Si Dr. Jose Rizal ang kinilalang pambansang bayani dahil sa kanyang mga akda (Noli at El Fili) at buhay para sa kalayaan.' },
  { subject:'araling', level:1, type:'fib',   q:'Ang pambansang bulaklak ng Pilipinas ay ____.', a:'sampaguita', e:'Ang sampaguita ay itinalagang pambansang bulaklak noong 1934 dahil sa bango, puting kulay, at kahulugan nitong kadalisayan.' },
  { subject:'araling', level:1, type:'guess', q:'Ang pinakamalaking isla ng Pilipinas.', a:'Luzon', e:'Ang Luzon ang pinakamalaki sa tatlong pangunahing pangkat ng isla (Luzon, Visayas, Mindanao) at kinaroroonan ng Maynila.' },
  { subject:'araling', level:1, type:'mc',    q:'Kailan ang Araw ng Kalayaan ng Pilipinas?', choices:['Hunyo 12','Hulyo 4','Agosto 21','Nobyembre 30'], a:'Hunyo 12', e:'Ipinahayag ni Emilio Aguinaldo ang kalayaan ng Pilipinas mula sa Espanya noong Hunyo 12, 1898 sa Kawit, Cavite.' },
  { subject:'araling', level:1, type:'fib',   q:'Ang kabisera ng Pilipinas ay ____.', a:'Manila', e:'Ang Maynila (Manila) ang opisyal na kabisera ng Pilipinas, na matatagpuan sa Kalakhang Maynila (Metro Manila).' },
  { subject:'araling', level:1, type:'guess', q:'Ang pambansang ibon ng Pilipinas.', a:'agila', e:'Ang Philippine Eagle o Haribon ay ang pambansang ibon; isa sa pinakamalaking agila sa mundo at nanganganib.' },
  { subject:'araling', level:1, type:'mc',    q:'Ilang pangunahing isla ang Pilipinas?', choices:['3','7','3 pangkat','7,641'], a:'3 pangkat', e:'Ang Pilipinas ay may tatlong pangunahing pangkat ng isla: Luzon, Visayas, at Mindanao, na may kabuuang 7,641 na isla.' },

  { subject:'araling', level:2, type:'mc',    q:'Sino ang unang pangulo ng Pilipinas?', choices:['Manuel Quezon','Jose Laurel','Emilio Aguinaldo','Manuel Roxas'], a:'Emilio Aguinaldo', e:'Si Emilio Aguinaldo ang unang pangulo ng Pilipinas noong 1899 sa ilalim ng Unang Republika o Malolos Republic.' },
  { subject:'araling', level:2, type:'guess', q:'Ang taon na dumating si Ferdinand Magellan sa Pilipinas.', a:'1521', e:'Dumaong si Magellan sa Homonhon noong Marso 16, 1521. Napatay siya ni Lapu-Lapu sa Mactan noong Abril 27, 1521.' },
  { subject:'araling', level:2, type:'fib',   q:'Si ____ ang bayaning nanalo laban kay Magellan sa Mactan.', a:'Lapu-Lapu', e:'Si Lapu-Lapu, datu ng Mactan, ay pinuno ng mga mandirigmang tumalo at pumatay kay Magellan sa Labanan sa Mactan.' },
  { subject:'araling', level:2, type:'mc',    q:'Ilang rehiyon meron ang Pilipinas?', choices:['15','17','18','20'], a:'17', e:'Ang Pilipinas ay hinati sa 17 rehiyon, kabilang ang NCR, CAR, at BARMM.' },
  { subject:'araling', level:2, type:'guess', q:'Ang pambansang wika ng Pilipinas.', a:'Filipino', e:'Ang Filipino, na batay sa Tagalog, ang pambansang wika ayon sa 1987 Konstitusyon. English ay opisyal ding wika.' },
  { subject:'araling', level:2, type:'fib',   q:'Ang unang aklat ni Rizal ay pinamagatang Noli Me ____.', a:'Tangere', e:'"Noli Me Tangere" (Latin sa "Huwag Mo Akong Salingin") ay sinulat ni Rizal noong 1887 na naglantad ng abuso ng mga prayle.' },
  { subject:'araling', level:2, type:'mc',    q:'Alin ang pinakamataas na bundok sa Pilipinas?', choices:['Mayon','Apo','Pulag','Pinatubo'], a:'Apo', e:'Ang Mount Apo (2,954 m) sa Davao ang pinakamataas na bundok ng Pilipinas.' },

  { subject:'araling', level:3, type:'mc',    q:'Sino ang tinaguriang "Ama ng Rebolusyong Pilipino"?', choices:['Jose Rizal','Andres Bonifacio','Apolinario Mabini','Marcelo del Pilar'], a:'Andres Bonifacio', e:'Si Andres Bonifacio ang nagtatag ng Katipunan noong 1892 at pinuno ng armadong rebolusyon laban sa mga Espanyol.' },
  { subject:'araling', level:3, type:'guess', q:'Ang lihim na samahang binuo ni Andres Bonifacio.', a:'Katipunan', e:'Kataas-taasang Kagalanggalangang Katipunan ng mga Anak ng Bayan (KKK) ay itinatag noong Hulyo 7, 1892 sa Tondo.' },
  { subject:'araling', level:3, type:'fib',   q:'Ang Kasaysayan sa Bagumbayan ay ang lugar kung saan binaril si Rizal, ngayon ay ____ Park.', a:'Rizal', e:'Binaril si Rizal sa Bagumbayan (ngayon ay Luneta o Rizal Park sa Maynila) noong Disyembre 30, 1896.' },
  { subject:'araling', level:3, type:'mc',    q:'Sino ang tinaguriang "Utak ng Rebolusyon"?', choices:['Bonifacio','Mabini','Rizal','Aguinaldo'], a:'Mabini', e:'Si Apolinario Mabini, kahit paralisado, ay itinuring na "Utak ng Rebolusyon" at "Dakilang Lumpo" para sa kanyang matinding pag-iisip.' },
  { subject:'araling', level:3, type:'guess', q:'Ang pangalan ng rebolusyong pumatalsik kay Marcos noong 1986.', a:'EDSA', e:'Ang EDSA People Power Revolution (Peb. 22-25, 1986) ay walang-dugong protesta na nagpatalsik kay Ferdinand Marcos.' },
  { subject:'araling', level:3, type:'fib',   q:'Ang pinakamalaking lawa sa Pilipinas ay Lawa ng ____.', a:'Laguna', e:'Ang Laguna de Bay ay ang pinakamalaking lawa sa Pilipinas na may lawak na 949 sq km, malapit sa Metro Manila.' },
  { subject:'araling', level:3, type:'mc',    q:'Aling bansa ang naghahari sa Pilipinas mula 1898 hanggang 1946?', choices:['Espanya','Estados Unidos','Hapon','Britanya'], a:'Estados Unidos', e:'Matapos ang Kasunduan sa Paris (1898), nagpasa ang Espanya sa Amerika ng kapangyarihan sa Pilipinas hanggang sa kalayaan noong 1946.' },

  { subject:'araling', level:4, type:'mc',    q:'Anong sistema ng gobyerno ang mayroon ang Pilipinas?', choices:['Monarkiya','Presidensyal','Parlamentaryo','Pederal'], a:'Presidensyal', e:'Ang Pilipinas ay may presidensyal na sistema; ang Pangulo ay pinuno ng estado at pinuno ng pamahalaan, hinahalal ng bayan.' },
  { subject:'araling', level:4, type:'guess', q:'Ang tatlong sangay ng gobyerno ng Pilipinas: Ehekutibo, Lehislatibo, at ____.', a:'Hudikatura', e:'Ang tatlong sangay: Ehekutibo (Pangulo), Lehislatibo (Kongreso: Senado at Kamara), at Hudikatura (Korte Suprema).' },
  { subject:'araling', level:4, type:'fib',   q:'Ilan ang senador sa Senado ng Pilipinas?', a:'24', e:'Ang Senado ay may 24 senador; bawat isa ay nagsisilbi ng 6 na taon, kalahati ay hinahalal bawat 3 taon.' },
  { subject:'araling', level:4, type:'mc',    q:'Sino ang unang babaeng pangulo ng Pilipinas?', choices:['Gloria Arroyo','Miriam Santiago','Corazon Aquino','Leni Robredo'], a:'Corazon Aquino', e:'Si Corazon "Cory" Aquino ang naging unang babaeng Pangulo (1986-1992) matapos ang EDSA Revolution.' },
  { subject:'araling', level:4, type:'guess', q:'Ang pinakamahalagang batas sa Pilipinas na inilalatag ang balangkas ng pamahalaan.', a:'Konstitusyon', e:'Ang 1987 Konstitusyon ang kasalukuyang saligang batas ng Pilipinas, pinagtibay matapos ang EDSA Revolution.' },
  { subject:'araling', level:4, type:'fib',   q:'Ang kasunduan noong 1898 na nag-transfer ng Pilipinas mula Espanya sa Amerika ay ang Kasunduan sa ____.', a:'Paris', e:'Ang Kasunduan sa Paris ng 1898 ay tumapos sa Digmaang Espanyol-Amerikano at ipinasa ang Pilipinas, Guam, at Puerto Rico sa US.' },

  { subject:'araling', level:5, type:'mc',    q:'Aling batas ang nagbigay ng kalayaan sa Pilipinas mula sa Amerika?', choices:['Jones Law','Tydings-McDuffie Act','Bell Trade Act','Manila Pact'], a:'Tydings-McDuffie Act', e:'Ang Tydings-McDuffie Act ng 1934 ay nagtakda ng 10-taong transisyon patungo sa ganap na kalayaan noong Hulyo 4, 1946.' },
  { subject:'araling', level:5, type:'guess', q:'Ang pangalan ng kilusang naghahangad ng kasarinlan mula sa Espanya sa pamamagitan ng repormang mapayapa.', a:'Propaganda Movement', e:'Ang Propaganda Movement (1880s-1890s) ay pinamunuan nila Rizal, del Pilar, at Lopez Jaena sa pamamagitan ng pahayagang La Solidaridad.' },
  { subject:'araling', level:5, type:'fib',   q:'Ang Republic Act na nagtatag sa BARMM ay tinatawag na ____ Basic Law.', a:'Bangsamoro', e:'Ang Bangsamoro Organic Law (RA 11054, 2018) ang nagtatag ng Bangsamoro Autonomous Region sa Muslim Mindanao (BARMM).' },
  { subject:'araling', level:5, type:'mc',    q:'Alin ang unang republikang itinatag sa Asya?', choices:['Japan','China','Republikang Malolos','India'], a:'Republikang Malolos', e:'Ang Republikang Malolos (1899) ang unang demokratikong republika sa Asya, na itinatag sa Malolos, Bulacan.' },
  { subject:'araling', level:5, type:'guess', q:'Ang pangalan ng pandaigdigang samahang binuo pagkatapos ng Ikalawang Digmaang Pandaigdig kung saan miyembro ang Pilipinas.', a:'United Nations', e:'Ang Pilipinas ay isa sa 51 orihinal na miyembro ng United Nations noong 1945 (Karlos P. Romulo ay unang Pinoy na Pangulo ng UN GA).' },
  { subject:'araling', level:5, type:'fib',   q:'Ang unang Kalihim ng Ugnayang Panlabas ng Pilipinas na naging Pangulo ng UN General Assembly ay ____ Romulo.', a:'Carlos', e:'Si Carlos P. Romulo ay unang Asyanong napiling Pangulo ng UN General Assembly noong 1949.' },

  /* =====================================================================
     FILIPINO (Tagalog)
     ===================================================================== */
  { subject:'filipino', level:1, type:'mc',    q:'Alin sa mga sumusunod ang pangngalan?', choices:['tumakbo','maganda','mansanas','mabilis'], a:'mansanas', e:'Ang pangngalan ay pangalan ng tao, bagay, hayop, lugar, o pangyayari. "Mansanas" ay isang bagay/prutas.' },
  { subject:'filipino', level:1, type:'fib',   q:'Ang salitang tumutukoy sa kilos o galaw ay tinatawag na ____.', a:'pandiwa', e:'Ang pandiwa ay ang bahagi ng pananalita na nagsasabi ng aksyon (kumain, tumakbo, umupo).' },
  { subject:'filipino', level:1, type:'guess', q:'Ang salitang naglalarawan ng pangngalan.', a:'pang-uri', e:'Ang pang-uri ay naglalarawan sa pangngalan (mabait, maganda, malaki, mabilis).' },
  { subject:'filipino', level:1, type:'mc',    q:'Ano ang kabaligtaran ng "maliit"?', choices:['maganda','mabait','malaki','mahaba'], a:'malaki', e:'Ang salitang may kabaliktaran ng kahulugan ay tinatawag na kasalungat o antonym. "Maliit" at "malaki" ay magkasalungat.' },
  { subject:'filipino', level:1, type:'fib',   q:'Ang pambansang alay sa mga Pilipino ay ang Pambansang ____.', a:'Awit', e:'Ang "Lupang Hinirang" ay ang pambansang awit ng Pilipinas, sinulat ni Julian Felipe (musika) at Jose Palma (titik).' },
  { subject:'filipino', level:1, type:'guess', q:'Salita na katunog o may parehong tunog sa dulo.', a:'tugma', e:'Ang tugma ay ang paggamit ng magkatunog na salita, madalas ginagamit sa tula at kanta.' },
  { subject:'filipino', level:1, type:'mc',    q:'Alin sa mga sumusunod ay panghalip?', choices:['bahay','ako','malaki','tumakbo'], a:'ako', e:'Ang panghalip ay salitang panghalili sa pangngalan. "Ako", "ikaw", "siya", "kami", "kayo", "sila" ay mga panghalip panao.' },

  { subject:'filipino', level:2, type:'mc',    q:'Ilan ang bahagi ng pananalita sa Filipino?', choices:['6','7','8','9'], a:'8', e:'Walo (8) ang mga bahagi ng pananalita: pangngalan, panghalip, pandiwa, pang-uri, pang-abay, pang-ukol, pangatnig, at pandamdam.' },
  { subject:'filipino', level:2, type:'guess', q:'Ang tawag sa dalawa o higit pang salitang pinagsasama para bumuo ng bagong salita.', a:'tambalan', e:'Ang salitang tambalan ay dalawang salitang pinagsama tulad ng "silid-tulugan", "bahay-aliwan", "hampas-lupa".' },
  { subject:'filipino', level:2, type:'fib',   q:'Ang isang linya ng tula ay tinatawag na ____.', a:'taludtod', e:'Ang taludtod ay isang linya ng tula. Ang pangkat ng mga taludtod ay tinatawag na saknong.' },
  { subject:'filipino', level:2, type:'mc',    q:'Alin ang tamang paggamit ng "ng" at "nang"?', choices:['Kumain ng adobo. Umuwi nang maaga.','Kumain nang adobo. Umuwi ng maaga.','Kumain ng adobo. Umuwi ng maaga.','Kumain nang adobo. Umuwi nang maaga.'], a:'Kumain ng adobo. Umuwi nang maaga.', e:'"Ng" ay ginagamit sa pangngalan (kumain ng adobo). "Nang" ay ginagamit sa pandiwa/pang-abay (umuwi nang maaga = kailan/paano).' },
  { subject:'filipino', level:2, type:'guess', q:'Ang bahagi ng pananalita na nagpapahayag ng damdamin.', a:'pandamdam', e:'Ang pandamdam ay nagpapahayag ng biglaang emosyon tulad ng "Aba!", "Naku!", "Aray!".' },
  { subject:'filipino', level:2, type:'fib',   q:'Ang salaysay ng buhay ng isang tao na sinulat niya mismo ay ____.', a:'talambuhay', e:'Ang autobiograpiya o sariling talambuhay ay isinulat mismo ng tao. Ang talambuhay na isinulat ng iba ay biograpiya.' },
  { subject:'filipino', level:2, type:'mc',    q:'Alin ang pangatnig?', choices:['at','ako','maganda','bahay'], a:'at', e:'Ang pangatnig ay nag-uugnay ng dalawang salita, parirala, o sugnay. Mga halimbawa: at, ngunit, o, kung, kapag.' },

  { subject:'filipino', level:3, type:'mc',    q:'Sino ang sumulat ng "Noli Me Tangere"?', choices:['Andres Bonifacio','Jose Rizal','Francisco Balagtas','Amado Hernandez'], a:'Jose Rizal', e:'Isinulat ni Dr. Jose Rizal ang Noli Me Tangere noong 1887 sa Berlin, Germany. Ang sequel ay El Filibusterismo (1891).' },
  { subject:'filipino', level:3, type:'guess', q:'Ang tayutay na naghahambing gamit ang salitang "parang" o "tulad ng".', a:'pagtutulad', e:'Pagtutulad (simile) ay naghahambing gamit ang "parang", "tulad ng", "gaya ng". Halimbawa: Mabait siya parang santo.' },
  { subject:'filipino', level:3, type:'fib',   q:'Ang tayutay na nagbibigay ng katangian ng tao sa bagay o hayop ay ____.', a:'pagbibigay-katauhan', e:'Ang pagbibigay-katauhan (personification) ay pagbibigay ng katangiang tao sa mga bagay. Halimbawa: Kumaway ang mga puno.' },
  { subject:'filipino', level:3, type:'mc',    q:'Sino ang tinaguriang "Prinsipe ng Makatang Tagalog"?', choices:['Jose Rizal','Amado Hernandez','Francisco Balagtas','Lope K. Santos'], a:'Francisco Balagtas', e:'Si Francisco Balagtas (Baltazar) ay tinaguriang "Prinsipe ng Makatang Tagalog" dahil sa kanyang obra maestra na "Florante at Laura".' },
  { subject:'filipino', level:3, type:'guess', q:'Ang tawag sa maikling istorya na nagtuturo ng aral, kadalasang may hayop na tauhan.', a:'pabula', e:'Ang pabula ay maikling kuwento na may mga hayop bilang tauhan at nagtuturo ng aral o moral.' },
  { subject:'filipino', level:3, type:'fib',   q:'Ang unang pambansang epiko ng Pilipinas ay ang ____.', a:'Ibalon', e:'Ang Ibalon ng Bicol ay isa sa mga pinakamatandang naitalang epiko sa Pilipinas, tungkol sa mga bayaning si Baltog, Handyong, at Bantong.' },
  { subject:'filipino', level:3, type:'mc',    q:'Alin ang epikong Ilokano?', choices:['Biag ni Lam-ang','Hinilawod','Ibalon','Darangen'], a:'Biag ni Lam-ang', e:'Ang "Biag ni Lam-ang" ay epiko ng mga Ilokano tungkol sa bayaning si Lam-ang na natutong magsalita nang bagong panganak.' },

  { subject:'filipino', level:4, type:'mc',    q:'Sino ang sumulat ng "Florante at Laura"?', choices:['Balagtas','Rizal','Bonifacio','Hernandez'], a:'Balagtas', e:'"Florante at Laura" ay isinulat ni Francisco Balagtas noong 1838, isang awit tungkol sa pag-ibig at katarungan.' },
  { subject:'filipino', level:4, type:'guess', q:'Ang tayutay na nagpapalabis ng katotohanan para sa diin.', a:'pagmamalabis', e:'Ang pagmamalabis (hyperbole) ay pagpapalabis para sa epekto. Halimbawa: "Mamamatay ako sa gutom!" - hindi literal.' },
  { subject:'filipino', level:4, type:'fib',   q:'Ang sequel ni Rizal sa Noli Me Tangere ay ang ____.', a:'El Filibusterismo', e:'Ang "El Filibusterismo" (1891) ay ang pangalawang nobela ni Rizal, mas madilim at rebolusyonaryo kaysa sa Noli.' },
  { subject:'filipino', level:4, type:'mc',    q:'Ano ang ibig sabihin ng "salawikain"?', choices:['tugma','tula','kasabihan','alamat'], a:'kasabihan', e:'Ang salawikain (proverb) ay maikling kasabihan na naglalaman ng aral o karunungan. Halimbawa: "Ang hindi lumingon sa pinanggalingan..."' },
  { subject:'filipino', level:4, type:'guess', q:'Ang panitikang nagsasalaysay ng pinagmulan ng isang lugar o bagay.', a:'alamat', e:'Ang alamat (legend) ay kuwentong bayan na nagpapaliwanag kung paano nabuo ang isang lugar, hayop, o bagay (hal. alamat ng pinya).' },
  { subject:'filipino', level:4, type:'fib',   q:'Ang tauhan sa isang kuwento na kalaban ng pangunahing tauhan ay tinatawag na ____.', a:'kontrabida', e:'Ang bida (protagonist) ay ang pangunahing tauhan. Ang kontrabida (antagonist) ay ang kalaban o sanhi ng problema.' },

  { subject:'filipino', level:5, type:'mc',    q:'Sino ang tinaguriang "Ama ng Balarilang Tagalog"?', choices:['Jose Rizal','Lope K. Santos','Balagtas','Bienvenido Lumbera'], a:'Lope K. Santos', e:'Si Lope K. Santos ay sumulat ng "Balarila ng Wikang Pambansa" (1940) at kilala bilang Ama ng Balarilang Tagalog.' },
  { subject:'filipino', level:5, type:'guess', q:'Ang matandang alpabetong Filipino bago dumating ang mga Espanyol.', a:'baybayin', e:'Ang Baybayin ay ang sinaunang sistema ng pagsulat ng mga tagalog bago ang Kastila; mula pa noong 1200s.' },
  { subject:'filipino', level:5, type:'fib',   q:'Ang unang nobelang Filipino ay Ninay, sinulat ni Pedro ____.', a:'Paterno', e:'Si Pedro Paterno ay sumulat ng "Ninay" (1885), ang kauna-unahang nobela ni isang Pilipino.' },
  { subject:'filipino', level:5, type:'mc',    q:'Aling akda ni Rizal ang naglalarawan ng edukasyong Pilipino sa panahong Kastila?', choices:['Mi Ultimo Adios','A la Juventud Filipina','Noli Me Tangere','El Filibusterismo'], a:'A la Juventud Filipina', e:'"A la Juventud Filipina" (1879) ay isang tula ni Rizal para sa kabataang Pilipino, hinihikayat silang magsulong ng edukasyon.' },
  { subject:'filipino', level:5, type:'guess', q:'Ang huling tula na isinulat ni Rizal bago siya binaril.', a:'Mi Ultimo Adios', e:'"Mi Ultimo Adios" ay isinulat ni Rizal sa bisperas ng kanyang bitay noong 1896, isinalin sa Filipino at maraming wika.' },
  { subject:'filipino', level:5, type:'fib',   q:'Ang unang Pambansang Alagad ng Sining sa panitikan ay si Amado ____.', a:'Hernandez', e:'Si Amado V. Hernandez ang unang National Artist for Literature (1973); sikat sa "Mga Ibong Mandaragit" at "Bayang Malaya".' },

  /* =====================================================================
     MAPEH (Music, Arts, PE, Health)
     ===================================================================== */
  { subject:'mapeh', level:1, type:'mc',    q:'How many food groups are in "Go, Grow, Glow"?', choices:['2','3','4','5'], a:'3', e:'Go foods give energy (rice, bread). Grow foods build muscles (meat, eggs). Glow foods protect the body (fruits, vegetables).' },
  { subject:'mapeh', level:1, type:'fib',   q:'The dance where dancers step over bamboo poles is called ____.', a:'tinikling', e:'Tinikling is a traditional Filipino folk dance imitating the tikling bird\'s movements as it evades bamboo traps.' },
  { subject:'mapeh', level:1, type:'guess', q:'How many teeth does a healthy adult usually have?', a:'32', e:'Adults typically have 32 permanent teeth: 8 incisors, 4 canines, 8 premolars, 12 molars (including 4 wisdom teeth).' },
  { subject:'mapeh', level:1, type:'mc',    q:'Which color is a primary color?', choices:['green','purple','red','orange'], a:'red', e:'Primary colors are red, blue, and yellow. All other colors are made by mixing these. Secondary: green, purple, orange.' },
  { subject:'mapeh', level:1, type:'fib',   q:'A ball game with 5 players on each side that involves shooting into a hoop is ____.', a:'basketball', e:'Basketball is the most popular sport in the Philippines, played 5-on-5 with the goal of scoring in the opponent\'s hoop.' },
  { subject:'mapeh', level:1, type:'guess', q:'The system in your body that pumps blood.', a:'circulatory', e:'The circulatory system includes the heart, blood vessels, and blood, delivering oxygen and nutrients to cells.' },
  { subject:'mapeh', level:1, type:'mc',    q:'Which is a Filipino folk song about a firefly?', choices:['Bahay Kubo','Leron Leron Sinta','Paruparong Bukid','Alitaptap'], a:'Alitaptap', e:'"Alitaptap" is a lullaby about a firefly. "Bahay Kubo" lists vegetables, "Paruparong Bukid" is about a butterfly.' },

  { subject:'mapeh', level:2, type:'mc',    q:'Which nutrient gives the most energy per gram?', choices:['carbohydrates','protein','fats','vitamins'], a:'fats', e:'Fats give 9 calories per gram. Carbohydrates and proteins each give 4 calories per gram. Vitamins have no calories.' },
  { subject:'mapeh', level:2, type:'guess', q:'The famous Filipino painter who created "Spoliarium".', a:'Juan Luna', e:'Juan Luna painted the Spoliarium in 1884, winning gold at the Madrid Exposition. It hangs in the National Museum in Manila.' },
  { subject:'mapeh', level:2, type:'fib',   q:'The music tempo term "allegro" means to play ____.', a:'fast', e:'Allegro means fast and lively (120-168 bpm). Andante = walking pace. Adagio = slow. Presto = very fast.' },
  { subject:'mapeh', level:2, type:'mc',    q:'How many players are on a volleyball team on the court?', choices:['5','6','7','9'], a:'6', e:'A volleyball team has 6 players on the court: 3 in the front row (near the net) and 3 in the back row.' },
  { subject:'mapeh', level:2, type:'guess', q:'The body\'s largest organ.', a:'skin', e:'The skin is the largest organ, covering about 2 square meters in an adult. It protects, regulates temperature, and senses touch.' },
  { subject:'mapeh', level:2, type:'fib',   q:'The traditional Filipino martial art using sticks is called ____.', a:'arnis', e:'Arnis (also called Eskrima or Kali) is the national martial art of the Philippines, using rattan sticks, knives, or empty hands.' },
  { subject:'mapeh', level:2, type:'mc',    q:'Which is NOT a wind instrument?', choices:['flute','trumpet','violin','clarinet'], a:'violin', e:'A violin is a string instrument played with a bow. Flute, trumpet, and clarinet are wind instruments (blown).' },

  { subject:'mapeh', level:3, type:'mc',    q:'How many players are on a football (soccer) team on the field?', choices:['9','10','11','12'], a:'11', e:'A soccer team has 11 players on the field: 1 goalkeeper and 10 outfield players. The FIFA World Cup features 32 (now 48) teams.' },
  { subject:'mapeh', level:3, type:'guess', q:'The three primary colors in painting.', a:'red yellow blue', e:'In traditional color theory (paint), the primary colors are red, yellow, and blue. In light (RGB), they are red, green, blue.' },
  { subject:'mapeh', level:3, type:'fib',   q:'The BMI (Body Mass Index) formula is weight / height ____.', a:'squared', e:'BMI = weight (kg) / height (m)^2. Normal range is 18.5 to 24.9. Under 18.5 is underweight; over 25 is overweight.' },
  { subject:'mapeh', level:3, type:'mc',    q:'The national artist for Philippine painting known for rural scenes is', choices:['Fernando Amorsolo','Juan Luna','Vicente Manansala','Ang Kiukok'], a:'Fernando Amorsolo', e:'Fernando Amorsolo (National Artist, 1972) is famous for his sunlit paintings of Filipino rural life, farmers, and dalagang bukid.' },
  { subject:'mapeh', level:3, type:'guess', q:'The disease caused by lack of vitamin C.', a:'scurvy', e:'Scurvy causes bleeding gums and fatigue, historically common among sailors. Vitamin C is abundant in citrus fruits and vegetables.' },
  { subject:'mapeh', level:3, type:'fib',   q:'A note held for one full beat in 4/4 time is a ____ note.', a:'quarter', e:'In 4/4 time: whole = 4 beats, half = 2, quarter = 1, eighth = 1/2. So a quarter note lasts one beat.' },
  { subject:'mapeh', level:3, type:'mc',    q:'Which is a genre of Original Pilipino Music (OPM)?', choices:['K-pop','Reggae','Kundiman','Salsa'], a:'Kundiman', e:'Kundiman is a traditional Filipino love song genre with a slow, melancholic style. Composers like Nicanor Abelardo made it famous.' },

  { subject:'mapeh', level:4, type:'mc',    q:'Which vitamin is produced by skin exposure to sunlight?', choices:['A','B12','C','D'], a:'D', e:'Vitamin D is synthesized when UVB rays hit the skin. It helps the body absorb calcium for strong bones.' },
  { subject:'mapeh', level:4, type:'guess', q:'The art movement led by Pablo Picasso featuring fragmented shapes.', a:'cubism', e:'Cubism (1907-1920s), pioneered by Picasso and Braque, broke subjects into geometric shapes viewed from multiple angles simultaneously.' },
  { subject:'mapeh', level:4, type:'fib',   q:'The Olympic Games are held every ____ years.', a:'4', e:'The Summer and Winter Olympics each run every 4 years, but alternate every 2 years so there is an Olympics every 2 years overall.' },
  { subject:'mapeh', level:4, type:'mc',    q:'How many bones make up the human skull?', choices:['12','22','30','42'], a:'22', e:'The skull has 22 bones: 8 cranial bones protecting the brain and 14 facial bones. All except the mandible are fused.' },
  { subject:'mapeh', level:4, type:'guess', q:'The Filipino boxer who won 8 world titles in different weight classes.', a:'Manny Pacquiao', e:'Manny Pacquiao is the only boxer in history to win world titles in 8 different weight divisions. He was also a senator.' },
  { subject:'mapeh', level:4, type:'fib',   q:'The five lines and four spaces where music notes are written is called a ____.', a:'staff', e:'The musical staff has 5 lines and 4 spaces. Notes on lines: E-G-B-D-F (Every Good Boy Does Fine). Spaces spell F-A-C-E.' },

  { subject:'mapeh', level:5, type:'mc',    q:'The first Filipino Olympic gold medalist won in', choices:['boxing','swimming','weightlifting','athletics'], a:'weightlifting', e:'Hidilyn Diaz won the Philippines\' first Olympic gold at the Tokyo 2020 Games (held in 2021) in women\'s 55 kg weightlifting.' },
  { subject:'mapeh', level:5, type:'guess', q:'The measure of how many heart beats per minute at rest.', a:'resting heart rate', e:'Normal resting heart rate for adults is 60-100 bpm. Athletes can be as low as 40-60. Measured by counting pulse for 60 seconds at rest.' },
  { subject:'mapeh', level:5, type:'fib',   q:'The world-renowned Filipina singer known as "The Voice" is Lea ____.', a:'Salonga', e:'Lea Salonga was the original Kim in Miss Saigon (winning a Tony) and the singing voice of Princess Jasmine and Mulan in Disney films.' },
  { subject:'mapeh', level:5, type:'mc',    q:'A disease of the lungs caused by smoking is', choices:['diabetes','hypertension','emphysema','arthritis'], a:'emphysema', e:'Emphysema damages the tiny air sacs (alveoli) in the lungs, mostly from smoking. It causes shortness of breath and is part of COPD.' },
  { subject:'mapeh', level:5, type:'guess', q:'The art of paper folding originating from Japan.', a:'origami', e:'Origami (from Japanese "oru" = fold, "kami" = paper) turns a single square into sculptures without cuts or glue.' },
  { subject:'mapeh', level:5, type:'fib',   q:'The recommended daily water intake is about ____ liters for an adult.', a:'2', e:'The general guideline is about 2 liters (8 glasses) per day, though needs vary with body size, activity, and climate.' },
  { subject:'mapeh', level:5, type:'mc',    q:'The Filipino National Artist for Music known for "Sarung Banggi" and other kundiman is', choices:['Levi Celerio','Nicanor Abelardo','Antonio Molina','Ryan Cayabyab'], a:'Nicanor Abelardo', e:'Nicanor Abelardo (National Artist, 1997) is a pillar of Filipino classical music and kundiman, most famous for "Mutya ng Pasig".' },
];

/* Available subjects, in display order. 'mixed' is a synthetic option handled by the app. */
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
