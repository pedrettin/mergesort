const should = require('should')
const mergesort = require('../mergesort.js')()

describe('merge sort', () => {
	
	it ('should sort an array of length 0', done => {
		const sortedArray = mergesort.sort([])
		sortedArray.should.be.type('object')
		sortedArray.should.be.empty()
		done()
	})
	
	it ('should sort an array of length 1', done => {
		const sortedArray = mergesort.sort([4])
		sortedArray.should.be.type('object')
		sortedArray.should.eql([4])
		done()
	})
	
	it ('should sort an array of length 2', done => {
		const sortedArray = mergesort.sort([4,2])
		sortedArray.should.be.type('object')
		sortedArray.should.eql([2, 4])
		done()
	})
	
	it ('should sort an array of length > 2', done => {
		const sortedArray = mergesort.sort([4,2, 5, 11, 13, 23, 30])
		sortedArray.should.be.type('object')
		sortedArray.should.eql([2, 4, 5, 11, 13, 23, 30])
		done()
	})
	
	it ('should sort an array in descending order', done => {
		const sortedArray = mergesort.sort([30, 15, 11, 10])
		sortedArray.should.be.type('object')
		sortedArray.should.eql([10, 11, 15, 30])
		done()
	})
	
	it ('should sort an array in ascending order', done => {
		const sortedArray = mergesort.sort([10, 11, 15, 22])
		sortedArray.should.be.type('object')
		sortedArray.should.eql([10, 11, 15, 22])
		done()
	})
	
	it ('should sort an array with duplicates', done => {
		const sortedArray = mergesort.sort([30, 15, 15, 10])
		sortedArray.should.be.type('object')
		sortedArray.should.eql([10, 15, 15, 30])
		done()
	})
	
})
