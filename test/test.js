const SimpleToken = artifacts.require("SimpleToken");

contract("SimpleToken", (accounts) => {
  it("should create tokens", async () => {
    const tokenInstance = await SimpleToken.deployed();
    const totalSupply = await tokenInstance.totalSupply();

    assert.equal(totalSupply.toNumber(), 1000, "Total supply should be 1000 tokens");
  });

  it("should mint new tokens", async () => {
    const tokenInstance = await SimpleToken.deployed();
    await tokenInstance.mint(500);

    const totalSupply = await tokenInstance.totalSupply();
    assert.equal(totalSupply.toNumber(), 1500, "Total supply should be 1500 tokens");
  });

  it("should burn tokens", async () => {
    const tokenInstance = await SimpleToken.deployed();
    await tokenInstance.burn(200);

    const totalSupply = await tokenInstance.totalSupply();
    assert.equal(totalSupply.toNumber(), 1300, "Total supply should be 1300 tokens");
  });

  it("should transfer tokens between addresses", async () => {
    const tokenInstance = await SimpleToken.deployed();
    const senderBalanceBefore = await tokenInstance.balanceOf(accounts[0]);
    const receiverBalanceBefore = await tokenInstance.balanceOf(accounts[1]);

    await tokenInstance.transfer(accounts[1], 100)

    const senderBalanceAfter = await tokenInstance.balanceOf(accounts[0]);
    const receiverBalanceAfter = await tokenInstance.balanceOf(accounts[1]);

    assert.equal(senderBalanceAfter.toNumber(), senderBalanceBefore.toNumber() - 100, "Sender balance should decrease by 100 tokens");
    assert.equal(receiverBalanceAfter.toNumber(), receiverBalanceBefore.toNumber() + 100, "Receiver balance should increase by 100 tokens");
  });
});
