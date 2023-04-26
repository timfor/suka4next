
import { ConnectButton, useWalletKit } from "@mysten/wallet-kit";
import { formatAddress } from "@mysten/sui.js";

function ConnectToWallet() {
	const { currentAccount } = useWalletKit();
	return (
		<ConnectButton
			connectText={"Connect Wallet"}
		// connectedText={`Connected: ${formatAddress(currentAccount.address)}`}
		/>
	);
}


export default ConnectToWallet