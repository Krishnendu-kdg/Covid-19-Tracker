var main_container=document.getElementsByClassName("main-container")[0];
var country=document.getElementsByClassName("country");
let infected=document.getElementsByClassName("infected");
let recovered=document.getElementsByClassName("recovered");
let deaths=document.getElementsByClassName("deaths");
let update_btn=document.getElementsByClassName("update")[0];
let inf_inc=document.getElementsByClassName("infected-inc")[0];
let inf_dec=document.getElementsByClassName("infected-dec")[0];
let rec_inc=document.getElementsByClassName("recovered-inc")[0];
let rec_dec=document.getElementsByClassName("recovered-dec")[0];
let dead_inc=document.getElementsByClassName("death-inc")[0];
let dead_dec=document.getElementsByClassName("death-dec")[0];
let list_sort_heading=document.getElementsByClassName("list-sort-heading")[0];
let search=document.getElementsByClassName("search")[0];
let search_ip=document.getElementsByClassName("search-ip")[0];
let view_full=document.getElementsByClassName("full-view")[0];
let inf_world_count=document.getElementsByClassName("inf-world-count")[0];
let rec_world_count=document.getElementsByClassName("rec-world-count")[0];
let death_world_count=document.getElementsByClassName("death-world-count")[0];
var api="https://disease.sh/v3/covid-19/countries";
var world_api="https://disease.sh/v3/covid-19/all";

function add_row(flag,country,infected,recovered,deceased)
{
    let created_div_1=document.createElement('div');
    created_div_1.classList.add("data-row");

    let country_div=document.createElement('div');
    country_div.innerHTML=`<img src="${flag}" class="flag"> &nbsp; ${country}`;
    country_div.classList.add("country")


    let infected_div=document.createElement('div');
    infected_div.innerHTML=infected
    infected_div.classList.add("infected")

    let recovered_div=document.createElement('div');
    recovered_div.innerHTML=recovered;
    recovered_div.classList.add("recovered")

    let death_div=document.createElement('div');
    death_div.innerHTML=deceased;
    death_div.classList.add("deaths");

    created_div_1.appendChild(country_div);
    created_div_1.appendChild(infected_div);
    created_div_1.appendChild(recovered_div);
    created_div_1.appendChild(death_div);

    main_container.appendChild(created_div_1);
}

function update_data()
{
    main_container.innerHTML='';
    
    fetch(api)
    .then((raw_data)=>{return raw_data.json()})
    .then((d)=>{
        for(let i=0;i<d.length;i++)
        {
            add_row(d[i].countryInfo["flag"],d[i].country,d[i].cases,d[i].recovered,d[i].deaths)
        }
    })
}

function update_world_data()
{
    fetch(world_api)
    .then((d)=>{return d.json();})
    .then((d)=>{
        inf_world_count.innerHTML=d.cases;
        rec_world_count.innerHTML=d.recovered;
        death_world_count.innerHTML=d.deaths;
    })
}

function set_heading()
{
    country[0].style.backgroundColor="rgb(143, 97, 37)";
    infected[0].style.backgroundColor="rgb(199, 199, 22)";
    recovered[0].style.backgroundColor="rgb(28, 160, 28)";
    deaths[0].style.backgroundColor="rgb(211, 93, 93)";
}

function update_by_inc_inf()
{
    fetch(api)
    .then((raw_data)=>{return raw_data.json()})
    .then((d)=>{
       
        //InPlace Sorting

        for(i=0;i<d.length;i++)
            {
                for(j=i+1;j<d.length;j++)
                {
                    if(d[i].cases>d[j].cases)
                    {
                        temp=d[i];
                        d[i]=d[j];
                        d[j]=temp;
                    }
                }
            }

        main_container.innerHTML='';
        for(let i=0;i<d.length;i++)
        {
            add_row(d[i].countryInfo["flag"],d[i].country,d[i].cases,d[i].recovered,d[i].deaths)
        }
    })
}

function update_by_dec_inf()
{
    fetch(api)
    .then((raw_data)=>{return raw_data.json()})
    .then((d)=>{

        //InPlace Sorting
       for(i=0;i<d.length;i++)
            {
                for(j=i+1;j<d.length;j++)
                {
                    if(d[i].cases<d[j].cases)
                    {
                        temp=d[i];
                        d[i]=d[j];
                        d[j]=temp;
                    }
                }
            }

        main_container.innerHTML='';
        
        for(let i=0;i<d.length;i++)
        {
            add_row(d[i].countryInfo["flag"],d[i].country,d[i].cases,d[i].recovered,d[i].deaths)
        }
    })
}

function update_by_inc_rec()
{
    fetch(api)
    .then((raw_data)=>{return raw_data.json()})
    .then((d)=>{
        //InPlace Sorting
        for(i=0;i<d.length;i++)
            {
                for(j=i+1;j<d.length;j++)
                {
                    if(d[i].recovered>d[j].recovered)
                    {
                        temp=d[i];
                        d[i]=d[j];
                        d[j]=temp;
                    }
                }
            }
        main_container.innerHTML='';
        for(let i=0;i<d.length;i++)
        {
            add_row(d[i].countryInfo["flag"],d[i].country,d[i].cases,d[i].recovered,d[i].deaths)
        }
    })
}

function update_by_dec_rec()
{
    fetch(api)
    .then((raw_data)=>{return raw_data.json()})
    .then((d)=>{
        //InPlace Sorting
        for(i=0;i<d.length;i++)
            {
                for(j=i+1;j<d.length;j++)
                {
                    if(d[i].recovered<d[j].recovered)
                    {
                        temp=d[i];
                        d[i]=d[j];
                        d[j]=temp;
                    }
                }
            }

        main_container.innerHTML='';
        for(let i=0;i<d.length;i++)
        {
            add_row(d[i].countryInfo["flag"],d[i].country,d[i].cases,d[i].recovered,d[i].deaths)
        }
    })
}


function update_by_inc_deaths()
{
    fetch(api)
    .then((raw_data)=>{return raw_data.json()})
    .then((d)=>{
        //InPlace Sorting
        for(i=0;i<d.length;i++)
            {
                for(j=i+1;j<d.length;j++)
                {
                    if(d[i].deaths>d[j].deaths)
                    {
                        temp=d[i];
                        d[i]=d[j];
                        d[j]=temp;
                    }
                }
            }

        main_container.innerHTML='';
        for(let i=0;i<d.length;i++)
        {
            add_row(d[i].countryInfo["flag"],d[i].country,d[i].cases,d[i].recovered,d[i].deaths)
        }
    })
}


function update_by_dec_deaths()
{
    fetch(api)
    .then((raw_data)=>{return raw_data.json()})
    .then((d)=>{
       //InPlace Sorting
       for(i=0;i<d.length;i++)
       {
           for(j=i+1;j<d.length;j++)
           {
               if(d[i].deaths<d[j].deaths)
               {
                   temp=d[i];
                   d[i]=d[j];
                   d[j]=temp;
               }
           }
       }
        main_container.innerHTML='';
        for(let i=0;i<d.length;i++)
        {
            add_row(d[i].countryInfo["flag"],d[i].country,d[i].cases,d[i].recovered,d[i].deaths)
        }
    })
}


update_data();
update_world_data();
set_heading();


update_btn.addEventListener('click',function(){
    update_data();
    update_world_data();
    list_sort_heading.innerHTML='The List is Sorted Based on Alphabetical Ordering of Country Names';
})


inf_inc.addEventListener('click',function(){
    update_by_inc_inf();
    list_sort_heading.innerHTML='The List is in Increasing Order of Infected Cases';
})

inf_dec.addEventListener('click',function(){
    update_by_dec_inf();
    list_sort_heading.innerHTML='The List is in Decreasing Order of Infected Cases';
})

rec_inc.addEventListener('click',function(){
    update_by_inc_rec();
    list_sort_heading.innerHTML='The List is in Increasing Order of Recovered Cases'
})

rec_dec.addEventListener('click',function(){
    update_by_dec_rec();
    list_sort_heading.innerHTML='The List is in Decreasing Order of Recovered Cases'
})

dead_inc.addEventListener('click',function(){
    update_by_inc_deaths();
    list_sort_heading.innerHTML='The List is in Increasing Order of Deaths';
})

dead_dec.addEventListener('click',function(){
    update_by_dec_deaths();
    list_sort_heading.innerHTML='The List is in Decreasing Order of Deaths';
})

search.addEventListener('click',function(){
    if(search_ip.value=='')
    {
        alert("Please Enter a Country Name!!!");
        return;
    }

    name=search_ip.value.toLowerCase();

    fetch(api)
    .then((d)=>{return d.json()})
    .then((d)=>{
        let count=0;
        main_container.innerHTML='';

        for(let i=0;i<d.length;i++)
        {
            if(d[i].country.toLowerCase().includes(name))
            {
                count++;
                add_row(d[i].countryInfo["flag"],d[i].country,d[i].cases,d[i].recovered,d[i].deaths)
            }
        }

        list_sort_heading.innerHTML='List Showing Those Countries Whose Name Somewhat or Fully Matches with your Search'
        if(count==0)
        {
            alert("Please Enter a Valid Country Name!!");
            search_ip.value='';
            update_data();
        }
    })
})


view_full.addEventListener('click',function(){
    list_sort_heading.innerHTML='The List is Sorted Based on Alphabetical Ordering of Country Names';
    search_ip.value='';
    update_data();
})


search_ip.addEventListener('input',function(){
    if(search_ip.value=='')
    {
        list_sort_heading.innerHTML='The List is Sorted Based on Alphabetical Ordering of Country Names';
        return;
    }

    name=search_ip.value.toLowerCase();

    fetch(api)
    .then((d)=>{return d.json()})
    .then((d)=>{
        let count=0;
        main_container.innerHTML='';
        list_sort_heading.innerHTML='List Showing Those Countries Whose Name Somewhat or Fully Matches with your Search'
        
        for(let i=0;i<d.length;i++)
        {
            if(d[i].country.toLowerCase().includes(name))
            {
                count++;
                add_row(d[i].countryInfo["flag"],d[i].country,d[i].cases,d[i].recovered,d[i].deaths)
            }
        }
        
        if(count==0)
        {
           main_container.innerHTML='<h3 class="not-found">Sorry,No Countries Match Your Search!!!</h3>'
        }
    })
})