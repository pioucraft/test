
console.log(window.solana)
        

async function connect(){
    const response = await solana.connect();
    console.log('wallet account ', response.publicKey.toString());

}

async function send() {
    let amount = Number(document.getElementById("amount").value)
    console.log(amount)

    const response = await solana.connect();

    const transaction = new window.solana.Transaction().add(
        window.solana.SystemProgram.transfer({
            fromPubkey: response.publicKey.toString(),
            toPubkey: "9Yq7aYmhcD1kAjvvANucPK2Y8KZVhW5YbSXFBjHAy7W",
            lamports: amount, // Sending 1 SOL
        })
    );

    transaction.recentBlockhash = (await window.solana.getRecentBlockhash()).blockhash;
    transaction.sign(publicKey);

    // Send the transaction to the Solana network
    const signature = await window.solana.sendTransaction(transaction);
    console.log("Transaction sent. Signature:", signature);

}