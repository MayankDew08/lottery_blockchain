import { Clarinet, Tx, Chain, Account } from "@clarinet/tester";
import { assertEquals, assertOk, assertErr } from "@clarinet/tester";

describe("Lottery Contract", () => {
  let owner: Account;
  let user: Account;

  beforeEach((chain: Chain) => {
    owner = chain.getAccount("deployer");
    user = chain.getAccount("wallet_1");
  });

  it("should allow a user to buy a ticket", (chain: Chain) => {
    const block = chain.mineBlock([
      Tx.contractCall("lottery", "buy-ticket", [], user.address)
    ]);
    assertOk(block.receipts[0].result);
  });

  it("should allow owner to draw a winner", (chain: Chain) => {
    chain.mineBlock([
      Tx.contractCall("lottery", "buy-ticket", [], user.address)
    ]);
    const block = chain.mineBlock([
      Tx.contractCall("lottery", "draw-winner", [], owner.address)
    ]);
    assertOk(block.receipts[0].result);
  });

  it("should return tickets list", (chain: Chain) => {
    chain.mineBlock([
      Tx.contractCall("lottery", "buy-ticket", [], user.address)
    ]);
    const call = chain.callReadOnlyFn("lottery", "get-tickets", [], user.address);
    assertOk(call.result);
  });

  it("should return winner after draw", (chain: Chain) => {
    chain.mineBlock([
      Tx.contractCall("lottery", "buy-ticket", [], user.address)
    ]);
    chain.mineBlock([
      Tx.contractCall("lottery", "draw-winner", [], owner.address)
    ]);
    const call = chain.callReadOnlyFn("lottery", "get-winner", [], user.address);
    assertOk(call.result);
  });
});
