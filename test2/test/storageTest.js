const Storage = artifacts.require("Storage");

contract("Storage", () => {
	let storage = null;
	before(async() => {
		storage = await Storage.deployed();
	}) //runs before first test
	
	// beforeEach(() => {
	// 	console.log('Hi');
	// }) //runs before each test

	// after(() => {
	// 	console.log('Hi');
	// }) //runs after first test
	
	// afterEach(() => {
	// 	console.log('Hi');
	// }) //runs after each test

	it('Should set and return the item', async() => {
		//const storage = await Storage.deployed(); //avoid using same line in both tests
		await storage.set('Set item');

		const result = await storage.get();
		assert(result === 'Set item');
	})
	it('Should set and return hello', async() => {
		//const storage = await Storage.deployed();
		await storage.set('Hello');

		const result = await storage.get();
		assert(result === 'Hello');
	})
})