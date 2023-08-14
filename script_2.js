// let a = prompt("Sizdan a soniga biror son kiritishingizni so'rayman(davay tezlashing): a = ", 1);
// let b = prompt("Endi esa b soniga biror son kiritishingizni so'rayman(davay tezlashing): b = ", 2);
// alert("a = " + a);
// alert("b = " + b);
// alert("Siz kiritgan sonlar yigíndisi: " + (Number(a)+Number(b)) + " ga teng. Raxmat shart emas");

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(a + b); // 12


// Uyga vazifa:

// ---------------------------------------------

// 1. Uchta son berilgan. Ularning o'rta arifmetigini topuvchi dastur tuzing.

// let a = prompt(" a sonni kiriting: a = ", 1);
// let b = prompt(" b sonni kiriting: b = ", 1);
// alert("Console oynaga qarang:");
// console.log("Ikki sonning o'rta arifmetigi: " + ((Number(a)+Number(b)))/2);

// *********************

// 2_vazifa:
// Ikkita son berilgan. Ularning kvadratlari yeg'indisi topuvchi dastur tuzing.

// let a = prompt(" a sonni kiriting: a = ", 1);
// let b = prompt(" b sonni kiriting: b = ", 1);
// alert("Console oynaga qarang: javob:50");
// console.log("Ikki sonning  kvadratlari yig'indisi: " + (Number(a**2)+Number(b**2)));

// *************************

// 3. Doiraning uzunligi L berilgan. Uning radiusi R va yuzasi S ni topuvchi daastur tuzing.

// let L = prompt( " Doiraning uzunligini kiriting: L = ", 1);
// let R,S;
// R = L/3.14;
// S = (L**2)/3.14;
// alert("Console oynaga qarang:");
// console.log("Doiraning Radiusi R = " + Number(R) + " ga teng.");
// console.log("Doiraning Yuzi S = " + Number(S) + " ga teng.");

// *************************

// 4. Doiraning yuzasi S berilgan. Uning radiusi R va diamterini D ni topuvchi daastur tuzing.

// let S = prompt("Doiraning yuzasini kiriting: S = ", 1);
// let R,D;
// R = (S/3.14)**1/2;
// D = (S/3.14)**1/2;
// alert("Console oynaga qarang:");
// console.log("Doiraning Radiusi R = " + Number(R) + " ga teng.");
// console.log("Doiraning Diametri D = " + Number(D) + " ga teng.");

// *************************

// 5. Faylning hajmi baytlarda berilgan. Uning kilobaytdagi hajmini topuvchi dastur tuzing.

// let bayt = prompt("Fayl hajmining necha baytligini kiriting: ");
// let kilobayt;
// kilobayt = bayt/1024;
// alert("Console oynaga qarang: ");
// console.log("Faylning hajmi kilobaytda " + kilobayt + "kb ga teng.");

// *************************

// 6. A va B musbat son berilgan (A > B). A uzunlikdagi kesmaga B uzunlikdagi kesmadan necha marta joylashtirish mumkin.
//  Misol uchun, 16 sm lik kesmaga 5 sm lik kesmadan 3 ta joylashtirish mumkin.

// alert(" Qodirali .....");
// let C;
// let A = prompt("A kesmaga son kiriting: A = ");
// let B = prompt("B kesmaga A kesmadan kichik son kiriting: B = ");
// if(A>B){
//     let C = (A/B-A%B);
//     alert("Console oynaga qarang: ");
//     console.log("A kesmaga B kesmadan " + Number(C) + " ta joylashtirish mumkin.");
// }
// else{
//     alert("Begzod aka .... ");
// }

// *************************

// 7. Ikki xonali son berilgan. Uning raqamlari kvadrati yig'indisini topuvchi dastur tuzing. 35 => 34

// let c = prompt("Ikki xonali son kiriting: ");
// c = (((c/10)-((c%10)*0.1))**2 + (c%10)**2);
// alert(" console oynaga qarang:");
// console.log("Bu sonning raqamlarining kvadratlari yig'indisi: " + Number(c) + " ga teng.");

// *************************

// 8. Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirish natijasida hosil bo'lgan sonni topuvchi dastur tuzing. 34 => 43

// let c = prompt("Ikki xonali son kiriting: ");
// c = ((c%10)*10 + ((c/10)-((c%10)*0.1)));
// alert(" console oynaga qarang:");
// console.log("Bu sonning raqamlarining teskari tartibda joylashishidan hosil bo'lgan son: " + Number(c) + " ga teng.");

// *************************

// 9. Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi dastur tuzing. 120 => 1

// let a = prompt("3 xonali son kiriting: ");
// let c = (a - a%100)/100;
// alert(" console oynaga qarang:");
// console.log("Bu sonning yuzlar xonasidagi raqam: " + c + " ga teng.");

// *************************

// 10. Uch xonali son berilgan. Uning raqamlari yeg'indisini topuvchi dastur tuzing. 253 => 10

// let a = prompt("3 xonali son kiriting: ");
// let c = (a - a%100)/100 + (a%100 - a%10)/10 + a%10;
// alert(" console oynaga qarang:");
// console.log("Bu sonning raqamlari yig'indisi: " + c + " ga teng.");

// *************************

// 11. Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozish natijasida hosil bo'lgan sonni topuvchi dastur tuzing. 692 => 296

// let a = prompt("3 xonali son kiriting: ");
// let c = (a%10)*100 + (a%100 - a%10) + (a - a%100)/100;
// alert(" console oynaga qarang:");
// console.log("Bu sonning raqamlarini teskari tartibda yozilishidan hosil bo'lgan son: " + c + " ga teng.");

// *************************

// 12. Uch xonali son berilgan. Uning chapdan birinchi raqamini o'chirib oxiriga yozishdan hosil bo'lgan sonni topuvchi dastur tuzing. Misol uchun, 324 -> 243

// let a = prompt("3 xonali son kiriting: ");
// let c = (a%100)*10 + (a - a%100)/100;
// alert(" console oynaga qarang:");
// console.log("Bu sonning chapdan birinchi raqamini oçhirib oxiriga yozishdan hosil bo'lgan son: " + c + " ga teng.");

// *************************

// 13. Uch xonali son berilgan. Uning o'ngdagi birinchi raqamini o'chirib boshiga yozishdan hosil bo'lgan sonni topuvchi dastur tuzing. Misol uchun, 457 -> 745

// let a = prompt("3 xonali son kiriting: ");
// let c = (a%10)*100 + (a - a%10)/10;
// alert(" console oynaga qarang:");
// console.log("Bu sonning o'ngdan birinchi raqamini oçhirib oxiriga yozishdan hosil bo'lgan son: " + c + " ga teng.");

// *************************

// 14. Uch xonali son berilgan. Uning o'nliklar xonasidagi son bilan yuzliklar xonasidagi 
//     sonni almashtirish nastijasida hosil bo'lgan sonni topuvchi dastur tuzing.
//     Misol uchun, 675 -> 765

// let a = prompt("3 xonali son kiriting: ");
// let c = (a%100 - a%10)*10 + (a - a%100)/10 + a%10;
// alert(" console oynaga qarang:");
// console.log("Hosil bo'lgan son: " + c + " ga teng.");

// *************************

// 15. To'rt xonali son berilgan. Uning raqamlarini teskari tartibda 
//     yozish natijasida hosil bo'lgan sonni topuvchi dastur tuzing. 

// let a = prompt("4 xonali son kiriting: ");
// let c = (a - a%1000)/1000 + (a%1000 - a%100)/100 + (a%100 - a%10)/10 + a%10;
// alert(" console oynaga qarang:");
// console.log("Bu sonning raqamlari yig'indisi: " + c + " ga teng.");

// *************************

// 16. 999 dan katta bo'lgan istalgan berilgan. 
//     Ushbu sonni bo'lib butunini olish (/) va bo'lib qoldig'ini olish (%) 
//     amalari orqali o'nliklar, yuzliklar va 
//     mingliklar xonasidagi raqamni topuvchi dastur tuzing.

// let a = prompt("999 dan katta istalgan son kiriting : ");
// let b = (a%100 - a%10)/10;
// let c = (a%1000 - a%100)/100;
// let d =  (a%10000 - a%1000)/1000;
// alert(" console oynaga qarang:");
// console.log("O'nliklar xonasidagi raqam: " + b);
// console.log("Yuzliklar xonasidagi raqam: " + c);
// console.log("Mingliklar xonasidagi raqam: " + d);

// *************************

// 17. Kun boshidan boshlab N sekund o'tdi. 
//     Kun boshidan boshlab qancha to'liq minut o'tganini hisoblovchi dastur tuzing. Masalan, 
//     kun boshidan N=12321 sekund o'tdi. 
//     Bu kun boshidan boshlab to'liq 205 minut degani.

// let N = prompt("Kun boshidan boshlab necha sekund o'tgan deb oýlaysz: ");
// let M = (N - N%60)/60;
// alert("Console oynaga qarang: ");
// console.log("Kun boshidan boshlab to'liq " + M + " minut o'tgan ekan.");

// *************************

// 18. Kun boshidan boshlab N sekund o'tdi. 
//     Kun boshidan boshlab qancha soat va sekund
//     o'tganini hisoblovchi dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. 
//     Bu kun boshidan boshlab 3 soat 25 min 21 sekund degani.

// let N = prompt("Kun boshidan boshlab necha sekund o'tgan deb oýlaysz: ");
// let H = (N - N%3600)/3600;
// let M = (N%3600 - N%60)/60;
// let S = N%60;
// alert("Console oynaga qarang: ");
// console.log("Kun boshidan boshlab: " + H + " soat " + M + " minut " + S + " sekund o'tgan.");
