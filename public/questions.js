/* Question bank for the Quiz Bowl app.
   Types: 'mc' (multiple choice), 'fib' (fill in the blank), 'guess' (guess the word).
   Level scale is 1-28. Grade tag (1-12) maps as:
     L1-2 G1, L3-4 G2, L5-6 G3, L7-8 G4,
     L9-11 G5, L12-14 G6, L15-17 G7, L18-20 G8,
     L21-22 G9, L23-24 G10, L25-26 G11, L27-28 G12.
   Every question belongs to exactly one level so there is no cross-level repetition.
   Field `e` is the explanation shown when the answer is wrong. */

window.LEVEL_GRADE = {
  1:1, 2:1,
  3:2, 4:2,
  5:3, 6:3,
  7:4, 8:4,
  9:5, 10:5, 11:5,
  12:6, 13:6, 14:6,
  15:7, 16:7, 17:7,
  18:8, 19:8, 20:8,
  21:9, 22:9,
  23:10, 24:10,
  25:11, 26:11,
  27:12, 28:12,
};

window.QUESTIONS = [
  /* ============================ MATH (all 28 levels, 10 per level) ============================
     Every math explanation shows the step-by-step derivation, not just the answer. */

  /* ---- Grade 1 - Level 1 (very basic addition, counting, shapes) ---- */
  { subject:'math', grade:1, level:1, type:'mc',    q:'What is 1 + 1?', choices:['1','2','3','4'], a:'2', e:'Start with 1 apple. Add 1 more apple. Count them: "1, 2". Total = 2.' },
  { subject:'math', grade:1, level:1, type:'mc',    q:'What is 3 + 2?', choices:['4','5','6','7'], a:'5', e:'Start at 3. Count 2 more numbers: 3 -> 4 -> 5. So 3 + 2 = 5.' },
  { subject:'math', grade:1, level:1, type:'mc',    q:'How many fingers on one hand?', choices:['3','4','5','6'], a:'5', e:'Count each finger: thumb (1), index (2), middle (3), ring (4), pinky (5). One hand has 5 fingers.' },
  { subject:'math', grade:1, level:1, type:'mc',    q:'What comes after 4?', choices:['3','5','6','7'], a:'5', e:'Numbers in order: 1, 2, 3, 4, 5, 6... The next number after 4 is 5.' },
  { subject:'math', grade:1, level:1, type:'mc',    q:'Which is bigger: 3 or 7?', choices:['3','7','same','none'], a:'7', e:'On a number line, 7 is further to the right than 3, so 7 is bigger. 7 > 3.' },
  { subject:'math', grade:1, level:1, type:'fib',   q:'2 + 2 = ____.', a:'4', e:'2 + 2: take 2 fingers on one hand, 2 on the other, count all together = 4.' },
  { subject:'math', grade:1, level:1, type:'fib',   q:'The number just before 6 is ____.', a:'5', e:'Counting: 4, 5, 6. The number right before 6 is 5.' },
  { subject:'math', grade:1, level:1, type:'guess', q:'A round shape like a ball.', a:'circle', e:'A circle has no corners and looks like a wheel or a ball outline. Cars have circle wheels.' },
  { subject:'math', grade:1, level:1, type:'guess', q:'A shape with 3 sides.', a:'triangle', e:'"Tri" means three. A triangle has 3 sides and 3 corners, like a slice of pizza.' },
  { subject:'math', grade:1, level:1, type:'guess', q:'The word for adding numbers.', a:'plus', e:'The + sign is called "plus". "3 plus 2" means 3 + 2. Adding gives a total.' },

  /* ---- Grade 1 - Level 2 ---- */
  { subject:'math', grade:1, level:2, type:'mc',    q:'What is 8 + 2?', choices:['9','10','11','12'], a:'10', e:'Start at 8. Add 2: 8 + 1 = 9, then 9 + 1 = 10. Or: 8 needs 2 more to reach 10.' },
  { subject:'math', grade:1, level:2, type:'mc',    q:'What is 7 - 3?', choices:['3','4','5','6'], a:'4', e:'Start at 7. Subtract 3 by counting back: 7 -> 6 -> 5 -> 4. So 7 - 3 = 4.' },
  { subject:'math', grade:1, level:2, type:'mc',    q:'Which is smaller: 8 or 5?', choices:['8','5','same','none'], a:'5', e:'On the number line, 5 comes before 8, so 5 is smaller. 5 < 8.' },
  { subject:'math', grade:1, level:2, type:'mc',    q:'How many days in a week?', choices:['5','6','7','8'], a:'7', e:'Count: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday = 7 days.' },
  { subject:'math', grade:1, level:2, type:'mc',    q:'5 + 4 = ?', choices:['8','9','10','11'], a:'9', e:'Start at 5. Add 4 by counting up: 5 -> 6 -> 7 -> 8 -> 9. So 5 + 4 = 9.' },
  { subject:'math', grade:1, level:2, type:'fib',   q:'The number before 10 is ____.', a:'9', e:'Counting up: 7, 8, 9, 10. The number just before 10 is 9.' },
  { subject:'math', grade:1, level:2, type:'fib',   q:'1 + 1 + 1 + 1 = ____.', a:'4', e:'Four 1s added together: 1 + 1 = 2, 2 + 1 = 3, 3 + 1 = 4. Total is 4.' },
  { subject:'math', grade:1, level:2, type:'fib',   q:'Count by 2s: 2, 4, ____, 8.', a:'6', e:'Skip counting by 2: start 2, add 2 = 4, add 2 = 6, add 2 = 8. The missing number is 6.' },
  { subject:'math', grade:1, level:2, type:'guess', q:'A shape with 4 equal sides.', a:'square', e:'A square has 4 sides all the same length and 4 right-angle corners. Like a dice face.' },
  { subject:'math', grade:1, level:2, type:'guess', q:'The word for taking away.', a:'minus', e:'The - sign is called "minus" or "subtract". "5 minus 2" means 5 - 2 = 3.' },

  /* ---- Grade 2 - Level 3 ---- */
  { subject:'math', grade:2, level:3, type:'mc',    q:'What is 9 + 4?', choices:['11','12','13','14'], a:'13', e:'Break it up: 9 + 1 = 10, leaving 3 more to add. 10 + 3 = 13. So 9 + 4 = 13.' },
  { subject:'math', grade:2, level:3, type:'mc',    q:'What is 15 - 7?', choices:['6','7','8','9'], a:'8', e:'15 - 5 = 10, then 10 - 2 = 8 (since 7 = 5 + 2). Or count back: 15,14,13,12,11,10,9,8.' },
  { subject:'math', grade:2, level:3, type:'mc',    q:'Which number is even?', choices:['3','5','7','8'], a:'8', e:'Even numbers can be split into two equal groups. 8 = 4 + 4, so it is even. Even numbers end in 0, 2, 4, 6, or 8.' },
  { subject:'math', grade:2, level:3, type:'mc',    q:'What is 10 + 10?', choices:['15','20','25','100'], a:'20', e:'Two tens make twenty. 10 + 10 = 20. Think of two hands of 10 fingers each = 20 fingers.' },
  { subject:'math', grade:2, level:3, type:'mc',    q:'The tens digit in 47 is', choices:['4','7','40','74'], a:'4', e:'In 47, the digit 4 is in the tens place (means 40) and the digit 7 is in the ones place (means 7). So the tens digit is 4.' },
  { subject:'math', grade:2, level:3, type:'fib',   q:'The number after 19 is ____.', a:'20', e:'Counting up: 17, 18, 19, 20. Twenty (20) comes right after 19.' },
  { subject:'math', grade:2, level:3, type:'fib',   q:'6 + 6 = ____.', a:'12', e:'Doubling 6: 6 + 6 = 12. Or use fingers on both hands: 5+5 = 10, plus 1+1 = 2, total 12.' },
  { subject:'math', grade:2, level:3, type:'fib',   q:'20 - 10 = ____.', a:'10', e:'Two tens minus one ten leaves one ten. 20 - 10 = 10.' },
  { subject:'math', grade:2, level:3, type:'guess', q:'The result of adding.', a:'sum', e:'Addition gives a sum. In 4 + 3 = 7, the number 7 is the sum. Subtraction gives a "difference".' },
  { subject:'math', grade:2, level:3, type:'guess', q:'A shape like a stop sign, with 8 sides.', a:'octagon', e:'"Oct" means 8, like an octopus with 8 arms. Stop signs are octagons with 8 equal sides.' },

  /* ---- Grade 2 - Level 4 ---- */
  { subject:'math', grade:2, level:4, type:'mc',    q:'What is 20 - 8?', choices:['10','11','12','13'], a:'12', e:'20 - 8: subtract 10 first = 10, but we took 2 too many, so add them back: 10 + 2 = 12. Or count back 8 from 20.' },
  { subject:'math', grade:2, level:4, type:'mc',    q:'25 + 15 = ?', choices:['30','35','40','45'], a:'40', e:'Add tens: 20 + 10 = 30. Add ones: 5 + 5 = 10. Total: 30 + 10 = 40.' },
  { subject:'math', grade:2, level:4, type:'mc',    q:'Which is odd?', choices:['2','4','7','10'], a:'7', e:'Odd numbers cannot be split into two equal groups. 7 = 3 + 4 (unequal). Odd numbers end in 1, 3, 5, 7, or 9.' },
  { subject:'math', grade:2, level:4, type:'mc',    q:'How many minutes in an hour?', choices:['30','45','60','100'], a:'60', e:'One hour is divided into 60 minutes. A clock face has 60 minute marks arranged around 12 numbered hours.' },
  { subject:'math', grade:2, level:4, type:'mc',    q:'What is 3 x 2?', choices:['5','6','7','8'], a:'6', e:'3 groups of 2: 2 + 2 + 2 = 6. Multiplication is repeated addition. So 3 x 2 = 6.' },
  { subject:'math', grade:2, level:4, type:'fib',   q:'10 tens = ____.', a:'100', e:'10 groups of 10 = 100. Think 10 + 10 + 10... ten times, or 10 x 10 = 100.' },
  { subject:'math', grade:2, level:4, type:'fib',   q:'Skip count by 5s: 5, 10, 15, ____.', a:'20', e:'Each step adds 5. After 15, add 5 more = 20. Pattern: 5, 10, 15, 20, 25...' },
  { subject:'math', grade:2, level:4, type:'fib',   q:'A pair means ____ things.', a:'2', e:'A pair is 2 of something (a pair of shoes, a pair of eyes). Also called a couple.' },
  { subject:'math', grade:2, level:4, type:'guess', q:'A shape with 3 sides.', a:'triangle', e:'Triangle: "tri" means three. Has 3 sides, 3 corners, and 3 angles that always add to 180 degrees.' },
  { subject:'math', grade:2, level:4, type:'guess', q:'The symbol for "equal to".', a:'equals', e:'The = sign means "equals" or "is the same as". Example: 2 + 3 = 5 means "2 plus 3 equals 5".' },

  /* ---- Grade 3 - Level 5 ---- */
  { subject:'math', grade:3, level:5, type:'mc',    q:'What is 6 x 4?', choices:['18','22','24','28'], a:'24', e:'6 groups of 4: 4 + 4 + 4 + 4 + 4 + 4 = 24. Or 6 x 4 = (5 x 4) + 4 = 20 + 4 = 24.' },
  { subject:'math', grade:3, level:5, type:'mc',    q:'12 divided by 3 = ?', choices:['3','4','5','6'], a:'4', e:'Split 12 into 3 equal groups: 12 / 3 = 4 (each group has 4). Check: 3 x 4 = 12.' },
  { subject:'math', grade:3, level:5, type:'mc',    q:'Half of 20 is', choices:['5','10','12','15'], a:'10', e:'Half means split into 2 equal parts. 20 / 2 = 10. Two halves of 10 make 20.' },
  { subject:'math', grade:3, level:5, type:'mc',    q:'5 x 5 = ?', choices:['10','15','20','25'], a:'25', e:'Five groups of 5: 5 + 5 + 5 + 5 + 5 = 25. This is 5 squared, written 5^2 = 25.' },
  { subject:'math', grade:3, level:5, type:'mc',    q:'How many sides does a hexagon have?', choices:['4','5','6','7'], a:'6', e:'"Hex" means six. A hexagon has 6 sides. Honeycombs are made of hexagons.' },
  { subject:'math', grade:3, level:5, type:'fib',   q:'1/2 of 10 is ____.', a:'5', e:'Half of 10 means divide 10 by 2: 10 / 2 = 5. Two groups of 5 make 10.' },
  { subject:'math', grade:3, level:5, type:'fib',   q:'The pattern 3, 6, 9, 12, ____ next is.', a:'15', e:'Each term goes up by 3 (multiples of 3). After 12, add 3 more: 12 + 3 = 15.' },
  { subject:'math', grade:3, level:5, type:'fib',   q:'2 x 9 = ____.', a:'18', e:'Two 9s: 9 + 9 = 18. Or think 2 x 10 = 20, minus 2 = 18.' },
  { subject:'math', grade:3, level:5, type:'guess', q:'The answer to a multiplication problem.', a:'product', e:'Multiplication gives a "product". In 4 x 5 = 20, the number 20 is the product.' },
  { subject:'math', grade:3, level:5, type:'guess', q:'The line between the top and bottom of a fraction.', a:'fraction bar', e:'The horizontal line in a fraction separates the numerator (top) from the denominator (bottom). Also called a vinculum.' },

  /* ---- Grade 3 - Level 6 ---- */
  { subject:'math', grade:3, level:6, type:'mc',    q:'What is 100 - 45?', choices:['45','55','65','75'], a:'55', e:'100 - 40 = 60. Then 60 - 5 = 55. So 100 - 45 = 55.' },
  { subject:'math', grade:3, level:6, type:'mc',    q:'Which is bigger: 1/2 or 1/4?', choices:['1/2','1/4','same','cannot say'], a:'1/2', e:'1/2 is one part of two equal pieces. 1/4 is one part of four equal pieces (smaller pieces). So 1/2 > 1/4.' },
  { subject:'math', grade:3, level:6, type:'mc',    q:'7 x 8 = ?', choices:['48','54','56','63'], a:'56', e:'Times table for 7: ...49, 56, 63... Or 7 x 8 = 7 x (10 - 2) = 70 - 14 = 56.' },
  { subject:'math', grade:3, level:6, type:'mc',    q:'36 / 6 = ?', choices:['4','5','6','7'], a:'6', e:'Ask: 6 times what equals 36? 6 x 6 = 36, so 36 / 6 = 6.' },
  { subject:'math', grade:3, level:6, type:'mc',    q:'Perimeter of a triangle with sides 4, 5, 6?', choices:['12','14','15','20'], a:'15', e:'Perimeter = sum of all sides. 4 + 5 + 6 = 15.' },
  { subject:'math', grade:3, level:6, type:'fib',   q:'A right angle has ____ degrees.', a:'90', e:'A right angle looks like the corner of a book or a wall. It measures exactly 90 degrees.' },
  { subject:'math', grade:3, level:6, type:'fib',   q:'A quarter of 20 is ____.', a:'5', e:'A quarter means 1/4. Divide 20 into 4 equal parts: 20 / 4 = 5.' },
  { subject:'math', grade:3, level:6, type:'fib',   q:'The number of sides in a pentagon is ____.', a:'5', e:'"Penta" means five. A pentagon has 5 sides. The US Pentagon building has 5 walls.' },
  { subject:'math', grade:3, level:6, type:'guess', q:'The result of dividing.', a:'quotient', e:'Division gives a "quotient". In 12 / 4 = 3, the number 3 is the quotient.' },
  { subject:'math', grade:3, level:6, type:'guess', q:'The bottom number in a fraction.', a:'denominator', e:'In 3/4, the 4 is the denominator (bottom, tells how many equal parts total). The 3 on top is the numerator.' },

  /* ---- Grade 4 - Level 7 ---- */
  { subject:'math', grade:4, level:7, type:'mc',    q:'What is 8 x 7?', choices:['48','54','56','64'], a:'56', e:'8 x 7 = (8 x 5) + (8 x 2) = 40 + 16 = 56. Or memorize: 7 x 8 = 56.' },
  { subject:'math', grade:4, level:7, type:'mc',    q:'What is 125 + 275?', choices:['300','375','400','425'], a:'400', e:'125 + 275: add ones 5 + 5 = 10 (write 0, carry 1), tens 2+7+1 = 10 (write 0, carry 1), hundreds 1+2+1 = 4. Result: 400.' },
  { subject:'math', grade:4, level:7, type:'mc',    q:'Area of a rectangle 5 by 6?', choices:['11','20','25','30'], a:'30', e:'Area of a rectangle = length x width. 5 x 6 = 30 square units.' },
  { subject:'math', grade:4, level:7, type:'mc',    q:'42 / 7 = ?', choices:['5','6','7','8'], a:'6', e:'Ask: 7 times what = 42? 7 x 6 = 42, so 42 / 7 = 6.' },
  { subject:'math', grade:4, level:7, type:'mc',    q:'Which number is prime?', choices:['4','9','11','15'], a:'11', e:'A prime has only 1 and itself as factors. 4=2x2, 9=3x3, 15=3x5. But 11 only divides by 1 and 11, so 11 is prime.' },
  { subject:'math', grade:4, level:7, type:'fib',   q:'The perimeter of a square with side 4 is ____.', a:'16', e:'Perimeter of a square = 4 x side. 4 x 4 = 16. All four sides together.' },
  { subject:'math', grade:4, level:7, type:'fib',   q:'Round 47 to the nearest 10 = ____.', a:'50', e:'47 is between 40 and 50. Since 7 is 5 or more, we round UP to 50.' },
  { subject:'math', grade:4, level:7, type:'fib',   q:'The number of hours in a day is ____.', a:'24', e:'A day has 24 hours. 12 hours daytime (roughly) + 12 hours night = 24 total.' },
  { subject:'math', grade:4, level:7, type:'guess', q:'A number that can be divided by 2 evenly.', a:'even', e:'Even numbers divide by 2 with no remainder. Examples: 2, 4, 6, 8, 10... They end in 0, 2, 4, 6, or 8.' },
  { subject:'math', grade:4, level:7, type:'guess', q:'A polygon with all sides and angles equal.', a:'regular', e:'A regular polygon has all sides the same length AND all angles equal. Regular triangle = equilateral. Regular quadrilateral = square.' },

  /* ---- Grade 4 - Level 8 ---- */
  { subject:'math', grade:4, level:8, type:'mc',    q:'Which is greater: 0.5 or 0.05?', choices:['0.5','0.05','same','cannot tell'], a:'0.5', e:'0.5 = 5/10 = 50/100. 0.05 = 5/100. 50/100 > 5/100, so 0.5 > 0.05.' },
  { subject:'math', grade:4, level:8, type:'mc',    q:'What is 2.5 + 1.7?', choices:['3.2','3.7','4.2','4.7'], a:'4.2', e:'Line up decimals: 2.5 + 1.7. Add tenths: 5 + 7 = 12 (write 2, carry 1). Add ones: 2 + 1 + 1 = 4. Result: 4.2.' },
  { subject:'math', grade:4, level:8, type:'mc',    q:'2/3 + 1/3 = ?', choices:['1/3','2/6','1','3/6'], a:'1', e:'Same denominator, so add numerators: 2 + 1 = 3. Answer: 3/3 = 1.' },
  { subject:'math', grade:4, level:8, type:'mc',    q:'Area of a square with side 7?', choices:['14','28','49','56'], a:'49', e:'Area of a square = side x side = side^2. 7 x 7 = 49 square units.' },
  { subject:'math', grade:4, level:8, type:'mc',    q:'12 x 11 = ?', choices:['121','122','132','142'], a:'132', e:'12 x 11 = 12 x 10 + 12 x 1 = 120 + 12 = 132.' },
  { subject:'math', grade:4, level:8, type:'fib',   q:'3/4 as a decimal is ____.', a:'0.75', e:'3/4: divide 3 by 4. 3.00 / 4 = 0.75. Check: 0.75 x 4 = 3.' },
  { subject:'math', grade:4, level:8, type:'fib',   q:'The number of degrees in a full turn is ____.', a:'360', e:'A full circle contains 360 degrees. Half turn = 180 deg. Quarter turn (right angle) = 90 deg.' },
  { subject:'math', grade:4, level:8, type:'fib',   q:'The smallest 3-digit number is ____.', a:'100', e:'3-digit numbers range from 100 to 999. The smallest is 100 (one hundred).' },
  { subject:'math', grade:4, level:8, type:'guess', q:'A closed shape with 4 sides.', a:'quadrilateral', e:'"Quad" means four. Quadrilaterals include squares, rectangles, rhombuses, parallelograms, and trapezoids.' },
  { subject:'math', grade:4, level:8, type:'guess', q:'The top number in a fraction.', a:'numerator', e:'In 3/4, the 3 is the numerator (tells how many parts we have). The 4 is the denominator (parts in the whole).' },

  /* ---- Grade 5 - Level 9 ---- */
  { subject:'math', grade:5, level:9, type:'mc',    q:'What is 7 x 8?', choices:['54','56','58','64'], a:'56', e:'7 x 8 method: (5 x 8) + (2 x 8) = 40 + 16 = 56. Or 7 x 8 = 7 x (10-2) = 70 - 14 = 56.' },
  { subject:'math', grade:5, level:9, type:'mc',    q:'144 / 12 = ?', choices:['10','11','12','14'], a:'12', e:'Ask: 12 times what = 144? Try 12 x 12: (10 x 12) + (2 x 12) = 120 + 24 = 144. So 144 / 12 = 12.' },
  { subject:'math', grade:5, level:9, type:'mc',    q:'Which is prime?', choices:['9','15','17','21'], a:'17', e:'Check each: 9 = 3 x 3, 15 = 3 x 5, 21 = 3 x 7. 17 has no factors besides 1 and itself, so 17 is prime.' },
  { subject:'math', grade:5, level:9, type:'mc',    q:'Order of operations: 2 + 3 x 4 = ?', choices:['14','20','5+12','24'], a:'14', e:'PEMDAS: multiply before add. 3 x 4 = 12 first. Then 2 + 12 = 14.' },
  { subject:'math', grade:5, level:9, type:'mc',    q:'12 + 24 + 36 + 48 = ?', choices:['110','120','130','140'], a:'120', e:'Pair up smart: (12 + 48) + (24 + 36) = 60 + 60 = 120.' },
  { subject:'math', grade:5, level:9, type:'fib',   q:'The perimeter of a square with side 5 is ____.', a:'20', e:'Perimeter of a square = 4 x side. 4 x 5 = 20 units.' },
  { subject:'math', grade:5, level:9, type:'fib',   q:'25 x 4 = ____.', a:'100', e:'25 x 4 = (25 x 2) x 2 = 50 x 2 = 100. Or think: four quarters make a dollar (100 cents).' },
  { subject:'math', grade:5, level:9, type:'fib',   q:'The GCF of 12 and 18 is ____.', a:'6', e:'Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. Common ones: 1,2,3,6. Greatest = 6.' },
  { subject:'math', grade:5, level:9, type:'guess', q:'A shape with three sides.', a:'triangle', e:'Triangle: "tri" = three. 3 sides + 3 angles that sum to 180 degrees. Basic types: equilateral, isosceles, scalene.' },
  { subject:'math', grade:5, level:9, type:'guess', q:'The result of subtraction.', a:'difference', e:'Subtraction produces a "difference". In 12 - 5 = 7, the number 7 is the difference between 12 and 5.' },

  /* ---- Grade 5 - Level 10 ---- */
  { subject:'math', grade:5, level:10, type:'mc',    q:'1/2 + 1/4 = ?', choices:['1/3','2/6','2/4','3/4'], a:'3/4', e:'Rewrite with a common denominator of 4: 1/2 = 2/4. Then 2/4 + 1/4 = 3/4.' },
  { subject:'math', grade:5, level:10, type:'mc',    q:'Which fraction is largest?', choices:['1/2','2/5','3/8','1/3'], a:'1/2', e:'Convert to decimals: 1/2 = 0.500, 2/5 = 0.400, 3/8 = 0.375, 1/3 = 0.333. Largest is 0.500 = 1/2.' },
  { subject:'math', grade:5, level:10, type:'mc',    q:'0.6 - 0.35 = ?', choices:['0.15','0.25','0.35','0.55'], a:'0.25', e:'Line up: 0.60 - 0.35. Subtract hundredths (0-5 borrow, becomes 10-5=5). Tenths: 5-3=2. Result: 0.25.' },
  { subject:'math', grade:5, level:10, type:'mc',    q:'LCM of 4 and 6 = ?', choices:['10','12','18','24'], a:'12', e:'Multiples of 4: 4,8,12,16... Multiples of 6: 6,12,18... First one they share = 12.' },
  { subject:'math', grade:5, level:10, type:'mc',    q:'Which fraction equals 1/2?', choices:['3/4','5/10','2/6','4/12'], a:'5/10', e:'Simplify each: 3/4 stays, 5/10 = 1/2, 2/6 = 1/3, 4/12 = 1/3. Only 5/10 equals 1/2.' },
  { subject:'math', grade:5, level:10, type:'fib',   q:'The area of a rectangle 8 x 6 is ____.', a:'48', e:'Area of a rectangle = length x width = 8 x 6 = 48 square units.' },
  { subject:'math', grade:5, level:10, type:'fib',   q:'Round 3.478 to 1 decimal place: ____.', a:'3.5', e:'Look at the hundredths digit (7). Since 7 >= 5, round the tenths up: 3.4 becomes 3.5.' },
  { subject:'math', grade:5, level:10, type:'fib',   q:'A mixed number 2 3/4 as an improper fraction = ____/4.', a:'11', e:'Multiply whole by denominator: 2 x 4 = 8. Add numerator: 8 + 3 = 11. So 2 3/4 = 11/4.' },
  { subject:'math', grade:5, level:10, type:'guess', q:'A polygon with eight sides.', a:'octagon', e:'"Octa" means eight (like octopus with 8 arms). Octagon has 8 sides. Stop signs are octagons.' },
  { subject:'math', grade:5, level:10, type:'guess', q:'A number divisible by two.', a:'even', e:'Even numbers divide by 2 with no remainder. They end in 0, 2, 4, 6, or 8. Odd numbers end in 1, 3, 5, 7, or 9.' },

  /* ---- Grade 5 - Level 11 ---- */
  { subject:'math', grade:5, level:11, type:'mc',    q:'A book costs $8.50. What is the change from $20?', choices:['$10.50','$11.50','$12.50','$8.50'], a:'$11.50', e:'Subtract: $20.00 - $8.50 = $11.50. Method: 20 - 8 = 12, then 12 - 0.50 = 11.50.' },
  { subject:'math', grade:5, level:11, type:'mc',    q:'6 x (4 + 2) = ?', choices:['24','28','32','36'], a:'36', e:'Parentheses first: (4 + 2) = 6. Then 6 x 6 = 36. PEMDAS says do parentheses before multiplication.' },
  { subject:'math', grade:5, level:11, type:'mc',    q:'0.25 x 8 = ?', choices:['1.5','2','2.5','20'], a:'2', e:'0.25 = 1/4. 1/4 x 8 = 8/4 = 2. Or: 0.25 x 8 = 25 x 8 / 100 = 200/100 = 2.' },
  { subject:'math', grade:5, level:11, type:'mc',    q:'3/5 as a decimal = ?', choices:['0.35','0.53','0.6','0.65'], a:'0.6', e:'Divide 3 by 5: 3.0 / 5 = 0.6. Check: 0.6 x 5 = 3. Also 3/5 = 6/10 = 0.6.' },
  { subject:'math', grade:5, level:11, type:'mc',    q:'20 is what fraction of 100?', choices:['1/2','1/5','1/10','1/20'], a:'1/5', e:'20/100 simplifies: divide top and bottom by 20. 20/100 = 1/5.' },
  { subject:'math', grade:5, level:11, type:'fib',   q:'The mean of 4, 8, 12, 16 is ____.', a:'10', e:'Mean = sum / count. Sum: 4+8+12+16 = 40. Count = 4. Mean = 40/4 = 10.' },
  { subject:'math', grade:5, level:11, type:'fib',   q:'Convert 1.75 to a fraction (in simplest form): 1 and ____/4.', a:'3', e:'0.75 = 75/100 = 3/4 (divide top and bottom by 25). So 1.75 = 1 3/4.' },
  { subject:'math', grade:5, level:11, type:'fib',   q:'The volume of a cube with side 3 is ____.', a:'27', e:'Volume of a cube = side^3 = side x side x side. 3 x 3 x 3 = 9 x 3 = 27 cubic units.' },
  { subject:'math', grade:5, level:11, type:'guess', q:'The distance around a shape.', a:'perimeter', e:'Perimeter is the total distance around the outside of any 2D shape. Sum of all side lengths.' },
  { subject:'math', grade:5, level:11, type:'guess', q:'The middle value in an ordered list.', a:'median', e:'Median is the middle number after sorting. For 3, 5, 7, 9, 11 the median is 7. If even count, average the two middle values.' },

  /* ---- Grade 6 - Level 12 ---- */
  { subject:'math', grade:6, level:12, type:'mc',    q:'15% of 200 = ?', choices:['20','25','30','35'], a:'30', e:'15% = 0.15. So 0.15 x 200 = 30. Alt: 10% of 200 = 20, and 5% = 10, so 15% = 20+10 = 30.' },
  { subject:'math', grade:6, level:12, type:'mc',    q:'A ratio of 3:2 with 20 total means the smaller share is', choices:['4','6','8','10'], a:'8', e:'Total parts = 3+2 = 5. Each part = 20/5 = 4. Smaller share = 2 x 4 = 8. Larger = 3 x 4 = 12. Check: 8+12=20.' },
  { subject:'math', grade:6, level:12, type:'mc',    q:'25% off a $60 shirt costs', choices:['$15','$40','$45','$50'], a:'$45', e:'Discount = 25% of 60 = 0.25 x 60 = $15. Sale price = 60 - 15 = $45. Or price = 75% x 60 = $45.' },
  { subject:'math', grade:6, level:12, type:'mc',    q:'Solve for x: 3x = 21', choices:['3','6','7','9'], a:'7', e:'Divide both sides by 3: 3x/3 = 21/3, so x = 7. Check: 3 x 7 = 21.' },
  { subject:'math', grade:6, level:12, type:'mc',    q:'0.4 as a percent = ?', choices:['0.4%','4%','40%','400%'], a:'40%', e:'To convert decimal to percent, multiply by 100 (or move decimal 2 places right). 0.4 x 100 = 40%.' },
  { subject:'math', grade:6, level:12, type:'fib',   q:'The square root of 81 is ____.', a:'9', e:'sqrt(81) asks: what number times itself = 81? 9 x 9 = 81. So sqrt(81) = 9.' },
  { subject:'math', grade:6, level:12, type:'fib',   q:'50% of 60 = ____.', a:'30', e:'50% = 1/2. Half of 60 = 30. Or 0.5 x 60 = 30.' },
  { subject:'math', grade:6, level:12, type:'fib',   q:'If 4 apples cost $2, then 10 apples cost $____.', a:'5', e:'Cost per apple: 2 / 4 = $0.50. So 10 x $0.50 = $5. Or use ratio: 4:2 = 10:? -> ? = 10x2/4 = 5.' },
  { subject:'math', grade:6, level:12, type:'guess', q:'A number that has factors other than 1 and itself.', a:'composite', e:'A composite number has more than 2 factors. Example: 12 (factors: 1,2,3,4,6,12). Opposite of prime.' },
  { subject:'math', grade:6, level:12, type:'guess', q:'The distance around a circle.', a:'circumference', e:'The perimeter of a circle is called the circumference. Formula: C = 2 x pi x r, where r is the radius.' },

  /* ---- Grade 6 - Level 13 ---- */
  { subject:'math', grade:6, level:13, type:'mc',    q:'2^5 = ?', choices:['10','16','25','32'], a:'32', e:'2^5 = 2 x 2 x 2 x 2 x 2. Compute step by step: 2x2=4, 4x2=8, 8x2=16, 16x2=32.' },
  { subject:'math', grade:6, level:13, type:'mc',    q:'Area of a triangle with base 6 and height 4?', choices:['10','12','20','24'], a:'12', e:'Area of triangle = (base x height) / 2. So (6 x 4) / 2 = 24 / 2 = 12 square units.' },
  { subject:'math', grade:6, level:13, type:'mc',    q:'Volume of a rectangular box 3 x 4 x 5?', choices:['12','20','35','60'], a:'60', e:'Volume of a box = length x width x height = 3 x 4 x 5 = 12 x 5 = 60 cubic units.' },
  { subject:'math', grade:6, level:13, type:'mc',    q:'The number 3.14159... is', choices:['e','pi','phi','tau'], a:'pi', e:'Pi (~3.14159) is the ratio of a circle\'s circumference to its diameter. Same for every circle.' },
  { subject:'math', grade:6, level:13, type:'mc',    q:'Which is irrational?', choices:['0.5','1/3','pi','7'], a:'pi', e:'Irrational numbers cannot be written as fractions p/q. Their decimals never terminate or repeat. Pi = 3.14159... goes forever without pattern.' },
  { subject:'math', grade:6, level:13, type:'fib',   q:'sqrt(64) = ____.', a:'8', e:'sqrt(64): what times itself = 64? 8 x 8 = 64. So sqrt(64) = 8.' },
  { subject:'math', grade:6, level:13, type:'fib',   q:'3^3 = ____.', a:'27', e:'3 cubed = 3 x 3 x 3. First 3 x 3 = 9, then 9 x 3 = 27.' },
  { subject:'math', grade:6, level:13, type:'fib',   q:'The circumference of a circle with diameter 10 (use pi = 3.14) is about ____.', a:'31.4', e:'Circumference = pi x diameter. 3.14 x 10 = 31.4 units.' },
  { subject:'math', grade:6, level:13, type:'guess', q:'A polygon with all sides equal.', a:'regular', e:'A regular polygon has all sides AND all angles equal. Equilateral triangle and square are examples.' },
  { subject:'math', grade:6, level:13, type:'guess', q:'The 3D shape of a soccer ball (approximately).', a:'sphere', e:'A sphere is a perfectly round 3D shape where every point on the surface is the same distance from the center.' },

  /* ---- Grade 6 - Level 14 ---- */
  { subject:'math', grade:6, level:14, type:'mc',    q:'The point (3, -2) is in which quadrant?', choices:['I','II','III','IV'], a:'IV', e:'On a coordinate plane, positive x with negative y = Quadrant IV (lower right). Quadrants: I (+,+), II (-,+), III (-,-), IV (+,-).' },
  { subject:'math', grade:6, level:14, type:'mc',    q:'-5 + 3 = ?', choices:['-8','-2','2','8'], a:'-2', e:'Start at -5. Add 3 (move right on number line): -5 -> -4 -> -3 -> -2. So -5 + 3 = -2.' },
  { subject:'math', grade:6, level:14, type:'mc',    q:'The product of a negative and a negative is', choices:['negative','positive','zero','same'], a:'positive', e:'Rules of signs: (-) x (-) = (+). Example: (-3) x (-4) = 12. (+) x (+) = (+). (+) x (-) = (-).' },
  { subject:'math', grade:6, level:14, type:'mc',    q:'The reciprocal of 3/4 is', choices:['4/3','1/3','3/4','-3/4'], a:'4/3', e:'Reciprocal means flip the fraction: 3/4 becomes 4/3. Any number times its reciprocal = 1. Check: 3/4 x 4/3 = 12/12 = 1.' },
  { subject:'math', grade:6, level:14, type:'mc',    q:'Simplify: 4 - (-6)', choices:['-10','-2','2','10'], a:'10', e:'Subtracting a negative = adding a positive. 4 - (-6) = 4 + 6 = 10.' },
  { subject:'math', grade:6, level:14, type:'fib',   q:'|-9| = ____.', a:'9', e:'Absolute value gives distance from 0, always non-negative. |-9| = 9. |9| = 9 too.' },
  { subject:'math', grade:6, level:14, type:'fib',   q:'The x-coordinate of the origin is ____.', a:'0', e:'The origin (0, 0) is where both axes cross. Its x is 0 and its y is 0.' },
  { subject:'math', grade:6, level:14, type:'fib',   q:'The mean of 4, 8, 12, 16, 20 is ____.', a:'12', e:'Mean = sum / count. 4+8+12+16+20 = 60. Count = 5. Mean = 60/5 = 12.' },
  { subject:'math', grade:6, level:14, type:'guess', q:'A polygon with exactly one pair of parallel sides.', a:'trapezoid', e:'Trapezoid = quadrilateral with exactly one pair of parallel sides. Parallelogram has two pairs.' },
  { subject:'math', grade:6, level:14, type:'guess', q:'Numbers less than zero.', a:'negative', e:'Negative numbers sit to the left of 0 on the number line. Written with a minus sign, like -3, -7.5, -100.' },

  /* ---- Grade 7 - Level 15 ---- */
  { subject:'math', grade:7, level:15, type:'mc',    q:'Solve: x + 7 = 12', choices:['3','4','5','19'], a:'5', e:'Subtract 7 from both sides. x + 7 - 7 = 12 - 7. So x = 5. Check: 5 + 7 = 12.' },
  { subject:'math', grade:7, level:15, type:'mc',    q:'Solve: 2x + 3 = 15', choices:['5','6','7','8'], a:'6', e:'Step 1: subtract 3 from both sides. 2x = 12. Step 2: divide by 2. x = 6. Check: 2(6)+3 = 15.' },
  { subject:'math', grade:7, level:15, type:'mc',    q:'Which is a right triangle side set?', choices:['2,3,4','3,4,5','4,5,6','5,6,7'], a:'3,4,5', e:'Check Pythagorean: a^2+b^2=c^2. 3^2+4^2 = 9+16 = 25 = 5^2. Only 3-4-5 works. Others fail.' },
  { subject:'math', grade:7, level:15, type:'mc',    q:'Solve: x/4 = 6', choices:['2','10','20','24'], a:'24', e:'Multiply both sides by 4: (x/4) x 4 = 6 x 4. So x = 24. Check: 24/4 = 6.' },
  { subject:'math', grade:7, level:15, type:'mc',    q:'A triangle has angles 40 and 60. Third angle?', choices:['70','80','90','100'], a:'80', e:'Angles of any triangle sum to 180. So third angle = 180 - 40 - 60 = 80 degrees.' },
  { subject:'math', grade:7, level:15, type:'fib',   q:'The hypotenuse of a right triangle with legs 3 and 4 is ____.', a:'5', e:'Pythagorean theorem: c^2 = a^2 + b^2 = 3^2 + 4^2 = 9 + 16 = 25. So c = sqrt(25) = 5.' },
  { subject:'math', grade:7, level:15, type:'fib',   q:'3(x + 4) expanded is 3x + ____.', a:'12', e:'Distribute: 3 x (x + 4) = 3 x x + 3 x 4 = 3x + 12.' },
  { subject:'math', grade:7, level:15, type:'fib',   q:'Solve: x - 8 = -3, x = ____.', a:'5', e:'Add 8 to both sides: x - 8 + 8 = -3 + 8. So x = 5. Check: 5 - 8 = -3.' },
  { subject:'math', grade:7, level:15, type:'guess', q:'The Greek letter used for the circle ratio.', a:'pi', e:'Pi (about 3.14159) is the ratio of a circle\'s circumference to its diameter. Written with the symbol pi.' },
  { subject:'math', grade:7, level:15, type:'guess', q:'The value of a letter that makes an equation true.', a:'solution', e:'A solution (or root) is the value of the variable that makes both sides of the equation equal.' },

  /* ---- Grade 7 - Level 16 ---- */
  { subject:'math', grade:7, level:16, type:'mc',    q:'Solve: 3x - 5 = 16', choices:['5','6','7','8'], a:'7', e:'Step 1: add 5 to both sides. 3x = 21. Step 2: divide by 3. x = 7. Check: 3(7) - 5 = 21 - 5 = 16.' },
  { subject:'math', grade:7, level:16, type:'mc',    q:'|x| = 5 means x = ?', choices:['5','-5','5 or -5','0'], a:'5 or -5', e:'Absolute value = distance from 0. Both 5 and -5 are 5 units from 0. Solutions: x = 5 or x = -5.' },
  { subject:'math', grade:7, level:16, type:'mc',    q:'-3 x (-4) + 2 = ?', choices:['-14','-10','10','14'], a:'14', e:'Order of ops: multiply first. -3 x -4 = 12 (negative times negative is positive). Then 12 + 2 = 14.' },
  { subject:'math', grade:7, level:16, type:'mc',    q:'Solve: 2(x - 3) = 10', choices:['4','5','7','8'], a:'8', e:'Method 1: divide by 2 first: x - 3 = 5, so x = 8. Method 2: distribute: 2x - 6 = 10, 2x = 16, x = 8.' },
  { subject:'math', grade:7, level:16, type:'mc',    q:'The slope of y = 4x - 7 is', choices:['-7','4','-4','7'], a:'4', e:'In slope-intercept form y = mx + b, m is the slope. Here m = 4, b = -7 (y-intercept).' },
  { subject:'math', grade:7, level:16, type:'fib',   q:'If x/5 + 2 = 6, then x = ____.', a:'20', e:'Step 1: subtract 2 from both sides. x/5 = 4. Step 2: multiply both sides by 5. x = 20.' },
  { subject:'math', grade:7, level:16, type:'fib',   q:'|-12| + |-3| = ____.', a:'15', e:'|-12| = 12. |-3| = 3. Add them: 12 + 3 = 15.' },
  { subject:'math', grade:7, level:16, type:'fib',   q:'The mean of 5, 10, 15, 20 is ____.', a:'12.5', e:'Mean = sum/count. Sum = 5+10+15+20 = 50. Count = 4. Mean = 50/4 = 12.5.' },
  { subject:'math', grade:7, level:16, type:'guess', q:'The middle value in an ordered dataset.', a:'median', e:'Median is the middle value after sorting. For an even count, take the mean of the two middle values.' },
  { subject:'math', grade:7, level:16, type:'guess', q:'A quadrilateral with two pairs of parallel sides.', a:'parallelogram', e:'A parallelogram has both pairs of opposite sides parallel. Rectangles, rhombuses, and squares are all parallelograms.' },

  /* ---- Grade 7 - Level 17 ---- */
  { subject:'math', grade:7, level:17, type:'mc',    q:'The slope between (1,2) and (4,8)?', choices:['1','2','3','6'], a:'2', e:'Slope = (y2-y1)/(x2-x1) = (8-2)/(4-1) = 6/3 = 2.' },
  { subject:'math', grade:7, level:17, type:'mc',    q:'The equation of a horizontal line at y = 5 has slope', choices:['0','1','5','undefined'], a:'0', e:'A horizontal line does not rise or fall, so slope = rise/run = 0/anything = 0.' },
  { subject:'math', grade:7, level:17, type:'mc',    q:'Solve: -2x + 5 > 1', choices:['x > 2','x < 2','x > -2','x < -2'], a:'x < 2', e:'Subtract 5: -2x > -4. Divide by -2 (flip inequality!): x < 2.' },
  { subject:'math', grade:7, level:17, type:'mc',    q:'The mode of 3, 5, 7, 5, 9, 5 is', choices:['3','5','7','9'], a:'5', e:'Mode = most common value. 5 appears three times; others appear once. So mode = 5.' },
  { subject:'math', grade:7, level:17, type:'mc',    q:'Which represents 15% as a fraction?', choices:['1/15','3/20','15/10','3/50'], a:'3/20', e:'15% = 15/100. Divide both by 5: 3/20. Check: 3/20 = 0.15 = 15%.' },
  { subject:'math', grade:7, level:17, type:'fib',   q:'The y-intercept of y = -2x + 7 is ____.', a:'7', e:'In y = mx + b, b is the y-intercept. Here b = 7. When x = 0, y = 7.' },
  { subject:'math', grade:7, level:17, type:'fib',   q:'12% of 250 = ____.', a:'30', e:'12% = 0.12. 0.12 x 250 = 30. Alt: 10% of 250 = 25, 2% = 5, so 12% = 30.' },
  { subject:'math', grade:7, level:17, type:'fib',   q:'The range of the data 3, 7, 12, 15, 20 is ____.', a:'17', e:'Range = max - min = 20 - 3 = 17.' },
  { subject:'math', grade:7, level:17, type:'guess', q:'The value that appears most often.', a:'mode', e:'Mode = most frequent value. Data can have no mode, one mode, or multiple modes.' },
  { subject:'math', grade:7, level:17, type:'guess', q:'The point where a curve crosses the x-axis.', a:'root', e:'A root (or zero) of a function is any x-value where the graph crosses the x-axis, meaning f(x) = 0.' },

  /* ---- Grade 8 - Level 18 ---- */
  { subject:'math', grade:8, level:18, type:'mc',    q:'Solve: 5x - 4 = 21', choices:['3','4','5','7'], a:'5', e:'Step 1: add 4 to both sides. 5x = 25. Step 2: divide by 5. x = 5. Check: 5(5) - 4 = 21.' },
  { subject:'math', grade:8, level:18, type:'mc',    q:'Solve for y: 2x + 3y = 12 at x = 3', choices:['1','2','3','4'], a:'2', e:'Substitute x = 3: 2(3) + 3y = 12, so 6 + 3y = 12. Subtract 6: 3y = 6. Divide by 3: y = 2.' },
  { subject:'math', grade:8, level:18, type:'mc',    q:'Simplify: (3x + 4) + (2x - 1)', choices:['5x + 3','5x - 3','5x + 5','x + 3'], a:'5x + 3', e:'Combine like terms. x terms: 3x + 2x = 5x. Constants: 4 + (-1) = 3. Result: 5x + 3.' },
  { subject:'math', grade:8, level:18, type:'mc',    q:'Which is a linear equation?', choices:['y = x^2','y = 2x + 1','y = sqrt(x)','y = 1/x'], a:'y = 2x + 1', e:'A linear equation has variables to the first power only. y = 2x + 1 is a straight line (y = mx + b form).' },
  { subject:'math', grade:8, level:18, type:'mc',    q:'The graph of y = 3x is', choices:['a curve','a horizontal line','a line through origin','a parabola'], a:'a line through origin', e:'y = mx passes through (0,0) because when x=0, y=0. Slope m = 3.' },
  { subject:'math', grade:8, level:18, type:'fib',   q:'The y-intercept of y = 3x + 8 is ____.', a:'8', e:'In y = mx + b, b is the y-intercept. Here b = 8. The line crosses the y-axis at (0, 8).' },
  { subject:'math', grade:8, level:18, type:'fib',   q:'Solve for x: 4x + 2 = 3x + 9. x = ____.', a:'7', e:'Subtract 3x from both sides: x + 2 = 9. Subtract 2: x = 7. Check: 4(7)+2 = 30 and 3(7)+9 = 30. Both sides equal.' },
  { subject:'math', grade:8, level:18, type:'fib',   q:'Given 2x - y = 5, if x = 4, then y = ____.', a:'3', e:'Substitute x = 4: 2(4) - y = 5. 8 - y = 5. Subtract 8: -y = -3. Multiply by -1: y = 3.' },
  { subject:'math', grade:8, level:18, type:'guess', q:'Two equations solved together for the same variables.', a:'system', e:'A system of equations is two or more equations that share variables and are solved simultaneously.' },
  { subject:'math', grade:8, level:18, type:'guess', q:'Terms with the same variable to the same power.', a:'like terms', e:'Like terms have identical variable parts (e.g., 3x and 5x). Only like terms can be combined by adding coefficients.' },

  /* ---- Grade 8 - Level 19 ---- */
  { subject:'math', grade:8, level:19, type:'mc',    q:'Simplify: (2^3)(2^4)', choices:['2^7','2^12','4^7','8^4'], a:'2^7', e:'When multiplying powers with the same base, add the exponents: 2^3 x 2^4 = 2^(3+4) = 2^7 = 128.' },
  { subject:'math', grade:8, level:19, type:'mc',    q:'Simplify: 2^8 / 2^3', choices:['2^5','2^11','2^24','2^-5'], a:'2^5', e:'When dividing powers with the same base, subtract exponents: 2^(8-3) = 2^5 = 32.' },
  { subject:'math', grade:8, level:19, type:'mc',    q:'(3^2)^4 = ?', choices:['3^6','3^8','3^24','9^4'], a:'3^8', e:'Power of a power: multiply exponents. (3^2)^4 = 3^(2 x 4) = 3^8.' },
  { subject:'math', grade:8, level:19, type:'mc',    q:'sqrt(50) simplified = ?', choices:['5 sqrt(2)','2 sqrt(5)','10 sqrt(5)','25 sqrt(2)'], a:'5 sqrt(2)', e:'Factor 50 = 25 x 2. sqrt(25 x 2) = sqrt(25) x sqrt(2) = 5 sqrt(2).' },
  { subject:'math', grade:8, level:19, type:'mc',    q:'2^0 = ?', choices:['0','1','2','undefined'], a:'1', e:'Any nonzero number to the 0 power = 1. This keeps the exponent rules consistent: 2^0 = 2^(3-3) = 2^3/2^3 = 1.' },
  { subject:'math', grade:8, level:19, type:'fib',   q:'Scientific notation: 45,000 = 4.5 x 10^____.', a:'4', e:'Move the decimal 4 places left (from 45000. to 4.5). So 45,000 = 4.5 x 10^4.' },
  { subject:'math', grade:8, level:19, type:'fib',   q:'0.00035 in scientific notation is 3.5 x 10^____.', a:'-4', e:'Move decimal 4 places right (from 0.00035 to 3.5). For small numbers, exponent is negative: 3.5 x 10^-4.' },
  { subject:'math', grade:8, level:19, type:'fib',   q:'3^-2 = 1/____.', a:'9', e:'Negative exponent means reciprocal: 3^-2 = 1/3^2 = 1/9.' },
  { subject:'math', grade:8, level:19, type:'guess', q:'A number written as one digit times a power of ten.', a:'scientific notation', e:'Scientific notation writes numbers as a x 10^n where 1 <= |a| < 10. Handy for very large or very small numbers.' },
  { subject:'math', grade:8, level:19, type:'guess', q:'The small raised number in a power.', a:'exponent', e:'In 2^5, the small "5" is the exponent (tells how many times to multiply). The "2" is the base.' },

  /* ---- Grade 8 - Level 20 ---- */
  { subject:'math', grade:8, level:20, type:'mc',    q:'Factor: x^2 - 9', choices:['(x-3)(x-3)','(x+3)(x+3)','(x-3)(x+3)','(x-9)(x+1)'], a:'(x-3)(x+3)', e:'Difference of squares: a^2 - b^2 = (a-b)(a+b). Here x^2 - 3^2 = (x-3)(x+3). Check: (x-3)(x+3) = x^2 - 9.' },
  { subject:'math', grade:8, level:20, type:'mc',    q:'Factor: x^2 + 5x + 6', choices:['(x+1)(x+6)','(x+2)(x+3)','(x-2)(x-3)','(x+5)(x+1)'], a:'(x+2)(x+3)', e:'Find two numbers that multiply to 6 and add to 5: 2 and 3. So x^2 + 5x + 6 = (x+2)(x+3). Check by FOIL.' },
  { subject:'math', grade:8, level:20, type:'mc',    q:'Expand: (x + 2)(x + 5)', choices:['x^2 + 7','x^2 + 10','x^2 + 7x + 10','x^2 + 3x + 10'], a:'x^2 + 7x + 10', e:'FOIL: First (x)(x)=x^2. Outer (x)(5)=5x. Inner (2)(x)=2x. Last (2)(5)=10. Combine: x^2 + 7x + 10.' },
  { subject:'math', grade:8, level:20, type:'mc',    q:'The roots of (x-2)(x+5) = 0 are', choices:['-2, 5','2, 5','2, -5','-2, -5'], a:'2, -5', e:'Zero product property: each factor = 0. x-2 = 0 gives x = 2. x+5 = 0 gives x = -5.' },
  { subject:'math', grade:8, level:20, type:'mc',    q:'The volume of a cube with side 4 is', choices:['16','48','64','96'], a:'64', e:'Volume of a cube = side^3 = 4 x 4 x 4 = 16 x 4 = 64 cubic units.' },
  { subject:'math', grade:8, level:20, type:'fib',   q:'Factor: x^2 - 16 = (x - ____)(x + 4).', a:'4', e:'Difference of squares: x^2 - 16 = x^2 - 4^2 = (x-4)(x+4).' },
  { subject:'math', grade:8, level:20, type:'fib',   q:'Simplify: x^3 x x^5 = x^____.', a:'8', e:'Multiplying same-base powers: add exponents. x^3 x x^5 = x^(3+5) = x^8.' },
  { subject:'math', grade:8, level:20, type:'fib',   q:'(2x)^3 = ____ x^3.', a:'8', e:'Distribute the exponent: (2x)^3 = 2^3 x x^3 = 8 x^3.' },
  { subject:'math', grade:8, level:20, type:'guess', q:'A polynomial with three terms.', a:'trinomial', e:'One term: monomial. Two: binomial. Three: trinomial. Four or more: just polynomial.' },
  { subject:'math', grade:8, level:20, type:'guess', q:'The point (2, -5): x is 2, y is what?', a:'-5', e:'In (x, y) notation, the first value is x and the second is y. Here y = -5.' },

  /* ---- Grade 9 - Level 21 ---- */
  { subject:'math', grade:9, level:21, type:'mc',    q:'What is the derivative of x^3?', choices:['x^2','3x','3x^2','x^4/4'], a:'3x^2', e:'Power rule for derivatives: d/dx(x^n) = n x^(n-1). For x^3: 3 x^(3-1) = 3x^2.' },
  { subject:'math', grade:9, level:21, type:'mc',    q:'Solve: x^2 = 49', choices:['7','-7','7 or -7','no solution'], a:'7 or -7', e:'Take square root of both sides, but include both signs. x = +sqrt(49) or x = -sqrt(49), so x = 7 or -7.' },
  { subject:'math', grade:9, level:21, type:'mc',    q:'sin(90 degrees) = ?', choices:['0','1/2','1','undefined'], a:'1', e:'On the unit circle at 90 degrees, the point is (0, 1). Sine gives the y-coordinate: sin(90) = 1.' },
  { subject:'math', grade:9, level:21, type:'mc',    q:'cos(60 degrees) = ?', choices:['0','1/2','sqrt(2)/2','1'], a:'1/2', e:'From the unit circle at 60 degrees: point is (1/2, sqrt(3)/2). Cosine is x-coordinate: cos(60) = 1/2.' },
  { subject:'math', grade:9, level:21, type:'mc',    q:'The quadratic formula solves ax^2 + bx + c = 0. It is x = (-b +- sqrt(?)) / 2a', choices:['b^2 + 4ac','b^2 - 4ac','a^2 - 4bc','ac - 4b^2'], a:'b^2 - 4ac', e:'The quadratic formula: x = (-b +- sqrt(b^2 - 4ac)) / (2a). The b^2 - 4ac is called the discriminant.' },
  { subject:'math', grade:9, level:21, type:'fib',   q:'log base 10 of 1000 = ____.', a:'3', e:'log10(1000) asks: 10 to what power = 1000? 10^3 = 1000, so log10(1000) = 3.' },
  { subject:'math', grade:9, level:21, type:'fib',   q:'The derivative of 5x^2 is ____ x.', a:'10', e:'Power rule: d/dx(5x^2) = 5 x d/dx(x^2) = 5 x 2x = 10x.' },
  { subject:'math', grade:9, level:21, type:'fib',   q:'The reciprocal of sine is called ____ (cosecant abbreviated).', a:'csc', e:'csc(x) = 1/sin(x). Similarly sec = 1/cos, cot = 1/tan.' },
  { subject:'math', grade:9, level:21, type:'guess', q:'A triangle with all sides equal.', a:'equilateral', e:'Equilateral = "equal sides". All 3 sides same length, all 3 angles = 60 degrees.' },
  { subject:'math', grade:9, level:21, type:'guess', q:'The value where a curve equals zero.', a:'root', e:'A root (or zero) of a function is any input x where the output f(x) = 0. Graphically, where the curve crosses the x-axis.' },

  /* ---- Grade 9 - Level 22 ---- */
  { subject:'math', grade:9, level:22, type:'mc',    q:'log(a) + log(b) = ?', choices:['log(a+b)','log(a-b)','log(ab)','log(a/b)'], a:'log(ab)', e:'Log product rule: log(a) + log(b) = log(ab). Similarly log(a) - log(b) = log(a/b).' },
  { subject:'math', grade:9, level:22, type:'mc',    q:'Solve: 2x + y = 7, x - y = 2. What is x?', choices:['1','2','3','4'], a:'3', e:'Add equations: 3x = 9, so x = 3. Then y = 3 - 2 = 1. Check: 2(3)+1=7 and 3-1=2.' },
  { subject:'math', grade:9, level:22, type:'mc',    q:'ln(e) = ?', choices:['0','1','e','undefined'], a:'1', e:'Natural log ln uses base e. ln(e) asks: e to what power = e? e^1 = e, so ln(e) = 1.' },
  { subject:'math', grade:9, level:22, type:'mc',    q:'Which value of x satisfies |2x - 6| = 4?', choices:['1','5','1 or 5','2 or 3'], a:'1 or 5', e:'|2x-6| = 4 splits: 2x-6 = 4 (x = 5) or 2x-6 = -4 (x = 1). Both work.' },
  { subject:'math', grade:9, level:22, type:'mc',    q:'The graph of y = x^2 is a', choices:['line','parabola','circle','hyperbola'], a:'parabola', e:'Any quadratic y = ax^2 + bx + c graphs as a parabola. Opens upward if a > 0, downward if a < 0.' },
  { subject:'math', grade:9, level:22, type:'fib',   q:'e (Euler\'s number) is about 2. ____ (2 decimals).', a:'72', e:'e = 2.71828... Rounded to 2 decimals: 2.72. Used in continuous growth and natural log.' },
  { subject:'math', grade:9, level:22, type:'fib',   q:'The vertex of y = (x - 3)^2 + 2 is at x = ____.', a:'3', e:'For y = a(x-h)^2 + k, the vertex is at (h, k). Here h = 3, k = 2. Vertex = (3, 2).' },
  { subject:'math', grade:9, level:22, type:'fib',   q:'log10(100) = ____.', a:'2', e:'log10(100) asks: 10 to what power = 100? 10^2 = 100. So the answer is 2.' },
  { subject:'math', grade:9, level:22, type:'guess', q:'A function that undoes another function.', a:'inverse', e:'Inverse functions "undo" each other. Example: log and exp. If f(g(x)) = x and g(f(x)) = x, they are inverses.' },
  { subject:'math', grade:9, level:22, type:'guess', q:'The set of possible input values of a function.', a:'domain', e:'Domain = all valid inputs (x-values). Range = all possible outputs (y-values).' },

  /* ---- Grade 10 - Level 23 ---- */
  { subject:'math', grade:10, level:23, type:'mc',    q:'Discriminant of x^2 - 4x + 4?', choices:['-8','0','4','8'], a:'0', e:'Discriminant D = b^2 - 4ac. Here a=1, b=-4, c=4. D = 16 - 16 = 0. One repeated root.' },
  { subject:'math', grade:10, level:23, type:'mc',    q:'Solve using the quadratic formula: x^2 - 5x + 6 = 0', choices:['1 or 2','2 or 3','3 or 4','2 or 6'], a:'2 or 3', e:'a=1, b=-5, c=6. x = (5 +- sqrt(25-24))/2 = (5 +- 1)/2 = 3 or 2. Check by factoring: (x-2)(x-3)=0.' },
  { subject:'math', grade:10, level:23, type:'mc',    q:'For y = x^2 + 4x, the axis of symmetry is x = ?', choices:['-4','-2','2','4'], a:'-2', e:'Axis of symmetry: x = -b/(2a). Here a=1, b=4. x = -4/2 = -2.' },
  { subject:'math', grade:10, level:23, type:'mc',    q:'Which set contains only real numbers?', choices:['{i, 2i}','{-3, 0, pi}','{sqrt(-4)}','{2+i}'], a:'{-3, 0, pi}', e:'Real numbers exclude i (imaginary unit). -3, 0, pi are all real. Anything with sqrt(negative) or +i is complex.' },
  { subject:'math', grade:10, level:23, type:'mc',    q:'sqrt(-9) equals', choices:['-3','3','3i','not defined'], a:'3i', e:'sqrt(-9) = sqrt(9) x sqrt(-1) = 3i. Here i is the imaginary unit where i^2 = -1.' },
  { subject:'math', grade:10, level:23, type:'fib',   q:'cos(0 degrees) = ____.', a:'1', e:'At 0 degrees on the unit circle, the point is (1, 0). Cosine is the x-coordinate: cos(0) = 1.' },
  { subject:'math', grade:10, level:23, type:'fib',   q:'sin(30 degrees) = ____ (as a decimal).', a:'0.5', e:'From the unit circle at 30 degrees, y = 1/2. So sin(30) = 1/2 = 0.5.' },
  { subject:'math', grade:10, level:23, type:'fib',   q:'The discriminant of ax^2+bx+c is b^2 - ____ ac.', a:'4', e:'Discriminant formula: D = b^2 - 4ac. Positive D = 2 real roots, zero = 1 root, negative = 2 complex roots.' },
  { subject:'math', grade:10, level:23, type:'guess', q:'Numbers that involve the square root of -1.', a:'imaginary', e:'Imaginary numbers use i = sqrt(-1). Complex numbers combine real and imaginary parts: a + bi.' },
  { subject:'math', grade:10, level:23, type:'guess', q:'A U-shape graph from a quadratic function.', a:'parabola', e:'Every quadratic y = ax^2 + bx + c graphs as a parabola. It opens up (a > 0) or down (a < 0).' },

  /* ---- Grade 10 - Level 24 ---- */
  { subject:'math', grade:10, level:24, type:'mc',    q:'A line that a curve approaches but never crosses', choices:['tangent','asymptote','normal','secant'], a:'asymptote', e:'Asymptotes appear in rational and exponential functions. The curve gets arbitrarily close but never touches them.' },
  { subject:'math', grade:10, level:24, type:'mc',    q:'The vertex of y = -2(x-1)^2 + 5?', choices:['(-1, -5)','(1, -5)','(-1, 5)','(1, 5)'], a:'(1, 5)', e:'Vertex form: y = a(x-h)^2 + k. Vertex = (h, k). Here h=1, k=5. Since a=-2 < 0, opens downward.' },
  { subject:'math', grade:10, level:24, type:'mc',    q:'The distance from (1,2) to (4,6)?', choices:['3','4','5','7'], a:'5', e:'Distance formula: sqrt((x2-x1)^2 + (y2-y1)^2) = sqrt(9 + 16) = sqrt(25) = 5.' },
  { subject:'math', grade:10, level:24, type:'mc',    q:'(2 + 3i) + (4 - i) = ?', choices:['6 + 2i','6 + 4i','8 + 2i','2 + 2i'], a:'6 + 2i', e:'Add real parts and imaginary parts separately: (2+4) + (3i + (-i)) = 6 + 2i.' },
  { subject:'math', grade:10, level:24, type:'mc',    q:'tan(45 degrees) = ?', choices:['0','1/2','1','sqrt(2)'], a:'1', e:'tan = sin/cos. At 45 degrees, sin(45) = cos(45) = sqrt(2)/2. Ratio = 1.' },
  { subject:'math', grade:10, level:24, type:'fib',   q:'e (Euler\'s number) is approximately ____ (2 decimals).', a:'2.72', e:'Euler\'s number e ≈ 2.71828, rounds to 2.72 at 2 decimal places.' },
  { subject:'math', grade:10, level:24, type:'fib',   q:'sin^2(x) + cos^2(x) = ____.', a:'1', e:'The Pythagorean identity: sin^2(x) + cos^2(x) = 1 for any angle x. From the unit circle.' },
  { subject:'math', grade:10, level:24, type:'fib',   q:'The slope of a line perpendicular to y = 3x + 2 is ____ (as a fraction).', a:'-1/3', e:'Perpendicular slopes multiply to -1. If original slope is 3, perpendicular slope = -1/3.' },
  { subject:'math', grade:10, level:24, type:'guess', q:'A quadrilateral with 4 right angles.', a:'rectangle', e:'A rectangle has 4 right angles and opposite sides equal. A square is a special rectangle with all sides equal.' },
  { subject:'math', grade:10, level:24, type:'guess', q:'A number formed by combining real and imaginary parts.', a:'complex', e:'Complex numbers have form a + bi, where a is real, b is real, and i = sqrt(-1).' },

  /* ---- Grade 11 - Level 25 ---- */
  { subject:'math', grade:11, level:25, type:'mc',    q:'Sum 1+2+3+...+100?', choices:['5000','5050','5500','10000'], a:'5050', e:'Formula: n(n+1)/2 = 100 x 101 / 2 = 10100 / 2 = 5050. Gauss method: pair 1+100, 2+99... 50 pairs of 101 = 5050.' },
  { subject:'math', grade:11, level:25, type:'mc',    q:'A geometric sequence: 3, 6, 12, ?', choices:['15','18','20','24'], a:'24', e:'Common ratio = 6/3 = 2. Each term multiplies by 2: 12 x 2 = 24.' },
  { subject:'math', grade:11, level:25, type:'mc',    q:'nCr formula: The number of ways to choose 2 from 5', choices:['5','10','15','20'], a:'10', e:'5C2 = 5! / (2! x 3!) = (5x4)/(2x1) = 10.' },
  { subject:'math', grade:11, level:25, type:'mc',    q:'A permutation of 3 objects from 5', choices:['10','15','60','120'], a:'60', e:'5P3 = 5! / (5-3)! = (5x4x3) = 60. Order matters in permutations.' },
  { subject:'math', grade:11, level:25, type:'mc',    q:'lim(x->2) (x + 3)?', choices:['0','2','3','5'], a:'5', e:'For continuous functions, just plug in: 2 + 3 = 5.' },
  { subject:'math', grade:11, level:25, type:'fib',   q:'The common difference of 5, 9, 13, 17 is ____.', a:'4', e:'Each term is 4 more than the previous. This is an arithmetic sequence with d = 4.' },
  { subject:'math', grade:11, level:25, type:'fib',   q:'5! = ____.', a:'120', e:'5! = 5 x 4 x 3 x 2 x 1 = 120. Compute: 5x4=20, 20x3=60, 60x2=120.' },
  { subject:'math', grade:11, level:25, type:'fib',   q:'The probability of rolling a 6 on a fair die is 1/____.', a:'6', e:'A die has 6 equally likely outcomes; only one shows 6. P = 1/6.' },
  { subject:'math', grade:11, level:25, type:'guess', q:'The ratio between consecutive terms in a geometric sequence.', a:'common ratio', e:'In a geometric sequence, each term is multiplied by the same factor to get the next. That factor is the common ratio r.' },
  { subject:'math', grade:11, level:25, type:'guess', q:'Number of ways to arrange objects where order matters.', a:'permutation', e:'Permutation counts orderings. Formula: nPr = n! / (n-r)!.' },

  /* ---- Grade 11 - Level 26 ---- */
  { subject:'math', grade:11, level:26, type:'mc',    q:'P(A and B) for independent events = ?', choices:['P(A) + P(B)','P(A) x P(B)','P(A) - P(B)','P(A) / P(B)'], a:'P(A) x P(B)', e:'For independent events A and B: P(A and B) = P(A) x P(B).' },
  { subject:'math', grade:11, level:26, type:'mc',    q:'Sum of geometric series 1 + 1/2 + 1/4 + 1/8 + ... (infinite)?', choices:['1','2','3','infinity'], a:'2', e:'Infinite geometric sum = a/(1-r) if |r|<1. Here a=1, r=1/2. Sum = 1/(1-1/2) = 2.' },
  { subject:'math', grade:11, level:26, type:'mc',    q:'lim(x->3) (x^2 - 9)/(x - 3)?', choices:['0','3','6','undefined'], a:'6', e:'Factor: (x^2-9) = (x-3)(x+3). Cancel (x-3): x+3. Then evaluate at x=3: 3+3 = 6.' },
  { subject:'math', grade:11, level:26, type:'mc',    q:'From a deck of 52 cards, P(drawing a king)?', choices:['1/13','1/26','1/52','4/52'], a:'1/13', e:'There are 4 kings in 52 cards. P = 4/52 = 1/13.' },
  { subject:'math', grade:11, level:26, type:'mc',    q:'The 10th term of an arithmetic sequence with a1=3 and d=4?', choices:['30','36','39','43'], a:'39', e:'an = a1 + (n-1)d = 3 + 9(4) = 3 + 36 = 39.' },
  { subject:'math', grade:11, level:26, type:'fib',   q:'The area under y = 2x from x=0 to x=3 is ____.', a:'9', e:'Integral: integral from 0 to 3 of 2x dx = [x^2] from 0 to 3 = 9 - 0 = 9. Or triangle area: (1/2)(3)(6) = 9.' },
  { subject:'math', grade:11, level:26, type:'fib',   q:'sigma notation Sum k=1 to 4 of k = ____.', a:'10', e:'Sum: 1+2+3+4 = 10.' },
  { subject:'math', grade:11, level:26, type:'fib',   q:'0! = ____.', a:'1', e:'By convention, 0! = 1. This makes formulas like nCr = n!/(r!(n-r)!) work when r = n.' },
  { subject:'math', grade:11, level:26, type:'guess', q:'The average of possible outcomes weighted by probability.', a:'expected value', e:'E[X] = sum of xi x P(xi). For a fair die, E[X] = (1+2+3+4+5+6)/6 = 3.5.' },
  { subject:'math', grade:11, level:26, type:'guess', q:'The specific sum of a finite series.', a:'partial sum', e:'A partial sum Sn is the sum of the first n terms of a series. Different from the infinite sum.' },

  /* ---- Grade 12 - Level 27 ---- */
  { subject:'math', grade:12, level:27, type:'mc',    q:'The integral of 2x dx =', choices:['x^2','x^2 + C','2 + C','x^3/3'], a:'x^2 + C', e:'Antiderivative of 2x is x^2 (power rule reverse). Add C because indefinite integrals have a family of solutions.' },
  { subject:'math', grade:12, level:27, type:'mc',    q:'lim(x->0) sin(x)/x = ?', choices:['0','1','pi','undefined'], a:'1', e:'A fundamental limit. As x -> 0, sin(x) ≈ x. So sin(x)/x -> 1.' },
  { subject:'math', grade:12, level:27, type:'mc',    q:'derivative of e^x is', choices:['e^x','x e^(x-1)','ln(x)','x e^x'], a:'e^x', e:'e^x is the unique function whose derivative is itself: d/dx(e^x) = e^x.' },
  { subject:'math', grade:12, level:27, type:'mc',    q:'integral of 1/x dx = ?', choices:['ln|x| + C','1/x^2 + C','x^0 + C','-1/x^2 + C'], a:'ln|x| + C', e:'The antiderivative of 1/x is ln|x| + C (absolute value handles negative x).' },
  { subject:'math', grade:12, level:27, type:'mc',    q:'derivative of ln(x) is', choices:['1/x','x','ln(x)','1/ln(x)'], a:'1/x', e:'d/dx(ln x) = 1/x for x > 0.' },
  { subject:'math', grade:12, level:27, type:'fib',   q:'The number of degrees in a full rotation is ____.', a:'360', e:'A complete rotation is 360 degrees, or equivalently 2 pi radians.' },
  { subject:'math', grade:12, level:27, type:'fib',   q:'integral from 0 to 1 of x dx = ____.', a:'0.5', e:'integral of x dx = x^2/2. Evaluate from 0 to 1: (1^2)/2 - (0^2)/2 = 1/2 = 0.5.' },
  { subject:'math', grade:12, level:27, type:'fib',   q:'derivative of sin(x) is ____.', a:'cos(x)', e:'Standard rule: d/dx sin(x) = cos(x). Note that d/dx cos(x) = -sin(x).' },
  { subject:'math', grade:12, level:27, type:'guess', q:'Branch of mathematics for change and motion.', a:'calculus', e:'Calculus studies derivatives (rates of change) and integrals (accumulation). Developed by Newton and Leibniz.' },
  { subject:'math', grade:12, level:27, type:'guess', q:'A number that cannot be a fraction of two integers.', a:'irrational', e:'Irrationals (pi, e, sqrt(2)) cannot be written p/q. Decimals never terminate or repeat.' },

  /* ---- Grade 12 - Level 28 ---- */
  { subject:'math', grade:12, level:28, type:'mc',    q:'A matrix with determinant 0 is called', choices:['singular','identity','orthogonal','symmetric'], a:'singular', e:'Determinant 0 means no inverse exists. Such matrices are singular. Nonzero det means invertible.' },
  { subject:'math', grade:12, level:28, type:'mc',    q:'Which theorem relates the sides of a right triangle?', choices:['Fermat','Pythagorean','Euclid','Thales'], a:'Pythagorean', e:'Pythagoras: a^2 + b^2 = c^2 for the legs (a, b) and hypotenuse (c) of a right triangle.' },
  { subject:'math', grade:12, level:28, type:'mc',    q:'The determinant of [[2,3],[1,4]] is', choices:['5','8','11','24'], a:'5', e:'Determinant of a 2x2 matrix [[a,b],[c,d]] = ad - bc. Here (2)(4) - (3)(1) = 8 - 3 = 5.' },
  { subject:'math', grade:12, level:28, type:'mc',    q:'The chain rule computes derivative of', choices:['product of functions','sum of functions','composition of functions','quotient of functions'], a:'composition of functions', e:'Chain rule: for f(g(x)), derivative is f\'(g(x)) x g\'(x). Handles nested/composed functions.' },
  { subject:'math', grade:12, level:28, type:'mc',    q:'The dot product of vectors [1,2] and [3,4] is', choices:['5','7','10','11'], a:'11', e:'Dot product: sum of component-wise products. (1)(3) + (2)(4) = 3 + 8 = 11.' },
  { subject:'math', grade:12, level:28, type:'fib',   q:'integral from 0 to pi of sin(x) dx = ____.', a:'2', e:'integral sin(x) dx = -cos(x). Evaluate 0 to pi: -cos(pi) - (-cos(0)) = -(-1) - (-1) = 1 + 1 = 2.' },
  { subject:'math', grade:12, level:28, type:'fib',   q:'The second derivative of x^4 is ____ x^2.', a:'12', e:'First derivative: 4x^3. Second derivative: derivative of 4x^3 = 12x^2.' },
  { subject:'math', grade:12, level:28, type:'fib',   q:'The Fibonacci sequence starts 1, 1, 2, 3, 5, ____.', a:'8', e:'Fibonacci: each term = sum of the two previous. After 3, 5: 3+5 = 8. Then 8+5 = 13, etc.' },
  { subject:'math', grade:12, level:28, type:'guess', q:'A matrix with 1s on diagonal and 0s elsewhere.', a:'identity', e:'The identity matrix I acts like the number 1 for matrices: A x I = A. Diagonal is 1s, rest is 0.' },
  { subject:'math', grade:12, level:28, type:'guess', q:'The Greek letter used for summation.', a:'sigma', e:'Sigma (capital form) means "sum". Used as sigma from i=1 to n means summing over an index.' },

  /* ============================ GRADES 1-4 (Levels 1-8, non-math) ============================
     Very young learners. Content: first English words,
     Filipino vocabulary, simple science. */

  /* ---- SCIENCE: Grades 1-4 ---- */
  { subject:'science', grade:1, level:1, type:'mc',    q:'What do you use to see?', choices:['ears','eyes','nose','mouth'], a:'eyes', e:'Eyes let us see. Ears let us hear. Nose lets us smell.' },
  { subject:'science', grade:1, level:1, type:'guess', q:'The star that gives us daytime.', a:'sun', e:'The Sun is our closest star. It gives Earth light and warmth.' },
  { subject:'science', grade:1, level:2, type:'mc',    q:'How many legs does a spider have?', choices:['4','6','8','10'], a:'8', e:'Spiders are arachnids and have 8 legs. Insects have 6.' },
  { subject:'science', grade:1, level:2, type:'fib',   q:'Ice is water that is very ____.', a:'cold', e:'Water freezes into ice when it gets very cold (0 degrees Celsius).' },

  { subject:'science', grade:2, level:3, type:'mc',    q:'Which animal lives in water?', choices:['dog','fish','bird','cat'], a:'fish', e:'Fish breathe underwater through their gills.' },
  { subject:'science', grade:2, level:3, type:'guess', q:'The season when it snows in cold places.', a:'winter', e:'Winter is the coldest season, when snow falls in many parts of the world.' },
  { subject:'science', grade:2, level:4, type:'mc',    q:'Which one is NOT a plant?', choices:['tree','flower','grass','frog'], a:'frog', e:'Frogs are animals. Trees, flowers, and grass are plants.' },
  { subject:'science', grade:2, level:4, type:'fib',   q:'Plants need sunlight, water, and ____.', a:'air', e:'Plants take in air (carbon dioxide) to make their food through photosynthesis.' },

  { subject:'science', grade:3, level:5, type:'mc',    q:'How many planets orbit our Sun?', choices:['6','7','8','9'], a:'8', e:'Eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.' },
  { subject:'science', grade:3, level:5, type:'guess', q:'The part of a plant that grows under the ground.', a:'root', e:'Roots hold plants in place and drink water from the soil.' },
  { subject:'science', grade:3, level:6, type:'fib',   q:'The three states of matter are solid, liquid, and ____.', a:'gas', e:'Solid (ice), liquid (water), gas (steam) are the three main states of matter.' },
  { subject:'science', grade:3, level:6, type:'mc',    q:'Which is a mammal?', choices:['snake','turtle','dog','fish'], a:'dog', e:'Mammals are warm-blooded and give birth to live babies that drink milk.' },

  { subject:'science', grade:4, level:7, type:'mc',    q:'What gas do plants breathe out?', choices:['nitrogen','oxygen','carbon dioxide','hydrogen'], a:'oxygen', e:'Plants take in CO2 and release oxygen through photosynthesis.' },
  { subject:'science', grade:4, level:7, type:'guess', q:'The natural satellite of Earth.', a:'moon', e:'The Moon orbits Earth once every ~28 days.' },
  { subject:'science', grade:4, level:8, type:'fib',   q:'The main organ that controls the body is the ____.', a:'brain', e:'The brain sends signals through nerves to control everything the body does.' },
  { subject:'science', grade:4, level:8, type:'mc',    q:'Which force makes things fall down?', choices:['friction','magnetism','gravity','wind'], a:'gravity', e:'Gravity pulls objects toward the center of the Earth.' },

  /* ---- ENGLISH: Grades 1-4 ---- */
  { subject:'english', grade:1, level:1, type:'mc',    q:'How many letters are in the English alphabet?', choices:['24','25','26','27'], a:'26', e:'The alphabet has 26 letters, from A to Z.' },
  { subject:'english', grade:1, level:1, type:'guess', q:'The first letter of the alphabet.', a:'A', e:'A is the first letter, followed by B, C, and so on.' },
  { subject:'english', grade:1, level:2, type:'mc',    q:'Which word rhymes with "dog"?', choices:['cat','log','pig','ant'], a:'log', e:'Rhyming words end with the same sound. Dog and log both end in "-og".' },
  { subject:'english', grade:1, level:2, type:'fib',   q:'The color of the sky on a clear day is ____.', a:'blue', e:'Sunlight scatters in the atmosphere and makes the sky look blue.' },

  { subject:'english', grade:2, level:3, type:'mc',    q:'Which is a vowel?', choices:['B','C','E','D'], a:'E', e:'The vowels are A, E, I, O, U (sometimes Y). E is a vowel.' },
  { subject:'english', grade:2, level:3, type:'fib',   q:'"Cat" begins with the letter ____.', a:'C', e:'C-A-T. The first letter is C.' },
  { subject:'english', grade:2, level:4, type:'mc',    q:'Which is a question?', choices:['I am tall.','What is your name?','I like cake!','Go home.'], a:'What is your name?', e:'Questions end with a question mark (?).' },
  { subject:'english', grade:2, level:4, type:'guess', q:'The mark at the end of a sentence like "I am happy."', a:'period', e:'A period (.) ends a statement. Questions use ? and exclamations use !.' },

  { subject:'english', grade:3, level:5, type:'mc',    q:'The plural of "cat" is', choices:['cat','cats','cates','cattes'], a:'cats', e:'Most nouns just add -s to become plural: cat -> cats.' },
  { subject:'english', grade:3, level:5, type:'guess', q:'A word that names an action.', a:'verb', e:'Verbs are action words: run, jump, sing, eat.' },
  { subject:'english', grade:3, level:6, type:'fib',   q:'The past tense of "run" is ____.', a:'ran', e:'"Run" is irregular. Its past tense is "ran".' },
  { subject:'english', grade:3, level:6, type:'mc',    q:'Which word is spelled correctly?', choices:['freind','friend','frend','freind'], a:'friend', e:'"I before E except after C" - friend spells F-R-I-E-N-D.' },

  { subject:'english', grade:4, level:7, type:'mc',    q:'Which word is a synonym for "happy"?', choices:['sad','glad','angry','tired'], a:'glad', e:'Synonyms mean the same. Happy and glad both mean "feeling joy".' },
  { subject:'english', grade:4, level:7, type:'guess', q:'A word that names a person, place, thing, or idea.', a:'noun', e:'Nouns: teacher (person), park (place), pencil (thing), love (idea).' },
  { subject:'english', grade:4, level:8, type:'fib',   q:'The past tense of "sing" is ____.', a:'sang', e:'"Sing" is irregular: sing -> sang -> sung.' },
  { subject:'english', grade:4, level:8, type:'mc',    q:'"They\'re" means', choices:['their','there','they are','the year'], a:'they are', e:'"They\'re" is a contraction of "they are" - the apostrophe replaces the "a".' },

  /* ---- FILIPINO: Grades 1-4 ---- */
  { subject:'filipino', grade:1, level:1, type:'mc',    q:'Ano ang tawag sa nanay ng nanay mo?', choices:['tita','ate','lola','ina'], a:'lola', e:'Lola ang tawag sa magulang ng iyong nanay o tatay.' },
  { subject:'filipino', grade:1, level:1, type:'guess', q:'Ang salitang Filipino para sa "sun".', a:'araw', e:'Ang araw ay nagbibigay ng liwanag at init sa Pilipinas.' },
  { subject:'filipino', grade:1, level:2, type:'mc',    q:'Ilang letra ang alpabetong Filipino?', choices:['26','27','28','30'], a:'28', e:'Ang alpabetong Filipino ay may 28 letra kabilang ang Ñ at Ng.' },
  { subject:'filipino', grade:1, level:2, type:'fib',   q:'Ang kulay ng dagat ay ____.', a:'asul', e:'Karaniwang asul ang kulay ng dagat.' },

  { subject:'filipino', grade:2, level:3, type:'mc',    q:'Ano ang tawag sa magulang na lalaki?', choices:['nanay','tatay','lolo','tito'], a:'tatay', e:'Tatay o ama ay ang magulang na lalaki. Nanay ay ang magulang na babae.' },
  { subject:'filipino', grade:2, level:3, type:'guess', q:'Ang salitang Filipino para sa "water".', a:'tubig', e:'Ang tubig ay mahalaga sa buhay - iniinom natin at ginagamit sa lahat ng araw.' },
  { subject:'filipino', grade:2, level:4, type:'mc',    q:'Ilang araw sa isang linggo?', choices:['5','6','7','8'], a:'7', e:'Pitong araw sa isang linggo: Lunes, Martes, Miyerkules, Huwebes, Biyernes, Sabado, Linggo.' },
  { subject:'filipino', grade:2, level:4, type:'fib',   q:'Ang unang araw ng linggo sa kalendaryo ay ____.', a:'Lunes', e:'Sa Filipino, ang linggo ay nagsisimula sa Lunes.' },

  { subject:'filipino', grade:3, level:5, type:'mc',    q:'Ang pangngalan ay pangalan ng?', choices:['kilos','tao','damdamin','kulay'], a:'tao', e:'Pangngalan: pangalan ng tao, bagay, lugar, o pangyayari.' },
  { subject:'filipino', grade:3, level:5, type:'guess', q:'Ang salitang Filipino para sa "book".', a:'aklat', e:'Aklat o libro ang tawag sa nakalimbag na basahin.' },
  { subject:'filipino', grade:3, level:6, type:'fib',   q:'Ilang buwan meron sa isang taon? ____.', a:'12', e:'Labindalawang buwan: Enero hanggang Disyembre.' },
  { subject:'filipino', grade:3, level:6, type:'mc',    q:'Aling salita ay pang-uri?', choices:['tumakbo','maganda','ako','bahay'], a:'maganda', e:'Pang-uri: naglalarawan ng pangngalan. "Maganda" ay pang-uri.' },

  { subject:'filipino', grade:4, level:7, type:'mc',    q:'Ang kasalungat ng "matalino" ay?', choices:['mabait','tanga','tanga','mabagal'], a:'tanga', e:'Ang kasalungat ng matalino (smart) ay tanga o mangmang.' },
  { subject:'filipino', grade:4, level:7, type:'guess', q:'Ang Filipino ng "friend".', a:'kaibigan', e:'Kaibigan ang tawag sa mahal at pinagkakatiwalaan mong kasama.' },
  { subject:'filipino', grade:4, level:8, type:'fib',   q:'Ang panghalip para sa sarili mo ay ____.', a:'ako', e:'Ako ang panghalip panao para sa sarili. Ikaw naman para sa kausap.' },
  { subject:'filipino', grade:4, level:8, type:'mc',    q:'Ilang bahagi ng katawan sa mukha ang nakikita?', choices:['mata, ilong, bibig','paa, kamay, ulo','tenga, buhok, leeg','lahat ng ito'], a:'mata, ilong, bibig', e:'Sa mukha nakikita ang mata (eyes), ilong (nose), bibig (mouth), at tenga (ears).' },

  /* ============================ MATH ============================ */
  /* Grade 5 - L1..L3 */

  /* Grade 6 - L4..L6 */

  /* Grade 7 - L7..L9 */

  /* Grade 8 - L10..L12 (new content) */

  /* Grade 9 - L13..L14 */

  /* Grade 10 - L15..L16 */

  /* Grade 11 - L17..L18 */

  /* Grade 12 - L19..L20 */

  /* ============================ SCIENCE ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'science', grade:5, level:9, type:'mc',    q:'Which planet is closest to the Sun?', choices:['Venus','Earth','Mercury','Mars'], a:'Mercury', e:'Order from the Sun: Mercury, Venus, Earth, Mars.' },
  { subject:'science', grade:5, level:9, type:'fib',   q:'Water freezes at ____ degrees Celsius.', a:'0', e:'Pure water at sea level freezes at 0 C and boils at 100 C.' },
  { subject:'science', grade:5, level:9, type:'guess', q:'The gas we breathe in that keeps us alive.', a:'oxygen', e:'Oxygen makes up about 21% of air; our cells use it to release energy from food.' },
  { subject:'science', grade:5, level:10, type:'mc',    q:'How many bones does an adult human have?', choices:['186','206','226','256'], a:'206', e:'Babies have ~270; many fuse as we grow, ending at 206 in adulthood.' },
  { subject:'science', grade:5, level:10, type:'mc',    q:'What organ pumps blood?', choices:['lungs','liver','heart','brain'], a:'heart', e:'The heart is a muscle that pumps blood through arteries and veins.' },
  { subject:'science', grade:5, level:10, type:'guess', q:'The process plants use to make food from sunlight.', a:'photosynthesis', e:'Plants use sunlight, water, and CO2 to make glucose and release oxygen.' },
  { subject:'science', grade:5, level:11, type:'fib',   q:'The center of an atom is called the ____.', a:'nucleus', e:'The nucleus holds protons and neutrons; electrons orbit around it.' },
  { subject:'science', grade:5, level:11, type:'mc',    q:'Which is a mammal?', choices:['shark','frog','whale','eagle'], a:'whale', e:'Mammals have hair, are warm-blooded, and nurse their young; whales do all three.' },

  /* Grade 6 - L4..L6 */
  { subject:'science', grade:6, level:12, type:'mc',    q:'The chemical symbol for gold is', choices:['Go','Gd','Au','Ag'], a:'Au', e:'Au comes from the Latin name aurum. Ag (argentum) is silver.' },
  { subject:'science', grade:6, level:12, type:'fib',   q:'Sound travels fastest through ____ (solid/liquid/gas).', a:'solid', e:'In solids the particles are packed tightest, so sound moves fastest.' },
  { subject:'science', grade:6, level:12, type:'guess', q:'The powerhouse of the cell.', a:'mitochondria', e:'Mitochondria produce ATP, the cell\'s main energy currency.' },
  { subject:'science', grade:6, level:13, type:'mc',    q:'Which force pulls objects toward Earth?', choices:['friction','magnetism','gravity','tension'], a:'gravity', e:'Gravity is the attractive force between masses.' },
  { subject:'science', grade:6, level:13, type:'fib',   q:'Water has the chemical formula ____.', a:'H2O', e:'A water molecule has 2 hydrogen atoms bonded to 1 oxygen atom.' },
  { subject:'science', grade:6, level:14, type:'guess', q:'The layer of gas surrounding Earth.', a:'atmosphere', e:'The atmosphere has 5 layers: troposphere, stratosphere, mesosphere, thermosphere, exosphere.' },
  { subject:'science', grade:6, level:14, type:'mc',    q:'Which is NOT a state of matter?', choices:['solid','liquid','plasma','energy'], a:'energy', e:'States of matter are solid, liquid, gas, plasma. Energy is not a state.' },
  { subject:'science', grade:6, level:14, type:'fib',   q:'The largest planet in our solar system is ____.', a:'Jupiter', e:'Jupiter is a gas giant, more massive than all other planets combined.' },

  /* Grade 7 - L7..L9 */
  { subject:'science', grade:7, level:15, type:'mc',    q:'What is the pH of a neutral solution?', choices:['0','7','10','14'], a:'7', e:'pH runs 0-14. Below 7 is acidic; 7 is neutral; above 7 is basic.' },
  { subject:'science', grade:7, level:15, type:'guess', q:'The unit of electrical resistance.', a:'ohm', e:'Ohm (Omega) measures resistance. Ohm\'s law: V = I x R.' },
  { subject:'science', grade:7, level:16, type:'fib',   q:'DNA stands for ____ acid.', a:'deoxyribonucleic', e:'DNA = DeoxyriboNucleic Acid; it carries genetic instructions.' },
  { subject:'science', grade:7, level:16, type:'mc',    q:'Which particle has no charge?', choices:['proton','electron','neutron','positron'], a:'neutron', e:'Protons are +1, electrons are -1, neutrons are 0 (neutral).' },
  { subject:'science', grade:7, level:16, type:'guess', q:'The scientist who developed the theory of evolution.', a:'Darwin', e:'Darwin proposed natural selection in On the Origin of Species (1859).' },
  { subject:'science', grade:7, level:17, type:'fib',   q:'Newton\'s second law: F = m x ____.', a:'a', e:'Force = mass x acceleration.' },
  { subject:'science', grade:7, level:17, type:'mc',    q:'Which gas is most abundant in Earth\'s atmosphere?', choices:['oxygen','carbon dioxide','nitrogen','argon'], a:'nitrogen', e:'Air is ~78% nitrogen, ~21% oxygen, ~1% argon.' },

  /* Grade 8 - L10..L12 (new content) */
  { subject:'science', grade:8, level:18, type:'mc',    q:'What is the smallest unit of life?', choices:['atom','molecule','cell','organ'], a:'cell', e:'The cell is the smallest unit that can perform all life functions.' },
  { subject:'science', grade:8, level:18, type:'fib',   q:'Plant cells have a rigid outer ____.', a:'cell wall', e:'Cell walls made of cellulose give plant cells shape and support.' },
  { subject:'science', grade:8, level:18, type:'guess', q:'The green pigment that captures light energy in plants.', a:'chlorophyll', e:'Chlorophyll in chloroplasts absorbs sunlight to power photosynthesis.' },
  { subject:'science', grade:8, level:19, type:'mc',    q:'Which is a form of potential energy?', choices:['moving car','stretched spring','flowing water','running fan'], a:'stretched spring', e:'Potential energy is stored energy. A stretched spring stores elastic PE.' },
  { subject:'science', grade:8, level:19, type:'fib',   q:'The SI unit of energy is the ____.', a:'joule', e:'The joule (J) is the SI unit of energy; 1 J = 1 N x 1 m.' },
  { subject:'science', grade:8, level:19, type:'guess', q:'Heat transfer through direct contact.', a:'conduction', e:'Conduction transfers heat by particle contact. Convection uses fluids; radiation uses waves.' },
  { subject:'science', grade:8, level:20, type:'mc',    q:'In H2O + CO2 -> C6H12O6 + O2, which is the product?', choices:['H2O','CO2','O2','sunlight'], a:'O2', e:'This is photosynthesis. Reactants: H2O + CO2 (+ sunlight). Products: C6H12O6 (glucose) + O2.' },
  { subject:'science', grade:8, level:20, type:'fib',   q:'A substance that speeds up a reaction without being used up is a ____.', a:'catalyst', e:'Catalysts lower activation energy; enzymes are biological catalysts.' },
  { subject:'science', grade:8, level:20, type:'guess', q:'The chart that organizes all known elements.', a:'periodic table', e:'Mendeleev\'s periodic table organizes elements by atomic number and repeating properties.' },

  /* Grade 9 - L13..L14 */
  { subject:'science', grade:9, level:21, type:'mc',    q:'The speed of light in vacuum is approximately', choices:['3 x 10^5 m/s','3 x 10^8 m/s','3 x 10^10 m/s','3 x 10^12 m/s'], a:'3 x 10^8 m/s', e:'c is roughly 300,000,000 m/s.' },
  { subject:'science', grade:9, level:21, type:'guess', q:'The process by which liquid becomes gas at the surface.', a:'evaporation', e:'Evaporation happens below boiling point at the surface only.' },
  { subject:'science', grade:9, level:21, type:'fib',   q:'The three types of rocks are igneous, sedimentary, and ____.', a:'metamorphic', e:'Metamorphic rocks form when existing rocks are changed by heat and pressure.' },
  { subject:'science', grade:9, level:22, type:'mc',    q:'Which element has atomic number 6?', choices:['oxygen','carbon','nitrogen','helium'], a:'carbon', e:'Carbon has 6 protons and is the basis of organic chemistry.' },
  { subject:'science', grade:9, level:22, type:'guess', q:'The bending of light passing from one medium to another.', a:'refraction', e:'Refraction is bending due to speed change; reflection is bouncing back.' },
  { subject:'science', grade:9, level:22, type:'fib',   q:'The SI unit of force is the ____.', a:'newton', e:'1 newton accelerates 1 kg at 1 m/s^2. Named after Isaac Newton.' },

  /* Grade 10 - L15..L16 */
  { subject:'science', grade:10, level:23, type:'mc',    q:'Which blood type is the universal donor?', choices:['A+','O-','AB+','B-'], a:'O-', e:'O- has no A, B, or Rh antigens, so any recipient can accept it.' },
  { subject:'science', grade:10, level:23, type:'mc',    q:'DNA is made of building blocks called', choices:['amino acids','nucleotides','lipids','sugars'], a:'nucleotides', e:'Each nucleotide has a phosphate, a sugar, and a nitrogenous base (A, T, C, or G).' },
  { subject:'science', grade:10, level:23, type:'guess', q:'The passing of traits from parents to offspring.', a:'heredity', e:'Heredity uses DNA to pass characteristics through generations.' },
  { subject:'science', grade:10, level:24, type:'mc',    q:'How many chromosomes does a normal human somatic cell have?', choices:['21','23','44','46'], a:'46', e:'46 chromosomes in 23 pairs. Sperm and egg each carry 23.' },
  { subject:'science', grade:10, level:24, type:'fib',   q:'The pair of bases A pairs with in DNA is ____.', a:'T', e:'Base pairing: A-T and C-G in DNA. In RNA, T is replaced by U.' },
  { subject:'science', grade:10, level:24, type:'guess', q:'A change in DNA sequence that can affect traits.', a:'mutation', e:'Mutations can be harmful, beneficial, or neutral. They drive evolution.' },

  /* Grade 11 - L17..L18 */
  { subject:'science', grade:11, level:25, type:'mc',    q:'Which subatomic particle carries a negative charge?', choices:['proton','neutron','electron','photon'], a:'electron', e:'Electrons (-1) orbit; protons (+1) and neutrons (0) sit in the nucleus.' },
  { subject:'science', grade:11, level:25, type:'guess', q:'Einstein\'s famous equation relates energy, mass, and this.', a:'light', e:'E = mc^2. Mass and energy are equivalent; c is the speed of light.' },
  { subject:'science', grade:11, level:25, type:'fib',   q:'The powerhouse molecule of the cell is ____.', a:'ATP', e:'Adenosine TriPhosphate stores chemical energy in its phosphate bonds.' },
  { subject:'science', grade:11, level:26, type:'mc',    q:'What type of bond shares electrons?', choices:['ionic','covalent','metallic','hydrogen'], a:'covalent', e:'Covalent bonds share electron pairs (H2O). Ionic bonds transfer electrons (NaCl).' },
  { subject:'science', grade:11, level:26, type:'fib',   q:'A wave\'s number of cycles per second is its ____.', a:'frequency', e:'Frequency (Hz) counts cycles per second; wavelength is the distance between crests.' },

  /* Grade 12 - L19..L20 */
  { subject:'science', grade:12, level:27, type:'guess', q:'The scientist who proposed general relativity.', a:'Einstein', e:'Einstein published Special Relativity (1905) and General Relativity (1915).' },
  { subject:'science', grade:12, level:27, type:'fib',   q:'The organelle that packages proteins is the Golgi ____.', a:'apparatus', e:'The Golgi apparatus modifies, sorts, and packages proteins from the ER.' },
  { subject:'science', grade:12, level:27, type:'mc',    q:'Which law states that energy cannot be created or destroyed?', choices:['Newton\'s first','Conservation of energy','Ohm\'s law','Boyle\'s law'], a:'Conservation of energy', e:'The First Law of Thermodynamics.' },
  { subject:'science', grade:12, level:28, type:'mc',    q:'The Heisenberg uncertainty principle says we cannot know both', choices:['mass and charge','position and momentum','color and shape','time and temperature'], a:'position and momentum', e:'You cannot precisely know both a particle\'s position and momentum simultaneously.' },
  { subject:'science', grade:12, level:28, type:'fib',   q:'Quantum particles that carry electromagnetic force are ____.', a:'photons', e:'Photons are massless quanta of light and the mediators of the electromagnetic force.' },

  /* ============================ ENGLISH ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'english', grade:5, level:9, type:'mc',    q:'Which word is a noun?', choices:['run','happy','apple','quickly'], a:'apple', e:'A noun names a person, place, thing, or idea. Apple is a thing.' },
  { subject:'english', grade:5, level:9, type:'fib',   q:'The plural of "child" is ____.', a:'children', e:'"Child" has an irregular plural: children.' },
  { subject:'english', grade:5, level:9, type:'guess', q:'A word that describes a noun.', a:'adjective', e:'Adjectives describe nouns: red apple, tall boy.' },
  { subject:'english', grade:5, level:10, type:'mc',    q:'Which is a complete sentence?', choices:['Running fast.','The dog barks.','On the table.','Very cold today.'], a:'The dog barks.', e:'A complete sentence needs a subject and a verb.' },
  { subject:'english', grade:5, level:10, type:'fib',   q:'The opposite of "hot" is ____.', a:'cold', e:'Words with opposite meanings are antonyms.' },
  { subject:'english', grade:5, level:10, type:'mc',    q:'Which word rhymes with "cat"?', choices:['dog','hat','sun','mop'], a:'hat', e:'Rhymes end with the same sound; cat and hat end in "-at".' },
  { subject:'english', grade:5, level:11, type:'guess', q:'A story that is not true, often with talking animals.', a:'fable', e:'A fable is short fiction that teaches a moral, often with animal characters.' },
  { subject:'english', grade:5, level:11, type:'fib',   q:'The past tense of "go" is ____.', a:'went', e:'"Go" is an irregular verb; its past tense is "went".' },

  /* Grade 6 - L4..L6 */
  { subject:'english', grade:6, level:12, type:'mc',    q:'Which is a verb?', choices:['blue','table','swim','beautiful'], a:'swim', e:'A verb is an action or state; "swim" is an action.' },
  { subject:'english', grade:6, level:12, type:'guess', q:'A word that means the same as another.', a:'synonym', e:'Synonyms have similar meanings; antonyms have opposite meanings.' },
  { subject:'english', grade:6, level:12, type:'fib',   q:'"They\'re" is a contraction for "they ____".', a:'are', e:'They\'re = they are; different from their (possessive) and there (place).' },
  { subject:'english', grade:6, level:13, type:'mc',    q:'Which word is spelled correctly?', choices:['recieve','receive','receeve','receve'], a:'receive', e:'"I before E except after C" - after C use EI, so receive.' },
  { subject:'english', grade:6, level:13, type:'guess', q:'A word with the opposite meaning.', a:'antonym', e:'Antonyms are opposites: hot/cold, up/down.' },
  { subject:'english', grade:6, level:14, type:'fib',   q:'A group of words with subject and verb is a ____.', a:'sentence', e:'A sentence needs a subject and a verb and expresses a complete thought.' },
  { subject:'english', grade:6, level:14, type:'mc',    q:'Which is an adverb?', choices:['slow','slowly','slower','slowness'], a:'slowly', e:'Adverbs describe verbs and often end in -ly.' },

  /* Grade 7 - L7..L9 */
  { subject:'english', grade:7, level:15, type:'mc',    q:'Which sentence is punctuated correctly?', choices:['Whats up','What\'s up.','What\'s up?','What is up'], a:'What\'s up?', e:'A question ends with a question mark; "what\'s" needs an apostrophe.' },
  { subject:'english', grade:7, level:15, type:'guess', q:'A figure of speech comparing two unlike things using "like" or "as".', a:'simile', e:'Simile uses "like" or "as"; metaphor is a direct comparison.' },
  { subject:'english', grade:7, level:15, type:'fib',   q:'The main character of a story is called the ____.', a:'protagonist', e:'Protagonist = main character; antagonist opposes them.' },
  { subject:'english', grade:7, level:16, type:'mc',    q:'Which is a metaphor?', choices:['as brave as a lion','time is money','fast like the wind','runs quickly'], a:'time is money', e:'A metaphor says one thing IS another, no "like" or "as".' },
  { subject:'english', grade:7, level:16, type:'guess', q:'Giving human qualities to non-human things.', a:'personification', e:'Personification: "The wind whispered", "The sun smiled".' },
  { subject:'english', grade:7, level:17, type:'fib',   q:'A person, place, thing, or idea is called a ____.', a:'noun', e:'Common nouns are general (dog); proper nouns are specific (Rex).' },
  { subject:'english', grade:7, level:17, type:'mc',    q:'Which word is a preposition?', choices:['jump','under','she','fast'], a:'under', e:'Prepositions show relationships in space/time: in, on, under, before, with.' },

  /* Grade 8 - L10..L12 (new content) */
  { subject:'english', grade:8, level:18, type:'mc',    q:'Which is a subordinating conjunction?', choices:['and','because','or','but'], a:'because', e:'Subordinating conjunctions (because, although, since) introduce dependent clauses.' },
  { subject:'english', grade:8, level:18, type:'guess', q:'A word with the same sound but different spelling and meaning.', a:'homophone', e:'Homophones sound alike: their/there/they\'re, to/too/two.' },
  { subject:'english', grade:8, level:18, type:'fib',   q:'A verb form ending in -ing acting as a noun is a ____.', a:'gerund', e:'Gerund: "Swimming is fun" - "swimming" is a noun made from a verb.' },
  { subject:'english', grade:8, level:19, type:'mc',    q:'Greek myth: Who flew too close to the sun?', choices:['Achilles','Icarus','Odysseus','Perseus'], a:'Icarus', e:'Icarus wore wax wings made by his father Daedalus; the sun melted them.' },
  { subject:'english', grade:8, level:19, type:'guess', q:'Reference to a well-known person, place, or event.', a:'allusion', e:'An allusion is a passing reference to something the reader is expected to know.' },
  { subject:'english', grade:8, level:19, type:'fib',   q:'The word "Herculean" alludes to ____.', a:'Hercules', e:'Herculean means requiring great strength, referencing Hercules of Greek myth.' },
  { subject:'english', grade:8, level:20, type:'mc',    q:'Which is the passive voice?', choices:['The cat chased the mouse.','The mouse was chased by the cat.','The cat is chasing.','Chase the cat.'], a:'The mouse was chased by the cat.', e:'In passive voice, the subject receives the action: "was chased by".' },
  { subject:'english', grade:8, level:20, type:'guess', q:'The overall message or lesson of a literary work.', a:'theme', e:'Theme is the underlying message (love, courage, friendship), not the plot summary.' },

  /* Grade 9 - L13..L14 */
  { subject:'english', grade:9, level:21, type:'mc',    q:'Who wrote "Romeo and Juliet"?', choices:['Dickens','Shakespeare','Austen','Hemingway'], a:'Shakespeare', e:'William Shakespeare wrote Romeo and Juliet around 1595.' },
  { subject:'english', grade:9, level:21, type:'guess', q:'Repetition of consonant sounds at the start of words.', a:'alliteration', e:'Alliteration: "Peter Piper picked a peck of pickled peppers."' },
  { subject:'english', grade:9, level:21, type:'fib',   q:'A 14-line poem with a specific rhyme scheme is a ____.', a:'sonnet', e:'A sonnet is 14 lines of iambic pentameter; Shakespearean sonnets end with a couplet.' },
  { subject:'english', grade:9, level:22, type:'mc',    q:'The turning point of a story is the', choices:['exposition','climax','resolution','setting'], a:'climax', e:'Exposition -> rising action -> climax -> falling action -> resolution.' },
  { subject:'english', grade:9, level:22, type:'guess', q:'A long narrative poem about heroic deeds.', a:'epic', e:'Epics: The Iliad, The Odyssey, Beowulf.' },

  /* Grade 10 - L15..L16 */
  { subject:'english', grade:10, level:23, type:'fib',   q:'"I have a dream" was famously spoken by Martin Luther King ____.', a:'Jr', e:'MLK Jr. delivered the speech on August 28, 1963 during the March on Washington.' },
  { subject:'english', grade:10, level:23, type:'mc',    q:'Which is written in first person?', choices:['She walked home','You should try','I saw the light','They played'], a:'I saw the light', e:'First person uses I/we; second person uses you; third uses he/she/it/they.' },
  { subject:'english', grade:10, level:24, type:'mc',    q:'"The Great Gatsby" was written by', choices:['Steinbeck','Fitzgerald','Faulkner','Twain'], a:'Fitzgerald', e:'F. Scott Fitzgerald published The Great Gatsby in 1925.' },
  { subject:'english', grade:10, level:24, type:'guess', q:'A recurring symbol or idea in literature.', a:'motif', e:'Motifs are recurring elements that support the theme (e.g., light/dark, water).' },

  /* Grade 11 - L17..L18 */
  { subject:'english', grade:11, level:25, type:'mc',    q:'Who wrote "1984"?', choices:['Huxley','Orwell','Bradbury','Kafka'], a:'Orwell', e:'George Orwell published 1984 in 1949.' },
  { subject:'english', grade:11, level:25, type:'guess', q:'An extreme exaggeration used for effect.', a:'hyperbole', e:'Hyperbole is deliberate exaggeration: "I could eat a horse."' },
  { subject:'english', grade:11, level:26, type:'fib',   q:'"To be, or not to be" is from Shakespeare\'s ____.', a:'Hamlet', e:'From Hamlet\'s soliloquy, Act 3, Scene 1.' },
  { subject:'english', grade:11, level:26, type:'mc',    q:'Which is an example of onomatopoeia?', choices:['bright','buzz','tall','swift'], a:'buzz', e:'Onomatopoeia: words that sound like what they describe (buzz, hiss, boom).' },

  /* Grade 12 - L19..L20 */
  { subject:'english', grade:12, level:27, type:'guess', q:'The attitude of the author toward the subject.', a:'tone', e:'Tone is the author\'s attitude; mood is what the reader feels.' },
  { subject:'english', grade:12, level:27, type:'fib',   q:'A word that connects clauses (e.g., and, but, or) is a ____.', a:'conjunction', e:'FANBOYS: For, And, Nor, But, Or, Yet, So.' },
  { subject:'english', grade:12, level:28, type:'mc',    q:'"Stream of consciousness" writing was pioneered by', choices:['Twain','Woolf','Chaucer','Shakespeare'], a:'Woolf', e:'Virginia Woolf and James Joyce popularized stream-of-consciousness in modernist fiction.' },
  { subject:'english', grade:12, level:28, type:'guess', q:'The technique of foreshadowing hints at what?', a:'future events', e:'Foreshadowing gives clues about what will happen later in the story.' },

  /* ============================ HISTORY ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'history', grade:5, level:9, type:'mc',    q:'Who was the first President of the United States?', choices:['Lincoln','Adams','Washington','Jefferson'], a:'Washington', e:'George Washington served 1789-1797.' },
  { subject:'history', grade:5, level:9, type:'fib',   q:'Christopher Columbus sailed the ocean blue in ____.', a:'1492', e:'In 1492 Columbus sailed with three ships to the Americas.' },
  { subject:'history', grade:5, level:9, type:'guess', q:'The large stone tombs built in ancient Egypt for pharaohs.', a:'pyramids', e:'The Great Pyramid of Giza (~2560 BC) is the most famous.' },
  { subject:'history', grade:5, level:10, type:'mc',    q:'The Great Wall was built in', choices:['India','China','Japan','Egypt'], a:'China', e:'The Great Wall was built over centuries starting in the 7th century BC.' },
  { subject:'history', grade:5, level:10, type:'fib',   q:'The country that gave the Statue of Liberty to the US is ____.', a:'France', e:'France gifted Lady Liberty in 1886.' },
  { subject:'history', grade:5, level:11, type:'guess', q:'Ancient civilization known for gladiators and the Colosseum.', a:'Rome', e:'Ancient Rome built the Colosseum around 70-80 AD.' },
  { subject:'history', grade:5, level:11, type:'mc',    q:'On July 4, 1776, the US declared', choices:['war','independence','peace','statehood'], a:'independence', e:'The Declaration of Independence separated 13 colonies from Britain.' },

  /* Grade 6 - L4..L6 */
  { subject:'history', grade:6, level:12, type:'mc',    q:'Who wrote the Declaration of Independence?', choices:['Washington','Jefferson','Franklin','Adams'], a:'Jefferson', e:'Thomas Jefferson was the principal author.' },
  { subject:'history', grade:6, level:12, type:'guess', q:'The world war that ended in 1945.', a:'World War II', e:'WWII ended in 1945; Germany surrendered in May, Japan in September.' },
  { subject:'history', grade:6, level:13, type:'fib',   q:'Abraham Lincoln was the ____th US president.', a:'16', e:'Lincoln was the 16th President (1861-1865).' },
  { subject:'history', grade:6, level:13, type:'mc',    q:'The Renaissance began in', choices:['France','Germany','Italy','England'], a:'Italy', e:'The Renaissance ("rebirth") began in 14th-century Italy.' },
  { subject:'history', grade:6, level:14, type:'guess', q:'The ship that famously sank in 1912.', a:'Titanic', e:'The RMS Titanic hit an iceberg on April 14, 1912.' },
  { subject:'history', grade:6, level:14, type:'fib',   q:'Mahatma Gandhi led the independence movement of ____.', a:'India', e:'Gandhi\'s nonviolent resistance won India\'s independence in 1947.' },
  { subject:'history', grade:6, level:14, type:'mc',    q:'Who painted the Mona Lisa?', choices:['Michelangelo','Da Vinci','Raphael','Donatello'], a:'Da Vinci', e:'Leonardo da Vinci painted her around 1503-1519.' },

  /* Grade 7 - L7..L9 */
  { subject:'history', grade:7, level:15, type:'mc',    q:'The Berlin Wall fell in', choices:['1987','1989','1991','1993'], a:'1989', e:'The Wall opened on November 9, 1989.' },
  { subject:'history', grade:7, level:15, type:'guess', q:'The period of art and learning after the Middle Ages.', a:'Renaissance', e:'The Renaissance (14th-17th c.) revived classical art, science, and learning.' },
  { subject:'history', grade:7, level:16, type:'fib',   q:'The US Civil War ended in the year ____.', a:'1865', e:'General Lee surrendered at Appomattox on April 9, 1865.' },
  { subject:'history', grade:7, level:16, type:'mc',    q:'Who was the British PM during WWII?', choices:['Attlee','Chamberlain','Churchill','Blair'], a:'Churchill', e:'Winston Churchill became PM in May 1940.' },
  { subject:'history', grade:7, level:17, type:'guess', q:'The empire founded by Genghis Khan.', a:'Mongol', e:'The Mongol Empire (1206-1368) was the largest contiguous land empire in history.' },
  { subject:'history', grade:7, level:17, type:'mc',    q:'Which war was fought 1914-1918?', choices:['Civil War','WWI','WWII','Cold War'], a:'WWI', e:'World War I lasted July 1914 to November 1918.' },

  /* Grade 8 - L10..L12 (new content) */
  { subject:'history', grade:8, level:18, type:'mc',    q:'Which river was the cradle of ancient Egyptian civilization?', choices:['Tigris','Nile','Indus','Yangtze'], a:'Nile', e:'The Nile\'s yearly flooding made farming possible along its banks.' },
  { subject:'history', grade:8, level:18, type:'guess', q:'The ancient civilization between the Tigris and Euphrates rivers.', a:'Mesopotamia', e:'Mesopotamia ("land between rivers") is often called the cradle of civilization.' },
  { subject:'history', grade:8, level:18, type:'fib',   q:'The Great Wall of China was mainly built to keep out invaders from the ____.', a:'north', e:'Northern nomads like the Mongols were the main threat.' },
  { subject:'history', grade:8, level:19, type:'mc',    q:'The Roman Empire fell in AD', choices:['196','476','1066','1215'], a:'476', e:'The Western Roman Empire fell in 476 when Rome was overthrown by Odoacer.' },
  { subject:'history', grade:8, level:19, type:'guess', q:'The plague that killed a third of Europe in the 1300s.', a:'Black Death', e:'The Black Death (bubonic plague) killed 25-50 million people in Europe.' },
  { subject:'history', grade:8, level:19, type:'fib',   q:'Feudal Europe\'s social system tied peasants (serfs) to a piece of ____.', a:'land', e:'Serfs worked their lord\'s land in exchange for protection and a plot to farm.' },
  { subject:'history', grade:8, level:20, type:'mc',    q:'Who led the Protestant Reformation in 1517?', choices:['Martin Luther','King Henry','John Calvin','Thomas More'], a:'Martin Luther', e:'Martin Luther nailed his 95 Theses to a church door in Wittenberg.' },
  { subject:'history', grade:8, level:20, type:'guess', q:'The route named after a valuable trade good linking China to Europe.', a:'Silk Road', e:'The Silk Road carried silk, spices, and ideas between Asia and Europe for centuries.' },
  { subject:'history', grade:8, level:20, type:'fib',   q:'The Industrial Revolution began in ____ (country).', a:'Britain', e:'The Industrial Revolution started in Britain in the mid-1700s with textile machinery and steam power.' },

  /* Grade 9 - L13..L14 */
  { subject:'history', grade:9, level:21, type:'mc',    q:'The French Revolution began in', choices:['1776','1789','1804','1815'], a:'1789', e:'The Bastille was stormed on July 14, 1789.' },
  { subject:'history', grade:9, level:21, type:'guess', q:'The economic system Karl Marx criticized.', a:'capitalism', e:'Marx and Engels critiqued capitalism in Das Kapital and The Communist Manifesto.' },
  { subject:'history', grade:9, level:22, type:'fib',   q:'The Cold War ended in ____ (year).', a:'1991', e:'The Soviet Union dissolved on December 26, 1991.' },
  { subject:'history', grade:9, level:22, type:'mc',    q:'Which US president issued the Emancipation Proclamation?', choices:['Grant','Lincoln','Jefferson','Jackson'], a:'Lincoln', e:'Lincoln issued it on January 1, 1863.' },

  /* Grade 10 - L15..L16 */
  { subject:'history', grade:10, level:23, type:'guess', q:'The alliance system that led to WWI included this German-led group.', a:'Central Powers', e:'Germany, Austria-Hungary, Ottoman Empire, and Bulgaria.' },
  { subject:'history', grade:10, level:23, type:'fib',   q:'The atomic bomb was dropped on Hiroshima in ____ (year).', a:'1945', e:'August 6, 1945; Nagasaki was hit three days later.' },
  { subject:'history', grade:10, level:24, type:'mc',    q:'The Magna Carta was signed in', choices:['1066','1215','1492','1607'], a:'1215', e:'King John signed it in 1215, limiting royal power.' },
  { subject:'history', grade:10, level:24, type:'guess', q:'The 1929 event that started the Great Depression.', a:'stock market crash', e:'The Wall Street Crash of October 1929 triggered the Depression.' },

  /* Grade 11 - L17..L18 */
  { subject:'history', grade:11, level:25, type:'fib',   q:'Nelson Mandela was president of ____.', a:'South Africa', e:'Mandela became South Africa\'s first Black president in 1994.' },
  { subject:'history', grade:11, level:25, type:'mc',    q:'The Ottoman Empire fell after', choices:['WWI','WWII','Cold War','French Revolution'], a:'WWI', e:'The Ottoman Empire fell after WWI; Turkey became a republic in 1923.' },
  { subject:'history', grade:11, level:26, type:'guess', q:'The document that ended WWI and blamed Germany.', a:'Treaty of Versailles', e:'The 1919 Treaty of Versailles imposed harsh terms on Germany.' },
  { subject:'history', grade:11, level:26, type:'fib',   q:'The pharaoh whose tomb was found nearly intact in 1922 was ____.', a:'Tutankhamun', e:'Howard Carter discovered King Tut\'s tomb in the Valley of the Kings.' },

  /* Grade 12 - L19..L20 */
  { subject:'history', grade:12, level:27, type:'mc',    q:'The United Nations was founded in', choices:['1919','1939','1945','1955'], a:'1945', e:'The UN was founded on October 24, 1945 after WWII.' },
  { subject:'history', grade:12, level:27, type:'guess', q:'The Cold War standoff over missiles in the Caribbean in 1962.', a:'Cuban Missile Crisis', e:'The 13-day Cuban Missile Crisis was the closest the world came to nuclear war.' },
  { subject:'history', grade:12, level:28, type:'fib',   q:'The Roman general who crossed the Rubicon in 49 BC was Julius ____.', a:'Caesar', e:'"Crossing the Rubicon" now means passing a point of no return.' },
  { subject:'history', grade:12, level:28, type:'mc',    q:'Which document is considered the foundation of modern democracy?', choices:['Magna Carta','Ten Commandments','US Constitution','Napoleonic Code'], a:'US Constitution', e:'Ratified in 1788, the US Constitution established a modern representative democracy.' },

  /* ============================ GEOGRAPHY ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'geography', grade:5, level:9, type:'mc',    q:'How many continents are there?', choices:['5','6','7','8'], a:'7', e:'Africa, Antarctica, Asia, Australia/Oceania, Europe, N. America, S. America.' },
  { subject:'geography', grade:5, level:9, type:'fib',   q:'The capital of France is ____.', a:'Paris', e:'Paris has been the capital since the 10th century.' },
  { subject:'geography', grade:5, level:9, type:'guess', q:'The largest ocean on Earth.', a:'Pacific', e:'The Pacific covers about 63 million square miles.' },
  { subject:'geography', grade:5, level:10, type:'mc',    q:'Mount Everest is in', choices:['Andes','Alps','Himalayas','Rockies'], a:'Himalayas', e:'Everest (8,849 m) sits on the Nepal-Tibet border in the Himalayas.' },
  { subject:'geography', grade:5, level:10, type:'fib',   q:'The longest river in the world is the ____.', a:'Nile', e:'The Nile flows ~6,650 km north to the Mediterranean.' },
  { subject:'geography', grade:5, level:10, type:'guess', q:'The continent Egypt is in.', a:'Africa', e:'Egypt sits in northeastern Africa; Sinai extends into Asia.' },
  { subject:'geography', grade:5, level:11, type:'mc',    q:'Which is a desert?', choices:['Amazon','Sahara','Everglades','Congo'], a:'Sahara', e:'The Sahara is the largest hot desert; the Amazon and Congo are rainforests.' },
  { subject:'geography', grade:5, level:11, type:'fib',   q:'The capital of Japan is ____.', a:'Tokyo', e:'Tokyo (formerly Edo) has been Japan\'s capital since 1868.' },

  /* Grade 6 - L4..L6 */
  { subject:'geography', grade:6, level:12, type:'mc',    q:'Which country has the largest population?', choices:['USA','India','China','Russia'], a:'India', e:'India surpassed China as the most populous country in 2023.' },
  { subject:'geography', grade:6, level:12, type:'guess', q:'The imaginary line at 0 degrees latitude.', a:'equator', e:'The Equator divides Earth into Northern and Southern Hemispheres.' },
  { subject:'geography', grade:6, level:13, type:'fib',   q:'The capital of Australia is ____.', a:'Canberra', e:'Canberra was purpose-built in 1913 as a compromise between Sydney and Melbourne.' },
  { subject:'geography', grade:6, level:13, type:'mc',    q:'Which is NOT a Great Lake?', choices:['Erie','Superior','Michigan','Tahoe'], a:'Tahoe', e:'The Great Lakes are Superior, Michigan, Huron, Erie, Ontario (HOMES).' },
  { subject:'geography', grade:6, level:14, type:'guess', q:'The country shaped like a boot.', a:'Italy', e:'Italy\'s peninsula is famously shaped like a boot.' },
  { subject:'geography', grade:6, level:14, type:'fib',   q:'The Amazon River is in ____ (continent).', a:'South America', e:'The Amazon flows mostly through Brazil.' },
  { subject:'geography', grade:6, level:14, type:'mc',    q:'The capital of Canada is', choices:['Toronto','Vancouver','Ottawa','Montreal'], a:'Ottawa', e:'Ottawa was chosen as capital in 1857.' },

  /* Grade 7 - L7..L9 */
  { subject:'geography', grade:7, level:15, type:'mc',    q:'Which strait separates Europe and Africa?', choices:['Bering','Gibraltar','Bosphorus','Malacca'], a:'Gibraltar', e:'The Strait of Gibraltar (13 km at narrowest) separates Spain from Morocco.' },
  { subject:'geography', grade:7, level:15, type:'guess', q:'The largest country by land area.', a:'Russia', e:'Russia covers ~17 million sq km across 11 time zones.' },
  { subject:'geography', grade:7, level:16, type:'fib',   q:'The capital of Egypt is ____.', a:'Cairo', e:'Cairo (Al-Qahirah) is the largest city in the Arab world.' },
  { subject:'geography', grade:7, level:16, type:'mc',    q:'Which river runs through Paris?', choices:['Thames','Rhine','Seine','Danube'], a:'Seine', e:'The Seine runs through Paris; the Thames flows through London.' },
  { subject:'geography', grade:7, level:17, type:'guess', q:'The mountain range along the west coast of South America.', a:'Andes', e:'The Andes stretch ~7,000 km, the longest continental range in the world.' },
  { subject:'geography', grade:7, level:17, type:'mc',    q:'Which country has the most time zones?', choices:['USA','China','Russia','France'], a:'France', e:'France has 12 time zones due to overseas territories worldwide.' },

  /* Grade 8 - L10..L12 (new content) */
  { subject:'geography', grade:8, level:18, type:'mc',    q:'Which continent has no permanent human population?', choices:['Australia','Antarctica','South America','Africa'], a:'Antarctica', e:'Antarctica has only research stations; no permanent residents due to extreme cold.' },
  { subject:'geography', grade:8, level:18, type:'guess', q:'A ring of high pressure and low winds near the equator.', a:'doldrums', e:'The doldrums frustrated sailing ships because of the lack of consistent wind.' },
  { subject:'geography', grade:8, level:18, type:'fib',   q:'A large flat landform is a ____.', a:'plateau', e:'A plateau is a flat elevated area, often bounded by cliffs.' },
  { subject:'geography', grade:8, level:19, type:'mc',    q:'Which of these is a tectonic plate?', choices:['Pacific','Atlantic','Arctic','Indian Ocean'], a:'Pacific', e:'The Pacific Plate is the largest oceanic plate.' },
  { subject:'geography', grade:8, level:19, type:'guess', q:'A river that flows into a larger river.', a:'tributary', e:'Tributaries feed into a main river; the opposite (branch outward) is a distributary.' },
  { subject:'geography', grade:8, level:19, type:'fib',   q:'The top of a mountain is called the ____.', a:'peak', e:'Peak, summit, or crest all name a mountain\'s highest point.' },
  { subject:'geography', grade:8, level:20, type:'mc',    q:'Which climate is hot and wet year-round?', choices:['tundra','tropical rainforest','desert','Mediterranean'], a:'tropical rainforest', e:'Tropical rainforests near the equator get heavy rain and stay warm all year.' },
  { subject:'geography', grade:8, level:20, type:'guess', q:'The natural process by which rocks are broken down.', a:'weathering', e:'Weathering breaks rocks in place; erosion carries them away.' },
  { subject:'geography', grade:8, level:20, type:'fib',   q:'Land forms shaped by moving ice are called ____.', a:'glacial', e:'Glacial landforms include U-shaped valleys, moraines, and fjords.' },

  /* Grade 9 - L13..L14 */
  { subject:'geography', grade:9, level:21, type:'mc',    q:'The capital of Brazil is', choices:['Rio','Sao Paulo','Brasilia','Salvador'], a:'Brasilia', e:'Brasilia became capital in 1960, built inland to promote development.' },
  { subject:'geography', grade:9, level:21, type:'guess', q:'The narrow waterway separating Alaska from Russia.', a:'Bering Strait', e:'The Bering Strait is ~85 km wide and links the Pacific and Arctic Oceans.' },
  { subject:'geography', grade:9, level:22, type:'fib',   q:'The tallest mountain in Africa is Mount ____.', a:'Kilimanjaro', e:'Kilimanjaro (5,895 m) is a dormant volcano in Tanzania.' },
  { subject:'geography', grade:9, level:22, type:'mc',    q:'Which country is landlocked?', choices:['Portugal','Switzerland','Vietnam','Chile'], a:'Switzerland', e:'Switzerland is surrounded by France, Germany, Austria, Italy, Liechtenstein.' },

  /* Grade 10 - L15..L16 */
  { subject:'geography', grade:10, level:23, type:'guess', q:'The line at 180 degrees longitude where the day changes.', a:'International Date Line', e:'Crossing the date line westward adds a day; eastward subtracts one.' },
  { subject:'geography', grade:10, level:23, type:'fib',   q:'The smallest country in the world is ____ City.', a:'Vatican', e:'Vatican City (~0.44 sq km) is inside Rome.' },
  { subject:'geography', grade:10, level:24, type:'mc',    q:'The Ring of Fire is associated with', choices:['deserts','earthquakes','glaciers','tundras'], a:'earthquakes', e:'The Ring of Fire hosts 75% of the world\'s volcanoes and 90% of earthquakes.' },
  { subject:'geography', grade:10, level:24, type:'guess', q:'The deepest ocean trench.', a:'Mariana Trench', e:'The Mariana Trench reaches ~11,000 m at Challenger Deep.' },

  /* Grade 11 - L17..L18 */
  { subject:'geography', grade:11, level:25, type:'fib',   q:'The capital of Kazakhstan is ____.', a:'Astana', e:'Astana became capital in 1997, replacing Almaty.' },
  { subject:'geography', grade:11, level:25, type:'mc',    q:'Which river is the longest in Asia?', choices:['Ganges','Mekong','Yangtze','Indus'], a:'Yangtze', e:'The Yangtze (~6,300 km) is the third-longest river in the world.' },
  { subject:'geography', grade:11, level:26, type:'guess', q:'The imaginary lines running north-south on a map.', a:'longitude', e:'Longitude runs pole to pole; latitude runs east-west.' },
  { subject:'geography', grade:11, level:26, type:'fib',   q:'The capital of Iceland is ____.', a:'Reykjavik', e:'Reykjavik is the northernmost capital of a sovereign state.' },

  /* Grade 12 - L19..L20 */
  { subject:'geography', grade:12, level:27, type:'mc',    q:'Which sea is the saltiest?', choices:['Mediterranean','Dead','Red','Caspian'], a:'Dead', e:'The Dead Sea has ~34% salinity, 10x saltier than the ocean.' },
  { subject:'geography', grade:12, level:27, type:'guess', q:'The scientific term for the study of maps.', a:'cartography', e:'Cartography combines geography, art, and science to design maps.' },
  { subject:'geography', grade:12, level:28, type:'fib',   q:'The world\'s largest hot desert is the ____ Desert.', a:'Sahara', e:'The Sahara covers ~9 million sq km across North Africa.' },
  { subject:'geography', grade:12, level:28, type:'mc',    q:'A group of islands is called an', choices:['isthmus','atoll','archipelago','peninsula'], a:'archipelago', e:'Archipelago = a chain or cluster of islands (e.g., the Philippines).' },

  /* ============================ ARALING PANLIPUNAN (Tagalog) ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'araling', grade:5, level:9, type:'mc',    q:'Sino ang pambansang bayani ng Pilipinas?', choices:['Andres Bonifacio','Jose Rizal','Emilio Aguinaldo','Apolinario Mabini'], a:'Jose Rizal', e:'Si Dr. Jose Rizal ang kinilalang pambansang bayani dahil sa kanyang mga akda.' },
  { subject:'araling', grade:5, level:9, type:'fib',   q:'Ang pambansang bulaklak ng Pilipinas ay ____.', a:'sampaguita', e:'Ang sampaguita ay itinalagang pambansang bulaklak noong 1934.' },
  { subject:'araling', grade:5, level:9, type:'guess', q:'Ang pinakamalaking isla ng Pilipinas.', a:'Luzon', e:'Ang Luzon ang pinakamalaki; kinaroroonan ng Maynila.' },
  { subject:'araling', grade:5, level:10, type:'mc',    q:'Kailan ang Araw ng Kalayaan ng Pilipinas?', choices:['Hunyo 12','Hulyo 4','Agosto 21','Nobyembre 30'], a:'Hunyo 12', e:'Ipinahayag ni Aguinaldo ang kalayaan noong Hunyo 12, 1898 sa Kawit, Cavite.' },
  { subject:'araling', grade:5, level:10, type:'fib',   q:'Ang kabisera ng Pilipinas ay ____.', a:'Manila', e:'Ang Maynila (Manila) ay ang opisyal na kabisera.' },
  { subject:'araling', grade:5, level:11, type:'guess', q:'Ang pambansang ibon ng Pilipinas.', a:'agila', e:'Ang Philippine Eagle o Haribon ay ang pambansang ibon.' },
  { subject:'araling', grade:5, level:11, type:'mc',    q:'Ilang pangunahing pangkat ng isla ang Pilipinas?', choices:['3','7','3 pangkat','7,641'], a:'3 pangkat', e:'Luzon, Visayas, at Mindanao ang tatlong pangunahing pangkat ng isla.' },

  /* Grade 6 - L4..L6 */
  { subject:'araling', grade:6, level:12, type:'mc',    q:'Sino ang unang pangulo ng Pilipinas?', choices:['Manuel Quezon','Jose Laurel','Emilio Aguinaldo','Manuel Roxas'], a:'Emilio Aguinaldo', e:'Si Aguinaldo ang unang pangulo sa ilalim ng Republikang Malolos noong 1899.' },
  { subject:'araling', grade:6, level:12, type:'guess', q:'Ang taon na dumating si Ferdinand Magellan sa Pilipinas.', a:'1521', e:'Dumaong si Magellan sa Homonhon noong Marso 16, 1521.' },
  { subject:'araling', grade:6, level:13, type:'fib',   q:'Si ____ ang bayaning nanalo laban kay Magellan sa Mactan.', a:'Lapu-Lapu', e:'Si Lapu-Lapu, datu ng Mactan, ang tumalo kay Magellan noong Abril 27, 1521.' },
  { subject:'araling', grade:6, level:13, type:'mc',    q:'Ilang rehiyon meron ang Pilipinas?', choices:['15','17','18','20'], a:'17', e:'Ang Pilipinas ay hinati sa 17 rehiyon, kabilang ang NCR, CAR, at BARMM.' },
  { subject:'araling', grade:6, level:14, type:'guess', q:'Ang pambansang wika ng Pilipinas.', a:'Filipino', e:'Ang Filipino, na batay sa Tagalog, ang pambansang wika.' },
  { subject:'araling', grade:6, level:14, type:'fib',   q:'Ang unang aklat ni Rizal ay pinamagatang Noli Me ____.', a:'Tangere', e:'"Noli Me Tangere" (1887) ay nagsiwalat ng abuso ng mga prayle.' },
  { subject:'araling', grade:6, level:14, type:'mc',    q:'Alin ang pinakamataas na bundok sa Pilipinas?', choices:['Mayon','Apo','Pulag','Pinatubo'], a:'Apo', e:'Ang Mount Apo (2,954 m) sa Davao ang pinakamataas na bundok.' },

  /* Grade 7 - L7..L9 */
  { subject:'araling', grade:7, level:15, type:'mc',    q:'Sino ang tinaguriang "Ama ng Rebolusyong Pilipino"?', choices:['Jose Rizal','Andres Bonifacio','Apolinario Mabini','Marcelo del Pilar'], a:'Andres Bonifacio', e:'Si Bonifacio ang nagtatag ng Katipunan noong 1892.' },
  { subject:'araling', grade:7, level:15, type:'guess', q:'Ang lihim na samahang binuo ni Andres Bonifacio.', a:'Katipunan', e:'Itinatag ang KKK noong Hulyo 7, 1892 sa Tondo.' },
  { subject:'araling', grade:7, level:16, type:'fib',   q:'Ang lugar kung saan binaril si Rizal, ngayon ay ____ Park.', a:'Rizal', e:'Binaril si Rizal sa Bagumbayan (Luneta/Rizal Park) noong Disyembre 30, 1896.' },
  { subject:'araling', grade:7, level:16, type:'mc',    q:'Sino ang tinaguriang "Utak ng Rebolusyon"?', choices:['Bonifacio','Mabini','Rizal','Aguinaldo'], a:'Mabini', e:'Si Apolinario Mabini, "Dakilang Lumpo", ang matalinong utak ng rebolusyon.' },
  { subject:'araling', grade:7, level:17, type:'guess', q:'Ang pangalan ng rebolusyong pumatalsik kay Marcos noong 1986.', a:'EDSA', e:'Ang EDSA People Power (Peb. 22-25, 1986) ay walang-dugong pagpapatalsik.' },
  { subject:'araling', grade:7, level:17, type:'fib',   q:'Ang pinakamalaking lawa sa Pilipinas ay Lawa ng ____.', a:'Laguna', e:'Laguna de Bay: 949 sq km, pinakamalaking lawa sa Pilipinas.' },

  /* Grade 8 - L10..L12 (Asya / new content) */
  { subject:'araling', grade:8, level:18, type:'mc',    q:'Aling ilog ang pinakamahalaga sa kabihasnang Tsino?', choices:['Ganges','Yangtze','Mekong','Indus'], a:'Yangtze', e:'Ang Yangtze at Yellow River (Huang He) ang pinakamahalaga sa sinaunang Tsina.' },
  { subject:'araling', grade:8, level:18, type:'guess', q:'Ang pinakamalaking kontinente sa mundo.', a:'Asya', e:'Ang Asya ang pinakamalaki sa laki at populasyon.' },
  { subject:'araling', grade:8, level:18, type:'fib',   q:'Ang tinaguriang "Bubong ng Mundo" ay ang bulubunduking ____.', a:'Himalaya', e:'Nasa Himalayas ang Mount Everest, tinaguriang "Bubong ng Mundo".' },
  { subject:'araling', grade:8, level:19, type:'mc',    q:'Sino ang nagtatag ng relihiyong Islam?', choices:['Buddha','Confucius','Muhammad','Jesus'], a:'Muhammad', e:'Si Propeta Muhammad ang nagtatag ng Islam noong ika-7 dantaon.' },
  { subject:'araling', grade:8, level:19, type:'guess', q:'Ang sistema ng pagkakastilo ng lipunan sa India.', a:'caste', e:'Ang caste system ay panlipunang hirarkiya sa India batay sa relihiyon at tradisyon.' },
  { subject:'araling', grade:8, level:20, type:'fib',   q:'Ang unang bansang Europeo na nakarating sa Asya sa pamamagitan ng ruta sa dagat ay ang ____.', a:'Portugal', e:'Si Vasco da Gama ng Portugal ay unang nakarating sa India sa dagat noong 1498.' },
  { subject:'araling', grade:8, level:20, type:'mc',    q:'Alin ang bansang hindi nakolonya sa Timog-Silangang Asya?', choices:['Vietnam','Thailand','Indonesia','Philippines'], a:'Thailand', e:'Ang Thailand (Siam) ang natatanging bansa sa TS-Asya na hindi nakolonya ng mga Europeo.' },

  /* Grade 9 - L13..L14 */
  { subject:'araling', grade:9, level:21, type:'mc',    q:'Aling bansa ang naghahari sa Pilipinas mula 1898 hanggang 1946?', choices:['Espanya','Estados Unidos','Hapon','Britanya'], a:'Estados Unidos', e:'Sa Kasunduan sa Paris (1898), inilipat ng Espanya ang Pilipinas sa Amerika.' },
  { subject:'araling', grade:9, level:21, type:'guess', q:'Ang tatlong sangay ng gobyerno: Ehekutibo, Lehislatibo, at ito.', a:'Hudikatura', e:'Ehekutibo (Pangulo), Lehislatibo (Kongreso), Hudikatura (Korte Suprema).' },
  { subject:'araling', grade:9, level:22, type:'mc',    q:'Anong sistema ng gobyerno ang Pilipinas?', choices:['Monarkiya','Presidensyal','Parlamentaryo','Pederal'], a:'Presidensyal', e:'Ang Pangulo ay pinuno ng estado at pinuno ng pamahalaan, hinahalal ng bayan.' },
  { subject:'araling', grade:9, level:22, type:'fib',   q:'Ilan ang senador sa Senado ng Pilipinas?', a:'24', e:'24 senador; bawat isa ay 6 na taon; kalahati ay hinahalal bawat 3 taon.' },

  /* Grade 10 - L15..L16 */
  { subject:'araling', grade:10, level:23, type:'mc',    q:'Sino ang unang babaeng pangulo ng Pilipinas?', choices:['Gloria Arroyo','Miriam Santiago','Corazon Aquino','Leni Robredo'], a:'Corazon Aquino', e:'Si Cory Aquino ay Pangulo mula 1986 hanggang 1992.' },
  { subject:'araling', grade:10, level:23, type:'guess', q:'Ang pinakamahalagang batas na inilalatag ang balangkas ng pamahalaan.', a:'Konstitusyon', e:'Ang 1987 Konstitusyon ang kasalukuyang saligang batas.' },
  { subject:'araling', grade:10, level:24, type:'fib',   q:'Ang kasunduan ng 1898 na naglipat ng Pilipinas sa Amerika ay Kasunduan sa ____.', a:'Paris', e:'Ang Kasunduan sa Paris ay tumapos sa Digmaang Espanyol-Amerikano.' },
  { subject:'araling', grade:10, level:24, type:'guess', q:'Ang buwis na binabayaran ng mga negosyo at manggagawa sa gobyerno.', a:'buwis', e:'Ang buwis (tax) ay pangunahing pinagmumulan ng kita ng pamahalaan para sa mga serbisyo publiko.' },

  /* Grade 11 - L17..L18 */
  { subject:'araling', grade:11, level:25, type:'mc',    q:'Aling batas ang nagbigay ng kalayaan sa Pilipinas mula sa Amerika?', choices:['Jones Law','Tydings-McDuffie Act','Bell Trade Act','Manila Pact'], a:'Tydings-McDuffie Act', e:'Ang Tydings-McDuffie Act (1934) ay nagtakda ng 10-taong transisyon patungo sa kalayaan.' },
  { subject:'araling', grade:11, level:25, type:'guess', q:'Ang kilusang nakikibaka para sa reporma mula sa Espanya sa pamamagitan ng pahayagan.', a:'Propaganda Movement', e:'Nila Rizal, del Pilar, at Lopez Jaena; ginamit ang La Solidaridad.' },
  { subject:'araling', grade:11, level:26, type:'fib',   q:'Ang batas na nagtatag sa BARMM ay tinatawag na ____ Basic Law.', a:'Bangsamoro', e:'RA 11054 (2018) ang nagtatag sa Bangsamoro Autonomous Region.' },
  { subject:'araling', grade:11, level:26, type:'mc',    q:'Alin ang unang republikang itinatag sa Asya?', choices:['Japan','China','Republikang Malolos','India'], a:'Republikang Malolos', e:'Ang Republikang Malolos (1899) ang unang demokratikong republika sa Asya.' },

  /* Grade 12 - L19..L20 */
  { subject:'araling', grade:12, level:27, type:'guess', q:'Ang pandaigdigang samahan pagkatapos ng WWII na miyembro ang Pilipinas.', a:'United Nations', e:'Ang Pilipinas ay isa sa 51 orihinal na miyembro ng UN noong 1945.' },
  { subject:'araling', grade:12, level:27, type:'fib',   q:'Ang unang Pinoy na Pangulo ng UN General Assembly ay ____ Romulo.', a:'Carlos', e:'Si Carlos P. Romulo ay pinili noong 1949, unang Asyano sa posisyon.' },
  { subject:'araling', grade:12, level:28, type:'mc',    q:'Alin ang pandaigdigang samahan sa kalakalan na kasapi ang Pilipinas?', choices:['NATO','ASEAN','EU','G7'], a:'ASEAN', e:'Ang Pilipinas ay founding member ng ASEAN (Association of Southeast Asian Nations) noong 1967.' },
  { subject:'araling', grade:12, level:28, type:'guess', q:'Ang teritoryong pinag-aagawan ng Pilipinas, Tsina, at iba pang bansa.', a:'West Philippine Sea', e:'Kilala rin bilang South China Sea; may kasangkot na hindi pagkakasundo sa mga isla at karagatan.' },

  /* ============================ FILIPINO (Tagalog) ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'filipino', grade:5, level:9, type:'mc',    q:'Alin sa mga sumusunod ang pangngalan?', choices:['tumakbo','maganda','mansanas','mabilis'], a:'mansanas', e:'Ang pangngalan ay pangalan ng tao, bagay, lugar, o pangyayari.' },
  { subject:'filipino', grade:5, level:9, type:'fib',   q:'Ang salitang tumutukoy sa kilos o galaw ay tinatawag na ____.', a:'pandiwa', e:'Ang pandiwa ay bahagi ng pananalita na nagsasabi ng aksyon.' },
  { subject:'filipino', grade:5, level:9, type:'guess', q:'Ang salitang naglalarawan ng pangngalan.', a:'pang-uri', e:'Ang pang-uri ay naglalarawan sa pangngalan (mabait, malaki, maganda).' },
  { subject:'filipino', grade:5, level:10, type:'mc',    q:'Ano ang kabaligtaran ng "maliit"?', choices:['maganda','mabait','malaki','mahaba'], a:'malaki', e:'Kasalungat (antonym) ang tawag sa may kabaligtarang kahulugan.' },
  { subject:'filipino', grade:5, level:10, type:'fib',   q:'Ang pambansang alay sa mga Pilipino ay ang Pambansang ____.', a:'Awit', e:'"Lupang Hinirang" ang pambansang awit ng Pilipinas.' },
  { subject:'filipino', grade:5, level:11, type:'guess', q:'Salita na katunog o may parehong tunog sa dulo.', a:'tugma', e:'Ang tugma ay ginagamit sa tula at kanta.' },
  { subject:'filipino', grade:5, level:11, type:'mc',    q:'Alin sa mga sumusunod ay panghalip?', choices:['bahay','ako','malaki','tumakbo'], a:'ako', e:'"Ako", "ikaw", "siya" ay mga panghalip panao.' },

  /* Grade 6 - L4..L6 */
  { subject:'filipino', grade:6, level:12, type:'mc',    q:'Ilan ang bahagi ng pananalita sa Filipino?', choices:['6','7','8','9'], a:'8', e:'Walo: pangngalan, panghalip, pandiwa, pang-uri, pang-abay, pang-ukol, pangatnig, pandamdam.' },
  { subject:'filipino', grade:6, level:12, type:'guess', q:'Ang tawag sa dalawang salita na pinagsama para bumuo ng bagong salita.', a:'tambalan', e:'Halimbawa: "silid-tulugan", "bahay-aliwan".' },
  { subject:'filipino', grade:6, level:13, type:'fib',   q:'Ang isang linya ng tula ay tinatawag na ____.', a:'taludtod', e:'Pangkat ng mga taludtod: saknong.' },
  { subject:'filipino', grade:6, level:13, type:'mc',    q:'Alin ang tamang paggamit ng "ng" at "nang"?', choices:['Kumain ng adobo. Umuwi nang maaga.','Kumain nang adobo. Umuwi ng maaga.','Kumain ng adobo. Umuwi ng maaga.','Kumain nang adobo. Umuwi nang maaga.'], a:'Kumain ng adobo. Umuwi nang maaga.', e:'"Ng" ay para sa pangngalan; "nang" ay para sa pandiwa/pang-abay.' },
  { subject:'filipino', grade:6, level:14, type:'guess', q:'Ang bahagi ng pananalita na nagpapahayag ng damdamin.', a:'pandamdam', e:'Halimbawa: "Aba!", "Naku!", "Aray!".' },
  { subject:'filipino', grade:6, level:14, type:'fib',   q:'Ang salaysay ng buhay ng isang tao na sinulat niya mismo ay ____.', a:'talambuhay', e:'Sariling talambuhay (autobiograpiya) ay isinulat ng tao mismo.' },
  { subject:'filipino', grade:6, level:14, type:'mc',    q:'Alin ang pangatnig?', choices:['at','ako','maganda','bahay'], a:'at', e:'Ang pangatnig ay nag-uugnay ng salita/parirala: at, ngunit, o, kung.' },

  /* Grade 7 - L7..L9 */
  { subject:'filipino', grade:7, level:15, type:'mc',    q:'Sino ang sumulat ng "Noli Me Tangere"?', choices:['Andres Bonifacio','Jose Rizal','Francisco Balagtas','Amado Hernandez'], a:'Jose Rizal', e:'Isinulat ni Rizal ang Noli noong 1887 sa Berlin, Germany.' },
  { subject:'filipino', grade:7, level:15, type:'guess', q:'Tayutay na naghahambing gamit ang "parang" o "tulad ng".', a:'pagtutulad', e:'Simile sa Filipino: "Mabait siya parang santo".' },
  { subject:'filipino', grade:7, level:16, type:'fib',   q:'Ang tayutay na nagbibigay ng katangian ng tao sa bagay o hayop ay ____.', a:'pagbibigay-katauhan', e:'Personipikasyon: "Kumaway ang mga puno".' },
  { subject:'filipino', grade:7, level:16, type:'mc',    q:'Sino ang tinaguriang "Prinsipe ng Makatang Tagalog"?', choices:['Jose Rizal','Amado Hernandez','Francisco Balagtas','Lope K. Santos'], a:'Francisco Balagtas', e:'Sikat siya sa obra maestra na "Florante at Laura".' },
  { subject:'filipino', grade:7, level:17, type:'guess', q:'Ang tawag sa maikling kuwento na nagtuturo ng aral, may hayop na tauhan.', a:'pabula', e:'Ang pabula ay parang fable sa English.' },
  { subject:'filipino', grade:7, level:17, type:'fib',   q:'Ang unang pambansang epiko ng Pilipinas ay ang ____.', a:'Ibalon', e:'Ang Ibalon ng Bicol ay tungkol sa Baltog, Handyong, at Bantong.' },

  /* Grade 8 - L10..L12 (Panitikang Asyano) */
  { subject:'filipino', grade:8, level:18, type:'mc',    q:'Sa aling bansa nagmula ang haiku?', choices:['Tsina','Korea','Japan','Vietnam'], a:'Japan', e:'Ang haiku ay Japanese poetry na may 5-7-5 na pantig sa 3 linya.' },
  { subject:'filipino', grade:8, level:18, type:'guess', q:'Ang pambansang panitikan ng India, may 24,000 taludtod na epiko.', a:'Ramayana', e:'Ang Ramayana ay tungkol kay Rama at Sita, isinulat ni Valmiki.' },
  { subject:'filipino', grade:8, level:19, type:'fib',   q:'Ang haiku ay may ____-7-5 na pantig sa bawat linya.', a:'5', e:'Ang haiku ay 3-linyang tula na may 5-7-5 na pantig.' },
  { subject:'filipino', grade:8, level:19, type:'mc',    q:'Aling epiko ang tungkol sa mga digmaan ng India?', choices:['Ramayana','Mahabharata','Iliad','Gilgamesh'], a:'Mahabharata', e:'Ang Mahabharata ay pinakamahabang epiko sa mundo; naglalaman ng Bhagavad Gita.' },
  { subject:'filipino', grade:8, level:20, type:'guess', q:'Ang pinakamatandang epiko sa mundo, mula sa Mesopotamia.', a:'Gilgamesh', e:'Ang Epiko ni Gilgamesh ay sinulat sa cuneiform, ~2100 BCE.' },
  { subject:'filipino', grade:8, level:20, type:'fib',   q:'Ang isang tradisyunal na tulang Tsino na maikli at may malalalim na kahulugan ay tinatawag na ____.', a:'shi', e:'Ang shi ay klasikal na Chinese poetry; mayroong iba\'t ibang anyo.' },

  /* Grade 9 - L13..L14 */
  { subject:'filipino', grade:9, level:21, type:'mc',    q:'Alin ang epikong Ilokano?', choices:['Biag ni Lam-ang','Hinilawod','Ibalon','Darangen'], a:'Biag ni Lam-ang', e:'Ang "Biag ni Lam-ang" ay epiko ng mga Ilokano.' },
  { subject:'filipino', grade:9, level:21, type:'guess', q:'Ang tayutay na nagpapalabis para sa diin.', a:'pagmamalabis', e:'Hyperbole: "Mamamatay ako sa gutom!" - hindi literal.' },
  { subject:'filipino', grade:9, level:22, type:'fib',   q:'Ang sequel ni Rizal sa Noli Me Tangere ay ang ____.', a:'El Filibusterismo', e:'"El Filibusterismo" (1891) ay pangalawang nobela, mas rebolusyonaryo.' },
  { subject:'filipino', grade:9, level:22, type:'mc',    q:'Ano ang ibig sabihin ng "salawikain"?', choices:['tugma','tula','kasabihan','alamat'], a:'kasabihan', e:'Ang salawikain (proverb) ay maikling kasabihan na naglalaman ng aral.' },

  /* Grade 10 - L15..L16 */
  { subject:'filipino', grade:10, level:23, type:'mc',    q:'Sino ang sumulat ng "Florante at Laura"?', choices:['Balagtas','Rizal','Bonifacio','Hernandez'], a:'Balagtas', e:'"Florante at Laura" (1838) ay isinulat ni Francisco Balagtas.' },
  { subject:'filipino', grade:10, level:23, type:'guess', q:'Ang panitikang nagsasalaysay ng pinagmulan ng lugar o bagay.', a:'alamat', e:'Halimbawa: alamat ng pinya, alamat ng bulkang Mayon.' },
  { subject:'filipino', grade:10, level:24, type:'fib',   q:'Ang tauhang kalaban ng pangunahing tauhan ay tinatawag na ____.', a:'kontrabida', e:'Bida (protagonist) vs. kontrabida (antagonist).' },
  { subject:'filipino', grade:10, level:24, type:'mc',    q:'Aling anyo ng panitikan ay may 3 saknong at 4 na linya bawat isa?', choices:['tanaga','dalit','ambahan','diona'], a:'tanaga', e:'Ang tanaga ay 4-linya sa isang saknong na may 7-7-7-7 na pantig; may aral.' },

  /* Grade 11 - L17..L18 */
  { subject:'filipino', grade:11, level:25, type:'mc',    q:'Sino ang tinaguriang "Ama ng Balarilang Tagalog"?', choices:['Jose Rizal','Lope K. Santos','Balagtas','Bienvenido Lumbera'], a:'Lope K. Santos', e:'Sumulat ng "Balarila ng Wikang Pambansa" (1940).' },
  { subject:'filipino', grade:11, level:25, type:'guess', q:'Ang matandang alpabetong Filipino bago dumating ang mga Espanyol.', a:'baybayin', e:'Ang Baybayin ay sinaunang sistema ng pagsulat mula sa 1200s.' },
  { subject:'filipino', grade:11, level:26, type:'fib',   q:'Ang unang nobelang Filipino ay Ninay, sinulat ni Pedro ____.', a:'Paterno', e:'Sinulat ni Pedro Paterno ang "Ninay" (1885).' },
  { subject:'filipino', grade:11, level:26, type:'mc',    q:'Aling akda ni Rizal ay naglalarawan ng edukasyong Pilipino?', choices:['Mi Ultimo Adios','A la Juventud Filipina','Noli Me Tangere','El Filibusterismo'], a:'A la Juventud Filipina', e:'Isinulat noong 1879, hinihikayat ang kabataang Pilipino sa edukasyon.' },

  /* Grade 12 - L19..L20 */
  { subject:'filipino', grade:12, level:27, type:'guess', q:'Ang huling tula na isinulat ni Rizal bago siya binaril.', a:'Mi Ultimo Adios', e:'Isinulat sa bisperas ng kanyang bitay noong Disyembre 29, 1896.' },
  { subject:'filipino', grade:12, level:27, type:'fib',   q:'Ang unang Pambansang Alagad ng Sining sa panitikan ay si Amado ____.', a:'Hernandez', e:'National Artist for Literature noong 1973; "Mga Ibong Mandaragit".' },
  { subject:'filipino', grade:12, level:28, type:'mc',    q:'Aling akdang Pilipino ang tumaboy sa mga tsismis at inggit sa kanayunan?', choices:['Banaag at Sikat','Mga Ibong Mandaragit','Luha ng Buwaya','Dekada 70'], a:'Luha ng Buwaya', e:'Sinulat ni Amado V. Hernandez tungkol sa pagsasamantala sa magsasaka.' },
  { subject:'filipino', grade:12, level:28, type:'guess', q:'Ang aklat ni Lualhati Bautista tungkol sa Batas Militar.', a:'Dekada 70', e:'"Dekada \'70" (1983) ay nobelang naglalarawan ng Martial Law period.' },

  /* ============================ MAPEH ============================ */
  /* Grade 5 - L1..L3 */
  { subject:'mapeh', grade:5, level:9, type:'mc',    q:'How many food groups are in "Go, Grow, Glow"?', choices:['2','3','4','5'], a:'3', e:'Go (energy), Grow (build muscles), Glow (protect body).' },
  { subject:'mapeh', grade:5, level:9, type:'fib',   q:'The Filipino dance where dancers step over bamboo poles is called ____.', a:'tinikling', e:'Tinikling imitates the tikling bird\'s movements.' },
  { subject:'mapeh', grade:5, level:9, type:'guess', q:'How many teeth does a healthy adult usually have?', a:'32', e:'32 permanent teeth including 4 wisdom teeth.' },
  { subject:'mapeh', grade:5, level:10, type:'mc',    q:'Which color is a primary color?', choices:['green','purple','red','orange'], a:'red', e:'Primary colors: red, blue, yellow.' },
  { subject:'mapeh', grade:5, level:10, type:'fib',   q:'A game with 5 players a side shooting into a hoop is ____.', a:'basketball', e:'Basketball is the most popular sport in the Philippines.' },
  { subject:'mapeh', grade:5, level:11, type:'guess', q:'The system in your body that pumps blood.', a:'circulatory', e:'Includes the heart, blood vessels, and blood.' },
  { subject:'mapeh', grade:5, level:11, type:'mc',    q:'Which is a Filipino folk song about a firefly?', choices:['Bahay Kubo','Leron Leron Sinta','Paruparong Bukid','Alitaptap'], a:'Alitaptap', e:'"Alitaptap" is a lullaby about a firefly.' },

  /* Grade 6 - L4..L6 */
  { subject:'mapeh', grade:6, level:12, type:'mc',    q:'Which nutrient gives the most energy per gram?', choices:['carbohydrates','protein','fats','vitamins'], a:'fats', e:'Fats: 9 cal/g. Carbs & proteins: 4 cal/g. Vitamins: 0.' },
  { subject:'mapeh', grade:6, level:12, type:'guess', q:'The Filipino painter of "Spoliarium".', a:'Juan Luna', e:'Luna won gold at the 1884 Madrid Exposition.' },
  { subject:'mapeh', grade:6, level:13, type:'fib',   q:'The music tempo term "allegro" means to play ____.', a:'fast', e:'Allegro: fast (120-168 bpm). Andante: walking pace.' },
  { subject:'mapeh', grade:6, level:13, type:'mc',    q:'How many players are on a volleyball team on the court?', choices:['5','6','7','9'], a:'6', e:'3 front row, 3 back row.' },
  { subject:'mapeh', grade:6, level:14, type:'guess', q:'The body\'s largest organ.', a:'skin', e:'The skin covers ~2 sq m in an adult.' },
  { subject:'mapeh', grade:6, level:14, type:'fib',   q:'The Filipino martial art with sticks is called ____.', a:'arnis', e:'Arnis (Eskrima/Kali) is the national martial art.' },
  { subject:'mapeh', grade:6, level:14, type:'mc',    q:'Which is NOT a wind instrument?', choices:['flute','trumpet','violin','clarinet'], a:'violin', e:'Violin is a string instrument played with a bow.' },

  /* Grade 7 - L7..L9 */
  { subject:'mapeh', grade:7, level:15, type:'mc',    q:'How many players on a soccer team on the field?', choices:['9','10','11','12'], a:'11', e:'1 goalkeeper + 10 outfield players.' },
  { subject:'mapeh', grade:7, level:15, type:'guess', q:'The three primary colors in painting.', a:'red yellow blue', e:'In pigments: red, yellow, blue. In light (RGB): red, green, blue.' },
  { subject:'mapeh', grade:7, level:16, type:'fib',   q:'BMI = weight / height ____.', a:'squared', e:'BMI = weight (kg) / height (m)^2.' },
  { subject:'mapeh', grade:7, level:16, type:'mc',    q:'The Filipino artist famous for rural sunlit scenes is', choices:['Fernando Amorsolo','Juan Luna','Vicente Manansala','Ang Kiukok'], a:'Fernando Amorsolo', e:'First National Artist, famous for dalagang bukid and farmers.' },
  { subject:'mapeh', grade:7, level:17, type:'guess', q:'The disease caused by lack of vitamin C.', a:'scurvy', e:'Scurvy was common among sailors; citrus fruits prevent it.' },
  { subject:'mapeh', grade:7, level:17, type:'fib',   q:'A note held for one full beat in 4/4 time is a ____ note.', a:'quarter', e:'4/4 time: whole=4, half=2, quarter=1, eighth=1/2.' },

  /* Grade 8 - L10..L12 (Music/Arts of Asia, adolescence health) */
  { subject:'mapeh', grade:8, level:18, type:'mc',    q:'The Indonesian ensemble made of percussion instruments is', choices:['gamelan','sitar','koto','gagaku'], a:'gamelan', e:'Gamelan music uses gongs and metallophones, from Java and Bali.' },
  { subject:'mapeh', grade:8, level:18, type:'guess', q:'The stringed instrument famous in Indian classical music.', a:'sitar', e:'The sitar has 18-21 strings; popularized worldwide by Ravi Shankar.' },
  { subject:'mapeh', grade:8, level:19, type:'fib',   q:'Japanese theater with masked actors and stylized movement is ____.', a:'Noh', e:'Noh theater dates from the 14th century; performers wear masks.' },
  { subject:'mapeh', grade:8, level:19, type:'mc',    q:'The traditional Chinese art of writing with a brush is', choices:['origami','ikebana','calligraphy','henna'], a:'calligraphy', e:'Chinese calligraphy uses brush and ink; considered high art.' },
  { subject:'mapeh', grade:8, level:20, type:'guess', q:'The stage of life between childhood and adulthood.', a:'adolescence', e:'Adolescence involves puberty, physical, emotional, and social changes.' },
  { subject:'mapeh', grade:8, level:20, type:'fib',   q:'The main hormone in male puberty is ____.', a:'testosterone', e:'Testosterone drives male secondary sex characteristics; estrogen in females.' },

  /* Grade 9 - L13..L14 */
  { subject:'mapeh', grade:9, level:21, type:'mc',    q:'Which vitamin is produced by skin exposure to sunlight?', choices:['A','B12','C','D'], a:'D', e:'UVB rays trigger vitamin D synthesis in the skin.' },
  { subject:'mapeh', grade:9, level:21, type:'guess', q:'The art movement led by Picasso featuring fragmented shapes.', a:'cubism', e:'Cubism (1907-1920s) broke subjects into geometric shapes.' },
  { subject:'mapeh', grade:9, level:22, type:'fib',   q:'The Olympic Games are held every ____ years.', a:'4', e:'Summer and Winter Games each run every 4 years, alternating every 2.' },
  { subject:'mapeh', grade:9, level:22, type:'mc',    q:'How many bones make up the human skull?', choices:['12','22','30','42'], a:'22', e:'22 bones: 8 cranial + 14 facial.' },

  /* Grade 10 - L15..L16 */
  { subject:'mapeh', grade:10, level:23, type:'guess', q:'The Filipino boxer with 8 world titles in different weight classes.', a:'Manny Pacquiao', e:'The only boxer to win titles in 8 divisions.' },
  { subject:'mapeh', grade:10, level:23, type:'fib',   q:'The 5 lines and 4 spaces where music notes are written is a ____.', a:'staff', e:'Line notes E-G-B-D-F (Every Good Boy Does Fine). Spaces spell FACE.' },
  { subject:'mapeh', grade:10, level:24, type:'mc',    q:'Which art period celebrated realistic proportion and perspective?', choices:['Gothic','Renaissance','Baroque','Modernism'], a:'Renaissance', e:'Renaissance artists (Da Vinci, Michelangelo) mastered linear perspective and human anatomy.' },
  { subject:'mapeh', grade:10, level:24, type:'guess', q:'The Filipino contemporary dance based on martial arts movement.', a:'Sayaw-sining', e:'Modern Filipino performance blending traditional dance and martial forms.' },

  /* Grade 11 - L17..L18 */
  { subject:'mapeh', grade:11, level:25, type:'mc',    q:'The first Filipino Olympic gold was won in', choices:['boxing','swimming','weightlifting','athletics'], a:'weightlifting', e:'Hidilyn Diaz won gold at Tokyo 2020 (held 2021) in 55 kg weightlifting.' },
  { subject:'mapeh', grade:11, level:25, type:'guess', q:'Beats per minute at rest.', a:'resting heart rate', e:'Normal adult: 60-100 bpm. Athletes: 40-60.' },
  { subject:'mapeh', grade:11, level:26, type:'fib',   q:'The Filipina Broadway star known as "The Voice" is Lea ____.', a:'Salonga', e:'Original Kim in Miss Saigon; voice of Princess Jasmine and Mulan.' },
  { subject:'mapeh', grade:11, level:26, type:'mc',    q:'A lung disease caused by smoking is', choices:['diabetes','hypertension','emphysema','arthritis'], a:'emphysema', e:'Emphysema damages the alveoli; part of COPD.' },

  /* Grade 12 - L19..L20 */
  { subject:'mapeh', grade:12, level:27, type:'guess', q:'The Japanese art of paper folding.', a:'origami', e:'Origami transforms a single square without cuts or glue.' },
  { subject:'mapeh', grade:12, level:27, type:'fib',   q:'The recommended daily water intake is about ____ liters for adults.', a:'2', e:'General guide: ~2 L (8 glasses)/day, adjusted for activity and climate.' },
  { subject:'mapeh', grade:12, level:28, type:'mc',    q:'The National Artist for Music known for "Mutya ng Pasig" is', choices:['Levi Celerio','Nicanor Abelardo','Antonio Molina','Ryan Cayabyab'], a:'Nicanor Abelardo', e:'National Artist (1997); pillar of Filipino classical music and kundiman.' },
  { subject:'mapeh', grade:12, level:28, type:'guess', q:'The chronic disease of high blood sugar.', a:'diabetes', e:'Diabetes: Type 1 (autoimmune) and Type 2 (insulin resistance). Managed by diet, exercise, and medication.' },
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
