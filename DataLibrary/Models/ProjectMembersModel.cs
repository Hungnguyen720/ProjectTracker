using System;
using System.Collections.Generic;
using System.Text;

namespace DataLibrary.Models
{
    public class ProjectMembersModel
    {
        public int Id { get; set; }
        public int ProjectID { get; set; }
        public List<UserModel> ProjectMembers {get; set; } = new List<UserModel>();
    }
}
