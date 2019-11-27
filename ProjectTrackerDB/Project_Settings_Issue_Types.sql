CREATE TABLE [dbo].[Project_Settings_Issue_Types]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [ProjectID] INT NOT NULL, 
    [IssueType] NVARCHAR(10) NOT NULL
)
