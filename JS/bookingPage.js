var amenitiesAc=0;
var amenitiesLocker=0;
function getDate(){
    var date=new Date();
    var dd=date.getDate();
    var mo=1+date.getMonth();
    var yy=date.getFullYear();
    if (dd<=9)
    {
        dd="0"+dd;
    }
    else if (mo<=9)
    {
        mo="0"+mo;
    }
    var today=yy+"-"+mo+"-"+dd;
    document.getElementById("checkinDate").setAttribute("min",today);
}
function getValueAmenitiesAc()
{
   var checkbox =document.getElementById("amenitiesAc");

   if (checkbox.checked==true)
   {
        amenitiesAc=parseInt(document.getElementById("amenitiesAc").value);
   }
   else{
        amenitiesAc=0;
   }
}
function getValueAmenitiesLocker()
{
    var checkbox=document.getElementById("amenitiesLocker");

    if (checkbox.checked==true)
    {
        amenitiesLocker=parseInt(document.getElementById("amenitiesLocker").value);
    }
    else{
        amenitiesLocker=0;
    }
}
function getValues()
{

    //customer name 
    var customerName=document.getElementById("customerName").value;
    localStorage.setItem("CustomerName",customerName);

    //checkin date
    var checkinDate=document.getElementById("checkinDate").value;
    localStorage.setItem("CheckinDate",checkinDate);
    
    //amenities cost
    var amenitiesCost= amenitiesAc + amenitiesLocker;
    localStorage.setItem("amenitiesCost",amenitiesCost);

    //no of days 
    var noOfDays=document.getElementById("noOfDays").value;
    localStorage.setItem("noOfDays",noOfDays);

    //no of persons
    var noOfPersons=document.getElementById("noOfPersons").value;
    localStorage.setItem("noOfPersons",noOfPersons);

    //room type
    var roomTypeCost=document.getElementById("roomType").value;
    localStorage.setItem("roomTypeCost",roomTypeCost);


    var RoomCost=localStorage.getItem("roomTypeCost") * localStorage.getItem("noOfDays");
    localStorage.setItem("RoomCost",RoomCost);
    
    var AmenitiesCost=localStorage.getItem("amenitiesCost")*localStorage.getItem("noOfDays");
    localStorage.setItem("AmenitiesCost",AmenitiesCost);
    
    if (localStorage.getItem("noOfPersons") > 2) {
        var extrapersons =localStorage.getItem("noOfPersons")-2;
        var ExtraPersonCost=extrapersons*1000*localStorage.getItem("noOfDays");
        localStorage.setItem("ExtraPersonCost",ExtraPersonCost);
    }
    else
    {
        var ExtraPersonCost=0;
        localStorage.setItem("ExtraPersonCost",ExtraPersonCost);
    }
    var TotalCost=parseInt(localStorage.getItem("RoomCost"))+parseInt(localStorage.getItem("AmenitiesCost"))+parseInt(localStorage.getItem("ExtraPersonCost"));
    localStorage.setItem("TotalCost",TotalCost);
}
function bookingCost()
{
    var RoomCost=localStorage.getItem("RoomCost");
    document.getElementById("roomCost").innerHTML=RoomCost;

    var AmenitiesCost=localStorage.getItem("AmenitiesCost");
    document.getElementById("amenitiesCost").innerHTML=AmenitiesCost;

    var ExtraPersonCost=localStorage.getItem("ExtraPersonCost");
    document.getElementById("extraPersonCost").innerHTML=ExtraPersonCost;

    var TotalCost= localStorage.getItem("TotalCost");
    document.getElementById("totalCost").innerHTML=TotalCost;
}

function confirmBooking()
{
    var AdvanceAmount=document.getElementById("advanceAmount").value;
    localStorage.setItem("AdvanceAmount",AdvanceAmount);
    var BalanceAmount=localStorage.getItem("TotalCost")-
    AdvanceAmount;
    localStorage.setItem("BalanceAmount",BalanceAmount);
}
function getBalanceAmount()
{
    var BalanceAmount=localStorage.getItem("BalanceAmount");
    document.getElementById("balanceAmount").innerHTML= BalanceAmount;
}
function displayCustomerDetails()
{
    var cust=localStorage.getItem("CustomerName");
    document.getElementById("customerName").innerHTML= cust;
    document.getElementById("checkinDate").innerHTML=localStorage.getItem("CheckinDate");
    var roomtype=localStorage.getItem("roomTypeCost");
    if (roomtype==2500)
    {
        document.getElementById("roomType").innerHTML="Deluxe Room";
    }
    else{
        document.getElementById("roomType").innerHTML="Suite Room";
    }
    
    document.getElementById("amenitiesCost").innerHTML= localStorage.getItem("AmenitiesCost") + "/-";
    document.getElementById("roomCost").innerHTML=localStorage.getItem("RoomCost")+ "/-";
    document.getElementById("noOfPersons").innerHTML=localStorage.getItem("noOfPersons");
    document.getElementById("noOfDays").innerHTML=localStorage.getItem("noOfDays");
    document.getElementById("totalCost").innerHTML=localStorage.getItem("TotalCost")+ "/-";
    document.getElementById("advanceAmount").innerHTML=localStorage.getItem("AdvanceAmount")+ "/-";
    document.getElementById("balanceAmount").innerHTML=localStorage.getItem("BalanceAmount")+ "/-";
}