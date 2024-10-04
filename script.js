document.getElementById('loaderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const obfuscatedKey = document.getElementById('obfuscatedKey').value;
    const base64Obfuscation = document.getElementById('base64Obfuscation').value;
    const username = document.getElementById('username').value;

    // This is where you would send a request to your backend or handle the loader logic
    // For demonstration purposes, we'll just show the values in the result div
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Loading with:</p>
                            <p>Obfuscated Key: ${obfuscatedKey}</p>
                            <p>Base64 Obfuscation: ${base64Obfuscation}</p>
                            <p>Username: ${username}</p>`;
});
