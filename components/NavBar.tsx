import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";


export default function Navbar() {
    const address = useAddress();

    return (
        <>
          <div>
            <ConnectWallet />
          </div>
        </>
      );
    }