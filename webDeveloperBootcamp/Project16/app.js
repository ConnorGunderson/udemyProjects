let firstP = document.querySelectorAll("p");

for (let i = 0; i < firstP.length; i++)
{
    firstP[i].addEventListener("mouseover", function()
    {
        this.classList.add("selected");
    });
    
    firstP[i].addEventListener("mouseout", function()
    {
        this.classList.remove("selected");
    });

    firstP[i].addEventListener("click", function()
    {
        this.classList.toggle("done");
    });
}

for (let i = 0; x < x.length; i++)
{
    x[i].addEventListener("mouseover", function()
    {this.style.color = "green"})

    x[i].addEventListener("mouseout", function()
    {this.style.color = "initial"})
    
};