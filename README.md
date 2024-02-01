## Potrebni paketi
Ganache blockchain instanca konfigurirana na :
  host: "127.0.0.1",
  port: 7545,

Truffle
```
npm install truffle
```

## Komande za pokretanje
```
truffle compile
truffle migrate
```

## Komande za automatsko testiranje 
```
truffle test
```

## Komande za manualno testiranje 
```
truffle console
```
### testiranje inicijalane količine tokena
```javascript
const tokenInstance = await SimpleToken.deployed()
await tokenInstance.totalSupply()
```

### testiranje mint funkcionalnosti
```javascript
const tokenInstance = await SimpleToken.deployed()

await tokenInstance.totalSupply()
await tokenInstance.mint(500)
await tokenInstance.totalSupply()
```

### testiranje burn funkcionalnosti
```javascript
const tokenInstance = await SimpleToken.deployed()

await tokenInstance.totalSupply()
await tokenInstance.burn(200)
await tokenInstance.totalSupply()
```

### testiranje transfer funkcionalnosti
```javascript
const tokenInstance = await SimpleToken.deployed()

await tokenInstance.balanceOf(accounts[0])
await tokenInstance.balanceOf(accounts[1])

await tokenInstance.transfer(accounts[1], 100, { from: accounts[0] })

await tokenInstance.balanceOf(accounts[0])
await tokenInstance.balanceOf(accounts[1])
```