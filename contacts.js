
        function findContact(dname){
            if (window.XMLHttpRequest){xmlfile=new XMLHttpRequest();}
            else{xmlfile=new ActiveXObject("Microsoft.XMLHTTP");}
            xmlfile.open("GET",dname,true);
            xmlfile.send();
            return xmlfile.responseXML;
        } 
        function searchXML(){
            xmlDoc=findContact("contactsDB.xml");
            x=xmlDoc.getElementsByTagName("FirstName");
            input = document.getElementById("first").value;
            size = input.length;
            if (input == null || input == "")
            {
                document.getElementById("results").innerHTML= "Please enter a character or name!";
                return false;
            }
            for (i=0;i<x.length;i++)
            {
                startString = firstname.substring(0,size);
                if (startString.toLowerCase() == input.toLowerCase())
                {
                           firstname = xmlDoc.getElementsByTagName("FirstName")[i].childNodes[0].nodeValue;
                           lastname = xmlDoc.getElementsByTagName("LastName")[i].childNodes[0].nodeValue;
                           phone = xmlDoc.getElementsByTagName("Phone")[i].childNodes[0].nodeValue;
                           id = xmlDoc.getElementsByTagName("ID")[i].childNodes[0].nodeValue;
                           city = xmlDoc.getElementsByTagName("City")[i].childNodes[0].nodeValue;
                    divText = "<h1>The contact details are:</h1><br /><table border=1><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Street</th><th>City</th><th>State</th><th>Postcode</th></tr>" + "<tr><td>" + firstname + "</td><td>" + lastname + "</td><td>" + phone + "</td><td>" + street + "</td><td>" + city + "</td><td>" + state + "</td><td>" + postcode + "</td></tr>" + "</table>";
                    break;
                }
                else
                {
                    divText = "<h2>The contact does not exist.</h2>";
                }
            }
            document.getElementById("results").innerHTML= divText;
        }