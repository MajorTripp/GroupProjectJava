<%-- 
    Document   : logout
    Created on : Dec 9, 2023, 6:55:06 PM
    Author     : jerad
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link href="css/jsfcrud.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <h1>You have been logged out!</h1>
        <% session.invalidate(); 
        request.logout();
        %>
        <a href="response.xhtml">Return to login page</a>
    </body>
</html>
