function begging() {
    alert("Well.. you already clicked on ontacts so follow me on instagram & github and pwease join my discord 🙏")
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const openForm = async () =>  {
    document.getElementById("PopUp").style.display = "block";
    await delay(100);
 begging()   
    }
    
    function closeForm() {
    document.getElementById("PopUp").style.display = "none";
    }

    function gmail() {
        alert("pirkisek@gmail.com")
        }

        function hire() {
            alert("Idk, im lazy to properly do this page so just go to contacts and text me.")
            }

