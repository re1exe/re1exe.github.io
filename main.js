function begging() {
    alert("Well.. you already clicked on ontacts so follow me on instagram & github and pwease join my discord 🙏")
    console.log("succesfully executed")
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const openForm = async () =>  {
    document.getElementById("PopUp").style.display = "block";
    await delay(100);
 begging()   
 console.log("succesfully executed")
    }
    
    function closeForm() {
    document.getElementById("PopUp").style.display = "none";
    console.log("succesfully executed")
    }

    function closeFormAD() {
        document.getElementById("AD").style.display = "none";
        console.log("succesfully executed")
        }

    function gmail() {
        alert("pirkisek@gmail.com")
        console.log("succesfully executed")
        }

        function hire() {
            alert("Idk, im lazy to properly do this page so just go to contacts and text me.")
            console.log("succesfully executed")
            }

            function openFormAD() {
                document.getElementById("AD").style.display = "block";
                console.log("succesfully executed")
                }


