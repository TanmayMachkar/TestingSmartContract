const HelloTesting = artifacts.require("HelloTesting");

contract("Hello Testing",() => {
	it("should return hello testing", async() => {
		const helloTesting = await HelloTesting.deployed(); //instance of smart contract
		const result = await helloTesting.print();
		//console.log("Result is: ", result);
		assert(result === "Hello Testing");
	});

	it("should return 1", async() => {
		const helloTesting = await HelloTesting.deployed();
		const result = await helloTesting.printNum();
		//console.log(typeof result); //when assert error occurs console log this
		assert(result.toNumber() === 1); //toNumber() coz result alone returns Big Number which causes error
	})
})