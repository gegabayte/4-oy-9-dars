{
    // function sum (a = 15, b = 14) {
    //     let res1 = a + b;
    //     return res1;
    // }
    // let res2 = res1(6, 20)
    // console.log(res2);

    //1-misol
    //ikkita sanndan kattasini topuvchi algarithm
    // function maxTwoNumber (a , b) {
    //     let max;
    //     if (a > b) {
    //         max = a
    //     } else {
    //         max = b;
    //     }
    //     return max;
    // }
    // console.log(maxTwoNumber(5, 7))


    //2-misol
    // function fact(a) {
    //     let p = 1;
    //     for (let i = 1; i <= a; i++) {
    //         p *=i
    //     }
    //     return p;
    // }

    // console.log(fact(8));


    // 3-misol 
    // 1 dan n gacha barcha sonlar yigindisini topuvchi algoritm yozing.
    // function res (n) {
    //     let sum = 0;
    //     for (let i = 1; i <= n ; i++ ) {
    //         sum = sum + i
    //     }
    //     return sum ;
    // }
    // console.log(res(5));


    //4-misol
    //3 ta sondan kattasini topuvchi funksiya yozing.
    // function sonN(a, b, c) {
    //     let max;
    //     if (a > b) {
    //         max = a;
    //      } else {
    //         max = b
    //      }

    //      if(max < c){
    //         max = c
    //      }
    //      return max
    // }
    // console.log(sonN(10, 40, 5));




    //regular function
    // function sum (a, b ) {
    //     return a + b ;
    // }


    //express function 
    // const sum1 = function(a , b) {
    //     return a + b ;
    // }


    // arrow function 
    // const sum2 = (a , b) => {
    //     return a + b ;
    // }



    //regular function
    //express/local function
    //arrow function



    // function add (a, b, callback) {
    //     console.log(a + b);
    //     callback();
    // }
    // function displey () {
    //     console.log(`callback function ichi`);
    // }

    // add(4, 5, displey)



    // const cars = [`BMW`, `marcedes`,`Bugati`];
    // cars[1] = true
    // cars[0] = false
    // cars[2] = null
    // console.log(cars)



    // let arr = [1, 2, 5, 10];
    // let sum = 0;
    // let counter = 0;
    // let res = ``;
    // for (let i = 0 ; i < arr.length; i++) {
    //     sum += arr[i];
    //     counter++;
    //     res = arr[i] / counter
    // }
    // console.log(sum, counter, res);

    // function arr (a, b, s, d) {
    //     let sum = 0;
    //     let counter = 0;
    //     let res = ``;
    // for (let i = 0 ; i < arr.length; i++) {
    //     sum += arr[i];
    //     counter++;
    //     res = arr[i] / counter
    //     return res;
    // }
    // }
    // console.log(arr(1, 2, 5, 10));

}
{
    //1-misol
//Kubning yon uzunligi berilgan hajmni hisoblaydigan funksiyani yozing.
// {
//     function res1(N) {
//         return N ** 3  
//     }
//     console.log(res1(2));
// }
//3-misol
//Massivdagi birinchi N natural sonni qaytaruvchi funksiya yarating.
// {
//  function arr (a, n, s, d) {
//         let sum = 0;
//         let counter = 0;
//         let res = ``;
//     for (let i = 0 ; i < arr.length; i++) {
//         sum += arr[i];
//         counter++;
//         res = arr[i] / counter
//         return res, n;
//     }
//     }
//     console.log(arr(1, 8, 5, 10));
// }
//4-miol
//Sondagi raqamlar yig‘indisini hisoblaydigan funksiya ishlab chiqing.
// {
//     function res4(n) {
//     let sum = 0;
//     for (let i = 0; n; i++) {
//         sum += n % 10;
//         n = Math.trunc(n / 10);
//     }
//     return sum;
//   }

//   const n = 12586;
//   console.log(res4(n));
// }
//5-miol
// Yilning kabisa yili ekanligini tekshiradigan funksiyani aniqlang.
// {
//     function res5(n) {
//         let res = ``;
//         if (n % 4 == 0 && n % 100 != 0) {
//            res = `kabisa yili`;
//         } else {
//             res = `kabisa yil emas`;
//         }
//         return res;
//     }
//     console.log(res5(2023))
// }
//6-miol
// Belgilangan ikkita qiymat orasida tasodifiy son hosil qiluvchi funksiya yarating.
// {
//     function res6 (a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             sum = Math.trunc(Math.random(i) * b);
//         }
//     }
//     for (let i = b; i <= a; i++) {
//         if (i % 2 == 0) {
//             sum = Math.trunc(Math.random(i) * a);
//         }
//     }
//     return sum;
// }
// console.log(res6(20, 80));
// }
//10-miol
//Ikki sonning minimalini topuvchi funksiya ishlab chiqing.
// {
//     function res10 (a, b) {
//         let res = ``;
//         if (a > b) {
//             res = a;
//         } else {
//             res = b;
//         }
//         return res;
//     }
//     console.log(res10(52, 51));
// }
//18-miol
//Belgilangan ikkita qiymat orasida tasodifiy juft son hosil qiluvchi funksiya yarating.
// {
//     function res6 (a, b) {
//         let sum = 0;
//         for (let i = a; i <= b; i++) {
//             if (i % 2 == 0) {
//                 sum = Math.trunc(Math.random(i) * b);
//             }
//         }
//         for (let i = b; i <= a; i++) {
//             if (i % 2 == 0) {
//                 sum = Math.trunc(Math.random(i) * a);
//             }
//         }
//         return sum;
//     }
//     console.log(res6(20, 80));
// }
//20-miol
//Satrning haqiqiy telefon raqami ekanligini tekshiradigan funksiyani aniqlang (asosiy formatni tekshirish
// {
//     function res20 (tel) {
//         let res =``;
//         if (tel.lenght <= 9) {
//             res = `raqamlar togri`
//         } else {
//             res = `raqam notog'ri`
//         }
//         return res;
//     }
//     console.log(res20(88260813));
// }
}
//4-oy 9-dars
// {
//    {
//     let arr =[1, 2, 3, 55n, `bye`];
//     arr[5] = 50n;
//     console.log(arr[6]);
//    }
//    {
//     let sum = 0;
//     let arr =[2, 5, 4, 9];
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum);
//    }
//    {
//     // let arr = [3, 0, 6, 2, -7];

//     // let a = arr.sort(function(a, b) {
//     //     return b - a;
//     // })
//     // console.log(a[0])
//    }
// } 
{
    /**
     * push
     * unshift
     * 
     * 
     * pop
     * shift
     */
}

{
    //1-misol
    //Sonlardan tashkil topgan massivdan eng kichik elementni topuvchi funksiya yozing (sort)
    {
    // let arr = [1, 2, 3, 4, 5];
    // let a = arr.sort(function(a, b){
    //     return a - b;
    // })
    // console.log(a[0]);
    }


    //2-misol
    //Sonlardan tashkil topgan massiv elementlari orasida toq indekslarining yigindisini topuvchi funksiya yozing.
    {
    // let arr = [1, 2, 3, 4, 5];
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 == 0) {
    //         sum += arr[i];
    //     }
        
    // }
    // console.log(sum);
    }


    //3-misol
    //Sonlardan tashkil topgan massiv elementlari orasidan tublarini topuvchi funksiya yozing.
    // {
    // let arr = [1, 2, 3, 4, 5, 6,7];
    // let counter = 0;
    // for (let element of arr) {
    //     if (element % 2 == 0) {
    //         counter++;
    //     }
    // }
    // if (counter == 2) {
    //     console.log(`tub sonlar`);
    // }
    // }

    
    //4-misol
    //Sonlardan tashkil topgan massiv elementlari orasidan 3 ga karalilarining sonini topuvchi funksiya yozing.
    {
    // {
    //     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     let res =``;
    //    for (element of arr) {
    //     if (element % 3 == 0) {
    //         console.log(element); 
    //     }
    //    }
       
    }
}
