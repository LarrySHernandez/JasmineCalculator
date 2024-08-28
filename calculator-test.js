describe('calculateMonthlyPayment should return correct figures', function(){
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 300000, years: 25, rate: 7.99})).toBe('2313.46');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount: 300000, years: 25, rate: 7.99})).toBe('2313.46');
  });

  it("should return a string", function(){
    expect(calculateMonthlyPayment({amount: 300000, years: 25, rate: 7.99})).not.toBe(2313.46);
  });

});






/// etc
