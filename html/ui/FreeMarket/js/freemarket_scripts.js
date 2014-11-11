// Scripts that are common to FreeMarket pages



// Gets account number from local storage, or redirects user to login page if no account number is in local storage
function setAccountNumber() {
if (sessionStorage.getItem("RSaccountNumber"))
	{
	var accountBalance = sessionStorage.getItem("accountBalance");
	var username = sessionStorage.getItem("RSaccountNumber");
    document.getElementById("username").innerHTML = username;
    document.getElementById("accountBalance").innerHTML = 'Account Balance: <br />' + accountBalance;
    document.getElementById("logintext").innerHTML = 'Account Details';
	sessionStorage.setItem("loginStatus","loggedin");
    }
    else {
	sessionStorage.setItem("loginStatus","notloggedin");
    }
};
	
	
// Takes the user back one step in broswer history, useful for returning from search results to search page
function goBack() {
    window.history.back()
};


// Logout script
// Check browser support 
function logout(){
if (typeof(Storage) != "undefined")
  {
  // Clear 	
  sessionStorage.removeItem("accountNumber");
  sessionStorage.removeItem("RSaccountNumber");
  sessionStorage.removeItem("numericalAccountNumber");
  sessionStorage.removeItem("uselessInformation");
  sessionStorage.removeItem("accountBalance");
  window.location.href = "login.html";
  }
else
  {
  document.getElementById("result").innerHTML="Sorry, your browser does not support Web Storage.";
  }
  };


// Get variables out of the URL
function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
};

 
// Set the localstorage language parameter
function setLanguage() {
  var languageString=(getQueryVariable("setLng"));
  if (languageString == '') {
	  languageString = 'en';
	  localStorage.setItem("fmlang",languageString);
  }
  else {
  	  localStorage.setItem("fmlang",languageString);
  }
};
 
 
// Set all URLs to use the setLng querystring
function setLanguageQueryStrings() {
	var languageQueryString = localStorage.getItem("fmlang");
	
	var logo_link ="index.html?setLng="+ languageQueryString;
	document.getElementById("logo_link").setAttribute("href",logo_link);
    
	var home_link ="index.html?setLng="+ languageQueryString;
	document.getElementById("home_link").setAttribute("href",home_link);
    
	var view_all_link ="ViewAll.html?setLng="+ languageQueryString;
	document.getElementById("view_all_link").setAttribute("href",view_all_link);
    
	var search_title_link ="SearchByTitle.html?setLng="+ languageQueryString;
	document.getElementById("search_title_link").setAttribute("href",search_title_link);

	var search_category_link ="SearchByCategory.html?setLng="+ languageQueryString;
	document.getElementById("search_category_link").setAttribute("href",search_category_link);
    
	var search_tag_link ="SearchByTag.html?setLng="+ languageQueryString;
	document.getElementById("search_tag_link").setAttribute("href",search_tag_link);
    
	var search_seller_link ="SearchBySellerID.html?setLng="+ languageQueryString;
	document.getElementById("search_seller_link").setAttribute("href",search_seller_link);
    
	var search_item_link ="SearchByItemID.html?setLng="+ languageQueryString;
	document.getElementById("search_item_link").setAttribute("href",search_item_link);
    
	var view_purchases_link ="ViewYourPurchases.html?setLng="+ languageQueryString;
	document.getElementById("view_purchases_link").setAttribute("href",view_purchases_link);
    
	var new_item_link ="ListNewItem.html?setLng="+ languageQueryString;
	document.getElementById("new_item_link").setAttribute("href",new_item_link);
    
	var view_items_link ="ViewYourItems.html?setLng="+ languageQueryString;
	document.getElementById("view_items_link").setAttribute("href",view_items_link);
    
	var login_link ="login.html?setLng="+ languageQueryString;
	document.getElementById("login_link").setAttribute("href",login_link);
    
};


// For cleaning out any script injection attacks

var regex = /(<([^>]+)>)/ig; // Maybe don't need this

var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };		
  
function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }		  

