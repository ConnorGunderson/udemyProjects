var faker = require("faker");
// Intro Text
console.log('=====================\n', "WELCOME TO THE SHOP\n" + "=====================\n");

// Generate fake company name and data then concat
for (let i = 0; i < 10; i++)
{
    let compName = faker.company.companyName();
    let compPrice = faker.finance.amount();
    console.log(compName, " - $", compPrice);
}
