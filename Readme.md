# Lottery Blockchain

A simple on-chain lottery game built with Clarity smart contracts and Clarinet.

## Features
- Users buy lottery tickets (1 STX per ticket)
- Random winner chosen on-chain by contract owner
- View tickets and winner
- Fully tested with Clarinet JS tester

## Project Structure
```
contracts/lottery.clar         # Clarity smart contract
settings/                      # Network configuration files
  Devnet.toml
  Mainnet.toml
  Testnet.toml
deployments/                   # Deployment plans
  default.testnet-plan.yaml
tests/                         # Tests
  lottery_test.ts
```

## Getting Started
1. **Install dependencies:**
   ```sh
   npm install --save-dev @clarinet/tester jest @types/jest
   ```
2. **Run tests:**
   ```sh
   npm test
   ```
3. **Deploy contract to Testnet:**
   ```sh
   clarinet deployments apply --testnet
   ```

## How the Lottery Works
- Users call `buy-ticket` to purchase a ticket.
- Owner calls `draw-winner` to select a random winner.
- Anyone can call `get-tickets` and `get-winner` to view state.

## Deployment
Deployed at address STB6Z9BTVPNCDJFHKZJR0WGYZ6H2319V1BGZYYBV.lottery
![Uploading image.png…]()


## License
MIT
