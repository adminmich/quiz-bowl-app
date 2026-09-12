/* Question bank for the Quiz Bowl app.
   Types: 'mc' (multiple choice), 'fib' (fill in the blank), 'guess' (guess the word).
   Levels 1-5 loosely map to grades 5-6, 6-7, 8-9, 10-11, 12+. */

window.QUESTIONS = [
  /* =====================================================================
     MATH
     ===================================================================== */
  { subject:'math', level:1, type:'mc',    q:'What is 7 x 8?',                        choices:['54','56','58','64'], a:'56' },
  { subject:'math', level:1, type:'mc',    q:'Which number is a prime?',              choices:['9','15','17','21'], a:'17' },
  { subject:'math', level:1, type:'fib',   q:'The perimeter of a square with side 5 is ____.', a:'20' },
  { subject:'math', level:1, type:'fib',   q:'1/2 + 1/4 = ____ (as a fraction).',     a:'3/4' },
  { subject:'math', level:1, type:'mc',    q:'Which fraction is largest?',             choices:['1/2','2/5','3/8','1/3'], a:'1/2' },
  { subject:'math', level:1, type:'guess', q:'A shape with three sides.',              a:'triangle' },
  { subject:'math', level:1, type:'guess', q:'The result of subtraction.',             a:'difference' },
  { subject:'math', level:1, type:'mc',    q:'What is 144 / 12?',                      choices:['10','11','12','14'], a:'12' },

  { subject:'math', level:2, type:'mc',    q:'What is 15% of 200?',                    choices:['20','25','30','35'], a:'30' },
  { subject:'math', level:2, type:'fib',   q:'The area of a rectangle 8 by 6 is ____.', a:'48' },
  { subject:'math', level:2, type:'mc',    q:'Solve: 3x = 21. x = ?',                  choices:['3','6','7','9'], a:'7' },
  { subject:'math', level:2, type:'guess', q:'The distance around a circle.',          a:'circumference' },
  { subject:'math', level:2, type:'fib',   q:'The square root of 81 is ____.',         a:'9' },
  { subject:'math', level:2, type:'mc',    q:'Which is an irrational number?',         choices:['0.5','1/3','pi','7'], a:'pi' },
  { subject:'math', level:2, type:'guess', q:'A polygon with eight sides.',            a:'octagon' },
  { subject:'math', level:2, type:'mc',    q:'What is 2^5?',                           choices:['10','16','25','32'], a:'32' },

  { subject:'math', level:3, type:'mc',    q:'Solve: 2x + 3 = 15. x = ?',              choices:['5','6','7','8'], a:'6' },
  { subject:'math', level:3, type:'fib',   q:'The hypotenuse of a right triangle with legs 3 and 4 is ____.', a:'5' },
  { subject:'math', level:3, type:'guess', q:'A quadrilateral with exactly one pair of parallel sides.', a:'trapezoid' },
  { subject:'math', level:3, type:'mc',    q:'What is the slope of the line y = 4x - 7?', choices:['-7','4','-4','7'], a:'4' },
  { subject:'math', level:3, type:'fib',   q:'If a triangle has angles 40 and 60, the third angle is ____ degrees.', a:'80' },
  { subject:'math', level:3, type:'guess', q:'The Greek letter used for pi.',           a:'pi' },
  { subject:'math', level:3, type:'mc',    q:'Which is the value of |-9|?',            choices:['-9','0','9','18'], a:'9' },
  { subject:'math', level:3, type:'fib',   q:'The mean of 4, 8, 12, 16 is ____.',       a:'10' },

  { subject:'math', level:4, type:'mc',    q:'What is the derivative of x^3?',         choices:['x^2','3x','3x^2','x^4/4'], a:'3x^2' },
  { subject:'math', level:4, type:'fib',   q:'log base 10 of 1000 = ____.',            a:'3' },
  { subject:'math', level:4, type:'guess', q:'A triangle with all sides equal.',       a:'equilateral' },
  { subject:'math', level:4, type:'mc',    q:'sin(90 degrees) = ?',                    choices:['0','1/2','1','undefined'], a:'1' },
  { subject:'math', level:4, type:'fib',   q:'The quadratic formula solves ax^2 + bx + ____ = 0.', a:'c' },
  { subject:'math', level:4, type:'guess', q:'The point where a curve crosses the x-axis.', a:'root' },
  { subject:'math', level:4, type:'mc',    q:'Which set contains only real numbers?',  choices:['{i, 2i}','{-3, 0, pi}','{sqrt(-4)}','{2+i}'], a:'{-3, 0, pi}' },
  { subject:'math', level:4, type:'fib',   q:'e (Euler\'s number) is approximately ____ (2 decimals).', a:'2.72' },

  { subject:'math', level:5, type:'mc',    q:'The integral of 2x dx =',                choices:['x^2','x^2 + C','2 + C','x^3/3'], a:'x^2 + C' },
  { subject:'math', level:5, type:'guess', q:'Branch of mathematics dealing with change and motion.', a:'calculus' },
  { subject:'math', level:5, type:'fib',   q:'The limit as x approaches 0 of sin(x)/x is ____.', a:'1' },
  { subject:'math', level:5, type:'mc',    q:'A matrix with determinant 0 is called', choices:['singular','identity','orthogonal','symmetric'], a:'singular' },
  { subject:'math', level:5, type:'guess', q:'A number that cannot be expressed as a fraction of two integers.', a:'irrational' },
  { subject:'math', level:5, type:'fib',   q:'The number of degrees in a full rotation is ____.', a:'360' },
  { subject:'math', level:5, type:'mc',    q:'Which theorem relates the sides of a right triangle?', choices:['Fermat','Pythagorean','Euclid','Thales'], a:'Pythagorean' },

  /* =====================================================================
     SCIENCE
     ===================================================================== */
  { subject:'science', level:1, type:'mc',    q:'Which planet is closest to the Sun?', choices:['Venus','Earth','Mercury','Mars'], a:'Mercury' },
  { subject:'science', level:1, type:'fib',   q:'Water freezes at ____ degrees Celsius.', a:'0' },
  { subject:'science', level:1, type:'mc',    q:'How many bones does an adult human have?', choices:['186','206','226','256'], a:'206' },
  { subject:'science', level:1, type:'guess', q:'The gas we breathe in that keeps us alive.', a:'oxygen' },
  { subject:'science', level:1, type:'fib',   q:'The center of an atom is called the ____.', a:'nucleus' },
  { subject:'science', level:1, type:'mc',    q:'What organ pumps blood?',            choices:['lungs','liver','heart','brain'], a:'heart' },
  { subject:'science', level:1, type:'guess', q:'The process plants use to make food from sunlight.', a:'photosynthesis' },
  { subject:'science', level:1, type:'mc',    q:'Which is a mammal?',                 choices:['shark','frog','whale','eagle'], a:'whale' },

  { subject:'science', level:2, type:'mc',    q:'The chemical symbol for gold is',    choices:['Go','Gd','Au','Ag'], a:'Au' },
  { subject:'science', level:2, type:'fib',   q:'Sound travels fastest through ____ (solid/liquid/gas).', a:'solid' },
  { subject:'science', level:2, type:'guess', q:'The powerhouse of the cell.',         a:'mitochondria' },
  { subject:'science', level:2, type:'mc',    q:'Which force pulls objects toward Earth?', choices:['friction','magnetism','gravity','tension'], a:'gravity' },
  { subject:'science', level:2, type:'fib',   q:'Water has the chemical formula ____.', a:'H2O' },
  { subject:'science', level:2, type:'guess', q:'The layer of gas surrounding Earth.', a:'atmosphere' },
  { subject:'science', level:2, type:'mc',    q:'Which is NOT a state of matter?',    choices:['solid','liquid','plasma','energy'], a:'energy' },
  { subject:'science', level:2, type:'fib',   q:'The largest planet in our solar system is ____.', a:'Jupiter' },

  { subject:'science', level:3, type:'mc',    q:'What is the pH of a neutral solution?', choices:['0','7','10','14'], a:'7' },
  { subject:'science', level:3, type:'guess', q:'The unit of electrical resistance.',  a:'ohm' },
  { subject:'science', level:3, type:'fib',   q:'DNA stands for ____ acid.',           a:'deoxyribonucleic' },
  { subject:'science', level:3, type:'mc',    q:'Which particle has no charge?',      choices:['proton','electron','neutron','positron'], a:'neutron' },
  { subject:'science', level:3, type:'guess', q:'The scientist who developed the theory of evolution.', a:'Darwin' },
  { subject:'science', level:3, type:'fib',   q:'Newton\'s second law: F = m x ____.', a:'a' },
  { subject:'science', level:3, type:'mc',    q:'Which gas is most abundant in Earth\'s atmosphere?', choices:['oxygen','carbon dioxide','nitrogen','argon'], a:'nitrogen' },

  { subject:'science', level:4, type:'mc',    q:'The speed of light in vacuum is approximately', choices:['3 x 10^5 m/s','3 x 10^8 m/s','3 x 10^10 m/s','3 x 10^12 m/s'], a:'3 x 10^8 m/s' },
  { subject:'science', level:4, type:'guess', q:'The process by which liquid becomes gas at the surface.', a:'evaporation' },
  { subject:'science', level:4, type:'fib',   q:'The three types of rocks are igneous, sedimentary, and ____.', a:'metamorphic' },
  { subject:'science', level:4, type:'mc',    q:'Which element has atomic number 6?', choices:['oxygen','carbon','nitrogen','helium'], a:'carbon' },
  { subject:'science', level:4, type:'guess', q:'The bending of light as it passes from one medium to another.', a:'refraction' },
  { subject:'science', level:4, type:'fib',   q:'The SI unit of force is the ____.',   a:'newton' },
  { subject:'science', level:4, type:'mc',    q:'Which blood type is the universal donor?', choices:['A+','O-','AB+','B-'], a:'O-' },

  { subject:'science', level:5, type:'mc',    q:'Which subatomic particle carries a negative charge?', choices:['proton','neutron','electron','photon'], a:'electron' },
  { subject:'science', level:5, type:'guess', q:'Einstein\'s famous equation relates energy, mass, and this.', a:'light' },
  { subject:'science', level:5, type:'fib',   q:'The powerhouse molecule of the cell is ____.', a:'ATP' },
  { subject:'science', level:5, type:'mc',    q:'What type of bond shares electrons?', choices:['ionic','covalent','metallic','hydrogen'], a:'covalent' },
  { subject:'science', level:5, type:'guess', q:'The scientist who proposed general relativity.', a:'Einstein' },
  { subject:'science', level:5, type:'fib',   q:'The organelle that packages proteins is the Golgi ____.', a:'apparatus' },
  { subject:'science', level:5, type:'mc',    q:'Which law states that energy cannot be created or destroyed?', choices:['Newton\'s first','Conservation of energy','Ohm\'s law','Boyle\'s law'], a:'Conservation of energy' },

  /* =====================================================================
     ENGLISH
     ===================================================================== */
  { subject:'english', level:1, type:'mc',    q:'Which word is a noun?',              choices:['run','happy','apple','quickly'], a:'apple' },
  { subject:'english', level:1, type:'fib',   q:'The plural of "child" is ____.',      a:'children' },
  { subject:'english', level:1, type:'guess', q:'A word that describes a noun.',      a:'adjective' },
  { subject:'english', level:1, type:'mc',    q:'Which is a complete sentence?',     choices:['Running fast.','The dog barks.','On the table.','Very cold today.'], a:'The dog barks.' },
  { subject:'english', level:1, type:'fib',   q:'The opposite of "hot" is ____.',      a:'cold' },
  { subject:'english', level:1, type:'guess', q:'A story that is not true, often with talking animals.', a:'fable' },
  { subject:'english', level:1, type:'mc',    q:'Which word rhymes with "cat"?',      choices:['dog','hat','sun','mop'], a:'hat' },
  { subject:'english', level:1, type:'fib',   q:'The past tense of "go" is ____.',     a:'went' },

  { subject:'english', level:2, type:'mc',    q:'Which is a verb?',                   choices:['blue','table','swim','beautiful'], a:'swim' },
  { subject:'english', level:2, type:'guess', q:'A word that means the same as another.', a:'synonym' },
  { subject:'english', level:2, type:'fib',   q:'"They\'re" is a contraction for "they ____".', a:'are' },
  { subject:'english', level:2, type:'mc',    q:'Which word is spelled correctly?',   choices:['recieve','receive','receeve','receve'], a:'receive' },
  { subject:'english', level:2, type:'guess', q:'A word with the opposite meaning.',  a:'antonym' },
  { subject:'english', level:2, type:'fib',   q:'A group of words with subject and verb is a ____.', a:'sentence' },
  { subject:'english', level:2, type:'mc',    q:'Which is an adverb?',                choices:['slow','slowly','slower','slowness'], a:'slowly' },

  { subject:'english', level:3, type:'mc',    q:'Which sentence is punctuated correctly?', choices:['Whats up','What\'s up.','What\'s up?','What is up'], a:'What\'s up?' },
  { subject:'english', level:3, type:'guess', q:'A figure of speech comparing two unlike things using "like" or "as".', a:'simile' },
  { subject:'english', level:3, type:'fib',   q:'The main character of a story is called the ____.', a:'protagonist' },
  { subject:'english', level:3, type:'mc',    q:'Which is a metaphor?',              choices:['as brave as a lion','time is money','fast like the wind','runs quickly'], a:'time is money' },
  { subject:'english', level:3, type:'guess', q:'Giving human qualities to non-human things.', a:'personification' },
  { subject:'english', level:3, type:'fib',   q:'A person, place, thing, or idea is called a ____.', a:'noun' },
  { subject:'english', level:3, type:'mc',    q:'Which word is a preposition?',      choices:['jump','under','she','fast'], a:'under' },

  { subject:'english', level:4, type:'mc',    q:'Who wrote "Romeo and Juliet"?',     choices:['Dickens','Shakespeare','Austen','Hemingway'], a:'Shakespeare' },
  { subject:'english', level:4, type:'guess', q:'Repetition of consonant sounds at the start of words.', a:'alliteration' },
  { subject:'english', level:4, type:'fib',   q:'A 14-line poem with a specific rhyme scheme is a ____.', a:'sonnet' },
  { subject:'english', level:4, type:'mc',    q:'The turning point of a story is the', choices:['exposition','climax','resolution','setting'], a:'climax' },
  { subject:'english', level:4, type:'guess', q:'A long narrative poem about heroic deeds.', a:'epic' },
  { subject:'english', level:4, type:'fib',   q:'"I have a dream" was famously spoken by Martin Luther King ____.', a:'Jr' },
  { subject:'english', level:4, type:'mc',    q:'Which is written in first person?', choices:['She walked home','You should try','I saw the light','They played'], a:'I saw the light' },

  { subject:'english', level:5, type:'mc',    q:'Who wrote "1984"?',                 choices:['Huxley','Orwell','Bradbury','Kafka'], a:'Orwell' },
  { subject:'english', level:5, type:'guess', q:'An extreme exaggeration used for effect.', a:'hyperbole' },
  { subject:'english', level:5, type:'fib',   q:'"To be, or not to be" is from Shakespeare\'s ____.', a:'Hamlet' },
  { subject:'english', level:5, type:'mc',    q:'Which is an example of onomatopoeia?', choices:['bright','buzz','tall','swift'], a:'buzz' },
  { subject:'english', level:5, type:'guess', q:'The attitude of the author toward the subject.', a:'tone' },
  { subject:'english', level:5, type:'fib',   q:'A word that connects clauses (e.g., and, but, or) is a ____.', a:'conjunction' },
  { subject:'english', level:5, type:'mc',    q:'"The Great Gatsby" was written by', choices:['Steinbeck','Fitzgerald','Faulkner','Twain'], a:'Fitzgerald' },

  /* =====================================================================
     HISTORY
     ===================================================================== */
  { subject:'history', level:1, type:'mc',    q:'Who was the first President of the United States?', choices:['Lincoln','Adams','Washington','Jefferson'], a:'Washington' },
  { subject:'history', level:1, type:'fib',   q:'Christopher Columbus sailed the ocean blue in ____.', a:'1492' },
  { subject:'history', level:1, type:'guess', q:'The large stone tombs built in ancient Egypt for pharaohs.', a:'pyramids' },
  { subject:'history', level:1, type:'mc',    q:'The Great Wall was built in',       choices:['India','China','Japan','Egypt'], a:'China' },
  { subject:'history', level:1, type:'fib',   q:'The country that gave the Statue of Liberty to the US is ____.', a:'France' },
  { subject:'history', level:1, type:'guess', q:'Ancient civilization known for gladiators and the Colosseum.', a:'Rome' },
  { subject:'history', level:1, type:'mc',    q:'On July 4, 1776, the US declared', choices:['war','independence','peace','statehood'], a:'independence' },

  { subject:'history', level:2, type:'mc',    q:'Who wrote the Declaration of Independence?', choices:['Washington','Jefferson','Franklin','Adams'], a:'Jefferson' },
  { subject:'history', level:2, type:'guess', q:'The world war that ended in 1945.', a:'World War II' },
  { subject:'history', level:2, type:'fib',   q:'Abraham Lincoln was the ____th US president.', a:'16' },
  { subject:'history', level:2, type:'mc',    q:'The Renaissance began in',          choices:['France','Germany','Italy','England'], a:'Italy' },
  { subject:'history', level:2, type:'guess', q:'The ship that famously sank in 1912.', a:'Titanic' },
  { subject:'history', level:2, type:'fib',   q:'Mahatma Gandhi led the independence movement of ____.', a:'India' },
  { subject:'history', level:2, type:'mc',    q:'Who painted the Mona Lisa?',        choices:['Michelangelo','Da Vinci','Raphael','Donatello'], a:'Da Vinci' },

  { subject:'history', level:3, type:'mc',    q:'The Berlin Wall fell in',           choices:['1987','1989','1991','1993'], a:'1989' },
  { subject:'history', level:3, type:'guess', q:'The period of art and learning after the Middle Ages.', a:'Renaissance' },
  { subject:'history', level:3, type:'fib',   q:'The US Civil War ended in the year ____.', a:'1865' },
  { subject:'history', level:3, type:'mc',    q:'Who was the British PM during WWII?', choices:['Attlee','Chamberlain','Churchill','Blair'], a:'Churchill' },
  { subject:'history', level:3, type:'guess', q:'The empire founded by Genghis Khan.', a:'Mongol' },
  { subject:'history', level:3, type:'fib',   q:'The Berlin Wall separated East and West ____.', a:'Germany' },
  { subject:'history', level:3, type:'mc',    q:'Which war was fought 1914-1918?',   choices:['Civil War','WWI','WWII','Cold War'], a:'WWI' },

  { subject:'history', level:4, type:'mc',    q:'The French Revolution began in',    choices:['1776','1789','1804','1815'], a:'1789' },
  { subject:'history', level:4, type:'guess', q:'The economic system Karl Marx criticized in his writings.', a:'capitalism' },
  { subject:'history', level:4, type:'fib',   q:'The Cold War ended in ____ (year).', a:'1991' },
  { subject:'history', level:4, type:'mc',    q:'Which US president issued the Emancipation Proclamation?', choices:['Grant','Lincoln','Jefferson','Jackson'], a:'Lincoln' },
  { subject:'history', level:4, type:'guess', q:'The alliance system that led to WWI included this German-led group.', a:'Central Powers' },
  { subject:'history', level:4, type:'fib',   q:'The atomic bomb was dropped on Hiroshima in ____ (year).', a:'1945' },

  { subject:'history', level:5, type:'mc',    q:'The Magna Carta was signed in',     choices:['1066','1215','1492','1607'], a:'1215' },
  { subject:'history', level:5, type:'guess', q:'The 1929 event that started the Great Depression.', a:'stock market crash' },
  { subject:'history', level:5, type:'fib',   q:'Nelson Mandela was president of ____.', a:'South Africa' },
  { subject:'history', level:5, type:'mc',    q:'The Ottoman Empire fell after',     choices:['WWI','WWII','Cold War','French Revolution'], a:'WWI' },
  { subject:'history', level:5, type:'guess', q:'The document that ended WWI and blamed Germany.', a:'Treaty of Versailles' },
  { subject:'history', level:5, type:'fib',   q:'The pharaoh whose tomb was found nearly intact in 1922 was ____.', a:'Tutankhamun' },

  /* =====================================================================
     GEOGRAPHY
     ===================================================================== */
  { subject:'geography', level:1, type:'mc',    q:'How many continents are there?',   choices:['5','6','7','8'], a:'7' },
  { subject:'geography', level:1, type:'fib',   q:'The capital of France is ____.',   a:'Paris' },
  { subject:'geography', level:1, type:'guess', q:'The largest ocean on Earth.',      a:'Pacific' },
  { subject:'geography', level:1, type:'mc',    q:'Mount Everest is in',              choices:['Andes','Alps','Himalayas','Rockies'], a:'Himalayas' },
  { subject:'geography', level:1, type:'fib',   q:'The longest river in the world is the ____.', a:'Nile' },
  { subject:'geography', level:1, type:'guess', q:'The continent Egypt is in.',       a:'Africa' },
  { subject:'geography', level:1, type:'mc',    q:'Which is a desert?',                choices:['Amazon','Sahara','Everglades','Congo'], a:'Sahara' },
  { subject:'geography', level:1, type:'fib',   q:'The capital of Japan is ____.',    a:'Tokyo' },

  { subject:'geography', level:2, type:'mc',    q:'Which country has the largest population?', choices:['USA','India','China','Russia'], a:'India' },
  { subject:'geography', level:2, type:'guess', q:'The imaginary line at 0 degrees latitude.', a:'equator' },
  { subject:'geography', level:2, type:'fib',   q:'The capital of Australia is ____.', a:'Canberra' },
  { subject:'geography', level:2, type:'mc',    q:'Which is NOT a Great Lake?',       choices:['Erie','Superior','Michigan','Tahoe'], a:'Tahoe' },
  { subject:'geography', level:2, type:'guess', q:'The country shaped like a boot.',  a:'Italy' },
  { subject:'geography', level:2, type:'fib',   q:'The Amazon River is in ____ (continent).', a:'South America' },
  { subject:'geography', level:2, type:'mc',    q:'The capital of Canada is',         choices:['Toronto','Vancouver','Ottawa','Montreal'], a:'Ottawa' },

  { subject:'geography', level:3, type:'mc',    q:'Which strait separates Europe and Africa?', choices:['Bering','Gibraltar','Bosphorus','Malacca'], a:'Gibraltar' },
  { subject:'geography', level:3, type:'guess', q:'The largest country by land area.', a:'Russia' },
  { subject:'geography', level:3, type:'fib',   q:'The capital of Egypt is ____.',    a:'Cairo' },
  { subject:'geography', level:3, type:'mc',    q:'Which river runs through Paris?',  choices:['Thames','Rhine','Seine','Danube'], a:'Seine' },
  { subject:'geography', level:3, type:'guess', q:'The mountain range along the west coast of South America.', a:'Andes' },
  { subject:'geography', level:3, type:'fib',   q:'The Sahara desert is on the continent of ____.', a:'Africa' },
  { subject:'geography', level:3, type:'mc',    q:'Which country has the most time zones?', choices:['USA','China','Russia','France'], a:'France' },

  { subject:'geography', level:4, type:'mc',    q:'The capital of Brazil is',         choices:['Rio','Sao Paulo','Brasilia','Salvador'], a:'Brasilia' },
  { subject:'geography', level:4, type:'guess', q:'The narrow waterway that separates Alaska from Russia.', a:'Bering Strait' },
  { subject:'geography', level:4, type:'fib',   q:'The tallest mountain in Africa is Mount ____.', a:'Kilimanjaro' },
  { subject:'geography', level:4, type:'mc',    q:'Which country is landlocked?',     choices:['Portugal','Switzerland','Vietnam','Chile'], a:'Switzerland' },
  { subject:'geography', level:4, type:'guess', q:'The line at 180 degrees longitude where the day changes.', a:'International Date Line' },
  { subject:'geography', level:4, type:'fib',   q:'The smallest country in the world is ____ City.', a:'Vatican' },

  { subject:'geography', level:5, type:'mc',    q:'The Ring of Fire is associated with', choices:['deserts','earthquakes','glaciers','tundras'], a:'earthquakes' },
  { subject:'geography', level:5, type:'guess', q:'The deepest ocean trench.',         a:'Mariana Trench' },
  { subject:'geography', level:5, type:'fib',   q:'The capital of Kazakhstan is ____.', a:'Astana' },
  { subject:'geography', level:5, type:'mc',    q:'Which river is the longest in Asia?', choices:['Ganges','Mekong','Yangtze','Indus'], a:'Yangtze' },
  { subject:'geography', level:5, type:'guess', q:'The imaginary lines running north-south on a map.', a:'longitude' },
  { subject:'geography', level:5, type:'fib',   q:'The capital of Iceland is ____.',   a:'Reykjavik' },
  { subject:'geography', level:5, type:'mc',    q:'Which sea is the saltiest?',        choices:['Mediterranean','Dead','Red','Caspian'], a:'Dead' },
];

/* Available subjects, in display order. 'mixed' is a synthetic option handled by the app. */
window.SUBJECTS = [
  { id:'mixed',     label:'Mixed Subjects', emoji:'star' },
  { id:'math',      label:'Math',           emoji:'plus' },
  { id:'science',   label:'Science',        emoji:'flask' },
  { id:'english',   label:'English',        emoji:'book' },
  { id:'history',   label:'History',        emoji:'scroll' },
  { id:'geography', label:'Geography',      emoji:'globe' },
];
