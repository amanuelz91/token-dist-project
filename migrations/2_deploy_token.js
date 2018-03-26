// const safeMathy = artifacts.require("SafeMath");
// const basicerc = artifacts.require("ERC20Basic");
// const basictok = artifacts.require("BasicToken");
// const erca = artifacts.require("ERC20");
// const standa = artifacts.require("StandardToken");
const tofos = artifacts.require("TokensoftToken");

module.exports = function(deployer) {


    // deployer.deploy(safeMathy)
    //
    //     deployer.link(safeMathy, basicerc);
    //     deployer.deploy(basicerc);
    //
    //     deployer.link(basicerc, basictok);
    //     deployer.deploy(basictok,{ gas: 5000000 });
    //
    //     deployer.link(basictok, erca);
    //     deployer.deploy(erca);
    //
    //     deployer.link(erca, standa);
    //     deployer.deploy(standa);
    //
    //     deployer.link(standa, tofos);
        deployer.deploy(tofos);

};



// const PermissionsLib = artifacts.require("PermissionsLib");
// const DummyContract = artifacts.require("DummyContract");
// const DebtRegistry = artifacts.require("DebtRegistry");
// const DebtToken = artifacts.require("DebtToken");
// const DebtKernel = artifacts.require("DebtKernel");
// const RepaymentRouter = artifacts.require("RepaymentRouter");
// const TokenTransferProxy = artifacts.require("TokenTransferProxy");
//
// module.exports = (deployer: any, network: string, accounts: string[]) => {
//     const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };
//
//
//
//     deployer.deploy(DummyContract);
//     deployer.link(PermissionsLib, DebtRegistry);
//     deployer.deploy(DebtRegistry).then(async () => {
//         await deployer.deploy(DebtToken, DebtRegistry.address);
//         await deployer.deploy(TokenTransferProxy);
//         await deployer.deploy(RepaymentRouter, DebtRegistry.address, TokenTransferProxy.address);
//         await deployer.deploy(DebtKernel, TokenTransferProxy.address);
//
//
//     });
//        deployer.link(PermissionsLib, DebtRegistry);
// };
