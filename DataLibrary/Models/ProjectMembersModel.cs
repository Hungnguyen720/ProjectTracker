using System;
using System.Collections.Generic;
using System.Text;

namespace DataLibrary.Models
{
    public class ProjectMembersModel
    {
        public int Id { get; set; }
        public int ProjectID { get; set; }
        public List<User> ProjectMembers {get; set; } = new List<User>();
    }
}
