using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ex001
{
    public class Identity
    {
        public string User { get; set; }
        public string Pass { get; set; }
        public string ServicePanel { get; set; }
    }

    public class Version {
        public string MessageVersion { get; set; }
        public string MessageRevision { get; set; }
    }
    public class EnterpriseHeader
    {
        public Identity Identity { get; set; }
        public Version Version { get; set; }
    }

    public class Credential
    {
        public EnterpriseHeader EnterpriseHeader { get; set; }
        public String IdNumber { get; set; }
        public String Pin { get; set; }
    }


    public class Authentication {
        public Credential Input { get; set; }
        public DateTime Authenticated { get; set; }
        public Boolean Ok { get; set; }
    }
}