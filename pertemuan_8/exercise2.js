let account = {
    Name: "Jenifer",
    Expenses: [],
    addExpenses: function(description, amount){
        this.Expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary: function (){
        let totalExpenses = 0;
        this.Expenses.forEach(function (el){
            totalExpenses = totalExpenses + el.amount;
        });
    return totalExpenses;
    }
};
account.addExpenses('Beli Buku', 15000);
account.addExpenses('Beli Pensil', 5000);
console.log("Total pengeluaran " + account.Name + " adalah Rp." + account.getAccountSummary());
//console.log(`Total pengeluaran ${account.Name} adalah Rp ${account.getAccountSummary()}`);