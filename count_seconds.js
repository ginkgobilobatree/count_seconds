let zero =`
          <  0  >
      +              +
            
   +                   +

  +                     +

   +                   +

      +             +
             +`,
one =`
             0   
      +           < 1 >

   +                   +
 
  +                     +
 
   +                   +
 
      +             +
             +`,
two =`
             0   
      +             1 

   +                 < 2 >
 
  +                     +
 
   +                   +
 
      +             +
             +`,
three = `
             0   
      +             1 

   +                   2
 
  +                   < 3 >
 
   +                   +
 
      +             +
             +`,
four = `
             0   
      +             1 

   +                   2
 
  +                     3 
 
   +                 < 4 >
 
      +             +
             +`,
five = `
             0   
      +             1 

   +                   2
 
  +                     3 
 
   +                   4
 
      +           < 5 >
             +`,
six = `
             0   
      +             1 

   +                   2
 
  +                     3 
 
   +                   4
 
      +             5
           < 6 >`,
seven = `
             0   
      +             1 

   +                   2
 
  +                     3 
 
   +                   4
 
    < 7 >           5
             6`,
eight = `
             0   
      +             1 

   +                   2
 
  +                     3 
 
 < 8 >                 4
 
      7             5
             6`,
nine = `
             0   
      +             1 

   +                   2
 
< 9 >                   3 
 
   8                   4
 
      7             5
             6`,
ten = `
             0   
      +             1 

  <10>                 2
 
  9                     3 
 
   8                   4
 
      7             5
             6`,
eleven = `
             0   
     <11>           1 

   10                  2
 
  9                     3 
 
   8                   4
 
      7             5
             6`,

times = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven],
i = 0, secs = 0, mins = 0, hrs = 0;

const countSecs = () => {
   console.clear();
   if (secs > 59) {
      secs -= 60;
      mins++;
   }
   if (mins > 59) {
      mins -= 60;
      hrs++;
   }
   if (i > 11) i -= 12;
   console.log(times[i++], `\n seconds: ${secs++} minutes: ${mins} hours: ${hrs}`);
}

setInterval(countSecs, 1000);
