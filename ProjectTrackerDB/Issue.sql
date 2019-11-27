CREATE TABLE [dbo].[Issue]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [ProjectID] INT NULL, 
    [Description] NVARCHAR(50) NULL, 
    [Status] NVARCHAR(50) NULL, 
    [DateCreated] DATE NULL, 
    [AssignedTo] NVARCHAR(50) NULL, 
    [Category] NVARCHAR(50) NULL, 
    [Due Date] DATE NULL, 
    [Milestone] NVARCHAR(50) NULL, 
    [Version] NVARCHAR(50) NULL, 
    [Comment] TEXT NULL,
    [Type] NVARCHAR(50) NULL, 
    [Name] NVARCHAR(50) NULL, 
    [Priority] NVARCHAR(50) NULL
)
