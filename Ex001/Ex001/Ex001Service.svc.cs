using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace Ex001
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Ex001Service" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Ex001Service.svc or Ex001Service.svc.cs at the Solution Explorer and start debugging.
    public class Ex001Service : IEx001Service
    {
        public Authentication CallerAuthentication(Credential credential)
        {
            Boolean ok = (credential.IdNumber == "hello" && credential.Pin == "world");
                return new Authentication
                {
                    Input = credential,
                    Ok = ok,
                    Authenticated = DateTime.Now
                };
        }
    }
}
