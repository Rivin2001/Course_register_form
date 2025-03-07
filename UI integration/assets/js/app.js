





    document.getElementById("proceed").addEventListener("click", () => {
    

        let firstname = document.getElementById("first-name").value;
        let lastname = document.getElementById("last-name").value;
        let contact = document.getElementById("contact").value;


        let studentrequest = {

            "firstname": firstname,
            "lastname": lastname,
            "contactnumber": contact
        }; 
        

        fetch( "http://localhost:8080/student", {
            method:"POST",
            body: JSON.stringify(studentrequest),
            headers:{

                "Content-Type": "application/json"
            }
        })
        .then((Response) => Response.json())
        .then((data)=> {

            console.log(data);
            clear();
            
        })

    });





    function clear() {

        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("contact").value = "";
    }


    document.getElementById('proceed').addEventListener('click', function () {
        var toast = new bootstrap.Toast(document.getElementById('proceedToast'));
        toast.show();
    });

   
    document.getElementById("proceed").addEventListener("click", function() {
        Swal.fire({
            icon: "success",
            title: "SUCCESS",
            text: "Congratulations, your account has been successfully created.",
            confirmButtonText: "Continue",
            confirmButtonColor: "#4CAF50"
        });
    });