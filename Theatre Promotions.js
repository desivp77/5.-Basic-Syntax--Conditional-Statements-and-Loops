function sale(ticket, age) {

    // const day = (ticket)
    // const age = Number(input[age]);

    switch (ticket) {
        case `Weekday`:

            // if (age <= 0) {
            //     console.log(`Error!`);
            //  }
            if ((age >= 0) && (age <= 18)) {
                ticketPrice = 12; 
            }
            else if ((age >= 19) && (age <= 64)) {
                ticketPrice = 18; 
            }
            else if ((age > 65) && (age <= 122)) {
                ticketPrice = 12; 
            }; break;

        case `Weekend`:
            if ((age >= 0) && (age <= 18)) {
                ticketPrice = 15; 
            }
            else if ((age >= 19) && (age <= 64)) {
                ticketPrice = 20; 
            }
            else if ((age >= 65) && (age <= 122)) {
                ticketPrice = 15; 
            }; break;

            case `Holiday`:
                if ((age >= 0) && (age <= 18)) {
                    ticketPrice = 5; 
                }
                else if ((age >= 19) && (age <= 64)) {
                    ticketPrice = 12; 
                }
                else if ((age >= 65) && (age <= 122)) {
                    ticketPrice = 10; 
                }; break;  



            default: console.log(`Error!`);break;

    }
    console.log(`${ticketPrice}$`);
}
sale('Weekday', 42)
sale('Holiday', -12)
sale('Holiday', 15)
// sale(["Weekday", "42"])
// sale(["Holiday", "-12"])
// sale(["Holiday", "15"])