CREATE TABLE [dbo].[Project_Settings]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [ProjectID] INT NOT NULL, 
    [Name] NVARCHAR(50) NOT NULL, 
    [DateCreated] DATE NOT NULL, 
    [IsActive] BIT NOT NULL, 
    [Version] NVARCHAR(50) NOT NULL, 
    [Git] NVARCHAR(50) NOT NULL, 
    [IsArchived] BIT NOT NULL
)
