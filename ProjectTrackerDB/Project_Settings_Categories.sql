CREATE TABLE [dbo].[Project_Settings_Categories]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [ProjectId] INT NOT NULL, 
    [CategoriesList] NVARCHAR(50) NOT NULL
)
