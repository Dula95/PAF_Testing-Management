$(document).ready(function()
{
	$("#alertSuccess").hide();
	
	$("#alertError").hide();
});

//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide(); 
	
	//Form validation-------------------
	var status = validateTestingForm();
	if (status != true)
	{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	

	// If valid-------------------------
	
	//$("#formDoctor").submit();
	
	
	var type = ($("#hidtestIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
			{
				url : "TestingAPI",
				type : type,
				data : $("#formTesting").serialize(),
				dataType : "text",
				complete : function(response, status) {
					onDoctorSaveComplete(response.responseText, status);
				}
			});
	
	
 });

	


function onTestingSaveComplete(response, status) {
	if (status == "success")
		{
			var resultSet = JSON.parse(response);
			
			if (resultSet.status.trim() == "success")
				{
				$("#alertSuccess").text("Successfully saved.");
				$("#alertSuccess").show();
				
				$("#divTestingGrid").html(resultSet.data);
				}else if (resultSet.status.trim() == "error")
					{
					$("#alertError").text(resultSet.data);
					$("#alertError").show();
					
					}
		}else if (status == "error")
		{
			$("#alertError").text("Error while saving.");
			$("#alertError").show();
		}else
			{
			$("#alertError").text("UnKnown error while saving..");
			$("#alertError").show();
			}
	
		$("#hidtestIDSave").val("");
		$("#formDoctor")[0].reset();
	
}


//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidtestIDSave").val($(this).closest("tr").find('#hidtestIDUpdate').val());
	$("#testName").val($(this).closest("tr").find('td:eq(1)').text());
	$("#tDescription").val($(this).closest("tr").find('td:eq(2)').text());
	$("#tDate").val($(this).closest("tr").find('td:eq(3)').text());
	$("#tTime").val($(this).closest("tr").find('td:eq(4)').text());
	
});

// REMOVE=========================================================
/*$(document).on("click", ".btnRemove", function(event)
		{
			$.ajax(
					{
						url : "TestingAPI",
						type : "DELETE",
						data : "testId=" + $(this).data("id"),
						dataType : "text",
						complete : function(response, status)
						{
							onTestingDeleteComplete(response.responseText, status);
						}
					});
		});

function onTestingDeleteComplete(response, status) {
	if (status == "success")
		{
			var resultSet = JSON.parse(response);
			
			if (resultSet.status.trim() == "success")
				{
				$("#alertSuccess").text("Successfully Delete.");
				$("#alertSuccess").show();
				
				$("#divDoctorGrid").html(resultSet.data);
				}else if (resultSet.status.trim() == "error")
					{
					$("#alertError").text(resultSet.data);
					$("#alertError").show();
					
					}
		}else if (status == "error")
		{
			$("#alertError").text("Error while deleting.");
			$("#alertError").show();
		}else
			{
			$("#alertError").text("UnKnown error while deleting..");
			$("#alertError").show();
			}
	
		$("#hidtestIDSave").val("");
		$("#formTesting")[0].reset();
	
}*/

$(document).on("click", ".btnRemove", function(event) 
		{ 
		$.ajax(
			{ 
				url : "TestingAPI",
				type : "DELETE",
				data : "testId=" + $(this).data("testid"),
				dataType : "text",
				complete : function(response, status)
				{ 
					onTestDeleteComplete(response.responseText, status);  
				}
			});
		}); 
function TestDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divTestingGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}



//CLIENT-MODEL================================================================
function validateTestingForm()
{
	// Name
	if ($("#testName").val().trim() == "")
	{
		return "Insert test name.";
	}
	
	// Description
	if ($("#tDescription").val().trim() == "")
	{
		return "Insert test description.";
	}

	
	// Date
	if ($("#tDate").val().trim() == "")
	{
		return "Insert test date.";
	}
	
	// Time
	if ($("#tTime").val().trim() == "")
	{
		return "Insert test time.";
	}
	
	
	
	return true;
	}
