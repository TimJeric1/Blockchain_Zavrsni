// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <=0.8.19;

contract SimpleToken {
    string public name;
    string public symbol;
    uint256 private _totalSupply;
    address private _owner;

    mapping(address => uint256) private _balances;

    modifier onlyOwner() {
        require(
            msg.sender == _owner,
            "Only the contract owner can call this function"
        );
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 initialSupply
    ) {
        name = _name;
        symbol = _symbol;
        _totalSupply = initialSupply;
        _balances[msg.sender] = _totalSupply;
        _owner = msg.sender;
    }

    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) external view returns (uint256) {
        return _balances[account];
    }

    function transfer(address to, uint256 value) external {
        require(value <= _balances[msg.sender], "Insufficient balance");

        _balances[msg.sender] -= value;
        _balances[to] += value;
    }

    function mint(uint256 amount) external onlyOwner {
        require(amount > 0, "Amount must be greater than zero");

        _totalSupply += amount;
        _balances[_owner] += amount;
    }

    function burn(uint256 amount) external onlyOwner {
        require(amount > 0, "Amount must be greater than zero");
        require(
            amount <= _balances[_owner],
            "Insufficient balance for burning"
        );

        _totalSupply -= amount;
        _balances[_owner] -= amount;
    }
}
