document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    
    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;
    console.log(userName)
    console.log(userEmail)

    // document.getElementById("user-name").value = '';
    // document.getElementById("user-email").value = '';
    document.getElementById('form').reset();
}) 