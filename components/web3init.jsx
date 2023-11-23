const FUNC_NAME = ({ walletConnected }) => {
  // ALL CONSTANTS HERE

  const handleCONTRACT_FUNCTION = async () => {
    if (!walletConnected) {
      alert("Please connect your wallet first.");
      return;
    }

    const web3 = new Web3(window.ethereum);
    try {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        const userAddress = accounts[0];
        setWalletAddress(userAddress);

        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

        await contract.methods
          .CONTRACT_FUNCTION
          // pass function parameters
          ()
          .send({ from: userAddress });

        console.log("FUNCTION SUCCESS MESSAGE");
      } else {
        alert("No accounts found. Please connect to your wallet.");
      }
    } catch (error) {
      console.error("FUNCTION FAIL MESSAGE", error);
    }
  };

  return (
    <div>
      <h2>TITLE</h2>
      {walletConnected ? (
        <>RETURN COMPONENT</>
      ) : (
        <p>Please connect your wallet to execute CONTRACT_FUNCTION</p>
      )}
    </div>
  );
};
