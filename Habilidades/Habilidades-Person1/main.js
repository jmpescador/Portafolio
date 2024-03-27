let number = document.getElementById("number");
        let counter = 0;
        setInterval(() => {
            if (counter == 85){
                clearInterval();
            }else{
                counter += 1;
                number.innerHTML = counter + "%";
            }
            
        }, 20 );

	let number2 = document.getElementById("number2");
    let counter2 = 0;
	    setInterval(() => {
            if (counter2 == 100){
                clearInterval();
            }else{
                counter2 += 1;
                number2.innerHTML = counter2 + "%";
            }
            
        }, 20 );

		let number3 = document.getElementById("number3");
		let counter3 = 0;
			setInterval(() => {
				if (counter3 == 90){
					clearInterval();
				}else{
					counter3 += 1;
					number3.innerHTML = counter3 + "%";
				}
				
			}, 20 );

		let number4 = document.getElementById("number4");
		let counter4 = 0;
			setInterval(() => {
				if (counter4 == 80){
					clearInterval();
				}else{
					counter4 += 1;
					number4.innerHTML = counter4 + "%";
				}
				
			}, 20 );

			let number5 = document.getElementById("number5");
			let counter5 = 0;
				setInterval(() => {
					if (counter5 == 45){
						clearInterval();
					}else{
						counter5 += 1;
						number5.innerHTML = counter5 + "%";
					}
					
				}, 100 );
			
		
