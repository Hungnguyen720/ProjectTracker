using System;
using System.Collections.Generic;
using System.Text;

namespace DataLibrary.Models
{
    public class ProjectSettings
    {
        public int Id;
        public int ProjectId;
        public string Name;
        public DateTime DateCreated;
        public int IsActive;
        public decimal Version;
        public string GitRepo;
        public int isArchived;
    }
}
