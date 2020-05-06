<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import = "model.Testing" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Testing Details</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/testing.js"></script>
</head>
<body>
<div class="container">  
		<div class="row">
			<div class="col-6">
				<h1>Testing Details</h1>
				<p>Please fill in this form to testing details.</p>
				<form id="formTesting" name="formTesting" style="font-weight: bold">
					Test Name: 
					<input id="testName" name="testName" type="text" placeholder="Enter the test name" class="form-control form-control-sm" >
					<br> Test Description:
					<input id="tDescription" name="tDescription" type="text" placeholder="Enter the test description" class="form-control form-control-sm"> 
					<br> Test Date: 
					<input id="tDate" name="tDate" type="text" placeholder="Enter the test date" class="form-control form-control-sm"> 
					<br> Test Time: 
					<input id="tTime" name="tTime" type="text" placeholder="Enter the test time" class="form-control form-control-sm">
					<br> 
					<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
					<input type="hidden" id="hidtestIDSave" name="hidtestIDSave" value="">
				</form>
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>
				<div id="divTestingGrid">
					<%
					Testing testObj = new Testing();
					out.print(testObj.readTesting());
					%>
				</div>
			</div>
		</div>
	</div>
</body>
</html>