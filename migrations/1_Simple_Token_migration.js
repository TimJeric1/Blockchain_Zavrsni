// 2_StoreValue_migration.js

const Migrations = artifacts.require("SimpleToken");

module.exports = function (deployer) {
    deployer.deploy(Migrations, "TimToken", "TIM", 1000);
};